import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f8fb] px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-[2px] text-teal">404</p>
        <h1 className="mt-3 font-head text-4xl font-extrabold text-navy">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-muted">The page you are looking for does not exist or may have moved.</p>
        <Link
          href="/en"
          className="mt-7 inline-flex rounded-lg border-2 border-teal bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(0,128,128,.28)] transition hover:-translate-y-0.5 hover:border-teal-hover hover:bg-teal-hover"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
