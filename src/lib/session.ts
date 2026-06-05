import { createHmac, timingSafeEqual } from 'crypto';

// Strict requirement: Environment variable only. No hardcoded fallback.
if (!process.env.SESSION_SECRET) {
  console.warn('CRITICAL WARNING: SESSION_SECRET is not set in the environment.');
}
const SESSION_SECRET = process.env.SESSION_SECRET as string;

export type SessionPayload = {
  role: string;
  exp: number;
};

export function signSession(payload: SessionPayload): string {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
  return `${data}.${signature}`;
}

export function verifySession(token: string | undefined): SessionPayload | null {
  if (!token) return null;

  const [data, signature] = token.split('.');
  if (!data || !signature) return null;

  // Recompute signature to verify
  const expectedSignatureStr = createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
  
  const signatureBuffer = Buffer.from(signature, 'utf8');
  const expectedSignatureBuffer = Buffer.from(expectedSignatureStr, 'utf8');

  if (signatureBuffer.length !== expectedSignatureBuffer.length || !timingSafeEqual(signatureBuffer, expectedSignatureBuffer)) {
    return null; // Forged or invalid token
  }

  try {
    const payload: SessionPayload = JSON.parse(Buffer.from(data, 'base64url').toString('utf-8'));
    
    // Check expiration
    if (Date.now() > payload.exp) {
      return null;
    }
    
    return payload;
  } catch (error) {
    return null;
  }
}
