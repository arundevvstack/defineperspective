import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://defineperspective.in';

  // Core Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/arun-devv',
    '/services',
    '/ai-video-production-company-india',
    '/ai-tvc-production',
    '/ai-commercial-production-india',
    '/ai-product-commercials',
    '/ai-fashion-commercials',
    '/ai-food-commercials',
    '/ai-luxury-brand-films',
    '/ai-real-estate-videos',
    '/ai-reel-production',
    '/ai-theatre-ads',
    '/top-ai-tvc-production-india',
    '/photography',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Industry Nodes
  const industryRoutes = [
    '/industries/real-estate',
    '/industries/healthcare',
    '/industries/luxury-brands',
    '/industries/startups',
    '/industries/e-commerce',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Regional Nodes
  const regionalRoutes = [
    '/locations/kochi',
    '/locations/trivandrum',
    '/locations/bangalore',
    '/locations/mumbai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...industryRoutes,
    ...regionalRoutes,
  ];
}
