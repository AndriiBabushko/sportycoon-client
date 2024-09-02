"use client";

import * as React from "react";
import type { JSX, ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface UIProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: UIProviderProps): JSX.Element {
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
