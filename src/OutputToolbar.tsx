import React from "react";
import { Toolbar, ToolbarTextButton } from "./Toolbar";

export default function OutputToolbar({
  onMarkdownLinkToClipoard,
  onSave,
  canSave,
}: OutputToolbarProps) {
  return (
    <Toolbar>
      <ToolbarTextButton
        text="MD"
        title="Markdown image link to clipboard"
        onClick={onMarkdownLinkToClipoard}
      />
      {canSave ? (
        <ToolbarTextButton text="Save" title="Save" onClick={onSave} />
      ) : null}
    </Toolbar>
  );
}

interface OutputToolbarProps {
  onMarkdownLinkToClipoard: () => void;
  onSave: () => void;
  canSave: boolean;
}
