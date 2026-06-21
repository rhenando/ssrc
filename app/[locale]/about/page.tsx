import Image from "next/image";
import { BarChart3, CheckCircle2, FileSearch, Globe2, GraduationCap, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/public/button-link";
import { getPublicData } from "@/data/queries";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn, t } from "@/lib/utils";

const stats = [
  { value: "150", suffix: "+", labelKey: "stats.studies" },
  { value: "25", suffix: "+", labelKey: "stats.countries" },
  { value: "10", suffix: "+", labelKey: "stats.years" }
];

const approachCards = [
  { icon: FileSearch, titleKey: "approach.access.title", bodyKey: "approach.access.body" },
  { icon: BarChart3, titleKey: "approach.trends.title", bodyKey: "approach.trends.body" },
  { icon: Globe2, titleKey: "approach.sectors.title", bodyKey: "approach.sectors.body" }
];

const capabilityCards = [
  { icon: FileSearch, titleKey: "method.research.title", bodyKey: "method.research.body" },
  { icon: Globe2, titleKey: "method.consulting.title", bodyKey: "method.consulting.body" },
  { icon: BarChart3, titleKey: "method.market.title", bodyKey: "method.market.body" },
  { icon: GraduationCap, titleKey: "method.training.title", bodyKey: "method.training.body" }
];

const purposeCards = [
  { icon: Target, eyebrowKey: "purpose.mission.eyebrow", titleKey: "purpose.mission.title", bodyKey: "purpose.mission.body" },
  { icon: Lightbulb, eyebrowKey: "purpose.vision.eyebrow", titleKey: "purpose.vision.title", bodyKey: "purpose.vision.body" }
];

