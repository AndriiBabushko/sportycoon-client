"use client";

import * as React from "react";
import { ReactNode } from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export function UIProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"light"}
      enableSystem
      disableTransitionOnChange
    >
      <Theme appearance={"light"}>{children}</Theme>
    </ThemeProvider>
  );
}
