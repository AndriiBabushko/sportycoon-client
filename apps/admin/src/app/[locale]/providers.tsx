"use client";

import type { ReactNode, JSX } from "react";
import type { AbstractIntlMessages } from "@sportycoon/locales";
import { NextIntlClientProvider } from "@sportycoon/locales";

interface ProvidersProps {
  children: JSX.Element | ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export function Providers({
  messages,
  children,
  locale,
}: ProvidersProps): JSX.Element {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
