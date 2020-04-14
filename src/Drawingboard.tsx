import React, { useState, useRef } from "react";
import "./Drawingboard.css";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import Output from "./Output";
import { saveToCloud } from "./Api";
const { SketchField, Tools } = require("react-sketch");

export default function Drawingboard({
  initialImageData,
  onLoading,
}: {
  initialImageData: any;
  onLoading: (loading: boolean, text?: string) => void;
}) {
  const [tool, setTool] = useState(Tools.Pencil);
  const [color, setColor] = useState("#FF0000");
  const sketchFieldRef = useRef();
  console.log(initialImageData);
  return (
    <div className="drawingboard">
      <div>
        <Toolbar toolChange={(newTool) => setTool(newTool)} />
        <Output
          onMarkdownLinkToClipoard={() => {
            onLoading(true, "Saving image...");
            markdownToClipboardClicked(sketchFieldRef.current).finally(() =>
              onLoading(false)
            );
          }}
        />
      </div>
      <div className="sideAndSketch">
        <Sidebar color={{ color, colorChanged: setColor }} />
        <SketchField
          width="1024px"
          height="768px"
          tool={tool}
          lineColor={color}
          ref={sketchFieldRef}
          value={initialImageData}
          className="sketchField"
          lineWidth={3}
        />
      </div>
    </div>
  );
}

async function markdownToClipboardClicked(sketchField: any) {
  const image = dataUriToBlob(sketchField.toDataURL());
  const imageData = sketchField.toJSON();
  const { imageUrl, imageDataUrl } = await saveToCloud(
    image,
    JSON.stringify(imageData)
  );
  const markdown = `![alt text](${imageUrl})`;
  copyStringToClipboard(markdown);
}

function dataUriToBlob(dataUri: string) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataUri.split(",")[1]);

  // separate out the mime component
  var mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

function copyStringToClipboard(value: string) {
  if (!navigator?.permissions?.query) {
    alert("Probably running Safari which is not supported");
    return;
  }
  (navigator as any).permissions
    .query({ name: "clipboard-write" })
    .then(
      (result: any) => result.state == "granted" || result.state == "prompt"
    )
    .catch(() => true)
    .then((allowed: boolean) => {
      if (!allowed) return;
      navigator.clipboard.writeText(value).then(
        () => {
          alert("Yay, copied to clipboard");
        },
        () => {
          alert("Failed to copy to clipboard");
        }
      );
    });
}
