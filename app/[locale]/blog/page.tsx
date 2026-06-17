import { SectionHeading } from "@/components/public/section-heading";
import type { Locale } from "@/lib/types";

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <SectionHeading eyebrow={isAr ? "المقالات" : "Blog"} title={isAr ? "المقالات والأخبار" : "Posts & Updates"} locale={locale}>
          {isAr ? "سيتم عرض المقالات المستوردة أو المنشورة من لوحة الإدارة هنا." : "Imported or CMS-published posts will appear here."}
        </SectionHeading>
        <div className="rounded-2xl border border-border bg-gray-light p-8 text-center text-muted">
          {isAr ? "لا توجد مقالات منشورة حالياً." : "No posts are currently published."}
        </div>
      </div>
    </section>
  );
}
