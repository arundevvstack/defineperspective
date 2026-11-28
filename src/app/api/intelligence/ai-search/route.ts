import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { AISearchStatus } from '@/types/intelligence';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  // Under Operator Decision 3 (Option A), paid AI search evaluations are disabled at launch.
  // Zero fabricated percentages or hallucinated ranks are permitted.
  const data: AISearchStatus = {
    evaluationStatus: 'DATA_NOT_CONNECTED',
    paidEvaluations: 'DISABLED',
    lastEvaluationTimestamp: null,
    mentionRatePct: {
      value: null,
      unit: '%',
      meta: {
        sourceProvider: 'Synthetic AI Evaluation Matrix',
        evidenceClassification: 'CONFIGURED',
        lastRetrievedAt: null,
        status: 'DATA_NOT_CONNECTED',
        confidenceScore: 0,
        notes: 'Paid evaluations disabled at launch. Baseline $0.00/mo operating model active.',
      },
    },
    citationSharePct: {
      value: null,
      unit: '%',
      meta: {
        sourceProvider: 'Synthetic AI Evaluation Matrix',
        evidenceClassification: 'CONFIGURED',
        lastRetrievedAt: null,
        status: 'DATA_NOT_CONNECTED',
        confidenceScore: 0,
      },
    },
    testedPromptsCount: {
      value: 0,
      unit: 'prompts',
      meta: {
        sourceProvider: 'AI Generative Search Evaluator (Option A Disabled)',
        evidenceClassification: 'CONFIGURED',
        lastRetrievedAt: null,
        status: 'DATA_NOT_CONNECTED',
        confidenceScore: 0,
        notes: 'AI prompt evaluation disabled at launch (Option A). Zero paid evaluations active.',
      },
    },
    provenance: {
      sourceProvider: 'AI Generative Search Evaluator',
      evidenceClassification: 'CONFIGURED',
      lastRetrievedAt: null,
      status: 'DATA_NOT_CONNECTED',
      confidenceScore: 0,
      notes: 'Controlled weekly benchmark runner architecturally prepared for future authorization.',
    },
  };

  return NextResponse.json(data);
}

