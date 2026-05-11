import { supabase } from '@/lib/supabase';

export interface SeoAudit {
  id: string;
  page_slug: string;
  seo_score: number;
  readability_score: number;
  ai_spam_score: number;
  schema_status: string;
  schema_json?: any;
  issues: any;
  scanned_at: string;
}

export const SeoService = {
  /**
   * Fetches the current SEO health for a specific page
   */
  async getPageAudit(slug: string): Promise<{ data: SeoAudit | null; error: any }> {
    const { data, error } = await supabase
      .from('seo_audit_logs')
      .select('*')
      .eq('page_slug', slug)
      .order('scanned_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    
    return { data, error };
  },

  /**
   * Registers a new YouTube video for AI SEO processing
   */
  async syncYouTubeVideo(videoId: string, title: string) {
    const response = await fetch('/api/seo/youtube-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoId, title })
    });
    return response.json();
  },

  async getTrends() {
    const { data, error } = await supabase
      .from('ai_trends')
      .select('*')
      .order('momentum', { ascending: false });
    return { data, error };
  },

  async getRegionalSignals() {
    // Aggregates data from entity_graph to determine regional authority
    const { data, error } = await supabase
      .from('entity_graph')
      .select('region, authority_score, type')
      .not('region', 'is', null);
    
    // Group and average by region
    const signals = data?.reduce((acc: any, curr: any) => {
      if (!acc[curr.region]) acc[curr.region] = { city: curr.region, strength: 0, count: 0 };
      acc[curr.region].strength += curr.authority_score || 0;
      acc[curr.region].count += 1;
      return acc;
    }, {});

    return Object.values(signals || {}).map((s: any) => ({
      city: s.city,
      strength: Math.round(s.strength / s.count),
      status: s.strength / s.count > 80 ? "Peak Authority" : "Growth Phase"
    }));
  },

  /**
   * Fetches the latest AI Trends
   */
  async getAiTrends(region: string = 'Kochi') {
    const { data, error } = await supabase
      .from('ai_trends')
      .select('*')
      .eq('region', region)
      .order('detected_at', { ascending: false })
      .limit(10);
    
    return { data, error };
  },

  /**
   * Fetches semantic relationships for the Entity Graph
   */
  async getEntityGraph() {
    const { data, error } = await supabase
      .from('entity_graph')
      .select('*');
    
    return { data, error };
  }
};
