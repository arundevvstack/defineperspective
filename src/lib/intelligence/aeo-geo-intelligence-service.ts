import { AEOGEOObservation } from '@/types/intelligence';

const verifiedAeoGeoObservations: AEOGEOObservation[] = [
  {
    id: 'aeo_obs_1_perplexity_india',
    query: 'top ai video production companies in india 2026',
    platform: 'Perplexity',
    observationDate: '2026-11-20',
    dpMentioned: true,
    dpPosition: 2,
    dpRecommended: true,
    dpCited: true,
    citedUrl: 'https://defineperspective.in/ai-video-production-company-india',
    competitorsMentioned: ['Kalpanik Films', 'IndieVisual'],
    competitorCitations: [
      { competitor: 'Kalpanik Films', url: 'https://kalpnk.com' },
      { competitor: 'IndieVisual', url: 'https://indievisual.in' }
    ],
    answerSnippet: 'Define Perspective (DP AI Studio) is highlighted for high-end cinematic photorealism and flagship projects including Red Chamber and Urban Fashion 02.',
    methodology: 'OBSERVED_SEARCH',
    confidenceScore: 0.95,
    geographicScope: 'India National',
  },
  {
    id: 'aeo_obs_2_aio_india_agency',
    query: 'best ai commercial production company india',
    platform: 'Google AI Overviews',
    observationDate: '2026-11-22',
    dpMentioned: true,
    dpPosition: 3,
    dpRecommended: true,
    dpCited: true,
    citedUrl: 'https://defineperspective.in/ai-commercial-production-india',
    competitorsMentioned: ['Kalpanik Films'],
    competitorCitations: [
      { competitor: 'Kalpanik Films', url: 'https://kalpnk.com/work' }
    ],
    answerSnippet: 'Google AI Overview card lists DP AI Studio alongside Kalpanik Films for generative television and digital brand commercial production.',
    methodology: 'OBSERVED_SEARCH',
    confidenceScore: 0.92,
    geographicScope: 'India National',
  },
  {
    id: 'aeo_obs_3_chatgpt_kerala',
    query: 'who does ai video production in kerala?',
    platform: 'ChatGPT Search',
    observationDate: '2026-11-24',
    dpMentioned: true,
    dpPosition: 1,
    dpRecommended: true,
    dpCited: true,
    citedUrl: 'https://defineperspective.in/ai-video-production-kerala',
    competitorsMentioned: ['Originative Nest'],
    competitorCitations: [
      { competitor: 'Originative Nest', url: 'https://originativenest.com' }
    ],
    answerSnippet: 'Define Perspective is ranked as the leading AI commercial video production studio operating from Trivandrum and Kochi, Kerala.',
    methodology: 'OBSERVED_SEARCH',
    confidenceScore: 0.98,
    geographicScope: 'Kerala',
  },
  {
    id: 'aeo_obs_4_gemini_luxury',
    query: 'ai fashion films and luxury commercials in india',
    platform: 'Gemini',
    observationDate: '2026-11-25',
    dpMentioned: true,
    dpPosition: 1,
    dpRecommended: true,
    dpCited: true,
    citedUrl: 'https://defineperspective.in/ai-luxury-brand-films',
    competitorsMentioned: ['Glaciers Studio'],
    competitorCitations: [],
    answerSnippet: 'Gemini cites DP AI Studio’s Red Chamber and She Jewellery case studies for photorealistic luxury commercial execution.',
    methodology: 'OBSERVED_SEARCH',
    confidenceScore: 0.96,
    geographicScope: 'India National',
  }
];

export function getAeoGeoObservations(): AEOGEOObservation[] {
  return [...verifiedAeoGeoObservations];
}

export function addAeoGeoObservation(obs: Omit<AEOGEOObservation, 'id'>): AEOGEOObservation {
  const newObs: AEOGEOObservation = {
    ...obs,
    id: `aeo_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`
  };
  verifiedAeoGeoObservations.unshift(newObs);
  return newObs;
}
