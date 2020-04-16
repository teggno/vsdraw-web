import React, { PropsWithChildren } from "react";
import "./Toolbar.css";

export function Toolbar(props: PropsWithChildren<{}>) {
  return (
    <ul className="toolbar">
      {React.Children.map(props.children, (c) => (
        <ToolbarItem>{c}</ToolbarItem>
      ))}
    </ul>
  );
}

export function ToolbarTextButton({
  text,
  onClick,
  title,
}: ToolbarTextButtonProps) {
  return (
    <button onClick={onClick} title={title || text}>
      {text}
    </button>
  );
}

function ToolbarItem(props: PropsWithChildren<{}>) {
  return props.children ? (
    <li className="toolbarItem">{React.Children.only(props.children)}</li>
  ) : null;
}

interface ToolbarTextButtonProps {
  onClick: () => void;
  text: string;
  title?: string;
}
