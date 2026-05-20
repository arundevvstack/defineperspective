import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://defineperspective.in';

  // Fetch pages that likely have VideoObject schema
  const { data: pages } = await supabase
    .from('content_pages')
    .select('slug, title, schema_json, meta_description')
    .eq('status', 'published')
    .not('schema_json', 'is', null);

  const videoPages = (pages || []).filter((p: any) => {
    const schema: any = p.schema_json;
    if (Array.isArray(schema)) {
      return schema.some((s: any) => s["@type"] === "VideoObject");
    }
    return schema?.["@type"] === "VideoObject";
  });

  const featuredStaticVideos = [
    {
      slug: "portfolio/luxury-ai-jewellery-tvc-production",
      title: "Luxury AI Jewellery Commercial | Cinematic AI TVC Production",
      meta_description: "Witness the future of luxury advertising. This 100% AI-generated jewellery commercial was produced by DP AI Studios, India's premier AI video production company.",
      schema_json: {
        "@type": "VideoObject",
        "name": "Luxury AI Jewellery Commercial | Cinematic AI TVC Production",
        "description": "Witness the future of luxury advertising. This 100% AI-generated jewellery commercial was produced by DP AI Studios, India's premier AI video production company.",
        "thumbnailUrl": "https://img.youtube.com/vi/ViVvFiF-kBQ/maxresdefault.jpg",
        "uploadDate": "2024-05-20T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/ViVvFiF-kBQ"
      }
    }
  ];

  const allVideoPages = [...videoPages, ...featuredStaticVideos];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${allVideoPages.map((page: any) => {
    const schema: any = Array.isArray(page.schema_json) 
      ? page.schema_json.find((s: any) => s["@type"] === "VideoObject") 
      : page.schema_json;
      
    const video = schema;
    // Fallback for content_loc: check embedUrl, then contentUrl, then guess from slug if it looks like an ID
    const contentLoc = video.contentUrl || video.embedUrl || `https://www.youtube.com/watch?v=${page.slug.split('/').pop()}`;
    
    return `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <video:video>
      <video:thumbnail_loc>${video.thumbnailUrl || `${baseUrl}/images/main-logo.png`}</video:thumbnail_loc>
      <video:title>${video.name || page.title}</video:title>
      <video:description>${video.description || page.meta_description || `Cinematic AI production by DP AI Studio: ${page.title}`}</video:description>
      <video:content_loc>${contentLoc}</video:content_loc>
      <video:publication_date>${video.uploadDate || new Date().toISOString()}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
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

