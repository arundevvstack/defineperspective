import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getVerifiedCompetitors, addVerifiedCompetitor } from '@/lib/intelligence/competitor-intelligence-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const competitors = getVerifiedCompetitors();
  return NextResponse.json({
    competitors,
    storageTier: 'BUFFERED_MEMORY',
    persistent: false,
    notice: 'Verified competitors sourced from empirical SERP observation and industry analysis. Staging migration 20261128 prepared for database persistence.'
  });
}

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const body = await req.json();
    const { domain, companyName, businessCategory, geography, competitiveClassification, evidence, relevantServices, positioning } = body;

    if (!domain || !companyName) {
      return NextResponse.json(
        { error: 'Missing domain or companyName for competitor profile.' },
        { status: 400 }
      );
    }

    const created = addVerifiedCompetitor({
      domain,
      companyName,
      businessCategory: businessCategory || 'AI Video Production Agency',
      geography: geography || 'India National',
      competitiveClassification: competitiveClassification || 'DIRECT',
      discoverySource: 'Operator Manual Submission',
      evidence: evidence || 'Observed commercial AI video services.',
      relevantServices: relevantServices || ['AI Video Production'],
      positioning: positioning || 'Commercial creative video studio.',
      landingPages: [`https://${domain}`],
      observedRankingKeywords: [],
      threatLevel: 'MEDIUM',
      verificationStatus: 'VERIFIED',
      monitoringTier: 'STANDARD',
      sitemapUrl: null,
      lastObservedAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true, competitor: created }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to register competitor entity.' },
      { status: 500 }
    );
  }
}
