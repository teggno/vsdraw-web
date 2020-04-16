import React from "react";

export default function ColorChooser({
  color,
  colorChanged,
}: ColorChooserProps) {
  return (
    <div className="colorChooser">
      <div>Color</div>
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
