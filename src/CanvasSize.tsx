import React from "react";
import "./CanvasSize.css";

export default function CanvasSize({
  size,
  onChange,
}: {
  size: Size;
  onChange: (size: Size) => void;
}) {
  return (
    <div className="canvasSize">
      <DimensionInput
        label="Width"
        value={size.width}
        onChange={(value) =>
          onChange(Object.assign({}, size, { width: value }))
        }
      />
      <DimensionInput
        label="Height"
        value={size.height}
        onChange={(value) =>
          onChange(Object.assign({}, size, { height: value }))
        }
      />
    </div>
  );
}

interface Size {
  width: number;
  height: number;
}

function DimensionInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="dimensionInput">
      <span className="dimensionInputLabel">{label}</span>
      <input
        type="number"
        placeholder="Height"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </label>
  );
}
