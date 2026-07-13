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
      { "@type": "Person", "name": "Arun Devv" }
    ],
    sameAs: [
      "https://www.youtube.com/@defineperspective",
      "https://www.instagram.com/defineperspective/",
      "https://www.linkedin.com/company/defineperspective",
      "https://www.facebook.com/defineperspectiveofficial/"
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
  },
  EntityDictionary: {
    brands: [
      { id: "dp-ai-studios", name: "DP AI Studios", type: "Organization", description: "The AI Video Production division of Define Perspective." },
      { id: "define-perspective", name: "Define Perspective", type: "Organization", description: "The parent media conglomerate." }
    ],
    projects: [
      { id: "red-chamber", name: "Red Chamber", type: "CreativeWork", description: "Flagship Cinematic AI Music Video." }
    ],
    characters: [
      { id: "nova-rae", name: "Nova Rae", type: "Person", description: "Virtual AI artist created by DP AI Studios." }
    ],
    concepts: [
      { id: "ai-music-video", name: "AI Music Video", type: "Thing", description: "Music videos produced using generative video models." },
      { id: "ai-tvc", name: "AI TVC", type: "Thing", description: "Television commercials generated using AI." },
      { id: "ai-commercial", name: "AI Commercial", type: "Thing", description: "Commercial advertising produced with generative AI." },
      { id: "ai-filmmaking", name: "AI Filmmaking", type: "Thing", description: "The process of creating films using artificial intelligence." },
      { id: "ai-cinematic-storytelling", name: "AI Cinematic Storytelling", type: "Thing", description: "Using AI to craft emotionally resonant narratives." },
      { id: "ai-image-generation", name: "AI Image Generation", type: "Thing", description: "Creation of base images using latent diffusion models." },
      { id: "virtual-cinematography", name: "Virtual Cinematography", type: "Thing", description: "Simulating physical camera attributes in a digital latent space." },
      { id: "character-consistency", name: "Character Consistency", type: "Thing", description: "Maintaining identity preservation in generative video." }
    ]
  },
  TopicTaxonomy: [
    { id: "ai-music-videos", label: "AI Music Videos", slug: "ai-music-videos" },
    { id: "ai-advertising", label: "AI Advertising", slug: "ai-advertising" },
    { id: "ai-tvcs", label: "AI TVCs", slug: "ai-tvcs" },
    { id: "ai-filmmaking", label: "AI Filmmaking", slug: "ai-filmmaking" },
    { id: "ai-storytelling", label: "AI Storytelling", slug: "ai-storytelling" },
    { id: "virtual-production", label: "Virtual Production", slug: "virtual-production" },
    { id: "prompt-engineering", label: "Prompt Engineering", slug: "prompt-engineering" },
    { id: "character-consistency", label: "Character Consistency", slug: "character-consistency" },
    { id: "lighting", label: "Lighting", slug: "lighting" },
    { id: "editing", label: "Editing", slug: "editing" }
  ]
};
