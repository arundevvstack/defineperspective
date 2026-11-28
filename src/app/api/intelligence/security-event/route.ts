import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { recordSecurityEvent, categorizeUserAgent } from '@/lib/intelligence/security-telemetry';
import { hashClientIp, extractClientIp } from '@/lib/intelligence/telemetry-hasher';
import { SecurityEventType } from '@/types/intelligence';

export async function POST(req: Request) {
  // Allow internal server invocation or assertAdminApi
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const body = await req.json();
    const { eventType, requestPath, httpMethod, httpStatusCode, actionTaken, ruleId, metadata } = body;

    // Enforce allowlists
    const ALLOWED_EVENT_TYPES: SecurityEventType[] = [
      'SPAM_URL_BLOCK_410',
      'RATE_LIMIT_429',
      'AUTH_FAIL_401',
      'QUERY_PARAM_STRIP_301',
      'APPLICATION_ERROR_500',
    ];
    const ALLOWED_ACTIONS = ['BLOCKED_410', 'THROTTLED_429', 'REJECTED_401', 'STRIPPED_301', 'LOGGED_500'];

    if (!eventType || !requestPath || !httpStatusCode || !actionTaken) {
      return NextResponse.json(
        { error: 'Missing required security event fields' },
        { status: 400 }
      );
    }

    if (!ALLOWED_EVENT_TYPES.includes(eventType as SecurityEventType)) {
      return NextResponse.json(
        { error: `Invalid eventType. Allowed types: ${ALLOWED_EVENT_TYPES.join(', ')}` },
        { status: 400 }
      );
    }

    if (!ALLOWED_ACTIONS.includes(actionTaken)) {
      return NextResponse.json(
        { error: `Invalid actionTaken. Allowed actions: ${ALLOWED_ACTIONS.join(', ')}` },
        { status: 400 }
      );
    }

    // Path normalization: pathname only, query strings stripped, max 500 chars
    let normalizedPath = '/';
    try {
      const dummyUrl = new URL(requestPath, 'http://localhost');
      normalizedPath = dummyUrl.pathname.substring(0, 500);
    } catch {
      normalizedPath = String(requestPath).split('?')[0].substring(0, 500);
    }

    // Sanitize metadata: strip sensitive keys and enforce 2KB maximum size
    let cleanMetadata: Record<string, unknown> = {};
    if (metadata && typeof metadata === 'object') {
      const FORBIDDEN_KEYS = ['password', 'token', 'secret', 'cookie', 'authorization', 'key', 'rawip', 'ip'];
      for (const [k, v] of Object.entries(metadata)) {
        if (!FORBIDDEN_KEYS.includes(k.toLowerCase()) && typeof v !== 'function') {
          cleanMetadata[k] = typeof v === 'string' ? v.substring(0, 255) : v;
        }
      }
      if (JSON.stringify(cleanMetadata).length > 2048) {
        cleanMetadata = { notice: 'Metadata truncated (exceeded 2KB)' };
      }
    }

    // IP Anonymization: Never store raw IP.
    let finalIpHash = body.ipHash;
    if (!finalIpHash) {
      const rawIp = body.clientIp || extractClientIp(req.headers);
      finalIpHash = hashClientIp(rawIp);
    }

    const uaCategory = body.userAgentCategory || categorizeUserAgent(req.headers.get('user-agent'));
    const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];
    const finalMethod = ALLOWED_METHODS.includes(String(httpMethod).toUpperCase())
      ? String(httpMethod).toUpperCase()
      : 'GET';

    const recorded = await recordSecurityEvent({
      eventType: eventType as SecurityEventType,
      requestPath: normalizedPath,
      httpMethod: finalMethod,
      httpStatusCode: Number(httpStatusCode),
      ipHash: finalIpHash,
      userAgentCategory: uaCategory,
      actionTaken,
      ruleId: typeof ruleId === 'string' ? ruleId.substring(0, 100) : undefined,
      metadata: cleanMetadata,
    });

    return NextResponse.json({ success: true, eventId: recorded.id });
  } catch (error) {
    console.error('[SECURITY INGESTION] Error processing event:', error);
    return NextResponse.json(
      { error: 'Internal error recording telemetry event' },
      { status: 500 }
    );
  }
}

