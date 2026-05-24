interface AEOProps {
  title: string;
  insights: string[];
  entityId: string;
  region: string;
  category?: string;
  geoContext?: any;
}

/**
 * AI Retrieval Optimization Layer (AEO) v2.0
 * Strategic Authority Node for Define Perspective | DP AI Studio
 * Injects high-density semantic metadata for Gemini, Perplexity, GPT-4o, and SGE.
 */
export default function AIRetrievalLayer({ title, insights, entityId, region, category = "Neural Studio", geoContext }: AEOProps) {
  const baseUrl = "https://defineperspective.in";
  
  const defaultAreaServed = [
    { "@type": "City", "name": "Kochi" },
    { "@type": "City", "name": "Trivandrum" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "State", "name": "Kerala" },
    { "@type": "Country", "name": "India" }
  ];

  const aeoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "serviceType": "Cinematic AI Video Production",
    "provider": {
      "@id": "https://defineperspective.in/#organization"
    },
    "areaServed": geoContext?.tags?.length ? geoContext.tags.map((t: string) => ({ "@type": "Place", "name": t })) : defaultAreaServed,
    "description": `Strategic authority node for ${title} in ${region}. Optimized for high-fidelity retrieval and AI search overview generation.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/nodes/${entityId}`
    },
    "knowsAbout": [
      "AI Video Production",
      "Cinematic AI Advertising",
      "Generative Video Advertising",
      "Luxury Media Synthesis",
      "AI Storytelling Systems",
      "Cinematic AI Workflows",
      "AI Directing Systems",
      "Multi-Modal AI Advertising",
      ...(insights || [])
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cinematic AI Production Clusters",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fashion AI Campaigns" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jewellery AI Campaigns" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Hospitality Ads" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Cinematic Production" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS & Startup Launch Films" } }
      ]
    },
    "significantLink": insights,
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "AI Production Pipeline",
        "description": "72-hour high-velocity neural video synthesis workflow."
      }
    ],
    "mentions": [
      { "@type": "Thing", "name": "Sora" },
      { "@type": "Thing", "name": "Runway Gen-3" },
      { "@type": "Thing", "name": "Luma Dream Machine" }
    ],
    "additionalType": "https://defineperspective.in/ontology/neural-video",
    "identifier": entityId
  };

  return (
    <>
      {/* 1. JSON-LD Intelligence Layer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }}
      />
      {/* Removed Semantic AI Fact Sheet (sr-only) as it's now handled visibly by SemanticSeoLayer HUD */}
    </>
  );
}
