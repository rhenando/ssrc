import { AdminTable } from "@/components/admin/admin-table";

export default function HomeAdmin() {
  return <AdminTable table="section_cards" title="Home Sections" template={{ page_key: "home", section_key: "values", translation_key: "new-card", locale: "en", title: "New card", body: "Body", sort_order: 0, status: "draft" }} />;
}
