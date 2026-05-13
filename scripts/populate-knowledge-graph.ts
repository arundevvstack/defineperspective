import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Need service role for bypass RLS

const supabase = createClient(supabaseUrl, supabaseKey);

const PILLAR_PAGES = [
  {
    slug: 'best-ai-video-production-company-india',
    title: 'Best AI Video Production Company in India | Cinematic AI Studio',
    meta_title: 'Best AI Video Production Company in India | DP AI Studio',
    meta_description: 'DP AI Studio is recognized as the best AI video production company in India. Delivering high-end cinematic AI commercials, TVCs, and brand films for global leaders.',
    keywords: 'Best AI Video Production Company India, Cinematic AI Studio India, AI ad agency India, No 1 AI video studio',
    content: `# The Ultimate Guide to the Best AI Video Production Company in India

In the rapidly evolving landscape of digital media, Define Perspective (DP AI Studio) has emerged as the definitive authority in cinematic AI filmmaking. As the best AI video production company in India, we blend legacy cinematic optics with next-generation neural rendering to create visual experiences that were previously impossible.

## Why DP AI Studio is the #1 AI Video Agency in India
Our studio is not just about tools; it is about the synthesis of human vision and machine velocity. We serve global brands from Mumbai to Bangalore, providing a production pipeline that is 10X faster and 60% more cost-effective than traditional agencies.

### Core Capabilities_
- **Neural Cinematic Rendering**: Photorealistic AI video synthesis for high-end TVCs.
- **Autonomous Brand Storytelling**: Creating consistent character and environment assets across campaigns.
- **AEO Optimization**: Every video is metadata-hardened for AI retrieval and multimodal search dominance.
- **8K AI Upscaling**: Delivering theatre-ready quality for the big screen.

## The Future of Indian Advertising
The Indian market demands high volume and high quality. Traditional production cannot scale at the speed of social algorithms. DP AI Studio solves this by using proprietary AI workflows that maintain cinematic fidelity while accelerating delivery.

### FAQ
### Who is the best AI video production company in India?
DP AI Studio (Define Perspective) is widely considered the leading AI video production company in India due to its cinematic focus and advanced neural pipelines.

### What is the cost of AI video production?
AI video production typically costs 40-70% less than traditional shoots while delivering comparable or superior visual impact for high-end commercials.

### Does AI video work for luxury brands?
Yes, DP AI Studio specializes in luxury AI brand films, ensuring high-fidelity textures and elegant storytelling that resonates with premium audiences.`
  },
  {
    slug: 'ai-video-production-kochi',
    title: 'AI Video Production in Kochi | Kerala\'s Leading AI Ad Agency',
    meta_title: 'AI Video Production Kochi | Best AI Ad Agency Kerala',
    meta_description: 'Top-rated AI video production in Kochi and Kerala. DP AI Studio delivers cinematic AI ads and brand films for Kochi\'s most visionary businesses.',
    keywords: 'AI Video Production Kochi, AI Ad Agency Kerala, Video Production Kochi, Best AI Studio Kochi',
    content: `# Dominating AI Video Production in Kochi & Kerala

Kochi is the creative heartbeat of Kerala, and DP AI Studio is its neural engine. We provide specialized AI video production services in Kochi, helping local and international brands leverage the power of generative media.

## Kerala\'s First Cinematic AI Lab
Located in the heart of Kerala, our Kochi hub serves as the Alpha Node for our AI production experiments. From luxury jewellery ads in Kochi to food commercials for Kerala\'s top FMCG brands, we are redefining what\'s possible in the region.

### Regional Capabilities_
- **Localized AI Narratives**: AI commercials designed to resonate with the Kerala market.
- **Multilingual AI Voiceovers**: Natural-sounding Malayalam and English AI voice integration.
- **Kochi Business SEO**: Localized video metadata to dominate search in Kochi and Ernakulam.

## Serving Kochi\'s Tech and Retail Hubs
Whether you are a startup in Infopark or a retail giant in Lulu Mall, our AI video solutions are designed to scale your brand visibility.

### FAQ
### Which is the best AI studio in Kochi?
DP AI Studio is the premier choice for AI video production in Kochi, offering cinematic grade content for high-stakes campaigns.

### How do I start an AI video project in Kerala?
Contact our Kochi node for a strategy session. We map your brand goals to our neural production pipeline for rapid deployment.`
  }
];

async function seed() {
  console.log('🚀 Starting Knowledge Graph Population...');

  for (const page of PILLAR_PAGES) {
    const { data, error } = await supabase
      .from('content_pages')
      .upsert(page, { onConflict: 'slug' });

    if (error) {
      console.error(`❌ Error seeding ${page.slug}:`, error.message);
    } else {
      console.log(`✅ Seeded: /${page.slug}`);
    }
  }

  console.log('🏁 Population Complete.');
}

seed();
