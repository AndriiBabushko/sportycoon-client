"use client";

import type { JSX } from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { Icons } from "./icons";

export function ThemeToggle(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Button onClick={toggleColorMode} position="relative">
      <Icons.Sun
        className={`transition-all duration-300 ease-in-out ${
          isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Icons.Moon
        className={`absolute transition-all duration-300 ease-in-out ${
          isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </Button>
  );
}
