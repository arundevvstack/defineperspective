import { RankingDefenceAlert } from '@/types/intelligence';

const activeDefenceAlerts: RankingDefenceAlert[] = [
  {
    id: 'def_alert_1_india_pillar',
    keyword: 'ai video production company in india',
    affectedUrl: 'https://defineperspective.in/ai-video-production-company-india',
    severity: 'HIGH',
    alertType: 'COMPETITOR_INCURSION',
    baselinePosition: 3.5,
    currentPosition: 4.14,
    impressionDeltaPct: -4.2,
    ctrDeltaPct: 8.66,
    observedPeriod: 'Last 28 Days vs Previous Period',
    likelyCause: 'Competitor Kalpanik Films published new case studies, creating SERP turbulence around positions 2–4.',
    confidence: 0.92,
    recommendedInvestigation: 'Verify SERP layout changes, check if Google AI Overview box has pushed standard organic listings down.',
    proposedRecoveryAction: 'Enrich /ai-video-production-company-india with fresh 2026 commercial client badges and enhanced FAQ schema. Do not change URL or slug.',
    requiresHumanApproval: true,
    status: 'ACTIVE',
    createdAt: '2026-11-20T08:00:00Z',
  },
  {
    id: 'def_alert_2_luxury_striking_distance',
    keyword: 'ai commercial production for luxury brands',
    affectedUrl: 'https://defineperspective.in/ai-luxury-brand-films',
    severity: 'MEDIUM',
    alertType: 'CTR_DECAY',
    baselinePosition: 28.0,
    currentPosition: 32.51,
    impressionDeltaPct: 15.0,
    ctrDeltaPct: 0.0,
    observedPeriod: 'Last 28 Days',
    likelyCause: 'Page is trapped on Page 4 (85 impressions, 0 clicks). High search intent is currently wasted without Page 1 visibility.',
    confidence: 0.95,
    recommendedInvestigation: 'Inspect internal linking equity flowing to /ai-luxury-brand-films.',
    proposedRecoveryAction: 'Direct internal links from Red Chamber and She Jewellery case studies using anchor "luxury brand AI commercial production".',
    requiresHumanApproval: true,
    status: 'ACTION_PROPOSED',
    createdAt: '2026-11-22T14:30:00Z',
  },
  {
    id: 'def_alert_3_kerala_defense',
    keyword: 'ai video production company in kerala',
    affectedUrl: 'https://defineperspective.in/ai-video-production-kerala',
    severity: 'LOW',
    alertType: 'POSITION_DROP',
    baselinePosition: 1.0,
    currentPosition: 1.65,
    impressionDeltaPct: 2.5,
    ctrDeltaPct: 5.77,
    observedPeriod: 'Last 28 Days',
    likelyCause: 'Minor local pack fluctuation; Originative Nest local business listing active in Trivandrum.',
    confidence: 0.88,
    recommendedInvestigation: 'Check Google Maps listing consistency and NAP (Name, Address, Phone) citation parity.',
    proposedRecoveryAction: 'Verify LocalBusiness schema on /ai-video-production-kerala, /ai-video-production-trivandrum, and /ai-video-production-kochi.',
    requiresHumanApproval: false,
    status: 'INVESTIGATING',
    createdAt: '2026-11-24T11:00:00Z',
  }
];

export function getRankingDefenceAlerts(): RankingDefenceAlert[] {
  return [...activeDefenceAlerts];
}

export function updateDefenceAlertStatus(id: string, status: RankingDefenceAlert['status']): RankingDefenceAlert | null {
  const alert = activeDefenceAlerts.find(a => a.id === id);
  if (!alert) return null;
  alert.status = status;
  return { ...alert };
}
