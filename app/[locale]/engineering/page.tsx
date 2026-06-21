import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight, Check, DraftingCompass, FileText, Globe2, HardHat, Home, LayoutGrid, MapPin, Sparkles, Truck, type LucideIcon } from "lucide-react";
import { getPublicData } from "@/data/queries";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn, t } from "@/lib/utils";

type Stat = {
  labelKey: string;
  bodyKey: string;
} & ({ value: string; valueKey?: never } | { value?: never; valueKey: string });

const stats: Stat[] = [
  { value: "2012", labelKey: "stats.established.label", bodyKey: "stats.established.body" },
  { value: "150+", labelKey: "stats.projects.label", bodyKey: "stats.projects.body" },
  { value: "65+", labelKey: "stats.staff.label", bodyKey: "stats.staff.body" },
  { valueKey: "stats.business.value", labelKey: "stats.business.label", bodyKey: "stats.business.body" }
];

const serviceOverview = [
  { titleKey: "services.overview.engineering.title", bodyKey: "services.overview.engineering.body", icon: FileText },
  { titleKey: "services.overview.design.title", bodyKey: "services.overview.design.body", icon: LayoutGrid },
  { titleKey: "services.overview.construction.title", bodyKey: "services.overview.construction.body", icon: Home },
  { titleKey: "services.overview.environment.title", bodyKey: "services.overview.environment.body", icon: Globe2 },
  { titleKey: "services.overview.transport.title", bodyKey: "services.overview.transport.body", icon: Truck }
];

const serviceGroups = [
  {
    titleKey: "services.groups.design.title",
    icon: DraftingCompass,
    itemKeys: ["hydraulic", "stress", "flow", "structural", "fire", "telecom", "oilGas", "instrument", "bim", "traffic", "master"].map((key) => `services.groups.design.items.${key}`)
  },
  {
    titleKey: "services.groups.construction.title",
    icon: HardHat,
    itemKeys: ["shop", "support", "asBuilt", "procedures", "fabrication", "quantity", "claims", "survey"].map((key) => `services.groups.construction.items.${key}`)
  },
  {
    titleKey: "services.groups.speciality.title",
    icon: Sparkles,
    itemKeys: ["verification", "value", "logistics", "specialists", "completion", "clashes", "assessment"].map((key) => `services.groups.speciality.items.${key}`)
  }
];

const offices = [
  { key: "saudi", flagSrc: "/flags/sa.svg", titleKey: "offices.saudi", lines: ["Al Madinah, KSA", "C.R. 4650069841", "+966 56 289 0928", "atassid@gmail.com"] },
  { key: "syria", flagSrc: "/flags/sy.svg", titleKey: "offices.syria", lines: ["Damascus, Syria", "", "+963 944 423 015", "info@mes-syr.com"] },
  { key: "egypt", flagSrc: "/flags/eg.svg", titleKey: "offices.egypt", lines: ["Cairo, Egypt", "", "+201004572373", "islam.aboushady@akoya-eg.com"] },
  { key: "turkiye", flagSrc: "/flags/tr.svg", titleKey: "offices.turkiye", lines: ["Gaziantep, Turkiye", "", "+90 551 587 9600", "Representative Office"] }
];

const partners = [
  { letter: "M", title: "Modern Engineering Solutions", subtitle: "MES", bodyKey: "network.mes" },
  { letter: "A", title: "Advanced Engineering Solutions", subtitle: "AES", bodyKey: "network.aes" },
  { letter: "N", title: "NCS Engineering Co. W.L.L.", subtitle: "Tylos - Bahrain", bodyKey: "network.ncs" },
  { letter: "A", title: "AKOYA Engineering", subtitle: "Egypt", bodyKey: "network.akoya" }
];

const managementPortraitAdjustments: Record<string, string> = {
  "ahmad-alkhateeb": "object-contain bg-white",
  "azmi-atassi": "object-contain bg-white",
  "durry-atassi-engineering": "object-contain bg-white",
  "hussam-kassab": "object-contain bg-white",
  "raghid-abdelsamad": "object-contain bg-white"
};

