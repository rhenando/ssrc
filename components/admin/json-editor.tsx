"use client";

import { useActionState, useMemo, useState } from "react";
import { upsertJsonRow } from "@/app/admin/actions";

export function JsonEditor({ table, template }: { table: string; template: Record<string, unknown> }) {
  const [state, action, pending] = useActionState(upsertJsonRow, null);
  const [json, setJson] = useState(() => JSON.stringify(template, null, 2));
  const pretty = useMemo(() => {
    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch {
      return json;
    }
  }, [json]);

  return (
    <form action={action} className="rounded-2xl border border-border bg-white p-5 shadow-card">
      <input type="hidden" name="table" value={table} />
      <label className="mb-2 block text-sm font-bold text-navy">Create/update JSON row</label>
      <textarea name="json" value={pretty} onChange={(event) => setJson(event.target.value)} rows={12} className="w-full rounded-lg border border-border bg-gray-light p-4 font-mono text-xs outline-none focus:border-teal" />
      {state?.error && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{state.error}</p>}
      {state?.ok && <p className="mt-3 rounded-lg bg-teal-pale px-3 py-2 text-sm text-teal">Saved.</p>}
      <button disabled={pending} className="mt-4 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">Save row</button>
    </form>
  );
}
