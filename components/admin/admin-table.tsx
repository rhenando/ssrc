import { Trash2 } from "lucide-react";
import { deleteRow } from "@/app/admin/actions";
import { JsonEditor } from "@/components/admin/json-editor";
import { getAdminRows } from "@/data/queries";

export async function AdminTable({ table, title, template }: { table: string; title: string; template: Record<string, unknown> }) {
  const result = await getAdminRows(table);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-head text-3xl font-black text-navy">{title}</h1>
        <p className="mt-2 text-sm text-muted">Rows are edited directly as structured JSON. Use Supabase Studio for bulk operations.</p>
      </div>

      {!result.configured && (
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm text-yellow-800">
          Supabase is not configured. Add `.env.local`, run the migration, and seed the database to enable admin reads/writes.
        </div>
      )}

      {result.error && <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">{result.error}</div>}

      <JsonEditor table={table} template={template} />

      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-light text-xs uppercase tracking-[1px] text-muted">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Summary</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {result.rows.map((row: Record<string, unknown>) => (
                <tr key={String(row.id)}>
                  <td className="max-w-[220px] truncate px-4 py-3 font-mono text-xs text-muted">{String(row.id)}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-navy">{String(row.title ?? row.name ?? row.label ?? row.slug ?? row.translation_key ?? "Untitled")}</div>
                    <div className="max-w-[520px] truncate text-xs text-muted">{String(row.description ?? row.summary ?? row.body ?? "")}</div>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">{String(row.status ?? "")}</td>
                  <td className="px-4 py-3">
                    <form action={deleteRow}>
                      <input type="hidden" name="table" value={table} />
                      <input type="hidden" name="id" value={String(row.id)} />
                      <button className="inline-flex items-center gap-1 rounded-md border border-red-200 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-50">
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {!result.rows.length && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted">No rows found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
