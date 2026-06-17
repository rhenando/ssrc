"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { isLocale } from "@/lib/locales";

const schema = z.object({
  locale: z.string().refine(isLocale),
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10)
});

export async function submitContact(_: { ok?: boolean; error?: string } | null, formData: FormData) {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: "Please complete the required fields." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { ok: true };
  }

  const { error } = await supabase.from("contact_submissions").insert(parsed.data);
  if (error) {
    return { error: error.message };
  }

  return { ok: true };
}
