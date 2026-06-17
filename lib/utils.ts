import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Localized, Locale } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value.en;
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}
