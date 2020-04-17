import React from "react";

export default function ColorChooser({
  color,
  colorChanged,
  label,
}: ColorChooserProps & { label: string }) {
  return (
    <div className="colorChooser">
      <label>
        <div>{label}</div>
        <input
          type="color"
          value={color}
          onChange={(e) => colorChanged(e.target.value)}
        />
      </label>
    </div>
  );
}

export interface ColorChooserProps {
  color: string;
  colorChanged: (color: string) => void;
}
