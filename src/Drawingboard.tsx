import React, { ReactNode } from "react";
import "./Drawingboard.css";

export default function Drawingboard({
  sketchField,
  toolbar,
  output,
  sidebar,
  canvasSize,
}: DrawingboardProps) {
  return (
    <div className="drawingboard">
      <div>{toolbar}</div>
      <div className="bottomToolbar">
        {canvasSize}
        {output}
      </div>
      <div className="sideAndSketch">
        {sidebar}
        {sketchField}
      </div>
    </div>
  );
}

interface DrawingboardProps {
  sketchField: ReactNode;
  toolbar: ReactNode;
  output: ReactNode;
  sidebar: ReactNode;
  canvasSize: ReactNode;
}
