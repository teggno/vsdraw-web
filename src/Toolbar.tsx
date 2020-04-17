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
    <button
      className="toolbarButton"
      onClick={onClick}
      title={title || text}
      type="button"
    >
      {text}
    </button>
  );
}

export function ToolbarButton({
  image,
  onClick,
  title,
  text,
  className,
}: ToolbarButtonProps) {
  return (
    <button
      className={`toolbarButton${image ? " toolbarImageButton" : ""}${
        text ? " toolbarTextButton" : ""
      }${className ? " " + className : ""}`}
      type="button"
      onClick={onClick}
      title={title}
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
      }}
    >
      {text || null}
    </button>
  );
}

export function ToolbarToggleButton(
  props: ToolbarButtonProps & { on: boolean }
) {
  return <ToolbarButton className={props.on ? "on" : ""} {...props} />;
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

interface ToolbarButtonProps {
  onClick: () => void;
  image?: string;
  title?: string;
  text?: string;
  className?: string;
}
