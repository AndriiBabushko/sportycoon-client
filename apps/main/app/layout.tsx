"use client";

import "ui/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { TailwindIndicator, cn, TrainingNav, TRAINING_NAV_HEIGHT } from "ui";
import React, { ReactNode } from "react";
import { Providers } from "./providers";
import { Container, Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const currentRoute = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/white-alpha.css"*/}
        {/*/>*/}
        <title>Sportycoon</title>
      </head>
      <body className={cn("min-h-screen")}>
        <Providers>
          <TrainingNav currentRoute={currentRoute} />
          <Box height={`${TRAINING_NAV_HEIGHT}px`} />
          <Container size={"4"} className={cn(`pt-[]`)}>
            {children}
          </Container>
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}
