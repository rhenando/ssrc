import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

function isSupportedLocale(locale: string | undefined): locale is (typeof routing.locales)[number] {
  return routing.locales.some((supportedLocale) => supportedLocale === locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isSupportedLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
