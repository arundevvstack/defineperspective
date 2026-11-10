import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { verifySession, SessionPayload } from '@/lib/session';

// In-memory sliding window rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const DEFAULT_MAX_REQUESTS = 10;
const DEFAULT_WINDOW_MS = 60 * 1000; // 1 minute window

export interface AuthSuccess {
  authorized: true;
  session?: SessionPayload;
}

export interface AuthFailure {
  authorized: false;
  response: NextResponse;
}

export type AuthResult = AuthSuccess | AuthFailure;

/**
 * Asserts administrator authentication for API routes.
 *
 * Accepted credentials:
 * 1. HTTP-only session cookie 'dp_admin_session' with role === 'admin'.
 * 2. Header fallback: 'Authorization: Bearer <ADMIN_API_SECRET>' or 'x-admin-token: <ADMIN_API_SECRET>'.
 *
 * MANDATORY SECURITY REQUIREMENT:
 * Under NO circumstance is SESSION_SECRET accepted as a bearer credential.
 * Only ADMIN_API_SECRET is accepted as the API token fallback.
 */
export async function assertAdminApi(req: Request): Promise<AuthResult> {
  try {
    // 1. Check HTTP-only session cookie first
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('dp_admin_session')?.value;
    const session = verifySession(sessionCookie);

    if (session && session.role === 'admin') {
      return { authorized: true, session };
    }

    // 2. Check secret fallback (ADMIN_API_SECRET ONLY)
    const authHeader = req.headers.get('authorization') || req.headers.get('x-admin-token');
    const adminSecret = (process.env.ADMIN_API_SECRET || '').trim();

    if (adminSecret && authHeader) {
      const cleanHeader = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7).trim()
        : authHeader.trim();

      if (cleanHeader === adminSecret) {
        return { authorized: true };
      }
    }

    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized: Administrative authentication required.' },
        { status: 401 }
      ),
    };
  } catch (error) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized: Session evaluation failed.' },
        { status: 401 }
      ),
    };
  }
}

/**
 * IP rate limiter for API routes.
 * Returns NextResponse (429) if limit exceeded, or null if request is allowed.
 */
export async function checkRateLimit(
  req: Request,
  maxRequests: number = DEFAULT_MAX_REQUESTS,
  windowMs: number = DEFAULT_WINDOW_MS
): Promise<NextResponse | null> {
  const headersList = await headers();
  const cfConnectingIp = headersList.get('cf-connecting-ip');
  const realIp = headersList.get('x-real-ip');
  const forwardedFor = headersList.get('x-forwarded-for');
  // Prioritize trusted edge proxy headers (Cloudflare / Nginx), fallback to leftmost forwarded-for
  const ip = cfConnectingIp?.trim() || realIp?.trim() || forwardedFor?.split(',')[0].trim() || 'unknown-ip';
  const now = Date.now();

  const rateInfo = rateLimitMap.get(ip);
  if (rateInfo) {
    if (now < rateInfo.resetAt) {
      if (rateInfo.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests. Rate limit exceeded.' },
          { status: 429 }
        );
      }
      rateInfo.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
  }

  // Periodic cleanup if map grows too large
  if (rateLimitMap.size > 500) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now >= value.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }

  return null;
}

