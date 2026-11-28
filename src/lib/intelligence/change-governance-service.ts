import { ChangeGovernanceProposal, RiskLevel } from '@/types/intelligence';
import { isAssetProtected } from './protected-assets-registry';

const changeProposalsStore: ChangeGovernanceProposal[] = [
  {
    actionId: 'gov_act_1_luxury_h2_enrichment',
    targetAsset: 'https://defineperspective.in/ai-luxury-brand-films',
    actionType: 'CONTENT_CREATION',
    originalState: 'Standard overview of luxury video production without dedicated gemstone caustics section.',
    proposedState: 'Add H2 section "Macro Caustics & Jewellery Lighting Pipelines" + link to She Jewellery.',
    evidence: 'GSC query "ai commercial production for luxury brands" generated 85 impressions on Pos 32.5.',
    reason: 'Elevate page into Top 10 to capture high-ticket luxury commercial inquiries.',
    expectedOutcome: 'Increase impressions from 85 to 250+ and achieve first Page 1 organic ranking within 60 days.',
    riskClassification: 'LOW',
    seoImpactAssessment: 'Zero URL, canonical, or slug changes. Pure additive topical enrichment.',
    aeoGeoImpactAssessment: 'Provides Perplexity and Google AI Overviews with specific citation paragraphs for luxury AI production in India.',
    requiresHumanApproval: true,
    approvalStatus: 'APPROVED',
    approvedBy: 'Admin Operator',
    timestamp: '2026-11-25T14:00:00Z',
    executionStatus: 'NOT_STARTED',
    rollbackPlan: 'Git revert to previous commit. File path: src/app/ai-luxury-brand-films/page.tsx.'
  },
  {
    actionId: 'gov_act_2_pricing_table_publish',
    targetAsset: 'https://defineperspective.in/ai-commercial-production-cost-india',
    actionType: 'CONTENT_CREATION',
    originalState: 'General commercial production information.',
    proposedState: 'Add structured pricing comparison table (Tier 1 ₹1.5L–₹3L, Tier 2 ₹5L–₹12L, Tier 3 ₹15L–₹35L).',
    evidence: 'Competitor gap analysis reveals zero competitors publish verified pricing benchmarks.',
    reason: 'Establish DP AI Studio as the most transparent, trusted commercial AI production authority in India.',
    expectedOutcome: 'Capture #1 featured snippet and primary AI answer citation for "ai commercial production cost in india".',
    riskClassification: 'LOW',
    seoImpactAssessment: 'Additive table markup and FAQ schema. No impact on existing ranking assets.',
    aeoGeoImpactAssessment: 'Highly answerable structured data block optimized for Perplexity and ChatGPT search cards.',
    requiresHumanApproval: true,
    approvalStatus: 'PENDING_REVIEW',
    approvedBy: null,
    timestamp: '2026-11-26T10:00:00Z',
    executionStatus: 'NOT_STARTED',
    rollbackPlan: 'Git revert to previous commit on /ai-commercial-production-cost-india.'
  }
];

export function getChangeProposals(): ChangeGovernanceProposal[] {
  return [...changeProposalsStore];
}

export function proposeChange(proposal: Omit<ChangeGovernanceProposal, 'actionId' | 'timestamp' | 'approvalStatus' | 'approvedBy' | 'executionStatus'>): ChangeGovernanceProposal {
  const protectionCheck = isAssetProtected(proposal.targetAsset);
  
  // High risk or protected assets strictly require human approval
  let riskClassification: RiskLevel = proposal.riskClassification;
  let requiresApproval = proposal.requiresHumanApproval;

  if (protectionCheck.isProtected) {
    if (protectionCheck.riskLevel === 'CRITICAL') {
      riskClassification = 'CRITICAL';
      requiresApproval = true;
    } else if (protectionCheck.riskLevel === 'HIGH') {
      riskClassification = 'HIGH';
      requiresApproval = true;
    }
  }

  const created: ChangeGovernanceProposal = {
    ...proposal,
    actionId: `gov_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    riskClassification,
    requiresHumanApproval: requiresApproval,
    approvalStatus: 'PENDING_REVIEW',
    approvedBy: null,
    timestamp: new Date().toISOString(),
    executionStatus: 'NOT_STARTED'
  };

  changeProposalsStore.unshift(created);
  return created;
}

export function approveChangeProposal(actionId: string, approvedBy: string): ChangeGovernanceProposal | null {
  const proposal = changeProposalsStore.find(p => p.actionId === actionId);
  if (!proposal) return null;

  proposal.approvalStatus = 'APPROVED';
  proposal.approvedBy = approvedBy;
  return { ...proposal };
}

export function rejectChangeProposal(actionId: string, rejectedBy: string): ChangeGovernanceProposal | null {
  const proposal = changeProposalsStore.find(p => p.actionId === actionId);
  if (!proposal) return null;

  proposal.approvalStatus = 'REJECTED';
  proposal.approvedBy = rejectedBy;
  return { ...proposal };
}
