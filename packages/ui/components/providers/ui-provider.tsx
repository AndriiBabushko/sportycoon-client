"use client";

import * as React from "react";
import type { JSX } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { ThemeProvider } from "./theme-provider";

interface UIProviderProps {
  children: JSX.Element;
}

export function UIProvider({ children }: UIProviderProps): JSX.Element {
  return (
    <ThemeProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
