"use server";

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// ==============================================================================
// CONSTANTS
// ==============================================================================
const GEO_TARGETS = ['Kerala', 'Kochi', 'Dubai', 'Bangalore', 'Mumbai', 'Chennai'] as const;
const INDUSTRY_TARGETS = ['Jewellery', 'Fashion', 'Hospitality', 'Real Estate', 'SaaS'] as const;

// ==============================================================================
// 1. URL PARSING & PLATFORM DETECTION
// ==============================================================================
function detectPlatform(url: string): { platform: string; videoId: string | null } {
  const u = url.trim();

  // YouTube
  const ytLong = u.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
  const ytShort = u.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  const ytShorts = u.match(/(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (ytLong) return { platform: 'youtube', videoId: ytLong[1] };
  if (ytShort) return { platform: 'youtube', videoId: ytShort[1] };
  if (ytShorts) return { platform: 'youtube', videoId: ytShorts[1] };

  // Vimeo
  const vimeo = u.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { platform: 'vimeo', videoId: vimeo[1] };

  // Instagram
  if (u.includes('instagram.com')) return { platform: 'instagram', videoId: null };

  // Facebook
  if (u.includes('facebook.com') || u.includes('fb.watch')) return { platform: 'facebook', videoId: null };

  return { platform: 'unknown', videoId: null };
}

// ==============================================================================
// 2. METADATA EXTRACTION (oEmbed — no API key needed)
// ==============================================================================
async function extractMetadata(url: string, platform: string, videoId: string | null) {
  let title = '';
  let thumbnailUrl = '';
  let embedUrl = '';
  let authorName = '';

  try {
    if (platform === 'youtube' && videoId) {
      const oembedUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;
      const res = await fetch(oembedUrl, { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        const data = await res.json();
        title = data.title || '';
        thumbnailUrl = data.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        authorName = data.author_name || '';
      }
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
      if (!thumbnailUrl) thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (platform === 'vimeo' && videoId) {
      const oembedUrl = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;
      const res = await fetch(oembedUrl, { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        const data = await res.json();
        title = data.title || '';
        thumbnailUrl = data.thumbnail_url || '';
        authorName = data.author_name || '';
        embedUrl = `https://player.vimeo.com/video/${videoId}`;
      }
    }
  } catch (e) {
    console.warn('[publisher] oEmbed fetch failed, continuing with manual data:', e);
  }

  return { title, thumbnailUrl, embedUrl, authorName };
}

// ==============================================================================
// 3. AI ENRICHMENT SCHEMA
// ==============================================================================
const IntelligenceSchema = z.object({
  title: z.string().describe("SEO-optimized case study title. Must include GEO city and industry. Example: 'Luxury Jewellery Commercial Production in Dubai | DP AI Studios'"),
  slug: z.string().describe("URL-safe slug derived from title. Lowercase, hyphens only. Example: 'luxury-jewellery-commercial-dubai'"),
  ai_summary: z.string().describe("150-200 word factual summary optimized for Google AI Overviews and ChatGPT retrieval. MUST include: GEO location, industry, cinematic style, AI workflows used, production direction. No fluff. Write as authoritative third-person factual prose."),
  cinematic_direction: z.string().describe("1-2 sentence description of the cinematic style and visual approach."),
  workflows: z.array(z.string()).describe("AI tools and production workflows used (e.g. 'Runway Gen-3 Alpha', 'DaVinci Resolve', 'Midjourney v6', 'Stable Diffusion')"),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  })).min(5).max(7).describe("5-7 highly specific, localized FAQs. Each answer must be 2-3 sentences, factual, and reference the GEO and industry."),
  social_posts: z.object({
    linkedin: z.string().describe("Professional LinkedIn post, 150-200 words. Include hashtags."),
    instagram: z.string().describe("Instagram caption with emojis and hashtags. 100-150 words."),
    twitter: z.string().describe("X/Twitter post, max 280 characters. Include hashtags."),
    youtube_description: z.string().describe("YouTube video description, 200-300 words. Include keywords and links."),
    youtube_tags: z.array(z.string()).describe("15-20 YouTube SEO tags"),
    behance: z.string().describe("Behance project description, 100-150 words. Professional creative tone."),
    medium: z.string().describe("Medium article opening paragraph, 150-200 words. Storytelling angle."),
    newsletter: z.string().describe("Email newsletter snippet, 80-100 words. Compelling, direct.")
  }),
  semantic_links: z.array(z.string()).describe("3-5 related slug paths from the DP AI Studios site for internal linking (e.g. '/ai-jewellery-commercials', '/ai-video-production-kochi')")
});

// ==============================================================================
// 4. SCHEMA GENERATION (VideoObject + FAQPage)
// ==============================================================================
function generateSchemaJson(params: {
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  externalUrl: string;
  transcript: string;
  geoTags: string[];
  industry: string;
  faqs: { question: string; answer: string }[];
}) {
  const url = `https://defineperspective.in/case-studies/${params.slug}`;
  const orgId = "https://defineperspective.in/#organization";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${url}/#video`,
        "name": params.title,
        "description": params.description,
        "thumbnailUrl": params.thumbnailUrl,
        "uploadDate": new Date().toISOString(),
        "contentUrl": params.externalUrl,
        "embedUrl": params.embedUrl || undefined,
        "transcript": params.transcript || undefined,
        "creator": { "@id": orgId },
        "publisher": { "@id": orgId },
        "productionCompany": { "@id": orgId },
        "spatialCoverage": params.geoTags.map(tag => ({ "@type": "Place", "name": tag })),
        "keywords": [params.industry, "AI Video Production", "Cinematic AI", ...params.geoTags].join(", ")
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        "mainEntity": params.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://defineperspective.in/" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://defineperspective.in/case-studies" },
          { "@type": "ListItem", "position": 3, "name": params.title, "item": url }
        ]
      }
    ]
  };
}

