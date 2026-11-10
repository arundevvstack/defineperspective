import { NextResponse } from 'next/server';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const rateLimitResponse = await checkRateLimit(req);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) return auth.response;

    // 3. Strict Input Validation
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Body must be a valid JSON object' }, { status: 400 });
    }

    const { title, content, url } = body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json({ error: 'Title string is required.' }, { status: 400 });
    }

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'Content string is required.' }, { status: 400 });
    }

    if (content.length > 20000) {
      return NextResponse.json({ error: 'Content exceeds maximum permitted length of 20,000 characters.' }, { status: 400 });
    }

    const cleanTitle = title.trim().slice(0, 300);
    const cleanContent = content.trim();

    // Sanitize URL: only allow defineperspective.in domain or relative URLs
    let cleanUrl = 'https://defineperspective.in/services';
    if (typeof url === 'string' && url.trim().length > 0) {
      const candidateUrl = url.trim().slice(0, 500);
      try {
        if (candidateUrl.startsWith('/')) {
          cleanUrl = `https://defineperspective.in${candidateUrl}`;
        } else {
          const parsed = new URL(candidateUrl);
          if (parsed.hostname.endsWith('defineperspective.in') || parsed.hostname.endsWith('defineperspective.com')) {
            cleanUrl = candidateUrl;
          }
        }
      } catch {
        // Fall back to default
      }
    }

    const baseTitle = cleanTitle.split('|')[0].trim();
    const isKerala = cleanTitle.toLowerCase().includes('kerala');

    // 4. Social Media Strategist Prompt Logic (Simulated)
    const linkedin = `
🚀 **Defining the Future of ${baseTitle}**

Traditional production is evolving. At Define Perspective, we've operationalized a new neural pipeline that merges high-end cinematography with advanced AI synthesis.

Our latest deployment focuses on:
- Cinematic fidelity at scale.
- Neural velocity in post-production.
- Strategic authority for the ${isKerala ? 'Kerala' : 'Indian'} market.

Read the full strategy here: ${cleanUrl}

#AIVideo #ProductionFuture #DPStudio #CinematicAI #NeuralProduction
    `.trim();

    const twitter = `
Neural Production is here. 🧠🎬

We just launched our new dedicated node for ${baseTitle}. 

High-fidelity AI synthesis meets traditional cinematic craft. 

Dive into the details: ${cleanUrl}

#DPStudio #AI #VideoProduction
    `.trim();

    const instagram = `
THE NEURAL ERA HAS ARRIVED. ⚡️

Defining a new perspective on ${baseTitle}. 

We are merging the soul of human filmmaking with the speed of neural generation. 

🔗 Link in Bio to explore the full manifesto.

#AIVideo #Cinematic #DPStudio #NeuralArt #FutureOfFilm
    `.trim();

    return NextResponse.json({ 
      success: true, 
      posts: { linkedin, twitter, instagram }
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
