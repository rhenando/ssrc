import {
  contactChannels,
  downloads,
  engineeringClients,
  engineeringProjects,
  homePurpose,
  homeStats,
  navItems,
  services,
  teamMembers,
  values
} from "@/data/site";
import { createClient } from "@/lib/supabase/server";

async function tryTable<T>(table: string, fallback: T[], order = "sort_order") {
  const supabase = await createClient();
  if (!supabase) return fallback;

  const { data, error } = await supabase.from(table).select("*").eq("status", "published").order(order);
  if (error || !data?.length) return fallback;
  return data as T[];
}

export async function getPublicData() {
  return {
    navItems,
    homeStats,
    homePurpose,
    values,
    services,
    teamMembers,
    downloads,
    engineeringProjects,
    engineeringClients,
    contactChannels
  };
}

export async function getAdminRows(table: string) {
  const supabase = await createClient();
  if (!supabase) return { rows: [], configured: false };

  const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false }).limit(100);
  if (error) return { rows: [], configured: true, error: error.message };
  return { rows: data ?? [], configured: true };
}

export { tryTable };
