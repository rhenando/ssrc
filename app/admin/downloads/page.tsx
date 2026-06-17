import { AdminTable } from "@/components/admin/admin-table";

export default function DownloadsAdmin() {
  return <AdminTable table="downloads" title="Downloads" template={{ translation_key: "new-download", locale: "en", slug: "new-download", title: "Document", description: "Description", file_url: "/docs/file.pdf", file_name: "file.pdf", status: "draft" }} />;
}
