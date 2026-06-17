import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import type { CookieOptions } from "@supabase/ssr";
import { defaultLocale, isLocale } from "@/lib/locales";

type CookieToSet = { name: string; value: string; options: CookieOptions };

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return NextResponse.next();

    let response = NextResponse.next({ request });
    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        }
      }
    });

    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      const login = request.nextUrl.clone();
      login.pathname = "/admin/login";
      return NextResponse.redirect(login);
    }
    return response;
  }

  const [, first] = pathname.split("/");
  const queryLocale = searchParams.get("ssrc_lang");

  if (isLocale(queryLocale ?? undefined)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${queryLocale}${pathname.replace(/^\/(en|ar)/, "")}`;
    url.searchParams.delete("ssrc_lang");
    const response = NextResponse.redirect(url);
    response.cookies.set("ssrc_lang", queryLocale!, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  if (!isLocale(first)) {
    const cookieLocale = request.cookies.get("ssrc_lang")?.value;
    const locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
