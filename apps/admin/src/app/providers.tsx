"use client";

import type { ReactNode, JSX } from "react";
import APIProvider from "@sportycoon/api";
import { TailwindIndicator, ToastContainer } from "@sportycoon/ui";
import { UIProvider } from "@admin/components/providers";

interface ProvidersProps {
  children: JSX.Element | ReactNode;
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <APIProvider>
      <UIProvider>
        {children}
        <ToastContainer />
        <TailwindIndicator
          isProduction={process.env.NODE_ENV === "production"}
        />
      </UIProvider>
    </APIProvider>
  );
}
