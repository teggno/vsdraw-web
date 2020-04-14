import React, { useState } from "react";
import "./Drawingboard.css";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import Output from "./Output";
const { SketchField, Tools } = require("react-sketch");

export default function Drawingboard() {
  const [tool, setTool] = useState(Tools.Pencil);
  const [color, setColor] = useState("#FF0000");
  return (
    <div className="drawingboard">
      <div>
        <Toolbar toolChange={(newTool) => setTool(newTool)} />
        <Output />
      </div>
      <div className="sideAndSketch">
        <Sidebar color={{ color, colorChanged: setColor }} />
        <SketchField
          width="1024px"
          height="768px"
          tool={tool}
          lineColor={color}
          className="sketchField"
          lineWidth={3}
        />
      </div>
    </div>
  );
}
