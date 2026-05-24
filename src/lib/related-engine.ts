/**
 * Heuristic scoring engine for Related Intelligence.
 * 
 * Future Evolution Path:
 * Phase 1: Heuristic metadata scoring (Current)
 * Phase 2: Hybrid metadata + embeddings
 * Phase 3: Full semantic graph retrieval
 */

export type CaseStudyNode = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  geo: string;
  geo_tags?: string[];
  workflows?: string[];
  internal_links?: string[];
  platform?: string;
  thumbnail_url?: string | null;
  published_at?: string;
  created_at?: string;
};

const normalize = (str: string | undefined | null) => 
  (str || '').toLowerCase().trim();

const normalizeArray = (arr: string[] | undefined | null) => 
  Array.from(new Set((arr || []).map(normalize)));

export function getRelatedCaseStudies(
  source: CaseStudyNode, 
  candidates: CaseStudyNode[], 
  limit: number = 3
): CaseStudyNode[] {
  
  const sourceIndustry = normalize(source.industry);
  const sourceGeo = normalize(source.geo);
  const sourcePlatform = normalize(source.platform);
  const sourceTools = normalizeArray(source.workflows);
  const sourceTags = normalizeArray(source.geo_tags);
  const sourceLinks = normalizeArray(source.internal_links);

  const scoredCandidates = candidates
    .filter(c => c.slug !== source.slug) // Exclude self
    .map(candidate => {
      let score = 0;

      // 1. Industry Overlap
      if (normalize(candidate.industry) === sourceIndustry && sourceIndustry !== '') {
        score += 4;
      }

      // 2. Geo Overlap
      if (normalize(candidate.geo) === sourceGeo && sourceGeo !== '') {
        score += 2;
      }

      // 3. Category/Platform Match
      if (normalize(candidate.platform) === sourcePlatform && sourcePlatform !== '') {
        score += 3;
      }

      // 4. Shared Tools / Workflows
      const candidateTools = normalizeArray(candidate.workflows);
      const sharedToolsCount = candidateTools.filter(t => sourceTools.includes(t)).length;
      score += sharedToolsCount * 1.5;

      // 5. Shared Tags
      const candidateTags = normalizeArray(candidate.geo_tags);
      const sharedTagsCount = candidateTags.filter(t => sourceTags.includes(t)).length;
      score += sharedTagsCount * 1;

      // 6. Semantic Internal Links
      const candidateLinks = normalizeArray(candidate.internal_links);
      const sharedLinksCount = candidateLinks.filter(l => sourceLinks.includes(l)).length;
      score += sharedLinksCount * 1;

      // 7. Recency Decay (Freshness Boost)
      // Add up to 2 points for recent case studies (within last 30 days)
      const pubDateStr = candidate.published_at || candidate.created_at;
      if (pubDateStr) {
        const ageDays = (Date.now() - new Date(pubDateStr).getTime()) / (1000 * 60 * 60 * 24);
        if (ageDays >= 0 && ageDays < 30) {
          const freshnessBoost = 2 * (1 - (ageDays / 30));
          score += freshnessBoost;
        }
      }

      return { candidate, score };
    });

  // Sort by score DESC, then by publication date DESC as a tiebreaker
  scoredCandidates.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    const dateA = new Date(a.candidate.published_at || a.candidate.created_at || 0).getTime();
    const dateB = new Date(b.candidate.published_at || b.candidate.created_at || 0).getTime();
    return dateB - dateA;
  });

  return scoredCandidates.slice(0, limit).map(item => item.candidate);
}
