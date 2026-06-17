import { AdminTable } from "@/components/admin/admin-table";

export default function EngineeringAdmin() {
  return <AdminTable table="engineering_projects" title="Engineering Projects" template={{ translation_key: "new-project", locale: "en", slug: "new-project", category: "Urban Development", title: "New Project", location: "Location", description: "Description", image_urls: [], status: "draft" }} />;
}
