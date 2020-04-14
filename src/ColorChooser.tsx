import React from "react";

export default function ColorChooser({
  color,
  colorChanged,
}: ColorChooserProps) {
  return (
    <div>
      <div>Line</div>
      <input
        type="color"
        value={color}
        onChange={(e) => colorChanged(e.target.value)}
      />
    </div>
  );
}

export interface ColorChooserProps {
  color: string;
  colorChanged: (color: string) => void;
}
