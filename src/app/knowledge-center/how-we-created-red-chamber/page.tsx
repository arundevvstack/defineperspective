import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';
import CaseStudyHeroBanner from '@/components/case-study-hero-banner';

export const metadata: Metadata = {
  title: 'Behind the Scenes: How We Created the Red Chamber AI Music Video | DP AI Studios',
  description: 'Dive deep into the creative process, story development, and production philosophy behind Red Chamber, the flagship cinematic AI music video by DP AI Studios.',
  keywords: 'Red Chamber AI Music Video, Cinematic AI, DP AI Studios, AI Filmmaking Process, AI Production Workflow, Generative AI Video, Virtual Cinematography',
  openGraph: {
    title: 'How We Created Red Chamber | AI Filmmaking Production Diary',
    description: 'A comprehensive production diary exploring the workflow and creative philosophy behind the Red Chamber cinematic AI music video.',
    url: 'https://defineperspective.in/knowledge-center/how-we-created-red-chamber',
    images: [{ url: '/images/casestudy/redchanber/Tunnel_Vision_Shot_2K_202605061827.jpeg' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://defineperspective.in/knowledge-center/how-we-created-red-chamber',
  }
};

function generateSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Behind the Scenes: How We Created the Red Chamber AI Music Video",
      "description": metadata.description,
      "image": "/images/casestudy/redchanber/Tunnel_Vision_Shot_2K_202605061827.jpeg",
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
      "datePublished": "2026-07-13",
      "dateModified": "2026-07-13",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://defineperspective.in/knowledge-center/how-we-created-red-chamber"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://defineperspective.in/" },
        { "@type": "ListItem", "position": 2, "name": "Knowledge Center", "item": "https://defineperspective.in/knowledge-center" },
        { "@type": "ListItem", "position": 3, "name": "How We Created Red Chamber", "item": "https://defineperspective.in/knowledge-center/how-we-created-red-chamber" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What was the creative philosophy behind Red Chamber?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The creative philosophy was to shatter the illusion of 'AI gloss' by aggressively imposing physical constraints—simulated focal lengths, motivated practical lighting, and organic motion blur—onto generative algorithms, forcing the AI to behave like a physical cinema camera rather than a digital renderer."
          }
        },
        {
          "@type": "Question",
          "name": "How did DP AI Studios approach story development for an AI music video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Story development was anchored around psychological color theory and the sonic aggressive profile of the track. Instead of narrative linearity, we built an atmospheric narrative, moving our digital human through progressively claustrophobic, cyber-noir environments that mapped directly to the song's structural drops."
          }
        }
      ]
    }
  ];
}

