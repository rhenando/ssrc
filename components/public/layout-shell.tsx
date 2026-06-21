"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contactChannels, navItems } from "@/data/site";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn, t } from "@/lib/utils";

export function LayoutShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const translate = useTranslations("layout");
  const isAr = locale === "ar";
  const switchLocaleHref = (nextLocale: Locale) => localeHref(nextLocale, pathname);

  return (
    <div dir={isAr ? "rtl" : "ltr"} className={cn("min-h-screen bg-white text-text", isAr ? "font-arabic" : "font-body")}>
      <header className="sticky top-0 z-50 border-b-[3px] border-teal bg-navy shadow-nav">
        <div className="mx-auto flex h-[66px] max-w-[1200px] items-center px-5 md:px-10">
          <Link href={localeHref(locale, "/")} className={cn("flex items-center", isAr ? "ml-auto" : "mr-auto")}>
            <Image src="/ssrc.svg" alt="SSRC" width={170} height={54} className="h-[50px] w-auto object-contain" priority />
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={localeHref(locale, item.href)} className="whitespace-nowrap rounded-md px-3 py-2 text-[.9rem] font-medium text-white/80 transition hover:bg-teal/10 hover:text-teal">
                {t(item.labels, locale)}
              </Link>
            ))}
          </nav>

          <Link
            href={localeHref(locale, "/contact")}
            className={cn(
              "hidden rounded-[7px] border-2 border-teal bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-transparent hover:text-teal md:block",
              isAr ? "mr-5" : "ml-5"
            )}
          >
            {translate("contact")}
          </Link>

          <div className={cn("flex items-center gap-1 border-white/20 px-3 text-xs", isAr ? "mr-3 border-r" : "ml-3 border-l")}>
            <Link className={cn(locale === "en" ? "font-bold text-white" : "font-semibold text-white/45")} href={switchLocaleHref("en")}>
              EN
            </Link>
            <span className="text-white/20">|</span>
            <Link className={cn(locale === "ar" ? "font-bold text-white" : "font-semibold text-white/45")} href={switchLocaleHref("ar")}>
              AR
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border-2 border-white/40 text-white transition hover:border-teal hover:bg-teal/15 md:hidden",
              isAr ? "mr-2" : "ml-2"
            )}
            aria-expanded={open}
            aria-label={open ? translate("closeMenu") : translate("openMenu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col border-t border-white/10 px-5 pb-3 md:hidden">
            {navItems.map((item) => (
              <Link key={item.href} onClick={() => setOpen(false)} href={localeHref(locale, item.href)} className="border-b border-white/5 px-2 py-3 text-base font-medium text-white/80 last:border-0 hover:text-teal">
                {t(item.labels, locale)}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="border-t-[3px] border-teal bg-navy-dark">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title={translate("about")} links={[["/about", translate("mission")], ["/about", translate("team")], ["/careers", translate("careers")]]} locale={locale} />
          <FooterColumn title={translate("quickLinks")} links={navItems.slice(0, 5).map((item) => [item.href, t(item.labels, locale)])} locale={locale} />
          <FooterColumn title={translate("services")} links={[["/services", translate("marketResearch")], ["/services", translate("dataAnalytics")], ["/services", translate("policyStudies")]]} locale={locale} />
          <div>
            <span className="mb-4 block w-fit border-b-2 border-teal pb-2.5 text-[.78rem] font-bold text-white">{translate("contactUs")}</span>
            <div className="space-y-3">
              {contactChannels.map((channel) => (
                <a key={channel.value} href={channel.href} className="flex items-start gap-2.5 text-sm text-white/55 transition hover:text-teal">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal/20 text-teal">
                    {channel.type === "email" ? <Mail className="h-3.5 w-3.5" /> : <Phone className="h-3.5 w-3.5" />}
                  </span>
                  <span>{channel.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4">
          <div className="flex gap-2">
            {["f", "X", "in"].map((item) => (
              <a key={item} href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-xs font-bold text-white/55 transition hover:-translate-y-0.5 hover:border-teal hover:bg-teal hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <p className="text-[.8rem] text-white/35">© {new Date().getFullYear()} SSRC. {translate("rights")}</p>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links, locale }: { title: string; links: string[][]; locale: Locale }) {
  return (
    <div>
      <span className="mb-4 block w-fit border-b-2 border-teal pb-2.5 text-[.78rem] font-bold text-white">{title}</span>
      <ul className="space-y-2">
        {links.map(([href, label]) => (
          <li key={`${href}-${label}`}>
            <Link href={localeHref(locale, href)} className="block py-0.5 text-sm text-white/55 transition hover:text-white/90">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
