"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/common";
import { Icons } from "@/components/ui";
import { FC } from "react";

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost-primary"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
