import "@sportycoon/ui/styles/globals.css";
import { fonts } from "@sportycoon/fonts";
import type { JSX, ReactNode } from "react";
import { Providers } from "./providers";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function Layout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>): JSX.Element {
  return (
    <html
      className={`${fonts.montserrat.variable} ${fonts.nicoMoji.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
