import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const TRENDING_SOURCE = [
  "AI Video Production Companies in Kerala",
  "Premium AI Ad Production India",
  "High-Fidelity AI Content Production Kochi",
  "AI TVC Production Agency South India",
  "Neural Commercials for Luxury Brands India",
  "Malayalam AI Video Generation Services",
  "AI Video Strategy for D2C Brands Kerala",
  "Cost-effective AI Ad Films Kochi",
  "Advanced AI TVC Pipelines India"
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const node = searchParams.get('node') || "Kochi, IN";
    const cityName = node.split(',')[0];

    // 1. Fetch current content index
    const { data: existingPages } = await supabase
      .from('content_pages')
      .select('keywords');

    const indexedKeywords = new Set(existingPages?.flatMap(p => p.keywords || []) || []);

    // 2. Identify Semantic Gaps
    const prioritizedKeywords = [
      "AI video production", "AI ad films", "AI content", "AI tvc"
    ];

    const gaps = TRENDING_SOURCE.filter(trend => {
      const isMissing = !indexedKeywords.has(trend.toLowerCase());
      const isRelevant = prioritizedKeywords.some(pk => trend.toLowerCase().includes(pk.toLowerCase()));
      return isMissing && isRelevant;
    });

    // 3. Localize findings for the Active Node
    const trendRecords = gaps.map(gap => {
      // Localize the title by replacing defaults with cityName
      let localizedGap = gap
        .replace(/Kochi/g, cityName)
        .replace(/Kerala/g, cityName)
        .replace(/India/g, cityName);

      return {
        region: cityName,
        keyword: localizedGap,
        momentum: Math.floor(Math.random() * 20) + 80, // High priority 80-100
        status: 'critical_gap',
        detected_at: new Date().toISOString()
      };
    });

    if (trendRecords.length > 0) {
      const { error: upsertError } = await supabase.from('ai_trends').upsert(trendRecords, { onConflict: 'keyword' });
      if (upsertError) throw upsertError;
    }

    return NextResponse.json({ 
      success: true, 
      gaps_identified: gaps.length,
      trends: trendRecords,
      scan_depth: `Regional Neural Sweep: ${node}`
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
