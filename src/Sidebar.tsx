import ColorChooser, { ColorChooserProps } from "./ColorChooser";
import React from "react";
import "./Sidebar.css";

export default function Sidebar({ color }: SidebarProps) {
  return (
    <div className="sidebar">
      <ColorChooser {...color} />
    </div>
  );
}

interface SidebarProps {
  color: ColorChooserProps;
}
