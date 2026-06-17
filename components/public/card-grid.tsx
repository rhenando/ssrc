import type { Locale, TextCard } from "@/lib/types";
import { t } from "@/lib/utils";

export function CardGrid({ cards, locale, columns = 3 }: { cards: TextCard[]; locale: Locale; columns?: 2 | 3 }) {
  return (
    <div className={columns === 2 ? "grid grid-cols-1 gap-6 md:grid-cols-2" : "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"}>
      {cards.map((card, index) => (
        <article key={card.key} className="card-bar relative overflow-hidden rounded-2xl border border-border bg-white px-6 py-8 text-center transition hover:-translate-y-1 hover:shadow-card">
          <div className="mb-2.5 font-head text-[2.2rem] font-extrabold leading-none text-teal/15">{String(index + 1).padStart(2, "0")}</div>
          {card.eyebrow && <div className="mb-1.5 text-[.72rem] font-bold uppercase tracking-[2px] text-teal">{t(card.eyebrow, locale)}</div>}
          <h3 className="mb-2 font-head text-lg font-bold text-navy">{t(card.titles, locale)}</h3>
          <p className="text-sm leading-7 text-muted">{t(card.bodies, locale)}</p>
        </article>
      ))}
    </div>
  );
}
