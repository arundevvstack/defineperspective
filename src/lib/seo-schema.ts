import { SEO_ENTITIES } from "@/data/seo-knowledge-graph";

/**
 * SCHEMA FACTORY
 * Generates enterprise-grade JSON-LD schemas for AI search engine discoverability.
 */

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  ...SEO_ENTITIES.Organization
});

export const generateServiceSchema = (serviceId: string) => {
  const service = SEO_ENTITIES.Services.find(s => s.id === serviceId);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": SEO_ENTITIES.Organization.name
    },
    "areaServed": service.locations.map(loc => ({
      "@type": "City",
      "name": loc
    }))
  };
};

export const generateBreadcrumbSchema = (items: { name: string, item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://defineperspective.in${item.item}`
  }))
});

export const generateLocalBusinessSchema = (city: string) => {
  const location = SEO_ENTITIES.Locations.find(l => l.name === city);
  if (!location) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${SEO_ENTITIES.Organization.name} ${city}`,
    "image": SEO_ENTITIES.Organization.logo,
    "@id": `https://defineperspective.in/location/${location.slug}`,
    "url": `https://defineperspective.in/location/${location.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": location.parent || "India",
      "addressCountry": "IN"
    }
  };
};

export const generateVideoSchema = (video: { title: string, description: string, thumbnail: string, uploadDate: string, url: string }) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.title,
  "description": video.description,
  "thumbnailUrl": video.thumbnail,
  "uploadDate": video.uploadDate,
  "contentUrl": video.url,
  "publisher": {
    "@type": "Organization",
    "name": SEO_ENTITIES.Organization.name,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_ENTITIES.Organization.logo
    }
  }
});