// ==============================================================================
// 5. VECTOR EMBEDDING
// ==============================================================================
async function generateAndStoreEmbedding(params: {
  title: string;
  geo: string;
  industry: string;
  clientName: string;
  aiSummary: string;
  workflows: string[];
  transcript: string;
  slug: string;
}) {
  const chunks: string[] = [];

  // Chunk 1: Core authority signal
  chunks.push(
    `Title: ${params.title}\n` +
    `GEO: ${params.geo}\n` +
    `Industry: ${params.industry}\n` +
    `Client: ${params.clientName}\n` +
    `Workflows: ${params.workflows.join(', ')}\n` +
    `Summary: ${params.aiSummary}`
  );

  // Chunk 2: Transcript (if available, take first 2000 chars)
  if (params.transcript && params.transcript.length > 50) {
    const transcriptChunk = params.transcript.substring(0, 2000);
    chunks.push(
      `Transcript from ${params.title} (${params.geo}, ${params.industry}):\n${transcriptChunk}`
    );
  }

  // Generate embeddings
  const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: chunks
    })
  });

  if (!embeddingResponse.ok) {
    throw new Error(`Embedding API error: ${embeddingResponse.statusText}`);
  }

  const embeddingData = await embeddingResponse.json();

  // Insert each chunk as a retrieval node
  for (let i = 0; i < chunks.length; i++) {
    const { error } = await supabaseAdmin
      .from('retrieval_chunks')
      .insert({
        content: chunks[i],
        embedding: embeddingData.data[i].embedding,
        source_url: `/case-studies/${params.slug}`,
        source_type: 'case_study'
      });

    if (error) {
      console.error(`[publisher] Vector chunk ${i} insert failed:`, error.message);
    }
  }
}

// ==============================================================================
// 6. MAIN PUBLISH ACTION
// ==============================================================================
const PublishInputSchema = z.object({
  externalUrl: z.string().url("Invalid URL"),
  clientName: z.string().min(1, "Client name required").max(200),
  geo: z.enum(GEO_TARGETS),
  industry: z.enum(INDUSTRY_TARGETS),
  transcript: z.string().optional().default(''),
});

