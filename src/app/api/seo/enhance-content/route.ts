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

    const { title, content } = body;

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'Content string is required.' }, { status: 400 });
    }

    if (content.length > 20000) {
      return NextResponse.json({ error: 'Content exceeds maximum permitted length of 20,000 characters.' }, { status: 400 });
    }

    const cleanTitle = (typeof title === 'string' && title.trim().length > 0)
      ? title.trim().slice(0, 300)
      : 'Untitled Cinematic Strategy';

    const cleanContent = content.trim();

    // 4. Neural Strategist Prompt Logic (Simulated)
    const baseTitle = cleanTitle.split('|')[0].trim();
    const isKerala = cleanTitle.toLowerCase().includes('kerala');

    const enhancedContent = `
# ${cleanTitle}
## A Neural Production Manifesto by Define Perspective

${cleanContent.replace(/# .*/, '').trim()}

---

### The DP Cinematic Advantage
Our approach to **${baseTitle}** transcends traditional boundaries. By merging neural architectural synthesis with high-end cinematography, we create visual narratives that don't just inform—they captivate.

- **Neural Fidelity**: Every frame is synthesized using custom-trained diffusion models for maximum visual impact.
- **Topical Authority**: Data-driven storytelling ensures your brand leads the conversation in the ${isKerala ? 'Kerala' : 'Indian'} market.
- **Autonomous Velocity**: Scale your production without compromising the 'Define Perspective' signature aesthetic.

### Executive Summary
In an era of visual noise, we provide the signal. ${cleanTitle} is not just a service—it is a strategic asset for your brand's digital dominance.
    `.trim();

    return NextResponse.json({ 
      success: true, 
      enhancedContent 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
