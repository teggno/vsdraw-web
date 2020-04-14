import React from "react";
import "./LoadingIndicator.css";

export default function LoadingIndicator({ text }: { text: string }) {
  return (
    <div className="loadingIndicatorOverlay">
      <div className="loadingIndicator">{text}</div>
    </div>
  );
}
