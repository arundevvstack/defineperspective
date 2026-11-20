/**
 * Shared Portfolio CMS Error Classification and Secret Sanitization
 * Pure TypeScript utility module — safe for server and client consumption without Next.js "use server" constraints.
 */

export type PortfolioErrorType =
  | 'NONE'
  | 'DATABASE_SCHEMA_MISSING'
  | 'DATABASE_TIMEOUT'
  | 'NETWORK_UNREACHABLE'
  | 'AUTH_UNAUTHORIZED'
  | 'DATABASE_ERROR';

export interface ClassifyErrorResult {
  errorType: PortfolioErrorType;
  sanitizedMessage: string;
}

/**
 * Strips any sensitive credentials, tokens, or private secrets from error strings.
 */
export function sanitizeErrorMessage(msg: string): string {
  if (!msg) return 'Unknown error';
  return msg
    .replace(/ey[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}/g, '[REDACTED_JWT]')
    .replace(/https?:\/\/[^@\s]+:[^@\s]+@/g, 'https://[REDACTED_CREDS]@')
    .replace(/sbp_[a-zA-Z0-9_-]+/g, '[REDACTED_KEY]');
}

/**
 * Classifies query and network errors into actionable categories while preserving safe details.
 */
export function classifyPortfolioError(error: unknown, isAborted?: boolean): ClassifyErrorResult {
  if (isAborted) {
    return {
      errorType: 'DATABASE_TIMEOUT',
      sanitizedMessage: 'Database request timed out after 3.5 seconds. Supabase Staging may be slow or unreachable.',
    };
  }

  const rawMessage = error instanceof Error
    ? error.message
    : typeof error === 'object' && error !== null && 'message' in error && typeof (error as Record<string, unknown>).message === 'string'
      ? String((error as Record<string, unknown>).message)
      : String(error || 'Unknown error');

  const rawCode = typeof error === 'object' && error !== null && 'code' in error
    ? String((error as Record<string, unknown>).code || '')
    : '';

  const cleanMessage = sanitizeErrorMessage(rawMessage);

  // If the error originates from PostgreSQL (5-char SQLSTATE) or PostgREST (PGRST-prefixed code),
  // route it by exact engine code first to prevent mistaking database errors for network failures.
  const isPostgresSqlState = /^[0-9A-Z]{5}$/.test(rawCode) || rawCode.startsWith('PGRST');
  if (isPostgresSqlState) {
    if (rawCode === '42P01' || rawCode === 'PGRST204') {
      return {
        errorType: 'DATABASE_SCHEMA_MISSING',
        sanitizedMessage: 'Database relation "portfolio_projects" does not exist in Supabase Staging. Schema migration required.',
      };
    }
    if (rawCode === '42501' || rawCode === 'PGRST301') {
      return {
        errorType: 'AUTH_UNAUTHORIZED',
        sanitizedMessage: cleanMessage.includes('UNAUTHORIZED')
          ? cleanMessage
          : 'Authentication or permission denied for portfolio operation.',
      };
    }
    // Any other native Postgres or PostgREST error is definitively a database engine error
    return {
      errorType: 'DATABASE_ERROR',
      sanitizedMessage: cleanMessage,
    };
  }

  // 1. Timeout / Abort
  if (
    cleanMessage.includes('AbortError') ||
    cleanMessage.toLowerCase().includes('aborted') ||
    cleanMessage.toLowerCase().includes('timeout')
  ) {
    return {
      errorType: 'DATABASE_TIMEOUT',
      sanitizedMessage: 'Database request timed out. Please verify database availability or try again.',
    };
  }

  // 2. Authentication / Authorization
  if (
    cleanMessage.toUpperCase().includes('UNAUTHORIZED') ||
    cleanMessage.toLowerCase().includes('permission denied') ||
    cleanMessage.toLowerCase().includes('jwt')
  ) {
    return {
      errorType: 'AUTH_UNAUTHORIZED',
      sanitizedMessage: cleanMessage.includes('UNAUTHORIZED')
        ? cleanMessage
        : 'Authentication or permission denied for portfolio operation.',
    };
  }

  // 3. Missing database relation
  if (
    (cleanMessage.includes('portfolio_projects') && cleanMessage.includes('does not exist')) ||
    (cleanMessage.includes('relation') && cleanMessage.includes('does not exist'))
  ) {
    return {
      errorType: 'DATABASE_SCHEMA_MISSING',
      sanitizedMessage: 'Database relation "portfolio_projects" does not exist in Supabase Staging. Schema migration required.',
    };
  }

  // 4. Network failure
  if (
    cleanMessage.includes('fetch failed') ||
    cleanMessage.includes('ENOTFOUND') ||
    cleanMessage.includes('ECONNREFUSED') ||
    cleanMessage.includes('ECONNRESET') ||
    cleanMessage.includes('ETIMEDOUT') ||
    cleanMessage.includes('EPROTO') ||
    cleanMessage.includes('UND_ERR')
  ) {
    return {
      errorType: 'NETWORK_UNREACHABLE',
      sanitizedMessage: 'Network failure: Unable to reach the Supabase Staging API endpoint.',
    };
  }

  // 5. Other database errors
  return {
    errorType: 'DATABASE_ERROR',
    sanitizedMessage: cleanMessage,
  };
}
