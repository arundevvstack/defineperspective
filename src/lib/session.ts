import { createHmac, timingSafeEqual } from 'crypto';

// Strict requirement: Environment variable only. No hardcoded fallback.
const SESSION_SECRET = (process.env.SESSION_SECRET || '').trim();

if (!SESSION_SECRET) {
  console.warn('[SECURITY] CRITICAL WARNING: SESSION_SECRET is not set in the environment. Authentication will fail closed.');
}

export type SessionPayload = {
  role: string;
  exp: number;
};

export function signSession(payload: SessionPayload): string {
  if (!SESSION_SECRET) {
    throw new Error('[SECURITY] Cannot sign session: SESSION_SECRET is not configured in environment.');
  }

  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
  return `${data}.${signature}`;
}

export function verifySession(token: string | undefined): SessionPayload | null {
  // Fail closed: if SESSION_SECRET or token is absent, reject authentication immediately
  if (!SESSION_SECRET || !token) {
    return null;
  }

  try {
    const [data, signature] = token.split('.');
    if (!data || !signature) return null;

    // Recompute signature to verify
    const expectedSignatureStr = createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
    
    const signatureBuffer = Buffer.from(signature, 'utf8');
    const expectedSignatureBuffer = Buffer.from(expectedSignatureStr, 'utf8');

    if (signatureBuffer.length !== expectedSignatureBuffer.length || !timingSafeEqual(signatureBuffer, expectedSignatureBuffer)) {
      return null; // Forged or invalid token
    }

    const payload: SessionPayload = JSON.parse(Buffer.from(data, 'base64url').toString('utf-8'));
    
    // Check expiration
    if (Date.now() > payload.exp) {
      return null;
    }
    
    return payload;
  } catch (error) {
    // Fail closed on any parsing or signature error
    return null;
  }
}