export default async function EngineeringPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const translate = await getTranslations({ locale, namespace: "engineering" });
  const data = await getPublicData();
  const engineeringTeam = data.teamMembers.filter((member) => member.group === "engineering");

  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-navy text-white md:min-h-[620px]">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-green/20 blur-[90px]" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-green-light/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,138,46,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(30,138,46,.055)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative z-10 mx-auto grid min-h-[560px] max-w-[1200px] grid-cols-1 gap-8 px-6 py-12 md:min-h-[620px] md:grid-cols-[1.08fr_.92fr] md:items-center md:px-10 md:py-0 lg:px-12">
          <div className="order-1 md:hidden">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-green-light">{translate("hero.eyebrow")}</span>
              <span className="h-px w-10 bg-green" />
            </div>
            <span className="inline-flex w-fit rounded-full border border-green-light/30 bg-white/[.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-green-light">
              {translate("hero.established")}
            </span>
          </div>
          <div className="order-3 flex flex-col justify-center md:order-1">
            <div className="mb-5 hidden items-center gap-3 md:flex">
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-green-light">{translate("hero.eyebrow")}</span>
              <span className="h-px w-10 bg-green" />
            </div>
            <span className="mb-5 hidden w-fit rounded-full border border-green-light/30 bg-white/[.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-green-light md:inline-flex">
              {translate("hero.established")}
            </span>
            <h1 className="max-w-[620px] font-head text-[40px] font-black leading-[1.08] text-white md:text-[56px]">
              {translate("hero.titleLine1")}
              <br />
              <span className="bg-[linear-gradient(90deg,#1e8a2e,#6dc14a,#155c1e)] bg-clip-text text-transparent">{translate("hero.titleLine2")}</span>
            </h1>
            <p className="mt-5 max-w-[500px] text-[18px] italic leading-[1.65] text-white/70">{translate("hero.tagline")}</p>
            <p className="mt-4 max-w-[520px] text-sm leading-[1.8] text-white/55">{translate("hero.body")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GreenButton href="#services" locale={locale}>{translate("hero.exploreServices")}</GreenButton>
              <GreenButton href="#projects" locale={locale} outline>{translate("hero.viewProjects")}</GreenButton>
            </div>
          </div>
          <div className="relative order-2 flex items-center justify-center pb-4 md:order-2 md:pb-0">
            <div className="relative w-full max-w-[300px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,.32)] backdrop-blur sm:max-w-[340px] md:max-w-[390px] md:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1e8a2e,#6dc14a,#003366)]" />
              <div className="rounded-[18px] bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,.22)] sm:p-6 md:p-8">
                <Image src="/images/2026/04/MTCO Logo v2.png" alt="MTCO Logo" width={680} height={360} className="mx-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px]" priority />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-[linear-gradient(90deg,transparent,rgba(30,138,46,.3),transparent)]" />
      </section>

      <section className="bg-[#f8f9fb] px-5 py-7 md:px-10 md:py-9 lg:px-16 lg:py-11">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <article key={stat.labelKey} className="relative overflow-hidden rounded-2xl border border-[#e4e8ef] bg-white px-6 py-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1e8a2e,#6dc14a)]", index % 2 === 1 && "bg-[linear-gradient(90deg,#003366,#004d80)]")} />
              <StatValue value={stat.value !== undefined ? stat.value : translate(stat.valueKey)} />
              <div className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-green">{translate(stat.labelKey)}</div>
              <p className="mt-3 text-[13px] leading-[1.75] text-muted">{translate(stat.bodyKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-5 pb-1 pt-10 md:px-10 md:pt-12 lg:px-16 lg:pt-14">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={translate("services.eyebrow")} title={translate("services.title")} locale={locale} accentTitle>
            {translate("services.body")}
          </EngHeading>
        </div>
      </section>

      <section className="bg-white px-5 pb-10 md:px-10 md:pb-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceOverview.map((service, index) => (
              <article key={service.titleKey} className="relative overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb] px-5 py-6 text-center transition hover:-translate-y-1 hover:shadow-card">
                <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1e8a2e,#6dc14a)]", index % 2 === 1 && "bg-[linear-gradient(90deg,#003366,#004d80)]")} />
                <div className={cn("mx-auto mb-[18px] flex h-[60px] w-[60px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] text-white shadow-[0_8px_24px_rgba(30,138,46,.2)]", index % 2 === 1 && "bg-[linear-gradient(135deg,#003366,#004d80)] shadow-[0_8px_24px_rgba(0,51,102,.2)]")}>
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="text-sm font-bold leading-[1.35] text-navy">{translate(service.titleKey)}</h3>
                <p className="mt-2.5 text-xs leading-[1.75] text-muted">{translate(service.bodyKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-12 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <article key={group.titleKey} className="overflow-hidden rounded-2xl border border-green/20 bg-white/[.04] text-white">
                <div className="border-b border-green/15 px-6 pb-4 pt-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] text-white">
                    <ServiceIcon icon={group.icon} />
                  </div>
                  <h3 className="font-head text-xl font-black text-white">{translate(group.titleKey)}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2.5">
                    {group.itemKeys.map((itemKey) => (
                      <li key={itemKey} className="flex gap-3 text-[13px] leading-6 text-white/65">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-green-light" />
                        <span>{translate(itemKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 grid grid-cols-1 gap-5 border-b border-[#dce3ec] pb-6 md:grid-cols-[.85fr_1.15fr] md:items-end">
            <div>
              <span className="inline-block rounded-full border border-green/25 bg-white px-5 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-green">{translate("management.eyebrow")}</span>
              <h2 className="mt-5 font-head text-[28px] font-black leading-[1.2] text-navy md:text-[40px]">{translate("management.title")}</h2>
            </div>
            <p className="max-w-[620px] text-[14px] leading-[1.9] text-[#36506b] md:justify-self-end">{translate("management.body")}</p>
          </div>
          <div className="space-y-5">
            {engineeringTeam.map((member, index) => (
              <article key={member.slug} className="relative overflow-hidden border-b border-[#dce3ec] bg-white px-5 py-6 last:border-b-0 md:px-7 md:py-7">
                <div className={cn("absolute left-0 top-6 h-[170px] w-[3px] bg-green md:top-7", index % 2 === 1 && "bg-navy")} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[170px_1fr] sm:items-start">
                  <div className="shrink-0">
                    <div className="relative h-[170px] w-[170px] overflow-hidden rounded-[14px] bg-[#edf4ef]">
                      <Image src={member.image} alt={member.name} fill sizes="170px" className={cn("object-cover object-center", managementPortraitAdjustments[member.slug])} />
                    </div>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <div className="min-h-[86px]">
                      <h3 className="font-head text-[22px] font-black leading-tight text-navy">{member.name}</h3>
                      <ManagementRole role={t(member.roles, locale)} />
                    </div>
                    <div className="max-w-[780px] space-y-3">
                      {t(member.bios, locale).split("\n\n").map((paragraph) => (
                        <p key={paragraph} className="text-[14px] leading-[1.85] text-[#36506b]">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-12 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1200px]">
          <EngHeading eyebrow={translate("portfolio.eyebrow")} title={translate("portfolio.title")} locale={locale} />
          <div className="space-y-8">
            {data.engineeringProjects.map((project) => (
              <article key={project.slug} className="overflow-hidden rounded-2xl border border-[#e8ebf0] bg-white shadow-card-lg">
                <div className={cn("border-t-[3px]", categoryTone(project.color).border)} />
                <div className="space-y-6 p-5 md:p-6">
                  <ProjectGallery images={project.images} title={t(project.titles, locale)} />
                  <div className="max-w-[760px]">
                    <div className={cn("mb-3 text-xs font-bold uppercase tracking-[2px]", categoryTone(project.color).text)}>{t(project.categories, locale)}</div>
                    <h3 className="font-head text-2xl font-black leading-tight text-navy md:text-[28px]">{t(project.titles, locale)}</h3>
                    <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted">
                      <MapPin className="mt-1 h-4 w-4 shrink-0" />
                      <span>{t(project.locations, locale)}</span>
                    </div>
                    <div className={cn("my-5 h-1 w-16 rounded-full", categoryTone(project.color).bg)} />
                    <p className="text-sm leading-7 text-muted">{t(project.descriptions, locale)}</p>
                    <div className="mt-6 text-[11px] font-bold uppercase tracking-[2px] text-[#8a9bb0]">
                      {project.images.length} {project.images.length === 1 ? translate("portfolio.highlight") : translate("portfolio.highlights")}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1200px]">
          <EngHeading eyebrow={translate("clients.eyebrow")} title={translate("clients.title")} locale={locale}>
            {translate("clients.body")}
          </EngHeading>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {data.engineeringClients.map((client) => (
              <div key={client.slug} className="flex aspect-[4/2.5] items-center justify-center rounded-xl border border-[#e4e8ef] bg-[#f8f9fb] p-4 transition hover:-translate-y-1 hover:shadow-card">
                <Image src={client.logoUrl} alt={client.name} width={180} height={90} className="max-h-full w-auto object-contain opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={translate("offices.eyebrow")} title={translate("offices.title")} locale={locale} accentTitle />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offices.map((office, index) => (
              <article key={office.key} className="relative overflow-hidden rounded-2xl border border-[#e4e8ef] bg-white px-6 py-8 shadow-card transition hover:-translate-y-1">
                <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1e8a2e,#6dc14a)]", index % 2 === 1 && "bg-[linear-gradient(90deg,#003366,#004d80)]")} />
                <Image src={office.flagSrc} alt={`${translate(office.titleKey)} flag`} width={48} height={32} className="mb-4 h-8 w-12 rounded-[4px] border border-[#dce3ec] object-cover shadow-[0_4px_12px_rgba(0,51,102,.1)]" />
                <h3 className="mb-2 font-head text-base font-extrabold text-navy">{translate(office.titleKey)}</h3>
                <div className="mb-3 h-px w-6 bg-[#e4e8ef]" />
                <div className="space-y-1 text-xs leading-[1.8] text-muted">
                  {office.lines.map((line, lineIndex) => <div key={`${office.key}-${lineIndex}`} className={lineIndex === 2 ? "font-semibold text-green" : ""}>{line || "\u00a0"}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={translate("network.eyebrow")} title={translate("network.title")} locale={locale} dark accentTitle />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <article key={partner.title} className="rounded-2xl border border-green/20 bg-white/[.05] px-7 py-9 text-center transition hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-green/40 bg-[linear-gradient(135deg,rgba(30,138,46,.3),rgba(0,77,128,.3))] text-xl font-extrabold text-green-light">{partner.letter}</div>
                <h3 className="font-head text-base font-extrabold text-white">{partner.title}</h3>
                <div className="mb-3 mt-1 text-[11px] uppercase tracking-[1px] text-white/40">{partner.subtitle}</div>
                <p className="text-xs leading-[1.75] text-white/50">{translate(partner.bodyKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div className="relative mx-auto max-w-[680px] overflow-hidden rounded-[24px] border border-[#e4e8ef] bg-white px-6 py-8 text-center shadow-[0_16px_52px_rgba(0,51,102,.07)] md:px-12 md:py-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1e8a2e,#6dc14a,#003366)]" />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/10 px-[18px] py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-green">{translate("cta.eyebrow")}</span>
          </div>
          <h2 className="font-head text-2xl font-black leading-[1.3] text-navy md:text-[32px]">{translate("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.9] text-muted">{translate("cta.body")}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={localeHref(locale, "/contact")} className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] px-9 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(30,138,46,.25)] transition hover:-translate-y-0.5">
              {translate("cta.contact")}
            </Link>
            <Link href={localeHref(locale, "/services")} className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-9 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5">
              {translate("cta.services")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StatValue({ value }: { value: string }) {
  if (value.endsWith("+")) {
    return (
      <div className="font-head text-[52px] font-black leading-none text-navy">
        {value.slice(0, -1)}
        <span className="text-[32px] text-green">+</span>
      </div>
    );
  }

  return <div className={cn("font-head font-black leading-[1.05] text-navy", value.length > 8 ? "text-[32px]" : "text-[52px]")}>{value}</div>;
}

function EngHeading({ eyebrow, title, children, locale, dark = false, accentTitle = false }: { eyebrow: string; title: string; children?: React.ReactNode; locale: Locale; dark?: boolean; accentTitle?: boolean }) {
  const titleParts = title.split(" & ");

  return (
    <div className={cn("mx-auto mb-9 max-w-3xl text-center", locale === "ar" && "font-arabic")}>
      <span className={cn("inline-block rounded-full border px-5 py-1.5 text-[11px] font-bold uppercase tracking-[3px]", dark ? "border-green-light/30 text-green-light" : "border-green/25 text-green")}>{eyebrow}</span>
      <h2 className={cn("mt-4 font-head text-[26px] font-black leading-[1.3] md:text-4xl", dark ? "text-white" : "text-navy")}>
        {accentTitle && titleParts.length === 2 ? (
          <>
            {titleParts[0]} <span className="text-green">&amp; {titleParts[1]}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {children && <p className={cn("mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.85]", dark ? "text-white/50" : "text-muted")}>{children}</p>}
    </div>
  );
}

function GreenButton({ href, children, locale, outline = false }: { href: string; children: React.ReactNode; locale: Locale; outline?: boolean }) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border px-7 py-3 text-[13px] font-bold transition hover:-translate-y-0.5",
        outline
          ? "border-white/25 bg-transparent text-white/80 hover:border-green-light hover:text-green-light"
          : "border-green bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] text-white shadow-[0_4px_16px_rgba(30,138,46,.3)] hover:border-green-light"
      )}
    >
      {children}
      <Arrow className="h-4 w-4" />
    </Link>
  );
}

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const mainImage = images[images.length - 1];
  const supportingImages = images.slice(0, -1);

  if (images.length === 1) {
    return (
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb] md:h-[360px]">
        <Image src={mainImage} alt={title} fill sizes="(max-width: 768px) 100vw, 1100px" className="object-cover object-center" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
        {images.map((src) => (
          <div key={src} className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb] md:h-[360px]">
            <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
        ))}
      </div>
    );
  }

  if (images.length >= 5) {
    return (
      <div className={cn("grid grid-cols-1 gap-2.5 sm:grid-cols-2", images.length === 9 ? "lg:grid-cols-3" : "lg:grid-cols-5")}>
        {images.map((src) => (
          <div key={src} className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb]">
            <Image src={src} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" className="object-cover object-center" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[.68fr_1.32fr]">
      <div className={cn("grid gap-2.5", supportingImages.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1", supportingImages.length > 2 && "lg:grid-cols-2")}>
        {supportingImages.map((src) => (
          <div key={src} className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb] lg:h-full lg:min-h-[174px]">
            <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover object-center" />
          </div>
        ))}
      </div>
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb] md:h-[360px]">
        <Image src={mainImage} alt={title} fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover object-center" />
      </div>
    </div>
  );
}

function ServiceIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="h-[26px] w-[26px]" strokeWidth={1.5} />;
}

function ManagementRole({ role }: { role: string }) {
  const [title, credential] = role.split(" | ");

  return (
    <>
      <div className="mt-1 text-[11px] font-bold uppercase tracking-[2px] text-green">{title}</div>
      {credential && <div className="mt-1 text-[11px] font-semibold text-[#36506b]">{credential}</div>}
    </>
  );
}

function categoryTone(color: string) {
  switch (color.toLowerCase()) {
    case "#a78bfa":
      return { text: "text-cat-architecture", bg: "bg-cat-architecture", border: "border-cat-architecture" };
    case "#f9a825":
      return { text: "text-cat-structural", bg: "bg-cat-structural", border: "border-cat-structural" };
    case "#4fc3f7":
      return { text: "text-cat-mep", bg: "bg-cat-mep", border: "border-cat-mep" };
    case "#f48fb1":
      return { text: "text-cat-documentation", bg: "bg-cat-documentation", border: "border-cat-documentation" };
    case "#6dc14a":
    default:
      return { text: "text-cat-urban", bg: "bg-cat-urban", border: "border-cat-urban" };
  }
}
