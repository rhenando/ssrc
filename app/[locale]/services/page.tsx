import { BarChart3, BookOpenCheck, CheckCircle2, ClipboardList, FileSearch, GraduationCap, Landmark, LineChart, MessagesSquare, Network, ShieldCheck, Target, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/public/button-link";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const primaryServices = [
  { icon: FileSearch, key: "research" },
  { icon: LineChart, key: "market" },
  { icon: Landmark, key: "consulting" },
  { icon: GraduationCap, key: "training" }
];

const methods = [
  { icon: ClipboardList, key: "surveys" },
  { icon: MessagesSquare, key: "focus" },
  { icon: BarChart3, key: "analytics" },
  { icon: BookOpenCheck, key: "reports" }
];

const sectors = ["business", "education", "tourism", "governance", "social", "community"];

const process = [
  { icon: Target, key: "define" },
  { icon: Network, key: "collect" },
  { icon: ShieldCheck, key: "analyze" },
  { icon: CheckCircle2, key: "deliver" }
];

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const translate = await getTranslations({ locale, namespace: "servicesPage" });

  return (
    <>
      <section className="relative overflow-hidden bg-[#f5f8fb]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,102,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,102,.055)_1px,transparent_1px)] bg-[length:44px_44px]" />
        <div className="absolute -top-32 h-[430px] w-[430px] rounded-full bg-teal/10 blur-[80px] ltr:-right-24 rtl:-left-24" />
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-[.88fr_1.12fr] lg:px-12">
          <div className="max-w-[620px]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-white px-4 py-1.5 text-[.74rem] font-bold uppercase tracking-[1.4px] text-teal shadow-[0_8px_24px_rgba(0,51,102,.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {translate("hero.eyebrow")}
            </span>
            <h1 className="font-head text-[40px] font-extrabold leading-[1.1] text-navy sm:text-[52px] lg:text-[62px]">
              {translate("hero.title")}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.85] text-[#506176] md:text-[18px]">
              {translate("hero.body")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localeHref(locale, "/contact")} locale={locale}>{translate("hero.primary")}</ButtonLink>
              <ButtonLink href={localeHref(locale, "/about")} locale={locale} variant="dark">{translate("hero.secondary")}</ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {primaryServices.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.key} className="group rounded-2xl border border-[#dfe6ee] bg-white p-6 shadow-[0_14px_38px_rgba(0,51,102,.08)] transition hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-pale text-teal transition group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-head text-[22px] font-bold leading-tight text-navy">{translate(`services.${item.key}.title`)}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{translate(`services.${item.key}.body`)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <ServicesHeading eyebrow={translate("methods.eyebrow")} title={translate("methods.title")} body={translate("methods.body")} locale={locale} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {methods.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.key} className="rounded-2xl border border-[#e5ebf2] bg-white p-6 shadow-[0_10px_30px_rgba(0,51,102,.06)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-head text-xl font-bold text-navy">{translate(`methods.items.${item.key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{translate(`methods.items.${item.key}.body`)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-light px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <ServicesHeading eyebrow={translate("sectors.eyebrow")} title={translate("sectors.title")} body={translate("sectors.body")} locale={locale} align="left" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sectors.map((key) => (
              <div key={key} className="flex items-center gap-3 rounded-xl border border-[#dfe6ee] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,51,102,.05)]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm font-semibold leading-6 text-[#506176]">{translate(`sectors.items.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <ServicesHeading eyebrow={translate("process.eyebrow")} title={translate("process.title")} locale={locale} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.key} className="relative rounded-2xl border border-[#e5ebf2] bg-[#f8fafc] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-head text-3xl font-extrabold text-navy/10">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-head text-xl font-bold text-navy">{translate(`process.items.${item.key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{translate(`process.items.${item.key}.body`)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#003366_0%,#004080_60%,#1a5480_100%)] px-6 py-20 text-center md:px-10 md:py-24">
        <div className="absolute h-[520px] w-[520px] rounded-full bg-teal/[.08] ltr:-right-20 ltr:-top-48 rtl:-left-20 rtl:-top-48" />
        <div className="relative z-10 mx-auto max-w-[720px]">
          <Users className="mx-auto mb-5 h-9 w-9 text-teal-pale" />
          <h2 className="mb-5 font-head text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.25] text-white">
            {translate("cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{translate("cta.body")}</p>
          <ButtonLink href={localeHref(locale, "/contact")} locale={locale} variant="light">{translate("cta.button")}</ButtonLink>
        </div>
      </section>
    </>
  );
}

function ServicesHeading({
  eyebrow,
  title,
  body,
  locale,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  body?: string;
  locale: Locale;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center", locale === "ar" && "font-arabic", align === "left" && "text-start")}>
      <span className="inline-block rounded-full border border-teal/25 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-teal">{eyebrow}</span>
      <h2 className="mt-4 font-head text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">{title}</h2>
      {body && <p className="mt-4 text-sm leading-7 text-muted md:text-base">{body}</p>}
    </div>
  );
}
