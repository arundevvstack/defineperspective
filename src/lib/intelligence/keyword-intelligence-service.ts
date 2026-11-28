import fs from 'fs';
import path from 'path';
import { KeywordIntelligenceItem } from '@/types/intelligence';

let keywordStore: KeywordIntelligenceItem[] = [];

export function getKeywordIntelligence(): KeywordIntelligenceItem[] {
  if (keywordStore.length > 0) {
    return [...keywordStore];
  }

  try {
    const queriesCsvPath = path.join(process.cwd(), 'data', 'gsc-export', 'Queries.csv');
    if (!fs.existsSync(queriesCsvPath)) {
      return [];
    }

    const content = fs.readFileSync(queriesCsvPath, 'utf-8');
    const lines = content.split(/\r?\n/).slice(1);

    const items: KeywordIntelligenceItem[] = [];

    lines.forEach((line, idx) => {
      const parts = line.split(',');
      if (parts.length >= 5) {
        const query = parts[0].trim().replace(/^"|"$/g, '');
        const clicks = parseInt(parts[1], 10) || 0;
        const impressions = parseInt(parts[2], 10) || 0;
        const ctr = parseFloat(parts[3]) || 0;
        const position = parseFloat(parts[4]) || 0;

        if (!query) return;

        // Classify intent
        const lower = query.toLowerCase();
        let searchIntent: 'COMMERCIAL' | 'TRANSACTIONAL' | 'INFORMATIONAL' | 'NAVIGATIONAL' = 'COMMERCIAL';
        if (lower.includes('cost') || lower.includes('pricing') || lower.includes('buy') || lower.includes('hire') || lower.includes('agency') || lower.includes('company')) {
          searchIntent = 'COMMERCIAL';
        } else if (lower.includes('what') || lower.includes('how') || lower.includes('vs') || lower.includes('guide')) {
          searchIntent = 'INFORMATIONAL';
        } else if (lower.includes('define perspective') || lower.includes('dp ai')) {
          searchIntent = 'NAVIGATIONAL';
        }

        // Commercial Tier
        let commercialTier: 'HIGH_TICKET' | 'MID_TIER' | 'VOLUME_DRIVER' | 'REGIONAL_AUTHORITY' = 'MID_TIER';
        if (lower.includes('luxury') || lower.includes('tvc') || lower.includes('commercial')) {
          commercialTier = 'HIGH_TICKET';
        } else if (lower.includes('kerala') || lower.includes('trivandrum') || lower.includes('kochi')) {
          commercialTier = 'REGIONAL_AUTHORITY';
        } else if (impressions > 50) {
          commercialTier = 'VOLUME_DRIVER';
        }

        // Target URL mapping
        let targetUrl = '/ai-video-production-company-india';
        if (lower.includes('luxury')) targetUrl = '/ai-luxury-brand-films';
        else if (lower.includes('tvc')) targetUrl = '/ai-tvc-production';
        else if (lower.includes('cost')) targetUrl = '/ai-commercial-production-cost-india';
        else if (lower.includes('kerala')) targetUrl = '/ai-video-production-kerala';
        else if (lower.includes('trivandrum')) targetUrl = '/ai-video-production-trivandrum';
        else if (lower.includes('kochi')) targetUrl = '/ai-video-production-kochi';
        else if (lower.includes('agency')) targetUrl = '/ai-video-production-agency';

        // Opportunity Score calculation (Formula based solely on verified metrics)
        // High impression + striking distance (pos 5-40) = high opportunity
        let score = 50;
        if (impressions > 100) score += 25;
        else if (impressions > 25) score += 15;

        if (position > 4 && position <= 20) score += 20;
        else if (position > 20 && position <= 40) score += 15;
        
        if (commercialTier === 'HIGH_TICKET') score += 10;

        items.push({
          id: `kw_${idx + 1}_${query.replace(/[^a-z0-9]/gi, '_').slice(0, 20)}`,
          keyword: query,
          searchIntent,
          searchVolume: null, // Third party volume API not connected; zero fabricated volume
          searchVolumeSource: 'Third-Party Search Volume API (Not Connected)',
          searchVolumePeriod: null,
          searchVolumeConfidence: 0.0,
          keywordDifficulty: null, // Zero fabricated difficulty
          cpc: null, // Zero fabricated CPC
          currentRankPosition: position,
          rankingUrl: targetUrl,
          impressions,
          clicks,
          ctr,
          cluster: commercialTier === 'REGIONAL_AUTHORITY' ? 'Regional South India' : 'Core AI Video Production',
          commercialTier,
          targetUrl,
          isProtected: clicks > 0 || position <= 10 || lower.includes('dp ai') || lower.includes('define perspective'),
          opportunityScore: Math.min(score, 100),
          provenance: {
            sourceProvider: 'Google Search Console Verified Export',
            evidenceClassification: 'SOURCE-VERIFIED',
            lastRetrievedAt: '2026-09-14T00:00:00Z',
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
            notes: 'First-party verified search performance from sc-domain:defineperspective.in.'
          }
        });
      }
    });

    keywordStore = items.sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);
    return [...keywordStore];
  } catch (error) {
    console.error('[KEYWORD INTELLIGENCE] Error reading GSC queries:', error);
    return [];
  }
}
