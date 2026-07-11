import type { NextRequest } from 'next/server';

/**
 * Enterprise Zero-Regression Spam URL Firewall
 * 
 * Intercepts known spam patterns (paths and query parameters) at the edge.
 * Returns true if the request is identified as spam, false otherwise.
 * 
 * Rules applied:
 * 1. Specific exact match or prefix paths (e.g. /shop/, /shopdetail*)
 * 2. Specific exact query parameters (e.g. kg=)
 * 3. Specific query parameter patterns (e.g. id= purely numeric)
 */

const SPAM_PATH_PATTERNS = [
  /^\/shop\/.*/i,
  /^\/shopdetail.*/i,
  /^\/productdetail.*/i,
  /^\/product\/.*/i,
  /^\/item\/.*/i,
  /^\/old-shop\/.*/i,
  /^\/catalog\/.*/i,
  /^\/cgi-bin\/.*/i,
  /^\/wp-.*/i,
  /^\/xmlrpc\.php/i,
  /^\/phpmyadmin/i,
  /^\/\.env/i
];

export function isSpamRequest(request: NextRequest): boolean {
  try {
    const url = request.nextUrl;
    const pathname = url.pathname;
    const searchParams = url.searchParams;

    // 1. Check Paths
    for (const pattern of SPAM_PATH_PATTERNS) {
      if (pattern.test(pathname)) {
        return true;
      }
    }

    // 2. Check strict query parameter presence
    if (
      searchParams.has('kg') ||
      searchParams.has('productid') ||
      searchParams.has('shopdetail') ||
      searchParams.has('itemid')
    ) {
      return true;
    }

    // 3. Check regex-based query parameter patterns
    // e.g., id= purely numeric spam (legitimate ids are strings/slugs)
    if (searchParams.has('id')) {
      const idVal = searchParams.get('id');
      if (idVal && /^\d+$/.test(idVal)) {
        return true;
      }
    }

    return false;
  } catch (error) {
    // In case of any URL parsing error, fail open to avoid blocking legitimate traffic
    console.error('[Spam Firewall] Error evaluating request:', error);
    return false;
  }
}
