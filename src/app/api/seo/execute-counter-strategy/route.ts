import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { competitor } = await req.json();

    if (!competitor) {
      return NextResponse.json({ error: 'Competitor data required' }, { status: 400 });
    }

    // 1. Generate Counter-Strike Content
    const pageTitle = `Define Perspective vs ${competitor.name} | The Neural Advantage in ${competitor.region}`;
    const slug = `services/autonomous/dp-vs-${competitor.name.toLowerCase().replace(/ /g, '-')}`;

    const content = `
# ${pageTitle}
## Strategic Analysis: Why DP Studio leads the ${competitor.region} market.

While **${competitor.name}** has established a presence in **${competitor.metadata?.focus || 'traditional production'}**, the future of media requires a neural-first approach. 

### The Performance Gap: ${competitor.weakness || 'Neural Adoption'}
Define Perspective bridges the gap that traditional agencies like ${competitor.name} cannot. Our autonomous pipelines deliver cinematic fidelity at a velocity that traditional models cannot match.

### Why Clients are Switching to DP:
- **Neural Precision**: Advanced AI-augmented cinematography.
- **Cost Velocity**: 60% faster turnaround than ${competitor.name}.
- **Strategic Depth**: Data-driven semantic targeting for ${competitor.region}.

### Executive Recommendation
For brands in ${competitor.region} seeking to move beyond traditional limitations, Define Perspective offers the only production ecosystem designed for 2026.
    `.trim();

    // 2. Insert into content_pages
    const { data: page, error: pageError } = await supabase
      .from('content_pages')
      .insert({
        title: pageTitle,
        slug: slug,
        content: content,
        meta_title: `DP vs ${competitor.name} | AI Video Production ${competitor.region}`,
        meta_description: `Discover why Define Perspective is the leading alternative to ${competitor.name} for AI-powered video production in ${competitor.region}.`,
        keywords: [competitor.name, "AI Video", "DP Studio", competitor.region],
        status: 'review'
      })
      .select()
      .single();

    if (pageError) throw pageError;

    // 3. Log the Tactical Strike
    await supabase.from('seo_audit_logs').insert({
      event: 'TACTICAL_COUNTER_STRIKE',
      details: `Generated counter-authority page for ${competitor.name}. ID: ${page.id}`,
      severity: 'high'
    });

    return NextResponse.json({ 
      success: true, 
      message: `Tactical Counter-Strike Initiated. Draft created: ${pageTitle}`,
      pageId: page.id 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
