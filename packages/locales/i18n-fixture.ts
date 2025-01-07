import { createI18nFixture } from "playwright-i18next-fixture";
import i18nEN from "./translates/en.json";
import i18nUA from "./translates/ua.json";

export const i18nFixture = createI18nFixture({
  options: {
    lng: "en",
    resources: {
      en: {
        translation: i18nEN,
      },
      ua: {
        translation: i18nUA,
      },
    },
  },
  // Fetch translations in every test or fetch once
  // Default: true
  cache: true,
  // Run as auto fixture to be available through all tests by getI18nInstance()
  // Default: true
  auto: true,
});
