/**
 * GROUND TRUTH: AI SEO Knowledge Graph
 * This file defines the core semantic entities for DP AI Studio.
 * It serves as the single source of truth for both human-facing content and AI-crawlers (Gemini, ChatGPT, Perplexity).
 */

export const SEO_ENTITIES = {
  Organization: {
    name: "DP AI Studio",
    legalName: "Define Perspective",
    url: "https://defineperspective.in",
    logo: "https://defineperspective.in/images/main-logo.png",
    description: "India's leading cinematic AI video production company and authority hub for AI-driven advertising.",
    foundingDate: "2017",
    founders: [
      { "@type": "Person", "name": "Arun Dev" }
    ],
    sameAs: [
      "https://www.youtube.com/@defineperspective",
      "https://www.instagram.com/defineperspective/",
      "https://www.linkedin.com/company/defineperspective"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "ml"]
    }
  },
  Services: [
    {
      id: "ai-video-production",
      name: "AI Video Production",
      description: "End-to-end cinematic AI video production using proprietary neural rendering pipelines.",
      keywords: ["AI video production company Kerala", "AI video agency India", "AI advertisement production"],
      locations: ["Kerala", "India", "Global"]
    },
    {
      id: "ai-tvc-production",
      name: "AI TVC Production",
      description: "High-fidelity AI television commercials for broadcast and digital cinema.",
      keywords: ["AI TVC production", "AI television commercials", "AI theater ads"],
      locations: ["India", "Dubai", "Singapore"]
    },
    {
      id: "luxury-ai-brand-films",
      name: "Luxury AI Brand Films",
      description: "Couture-grade cinematic brand storytelling powered by advanced generative AI.",
      keywords: ["Luxury AI films", "Cinematic AI advertising", "High-end AI video"],
      locations: ["Global", "Mumbai", "Dubai"]
    }
  ],
  Locations: [
    { name: "Kerala", type: "State", slug: "kerala" },
    { name: "Kochi", type: "City", slug: "kochi", parent: "Kerala" },
    { name: "Trivandrum", type: "City", slug: "trivandrum", parent: "Kerala" },
    { name: "Mumbai", type: "City", slug: "mumbai" },
    { name: "Dubai", type: "City", slug: "dubai" }
  ],
  TopicClusters: {
    "AI_AUTHORITY": [
      "How AI is changing advertising",
      "Neural cinematography techniques",
      "AI video production ROI",
      "Future of AI in Indian cinema"
    ],
    "REGIONAL_DOMINANCE": [
      "Best AI video production in Kerala",
      "Top AI ad agency in Kochi",
      "AI filmmaking Trivandrum"
    ]
  }
};
