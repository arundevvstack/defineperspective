import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const baseUrl = 'https://defineperspective.in';
  
  const { data: caseStudies } = await supabaseAdmin
    .from('case_studies')
    .select('slug, published_at, created_at, thumbnail_url')
    .eq('published', true)
    .order('published_at', { ascending: false });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/case-studies</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;

  if (caseStudies) {
    caseStudies.forEach((cs) => {
      const lastMod = cs.published_at || cs.created_at || new Date().toISOString();
      xml += `
  <url>
    <loc>${baseUrl}/case-studies/${cs.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>`;
      
      if (cs.thumbnail_url) {
        xml += `
    <image:image>
      <image:loc>${cs.thumbnail_url.replace(/&/g, '&amp;')}</image:loc>
    </image:image>`;
      }
      
      xml += `
  </url>`;
    });
  }

  xml += `\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
