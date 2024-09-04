import "@sportycoon/ui/styles/globals.css";
import { TailwindIndicator, cn, ThemeProvider } from "@sportycoon/ui";
import type { JSX } from "react";
import React from "react";
import type { Metadata } from "next";
import { getMessages, NextIntlClientProvider } from "@sportycoon/locales";
import { fonts } from "@sportycoon/fonts";
import APIProvider from "@sportycoon/api";
import { ChakraProvider } from "@chakra-ui/provider";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: "Sportycoon Dashboard",
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps): Promise<JSX.Element> {
  const messages = await getMessages();

  return (
    <html
      className={`${fonts.montserrat.variable} ${fonts.nicoMoji.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen")}>
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <ThemeProvider>
              <ChakraProvider>
                <div className="relative flex min-h-screen flex-col">
                  <div className="flex-1">{children}</div>
                </div>
              </ChakraProvider>
            </ThemeProvider>
          </APIProvider>
        </NextIntlClientProvider>
        <TailwindIndicator
          isProduction={process.env.NODE_ENV === "production"}
        />
      </body>
    </html>
  );
}