const values = ["integrity", "excellence", "innovation", "collaboration", "accountability", "empowerment"];

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const translate = await getTranslations({ locale, namespace: "aboutPage" });
  const researchTeam = data.teamMembers.filter((member) => member.group === "research");

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,128,128,.32),transparent_28%),linear-gradient(135deg,#003366_0%,#002244_72%)]" />
        <div className="absolute inset-0 opacity-[.14] bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[length:54px_54px]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <span className="mb-5 inline-flex items-center gap-3 text-[.74rem] font-bold uppercase tracking-[2.4px] text-teal-pale">
                <span className="h-px w-10 bg-teal" />
                {translate("hero.eyebrow")}
              </span>
              <h1 className="font-head text-[40px] font-extrabold leading-[1.08] text-white sm:text-[52px] lg:text-[64px]">
                {translate("hero.title")}
              </h1>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[.06] p-6 shadow-[0_26px_80px_rgba(0,0,0,.22)] backdrop-blur md:p-8">
              <p className="text-[17px] leading-[1.9] text-white/72 md:text-[18px]">
                {translate("hero.body")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={localeHref(locale, "/contact")} locale={locale} variant="light">{translate("hero.primary")}</ButtonLink>
                <ButtonLink href={localeHref(locale, "/services")} locale={locale} variant="outline">{translate("hero.secondary")}</ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[.05] p-2 shadow-[0_30px_90px_rgba(0,0,0,.24)]">
            <div className="relative overflow-hidden rounded-[22px]">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&fm=jpg&w=1600&q=85"
                alt={translate("hero.imageAlt")}
                width={1600}
                height={760}
                priority
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,34,68,.72),rgba(0,34,68,.18)_52%,rgba(0,34,68,.08))]" />
              <div className="absolute bottom-5 max-w-[520px] px-5 text-sm font-semibold leading-6 text-white md:bottom-8 md:px-8 md:text-base">
                {translate("hero.imageCaption")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.labelKey} className="rounded-2xl border border-[#e5ebf2] bg-white p-6 text-center shadow-[0_12px_34px_rgba(0,51,102,.07)]">
                <div className="font-head text-[38px] font-extrabold leading-none text-navy">
                  {stat.value}
                  <span className="text-[22px] text-teal">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-bold uppercase tracking-[1px] text-muted">{translate(stat.labelKey)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-light px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <AboutHeading eyebrow={translate("story.eyebrow")} title={translate("story.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[.92fr_1.08fr]">
            <div className="rounded-2xl border border-[#dfe6ee] bg-white p-7 shadow-card">
              <p className="text-[16px] leading-[1.9] text-muted">{translate("story.body")}</p>
              <div className="mt-6 space-y-3">
                {["credible", "practical", "regional"].map((key) => (
                  <div key={key} className="flex gap-3 rounded-xl border border-[#e5ebf2] bg-[#f8fafc] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm leading-6 text-[#506176]">{translate(`story.points.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {approachCards.map((item) => {
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

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <AboutHeading eyebrow={translate("purpose.eyebrow")} title={translate("purpose.title")} locale={locale} />
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

      <section className="bg-gray-light px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <AboutHeading eyebrow={translate("values.eyebrow")} title={translate("values.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((key) => (
              <article key={key} className="rounded-2xl border border-[#e5ebf2] bg-white p-6 shadow-[0_10px_30px_rgba(0,51,102,.06)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-pale text-teal">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-head text-xl font-bold text-navy">{translate(`values.items.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{translate(`values.items.${key}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <AboutHeading eyebrow={translate("capabilities.eyebrow")} title={translate("capabilities.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilityCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titleKey} className="rounded-2xl border border-[#dfe6ee] bg-[#f8fafc] p-6 text-center shadow-[0_10px_30px_rgba(0,51,102,.05)]">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_8px_24px_rgba(0,51,102,.18)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-head text-xl font-bold text-navy">{translate(item.titleKey)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{translate(item.bodyKey)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <AboutHeading eyebrow={translate("team.eyebrow")} title={translate("team.title")} body={translate("team.body")} locale={locale} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {researchTeam.map((member) => (
              <article key={member.slug} className="flex h-full flex-col rounded-2xl border border-[#dfe6ee] bg-white p-6 shadow-[0_12px_34px_rgba(0,51,102,.07)]">
                <div className="flex items-center gap-4">
                  <div className="relative h-[86px] w-[86px] shrink-0 overflow-hidden rounded-2xl border border-[#d8e2eb] bg-[#f8fafc] shadow-[0_8px_24px_rgba(0,51,102,.12)]">
                    <Image src={member.image} alt={member.name} fill sizes="86px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-head text-[20px] font-extrabold leading-tight text-navy">{member.name}</h3>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[1.4px] text-teal">{t(member.roles, locale)}</div>
                  </div>
                </div>
                <div className="my-5 h-px bg-[#e5ebf2]" />
                <p className="text-sm leading-7 text-[#506176]">{t(member.bios, locale)}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-xl bg-navy px-6 py-4 text-center text-sm leading-7 text-white/70">
            {translate.rich("team.mix", {
              strong: (chunks) => <span className="font-bold text-teal-pale">{chunks}</span>
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#003366_0%,#004080_60%,#1a5480_100%)] px-6 py-20 text-center md:px-10 md:py-24">
        <div className="absolute h-[520px] w-[520px] rounded-full bg-teal/[.08] ltr:-right-20 ltr:-top-48 rtl:-left-20 rtl:-top-48" />
        <div className="relative z-10 mx-auto max-w-[680px]">
          <Users className="mx-auto mb-5 h-9 w-9 text-teal-pale" />
          <h2 className="mb-8 font-head text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.25] text-white">
            {translate("cta.title")}
          </h2>
          <ButtonLink href={localeHref(locale, "/contact")} locale={locale} variant="light">{translate("cta.button")}</ButtonLink>
        </div>
      </section>
    </>
  );
}

function AboutHeading({ eyebrow, title, body, locale }: { eyebrow: string; title: string; body?: string; locale: Locale }) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center", locale === "ar" && "font-arabic")}>
      <span className="inline-block rounded-full border border-teal/25 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-teal">{eyebrow}</span>
      <h2 className="mt-4 font-head text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">{title}</h2>
      {body && <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">{body}</p>}
    </div>
  );
}
