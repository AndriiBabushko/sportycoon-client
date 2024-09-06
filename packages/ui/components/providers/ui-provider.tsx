"use client";

import * as React from "react";
import type { JSX, ReactNode } from "react";
import type { ColorMode } from "@chakra-ui/react";
import {
  extendTheme,
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

interface UIProviderProps {
  children: JSX.Element | ReactNode;
  colorMode?: ColorMode;
}

export function UIProvider({
  colorMode,
  children,
}: UIProviderProps): JSX.Element {
  const theme = extendTheme({
    config: {
      initialColorMode: colorMode || "system",
      useSystemColorMode: true,
    },
  });

  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={colorMode} type="cookie" />
      <ChakraProvider
        colorModeManager={cookieStorageManager}
        resetCSS
        theme={theme}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
