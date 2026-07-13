import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { discoverAppRoutes } from '@/lib/route-discovery';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const baseUrl = 'https://defineperspective.in';

  // 1. Static Routes (Main Pages and Categories)
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/portfolio/luxury-ai-jewellery-tvc-production',
    '/portfolio/cinematic-ai-commercial-production',
    '/arun-devv',
    '/services',
    '/blog',
    '/industries',
    '/locations',
    '/video-production',
    '/photography',
    '/ai-services',
    '/ai-studios',
    '/ai-video-production-india',
    '/ai-video-production-company-india',
    '/ai-video-production',
    '/ai-video-production-services',
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
    '/ai-ad-film-agency-kerala',
    '/ai-automobile-commercials',
    '/ai-hospitality-ads',
    '/ai-jewellery-commercials',
    '/ai-real-estate-commercials',
    '/ai-startup-commercials',
    '/ai-video-production-bangalore',
    '/ai-video-production-chennai',
    '/ai-video-production-hyderabad',
    '/ai-video-production-kochi',
    '/ai-video-production-mumbai',
    '/ai-video-production-south-india',
    '/ai-video-production-trivandrum',
    '/ai-healthcare-ads',
    '/ai-corporate-films',
    '/ai-video-production-delhi',
    '/ai-commercial-production-cost-india',
    '/ai-vs-traditional-commercial-production',
    '/knowledge-center',
  ];

  // 2. Discover App Router Knowledge Center Pages
  const discoveredKnowledgeCenterRoutes = discoverAppRoutes('knowledge-center');
  
  // Merge static routes and automatically discovered routes (removing duplicates)
  const allStaticRoutes = Array.from(new Set([...staticRoutes, ...discoveredKnowledgeCenterRoutes]));

  // 3. Dynamic Routes from content_pages
  const { data: pages } = await supabase
    .from('content_pages')
    .select('slug, updated_at')
    .eq('status', 'published');

  // 4. Entity Nodes (Locations/Industries)
  const { data: entities } = await supabase
    .from('entity_graph')
    .select('entity_name, type')
    .in('type', ['location', 'industry']);

  // Deduplicate all final URLs to ensure zero overlapping entries
  const urlSet = new Map<string, string>();

  allStaticRoutes.forEach((route: string) => {
    urlSet.set(`${baseUrl}${route}`, `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : route.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`);
  });

  (pages || []).forEach((page: any) => {
    urlSet.set(`${baseUrl}/${page.slug}`, `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${page.updated_at || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  (entities || []).forEach((entity: any) => {
    const slug = entity.type === 'location' ? `/locations/${entity.entity_name.toLowerCase().replace(/\s+/g, '-')}` : `/industries/${entity.entity_name.toLowerCase().replace(/\s+/g, '-')}`;
    if (!urlSet.has(`${baseUrl}${slug}`)) {
      urlSet.set(`${baseUrl}${slug}`, `
  <url>
    <loc>${baseUrl}${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
    }
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urlSet.values()).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}

