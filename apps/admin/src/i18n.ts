import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { LOCALES } from "@sportycoon/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as any)) notFound();

  return {
    messages: (await import(`@sportycoon/locales/${locale}.json`)).default,
  };
});
