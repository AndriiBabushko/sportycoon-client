import { getMessages } from "@sportycoon/locales";
import type { JSX, ReactNode } from "react";
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

  return (
    <Providers locale={locale} messages={messages}>
      {children}
    </Providers>
  );
}