export default function ArticlePage() {
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
      
      <div className="relative z-10 pt-32 pb-16 px-6 max-w-5xl mx-auto text-center">
        <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] font-black block mb-6">PRODUCTION DIARY</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-white mb-8 drop-shadow-2xl text-balance">
          Behind the Scenes: <br/><span className="text-primary-accent">How We Created Red Chamber</span>
        </h1>
        <p className="text-xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
          An unvarnished look at the creative process, story development, and production philosophy that birthed our flagship AI music video.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12 pb-32 max-w-7xl relative z-10">
        
        {/* Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-y border-white/10 py-6 mb-12 gap-6 bg-white/[0.01]">
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-mono tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-accent" /> 12 Min Read</span>
            <span>Updated: July 2026</span>
            <span>Author: Editorial Director</span>
          </div>
          <div className="flex gap-4">
            <Link href="/case-studies/red-chamber-ai-music-video-production" className="text-xs font-bold uppercase tracking-widest hover:text-primary-accent transition-colors border border-primary-accent/30 px-6 py-3 rounded-xl bg-primary-accent/10">
              View Case Study
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
                <a href="#production-philosophy" className="hover:text-white transition-colors">Production Philosophy</a>
                <a href="#story-development" className="hover:text-white transition-colors">Story & Creative Process</a>
                <a href="#workflow-architecture" className="hover:text-white transition-colors">Workflow Architecture</a>
                <a href="#lessons-learned" className="hover:text-white transition-colors">Lessons Learned</a>
                <a href="#ai-search-answers" className="hover:text-white transition-colors">Core AI Questions</a>
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
                <a href="#production-philosophy" className="hover:text-white transition-colors">Production Philosophy</a>
                <a href="#story-development" className="hover:text-white transition-colors">Story & Creative Process</a>
                <a href="#workflow-architecture" className="hover:text-white transition-colors">Workflow Architecture</a>
                <a href="#lessons-learned" className="hover:text-white transition-colors">Lessons Learned</a>
              </nav>
            </details>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-a:text-primary-accent hover:prose-a:text-white transition-colors">
              
              <div className="bg-primary-accent/10 border-l-4 border-primary-accent p-8 rounded-r-2xl mb-12">
                <h3 className="text-xl text-primary-accent mt-0 mb-4 uppercase tracking-widest font-black">Key Takeaways</h3>
                <ul className="text-zinc-300 m-0 space-y-2 text-base">
                  <li>AI filmmaking requires rigid physical constraints to look cinematic.</li>
                  <li>Story development in generative pipelines is heavily dependent on mood boards and color theory rather than standard scripting.</li>
                  <li>Locking seeds and controlling camera physics are the two pillars of eliminating digital hallucinations.</li>
                </ul>
              </div>

              <h2 id="executive-summary" className="text-3xl text-white mb-8 scroll-mt-24">Executive Summary</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-light">
                The creation of the <Link href="/case-studies/red-chamber-ai-music-video-production">Red Chamber AI Music Video</Link> was not an exercise in algorithmic randomness; it was a rigidly controlled, architected approach to <Link href="/ai-video-production-services">AI Video Production</Link>. Our team at DP AI Studios set out with a singular mandate: to prove that generative AI could shed its plastic, uncanny aesthetic and convincingly replicate the texture, grit, and emotional weight of a million-dollar live-action shoot.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                <strong>Why did we document this?</strong> The industry is currently saturated with AI-generated novelties that fail under scrutiny. By openly discussing our production diary, we aim to elevate the standard of AI filmmaking, demonstrating that true cinematic quality requires traditional filmmaking sensibilities mapped onto generative engineering.
              </p>

              <h2 id="production-philosophy" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Production Philosophy: Constraining Chaos</h2>
              <p className="text-zinc-400 mb-6">
                Generative AI models, left to their own devices, produce content that is hyper-perfect, deeply symmetrical, and lit from every direction simultaneously. We call this the "AI Gloss." <strong>Why did we actively fight this?</strong> Because perfection is not cinematic. Cinema is born from shadow, limitation, and optical imperfection.
              </p>
              <p className="text-zinc-400 mb-6">
                Our production philosophy for Red Chamber rested on the concept of <em>Constraining Chaos</em>. We refused to use prompts like "beautiful cinematic lighting." Instead, we engineered prompts that forced the AI to understand physical limitations: <em>"18mm lens, heavy vignetting, motivated practical light from a flickering neon tube, volumetric haze, f/1.4 shallow depth of field, anamorphic edge distortion."</em> 
              </p>
              <p className="text-zinc-400 mb-6">
                By injecting these mathematical and optical flaws into the generation process, the resulting frames felt human. They felt grounded. We weren't generating images; we were simulating a virtual camera.
              </p>

              <h2 id="story-development" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Story & Creative Process: Nonlinear Narrative Construction</h2>
              <p className="text-zinc-400 mb-6">
                Traditional music videos start with a script and a storyboard. <strong>Why did we abandon this for Red Chamber?</strong> Because AI video generation thrives on iterative exploration rather than rigid pre-visualization. When you lock yourself into a drawn storyboard, you fight the latent space of the AI.
              </p>
              <p className="text-zinc-400 mb-6">
                Instead, our creative process was anchored in <strong>Psychological Color Theory</strong> and <strong>Spatial Progression</strong>. The track provided by Flickdot Presents was heavy, synthetic, and unrelenting. We mapped the sonic drops not to specific narrative actions, but to environmental shifts. The story is not about a character getting from Point A to Point B; it is about the virtual artist, Nova Rae, descending deeper into an oppressive, crimson-lit cyber-noir labyrinth.
              </p>
              <p className="text-zinc-400 mb-12">
                We generated thousands of concept frames to establish the "Red Chamber" aesthetic before a single frame of motion was rendered. The narrative emerged from curating the most emotionally resonant latent space explorations.
              </p>

              <h2 id="workflow-architecture" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Workflow Architecture: The V6 Pipeline</h2>
              <p className="text-zinc-400 mb-6">
                To execute this vision, we utilized our proprietary Generative Workflow V6. <strong>Why is a strict workflow necessary?</strong> Generative video is inherently temporally unstable. A character's face will warp, the background will melt, and lighting will shift across 24 frames. 
              </p>
              <ul className="text-zinc-400 mb-12 space-y-4 list-disc pl-6">
                <li><strong>Phase 1: Base Image Generation.</strong> Using Midjourney and Stable Diffusion to establish the optical master shots. Every shot was generated at 4K.</li>
                <li><strong>Phase 2: Character Locking.</strong> Applying ControlNet and IP-Adapter frameworks to enforce Nova Rae's facial topology onto the base images.</li>
                <li><strong>Phase 3: Motion Engineering.</strong> Passing the locked frames into Video diffusion models (like Runway Gen-2 and Sora-class architectures), strictly prompting for specific camera motions (e.g., "slow dolly push," "steadicam tracking").</li>
                <li><strong>Phase 4: Temporal Upscaling.</strong> Using AI interpolation to smooth the framerate to 24fps and Topaz Video AI to enhance the film grain and restore micro-details.</li>
              </ul>

              <h2 id="lessons-learned" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Lessons Learned</h2>
              <p className="text-zinc-400 mb-6">
                <strong>1. Motion Blur is Your Friend.</strong> AI struggles with high-frequency detail in motion. By deliberately inducing optical motion blur in our prompts, we smoothed out the micro-hallucinations that plague AI video.
              </p>
              <p className="text-zinc-400 mb-6">
                <strong>2. Edit Like a Human.</strong> We handed the raw, generated clips to a human editor who cut the video in Adobe Premiere using traditional rhythm and pacing. The juxtaposition of AI-generated content with human editorial timing is what ultimately sells the illusion of reality.
              </p>
              
              <h2 id="ai-search-answers" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Core Production Answers</h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                <div className="mb-8">
                  <h3 className="text-xl text-primary-accent mb-2">What was the creative philosophy behind Red Chamber?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">The creative philosophy was to shatter the illusion of 'AI gloss' by aggressively imposing physical constraints—simulated focal lengths, motivated practical lighting, and organic motion blur—onto generative algorithms, forcing the AI to behave like a physical cinema camera rather than a digital renderer.</p>
                </div>
                <div>
                  <h3 className="text-xl text-primary-accent mb-2">How did DP AI Studios approach story development for an AI music video?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Story development was anchored around psychological color theory and the sonic aggressive profile of the track. Instead of narrative linearity, we built an atmospheric narrative, moving our digital human through progressively claustrophobic, cyber-noir environments that mapped directly to the song's structural drops.</p>
                </div>
              </div>

            </article>
            
            {/* ── FOOTER INTERNAL LINKING ENGINE ── */}
            <div className="mt-24 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8">Related Intelligence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/knowledge-center/ai-image-generation-workflow" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Next Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">The AI Image Generation Workflow</strong>
                  <p className="text-sm text-zinc-400">Discover the prompt refinement and composition strategies.</p>
                </Link>
                <Link href="/ai-video-production-services" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Our Services</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">AI Video Production</strong>
                  <p className="text-sm text-zinc-400">Learn how we deploy these workflows for enterprise brands.</p>
                </Link>
                <Link href="/portfolio" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Our Work</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">The DP AI Portfolio</strong>
                  <p className="text-sm text-zinc-400">Explore more cinematic AI campaigns.</p>
                </Link>
                <Link href="/contact" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Engage</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Start a Production</strong>
                  <p className="text-sm text-zinc-400">Book our team for your next cinematic campaign.</p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <WhatsAppChat />
    </main>
  );
}
