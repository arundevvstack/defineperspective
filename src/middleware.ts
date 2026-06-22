import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALLOWED_PARAMS = new Set([
  'view', 'title', 'industry', 'geo', 'node', 
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 
  'gclid', 'fbclid', 'wbraid', 'gbraid', 'msclkid', 'ref'
]);

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let hasUnallowedParams = false;
  const strippedParams: string[] = [];

  console.log(`[MIDDLEWARE RUNNING] Path: ${url.pathname}`);

  Array.from(url.searchParams.keys()).forEach((key) => {
    if (!ALLOWED_PARAMS.has(key)) {
      strippedParams.push(key);
      hasUnallowedParams = true;
    }
  });

  if (hasUnallowedParams) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm)$).*)',
  ],
};
