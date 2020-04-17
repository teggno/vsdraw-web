import ColorChooser, { ColorChooserProps } from "./ColorChooser";
import React, { useState } from "react";
import "./Sidebar.css";

export const transparent = "transparent";
export default function Sidebar({ lineColor, fillColor }: SidebarProps) {
  const [fcolor, setFillColor] = useState(
    fillColor.color === transparent ? "black" : fillColor.color
  );
  return (
    <div className="sidebar">
      <ColorChooser {...lineColor} label="Line" />
      <div className="colorChooser">
        <label>
          <div style={{ display: "flex" }}>
            Fill{" "}
            <input
              type="checkbox"
              style={{
                display: "inline-block",
                width: "1.5rem",
                height: "1.5rem",
              }}
              checked={fillColor.color !== transparent}
              onChange={(e) => {
                console.log("FOOO", e.target.value);
                fillColor.colorChanged(e.target.checked ? fcolor : transparent);
              }}
            />
          </div>
          <input
            type="color"
            value={fillColor.color}
            onChange={(e) => {
              setFillColor(e.target.value);
              fillColor.colorChanged(e.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
}

interface SidebarProps {
  lineColor: ColorChooserProps;
  fillColor: ColorChooserProps;
}
