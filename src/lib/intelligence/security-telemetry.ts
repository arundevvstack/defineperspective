import { SecurityTelemetryEvent, SecurityTelemetrySummary } from '@/types/intelligence';
import { supabaseAdmin } from '@/lib/supabase-admin';

// In-memory sliding window of security events for real-time edge monitoring
// NOTE: In-memory buffers are NOT durable across serverless invocations or restarts.
// They serve solely as a real-time runtime monitor until database migrations are applied.
const inMemoryEvents: SecurityTelemetryEvent[] = [];
const MAX_IN_MEMORY_EVENTS = 500;

export function categorizeUserAgent(ua: string | null | undefined): SecurityTelemetryEvent['userAgentCategory'] {
  if (!ua) return 'UNKNOWN';
  const lower = ua.toLowerCase();

  if (
    lower.includes('googlebot') ||
    lower.includes('bingbot') ||
    lower.includes('yandex') ||
    lower.includes('duckduckbot') ||
    lower.includes('slurp') ||
    lower.includes('baiduspider')
  ) {
    return 'BOT_VERIFIED';
  }

  if (
    lower.includes('python-requests') ||
    lower.includes('curl/') ||
    lower.includes('wget') ||
    lower.includes('sqlmap') ||
    lower.includes('nikto') ||
    lower.includes('masscan') ||
    lower.includes('zgrab') ||
    lower.includes('go-http-client') ||
    lower.includes('aiohttp')
  ) {
    return 'BOT_SUSPICIOUS';
  }

  if (lower.includes('postmanruntime') || lower.includes('insomnia')) {
    return 'API_CLIENT';
  }

  if (lower.includes('mozilla') || lower.includes('chrome') || lower.includes('safari') || lower.includes('firefox')) {
    return 'BROWSER';
  }

  return 'UNKNOWN';
}

/**
 * Records an edge security event into the in-memory runtime buffer.
 * Attempts non-blocking async dispatch to Supabase if configured.
 * Fail-open guarantee: If Supabase fails or table is absent, security enforcement is never blocked.
 */
export async function recordSecurityEvent(
  params: Omit<SecurityTelemetryEvent, 'id' | 'eventTimestamp' | 'storageTier'>
): Promise<SecurityTelemetryEvent> {
  const event: SecurityTelemetryEvent = {
    id: `sec_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    eventTimestamp: new Date().toISOString(),
    storageTier: 'BUFFERED_MEMORY',
    ...params,
  };

  // Add to in-memory sliding buffer
  inMemoryEvents.unshift(event);
  if (inMemoryEvents.length > MAX_IN_MEMORY_EVENTS) {
    inMemoryEvents.pop();
  }

  // Optional non-blocking write to Supabase (Fail-Open)
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('offline-dev')) {
      (async () => {
        try {
          const { error } = await supabaseAdmin.from('security_telemetry_events').insert({
            event_type: event.eventType,
            request_path: event.requestPath,
            http_method: event.httpMethod,
            http_status_code: event.httpStatusCode,
            ip_hash: event.ipHash || '0000000000000000000000000000000000000000000000000000000000000000',
            user_agent_category: event.userAgentCategory,
            action_taken: event.actionTaken,
            rule_id: event.ruleId || null,
            metadata: event.metadata || {},
          });
          if (error && error.code !== '42P01') {
            console.warn('[SECURITY TELEMETRY] Async write notice:', error.message);
          }
        } catch {
          console.warn('[SECURITY TELEMETRY] Non-blocking dispatch caught');
        }
      })();
    }
  } catch {
    // Fail-open: security enforcement is never compromised
  }

  return event;
}

export function getSecurityTelemetrySummary(
  timeframeHours: number = 24
): SecurityTelemetrySummary {
  const cutoff = Date.now() - timeframeHours * 60 * 60 * 1000;
  const filtered = inMemoryEvents.filter(
    (e) => new Date(e.eventTimestamp).getTime() >= cutoff
  );

  let total410 = 0;
  let total429 = 0;
  let total401 = 0;
  let total500 = 0;
  let total301 = 0;

  for (const e of filtered) {
    if (e.eventType === 'SPAM_URL_BLOCK_410') total410++;
    else if (e.eventType === 'RATE_LIMIT_429') total429++;
    else if (e.eventType === 'AUTH_FAIL_401') total401++;
    else if (e.eventType === 'APPLICATION_ERROR_500') total500++;
    else if (e.eventType === 'QUERY_PARAM_STRIP_301') total301++;
  }

  // MANDATORY ARCHITECTURAL REQUIREMENT:
  // Do NOT calculate threat mitigation efficacy from block counts alone.
  // Calculating an efficacy ratio without a verified denominator of total attack attempts is invalid.
  // Held strictly at null with explanatory status.
  const threatMitigationExplanation =
    'Threat mitigation efficacy is held at null. Calculating efficacy from block counts alone is mathematically invalid without a verifiable denominator of total inbound threat pressure.';

  return {
    aggregations: {
      total410Blocks: total410,
      total429Throttles: total429,
      total401Rejections: total401,
      total500Errors: total500,
      totalParamStrips: total301,
      threatMitigationEfficacyPct: null, // Strictly null: denominator methodology undefined
      threatMitigationExplanation,
    },
    // Privacy: ipHash stripped from all API outputs
    recentEvents: filtered.slice(0, 100).map((event) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ipHash, ...eventWithoutIp } = event;
      return eventWithoutIp;
    }),
    provenance: {
      sourceProvider: 'Next.js Edge Middleware & API Guard',
      evidenceClassification: 'CALCULATED',
      lastRetrievedAt: new Date().toISOString(),
      status: filtered.length > 0 ? 'OPERATIONAL' : 'NO_EVENTS_RECORDED',
      confidenceScore: 1.0,
      storageTier: 'BUFFERED_MEMORY',
      notes: 'Calculated from non-durable in-memory sliding buffer (BUFFERED_MEMORY). Persistent database migration pending.',
    },
  };
}
