"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const allowedTables = new Set([
  "pages",
  "posts",
  "section_cards",
  "stats",
  "team_members",
  "downloads",
  "engineering_projects",
  "engineering_clients",
  "contact_channels",
  "job_posts"
]);

export async function upsertJsonRow(_: { ok?: boolean; error?: string } | null, formData: FormData) {
  const table = String(formData.get("table") ?? "");
  const json = String(formData.get("json") ?? "{}");

  if (!allowedTables.has(table)) return { error: "Table is not editable from this screen." };

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(json);
  } catch {
    return { error: "Invalid JSON." };
  }

  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const { error } = await supabase.from(table).upsert(payload);
  if (error) return { error: error.message };

  revalidatePath("/admin");
  return { ok: true };
}

export async function deleteRow(formData: FormData) {
  const table = String(formData.get("table") ?? "");
  const id = String(formData.get("id") ?? "");

  if (!allowedTables.has(table)) throw new Error("Table is not editable from this screen.");
  if (!id) throw new Error("Missing row id.");

  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase is not configured.");

  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;

  revalidatePath("/admin");
}
