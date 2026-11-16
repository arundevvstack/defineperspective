import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit } from '@/lib/api-security';

// Maximum allowed payload size: 50 KB
const MAX_PAYLOAD_SIZE = 50 * 1024;

// Standard RFC-compliant email pattern (syntax validation only; does not claim mailbox existence)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Standard RFC 4122 UUID regex pattern
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Rejection handlers for unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Lead submission requires POST.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

/**
 * POST /api/leads
 * 
 * Public endpoint for customer lead registration and guide access capture.
 * 
 * Security Controls:
 * - Rate limited via process-local checkRateLimit (best-effort heuristic).
 * - Request body size constrained to <= 50 KB.
 * - Honeypot detection for automated bot submissions.
 * - Strict client-side field allowlist.
 * - Server-side validation of email, UUID guide reference, and source URL.
 * - Decoupled from guide telemetry; does not invoke increment_download.
 * - Relies on confirmed PostgreSQL defaults for score (= 0) and asset_requested.
 * - Executes with server-only supabaseAdmin (service_role).
 */
export async function POST(req: Request) {
  try {
    // 1. Sliding Window Rate Limiting (10 requests per minute per IP, process-local best-effort)
    const rateLimitResponse = await checkRateLimit(req, 10, 60 * 1000);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    // 2. Request Size Validation (Content-Length Header Check)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: 'Payload Too Large. Request exceeds allowed size limit.' },
        { status: 413 }
      );
    }

    // 3. Safe JSON Body Parsing
    let rawText: string;
    try {
      rawText = await req.text();
    } catch {
      return NextResponse.json(
        { error: 'Failed to read request body.' },
        { status: 400 }
      );
    }

    if (rawText.length > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: 'Payload Too Large. Request body exceeds 50 KB.' },
        { status: 413 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: 'Malformed request: invalid JSON payload.' },
        { status: 400 }
      );
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Invalid payload: request body must be a JSON object.' },
        { status: 400 }
      );
    }

    // 4. Honeypot Verification (Silently reject bot submissions)
    if (body.website || body.honeypot || body.hp) {
      // Return generic 400 without performing database insertion
      return NextResponse.json(
        { error: 'Invalid submission parameters.' },
        { status: 400 }
      );
    }

    // 5. Email Validation (Mandatory)
    const rawEmail = body.email;
    if (!rawEmail || typeof rawEmail !== 'string') {
      return NextResponse.json(
        { error: 'Validation Error: Email address is required.' },
        { status: 400 }
      );
    }

    const cleanEmail = rawEmail.trim().toLowerCase();
    if (cleanEmail.length === 0 || cleanEmail.length > 255 || !EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Validation Error: A valid email address is required.' },
        { status: 400 }
      );
    }

    // 6. Source Guide ID Validation (Optional UUID referential integrity check)
    let cleanGuideId: string | null = null;
    if (body.source_guide_id !== undefined && body.source_guide_id !== null && body.source_guide_id !== '') {
      if (typeof body.source_guide_id !== 'string' || !UUID_REGEX.test(body.source_guide_id.trim())) {
        return NextResponse.json(
          { error: 'Validation Error: Invalid guide identifier format.' },
          { status: 400 }
        );
      }
      cleanGuideId = body.source_guide_id.trim();

      // Verify that the referenced guide actually exists in public.lead_magnets
      const { data: guideExists, error: guideCheckError } = await supabaseAdmin
        .from('lead_magnets')
        .select('id')
        .eq('id', cleanGuideId)
        .maybeSingle();

      if (guideCheckError) {
        console.error('[POST /api/leads] Guide referential check error code:', guideCheckError.code);
        return NextResponse.json(
          { error: 'Database service error during guide verification.' },
          { status: 500 }
        );
      }

      if (!guideExists) {
        return NextResponse.json(
          { error: 'Validation Error: Referenced guide does not exist.' },
          { status: 400 }
        );
      }
    }

    // 7. Source URL Validation (Optional URL syntax check)
    let cleanSourceUrl: string | null = null;
    if (body.source_url !== undefined && body.source_url !== null && body.source_url !== '') {
      if (typeof body.source_url !== 'string' || body.source_url.length > 2048) {
        return NextResponse.json(
          { error: 'Validation Error: Invalid source URL.' },
          { status: 400 }
        );
      }
      try {
        const parsedUrl = new URL(body.source_url.trim());
        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
          return NextResponse.json(
            { error: 'Validation Error: Source URL must use http or https.' },
            { status: 400 }
          );
        }
        cleanSourceUrl = parsedUrl.toString();
      } catch {
        return NextResponse.json(
          { error: 'Validation Error: Invalid source URL format.' },
          { status: 400 }
        );
      }
    }

    // 8. Optional String Fields Sanitization
    const sanitizeString = (val: unknown, maxLength: number): string | null => {
      if (typeof val !== 'string') return null;
      const trimmed = val.trim();
      return trimmed.length > 0 ? trimmed.slice(0, maxLength) : null;
    };

    const cleanName = sanitizeString(body.name, 255);
    const cleanCompany = sanitizeString(body.company, 255);
    const cleanIndustry = sanitizeString(body.industry, 255);
    const cleanRegion = sanitizeString(body.region, 255);
    const cleanBudget = sanitizeString(body.budget, 100);

    // 9. Strict Client Allowlist Assembly
    // Note: 'id', 'created_at', 'score', 'interest_cluster', 'asset_requested'
    // are strictly excluded from client input.
    // - score defaults to PostgreSQL catalog default: 0
    // - asset_requested defaults to catalog default: '2026_AI_Strategy_Guide'
    // - interest_cluster remains NULL unless populated by server-side enrichment
    const insertPayload: Record<string, string | null> = {
      email: cleanEmail,
      name: cleanName,
      company: cleanCompany,
      industry: cleanIndustry,
      region: cleanRegion,
      budget: cleanBudget,
      source_guide_id: cleanGuideId,
      source_url: cleanSourceUrl,
    };

    // 10. Database Insertion via Service Role Client
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert(insertPayload)
      .select('id')
      .single();

    if (error) {
      // Log generic error code; never log customer PII or query payload
      console.error('[POST /api/leads] Database insert error code:', error.code);
      return NextResponse.json(
        { error: 'Failed to record lead registration. Please try again later.' },
        { status: 500 }
      );
    }

    // 11. Certified Response Contract
    return NextResponse.json(
      {
        success: true,
        leadId: data.id,
      },
      { status: 200 }
    );

  } catch {
    // Fail closed with generic safe error response
    console.error('[POST /api/leads] Unexpected server exception');
    return NextResponse.json(
      { error: 'An unexpected internal error occurred.' },
      { status: 500 }
    );
  }
}

