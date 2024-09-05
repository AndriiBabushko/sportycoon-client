"use client";

import type { JSX, ReactNode } from "react";

interface RootLayoutProps {
  children: JSX.Element | ReactNode;
}

export function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <>
      <div>
        <p>Navigation bar</p>
      </div>
      {children}
    </>
  );
}
