import "@sportycoon/ui/styles/globals.css";
import { fonts } from "@sportycoon/fonts";
import type { JSX, ReactNode } from "react";
import { cookies } from "next/headers";
import type { ColorMode } from "@chakra-ui/react";
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
  const cookiesStore = cookies();
  const colorMode = (cookiesStore.get("chakra-ui-color-mode")?.value ||
    "dark") as ColorMode;

  return (
    <html
      className={`${fonts.montserrat.variable} ${fonts.nicoMoji.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body>
        <Providers colorMode={colorMode}>{children}</Providers>
      </body>
    </html>
  );
}
