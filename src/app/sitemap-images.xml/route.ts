import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://defineperspective.in';

  // 1. Static Routes to include
  const staticRoutes = [
    '',
    '/about',
    '/portfolio',
    '/services',
    '/ai-video-production-india',
    '/ai-tvc-production',
    '/photography'
  ];

  // 2. Dynamic Routes from content_pages
  const { data: pages } = await supabase
    .from('content_pages')
    .select('slug, title, schema_json')
    .eq('status', 'published');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <image:image>
      <image:loc>${baseUrl}/images/main-logo.png</image:loc>
      <image:title>DP AI Studio | Cinematic AI Production India</image:title>
      <image:caption>Define Perspective - Premium AI Video Production Agency</image:caption>
    </image:image>
  </url>`).join('')}
  ${(pages || []).map(page => {
    const images = [];
    if (page.schema_json?.thumbnailUrl) {
      images.push({
        loc: page.schema_json.thumbnailUrl,
        title: page.title,
        caption: `Visual asset for ${page.title} - DP AI Studio`
      });
    }
    
    // Add default logo image if no specific thumbnail
    if (images.length === 0) {
      images.push({
        loc: `${baseUrl}/images/main-logo.png`,
        title: page.title,
        caption: `DP AI Studio | ${page.title}`
      });
    }

    return `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('')}
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

