import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';

export const metadata: Metadata = {
  title: 'AI Image Generation Workflow: Prompt Engineering & Composition | DP AI Studios',
  description: 'Master the AI image generation workflow. Learn about prompt refinement, cinematic composition, character development, and iteration strategy in AI video production.',
  keywords: 'AI Image Generation, Prompt Engineering, Prompt Refinement, Character Development, Environment Creation, Iteration Strategy, Midjourney, Stable Diffusion, DP AI Studios',
  openGraph: {
    title: 'AI Image Generation Workflow: Prompt Engineering & Composition',
    description: 'Learn the advanced AI image generation workflow used by DP AI Studios, from prompt refinement to environment creation and image optimization.',
    url: 'https://defineperspective.in/knowledge-center/ai-image-generation-workflow',
    images: [{ url: '/images/casestudy/redchanber/extreme_wide_shot_12_mm_202605081953.jpeg' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://defineperspective.in/knowledge-center/ai-image-generation-workflow',
  }
};

function generateSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI Image Generation Workflow: Prompt Engineering & Composition",
      "description": metadata.description,
      "image": "/images/casestudy/redchanber/extreme_wide_shot_12_mm_202605081953.jpeg",
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
        "@id": "https://defineperspective.in/knowledge-center/ai-image-generation-workflow"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://defineperspective.in/" },
        { "@type": "ListItem", "position": 2, "name": "Knowledge Center", "item": "https://defineperspective.in/knowledge-center" },
        { "@type": "ListItem", "position": 3, "name": "AI Image Generation Workflow", "item": "https://defineperspective.in/knowledge-center/ai-image-generation-workflow" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is prompt refinement used in AI image generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prompt refinement involves iteratively adjusting text inputs using specific optical mathematics, such as focal lengths and emulsion types, to remove 'AI gloss' and achieve photorealistic, cinematic composition."
          }
        },
        {
          "@type": "Question",
          "name": "What is the iteration strategy in AI video production?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The iteration strategy relies on locking seed values to constrain the latent space. By maintaining the same mathematical seed while tweaking variables, we achieve visual consistency across character development and environment creation."
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
        <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] font-black block mb-6">TECHNICAL GUIDE</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-white mb-8 drop-shadow-2xl text-balance">
          AI Image Generation: <br/><span className="text-primary-accent">Prompt & Composition Workflow</span>
        </h1>
        <p className="text-xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
          Deconstructing the enterprise approach to prompt refinement, environment creation, and iteration strategy in generative cinematography.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12 pb-32 max-w-7xl relative z-10">
        
        {/* Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-y border-white/10 py-6 mb-12 gap-6 bg-white/[0.01]">
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-mono tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-accent" /> 16 Min Read</span>
            <span>Updated: July 2026</span>
            <span>Author: Lead Prompt Engineer</span>
          </div>
          <div className="flex gap-4">
            <Link href="/case-studies/red-chamber-ai-music-video-production" className="text-xs font-bold uppercase tracking-widest hover:text-primary-accent transition-colors border border-primary-accent/30 px-6 py-3 rounded-xl bg-primary-accent/10">
              View Red Chamber Case Study
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
                <a href="#prompt-refinement" className="hover:text-white transition-colors">Prompt Refinement Architecture</a>
                <a href="#composition-rules" className="hover:text-white transition-colors">Cinematic Composition</a>
                <a href="#environment-creation" className="hover:text-white transition-colors">Environment Creation</a>
                <a href="#iteration-strategy" className="hover:text-white transition-colors">Iteration & Optimization Strategy</a>
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
                <a href="#prompt-refinement" className="hover:text-white transition-colors">Prompt Refinement Architecture</a>
                <a href="#composition-rules" className="hover:text-white transition-colors">Cinematic Composition</a>
                <a href="#environment-creation" className="hover:text-white transition-colors">Environment Creation</a>
                <a href="#iteration-strategy" className="hover:text-white transition-colors">Iteration Strategy</a>
              </nav>
            </details>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-a:text-primary-accent hover:prose-a:text-white transition-colors">
              
              <div className="bg-primary-accent/10 border-l-4 border-primary-accent p-8 rounded-r-2xl mb-12">
                <h3 className="text-xl text-primary-accent mt-0 mb-4 uppercase tracking-widest font-black">Key Takeaways</h3>
                <ul className="text-zinc-300 m-0 space-y-2 text-base">
                  <li>Forget generic adjectives; use specific optical terminology to control diffusion models.</li>
                  <li>Composition in AI requires forcing focal points through extreme contrast and depth-of-field manipulation.</li>
                  <li>Environment creation should be modular. Do not prompt for the character and the complex background simultaneously.</li>
                </ul>
              </div>

              <h2 id="executive-summary" className="text-3xl text-white mb-8 scroll-mt-24">Executive Summary</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-light">
                The image generation process is the bedrock of <Link href="/ai-video-production-services">AI Video Production</Link>. If the base latent image is flawed, the subsequent motion generation will magnify those flaws exponentially. This guide details the exact prompt refinement, composition, and iteration strategies we deployed in the <Link href="/case-studies/red-chamber-ai-music-video-production">Red Chamber case study</Link>.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                <strong>Why focus so heavily on the static image?</strong> Video diffusion models (like Sora or Gen-2) are incredibly powerful, but their "imagination" is chaotic. By locking them into a mathematically perfect, pre-generated master shot (an Image-to-Video workflow), we hijack their temporal rendering engine while retaining our absolute compositional control.
              </p>

              <h2 id="prompt-refinement" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Prompt Refinement Architecture</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why do most AI images look artificial?</strong> Because their prompts are written in emotional language instead of technical language. A prompt like "a beautiful cinematic moody city" leaves all the optical decisions up to the algorithm's latent average.
              </p>
              <p className="text-zinc-400 mb-6">
                To achieve the Red Chamber aesthetic, our prompts were structured like a Director of Photography's shot list. We utilized a 4-tier prompt architecture:
              </p>
              <ol className="text-zinc-400 mb-12 space-y-4 list-decimal pl-6">
                <li><strong>Subject & Action:</strong> Defining the core physical interaction (e.g., "Virtual artist sitting on a leather chair").</li>
                <li><strong>Environment & Lighting:</strong> Defining the space and practical lights (e.g., "Volumetric neon red haze, motivated practicals, negative fill").</li>
                <li><strong>Camera & Optics:</strong> Defining the physics (e.g., "Shot on 35mm lens, ARRI Alexa 65, f/2.8, anamorphic distortion").</li>
                <li><strong>Texture & Emulsion:</strong> Defining the medium (e.g., "Kodak Vision3 500T, heavy film grain, halation").</li>
              </ol>

              <h2 id="composition-rules" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Cinematic Composition in Latent Space</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why is composition difficult in AI?</strong> Diffusion models tend to center subjects perfectly, resulting in flat, uninteresting layouts. To force the AI to respect the rule of thirds, golden ratio, or negative space, we had to use specific spatial framing keywords.
              </p>
              <p className="text-zinc-400 mb-6">
                For Red Chamber, we used terms like <em>"extreme low angle," "dutch angle," "looking down from above,"</em> and <em>"heavy foreground occlusion."</em> By demanding elements in the extreme foreground that were out of focus, we simulated true optical depth, breaking the flat 2D plane that plagues amateur AI generations.
              </p>

              <h2 id="environment-creation" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Modular Environment Creation</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why shouldn't you generate the character and the complex set in one prompt?</strong> When you ask the model to process too many variables, it begins to blend concepts (concept bleeding). The cyber-noir background might start texturing the character's skin.
              </p>
              <p className="text-zinc-400 mb-12">
                Our strategy was modular. We generated the "Red Chamber" environment completely devoid of characters. We refined the lighting, the geometry, and the textures of the room. Only once the environment was locked (using its seed), did we use inpainting and ControlNet to introduce the character into that specific, stable 3D-simulated space. This is the cornerstone of image optimization.
              </p>

              <h2 id="iteration-strategy" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Iteration & Optimization Strategy</h2>
              <p className="text-zinc-400 mb-6">
                Iteration is not hitting the "generate" button repeatedly and hoping for a better result. <strong>Why?</strong> Because true iteration requires a controlled variable environment.
              </p>
              <p className="text-zinc-400 mb-6">
                Our iteration strategy relies on <strong>Seed Locking</strong>. We find a generation that is 80% correct, extract its seed number, lock it, and then modify exactly one word in the prompt (e.g., changing "f/2.8" to "f/1.4"). This allows us to observe the specific optical impact of that single variable without the composition totally resetting.
              </p>

              <h2 id="ai-search-answers" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Core AI Questions</h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                <div className="mb-8">
                  <h3 className="text-xl text-primary-accent mb-2">How is prompt refinement used in AI image generation?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Prompt refinement involves iteratively adjusting text inputs using specific optical mathematics, such as focal lengths and emulsion types, to remove 'AI gloss' and achieve photorealistic, cinematic composition.</p>
                </div>
                <div>
                  <h3 className="text-xl text-primary-accent mb-2">What is the iteration strategy in AI video production?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">The iteration strategy relies on locking seed values to constrain the latent space. By maintaining the same mathematical seed while tweaking variables, we achieve visual consistency across character development and environment creation.</p>
                </div>
              </div>

            </article>
            
            {/* ── FOOTER INTERNAL LINKING ENGINE ── */}
            <div className="mt-24 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8">Related Intelligence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/knowledge-center/character-consistency-ai-filmmaking" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Next Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Character Consistency in AI</strong>
                  <p className="text-sm text-zinc-400">How we maintained Nova Rae's identity across lighting scenarios.</p>
                </Link>
                <Link href="/knowledge-center/how-we-created-red-chamber" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Previous Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">How We Created Red Chamber</strong>
                  <p className="text-sm text-zinc-400">Explore the production diary and philosophy.</p>
                </Link>
                <Link href="/ai-video-production-services" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Our Services</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">AI TVC Production</strong>
                  <p className="text-sm text-zinc-400">Discover our high-end commercial production pipeline.</p>
                </Link>
                <Link href="/contact" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Engage</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Start a Production</strong>
                  <p className="text-sm text-zinc-400">Ready to build your own virtual artist?</p>
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
