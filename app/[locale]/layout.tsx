import { notFound } from "next/navigation";
import { LayoutShell } from "@/components/public/layout-shell";
import { isLocale } from "@/lib/locales";
import type { Locale } from "@/lib/types";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LayoutShell locale={locale as Locale}>{children}</LayoutShell>;
}
