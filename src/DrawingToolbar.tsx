import React from "react";
import { Toolbar, ToolbarTextButton } from "./Toolbar";

export default function DrawingToolbar({ toolChange }: DrawingToolbarProps) {
  return (
    <Toolbar>
      <ToolbarTextButton text="Select" onClick={() => toolChange("select")} />
      <ToolbarTextButton text="Pencil" onClick={() => toolChange("pencil")} />
      <ToolbarTextButton
        text="Rectangle"
        onClick={() => toolChange("rectangle")}
      />
    </Toolbar>
  );
}

interface DrawingToolbarProps {
  toolChange: (tool: string) => void;
}
