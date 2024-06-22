import "@sportycoon/ui/styles/globals.css";
import { TailwindIndicator, cn, UIProvider } from "@sportycoon/ui";
import APIProvider from "@sportycoon/api";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

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
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <APIProvider>
            <UIProvider>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
              </div>
            </UIProvider>
          </APIProvider>
        </NextIntlClientProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
