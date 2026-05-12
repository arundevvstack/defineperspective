import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { keyword, region } = await req.json();

    if (!keyword) {
      return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
    }

    // AI Generation Logic (Simulated for Cinematic Authority)
    const pageTitle = `${keyword} | Premium AI Video Production ${region || 'India'}`;
    const slug = keyword.toLowerCase().replace(/ /g, '-');

    const generatedContent = `
# ${pageTitle}
Experience the future of visual storytelling with Define Perspective. Our neural production pipelines deliver unparalleled cinematic quality for ${keyword}.

## Why Choose DP for ${keyword}?
- **Neural Precision**: Advanced AI models tailored for the ${region || 'Indian'} market.
- **Cinematic Heritage**: Combining traditional filmmaking expertise with cutting-edge AI.
- **Velocity**: From concept to final render in a fraction of traditional timelines.

## Our Process
1. **Semantic Strategy**: Aligning your brand with regional search intent.
2. **Neural Generation**: High-fidelity AI video and image synthesis.
3. **Executive Finishing**: Professional color grading and sound design.
    `.trim();

    // Store in content_pages
    const { data, error } = await supabase
      .from('content_pages')
      .insert({
        title: pageTitle,
        slug: `services/${slug}`,
        content: generatedContent,
        meta_title: `Best ${keyword} in ${region || 'India'} | DP AI Studio`,
        meta_description: `Leading AI-powered production for ${keyword} in ${region || 'India'}. Cinematic quality, neural efficiency.`,
        keywords: [keyword, "AI Video", "DP Studio", region],
        status: 'review',
        schema_json: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": keyword,
          "provider": {
            "@type": "Organization",
            "name": "Define Perspective"
          },
          "areaServed": region || "India"
        }
      })
      .select()
      .single();

    if (error) throw error;

    // Update trend status
    await supabase
      .from('ai_trends')
      .update({ status: 'drafted' })
      .eq('keyword', keyword);

    return NextResponse.json({ 
      success: true, 
      message: `Autonomous draft created for ${keyword}`,
      pageId: data.id 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
