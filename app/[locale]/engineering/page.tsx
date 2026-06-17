import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, FileText, Globe2, Home, LayoutGrid, MapPin, Truck, type LucideIcon } from "lucide-react";
import { getPublicData } from "@/data/queries";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn, t } from "@/lib/utils";

const stats = [
  {
    value: "2012",
    label: { en: "Established", ar: "تأسست" },
    body: {
      en: "Delivering innovative, reliable, and client-focused engineering solutions since 2012.",
      ar: "تقديم حلول هندسية مبتكرة وموثوقة وموجهة للعميل منذ عام 2012."
    }
  },
  {
    value: "120+",
    label: { en: "Projects Delivered", ar: "مشروع منجز" },
    body: {
      en: "Proven expertise and a results-driven approach across every client engagement.",
      ar: "خبرة راسخة ونهج موجه نحو النتائج في كل تعامل مع العملاء."
    }
  },
  {
    value: "65+",
    label: { en: "Staff & Experts", ar: "موظف وخبير" },
    body: {
      en: "A team with in-depth knowledge of Saudi building codes and authorities' requirements.",
      ar: "فريق يمتلك معرفة عميقة بكود البناء السعودي ومتطلبات الجهات الرسمية."
    }
  },
  {
    value: "Integrity & Repeat",
    label: { en: "Business Model", ar: "نموذج العمل" },
    body: {
      en: "High-quality work and on-time delivery are not slogans. They are the only way we do business.",
      ar: "جودة العمل والتسليم في الوقت المحدد ليست شعارات، بل أساس عملنا."
    }
  }
];

const serviceOverview = [
  {
    title: { en: "Engineering & Consultancy", ar: "الهندسة والاستشارات" },
    body: { en: "Focused technical guidance, innovative solutions, and precise support from planning through execution.", ar: "توجيه تقني مركز وحلول هندسية مبتكرة من التخطيط حتى التنفيذ." },
    icon: FileText
  },
  {
    title: { en: "Design Management", ar: "إدارة التصميم" },
    body: { en: "Disciplined design oversight ensuring efficiency, compliance, and consistently high-quality outcomes.", ar: "إشراف تصميمي منضبط يضمن الكفاءة والامتثال وجودة المخرجات." },
    icon: LayoutGrid
  },
  {
    title: { en: "Construction Support", ar: "دعم الإنشاء" },
    body: { en: "Effective planning, coordination, and on-site oversight to deliver reliable, on-time results.", ar: "تخطيط وتنسيق وإشراف موقعي فعال لتسليم نتائج موثوقة في وقتها." },
    icon: Home
  },
  {
    title: { en: "Environment Services", ar: "الخدمات البيئية" },
    body: { en: "Sustainable development, environmental assessments, and community-focused strategies.", ar: "تنمية مستدامة وتقييمات بيئية واستراتيجيات تراعي المجتمع." },
    icon: Globe2
  },
  {
    title: { en: "Transport & Logistics", ar: "النقل والخدمات اللوجستية" },
    body: { en: "Optimizing mobility, material flow, and operational planning for safe, cost-effective project delivery.", ar: "تحسين الحركة وتدفق المواد والتخطيط التشغيلي لتسليم آمن وفعال التكلفة." },
    icon: Truck
  }
];

