import ColorChooser, { ColorChooserProps } from "./ColorChooser";
import React from "react";

export default function Sidebar({ color }: SidebarProps) {
  return (
    <div>
      <ColorChooser {...color} />
    </div>
  );
}

interface SidebarProps {
  color: ColorChooserProps;
}
