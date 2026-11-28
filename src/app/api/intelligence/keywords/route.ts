import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getKeywordIntelligence } from '@/lib/intelligence/keyword-intelligence-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const keywords = getKeywordIntelligence();
  const summary = {
    totalKeywords: keywords.length,
    protectedKeywords: keywords.filter(k => k.isProtected).length,
    highTicketKeywords: keywords.filter(k => k.commercialTier === 'HIGH_TICKET').length,
    regionalKeywords: keywords.filter(k => k.commercialTier === 'REGIONAL_AUTHORITY').length,
    strikingDistanceKeywords: keywords.filter(k => (k.currentRankPosition || 0) > 10 && (k.currentRankPosition || 0) <= 40).length
  };

  return NextResponse.json({
    summary,
    keywords
  });
}