const serviceGroups = [
  {
    title: { en: "Design Services", ar: "خدمات التصميم" },
    items: {
      en: ["Hydraulic Design & Modeling", "Pipe Stress Analysis", "Pipe Flow Design", "Structural Design & Modeling", "Fire Protection Design (NFPA)", "Telecom Design", "Oil & Gas Engineering", "Instrument / Low Current Systems", "BIM Modeling Capabilities", "Traffic Studies", "Master Planning"],
      ar: ["التصميم الهيدروليكي والنمذجة", "تحليل إجهاد الأنابيب", "تصميم تدفق الأنابيب", "التصميم الإنشائي والنمذجة", "تصميم الحماية من الحرائق (NFPA)", "تصميم الاتصالات", "هندسة النفط والغاز", "أنظمة الأجهزة والتيار المنخفض", "قدرات نمذجة BIM", "دراسات المرور", "التخطيط الرئيسي"]
    }
  },
  {
    title: { en: "Construction Services", ar: "خدمات الإنشاء" },
    items: {
      en: ["Shop Drawings", "Construction Support", "As-Built Preparation", "Preparation of Procedures & Methodologies", "Fabrication Drawings", "Quantity Surveying", "Claims Support & Management", "Field Topographic Survey"],
      ar: ["رسومات الورشة", "دعم الإنشاء", "إعداد الرسومات الختامية", "إعداد الإجراءات والمنهجيات", "رسومات التصنيع", "المساحة الكمية", "دعم المطالبات وإدارتها", "المسح الطبوغرافي الميداني"]
    }
  },
  {
    title: { en: "Speciality Services", ar: "الخدمات المتخصصة" },
    items: {
      en: ["Design Verifications", "Alternative Value Engineered Designs", "Logistics, Lifting & Erection Studies", "Crude Oil / Gas and NGL Specialists", "Design Completion", "BIM Clashes Detection", "Site Conditions Assessments"],
      ar: ["التحقق من التصاميم", "تصاميم هندسة القيمة البديلة", "دراسات اللوجستيات والرفع والتركيب", "متخصصو النفط الخام والغاز والسوائل", "استكمال التصميم", "كشف تعارضات BIM", "تقييمات أحوال الموقع"]
    }
  }
];

const offices = [
  { flag: "🇸🇦", title: { en: "Kingdom of Saudi Arabia", ar: "المملكة العربية السعودية" }, lines: ["Al Madinah, KSA", "C.R. 4650069841", "+966 56 289 0928", "atassid@gmail.com"] },
  { flag: "🇸🇾", title: { en: "Syrian Arab Republic", ar: "الجمهورية العربية السورية" }, lines: ["Damascus, Syria", "", "+963 944 423 015", "info@mes-syr.com"] },
  { flag: "🇪🇬", title: { en: "Egypt", ar: "مصر" }, lines: ["Cairo, Egypt", "", "+201004572373", "islam.aboushady@akoya-eg.com"] },
  { flag: "🇹🇷", title: { en: "Türkiye", ar: "تركيا" }, lines: ["Gaziantep, Türkiye", "", "+90 551 587 9600", "Representative Office"] }
];

const partners = [
  { letter: "M", title: "Modern Engineering Solutions", subtitle: "MES", body: { en: "Syria representative and key affiliate providing engineering solutions across the region.", ar: "الممثل السوري والشريك الرئيسي لتقديم الحلول الهندسية في المنطقة." } },
  { letter: "A", title: "Advanced Engineering Solutions", subtitle: "AES", body: { en: "Strategic partner delivering advanced engineering capabilities for complex projects.", ar: "شريك استراتيجي يقدم قدرات هندسية متقدمة للمشاريع المعقدة." } },
  { letter: "N", title: "NCS Engineering Co. W.L.L.", subtitle: "Tylos - Bahrain", body: { en: "Bahrain-based partner providing specialized construction and engineering services.", ar: "شريك في البحرين يقدم خدمات إنشاء وهندسة متخصصة." } },
  { letter: "A", title: "AKOYA Engineering", subtitle: "Egypt", body: { en: "Egypt affiliate supporting engineering and consultancy operations across North Africa.", ar: "شريك مصر لدعم العمليات الهندسية والاستشارية في شمال أفريقيا." } }
];

