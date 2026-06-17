"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    try {
      const form = new FormData(event.currentTarget);
      const supabase = createClient();
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: String(form.get("email")),
        password: String(form.get("password"))
      });

      if (loginError) setError(loginError.message);
      else router.push("/admin");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to sign in.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 grid gap-4">
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Email
        <input name="email" type="email" required className="rounded-lg border border-border px-4 py-3 outline-none focus:border-teal" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Password
        <input name="password" type="password" required className="rounded-lg border border-border px-4 py-3 outline-none focus:border-teal" />
      </label>
      {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      <button disabled={pending} className="rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">Sign in</button>
    </form>
  );
}
