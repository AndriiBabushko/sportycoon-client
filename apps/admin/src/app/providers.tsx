"use client";

import type { ReactNode, JSX } from "react";
import APIProvider from "@sportycoon/api";
import { UIProvider } from "@ui/components/providers";
import type { ColorMode } from "@sportycoon/ui";
import { TailwindIndicator, ToastContainer } from "@sportycoon/ui";

interface ProvidersProps {
  children: JSX.Element | ReactNode;
  colorMode?: ColorMode;
}

export function Providers({
  colorMode,
  children,
}: ProvidersProps): JSX.Element {
  return (
    <APIProvider>
      <UIProvider colorMode={colorMode}>
        {children}
        <ToastContainer />
        <TailwindIndicator
          isProduction={process.env.NODE_ENV === "production"}
        />
      </UIProvider>
    </APIProvider>
  );
}
