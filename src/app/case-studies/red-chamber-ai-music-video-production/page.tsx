import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';
import CaseStudyHeroBanner from '@/components/case-study-hero-banner';

const caseStudyMock = {
  id: 'red-chamber',
  slug: 'red-chamber-ai-music-video-production',
  title: 'RED CHAMBER',
  client_name: 'Flickdot Presents',
  industry: 'Entertainment & Music',
  industries: ['Entertainment', 'AI Music Video', 'Fashion'],
  geo: 'India',
  geo_targets: ['Global'],
  geo_tags: ['Global', 'India'],
  platform: 'YouTube',
  external_video_url: 'https://www.youtube.com/watch?v=L7aRxqziN8w',
  video_embed_url: 'https://www.youtube.com/embed/L7aRxqziN8w',
  thumbnail_url: '/images/casestudy/redchanber/Tunnel_Vision_Shot_2K_202605061827.jpeg',
  hero_image_url: '/images/casestudy/redchanber/Cinematic_Mood_Lighting_Flow_Prompt_202605061655.jpeg',
  youtube_url: 'https://www.youtube.com/watch?v=L7aRxqziN8w',
  ai_summary: 'Red Chamber is a flagship cinematic AI music video production featuring the virtual artist Nova Rae. Produced entirely using generative AI, it establishes a new benchmark for photorealistic virtual production.',
  published_at: '2026-05-15T10:00:00Z',
  created_at: '2026-05-15T10:00:00Z',
};

export const metadata: Metadata = {
  title: 'Red Chamber | Cinematic AI Music Video by DP AI Studios (Define Perspective)',
  description: 'Experience Red Chamber, a cinematic AI music video created by DP AI Studios (Define Perspective). This project showcases photorealistic AI filmmaking, cinematic storytelling, virtual cinematography, AI image generation, and premium visual production, demonstrating how generative AI can be used to create emotionally engaging, film-quality music videos.',
  keywords: 'AI Music Video, AI Music Video Production, AI Music Video India, Cinematic AI Music Video, Photorealistic AI Video, AI Filmmaking, AI Film Production, AI Cinematic Storytelling, Virtual Production, AI Virtual Artist, Digital Human, Generative AI Video, Luxury AI Film, AI Entertainment, DP AI Studios, Define Perspective',
  openGraph: {
    title: 'Red Chamber | Cinematic AI Music Video by DP AI Studios (Define Perspective)',
    description: 'Experience Red Chamber, a cinematic AI music video created by DP AI Studios (Define Perspective). This project showcases photorealistic AI filmmaking, cinematic storytelling, virtual cinematography, AI image generation, and premium visual production, demonstrating how generative AI can be used to create emotionally engaging, film-quality music videos.',
    url: 'https://defineperspective.in/case-studies/red-chamber-ai-music-video-production',
    images: [{ url: '/images/casestudy/redchanber/Tunnel_Vision_Shot_2K_202605061827.jpeg' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://defineperspective.in/case-studies/red-chamber-ai-music-video-production',
  }
};

// Generates Schema payload for advanced SEO / EEAT
function generateSchema() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Red Chamber | Cinematic AI Music Video by DP AI Studios (Define Perspective)",
    "description": metadata.description,
    "image": "/images/casestudy/redchanber/Cinematic_Mood_Lighting_Flow_Prompt_202605061655.jpeg",
    "author": {
      "@type": "Organization",
      "name": "DP AI Studios",
      "url": "https://defineperspective.in/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DP AI Studios",
      "logo": {
        "@type": "ImageObject",
        "url": "https://defineperspective.in/logo.png"
      }
    },
    "datePublished": "2026-05-15",
    "dateModified": "2026-07-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://defineperspective.in/case-studies/red-chamber-ai-music-video-production"
    }
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Red Chamber | Cinematic AI Music Video by DP AI Studios (Define Perspective)",
    "description": metadata.description,
    "thumbnailUrl": "https://defineperspective.in/images/casestudy/redchanber/Tunnel_Vision_Shot_2K_202605061827.jpeg",
    "uploadDate": "2026-05-15T08:00:00+08:00",
    "duration": "PT2M30S",
    "contentUrl": "https://www.youtube.com/watch?v=L7aRxqziN8w",
    "embedUrl": "https://www.youtube.com/embed/L7aRxqziN8w",
    "producer": {
      "@type": "Organization",
      "name": "DP AI Studios"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a cinematic AI music video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A cinematic AI music video is a musical short film produced entirely through generative artificial intelligence, utilizing prompt engineering, motion generation, and virtual cinematography to create photorealistic visuals without physical cameras or sets."
        }
      },
      {
        "@type": "Question",
        "name": "How was Red Chamber produced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Red Chamber was produced by DP AI Studios using an enterprise AI pipeline that includes character consistency workflows for the virtual artist Nova Rae, virtual lens simulation (12mm to 35mm), and precise lighting prompts mapped to traditional grip equipment techniques."
        }
      },
      {
        "@type": "Question",
        "name": "How is character consistency maintained in AI video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Character consistency in AI video is maintained through specialized face-locking algorithms, seed constraints, and multi-stage rendering pipelines that enforce geometric and textural continuity of the digital human across diverse lighting scenarios and camera angles."
        }
      }
    ]
  };

  return [articleSchema, videoSchema, faqSchema];
}

