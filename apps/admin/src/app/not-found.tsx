import { NotFoundContent } from "./components";
import { cookies } from "next/headers";
import { COOKIE_NAMES } from "@sportycoon/ui/lib";

export default function NotFound() {
  const locale = cookies().get(COOKIE_NAMES.LOCALE)?.value || "en";

  const backToHome =
    locale === "ua" ? "Повернутися на головну" : "Back to home";
  const pageNotFound =
    locale === "ua" ? "Сторінку не знайдено" : "Page not found";

  return (
    <NotFoundContent
      locale={locale}
      backToHome={backToHome}
      pageNotFound={pageNotFound}
    />
  );
}
