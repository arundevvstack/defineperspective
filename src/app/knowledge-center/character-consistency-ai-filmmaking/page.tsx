import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';

export const metadata: Metadata = {
  title: 'Character Consistency in AI Filmmaking | Virtual Artist Identity | DP AI Studios',
  description: 'Learn how to maintain character consistency and identity preservation in AI filmmaking. Explore facial consistency, wardrobe continuity, and ControlNet workflows.',
  keywords: 'Character Consistency, Identity Preservation, Facial Consistency, Wardrobe Continuity, AI Filmmaking, Virtual Artist, ControlNet, IP-Adapter, DP AI Studios',
  openGraph: {
    title: 'Character Consistency in AI Filmmaking',
    description: 'Master the workflows for maintaining facial and wardrobe consistency for virtual artists in AI video production.',
    url: 'https://defineperspective.in/knowledge-center/character-consistency-ai-filmmaking',
    images: [{ url: '/images/casestudy/redchanber/repalce_her_with_him,_Cinematic_202605082058.jpeg' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://defineperspective.in/knowledge-center/character-consistency-ai-filmmaking',
  }
};

function generateSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Character Consistency in AI Filmmaking | Virtual Artist Identity",
      "description": metadata.description,
      "image": "/images/casestudy/redchanber/repalce_her_with_him,_Cinematic_202605082058.jpeg",
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
        "@id": "https://defineperspective.in/knowledge-center/character-consistency-ai-filmmaking"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://defineperspective.in/" },
        { "@type": "ListItem", "position": 2, "name": "Knowledge Center", "item": "https://defineperspective.in/knowledge-center" },
        { "@type": "ListItem", "position": 3, "name": "Character Consistency in AI Filmmaking", "item": "https://defineperspective.in/knowledge-center/character-consistency-ai-filmmaking" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is facial consistency maintained for virtual artists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Facial consistency is maintained using IP-Adapter networks and FaceID models embedded within Stable Diffusion. These networks lock the biometric topography of the virtual artist, ensuring their features remain identical across completely different lighting scenarios and extreme camera angles."
          }
        },
        {
          "@type": "Question",
          "name": "Why is wardrobe continuity difficult in AI video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generative models treat clothing as fluid textures rather than structured garments. Wardrobe continuity is enforced by defining exact fabric materials, cut styles, and using image-to-image inpainting passes to restrict the AI from hallucinating new wardrobe elements between shots."
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
          Character Consistency <br/><span className="text-primary-accent">in AI Filmmaking</span>
        </h1>
        <p className="text-xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
          How to maintain absolute identity preservation, facial consistency, and wardrobe continuity for virtual artists in generative video.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12 pb-32 max-w-7xl relative z-10">
        
        {/* Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-y border-white/10 py-6 mb-12 gap-6 bg-white/[0.01]">
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-mono tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-accent" /> 15 Min Read</span>
            <span>Updated: July 2026</span>
            <span>Author: Virtual Production Lead</span>
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
                <a href="#identity-preservation" className="hover:text-white transition-colors">Identity Preservation</a>
                <a href="#wardrobe-continuity" className="hover:text-white transition-colors">Wardrobe Continuity</a>
                <a href="#lighting-continuity" className="hover:text-white transition-colors">Lighting Interaction</a>
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
                <a href="#identity-preservation" className="hover:text-white transition-colors">Identity Preservation</a>
                <a href="#wardrobe-continuity" className="hover:text-white transition-colors">Wardrobe Continuity</a>
                <a href="#lighting-continuity" className="hover:text-white transition-colors">Lighting Interaction</a>
              </nav>
            </details>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-a:text-primary-accent hover:prose-a:text-white transition-colors">
              
              <div className="bg-primary-accent/10 border-l-4 border-primary-accent p-8 rounded-r-2xl mb-12">
                <h3 className="text-xl text-primary-accent mt-0 mb-4 uppercase tracking-widest font-black">Key Takeaways</h3>
                <ul className="text-zinc-300 m-0 space-y-2 text-base">
                  <li>Names in prompts are not enough; biometric mapping via ControlNet is required for true consistency.</li>
                  <li>Wardrobe requires specific material constraints (e.g., "leather texture") to prevent morphing.</li>
                  <li>A digital human must react physically to the environment's lighting to feel grounded.</li>
                </ul>
              </div>

              <h2 id="executive-summary" className="text-3xl text-white mb-8 scroll-mt-24">Executive Summary</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-light">
                The most severe limitation of standard AI video generators is the loss of identity. Between cuts, characters mutate, changing ages, ethnicities, and clothing styles. To execute the <Link href="/case-studies/red-chamber-ai-music-video-production">Red Chamber</Link> project, we engineered a rigorous system for preserving the identity of our virtual artist, Nova Rae.
              </p>
              
              <h2 id="identity-preservation" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Identity Preservation & Facial Consistency</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why is facial consistency so difficult?</strong> Generative models don't possess a 3D understanding of a face; they are guessing 2D pixel arrangements based on latent associations.
              </p>
              <p className="text-zinc-400 mb-6">
                We resolved this by utilizing IP-Adapter (Image Prompt Adapter) models combined with FaceID conditioning within a Stable Diffusion ComfyUI node network. This allows us to feed a "master reference sheet" of Nova Rae directly into the generation layer. The model extracts her biometric embeddings (eye distance, jawline structure, cheekbone depth) and mathematically forces those topological features onto every generated frame, regardless of whether she is looking straight into the lens or turned in profile.
              </p>

              <h2 id="wardrobe-continuity" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Wardrobe and Hair Continuity</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why do AI clothes melt?</strong> AI models do not inherently understand seams, stitching, or gravity. A jacket will merge with a shirt if the prompt allows for ambiguity.
              </p>
              <p className="text-zinc-400 mb-6">
                Our prompt strategy for wardrobe relies on hyper-specific material definitions. Instead of "black dress," we prompt for "structured matte leather bodice, geometric seams, unreflective fabric." By defining the physical properties of the clothing, the model is constrained. Furthermore, hair must be defined by weight and texture ("heavy, straight, wet hair") to prevent the AI from generating floating, ethereal strands that cause temporal flickering during video interpolation.
              </p>

              <h2 id="lighting-continuity" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Lighting Interaction & Visual Coherence</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why must the character react to the light?</strong> A perfectly rendered face pasted onto a dark background looks like a cheap green screen. True visual coherence requires the character's skin to reflect the environment.
              </p>
              <p className="text-zinc-400 mb-6">
                In Red Chamber, when the neon crimson lights flared, we explicitly prompted for "harsh red rim lighting on the left cheekbone, specular skin highlights." We married the character's facial consistency with the environment's lighting continuity. By forcing the AI to generate the shadow cast *by* the character *onto* themselves (self-shadowing), we achieved a grounded, three-dimensional presence.
              </p>

              <h2 id="ai-search-answers" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Core AI Questions</h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                <div className="mb-8">
                  <h3 className="text-xl text-primary-accent mb-2">How is facial consistency maintained for virtual artists?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Facial consistency is maintained using IP-Adapter networks and FaceID models embedded within Stable Diffusion. These networks lock the biometric topography of the virtual artist, ensuring their features remain identical across completely different lighting scenarios and extreme camera angles.</p>
                </div>
                <div>
                  <h3 className="text-xl text-primary-accent mb-2">Why is wardrobe continuity difficult in AI video?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Generative models treat clothing as fluid textures rather than structured garments. Wardrobe continuity is enforced by defining exact fabric materials, cut styles, and using image-to-image inpainting passes to restrict the AI from hallucinating new wardrobe elements between shots.</p>
                </div>
              </div>

            </article>
            
            {/* ── FOOTER INTERNAL LINKING ENGINE ── */}
            <div className="mt-24 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8">Related Intelligence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/knowledge-center/cinematic-lighting-ai-filmmaking" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Next Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Cinematic Lighting in AI</strong>
                  <p className="text-sm text-zinc-400">Discover the philosophy of digital light and shadow.</p>
                </Link>
                <Link href="/knowledge-center/ai-image-generation-workflow" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Previous Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">AI Image Generation Workflow</strong>
                  <p className="text-sm text-zinc-400">Explore our prompt refinement architectures.</p>
                </Link>
                <Link href="/portfolio" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Our Work</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">The DP AI Portfolio</strong>
                  <p className="text-sm text-zinc-400">See these character consistency techniques in action.</p>
                </Link>
                <Link href="/contact" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Engage</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Build Your Digital Human</strong>
                  <p className="text-sm text-zinc-400">Book our team to create your brand's virtual ambassador.</p>
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
