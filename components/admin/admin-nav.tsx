import Link from "next/link";

const items = [
  ["/admin", "Dashboard"],
  ["/admin/pages", "Pages"],
  ["/admin/home", "Home"],
  ["/admin/about", "About"],
  ["/admin/engineering", "Engineering"],
  ["/admin/downloads", "Downloads"],
  ["/admin/posts", "Posts"],
  ["/admin/contact", "Contact"],
  ["/admin/imports", "Imports"]
];

export function AdminNav() {
  return (
    <aside className="min-h-screen border-r border-border bg-white p-5">
      <div className="mb-8 font-head text-2xl font-black text-navy">SSRC CMS</div>
      <nav className="grid gap-1">
        {items.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-semibold text-muted transition hover:bg-teal-pale hover:text-teal">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
