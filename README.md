# SSRC Next

Isolated React/Next.js/Supabase rebuild of the SSRC WordPress theme and Elementor pages.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in Supabase project values.
3. Run the SQL migration in `supabase/migrations`.
4. Run `npm run db:seed`.
5. Start with `npm run dev`.

The public app has local seed fallbacks so it can render before Supabase is configured. Admin write features require Supabase Auth and the database migration.
