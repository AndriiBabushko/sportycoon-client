"use client";

import { Icons, Button } from "@sportycoon/ui";
import type { JSX } from "react";
import { useColorMode } from "@chakra-ui/react";

export default function ThemeToggle(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Button onClick={toggleColorMode} variant="transparent">
      {isDark ? <Icons.Moon /> : <Icons.Sun />}
    </Button>
  );
}
