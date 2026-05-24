import React from 'react';

interface VideoEntityLayerProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  embedUrl?: string;
  contentUrl?: string;
  transcript: string;
  slug: string;
  geoTags: string[];
  industry: string;
  aiWorkflow: any;
  faqJson: any[];
}

export default function VideoEntityLayer({
  id,
  title,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
  contentUrl,
  transcript,
  slug,
  geoTags,
  industry,
  aiWorkflow,
  faqJson,
}: VideoEntityLayerProps) {
  const url = `https://defineperspective.in/case-studies/${slug}`;
  const orgId = "https://defineperspective.in/#organization";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": `${title} | DP AI Studios Case Study`,
        "description": description,
        "isPartOf": { "@id": "https://defineperspective.in/#website" },
        "about": { "@id": `${url}/#video` }
      },
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        "headline": `${title} - AI Cinematic Production Case Study`,
        "description": description,
        "author": { "@id": orgId },
        "publisher": { "@id": orgId },
        "mainEntityOfPage": { "@id": `${url}/#webpage` }
      },
      {
        "@type": "VideoObject",
        "@id": `${url}/#video`,
        "name": title,
        "description": description,
        "thumbnailUrl": thumbnailUrl,
        "uploadDate": uploadDate,
        "duration": duration,
        "contentUrl": contentUrl || undefined,
        "embedUrl": embedUrl || undefined,
        "transcript": transcript,
        "creator": { "@id": orgId },
        "publisher": { "@id": orgId },
        "spatialCoverage": geoTags.map(tag => ({ "@type": "Place", "name": tag })),
        "keywords": [industry, "AI Video Production", "Cinematic AI", ...geoTags].join(", "),
        "productionCompany": { "@id": orgId },
        "mainEntityOfPage": { "@id": `${url}/#webpage` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://defineperspective.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://defineperspective.in/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": url
          }
        ]
      }
    ]
  };

  if (faqJson && faqJson.length > 0) {
    schemaGraph["@graph"].push({
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      "mainEntity": faqJson.map((faq: any) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    } as any);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
