"use client";

import { FC } from "react";

interface NavbarProps {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Navbar: FC<NavbarProps> = ({
  primary = false,
  label = "Boop",
  size = "small",
}) => {
  return (
    <button
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
};
