"use client";

import * as React from "react";
import type { JSX, ReactNode } from "react";
import type { ColorMode, StyleFunctionProps } from "@chakra-ui/react";
import {
  defineStyleConfig,
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
  extendTheme,
} from "@chakra-ui/react";
import { COLORS, Loader } from "@sportycoon/ui";

interface UIProviderProps {
  children: JSX.Element | ReactNode;
  colorMode?: ColorMode;
}

const Input = defineStyleConfig({
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        border: "1px solid",
        borderColor:
          props.colorMode === "dark" ? COLORS.GRAY : COLORS.DARK_GRAY,
        _hover: {
          borderColor:
            props.colorMode === "dark"
              ? COLORS.WHITE_GRAY
              : COLORS.DARKEST_GRAY,
        },
        _focusVisible: {
          borderColor:
            props.colorMode === "dark"
              ? COLORS.WHITE_GRAY
              : COLORS.DARKEST_GRAY,
          boxShadow:
            props.colorMode === "dark"
              ? `0 0 0 1px ${COLORS.DARKEST_GRAY}`
              : `0 0 0 1px ${COLORS.LIGHT_GRAY}`,
        },
      },
    }),
  },
  defaultProps: {
    variant: "outline",
  },
});

const Select = defineStyleConfig({
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        border: "1px solid",
        borderColor:
          props.colorMode === "dark" ? COLORS.GRAY : COLORS.DARK_GRAY,
        _hover: {
          borderColor:
            props.colorMode === "dark"
              ? COLORS.WHITE_GRAY
              : COLORS.DARKEST_GRAY,
        },
        _focusVisible: {
          borderColor:
            props.colorMode === "dark"
              ? COLORS.WHITE_GRAY
              : COLORS.DARKEST_GRAY,
          boxShadow:
            props.colorMode === "dark"
              ? `0 0 0 1px ${COLORS.DARKEST_GRAY}`
              : `0 0 0 1px ${COLORS.LIGHT_GRAY}`,
        },
        color: props.colorMode === "dark" ? COLORS.WHITE : COLORS.BLACK,
      },
    }),
  },
  defaultProps: {
    variant: "outline",
  },
});

export default function UIProvider({
  children,
  colorMode,
}: UIProviderProps): JSX.Element {
  const theme = extendTheme({
    config: {
      initialColorMode: colorMode || "system",
      useSystemColorMode: false,
    },
    components: {
      Input,
      Select,
    },
  });

  return (
    <>
      <Loader />
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
