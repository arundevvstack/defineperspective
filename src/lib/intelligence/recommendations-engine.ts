import { IntelligenceRecommendation } from '@/types/intelligence';
import { getSearchPerformanceData } from './gsc-connector';

const recommendationsStore: IntelligenceRecommendation[] = [];

function generateInitialRecommendations(): IntelligenceRecommendation[] {
  const recommendations: IntelligenceRecommendation[] = [];
  const searchData = getSearchPerformanceData(28);

  // Heuristic Rule 1: High Impression, Suboptimal CTR Queries
  const lowCtrHighImpQueries = searchData.topQueries.filter(
    (q) => q.impressions >= 15 && q.ctr < 4.0 && q.avgPosition <= 20
  );

  if (lowCtrHighImpQueries.length > 0) {
    const target = lowCtrHighImpQueries[0];
    recommendations.push({
      id: `rec_ctr_${target.query.replace(/\s+/g, '_').toLowerCase()}`,
      title: `Optimize Snippet & Meta Description for "${target.query}"`,
      issueDescription: `The search query "${target.query}" achieved ${target.impressions} impressions with average rank ${target.avgPosition}, but CTR is currently ${target.ctr}%.`,
      supportingEvidence: {
        query: target.query,
        impressions: target.impressions,
        clicks: target.clicks,
        ctr: `${target.ctr}%`,
        avgPosition: target.avgPosition,
      },
      dataSource: 'Google Search Console Query Performance',
      observationTimestamp: new Date().toISOString(),
      confidenceLevel: 0.88,
      expectedImpact: 'HIGH',
      proposedAction: `Refine the target landing page title tag and meta description to include strong commercial intent terms and active value propositions.`,
      lifecycleStatus: 'PROPOSED',
      createdAt: new Date().toISOString(),
    });
  }

  // Heuristic Rule 2: Google Core Algorithm Provenance Check
  recommendations.push({
    id: 'rec_policy_provenance_audit',
    title: 'Audit Case Study Rich Snippets for Original Media Credentials',
    issueDescription: 'Latest search algorithm guidelines reward demonstrated first-hand technical experience and original video behind-the-scenes assets.',
    supportingEvidence: {
      source: 'Google Search Central Helpful Content System',
      affectedSection: '/case-studies',
    },
    dataSource: 'Policy Radar & Algorithm Updates',
    observationTimestamp: new Date().toISOString(),
    confidenceLevel: 0.92,
    expectedImpact: 'MEDIUM',
    proposedAction: 'Attach explicit production metadata (cameras used, workflow breakdowns, verified client testimonials) to newly published case study entries.',
    lifecycleStatus: 'PROPOSED',
    createdAt: new Date().toISOString(),
  });

  return recommendations;
}

export function getRecommendations(): IntelligenceRecommendation[] {
  if (recommendationsStore.length === 0) {
    recommendationsStore.push(...generateInitialRecommendations());
  }
  return [...recommendationsStore];
}

export function transitionRecommendationStatus(
  id: string,
  action: 'APPROVE' | 'REJECT' | 'START_REVIEW' | 'MARK_EXECUTED',
  notes?: string
): IntelligenceRecommendation | null {
  const recs = getRecommendations();
  const rec = recs.find((r) => r.id === id);
  if (!rec) return null;

  switch (action) {
    case 'START_REVIEW':
      rec.lifecycleStatus = 'HUMAN_REVIEW';
      break;
    case 'APPROVE':
      rec.lifecycleStatus = 'APPROVED';
      break;
    case 'REJECT':
      rec.lifecycleStatus = 'REJECTED';
      break;
    case 'MARK_EXECUTED':
      rec.lifecycleStatus = 'EXECUTED';
      break;
  }

  if (notes) {
    rec.operatorNotes = notes;
  }
  rec.reviewedAt = new Date().toISOString();

  return { ...rec };
}
