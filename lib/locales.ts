import type { Locale } from "@/lib/types";

export const locales = ["en", "ar"] as const satisfies Locale[];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ar";
}

export function dir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function localeHref(locale: Locale, path = "/") {
  const cleanPath = path === "/" ? "" : path.replace(/^\/(en|ar)/, "");
  return `/${locale}${cleanPath}`;
}
