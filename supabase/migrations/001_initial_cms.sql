create extension if not exists pgcrypto;

create type public.content_status as enum ('draft', 'published', 'archived');
create type public.admin_role as enum ('admin', 'editor');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role public.admin_role not null default 'editor',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  bucket text not null default 'site-media',
  path text not null,
  public_url text not null,
  alt_en text,
  alt_ar text,
  mime_type text,
  size_bytes bigint,
  created_at timestamptz not null default now()
);

create table public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.navigation_items (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  label text not null,
  href text not null,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.footer_columns (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  title text not null,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.footer_links (
  id uuid primary key default gen_random_uuid(),
  column_id uuid references public.footer_columns(id) on delete cascade,
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  label text not null,
  href text not null,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.pages (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  slug text not null,
  title text not null,
  summary text,
  body text,
  seo_title text,
  seo_description text,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale),
  unique (locale, slug)
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  slug text not null,
  title text not null,
  excerpt text,
  body text,
  featured_media_id uuid references public.media_assets(id),
  published_at timestamptz,
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale),
  unique (locale, slug)
);

create table public.section_cards (
  id uuid primary key default gen_random_uuid(),
  page_key text not null,
  section_key text not null,
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  eyebrow text,
  title text not null,
  subtitle text,
  body text,
  icon text,
  media_id uuid references public.media_assets(id),
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_key, section_key, translation_key, locale)
);

create table public.stats (
  id uuid primary key default gen_random_uuid(),
  page_key text not null,
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  value text not null,
  suffix text,
  label text not null,
  description text,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  unique (page_key, translation_key, locale)
);

create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  slug text not null,
  name text not null,
  role_title text not null,
  bio text,
  group_key text not null default 'research',
  image_url text,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.downloads (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  slug text not null,
  title text not null,
  description text,
  file_url text not null,
  file_name text not null,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.engineering_projects (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  slug text not null,
  category text not null,
  title text not null,
  location text,
  description text,
  accent_color text not null default '#1e8a2e',
  image_urls text[] not null default '{}',
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.engineering_clients (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  logo_url text not null,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now()
);

create table public.contact_channels (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('email','phone')),
  label text not null,
  value text not null,
  href text not null,
  sort_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now()
);

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  locale text not null check (locale in ('en','ar')),
  name text not null,
  email text not null,
  company text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table public.job_posts (
  id uuid primary key default gen_random_uuid(),
  translation_key text not null,
  locale text not null check (locale in ('en','ar')),
  slug text not null,
  title text not null,
  location text,
  description text,
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (translation_key, locale)
);

create table public.wp_import_batches (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  notes text,
  status text not null default 'staged',
  created_at timestamptz not null default now()
);

create table public.wp_import_pages (
  id uuid primary key default gen_random_uuid(),
  batch_id uuid references public.wp_import_batches(id) on delete cascade,
  wp_id bigint,
  slug text,
  title text,
  raw_payload jsonb not null,
  mapped_page_id uuid references public.pages(id),
  status text not null default 'staged',
  created_at timestamptz not null default now()
);

create table public.admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  action text not null,
  table_name text,
  row_id uuid,
  details jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin','editor')
  );
$$;

alter table public.profiles enable row level security;
alter table public.media_assets enable row level security;
alter table public.site_settings enable row level security;
alter table public.navigation_items enable row level security;
alter table public.footer_columns enable row level security;
alter table public.footer_links enable row level security;
alter table public.pages enable row level security;
alter table public.posts enable row level security;
alter table public.section_cards enable row level security;
alter table public.stats enable row level security;
alter table public.team_members enable row level security;
alter table public.downloads enable row level security;
alter table public.engineering_projects enable row level security;
alter table public.engineering_clients enable row level security;
alter table public.contact_channels enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.job_posts enable row level security;
alter table public.wp_import_batches enable row level security;
alter table public.wp_import_pages enable row level security;
alter table public.admin_audit_logs enable row level security;

create policy "public published pages" on public.pages for select using (status = 'published');
create policy "public published posts" on public.posts for select using (status = 'published');
create policy "public published cards" on public.section_cards for select using (status = 'published');
create policy "public published stats" on public.stats for select using (status = 'published');
create policy "public published team" on public.team_members for select using (status = 'published');
create policy "public published downloads" on public.downloads for select using (status = 'published');
create policy "public published engineering projects" on public.engineering_projects for select using (status = 'published');
create policy "public published engineering clients" on public.engineering_clients for select using (status = 'published');
create policy "public published nav" on public.navigation_items for select using (status = 'published');
create policy "public published contact channels" on public.contact_channels for select using (status = 'published');
create policy "public insert contact submissions" on public.contact_submissions for insert with check (true);

create policy "admin all profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all media" on public.media_assets for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all settings" on public.site_settings for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all nav" on public.navigation_items for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all footer columns" on public.footer_columns for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all footer links" on public.footer_links for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all pages" on public.pages for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all posts" on public.posts for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all cards" on public.section_cards for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all stats" on public.stats for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all team" on public.team_members for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all downloads" on public.downloads for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all engineering projects" on public.engineering_projects for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all engineering clients" on public.engineering_clients for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all contact channels" on public.contact_channels for all using (public.is_admin()) with check (public.is_admin());
create policy "admin read submissions" on public.contact_submissions for select using (public.is_admin());
create policy "admin update submissions" on public.contact_submissions for update using (public.is_admin()) with check (public.is_admin());
create policy "admin all jobs" on public.job_posts for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all import batches" on public.wp_import_batches for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all import pages" on public.wp_import_pages for all using (public.is_admin()) with check (public.is_admin());
create policy "admin audit read" on public.admin_audit_logs for select using (public.is_admin());
