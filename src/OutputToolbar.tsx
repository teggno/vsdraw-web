import React from "react";
import { Toolbar, ToolbarButton } from "./Toolbar";

export default function OutputToolbar({
  onMarkdownLinkToClipoard,
  onSave,
  canSave,
}: OutputToolbarProps) {
  return (
    <Toolbar>
      <ToolbarButton
        text="MD"
        title="Copy as Markdown image link to clipboard"
        onClick={onMarkdownLinkToClipoard}
        image="./icons/file_copy-24px.svg"
      />
      {canSave ? (
        <ToolbarButton text="Save" title="Save" onClick={onSave} />
      ) : null}
    </Toolbar>
  );
}

interface OutputToolbarProps {
  onMarkdownLinkToClipoard: () => void;
  onSave: () => void;
  canSave: boolean;
}
