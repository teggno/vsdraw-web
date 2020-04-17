import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { loadImageData, saveToCloud } from "./Api";
import LoadingIndicator from "./LoadingIndicator";
import Drawingboard from "./Drawingboard";
import DrawingToolbar from "./DrawingToolbar";
import Sidebar, { transparent } from "./Sidebar";
import OutputToolbar from "./OutputToolbar";
import { dataUriToBlob } from "./utils";
import { copyStringToClipboard } from "./clipboard";
import useHashParams from "./useHashParams";
import vsCodeApiFactory, { ImgeUrlSaver } from "./vsCodeApi";
import CanvasSize from "./CanvasSize";
const { SketchField, Tools } = require("react-sketch");

export default function App() {
  const [{ saveRemoteImageUrl, imageUrl }, setHashParams] = useHashParams();
  const sketchFieldRef = useRef();
  const [imageData, setImageData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");
  const [lineColor, setLineColor] = useState("#000000");
  const [fillColor, setFillColor] = useState(transparent);
  const [tool, setTool] = useState(Tools.Pencil);
  const [size, setSize] = useState({ width: 500, height: 500 });

  const vsCodeApi = saveRemoteImageUrl
    ? vsCodeApiFactory({ saveRemoteImageUrl })
    : null;
  const canSave = vsCodeApi !== null && imageUrl !== undefined;

  useEffect(() => {
    if (!imageUrl) {
      setImageData(null);
      return;
    }
    setLoading(true);
    loadImageData(extractImageId(imageUrl))
      .then(setImageData)
      .finally(() => setLoading(false));
  }, [imageUrl]);
  const keyListener = (e: KeyboardEvent) => {
    console.log("FPPP", e.code, e.key);
    if (e.code === "Delete" || e.key === "Backspace") {
      deleteSelected();
      e.preventDefault();
    } else if (toolsByKey[e.key]) {
      setTool(toolsByKey[e.key]);
      e.preventDefault();
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", keyListener);
    return () => {
      window.removeEventListener("keyup", keyListener);
    };
  });

  function deleteSelected() {
    (sketchFieldRef.current as any)?.removeSelected();
  }

  return (
    <div className="appContainer">
      {isLoading ? <LoadingIndicator text={loadingText} /> : null}
      <header>
        <h1>VSDRAW</h1>
      </header>
      <main>
        <Drawingboard
          toolbar={
            <DrawingToolbar
              toolChange={setTool}
              tool={tool}
              onDelete={deleteSelected}
            />
          }
          sketchField={
            <SketchField
              width={size.width}
              height={size.height}
              tool={tool}
              lineColor={lineColor}
              fillColor={fillColor}
              value={imageData}
              ref={sketchFieldRef}
              className="sketchField"
              lineWidth={3}
            />
          }
          sidebar={
            <Sidebar
              lineColor={{ color: lineColor, colorChanged: setLineColor }}
              fillColor={{ color: fillColor, colorChanged: setFillColor }}
            />
          }
          canvasSize={<CanvasSize size={size} onChange={setSize} />}
          output={
            <OutputToolbar
              onMarkdownLinkToClipoard={() => {
                withLoading("Saving Image...", () =>
                  markdownToClipboardClicked(sketchFieldRef.current)
                );
              }}
              onSave={() => {
                if (!canSave) return;
                withLoading("Saving Image...", () =>
                  saveClicked(
                    sketchFieldRef.current,
                    vsCodeApi!.saveInVsCode,
                    imageUrl!
                  ).then((newImageUrl) =>
                    setHashParams({ imageUrl: newImageUrl })
                  )
                );
              }}
              canSave={canSave}
            />
          }
        />
      </main>
    </div>
  );

  function withLoading<T>(text: string, longRunning: () => Promise<T>) {
    setLoadingText(text);
    setLoading(true);
    return longRunning().finally(() => setLoading(false));
  }
}

function extractImageId(vsdrawImageLink: string) {
  const parts = vsdrawImageLink.split("/");
  return parts[parts.length - 1].split(".")[0];
}

async function markdownToClipboardClicked(sketchField: any) {
  const image = dataUriToBlob(sketchField.toDataURL());
  const imageData = sketchField.toJSON();
  const { imageUrl } = await saveToCloud(image, JSON.stringify(imageData));
  const markdown = `![alt text](${imageUrl})`;
  copyStringToClipboard(markdown);
}

async function saveClicked(
  sketchField: any,
  saveInVsCode: ImgeUrlSaver,
  oldImageUrl: string
) {
  const image = dataUriToBlob(sketchField.toDataURL());
  const imageData = sketchField.toJSON();
  const { imageUrl } = await saveToCloud(image, JSON.stringify(imageData));
  await saveInVsCode(oldImageUrl, imageUrl);
  return imageUrl;
}

const toolsByKey: any = {
  s: Tools.Select,
  m: Tools.Pan,
  p: Tools.Pencil,
  l: Tools.Line,
  c: Tools.Circle,
  r: Tools.Rectangle,
};
