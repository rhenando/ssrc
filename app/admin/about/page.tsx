import { AdminTable } from "@/components/admin/admin-table";

export default function AboutAdmin() {
  return <AdminTable table="team_members" title="Team Members" template={{ translation_key: "new-member", locale: "en", slug: "new-member", name: "New Member", role_title: "Role", bio: "Bio", group_key: "research", image_url: "/images/ahmad.png", status: "draft" }} />;
}
