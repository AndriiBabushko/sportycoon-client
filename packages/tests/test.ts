import { test as base } from "@playwright/test";
import { i18nFixture } from "@sportycoon/locales";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- i18nFixture is a valid fixture
export const test = base.extend(i18nFixture).extend({
  i18n: async ({ i18n, locale }, use) => {
    if (locale === "ua") {
      i18n.changeLanguage("ua");
      await use(i18n);
    } else {
      i18n.changeLanguage("en");
      await use(i18n);
    }
  },
});
