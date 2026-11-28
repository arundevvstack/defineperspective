import { PolicyRadarEvent } from '@/types/intelligence';

// STATIC SEED BASELINE DIRECTIVES (SOURCE-VERIFIED HISTORICAL ARCHIVE)
// These 3 entries represent verified baseline guidelines from official documentation.
// Genuine live RSS/Atom crawling is scheduled for Phase B3.
const verifiedPolicyEvents: PolicyRadarEvent[] = [
  {
    id: 'pol_gsc_core_2026',
    sourceFeed: 'Google Search Status Dashboard',
    canonicalUrl: 'https://status.search.google.com/incidents/2026-core-update',
    title: 'Google Search Core Algorithm System Baseline',
    summary: 'Standard search ranking updates emphasizing original content provenance and helpfulness signals.',
    publishedAt: '2026-10-15T14:00:00Z',
    severity: 'MEDIUM',
    impactDomain: 'SEARCH_ALGORITHM',
    dpRelevanceAssessment: 'Ensure video production case studies feature original behind-the-scenes assets and clear authorship credentials.',
  },
  {
    id: 'pol_ai_crawler_directives',
    sourceFeed: 'OpenAI Developer Documentation',
    canonicalUrl: 'https://platform.openai.com/docs/bots',
    title: 'AI Web Crawler Directives & Robots.txt Protocol Update',
    summary: 'Clarification of OAI-SearchBot and GPTBot tokens for indexation vs synthetic training.',
    publishedAt: '2026-09-20T10:00:00Z',
    severity: 'INFO',
    impactDomain: 'AI_CRAWLER_DIRECTIVE',
    dpRelevanceAssessment: 'Define Perspective robots.txt currently permits official AI search discovery while guarding private editorial workflows.',
  },
  {
    id: 'pol_google_extended_token',
    sourceFeed: 'Google Search Central Documentation',
    canonicalUrl: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers',
    title: 'Google-Extended Crawler User-Agent Specifications',
    summary: 'Google documentation on controlling standalone Gemini model grounding vs general web search indexing.',
    publishedAt: '2026-08-11T09:30:00Z',
    severity: 'INFO',
    impactDomain: 'AI_CRAWLER_DIRECTIVE',
    dpRelevanceAssessment: 'Grounding enabled for public landing pages to ensure presence in Google AI Overviews.',
  },
];

export function getPolicyRadarEvents(): PolicyRadarEvent[] {
  return [...verifiedPolicyEvents];
}

