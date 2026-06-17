import Link from "next/link";

const cards = [
  ["/admin/pages", "Pages", "Generic localized pages and imported content."],
  ["/admin/home", "Home", "Stats, values, services, and homepage cards."],
  ["/admin/about", "About", "Team and about-page content."],
  ["/admin/engineering", "Engineering", "Projects, clients, leadership, and service groups."],
  ["/admin/downloads", "Downloads", "Downloadable documents and metadata."],
  ["/admin/contact", "Contact", "Channels and contact submissions."]
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-head text-3xl font-black text-navy">Dashboard</h1>
      <p className="mt-2 text-sm text-muted">Manage the structured SSRC CMS. Configure Supabase to enable live reads and writes.</p>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([href, title, body]) => (
          <Link key={href} href={href} className="rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1">
            <h2 className="font-head text-xl font-bold text-navy">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
