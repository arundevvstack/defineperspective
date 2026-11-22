import crypto from 'crypto';
import { PortfolioAdminRole } from '@/types/portfolio-cms';

export interface SignedAssertionEnvelope {
  actor_id: string;
  actor_role: PortfolioAdminRole;
  nonce: string;
  timestamp: number;
  payload_hash: string;
  signature: string;
}

/**
 * Converts a JavaScript value into PostgreSQL's canonical jsonb::text serialization format.
 * Rules:
 * 1. Object keys sorted by length (ascending), then lexicographically (ASCII).
 * 2. Key-value separator is ': ' (colon followed by space).
 * 3. Pair separator is ', ' (comma followed by space).
 * 4. Arrays formatted as [elem1, elem2] with ', ' separator.
 */
export function canonicalPostgresJsonb(val: unknown): string {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'boolean') return val ? 'true' : 'false';
  if (typeof val === 'number') return String(val);
  if (typeof val === 'string') return JSON.stringify(val);
  if (Array.isArray(val)) {
    return '[' + val.map(canonicalPostgresJsonb).join(', ') + ']';
  }
  if (typeof val === 'object') {
    const keys = Object.keys(val as Record<string, unknown>).sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.localeCompare(b);
    });
    const pairs = keys.map(
      (k) => JSON.stringify(k) + ': ' + canonicalPostgresJsonb((val as Record<string, unknown>)[k])
    );
    return '{' + pairs.join(', ') + '}';
  }
  return JSON.stringify(val);
}

/**
 * Creates a cryptographically signed actor assertion envelope matching
 * Supabase V14.9 public.fn_verify_and_consume_actor_assertion RPC protocol.
 *
 * Signing protocol:
 * 1. Canonical payload string = canonicalPostgresJsonb(payload)
 * 2. Payload hash = SHA-256(canonical payload string)
 * 3. Signing string = "v1:<actor_id>:<actor_role>:<nonce>:<timestamp>:<payload_hash>"
 * 4. Signature = HMAC-SHA256(signing string, secret)
 */
export function createSignedAssertion(
  actorId: string,
  actorRole: PortfolioAdminRole,
  payload: Record<string, unknown> | null,
  customSecret?: string
): SignedAssertionEnvelope {
  const secret = (
    customSecret ||
    process.env.PORTFOLIO_SIGNING_SECRET ||
    process.env.ADMIN_API_SECRET ||
    process.env.SESSION_SECRET
  )?.trim();

  if (!secret || secret.length < 32) {
    throw new Error(
      'SECURITY_VIOLATION: Cryptographic signing secret is unconfigured or below minimum length (32 bytes). Fail closed.'
    );
  }

  const nonce = crypto.randomUUID();
  const timestamp = Math.floor(Date.now() / 1000); // Unix epoch in seconds

  const payloadString = payload ? canonicalPostgresJsonb(payload) : '{}';
  const payloadHash = crypto
    .createHash('sha256')
    .update(payloadString, 'utf8')
    .digest('hex');

  const signingString = `v1:${actorId.trim()}:${actorRole}:${nonce}:${timestamp}:${payloadHash}`;

  const signature = crypto
    .createHmac('sha256', Buffer.from(secret, 'utf8'))
    .update(signingString, 'utf8')
    .digest('hex');

  return {
    actor_id: actorId.trim(),
    actor_role: actorRole,
    nonce,
    timestamp,
    payload_hash: payloadHash,
    signature,
  };
}