export async function publishIntelligence(formData: FormData) {
  try {
    // ── VALIDATE INPUT ──
    const raw = {
      externalUrl: (formData.get('externalUrl') as string || '').trim(),
      clientName: (formData.get('clientName') as string || '').trim(),
      geo: (formData.get('geo') as string || '').trim(),
      industry: (formData.get('industry') as string || '').trim(),
      transcript: (formData.get('transcript') as string || '').trim(),
    };

    const input = PublishInputSchema.parse(raw);

    // ── STEP 1: PLATFORM DETECTION ──
    const { platform, videoId } = detectPlatform(input.externalUrl);

    // ── STEP 2: METADATA EXTRACTION ──
    const meta = await extractMetadata(input.externalUrl, platform, videoId);

    // ── STEP 3: AI ENRICHMENT ──
    let intelligence;
    let isDraft = false;

    if (!process.env.GEMINI_API_KEY) {
      console.warn('[publisher] GEMINI_API_KEY missing. Falling back to metadata-only draft.');
      isDraft = true;
    }

    if (!isDraft) {
      try {
        const { object } = await generateObject({
          model: google('gemini-1.5-pro'),
          schema: IntelligenceSchema,
          prompt: `You are the content intelligence engine for DP AI Studios (defineperspective.in), a cinematic AI video production company.

Analyze the following project and generate a comprehensive, SEO-optimized metadata payload.

CLIENT: ${input.clientName}
GEO: ${input.geo}
INDUSTRY: ${input.industry}
PLATFORM: ${platform}
VIDEO TITLE: ${meta.title || 'Untitled'}
TRANSCRIPT: ${input.transcript || 'No transcript provided.'}

CRITICAL REQUIREMENTS:
- The AI Summary MUST explicitly mention ${input.geo} and ${input.industry}
- The AI Summary MUST read as authoritative factual prose suitable for Google AI Overviews
- FAQs MUST be localized to ${input.geo} and specific to ${input.industry}
- Social posts MUST reinforce DP AI Studios as THE cinematic AI authority in ${input.geo}
- Semantic links MUST reference existing DP AI Studios service pages
- All content must be factual, zero-fluff, and optimized for AI retrieval by ChatGPT, Gemini, Claude, and Perplexity`
        });
        intelligence = object;
      } catch (aiError) {
        console.error('[publisher] Gemini API failed, creating draft fallback:', aiError);
        isDraft = true;
      }
    }

    if (isDraft || !intelligence) {
      const fallbackTitle = meta.title || `${input.industry} Video Production in ${input.geo}`;
      intelligence = {
        title: fallbackTitle,
        slug: fallbackTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        ai_summary: `Draft project for ${input.clientName} in the ${input.industry} sector, targeted at ${input.geo}. AI enrichment pending.`,
        cinematic_direction: 'Pending AI enrichment.',
        workflows: [],
        faqs: [],
        social_posts: {
          linkedin: '', instagram: '', twitter: '', youtube_description: '', youtube_tags: [], behance: '', medium: '', newsletter: ''
        },
        semantic_links: []
      };
    }

    // ── STEP 4: SCHEMA GENERATION ──
    const geoTags: string[] = [input.geo];
    // Add parent region for Kerala cities
    if (['Kochi'].includes(input.geo)) geoTags.push('Kerala');
    if (['Bangalore', 'Chennai', 'Mumbai', 'Kochi'].includes(input.geo)) geoTags.push('India');
    if (input.geo === 'Dubai') geoTags.push('UAE');

    const schemaJson = generateSchemaJson({
      slug: intelligence.slug,
      title: intelligence.title,
      description: intelligence.ai_summary.substring(0, 160),
      thumbnailUrl: meta.thumbnailUrl,
      embedUrl: meta.embedUrl,
      externalUrl: input.externalUrl,
      transcript: input.transcript,
      geoTags,
      industry: input.industry,
      faqs: intelligence.faqs,
    });

    // ── STEP 5: DATABASE INSERT ──
    console.log('[publisher] Executing DB Insert:', {
      slug: intelligence.slug,
      isDraft,
      geminiSuccess: !isDraft,
      publishedState: !isDraft
    });

    const { data: caseStudy, error: dbError } = await supabaseAdmin
      .from('case_studies')
      .insert({
        slug: intelligence.slug,
        title: intelligence.title,
        client_name: input.clientName,
        platform,
        external_video_url: input.externalUrl,
        video_embed_url: meta.embedUrl,
        thumbnail_url: meta.thumbnailUrl,
        transcript: input.transcript,
        ai_summary: intelligence.ai_summary,
        cinematic_direction: intelligence.cinematic_direction,
        faqs: intelligence.faqs,
        workflows: intelligence.workflows,
        schema_json: schemaJson,
        social_posts: intelligence.social_posts,
        internal_links: intelligence.semantic_links,
        geo: input.geo,
        geo_tags: geoTags,
        industry: input.industry,
        published: !isDraft,
        published_at: new Date().toISOString(),
      })
      .select('id, slug')
      .single();

    if (dbError) {
      console.error('[publisher] Database insert failed:', dbError.message);
      throw new Error(`Database error: ${dbError.message}`);
    }
    
    console.log('[publisher] DB Insert successful:', caseStudy);

    // ── STEP 6: VECTOR EMBEDDING (COPILOT MEMORY UPDATE) ──
    try {
      await generateAndStoreEmbedding({
        title: intelligence.title,
        geo: input.geo,
        industry: input.industry,
        clientName: input.clientName,
        aiSummary: intelligence.ai_summary,
        workflows: intelligence.workflows,
        transcript: input.transcript,
        slug: intelligence.slug,
      });
    } catch (vectorErr: any) {
      // Non-blocking: log but don't fail the publish
      console.error('[publisher] Vector embedding failed (non-blocking):', vectorErr.message);
    }

    // ── STEP 7: CACHE REVALIDATION ──
    revalidatePath('/case-studies');
    revalidatePath(`/case-studies/${intelligence.slug}`);
    revalidatePath('/copilot');

    return {
      success: true,
      slug: intelligence.slug,
      isDraft,
      title: intelligence.title,
      aiSummary: intelligence.ai_summary,
      faqs: intelligence.faqs,
      socialPosts: intelligence.social_posts,
      workflows: intelligence.workflows,
      semanticLinks: intelligence.semantic_links,
      geo: input.geo,
      industry: input.industry,
    };

  } catch (error: any) {
    console.error("[publisher] Intelligence Publisher Error:", error);

    if (error instanceof z.ZodError) {
      return { success: false, error: `Validation failed: ${error.issues.map(e => e.message).join(', ')}` };
    }

    return { success: false, error: error.message || 'Unknown error' };
  }
}
