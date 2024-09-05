"use client";

import * as React from "react";
import type { JSX } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps {
  children: JSX.Element;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
}