export default async function EngineeringPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const isAr = locale === "ar";
  const engineeringTeam = data.teamMembers.filter((member) => member.group === "engineering");

  return (
    <>
      <section className="relative h-screen min-h-[620px] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,138,46,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(30,138,46,.055)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-[55fr_45fr]">
          <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
            <div className="mb-7 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-green-light">{isAr ? "المجالس الهندسية" : "Engineering Division"}</span>
              <span className="h-px w-10 bg-green" />
            </div>
            <span className="mb-5 inline-flex rounded-full border border-green-light/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-green-light">
              {isAr ? "تأسست 2012 - المدينة المنورة، السعودية" : "Established 2012 - Al Madinah, KSA"}
            </span>
            <h1 className="font-head text-[36px] font-black leading-[1.15] text-white md:text-[48px]">
              {isAr ? "مكتب موارد طيبة" : "Modern Technologies"}
              <br />
              <span className="bg-[linear-gradient(90deg,#1e8a2e,#6dc14a,#155c1e)] bg-clip-text text-transparent">{isAr ? "للاستشارات" : "Engineering and Contracting"}</span>
            </h1>
            <p className="mt-5 max-w-[440px] text-[17px] italic leading-[1.9] text-white/55">{isAr ? "نضيف قيمة، مشروعاً بمشروع." : "We add value, one project at a time."}</p>
            <p className="mt-4 max-w-[420px] text-sm leading-[1.8] text-white/40">
              {isAr
                ? "جودة العمل الاستثنائية هي المعيار، من خلال حلول استشارات هندسية مبتكرة وموثوقة وموجهة للعميل في الشرق الأوسط."
                : "Our exceptional quality of work is the norm - delivering innovative, reliable, and client-focused engineering consultancy solutions across the Middle East and beyond."}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GreenButton href="#services" locale={locale}>{isAr ? "استعرض الخدمات" : "Explore Services"}</GreenButton>
              <GreenButton href="#projects" locale={locale} outline>{isAr ? "عرض المشاريع" : "View Projects"}</GreenButton>
            </div>
          </div>
          <div className="relative hidden items-center justify-center overflow-hidden md:flex">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#003366_0%,transparent_35%)]" />
            <Image
              src="/images/2026/04/MTCO Logo v2.png"
              alt="MTCO Logo"
              width={680}
              height={360}
              className="relative z-0 w-[min(80%,340px)] rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,.5),0_8px_24px_rgba(0,0,0,.3)]"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-[linear-gradient(90deg,transparent,rgba(30,138,46,.3),transparent)]" />
      </section>

      <section className="bg-[#f8f9fb] px-5 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <article key={stat.value} className="relative overflow-hidden rounded-2xl border border-[#e4e8ef] bg-white px-7 py-9 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card-lg">
              <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1e8a2e,#6dc14a)]", index % 2 === 1 && "bg-[linear-gradient(90deg,#003366,#004d80)]")} />
              <StatValue value={stat.value} />
              <div className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-green">{t(stat.label, locale)}</div>
              <p className="mt-3 text-[13px] leading-[1.75] text-muted">{t(stat.body, locale)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-5 pb-2 pt-12 md:px-10 md:pt-[60px] lg:px-16 lg:pt-20">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={isAr ? "ما نقدمه" : "What We Do"} title={isAr ? "خدمات الهندسة والاستشارات" : "Engineering & Consultancy Services"} locale={locale} accentTitle>
            {isAr ? "تميّز تقني عبر خمسة محاور خدمية رئيسية من التصميم الأولي حتى دعم الإنشاء وإدارة البيئة والخدمات اللوجستية." : "Delivering technical excellence across five core service areas - from initial design through construction support, environmental management, and logistics."}
          </EngHeading>
        </div>
      </section>

      <section className="bg-white px-5 pb-12 md:px-10 md:pb-16 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceOverview.map((service, index) => (
              <article key={service.title.en} className="relative overflow-hidden rounded-[14px] border border-[#e4e8ef] bg-[#f8f9fb] px-5 py-8 text-center transition hover:-translate-y-1 hover:shadow-card">
                <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1e8a2e,#6dc14a)]", index % 2 === 1 && "bg-[linear-gradient(90deg,#003366,#004d80)]")} />
                <div className={cn("mx-auto mb-[18px] flex h-[60px] w-[60px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] text-white shadow-[0_8px_24px_rgba(30,138,46,.2)]", index % 2 === 1 && "bg-[linear-gradient(135deg,#003366,#004d80)] shadow-[0_8px_24px_rgba(0,51,102,.2)]")}>
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="text-sm font-bold leading-[1.35] text-navy">{t(service.title, locale)}</h3>
                <p className="mt-2.5 text-xs leading-[1.75] text-muted">{t(service.body, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <article key={group.title.en} className="overflow-hidden rounded-2xl border border-green/20 bg-white/[.04] text-white">
                <div className="border-b border-green/15 px-7 pb-5 pt-7">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-head text-xl font-black text-white">{t(group.title, locale)}</h3>
                </div>
                <div className="p-7">
                  <ul className="space-y-3">
                    {t(group.items, locale).map((item) => (
                      <li key={item} className="flex gap-3 text-[13px] leading-6 text-white/65">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-green-light" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-5 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={isAr ? "القيادة" : "Leadership"} title={isAr ? "الإدارة الرئيسية" : "Key Management"} locale={locale} accentTitle />
          <div className="space-y-6">
            {engineeringTeam.map((member, index) => (
              <article key={member.slug} className="relative flex flex-col gap-6 overflow-hidden rounded-xl border border-[#dce3ec] bg-white px-6 py-7 shadow-[0_8px_26px_rgba(0,51,102,.06)] md:flex-row md:gap-8">
                <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-green", index % 2 === 1 && "bg-navy")} />
                <div className="shrink-0 md:pt-1">
                  <div className="relative h-[76px] w-[76px] overflow-hidden rounded-full border border-[#c9d3dd] bg-white shadow-[0_7px_18px_rgba(0,51,102,.18)]">
                    <Image src={member.image} alt={member.name} fill sizes="76px" className="object-cover" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-head text-xl font-black leading-tight text-navy">{member.name}</h3>
                  <ManagementRole role={t(member.roles, locale)} />
                  <div className="my-5 h-px w-10 bg-[#dce3ec]" />
                  <div className="space-y-4">
                    {t(member.bios, locale).split("\n\n").map((paragraph) => (
                      <p key={paragraph} className="text-[13px] leading-[1.85] text-[#36506b]">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <EngHeading eyebrow={isAr ? "المحفظة" : "Portfolio"} title={isAr ? "خبرة المشاريع" : "Projects Experience"} locale={locale} />
          <div className="space-y-8">
            {data.engineeringProjects.map((project, index) => (
              <article key={project.slug} className="grid overflow-hidden rounded-2xl border border-[#e8ebf0] bg-white shadow-card-lg md:grid-cols-2">
                <div className={cn("grid min-h-[340px] grid-cols-2 gap-1 bg-[#f8f9fb]", index % 2 ? "md:order-2" : "")}>
                  {project.images.slice(0, 4).map((src, imageIndex) => (
                    <div key={src} className={cn("relative min-h-[170px] overflow-hidden", project.images.length === 1 || imageIndex === 0 ? "col-span-2" : "")}>
                      <Image src={src} alt={t(project.titles, locale)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className={cn("mb-3 text-xs font-bold uppercase tracking-[2px]", categoryTone(project.color).text)}>{t(project.categories, locale)}</div>
                  <h3 className="font-head text-2xl font-black text-navy">{t(project.titles, locale)}</h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4" />
                    {t(project.locations, locale)}
                  </div>
                  <div className={cn("my-5 h-1 w-16 rounded-full", categoryTone(project.color).bg)} />
                  <p className="text-sm leading-7 text-muted">{t(project.descriptions, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <EngHeading eyebrow={isAr ? "يثقون بنا" : "Trusted By"} title={isAr ? "عملاؤنا المميزون" : "Our Clients"} locale={locale}>
            {isAr ? "محفظة متميزة تضم كبرى المؤسسات السعودية وشركات الطاقة العالمية والمقاولين الدوليين." : "A proud portfolio of clients spanning major Saudi institutions, global energy leaders, and international contractors."}
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

      <section className="bg-[#f8f9fb] px-5 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={isAr ? "الحضور العالمي" : "Global Presence"} title={isAr ? "المكاتب وجهات الاتصال" : "Offices & Contacts"} locale={locale} accentTitle />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offices.map((office, index) => (
              <article key={office.title.en} className="relative overflow-hidden rounded-2xl border border-[#e4e8ef] bg-white px-6 py-8 shadow-card transition hover:-translate-y-1">
                <div className={cn("absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1e8a2e,#6dc14a)]", index % 2 === 1 && "bg-[linear-gradient(90deg,#003366,#004d80)]")} />
                <div className="mb-3 text-[28px]">{office.flag}</div>
                <h3 className="mb-2 font-head text-base font-extrabold text-navy">{t(office.title, locale)}</h3>
                <div className="mb-3 h-px w-6 bg-[#e4e8ef]" />
                <div className="space-y-1 text-xs leading-[1.8] text-muted">
                  {office.lines.map((line, lineIndex) => <div key={`${office.title.en}-${lineIndex}`} className={lineIndex === 2 ? "font-semibold text-green" : ""}>{line || "\u00a0"}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <EngHeading eyebrow={isAr ? "الشبكة" : "Network"} title={isAr ? "الشركاء والمنتسبون" : "Affiliates & Partners"} locale={locale} dark accentTitle />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <article key={partner.title} className="rounded-2xl border border-green/20 bg-white/[.05] px-7 py-9 text-center transition hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-green/40 bg-[linear-gradient(135deg,rgba(30,138,46,.3),rgba(0,77,128,.3))] text-xl font-extrabold text-green-light">{partner.letter}</div>
                <h3 className="font-head text-base font-extrabold text-white">{partner.title}</h3>
                <div className="mb-3 mt-1 text-[11px] uppercase tracking-[1px] text-white/40">{partner.subtitle}</div>
                <p className="text-xs leading-[1.75] text-white/50">{t(partner.body, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-5 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <div className="relative mx-auto max-w-[680px] overflow-hidden rounded-[24px] border border-[#e4e8ef] bg-white px-6 py-9 text-center shadow-[0_16px_52px_rgba(0,51,102,.07)] md:px-12 md:py-[60px]">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1e8a2e,#6dc14a,#003366)]" />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/10 px-[18px] py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-green">{isAr ? "شريك هندسي" : "Engineering Partner"}</span>
          </div>
          <h2 className="font-head text-2xl font-black leading-[1.3] text-navy md:text-[32px]">
            {isAr ? "مستعد للشراكة مع MTCO؟" : "Ready to Partner with "}
            {!isAr && <span className="text-green">Modern Technologies Engineering and Contracting?</span>}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.9] text-muted">{isAr ? "تواصل مع SSRC لتعرف كيف يمكننا ربطك بخبرات مكتب موارد طيبة الاستشارية في الهندسة." : "Get in touch with SSRC to learn how we can connect you with Modern Technologies Engineering and Contracting's expertise - from design management to speciality Oil & Gas services."}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={localeHref(locale, "/contact")} className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,#1e8a2e,#155c1e)] px-9 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(30,138,46,.25)] transition hover:-translate-y-0.5">
              {isAr ? "تواصل مع SSRC" : "Contact SSRC"}
            </Link>
            <Link href={localeHref(locale, "/services")} className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-9 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5">
              {isAr ? "خدماتنا" : "Our Services"}
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
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", locale === "ar" && "font-arabic")}>
      <span className={cn("inline-block rounded-full border px-5 py-1.5 text-[11px] font-bold uppercase tracking-[3px]", dark ? "border-green-light/30 text-green-light" : "border-green/25 text-green")}>{eyebrow}</span>
      <h2 className={cn("mt-5 font-head text-[26px] font-black leading-[1.3] md:text-4xl", dark ? "text-white" : "text-navy")}>
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
      return { text: "text-cat-architecture", bg: "bg-cat-architecture" };
    case "#f9a825":
      return { text: "text-cat-structural", bg: "bg-cat-structural" };
    case "#4fc3f7":
      return { text: "text-cat-mep", bg: "bg-cat-mep" };
    case "#f48fb1":
      return { text: "text-cat-documentation", bg: "bg-cat-documentation" };
    case "#6dc14a":
    default:
      return { text: "text-cat-urban", bg: "bg-cat-urban" };
  }
}
