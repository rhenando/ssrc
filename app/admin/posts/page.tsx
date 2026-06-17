import { AdminTable } from "@/components/admin/admin-table";

export default function PostsAdmin() {
  return <AdminTable table="posts" title="Posts" template={{ translation_key: "new-post", locale: "en", slug: "new-post", title: "New Post", excerpt: "Excerpt", body: "Body", status: "draft" }} />;
}
