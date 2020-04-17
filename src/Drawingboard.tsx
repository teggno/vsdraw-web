import React, { ReactNode, useEffect, DOMElement } from "react";
import "./Drawingboard.css";

export default function Drawingboard({
  sketchField,
  toolbar,
  output,
  sidebar,
  canvasSize,
}: DrawingboardProps) {
  const listener = (e: TouchEvent) => {
    if (e.touches.length !== 2) return;

    console.log("Two fingers");
  };
  useEffect(() => {
    return () => {
      (window.document.getElementsByClassName(
        "sketchFieldContainer"
      )[0] as any).addEventListener("mousedown", listener);
    };
  });

  return (
    <>
      <div>{toolbar}</div>
      <div className="bottomToolbar">
        {canvasSize}
        {output}
      </div>
      <div className="sideAndSketch">
        {sidebar}
        <div className="sketchFieldContainer">{sketchField}</div>
      </div>
    </>
  );
}

interface DrawingboardProps {
  sketchField: ReactNode;
  toolbar: ReactNode;
  output: ReactNode;
  sidebar: ReactNode;
  canvasSize: ReactNode;
}
