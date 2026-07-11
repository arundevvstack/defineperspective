import { Metadata } from "next";
import AIServiceTemplate from "@/components/ai-service-template";
import AIRetrievalLayer from "@/components/seo/AIRetrievalLayer";

const TITLE = "AI Video Production Services | AI Commercials & Brand Films";
const DESCRIPTION = "Professional AI video production services including AI TV commercials, AI product videos, AI fashion films, AI explainers, and branded content production.";
const CANONICAL = "https://defineperspective.in/ai-video-production-services";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI Video Production Services",
    "AI Commercial Services",
    "AI TVC Production",
    "AI Advertising Services",
    "AI Product Video Services"
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
        alt: "DP AI Studio - AI Video Production Services",
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

export default function AIVideoProductionServicesPage() {
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
        "name": "AI Video Production Services",
        "item": CANONICAL
      }
    ]
  };

  const services = [
    "AI TV Commercials",
    "AI Product Videos",
    "AI Fashion Films",
    "AI Explainers",
    "Branded Content Production"
  ];

  const benefits = [
    "Precision Art Direction",
    "Cinematic Camera Movements",
    "Hyper-Realistic Neural Textures",
    "Infinite Scale and Variations"
  ];

  const faqs = [
    {
      q: "What AI Video Production Services do you offer?",
      a: "We offer end-to-end cinematic AI video production services including AI TV commercials, AI product videos, AI fashion films, and generative AI visual storytelling."
    },
    {
      q: "Why choose your AI Commercial Services?",
      a: "Our AI commercial services combine proprietary neural workflows with traditional cinematic mastering, giving you broadcast-ready assets faster and more efficiently than legacy production methods."
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
        title="AI Video Production Services"
        region="India"
        entityId="ai-video-production-services"
        insights={services}
        category="Service Hub"
      />
      <AIServiceTemplate 
        categoryName="AI Services"
        currentPath="/ai-video-production-services"
        h1="AI Video Production Services"
        intro="Explore our comprehensive suite of professional AI video production services. We engineer high-performance AI commercials, product videos, and brand films."
        services={services}
        benefits={benefits}
        locationBlock="Delivering premium AI video production services to leading brands. Scale your visual content with our cinematic neural pipelines."
        faqs={faqs}
        type="ai"
      />
    </>
  );
}
