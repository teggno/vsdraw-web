import React from "react";
import { Toolbar, ToolbarButton } from "./Toolbar";
const { Tools } = require("react-sketch");

export default function DrawingToolbar({ toolChange }: DrawingToolbarProps) {
  return (
    <Toolbar>
      <ToolbarButton
        image="./icons/pointer.svg"
        title="Select"
        onClick={() => toolChange(Tools.Select)}
      />
      <ToolbarButton
        image="./icons/pan_tool-24px.svg"
        title="Pan"
        onClick={() => toolChange(Tools.Pan)}
      />
      <ToolbarButton
        image="./icons/create-24px.svg"
        title="Pencil"
        onClick={() => toolChange(Tools.Pencil)}
      />
      <ToolbarButton
        image="./icons/line.svg"
        title="Line"
        onClick={() => toolChange(Tools.Line)}
      />
      <ToolbarButton
        image="./icons/circle.svg"
        title="Circle"
        onClick={() => toolChange(Tools.Circle)}
      />
      <ToolbarButton
        image="./icons/rectangle.svg"
        title="Rectangle"
        onClick={() => toolChange(Tools.Rectangle)}
      />
    </Toolbar>
  );
}

interface DrawingToolbarProps {
  toolChange: (tool: string) => void;
}
