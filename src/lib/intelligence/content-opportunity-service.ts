import { ContentOpportunityItem } from '@/types/intelligence';
import { getProtectedAssets } from './protected-assets-registry';

const contentOpportunitiesStore: ContentOpportunityItem[] = [
  {
    id: 'opp_1_commercial_pricing_matrix',
    topic: 'Transparent Indian Commercial AI Video Production Cost & Pricing Benchmarks (2026)',
    primaryKeyword: 'ai commercial production cost in india',
    supportingKeywords: [
      'ai video production cost india',
      'ai vs traditional commercial production cost',
      'cost of 30 second ai tvc india',
      'generative ai advertising agency rates'
    ],
    searchIntent: 'Commercial Investigation & Decision-Maker Procurement',
    pageType: 'COMMERCIAL_PRICING',
    existingUrlMatch: '/ai-commercial-production-cost-india',
    cannibalizationRisk: 'NONE', // Maps to existing page; no new page needed
    proposedUrl: '/ai-commercial-production-cost-india',
    contentBrief: 'Publish detailed, transparent price ranges across 3 production tiers: Tier 1 Social Reel / Micro-Ad (₹1.5L–₹3L), Tier 2 D2C Brand Film (₹5L–₹12L), Tier 3 Broadcast TVC / Cinema Master (₹15L–₹35L). Compare line-item savings against traditional shoot logistics.',
    aeoQuestionBlocks: [
      'How much does an AI commercial cost in India?',
      'How do AI video production costs compare to traditional shoots?',
      'What deliverables are included in DP AI Studio commercial packages?'
    ],
    geoStrategy: 'Target Indian brand CMOs, marketing procurement heads in Mumbai, Bengaluru, Delhi NCR, and Kerala.',
    requiredProofAssets: ['Cost comparison matrix table', 'Turnaround timeline flowchart', 'Red Chamber ROI case study snapshot'],
    opportunityScore: {
      searchScore: 92,
      commercialScore: 98,
      competitiveScore: 95,
      aeoGeoScore: 94,
      strategicRelevance: 96,
      implementationRisk: 'LOW',
      confidence: 0.96,
      compositeScore: 95
    },
    reviewStatus: 'PENDING_HUMAN_APPROVAL',
    createdAt: '2026-11-20T10:00:00Z',
  },
  {
    id: 'opp_2_luxury_jewellery_caustics',
    topic: 'Photorealistic AI Jewellery & Haute Horlogerie Film Production',
    primaryKeyword: 'ai commercial production for luxury brands',
    supportingKeywords: [
      'ai generated jewellery commercial',
      'luxury brand film studio',
      'cinematic luxury brand films',
      'diamond caustics generative video'
    ],
    searchIntent: 'High-Ticket Commercial Enterprise Lead Generation',
    pageType: 'INDUSTRY_PILLAR',
    existingUrlMatch: '/ai-luxury-brand-films',
    cannibalizationRisk: 'NONE', // Enhances existing page
    proposedUrl: '/ai-luxury-brand-films',
    contentBrief: 'Enrich /ai-luxury-brand-films with an in-depth breakdown of high-refractive index gem rendering, custom LoRA texture consistency, and macro lighting pipelines. Embed She Jewellery and Red Chamber proof.',
    aeoQuestionBlocks: [
      'Can AI generate photorealistic diamond and gold jewellery video?',
      'Which AI studio produces luxury commercials in India?',
      'What is the turnaround time for a luxury brand AI film?'
    ],
    geoStrategy: 'National luxury corridors: Mumbai, Delhi NCR, Jaipur, Dubai luxury markets.',
    requiredProofAssets: ['She Jewellery 4K macro frames', 'Red Chamber silk and gold rendering breakdown'],
    opportunityScore: {
      searchScore: 88,
      commercialScore: 99,
      competitiveScore: 90,
      aeoGeoScore: 92,
      strategicRelevance: 95,
      implementationRisk: 'LOW',
      confidence: 0.94,
      compositeScore: 93
    },
    reviewStatus: 'APPROVED',
    createdAt: '2026-11-21T12:00:00Z',
  },
  {
    id: 'opp_3_tvc_broadcast_standards',
    topic: 'Broadcasting Standards: 4K DCI-P3 Mastering for Generative TV Commercials',
    primaryKeyword: 'ai tvc production company in india',
    supportingKeywords: [
      'broadcast safe ai video production',
      '4k ai tv commercial india',
      'ai television advertisement workflow',
      'temporal consistency in generative tvc'
    ],
    searchIntent: 'Enterprise Commercial Commissioning',
    pageType: 'SERVICE_LANDING',
    existingUrlMatch: '/ai-tvc-production',
    cannibalizationRisk: 'NONE',
    proposedUrl: '/ai-tvc-production',
    contentBrief: 'Address the primary hesitation of national television advertisers: temporal flicker, audio lipsync drift, and broadcast color standards. Document DP Studio’s hybrid ComfyUI + DaVinci Resolve color pipeline.',
    aeoQuestionBlocks: [
      'Is AI video production broadcast-ready for Indian television channels?',
      'How does DP AI Studio guarantee temporal consistency in TVCs?'
    ],
    geoStrategy: 'National TV networks, advertising agencies in Mumbai, Bangalore, Chennai.',
    requiredProofAssets: ['DaVinci Resolve color grade timeline screenshot', '4K master delivery spec sheet'],
    opportunityScore: {
      searchScore: 85,
      commercialScore: 96,
      competitiveScore: 92,
      aeoGeoScore: 90,
      strategicRelevance: 94,
      implementationRisk: 'LOW',
      confidence: 0.92,
      compositeScore: 91
    },
    reviewStatus: 'DRAFT_PROPOSAL',
    createdAt: '2026-11-22T09:00:00Z',
  }
];

export function getContentOpportunities(): ContentOpportunityItem[] {
  return [...contentOpportunitiesStore];
}

export function validateCannibalizationRisk(proposedPath: string): { risk: 'NONE' | 'LOW' | 'HIGH_OVERLAP'; matchedUrl?: string } {
  const assets = getProtectedAssets();
  const clean = proposedPath.replace(/^https?:\/\/(www\.)?defineperspective\.in/, '').replace(/\/$/, '') || '/';
  
  const exact = assets.find(a => a.url === clean);
  if (exact) {
    return { risk: 'HIGH_OVERLAP', matchedUrl: exact.url };
  }

  // Check partial slug similarity
  const slugParts = clean.replace(/^\//, '').split('-');
  const partial = assets.find(a => {
    const aParts = a.slug.split('-');
    const overlap = slugParts.filter(p => aParts.includes(p) && p.length > 3);
    return overlap.length >= 3;
  });

  if (partial) {
    return { risk: 'LOW', matchedUrl: partial.url };
  }

  return { risk: 'NONE' };
}

export function updateOpportunityStatus(id: string, status: ContentOpportunityItem['reviewStatus']): ContentOpportunityItem | null {
  const opp = contentOpportunitiesStore.find(o => o.id === id);
  if (!opp) return null;
  opp.reviewStatus = status;
  return { ...opp };
}
