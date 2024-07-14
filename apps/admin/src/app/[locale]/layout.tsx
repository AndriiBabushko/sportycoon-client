import "@sportycoon/ui/styles/globals.css";
import { TailwindIndicator, cn, ThemeProvider } from "@sportycoon/ui";
import APIProvider from "@sportycoon/api";
import { getMessages, NextIntlClientProvider } from "@sportycoon/locales";
import type { Metadata } from "next";
import { fonts } from "@sportycoon/fonts";

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
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fonts.montserrat.variable} ${fonts.nicoMoji.variable}`}
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
      <body
        className={cn(["min-h-screen bg-background font-sans antialiased"])}
      >
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <ThemeProvider>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
              </div>
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
