import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, BookOpen, CheckCircle2, FileSearch, Globe2, Lightbulb, Medal, ShieldCheck, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/public/button-link";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const stats = [
  { value: "150", suffix: "+", labelKey: "stats.studies" },
  { value: "25", suffix: "+", labelKey: "stats.countries" },
  { value: "10", suffix: "+", labelKey: "stats.years" }
];

const proofPoints = [
  { icon: Medal, titleKey: "proof.experience.title", bodyKey: "proof.experience.body" },
  { icon: BookOpen, titleKey: "proof.studies.title", bodyKey: "proof.studies.body" },
  { icon: Users, titleKey: "proof.clients.title", bodyKey: "proof.clients.body" }
];

const purposeCards = [
  { icon: Lightbulb, eyebrowKey: "purpose.mission.eyebrow", titleKey: "purpose.mission.title", bodyKey: "purpose.mission.body" },
  { icon: ShieldCheck, eyebrowKey: "purpose.vision.eyebrow", titleKey: "purpose.vision.title", bodyKey: "purpose.vision.body" }
];

const values = ["integrity", "excellence", "innovation", "collaboration"];

const capabilities = [
  { icon: FileSearch, titleKey: "capabilities.market.title", bodyKey: "capabilities.market.body" },
  { icon: BarChart3, titleKey: "capabilities.analytics.title", bodyKey: "capabilities.analytics.body" },
  { icon: Globe2, titleKey: "capabilities.policy.title", bodyKey: "capabilities.policy.body" }
];

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const translate = await getTranslations({ locale, namespace: "home" });
  const isAr = locale === "ar";
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="relative overflow-hidden bg-[#f5f8fb]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,102,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,102,.055)_1px,transparent_1px)] bg-[length:44px_44px]" />
        <div className="absolute -top-32 h-[440px] w-[440px] rounded-full bg-teal/10 blur-[80px] ltr:-right-24 rtl:-left-24" />
        <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.02fr_.98fr] md:px-10 md:py-16 lg:px-12">
          <div className="max-w-[650px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-white px-4 py-1.5 text-[.74rem] font-bold uppercase tracking-[1.4px] text-teal shadow-[0_8px_24px_rgba(0,51,102,.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {translate("hero.eyebrow")}
            </div>
            <h1 className="font-head text-[42px] font-extrabold leading-[1.08] text-navy sm:text-[52px] lg:text-[62px]">
              {translate("hero.title")}
            </h1>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.85] text-[#506176] md:text-[18px]">
              {translate("hero.body")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localeHref(locale, "/contact")} locale={locale}>{translate("hero.primary")}</ButtonLink>
              <ButtonLink href={localeHref(locale, "/services")} locale={locale} variant="dark">{translate("hero.secondary")}</ButtonLink>
            </div>
            <div className="mt-9 grid max-w-[560px] grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="rounded-xl border border-[#dfe6ee] bg-white px-3 py-4 text-center shadow-[0_10px_28px_rgba(0,51,102,.06)]">
                  <div className="font-head text-[28px] font-extrabold leading-none text-navy">
                    {stat.value}
                    <span className="text-[18px] text-teal">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.7px] text-muted">{translate(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[26px] border border-white bg-white p-3 shadow-[0_28px_80px_rgba(0,51,102,.18)]">
              <Image
                src="https://images.unsplash.com/photo-1686654811264-5abcec077a0c?auto=format&fit=crop&fm=jpg&w=1200&q=85"
                alt={translate("hero.imageAlt")}
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] rounded-[20px] object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-b-[20px] bg-[linear-gradient(0deg,rgba(0,34,68,.82),transparent)] p-5 pt-20 text-white">
                <div className="max-w-[360px] text-sm font-semibold leading-6">{translate("hero.imageCaption")}</div>
              </div>
            </div>
            <div className="absolute hidden rounded-2xl border border-[#dfe6ee] bg-white px-5 py-4 shadow-card md:block ltr:-left-7 ltr:bottom-10 rtl:-right-7 rtl:bottom-10">
              <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-teal">{translate("hero.insightLabel")}</div>
              <div className="mt-1 font-head text-2xl font-extrabold text-navy">{translate("hero.insightValue")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <HomeHeading eyebrow={translate("about.eyebrow")} title={translate("about.title")} locale={locale} />
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
            <div>
              <p className="text-[16px] leading-[1.9] text-muted">{translate("about.body")}</p>
              <div className="mt-7 space-y-3">
                {["evidence", "regional", "decision"].map((key) => (
                  <div key={key} className="flex gap-3 rounded-xl border border-[#e5ebf2] bg-[#f8fafc] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm leading-6 text-[#506176]">{translate(`about.points.${key}`)}</span>
                  </div>
                ))}
              </div>
              <Link href={localeHref(locale, "/about")} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-hover">
                {translate("about.link")}
                <Arrow className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {proofPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.titleKey} className="rounded-2xl border border-[#e5ebf2] bg-white p-6 shadow-[0_12px_34px_rgba(0,51,102,.07)]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-pale text-teal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-head text-xl font-bold text-navy">{translate(item.titleKey)}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{translate(item.bodyKey)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <HomeHeading eyebrow={translate("purpose.eyebrow")} title={translate("purpose.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {purposeCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titleKey} className="relative overflow-hidden rounded-2xl border border-[#dfe6ee] bg-white p-7 shadow-card">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#008080,#003366)]" />
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-teal">{translate(item.eyebrowKey)}</div>
                  <h3 className="font-head text-2xl font-bold text-navy">{translate(item.titleKey)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{translate(item.bodyKey)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <HomeHeading eyebrow={translate("values.eyebrow")} title={translate("values.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((key) => (
              <article key={key} className="rounded-2xl border border-[#e5ebf2] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,51,102,.06)]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-pale text-teal">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-head text-xl font-bold text-navy">{translate(`values.items.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{translate(`values.items.${key}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-light px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <HomeHeading eyebrow={translate("capabilities.eyebrow")} title={translate("capabilities.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titleKey} className="group rounded-2xl border border-[#dfe6ee] bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-pale text-teal transition group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-head text-xl font-bold text-navy">{translate(item.titleKey)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{translate(item.bodyKey)}</p>
                  <Link href={localeHref(locale, "/services")} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal">
                    {translate("capabilities.link")}
                    <Arrow className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#003366_0%,#004080_60%,#1a5480_100%)] px-6 py-20 text-center md:px-10 md:py-24">
        <div className="absolute h-[560px] w-[560px] rounded-full bg-teal/[.08] ltr:-right-20 ltr:-top-48 rtl:-left-20 rtl:-top-48" />
        <div className="absolute h-[360px] w-[360px] rounded-full bg-teal/[.06] ltr:-bottom-32 ltr:-left-14 rtl:-bottom-32 rtl:-right-14" />
        <div className="relative z-10 mx-auto max-w-[660px]">
          <h2 className="mb-8 font-head text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.25] text-white">
            {translate("cta.title")}
          </h2>
          <ButtonLink href={localeHref(locale, "/contact")} locale={locale} variant="light">{translate("cta.button")}</ButtonLink>
        </div>
      </section>
    </>
  );
}

function HomeHeading({ eyebrow, title, locale }: { eyebrow: string; title: string; locale: Locale }) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center", locale === "ar" && "font-arabic")}>
      <span className="inline-block rounded-full border border-teal/25 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-teal">{eyebrow}</span>
      <h2 className="mt-4 font-head text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">{title}</h2>
    </div>
  );
}
