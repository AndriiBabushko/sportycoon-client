import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers";

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
