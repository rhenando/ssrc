import { AdminTable } from "@/components/admin/admin-table";

export default function PagesAdmin() {
  return <AdminTable table="pages" title="Pages" template={{ translation_key: "services", locale: "en", slug: "services", title: "Services", status: "published" }} />;
}
