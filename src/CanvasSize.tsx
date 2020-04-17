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
        value={size.width}
        onChange={(value) =>
          onChange(Object.assign({}, size, { width: value }))
        }
      />
      {" x "}
      <DimensionInput
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
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="dimensionInput">
      <input
        type="number"
        placeholder="Height"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </label>
  );
}
