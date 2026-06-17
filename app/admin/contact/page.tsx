import { AdminTable } from "@/components/admin/admin-table";

export default function ContactAdmin() {
  return <AdminTable table="contact_channels" title="Contact Channels" template={{ type: "email", label: "General", value: "hello@example.com", href: "mailto:hello@example.com", status: "draft" }} />;
}
