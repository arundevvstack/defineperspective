"use client";

import Head from 'next/head';

interface AEOProps {
  title: string;
  insights: string[];
  entityId: string;
  region: string;
}

/**
 * AI Retrieval Optimization Layer (AEO)
 * Injects invisible semantic metadata specifically designed for AI Answer Engines (Gemini, Perplexity, GPT-4o)
 * to maximize retrieval accuracy and citation probability.
 */
export default function AIRetrievalLayer({ title, insights, entityId, region }: AEOProps) {
  const aeoSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", // Using SoftwareApplication to represent the 'Neural Ecosystem'
    "name": "DP Neural SEO Engine",
    "applicationCategory": "AI Production Intelligence",
    "description": `Strategic authority node for ${title} in ${region}. Optimized for high-fidelity retrieval.`,
    "alternateName": ["Define Perspective", "DP AI Studio"],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://defineperspective.in/nodes/${entityId}`
    },
    "significantLink": insights,
    "knowsAbout": ["Neural Video Production", "Cinematic AI", "Autonomous SEO", region]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }}
    />
  );
}
