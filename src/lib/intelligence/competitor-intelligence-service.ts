import { CompetitorEntity } from '@/types/intelligence';

export interface VerifiedCompetitorProfile extends CompetitorEntity {
  businessCategory: string;
  geography: string;
  competitiveClassification: 'DIRECT' | 'INDIRECT' | 'SERP_COMPETITOR' | 'REGIONAL' | 'NATIONAL' | 'INTERNATIONAL';
  discoverySource: string;
  evidence: string;
  relevantServices: string[];
  positioning: string;
  landingPages: string[];
  observedRankingKeywords: string[];
  threatLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
}

const verifiedCompetitorsDatabase: VerifiedCompetitorProfile[] = [
  {
    id: 'comp_kalpanik_mumbai',
    domain: 'kalpnk.com',
    companyName: 'Kalpanik Films / Kalpnk AI',
    businessCategory: 'AI Commercials & Narrative Film Studio',
    geography: 'Mumbai, Maharashtra',
    competitiveClassification: 'DIRECT',
    discoverySource: 'SERP & Industry Commercial Portfolio',
    evidence: 'High-profile AI advertising studio founded by Satya Raghavan (ex-Google/YouTube VP) & Avinash Gowariker. Strong agency ties in Mumbai.',
    relevantServices: ['Generative TVCs', 'Brand Campaigns', 'VFX Retouching', 'Social Media Shorts'],
    positioning: 'India’s premier agency-first generative film studio for Bollywood and multinational FMCG brands.',
    landingPages: ['https://kalpnk.com', 'https://kalpnk.com/work'],
    observedRankingKeywords: ['ai video production mumbai', 'ai commercial production india', 'generative tvc agency'],
    threatLevel: 'HIGH',
    verificationStatus: 'VERIFIED',
    monitoringTier: 'PRIMARY',
    sitemapUrl: 'https://kalpnk.com/sitemap.xml',
    lastObservedAt: '2026-11-20T10:00:00Z',
    createdAt: '2026-09-01T00:00:00Z',
  },
  {
    id: 'comp_indievisual_delhi',
    domain: 'indievisual.in',
    companyName: 'IndieVisual / dAIrector',
    businessCategory: 'AI Filmmaking Platform & Creative Production',
    geography: 'New Delhi / National',
    competitiveClassification: 'DIRECT',
    discoverySource: 'Google Search & Industry Press',
    evidence: 'Launched proprietary "dAIrector" tool. Focuses on tech-enabled creator marketplace and fast-turnaround generative brand videos.',
    relevantServices: ['B2B Brand Films', 'Product Teasers', 'Virtual Influencers', 'AI Narrative Shorts'],
    positioning: 'Democratizing commercial video through scalable AI director pipelines.',
    landingPages: ['https://indievisual.in', 'https://indievisual.in/dairector'],
    observedRankingKeywords: ['ai video production agency in india', 'ai commercial creators india'],
    threatLevel: 'HIGH',
    verificationStatus: 'VERIFIED',
    monitoringTier: 'PRIMARY',
    sitemapUrl: 'https://indievisual.in/sitemap.xml',
    lastObservedAt: '2026-11-20T10:00:00Z',
    createdAt: '2026-09-01T00:00:00Z',
  },
  {
    id: 'comp_trikal_bengaluru',
    domain: 'trikal.ai',
    companyName: 'Trikal AI',
    businessCategory: 'Generative AI Video Platform',
    geography: 'Bengaluru, Karnataka',
    competitiveClassification: 'DIRECT',
    discoverySource: 'Tech Startup Ecosystem & Search',
    evidence: 'Generative marketing video platform catering to Indian enterprise brands and D2C startups.',
    relevantServices: ['Product Animation', 'Marketing Videos', 'Multilingual Dubbing', 'Dynamic Ad Variations'],
    positioning: 'AI-first video generation for rapid venture-backed D2C scaling.',
    landingPages: ['https://trikal.ai'],
    observedRankingKeywords: ['ai product video production company', 'ai video production bangalore'],
    threatLevel: 'MEDIUM',
    verificationStatus: 'VERIFIED',
    monitoringTier: 'STANDARD',
    sitemapUrl: null,
    lastObservedAt: '2026-11-18T10:00:00Z',
    createdAt: '2026-09-01T00:00:00Z',
  },
  {
    id: 'comp_simplifygenai_delhi',
    domain: 'simplifygenai.com',
    companyName: 'SimplifyGenAI',
    businessCategory: 'Enterprise AI Content Agency',
    geography: 'New Delhi NCR',
    competitiveClassification: 'INDIRECT',
    discoverySource: 'B2B Search Query Overlap',
    evidence: 'Broad enterprise GenAI agency offering text, code, and generative video production services.',
    relevantServices: ['Corporate Explainer Videos', 'AI Avatars', 'Internal Training Media'],
    positioning: 'Full-spectrum enterprise GenAI implementation partner.',
    landingPages: ['https://simplifygenai.com'],
    observedRankingKeywords: ['ai corporate video production company in india'],
    threatLevel: 'LOW',
    verificationStatus: 'VERIFIED',
    monitoringTier: 'STANDARD',
    sitemapUrl: null,
    lastObservedAt: '2026-11-15T10:00:00Z',
    createdAt: '2026-09-01T00:00:00Z',
  },
  {
    id: 'comp_originative_nest_tvm',
    domain: 'originativenest.com',
    companyName: 'Originative Nest',
    businessCategory: 'Digital Agency & AI Video Services',
    geography: 'Trivandrum / Kochi, Kerala',
    competitiveClassification: 'REGIONAL',
    discoverySource: 'Local SERP Ranking Observation',
    evidence: 'Local digital agency in Trivandrum claiming AI advertising and social video capabilities.',
    relevantServices: ['Local Business Video', 'Social Media Reels', 'Digital Ads'],
    positioning: 'Regional creative agency adopting commercial AI video workflows.',
    landingPages: ['https://originativenest.com'],
    observedRankingKeywords: ['ai video production trivandrum', 'video production company in kerala'],
    threatLevel: 'MEDIUM',
    verificationStatus: 'VERIFIED',
    monitoringTier: 'PRIMARY',
    sitemapUrl: null,
    lastObservedAt: '2026-11-22T10:00:00Z',
    createdAt: '2026-09-01T00:00:00Z',
  },
  {
    id: 'comp_glaciers_studio_tn',
    domain: 'glaciers.studio',
    companyName: 'Glaciers Studio / Nirmiit',
    businessCategory: 'AI Visual Effects & Creative Studio',
    geography: 'Chennai / Coimbatore, Tamil Nadu',
    competitiveClassification: 'REGIONAL',
    discoverySource: 'Regional South India SERP',
    evidence: 'Creative tech boutique producing AI-assisted fashion and visual effects commercials.',
    relevantServices: ['Fashion Imagery', 'Visual Effects', 'CGI Enhancement'],
    positioning: 'High-end visual aesthetic studio using AI tools.',
    landingPages: ['https://glaciers.studio'],
    observedRankingKeywords: ['ai video production chennai', 'ai fashion advertising'],
    threatLevel: 'MEDIUM',
    verificationStatus: 'VERIFIED',
    monitoringTier: 'STANDARD',
    sitemapUrl: null,
    lastObservedAt: '2026-11-12T10:00:00Z',
    createdAt: '2026-09-01T00:00:00Z',
  }
];

export function getVerifiedCompetitors(): VerifiedCompetitorProfile[] {
  return [...verifiedCompetitorsDatabase];
}

export function addVerifiedCompetitor(comp: Omit<VerifiedCompetitorProfile, 'id' | 'createdAt'>): VerifiedCompetitorProfile {
  const cleanDomain = comp.domain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const existing = verifiedCompetitorsDatabase.find(c => c.domain === cleanDomain);
  if (existing) return existing;

  const newCompetitor: VerifiedCompetitorProfile = {
    ...comp,
    id: `comp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    domain: cleanDomain,
    createdAt: new Date().toISOString()
  };

  verifiedCompetitorsDatabase.push(newCompetitor);
  return newCompetitor;
}
