import React from "react";
import "./Toolbar.css";

export default function Toolbar({ toolChange }: ToolbarProps) {
  return (
    <ul className="toolbar">
      <ToolbarItem>
        <ToolbarTextButton text="Select" onClick={() => toolChange("select")} />
      </ToolbarItem>
      <ToolbarItem>
        <ToolbarTextButton text="Pencil" onClick={() => toolChange("pencil")} />
      </ToolbarItem>
      <ToolbarItem>
        <ToolbarTextButton
          text="Rectangle"
          onClick={() => toolChange("rectangle")}
        />
      </ToolbarItem>
    </ul>
  );
}

interface ToolbarProps {
  toolChange: (tool: string) => void;
}

function ToolbarTextButton({ text, onClick }: ToolbarButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

function ToolbarItem(props: any) {
  return <li className="toolbarItem">{React.Children.only(props.children)}</li>;
}

interface ToolbarButtonProps {
  onClick: () => void;
  text?: string;
}
