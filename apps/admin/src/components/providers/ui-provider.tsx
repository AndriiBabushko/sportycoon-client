"use client";

import * as React from "react";
import type { JSX, ReactNode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "@admin/components/ui/color-mode";

interface UIProviderProps {
  children: JSX.Element | ReactNode;
}

export function UIProvider({ children }: UIProviderProps): JSX.Element {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider defaultTheme="dark">{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
