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
import { RootLayout } from "@admin/components/layouts";

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
      {/*<Head>*/}
      {/*  <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />*/}
      {/*  <link*/}
      {/*    rel={"preconnect"}*/}
      {/*    href={"https://fonts.gstatic.com"}*/}
      {/*    crossOrigin={"anonymous"}*/}
      {/*  />*/}
      {/*  <link*/}
      {/*    href={"https://fonts.googleapis.com/earlyaccess/nicomoji.css"}*/}
      {/*    rel="stylesheet"*/}
      {/*  />*/}
      {/*</Head>*/}
      <body className={cn("min-h-screen", "bg-background", "antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <UIProvider>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">
                  <RootLayout>{children}</RootLayout>
                </div>
              </div>
            </UIProvider>
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
