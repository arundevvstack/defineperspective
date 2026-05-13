import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const baseUrl = 'https://defineperspective.in';

  // 1. Static Routes (Main Pages and Categories)
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
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
  ];

  // 2. Dynamic Routes from content_pages
  const { data: pages } = await supabase
    .from('content_pages')
    .select('slug, updated_at')
    .eq('status', 'published');

  // 3. Entity Nodes (Locations/Industries)
  const { data: entities } = await supabase
    .from('entity_graph')
    .select('entity_name, type')
    .in('type', ['location', 'industry']);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map((route: string) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : route.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`).join('')}
  ${(pages || []).map((page: any) => `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${page.updated_at || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${(entities || []).map((entity: any) => {
    const slug = entity.type === 'location' ? `/locations/${entity.entity_name.toLowerCase().replace(/\s+/g, '-')}` : `/industries/${entity.entity_name.toLowerCase().replace(/\s+/g, '-')}`;
    return `
  <url>
    <loc>${baseUrl}${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}

