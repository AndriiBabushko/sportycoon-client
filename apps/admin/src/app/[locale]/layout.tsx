import type { JSX, ReactNode } from "react";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale, routing } from "@sportycoon/locales";
import { Providers } from "./providers";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function Layout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>): Promise<JSX.Element> {
  const messages = await getMessages();

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <Suspense fallback={<>Something</>}>
      <Providers locale={locale} messages={messages}>
        {children}
      </Providers>
    </Suspense>
  );
}
