import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LayoutShell } from "@/components/public/layout-shell";
import { isLocale, locales } from "@/lib/locales";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LayoutShell locale={locale as Locale}>{children}</LayoutShell>
    </NextIntlClientProvider>
  );
}
