"use client";

import { FC } from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button: FC<ButtonProps> = ({
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
