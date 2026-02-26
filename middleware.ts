import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.codecompileronline.com";
const ROOT_HOST = "codecompileronline.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host !== ROOT_HOST) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = "https";
  redirectUrl.host = CANONICAL_HOST;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

