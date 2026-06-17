import Image from "next/image";
import { CardGrid } from "@/components/public/card-grid";
import { SectionHeading } from "@/components/public/section-heading";
import { getPublicData } from "@/data/queries";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/utils";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const isAr = locale === "ar";
  const researchTeam = data.teamMembers.filter((member) => member.group === "research");

  return (
    <>
      <section className="bg-navy px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-teal/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-teal-pale">SSRC</span>
            <h1 className="font-head text-[clamp(2.2rem,5vw,4rem)] font-black leading-tight text-white">{isAr ? "مركز بحث واستشارات تطبيقي" : "Applied Research & Consulting Center"}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {isAr
                ? "نجمع المعرفة المحلية والمنهجيات المتقدمة والخبرة الاستشارية العملية لتحويل البيانات إلى قرارات أفضل."
                : "We combine local knowledge, advanced methodologies, and practical consulting experience to turn data into better decisions."}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm leading-8 text-white/70">
              {isAr
                ? "المركز السوري للأبحاث والاستشارات يقدم خدمات بحثية وتحليلية واستشارية مخصصة عالية الجودة."
                : "Strategic Solutions for Research and Consulting provides tailored research, analytics, and advisory services across Syria and the wider region."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "غايتنا" : "Purpose"} title={isAr ? "الرسالة والرؤية" : "Mission & Vision"} locale={locale} />
          <CardGrid cards={data.homePurpose} locale={locale} columns={2} />
        </div>
      </section>

      <section className="bg-gray-light px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "قيمنا" : "Values"} title={isAr ? "المبادئ التي تقودنا" : "Principles That Guide Us"} locale={locale} />
          <CardGrid cards={data.values} locale={locale} />
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-4 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={isAr ? "الفريق" : "Our Team"} title={isAr ? "العقول وراء الرؤية" : "The Minds Behind the Vision"} locale={locale} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchTeam.map((member, index) => (
              <article key={member.slug} className="rounded-xl border border-[#dce3ec] bg-white px-5 py-7 text-center shadow-[0_6px_18px_rgba(0,51,102,.04)]">
                <div className="mx-auto mb-4">
                  <div className="relative mx-auto h-[76px] w-[76px] overflow-hidden rounded-full border border-[#d8e2eb] bg-white shadow-[0_6px_20px_rgba(0,51,102,.12)]">
                    <Image src={member.image} alt={member.name} fill sizes="76px" className="object-cover" />
                  </div>
                  <div className={index % 3 === 1 ? "mx-auto mt-1.5 h-1 w-5 rounded-full bg-navy" : "mx-auto mt-1.5 h-1 w-5 rounded-full bg-teal"} />
                </div>
                <h3 className="font-head text-[16px] font-extrabold leading-tight text-navy">{member.name}</h3>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[1.8px] text-teal">{t(member.roles, locale)}</div>
                <div className="mx-auto my-7 h-px w-5 bg-[#dce3ec]" />
                <p className="text-left text-[12px] leading-[1.9] text-[#36506b]">{t(member.bios, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
