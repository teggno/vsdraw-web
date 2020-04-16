import React, { ReactNode } from "react";
import "./Drawingboard.css";

export default function Drawingboard({
  sketchField,
  toolbar,
  output,
  sidebar,
}: DrawingboardProps) {
  return (
    <div className="drawingboard">
      <div>
        {toolbar}
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
}
