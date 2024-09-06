import type { ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
