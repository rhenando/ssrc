import { CardGrid } from "@/components/public/card-grid";
import { SectionHeading } from "@/components/public/section-heading";
import { getPublicData } from "@/data/queries";
import type { Locale } from "@/lib/types";

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const isAr = locale === "ar";

  return (
    <section className="bg-gray-light px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          eyebrow={isAr ? "الخدمات" : "Services"}
          title={isAr ? "خدمات البحث والاستشارات" : "Research & Consulting Services"}
          locale={locale}
        >
          {isAr ? "هذه الصفحة جاهزة لتوسيع المحتوى عبر لوحة الإدارة." : "This page is ready for expanded CMS-managed service content."}
        </SectionHeading>
        <CardGrid cards={data.services} locale={locale} />
      </div>
    </section>
  );
}
