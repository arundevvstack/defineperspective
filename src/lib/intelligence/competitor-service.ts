import { CompetitorEntity } from '@/types/intelligence';

// In accordance with Operator Decision 4 (Option B), registry starts completely empty.
// Zero fictional or placeholder competitor entities are permitted.
const inMemoryCompetitors: CompetitorEntity[] = [];

export function getCompetitors(): CompetitorEntity[] {
  return [...inMemoryCompetitors];
}

export function addCompetitor(
  domain: string,
  companyName: string,
  monitoringTier: 'PRIMARY' | 'STANDARD' | 'OPPORTUNISTIC' = 'STANDARD',
  sitemapUrl?: string
): CompetitorEntity {
  const cleanDomain = domain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  
  const existing = inMemoryCompetitors.find((c) => c.domain === cleanDomain);
  if (existing) {
    return existing;
  }

  const competitor: CompetitorEntity = {
    id: `comp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    domain: cleanDomain,
    companyName: companyName.trim(),
    verificationStatus: 'VERIFIED',
    monitoringTier,
    sitemapUrl: sitemapUrl?.trim() || null,
    lastObservedAt: null,
    createdAt: new Date().toISOString(),
  };

  inMemoryCompetitors.push(competitor);
  return competitor;
}

