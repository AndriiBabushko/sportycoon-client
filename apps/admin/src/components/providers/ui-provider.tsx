"use client";

import * as React from "react";
import type { JSX, ReactNode } from "react";
import type { ColorMode } from "@chakra-ui/react";
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
  extendTheme,
} from "@chakra-ui/react";

interface UIProviderProps {
  children: JSX.Element | ReactNode;
  colorMode?: ColorMode;
}

export function UIProvider({
  children,
  colorMode,
}: UIProviderProps): JSX.Element {
  const theme = extendTheme({
    config: {
      initialColorMode: colorMode || "system",
      useSystemColorMode: false,
    },
  });

  return (
    <>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
        type="cookie"
      />
      <ChakraProvider
        colorModeManager={cookieStorageManager}
        resetCSS
        theme={theme}
      >
        {children}
      </ChakraProvider>
    </>
  );
}
