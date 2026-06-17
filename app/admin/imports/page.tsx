import { getAdminRows } from "@/data/queries";

export default async function ImportsAdmin() {
  const result = await getAdminRows("wp_import_batches");
  return (
    <div>
      <h1 className="font-head text-3xl font-black text-navy">WordPress Imports</h1>
      <p className="mt-2 text-sm text-muted">Run `npm run import:wordpress -- path/to/wp-pages.json` to stage missing live-site content for review.</p>
      <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-card">
        {!result.configured ? "Supabase is not configured." : `${result.rows.length} import batch(es) staged.`}
      </div>
    </div>
  );
}
