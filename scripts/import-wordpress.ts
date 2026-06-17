import fs from "node:fs/promises";
import { createAdminClient } from "../lib/supabase/admin";

async function main() {
  const [, , filePath] = process.argv;
  if (!filePath) {
    throw new Error("Usage: npm run import:wordpress -- path/to/wp-pages.json");
  }

  const raw = await fs.readFile(filePath, "utf8");
  const payload = JSON.parse(raw);
  const pages = Array.isArray(payload) ? payload : payload.pages ?? payload.content ?? [];

  if (!Array.isArray(pages)) {
    throw new Error("Expected a WordPress pages array, or an object containing pages/content.");
  }

  const supabase = createAdminClient();
  const { data: batch, error: batchError } = await supabase
    .from("wp_import_batches")
    .insert({ source: filePath, notes: "Staged by scripts/import-wordpress.ts" })
    .select("id")
    .single();

  if (batchError) throw batchError;

  const rows = pages.map((page: Record<string, unknown>) => ({
    batch_id: batch.id,
    wp_id: Number(page.id ?? page.ID ?? 0) || null,
    slug: String(page.slug ?? page.post_name ?? ""),
    title: typeof page.title === "object" && page.title ? String((page.title as { rendered?: string }).rendered ?? "") : String(page.title ?? page.post_title ?? ""),
    raw_payload: page,
    status: "staged"
  }));

  const { error } = await supabase.from("wp_import_pages").insert(rows);
  if (error) throw error;

  console.log(`Staged ${rows.length} WordPress pages in batch ${batch.id}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
