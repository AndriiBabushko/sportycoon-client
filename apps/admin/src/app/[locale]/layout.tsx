import "@sportycoon/ui/styles/globals.css";
import {
  TailwindIndicator,
  cn,
  ToastContainer,
  UIProvider,
} from "@sportycoon/ui";
import APIProvider from "@sportycoon/api";
import { getMessages, NextIntlClientProvider } from "@sportycoon/locales";
import type { Metadata } from "next";
import { fonts } from "@sportycoon/fonts";
import type { JSX } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function Layout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>): Promise<JSX.Element> {
  const messages = await getMessages();

  return (
    <html
      className={`${fonts.montserrat.variable} ${fonts.nicoMoji.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen", "bg-background", "antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <UIProvider>{children}</UIProvider>
          </APIProvider>
        </NextIntlClientProvider>
        <ToastContainer />
        <TailwindIndicator
          isProduction={process.env.NODE_ENV === "production"}
        />
      </body>
    </html>
  );
}
