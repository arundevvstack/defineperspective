import { createHmac } from 'crypto';

const TELEMETRY_IP_PEPPER = (process.env.TELEMETRY_IP_PEPPER || '').trim();

if (!TELEMETRY_IP_PEPPER && process.env.NODE_ENV === 'production') {
  console.warn(
    '[SECURITY WARNING] TELEMETRY_IP_PEPPER is unset in production. Anonymization requires a dedicated server pepper.'
  );
}

/**
 * Computes non-reversible Keyed HMAC-SHA256 hash of a client IP address.
 * Plain SHA-256 is explicitly prohibited due to rainbow table precomputation vulnerabilities across IPv4 space.
 */
export function hashClientIp(clientIp: string): string {
  const cleanIp = (clientIp || 'unknown-client').trim().toLowerCase();
  
  if (cleanIp === 'unknown' || cleanIp === 'unknown-client') {
    return '0000000000000000000000000000000000000000000000000000000000000000';
  }

  // Use configured pepper, or safe local offline salt for dev resilience
  const pepper = TELEMETRY_IP_PEPPER || 'dp-telemetry-dev-pepper-seed-2026';
  return createHmac('sha256', pepper).update(cleanIp).digest('hex');
}

/**
 * Safely extracts client IP from trusted edge proxy headers without external lookups.
 * Priority: cf-connecting-ip -> x-real-ip -> x-forwarded-for (first entry).
 */
export function extractClientIp(headers: Headers): string {
  const cfIp = headers.get('cf-connecting-ip');
  if (cfIp) return cfIp.trim();

  const realIp = headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    const firstIp = forwarded.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  return 'unknown';
}

