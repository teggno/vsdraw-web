import React from "react";
import "./Output.css";

export default function Output({ onMarkdownLinkToClipoard }: OutputProps) {
  return (
    <ul className="output">
      <li>
        <button
          title="Markdown image link to clipboard"
          onClick={onMarkdownLinkToClipoard}
        >
          MD
        </button>
      </li>
    </ul>
  );
}

interface OutputProps {
  onMarkdownLinkToClipoard: () => void;
}
