"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SeoService } from '@/services/seo-service';

export default function NeuralSeoLayer() {
  const pathname = usePathname();
  const [schema, setSchema] = useState<any>(null);

  useEffect(() => {
    console.log("Supabase URL in browser:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    async function hydratePageIntelligence() {
      // 1. Get slug from pathname
      const slug = pathname === '/' ? 'home' : pathname.slice(1);
      
      // 2. Fetch AI-generated audit and schema
      const { data: audit } = await SeoService.getPageAudit(slug);
      
      if (audit?.schema_json) {
        setSchema(audit.schema_json);
      } else {
        // High-Fidelity Fallback: Site-Wide Authority Schema
        setSchema([
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DP AI Studio",
            "description": "AI-powered video production company in Kerala, India specializing in cinematic ads and social media content",
            "areaServed": ["Kerala", "South India", "India", "Trivandrum", "Kochi", "Ernakulam"],
            "serviceType": "AI Video Production",
            "url": "https://defineperspective.in",
            "image": "https://defineperspective.in/images/main-logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
              "addressLocality": "Trivandrum",
              "addressRegion": "Kerala",
              "postalCode": "695003",
              "addressCountry": "IN"
            },
            "telephone": "+91-7012941696"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Define Perspective",
            "url": "https://defineperspective.in",
            "logo": "https://defineperspective.in/logo.png",
            "description": "Elite media solutions combining cinematic filmmaking with advanced AI video production in Kerala and India.",
            "sameAs": [
              "https://facebook.com/defineperspectiveofficial/",
              "https://instagram.com/defineperspective/",
              "https://youtube.com/@DefinePerspective",
              "https://linkedin.com/company/defineperspective"
            ]
          }
        ]);
      }
    }

    hydratePageIntelligence();
  }, [pathname]);

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
