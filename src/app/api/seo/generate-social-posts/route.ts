import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, content, url } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 });
    }

    // Social Media Strategist Prompt Logic (Simulated)
    const linkedin = `
🚀 **Defining the Future of ${title.split('|')[0].trim()}**

Traditional production is evolving. At Define Perspective, we've operationalized a new neural pipeline that merges high-end cinematography with advanced AI synthesis.

Our latest deployment focuses on:
- Cinematic fidelity at scale.
- Neural velocity in post-production.
- Strategic authority for the ${title.includes('Kerala') ? 'Kerala' : 'Indian'} market.

Read the full strategy here: ${url || 'https://defineperspective.in/services'}

#AIVideo #ProductionFuture #DPStudio #CinematicAI #NeuralProduction
    `.trim();

    const twitter = `
Neural Production is here. 🧠🎬

We just launched our new dedicated node for ${title.split('|')[0].trim()}. 

High-fidelity AI synthesis meets traditional cinematic craft. 

Dive into the details: ${url || 'https://defineperspective.in/services'}

#DPStudio #AI #VideoProduction
    `.trim();

    const instagram = `
THE NEURAL ERA HAS ARRIVED. ⚡️

Defining a new perspective on ${title.split('|')[0].trim()}. 

We are merging the soul of human filmmaking with the speed of neural generation. 

🔗 Link in Bio to explore the full manifesto.

#AIVideo #Cinematic #DPStudio #NeuralArt #FutureOfFilm
    `.trim();

    return NextResponse.json({ 
      success: true, 
      posts: { linkedin, twitter, instagram }
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
