import { Metadata } from "next";
import AIServiceTemplate from "@/components/ai-service-template";
import AIRetrievalLayer from "@/components/seo/AIRetrievalLayer";

const TITLE = "AI Video Production Company in India | DP AI Studios";
const DESCRIPTION = "DP AI Studios creates AI commercials, AI brand films, AI advertising videos, AI explainers, and cinematic AI productions for businesses across India.";
const CANONICAL = "https://defineperspective.in/ai-video-production";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI Video Production",
    "AI Video Production India",
    "AI Commercial Production",
    "AI Advertising Production",
    "AI Brand Film Production"
  ],
  alternates: {
    canonical: CANONICAL
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "DP AI Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DP AI Studio - AI Video Production India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AIVideoProductionPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://defineperspective.in/#organization",
    "name": "DP AI Studios",
    "url": "https://defineperspective.in",
    "logo": "https://defineperspective.in/images/main-logo.png",
    "sameAs": [
      "https://facebook.com/defineperspectiveofficial/",
      "https://instagram.com/defineperspective/",
      "https://youtube.com/@DefinePerspective",
      "https://linkedin.com/company/defineperspective"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "AI Video Production",
        "item": CANONICAL
      }
    ]
  };

  const services = [
    "AI Commercial Production",
    "Cinematic AI Brand Films",
    "AI Advertising Videos",
    "AI Explainers",
    "Generative AI Visuals"
  ];

  const benefits = [
    "70% Faster Delivery than Traditional Shoots",
    "Unmatched Cinematic Quality at Scale",
    "Cost-Effective Neural Rendering",
    "Infinite Creative Variations"
  ];

  const faqs = [
    {
      q: "What is AI Video Production?",
      a: "AI Video Production uses advanced generative neural networks to create high-fidelity, cinematic commercials and brand films without the need for traditional logistics, sets, or cameras."
    },
    {
      q: "Are you an AI Video Production Company based in India?",
      a: "Yes, DP AI Studios is India's leading AI video production agency. We craft elite AI commercials and branded content for visionary brands nationwide."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <AIRetrievalLayer 
        title="AI Video Production"
        region="India"
        entityId="ai-video-production-india"
        insights={services}
        category="Authority Pillar"
      />
      <AIServiceTemplate 
        categoryName="AI Studio"
        currentPath="/ai-video-production"
        h1="AI Video Production"
        intro="Pioneering the future of cinematic advertising. We merge human art direction with generative neural workflows to produce elite AI commercials and brand films across India."
        services={services}
        benefits={benefits}
        locationBlock="Establishing absolute search dominance for AI Video Production across India. Our neural infrastructure is designed for high-conversion and rapid retrieval."
        faqs={faqs}
        type="ai"
      />
    </>
  );
}
