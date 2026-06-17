import { createAdminClient } from "../lib/supabase/admin";
import {
  contactChannels,
  downloads,
  engineeringClients,
  engineeringProjects,
  homePurpose,
  homeStats,
  navItems,
  services,
  teamMembers,
  values
} from "../data/site";

async function main() {
  const supabase = createAdminClient();

  await supabase.from("navigation_items").upsert(
    navItems.flatMap((item, sortOrder) =>
      (["en", "ar"] as const).map((locale) => ({
        translation_key: item.href === "/" ? "home" : item.href.slice(1),
        locale,
        label: item.labels[locale],
        href: `/${locale}${item.href === "/" ? "" : item.href}`,
        sort_order: sortOrder,
        status: "published"
      }))
    ),
    { onConflict: "translation_key,locale" }
  );

  await supabase.from("stats").upsert(
    homeStats.flatMap((stat, sortOrder) =>
      (["en", "ar"] as const).map((locale) => ({
        page_key: "home",
        translation_key: `home-stat-${sortOrder}`,
        locale,
        value: stat.value,
        suffix: stat.suffix,
        label: stat.labels[locale],
        sort_order: sortOrder,
        status: "published"
      }))
    ),
    { onConflict: "page_key,translation_key,locale" }
  );

  const cards = [...homePurpose, ...values, ...services].flatMap((card, sortOrder) =>
    (["en", "ar"] as const).map((locale) => ({
      page_key: card.key === "mission" || card.key === "vision" ? "home" : card.key.includes("research") ? "services" : "home",
      section_key: card.key === "mission" || card.key === "vision" ? "purpose" : services.includes(card) ? "services" : "values",
      translation_key: card.key,
      locale,
      eyebrow: card.eyebrow?.[locale],
      title: card.titles[locale],
      subtitle: card.subtitles?.[locale],
      body: card.bodies[locale],
      icon: card.icon,
      sort_order: sortOrder,
      status: "published"
    }))
  );
  await supabase.from("section_cards").upsert(cards, { onConflict: "page_key,section_key,translation_key,locale" });

  await supabase.from("team_members").upsert(
    teamMembers.flatMap((member, sortOrder) =>
      (["en", "ar"] as const).map((locale) => ({
        translation_key: member.slug,
        locale,
        slug: member.slug,
        name: member.name,
        role_title: member.roles[locale],
        bio: member.bios[locale],
        group_key: member.group,
        image_url: member.image,
        sort_order: sortOrder,
        status: "published"
      }))
    ),
    { onConflict: "translation_key,locale" }
  );

  await supabase.from("downloads").upsert(
    downloads.flatMap((download, sortOrder) =>
      (["en", "ar"] as const).map((locale) => ({
        translation_key: download.slug,
        locale,
        slug: download.slug,
        title: download.filenames[locale],
        description: download.descriptions[locale],
        file_url: download.filePath,
        file_name: download.filenames[locale],
        sort_order: sortOrder,
        status: "published"
      }))
    ),
    { onConflict: "translation_key,locale" }
  );

  await supabase.from("engineering_projects").upsert(
    engineeringProjects.flatMap((project, sortOrder) =>
      (["en", "ar"] as const).map((locale) => ({
        translation_key: project.slug,
        locale,
        slug: project.slug,
        category: project.categories[locale],
        title: project.titles[locale],
        location: project.locations[locale],
        description: project.descriptions[locale],
        accent_color: project.color,
        image_urls: project.images,
        sort_order: sortOrder,
        status: "published"
      }))
    ),
    { onConflict: "translation_key,locale" }
  );

  await supabase.from("engineering_clients").upsert(
    engineeringClients.map((client, sortOrder) => ({
      slug: client.slug,
      name: client.name,
      logo_url: client.logoUrl,
      sort_order: sortOrder,
      status: "published"
    })),
    { onConflict: "slug" }
  );

  await supabase.from("contact_channels").insert(contactChannels.map((channel, sortOrder) => ({ ...channel, sort_order: sortOrder, status: "published" })));

  console.log("Seed complete");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
