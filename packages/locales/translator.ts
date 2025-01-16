import { createTranslator } from "next-intl";
import enMessages from "./translates/en.json";
import uaMessages from "./translates/ua.json";

export function getTranslator(locale: string) {
  const messages = locale === "ua" ? uaMessages : enMessages;

  return createTranslator({
    locale,
    messages,
  });
}
