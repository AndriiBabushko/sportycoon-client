"use client";

import * as React from "react";
import { FC, ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface UIProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<UIProviderProps> = ({ children }) => {
  return (
    <NextThemeProvider
      attribute={"class"}
      defaultTheme={"dark"}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
};
