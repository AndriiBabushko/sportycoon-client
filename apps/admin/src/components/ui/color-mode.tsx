"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import type { IconButtonProps } from "@chakra-ui/react";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider, useTheme } from "next-themes";
import * as React from "react";
import { Icons } from "@sportycoon/ui";
import type { JSX } from "react";

export type ColorModeProviderProps = ThemeProviderProps;

export function ColorModeProvider(props: ColorModeProviderProps): JSX.Element {
  return <ThemeProvider disableTransitionOnChange {...props} />;
}

export function useColorMode(): {
  colorMode: string | undefined;
  setColorMode: (theme: "dark" | "light") => void;
  toggleColorMode: () => void;
} {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleColorMode = (): void => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}

export function ColorModeIcon(): JSX.Element {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? <Icons.Sun /> : <Icons.Moon />;
}

type ColorModeButtonProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        ref={ref}
        size="sm"
        variant="ghost"
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});
