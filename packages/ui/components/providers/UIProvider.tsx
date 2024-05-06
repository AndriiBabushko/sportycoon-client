"use client";

import * as React from "react";
import { ReactNode } from "react";
import { COLORS } from "@/lib/colors";
import { Theme } from "@radix-ui/themes";
//
// const theme = extendTheme({
//   colors: {
//     sportycoon: {
//       100: COLORS.WHITE_GRAY,
//       300: COLORS.LIGHT_GRAY,
//       500: COLORS.GRAY,
//       600: COLORS.MEDIUM_GRAY,
//       700: COLORS.DARK_GRAY,
//     },
//   },+
// });

export function UIProvider({ children }: { children: ReactNode }) {
  return <Theme appearance={"dark"}>{children}</Theme>;
}
