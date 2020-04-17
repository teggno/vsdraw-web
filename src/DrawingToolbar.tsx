import React from "react";
import { Toolbar, ToolbarToggleButton } from "./Toolbar";
const { Tools } = require("react-sketch");

export default function DrawingToolbar({
  toolChange,
  tool,
}: DrawingToolbarProps) {
  return (
    <Toolbar>
      <ToolbarToggleButton
        on={tool === Tools.Select}
        image="./icons/pointer.svg"
        title="Select"
        onClick={() => toolChange(Tools.Select)}
      />
      <ToolbarToggleButton
        on={tool === Tools.Pan}
        image="./icons/pan_tool-24px.svg"
        title="Pan"
        onClick={() => toolChange(Tools.Pan)}
      />
      <ToolbarToggleButton
        on={tool === Tools.Pencil}
        image="./icons/create-24px.svg"
        title="Pencil"
        onClick={() => toolChange(Tools.Pencil)}
      />
      <ToolbarToggleButton
        on={tool === Tools.Line}
        image="./icons/line.svg"
        title="Line"
        onClick={() => toolChange(Tools.Line)}
      />
      <ToolbarToggleButton
        on={tool === Tools.Circle}
        image="./icons/circle.svg"
        title="Circle"
        onClick={() => toolChange(Tools.Circle)}
      />
      <ToolbarToggleButton
        on={tool === Tools.Rectangle}
        image="./icons/rectangle.svg"
        title="Rectangle"
        onClick={() => toolChange(Tools.Rectangle)}
      />
    </Toolbar>
  );
}

interface DrawingToolbarProps {
  toolChange: (tool: string) => void;
  tool: string;
}
