"use client";

import { useTheme } from "next-themes";
import type { JSX } from "react";
import { Button } from "@/components/common";
import { Icons } from "@/components/ui/icons";

export function ThemeToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      buttonStyle="ghost-primary"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <>
        <Icons.Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icons.Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </>
    </Button>
  );
}