export default function RedChamberRefinedPage() {
  const schemas = generateSchema();

  return (
    <main className="min-h-screen bg-obsidian text-white pb-40 relative overflow-hidden font-sans selection:bg-primary-accent/30">
      <ScrollProgress />
      <GlassNavbar />
      
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        <CaseStudyHeroBanner caseStudy={caseStudyMock as any} />
      </div>

      <div id="overview" className="container mx-auto px-4 md:px-12 pt-16 pb-32 max-w-7xl relative z-10 scroll-mt-24">
        
        {/* Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-12 gap-6">
          <div className="flex items-center gap-6 text-sm text-zinc-400 font-mono tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-accent" /> 18 Min Read</span>
            <span>Updated: July 2026</span>
            <span>By: Editorial Team</span>
          </div>
          <div className="flex gap-4">
            <Link href="/portfolio" className="text-xs font-bold uppercase tracking-widest hover:text-primary-accent transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5">
              ← Back to Portfolio
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Sticky Desktop TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary-accent mb-6">Contents</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
                <a href="#executive-summary" className="hover:text-white transition-colors">Executive Summary</a>
                <a href="#production-specs" className="hover:text-white transition-colors">Production Specifications</a>
                <a href="#creative-direction" className="hover:text-white transition-colors">Creative Direction</a>
                <a href="#prompt-engineering" className="hover:text-white transition-colors">Prompt Engineering & Generation</a>
                <a href="#lighting-philosophy" className="hover:text-white transition-colors">Lighting Philosophy</a>
                <a href="#virtual-cinematography" className="hover:text-white transition-colors">Virtual Cinematography</a>
                <a href="#ai-search-answers" className="hover:text-white transition-colors">AI Search Answers</a>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="col-span-1 lg:col-span-9">
            
            {/* Mobile Collapsible TOC */}
            <details className="lg:hidden bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-12 cursor-pointer group">
              <summary className="text-sm font-black uppercase tracking-widest text-primary-accent outline-none flex items-center justify-between">
                Table of Contents
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-400 mt-6 pt-6 border-t border-white/5">
                <a href="#executive-summary" className="hover:text-white transition-colors">Executive Summary</a>
                <a href="#production-specs" className="hover:text-white transition-colors">Production Specifications</a>
                <a href="#creative-direction" className="hover:text-white transition-colors">Creative Direction</a>
                <a href="#prompt-engineering" className="hover:text-white transition-colors">Prompt Engineering & Generation</a>
                <a href="#lighting-philosophy" className="hover:text-white transition-colors">Lighting Philosophy</a>
                <a href="#virtual-cinematography" className="hover:text-white transition-colors">Virtual Cinematography</a>
              </nav>
            </details>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-a:text-primary-accent hover:prose-a:text-white transition-colors">
              
              <h2 id="executive-summary" className="text-3xl md:text-5xl text-white mb-8 scroll-mt-24">Executive Summary</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-light">
                Red Chamber represents a quantum leap in generative cinematic storytelling. Conceived and produced by DP AI Studios, this project demonstrates the absolute pinnacle of <Link href="/ai-video-production-services">AI Video Production</Link> in India. By leveraging advanced generative workflows, we bypassed traditional physical constraints to deliver a highly stylized, photorealistic visual experience centered around our virtual artist, Nova Rae.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                <strong>Why was this project initiated?</strong> The entertainment and luxury fashion industries require visually striking assets at an unprecedented velocity. Traditional pipelines are hindered by location constraints, massive crew logistics, and inflexible shooting schedules. Red Chamber was engineered to prove that a completely synthetic pipeline could yield broadcast-quality, emotionally resonant cinematic results faster and with absolute creative control over the mise-en-scène.
              </p>

              <h2 id="production-specs" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Production Specifications</h2>
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-16 grid grid-cols-2 md:grid-cols-5 gap-8">
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Project Type</span><strong className="text-sm">AI Music Video</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Genre</span><strong className="text-sm">Cyber Noir / Luxury</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Duration</span><strong className="text-sm">02:30</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Resolution</span><strong className="text-sm">4K HDR (16:9)</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Pipeline</span><strong className="text-sm">Generative Workflow V6</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Digital Human</span><strong className="text-sm">Nova Rae (V2)</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Target Audience</span><strong className="text-sm">Global Entertainment</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Primary Asset</span><strong className="text-sm">YouTube & TVC</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">Search</span><strong className="text-sm">High-Performing SEO</strong></div>
                <div><span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2">AI Search</span><strong className="text-sm">AEO Architecture</strong></div>
              </div>

              <h2 id="creative-direction" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Creative Direction & Visual Language</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why Cyber Noir?</strong> The sonic profile of Red Chamber is dense, aggressive, and highly synthetic, necessitating a visual language that matches this intensity. We chose a neo-noir aesthetic punctuated by hyper-saturated neon because it maximizes the dramatic contrast (chiaroscuro) that AI models render exceptionally well, hiding digital artifacts within deep blacks while drawing the viewer’s eye via extreme highlights.
              </p>
              
              <figure className="my-12">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video bg-neutral-900 group">
                  <Image src="/images/casestudy/redchanber/Cinematic_Mood_Lighting_Flow_Prompt_202605061655.jpeg" alt="Cinematic Mood Lighting study for Red Chamber showcasing neo-noir aesthetics" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest border-l-2 border-primary-accent pl-4">
                  <strong>Stage 1: Concept Development.</strong> Establishing the foundational chiaroscuro lighting profile. The deep crimson hues were chosen to psychologically ground the aggressive track.
                </figcaption>
              </figure>

              <h2 id="prompt-engineering" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Prompt Engineering & Consistency Workflow</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why prompt evolution was necessary:</strong> Initial text-to-video outputs are inherently chaotic, hallucinating geometric anomalies over time. To solve this, our prompt engineering methodology moved beyond descriptive language (e.g., "a woman singing") into deterministic optical mathematics. We fed the models specific focal lengths, emulsion types, and grip equipment terminology.
              </p>
              <p className="text-zinc-400 mb-6">
                To maintain the facial topography of our digital human, Nova Rae, we deployed a multi-stage lock workflow. By locking the seed state and injecting control nets based on skeletal poses, we prevented facial degradation across the 2-minute timeline.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <figure className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <Image src="/images/casestudy/redchanber/repalce_her_with_him,_Cinematic_202605082058.jpeg" alt="Character consistency workflow replacing base model with Nova Rae" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <strong>Stage 2: Character Exploration.</strong> Iterative lock on facial topology under extreme lighting.
                  </figcaption>
                </figure>
                <figure className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <Image src="/images/casestudy/redchanber/add_his_shadow_partaly_on_202605082133.jpeg" alt="Character lighting integration showing motivated practicals" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <strong>Stage 3: Prompt Evolution.</strong> Introducing dynamic shadows to prove three-dimensional consistency.
                  </figcaption>
                </figure>
              </div>

              <h2 id="lighting-philosophy" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Lighting Philosophy</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why this lighting style was selected:</strong> Generative models often default to flat, mathematically even lighting ("AI gloss"). To shatter this signature look, our prompts simulated physical lighting grids. We requested <em>motivated practicals, volumetric haze scattering, and negative fill</em>. 
              </p>
              
              <figure className="my-12">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video bg-neutral-900 group">
                  <Image src="/images/casestudy/redchanber/extreme_wide_shot_12_mm_202605081953.jpeg" alt="Extreme Wide Shot 12mm demonstrating volumetric haze" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest border-l-2 border-primary-accent pl-4">
                  <strong>Stage 5: Lighting Studies.</strong> A 12mm simulated ultra-wide lens. Notice how the volumetric lighting behaves physically, interacting with the architectural boundaries of the Red Chamber.
                </figcaption>
              </figure>

              <h2 id="virtual-cinematography" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Virtual Cinematography</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why specific cinematic choices improved storytelling:</strong> A music video requires kinetic energy. Instead of arbitrary motion, we engineered virtual camera movements that mimic massive technocranes or intimate steadicam rigs. 
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                <figure className="group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <Image src="/images/casestudy/redchanber/Steadicam_Shot,_top_shot_2K_202605061827.jpeg" alt="Steadicam Top Shot Simulation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <strong>Stage 6: Motion Development (Steadicam)</strong>
                  </figcaption>
                </figure>
                <figure className="group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <Image src="/images/casestudy/redchanber/Tunnel_Vision_Shot_2K_202605061827.jpeg" alt="Tunnel Vision Shot" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <strong>Stage 7: Composition (Tunnel Vision)</strong>
                  </figcaption>
                </figure>
                <figure className="group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <Image src="/images/casestudy/redchanber/top_aangle,_Noir_Lighting_Shot,_202605061948.jpeg" alt="Noir Lighting Shot" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <strong>Stage 8: Final Frames (Top Angle Noir)</strong>
                  </figcaption>
                </figure>
              </div>

              <h2 id="ai-search-answers" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Red Chamber Core Production Answers</h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                <div className="mb-8">
                  <h3 className="text-xl text-primary-accent mb-2">What is a cinematic AI music video?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">A cinematic AI music video is a visual asset created entirely through generative artificial intelligence. It utilizes prompt engineering, virtual cinematography, and digital human generation to replicate the fidelity of traditional live-action productions without the logistical overhead of physical shoots.</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl text-primary-accent mb-2">How was Red Chamber produced?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Red Chamber was produced by DP AI Studios using a proprietary V6 Generative Workflow. The pipeline involves mathematical prompt construction for lighting (simulating grip equipment), seed locking for maintaining the consistency of the virtual artist Nova Rae, and traditional post-production editing and grading.</p>
                </div>
                <div>
                  <h3 className="text-xl text-primary-accent mb-2">How is character consistency maintained in AI video?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Consistency is achieved through multi-stage seed locking, structural control nets based on skeletal poses, and iterative frame-by-frame enhancement. This ensures the digital human’s facial topology and textures remain stable regardless of aggressive virtual camera movements or extreme lighting shifts.</p>
                </div>
              </div>

              <div className="mt-24 p-12 bg-obsidian border-2 border-primary-accent/30 rounded-[3rem] text-center shadow-[0_0_50px_rgba(220,38,38,0.05)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary-accent/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-6">Explore the Final Asset</h3>
                  <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Witness the convergence of code and cinema. Watch Red Chamber on YouTube to see our generative AI pipeline in motion.
                  </p>
                  <Link href="https://www.youtube.com/watch?v=L7aRxqziN8w" target="_blank" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-zinc-200 transition-all shadow-xl">
                    Play Full Video
                  </Link>
                </div>
              </div>

            </article>
          </div>
        </div>
      </div>
      
      <WhatsAppChat />
    </main>
  );
}
