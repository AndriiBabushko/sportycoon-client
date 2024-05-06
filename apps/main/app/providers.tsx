import React, { ReactNode } from "react";
import { UIProvider } from "@/components/providers";

export function Providers({ children }: { children: ReactNode }) {
  return <UIProvider>{children}</UIProvider>;
}
