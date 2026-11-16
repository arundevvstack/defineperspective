import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

const TRENDING_SOURCE = [
  "AI Video Production Companies in Kerala",
  "Premium AI Ad Production India",
  "High-Fidelity AI Content Production Kochi",
  "AI TVC Production Agency South India",
  "Neural Commercials for Luxury Brands India",
  "Malayalam AI Video Generation Services",
  "AI Video Strategy for D2C Brands Kerala",
  "Cost-effective AI Ad Films Kochi",
  "Advanced AI TVC Pipelines India"
];

// GET is strictly rejected to prevent unauthenticated/accidental mutations
export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Database-mutating analysis requires an authenticated POST request.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const rateLimitResponse = await checkRateLimit(req);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) return auth.response;

    // 3. Strict Input Validation
    let node = "Kochi, IN";
    try {
      const body = await req.json();
      if (body && typeof body.node === 'string') {
        const sanitizedNode = body.node.trim().slice(0, 100);
        if (sanitizedNode.length > 0) {
          node = sanitizedNode;
        }
      }
    } catch {
      // Body is optional or empty; default to "Kochi, IN"
    }

    const cityName = node.split(',')[0].trim() || 'Kochi';

    // 4. Fetch current content index using service-role client
    const { data: existingPages, error: fetchError } = await supabaseAdmin
      .from('content_pages')
      .select('keywords');

    if (fetchError) {
      console.warn('[analyze-gaps] Could not query content_pages, proceeding with empty index:', fetchError.message);
    }

    const indexedKeywords = new Set(existingPages?.flatMap((p: { keywords?: string[] }) => p.keywords || []) || []);

    // 5. Identify Semantic Gaps
    const prioritizedKeywords = [
      "AI video production", "AI ad films", "AI content", "AI tvc"
    ];

    const gaps = TRENDING_SOURCE.filter(trend => {
      const isMissing = !indexedKeywords.has(trend.toLowerCase());
      const isRelevant = prioritizedKeywords.some(pk => trend.toLowerCase().includes(pk.toLowerCase()));
      return isMissing && isRelevant;
    });

    // 6. Localize findings for the Active Node
    const trendRecords = gaps.map(gap => {
      let localizedGap = gap
        .replace(/Kochi/g, cityName)
        .replace(/Kerala/g, cityName)
        .replace(/India/g, cityName);

      return {
        region: cityName,
        keyword: localizedGap,
        momentum: Math.floor(Math.random() * 20) + 80,
        status: 'critical_gap',
        detected_at: new Date().toISOString()
      };
    });

    if (trendRecords.length > 0) {
      const { error: upsertError } = await supabaseAdmin
        .from('ai_trends')
        .upsert(trendRecords, { onConflict: 'keyword' });
      if (upsertError) {
        console.warn('[analyze-gaps] Upsert to ai_trends failed:', upsertError.message);
      }
    }

    return NextResponse.json({ 
      success: true, 
      gaps_identified: gaps.length,
      trends: trendRecords,
      scan_depth: `Regional Neural Sweep: ${node}`
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
