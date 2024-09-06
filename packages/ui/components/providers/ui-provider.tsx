"use client";

import * as React from "react";
import type { JSX, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { ThemeProvider } from "./theme-provider";

interface UIProviderProps {
  children: JSX.Element | ReactNode;
}

export function UIProvider({ children }: UIProviderProps): JSX.Element {
  return (
    <ThemeProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
