import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr] bg-gray-light">
      <AdminNav />
      <main className="p-8">{children}</main>
    </div>
  );
}
