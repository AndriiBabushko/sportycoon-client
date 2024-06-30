"use client";

import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"light"}
      enableSystem
      disableTransitionOnChange
    >
      <ChakraProvider>{children}</ChakraProvider>
    </ThemeProvider>
  );
};
