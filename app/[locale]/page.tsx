import Image from "next/image";
import { BookOpen, Globe2, Medal } from "lucide-react";
import { ButtonLink } from "@/components/public/button-link";
import { CardGrid } from "@/components/public/card-grid";
import { SectionHeading } from "@/components/public/section-heading";
import { getPublicData } from "@/data/queries";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/lib/types";
import { cn, t } from "@/lib/utils";

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const isAr = locale === "ar";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e8eef5] via-[#dce7f2] to-[#cfdaec] px-6 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute -top-32 h-[500px] w-[500px] rounded-full border-[55px] border-teal/10 ltr:-right-20 rtl:-left-20" />
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-[.74rem] font-bold uppercase tracking-[1.2px] text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {isAr ? "البحث والتحليلات" : "Research & Analytics"}
            </div>
            <h1 className="mb-4 font-head text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.15] text-navy">
              {isAr ? "قيادة الرؤى من خلال" : "Driving Insight Through"}
              <br />
              {isAr ? <span className="accent">التميز البحثي</span> : <>Research <span className="accent">Excellence</span></>}
            </h1>
            <p className="mb-8 max-w-[460px] text-[1.05rem] leading-[1.75] text-muted">
              {isAr ? "تقديم حلول قائمة على البيانات لاتخاذ قرارات مستنيرة تدفع القطاعات إلى الأمام." : "Providing data-driven solutions for informed decisions that move industries forward."}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={localeHref(locale, "/contact")} locale={locale}>{isAr ? "ابدأ الآن" : "Get Started"}</ButtonLink>
              <ButtonLink href={localeHref(locale, "/about")} locale={locale} variant="dark">{isAr ? "اعرف المزيد" : "Learn More"}</ButtonLink>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative mx-auto max-w-[380px] rounded-[22px] border border-white bg-white/90 p-7 shadow-[0_24px_72px_rgba(0,51,102,.16)]">
              <div className="mb-4 flex items-center justify-between text-[.74rem] font-semibold uppercase tracking-[.9px] text-muted">
                {isAr ? "مخرجات البحث" : "Research Output"}
                <span className="text-[.9rem] font-bold text-teal">+24%</span>
              </div>
              <div className="mb-3 flex h-[115px] items-end gap-2">
                {["h-12", "h-[74px]", "h-[60px]", "h-[94px]", "h-[78px]", "h-28"].map((heightClass, index) => (
                  <div key={heightClass} className="flex flex-1 flex-col items-center gap-1">
                    <div className={cn(index % 3 === 0 ? "bg-navy-mid" : index % 2 === 0 ? "bg-navy" : "bg-teal", "w-full rounded-t", heightClass)} />
                    <span className="text-[.63rem] text-muted">{isAr ? `ر${index + 1}` : `Q${index + 1}`}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-3">
                {data.homeStats.map((stat) => (
                  <div key={stat.labels.en} className="rounded-lg bg-gray-light px-1.5 py-2 text-center">
                    <div className="font-head text-[1.15rem] font-bold leading-none text-navy">
                      {stat.value}
                      <em className="text-[.75rem] not-italic text-teal">{stat.suffix}</em>
                    </div>
                    <div className="mt-1 text-[.64rem] text-muted">{t(stat.labels, locale)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "عن SSRC" : "About SSRC"} title={isAr ? "من نحن" : "Who We Are"} locale={locale} />
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80" alt="" width={900} height={675} className="aspect-[4/3] rounded-2xl object-cover shadow-[0_16px_52px_rgba(0,51,102,.14)]" />
              <div className="absolute -bottom-5 hidden min-w-[148px] rounded-xl bg-navy px-4 py-3 text-white shadow-[0_6px_24px_rgba(0,51,102,.2)] ltr:-right-5 ltr:border-l-4 rtl:-left-5 rtl:border-r-4 border-teal md:block">
                <div className="font-head text-[1.85rem] font-extrabold leading-none">98<span className="text-base text-teal">%</span></div>
                <div className="mt-0.5 text-[.7rem] uppercase tracking-[.6px] text-white/60">{isAr ? "رضا العملاء" : "Client Satisfaction"}</div>
              </div>
            </div>
            <div>
              <p className="mb-7 text-base leading-[1.8] text-muted">
                {isAr
                  ? "حلول استراتيجية للبحث والاستشارات (SSRC) هي شركة بحث واستشارات مقرها دمشق مكرسة لفتح المعرفة والبيانات والرؤى التي تدفع عجلة التقدم واتخاذ القرارات المستنيرة."
                  : "Strategic Solutions for Research and Consulting (SSRC) is a Damascus-based research and consulting firm dedicated to unlocking knowledge, data, and insights that drive progress and informed decision-making."}
              </p>
              <div className="divide-y divide-border">
                {[
                  [Medal, isAr ? "أكثر من 10 سنوات خبرة" : "10+ Years Experience", isAr ? "خبرة عميقة" : "In-Depth Expertise"],
                  [BookOpen, isAr ? "أكثر من 150 دراسة منشورة" : "150+ Published Studies", isAr ? "أبحاث محكمة" : "Peer-Reviewed Research"],
                  [Globe2, isAr ? "قاعدة عملاء عالمية" : "Global Client Base", isAr ? "عملاء في أكثر من 25 دولة" : "Clients in 25+ Countries"]
                ].map(([Icon, title, subtitle]) => (
                  <div key={String(title)} className="grid grid-cols-[50px_1fr] items-center gap-4 py-4">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-teal-pale text-teal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-head text-[clamp(1.1rem,2vw,1.4rem)] font-bold leading-[1.1] text-navy">{String(title)}</div>
                      <div className="mt-0.5 text-[.74rem] uppercase tracking-[.5px] text-muted">{String(subtitle)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "غايتنا" : "Our Purpose"} title={isAr ? "الرسالة والرؤية" : "Mission & Vision"} locale={locale} />
          <CardGrid cards={data.homePurpose} locale={locale} columns={2} />
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "ما يوجهنا" : "What Guides Us"} title={isAr ? "قيمنا الأساسية" : "Our Core Values"} locale={locale} />
          <CardGrid cards={data.values} locale={locale} />
        </div>
      </section>

      <section className="bg-gray-light px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "ما نقوم به" : "What We Do"} title={isAr ? "خدماتنا" : "Our Services"} locale={locale} />
          <CardGrid cards={data.services} locale={locale} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#003366_0%,#004080_60%,#1a5480_100%)] px-6 py-20 text-center md:px-10 md:py-24">
        <div className="relative z-10 mx-auto max-w-[660px]">
          <h2 className="mb-8 font-head text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.25] text-white">
            {isAr ? "شاركنا لتحقيق حلول قائمة على الأدلة" : "Partner With Us for Evidence-Based Solutions"}
          </h2>
          <ButtonLink href={localeHref(locale, "/contact")} locale={locale} variant="light">{isAr ? "تواصل معنا" : "Get in Touch"}</ButtonLink>
        </div>
      </section>
    </>
  );
}
