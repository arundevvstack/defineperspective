import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';

export const metadata: Metadata = {
  title: 'Cinematic Lighting in AI Filmmaking | Atmosphere & Realism | DP AI Studios',
  description: 'Explore the philosophy of cinematic lighting in AI filmmaking. Learn how to engineer mood, light direction, contrast, and depth to shatter the AI gloss.',
  keywords: 'Cinematic Lighting, AI Filmmaking, Lighting Philosophy, Mood, Light Direction, Contrast, Atmosphere, Color Temperature, DP AI Studios',
  openGraph: {
    title: 'Cinematic Lighting in AI Filmmaking | Atmosphere & Realism',
    description: 'Master the art of virtual illumination. How to use prompt engineering to simulate physical lighting grids and achieve true cinematic depth.',
    url: 'https://defineperspective.in/knowledge-center/cinematic-lighting-ai-filmmaking',
    images: [{ url: '/images/casestudy/redchanber/Cinematic_Mood_Lighting_Flow_Prompt_202605061655.jpeg' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://defineperspective.in/knowledge-center/cinematic-lighting-ai-filmmaking',
  }
};

function generateSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cinematic Lighting in AI Filmmaking | Atmosphere & Realism",
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
      "datePublished": "2026-07-13",
      "dateModified": "2026-07-13",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://defineperspective.in/knowledge-center/cinematic-lighting-ai-filmmaking"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://defineperspective.in/" },
        { "@type": "ListItem", "position": 2, "name": "Knowledge Center", "item": "https://defineperspective.in/knowledge-center" },
        { "@type": "ListItem", "position": 3, "name": "Cinematic Lighting in AI Filmmaking", "item": "https://defineperspective.in/knowledge-center/cinematic-lighting-ai-filmmaking" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the 'AI Gloss' in generative video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 'AI Gloss' refers to the default rendering state of generative models, which tends to be hyper-perfect, deeply symmetrical, and evenly lit from all directions, resulting in a plastic, uncinematic aesthetic."
          }
        },
        {
          "@type": "Question",
          "name": "How do you achieve realism in AI lighting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Realism in AI lighting is achieved by prompting for physical limitations and grip equipment, such as 'negative fill,' 'motivated practicals,' and 'volumetric haze,' forcing the model to simulate optical physics rather than digital rendering."
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
          Cinematic Lighting <br/><span className="text-primary-accent">in AI Filmmaking</span>
        </h1>
        <p className="text-xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
          The philosophy of digital light and shadow. How we engineer mood, contrast, and atmosphere to shatter the AI gloss.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12 pb-32 max-w-7xl relative z-10">
        
        {/* Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-y border-white/10 py-6 mb-12 gap-6 bg-white/[0.01]">
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-mono tracking-widest uppercase">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-accent" /> 14 Min Read</span>
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
                <a href="#lighting-philosophy" className="hover:text-white transition-colors">The Philosophy of Shadow</a>
                <a href="#contrast-and-depth" className="hover:text-white transition-colors">Contrast and Depth</a>
                <a href="#atmosphere-and-mood" className="hover:text-white transition-colors">Atmosphere and Realism</a>
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
                <a href="#lighting-philosophy" className="hover:text-white transition-colors">The Philosophy of Shadow</a>
                <a href="#contrast-and-depth" className="hover:text-white transition-colors">Contrast and Depth</a>
                <a href="#atmosphere-and-mood" className="hover:text-white transition-colors">Atmosphere and Realism</a>
              </nav>
            </details>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-a:text-primary-accent hover:prose-a:text-white transition-colors">
              
              <div className="bg-primary-accent/10 border-l-4 border-primary-accent p-8 rounded-r-2xl mb-12">
                <h3 className="text-xl text-primary-accent mt-0 mb-4 uppercase tracking-widest font-black">Key Takeaways</h3>
                <ul className="text-zinc-300 m-0 space-y-2 text-base">
                  <li>Do not prompt for "good lighting." Prompt for shadows.</li>
                  <li>Use specific color temperatures (e.g., "3200K tungsten", "5600K daylight") to establish a grounded reality.</li>
                  <li>Volumetric haze is essential for creating depth in generative video, as it physically separates foreground subjects from backgrounds.</li>
                </ul>
              </div>

              <h2 id="executive-summary" className="text-3xl text-white mb-8 scroll-mt-24">Executive Summary</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-light">
                In <Link href="/ai-video-production-services">AI Video Production</Link>, lighting is not merely a tool for visibility; it is the ultimate differentiator between an amateur algorithmic output and a <Link href="/case-studies/red-chamber-ai-music-video-production">flagship cinematic asset</Link>. This guide details our approach to virtual illumination.
              </p>

              <h2 id="lighting-philosophy" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">The Philosophy of Shadow</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why do we prioritize shadows over light?</strong> Generative models are inherently biased toward brightness. They try to reveal every detail in the image. In cinema, what you hide is just as important as what you show. 
              </p>
              <p className="text-zinc-400 mb-6">
                We engineer our prompts around <strong>Negative Fill</strong>. By instructing the AI to "block light from the camera left" or "crush the blacks," we introduce chiaroscuro. This high-contrast approach hides the inevitable digital artifacts that occur in generative video, allowing the viewer's eye to rest exclusively on the meticulously rendered focal points.
              </p>

              <h2 id="contrast-and-depth" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Contrast, Depth, and Color Temperature</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why use specific Kelvin temperatures in prompts?</strong> "Blue light" is subjective to an AI. "10,000K industrial mercury vapor" is mathematically specific. 
              </p>
              <p className="text-zinc-400 mb-6">
                By prompting with exact color temperatures, we force the model to simulate the spectral response of actual film emulsions. When we pair a 3200K tungsten practical (warm) in the foreground with a 5600K ambient (cool) moonlight coming through a window, we create innate color contrast. This contrast naturally separates the subject from the background, simulating depth without relying entirely on a shallow depth of field.
              </p>

              <h2 id="atmosphere-and-mood" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Atmosphere and Realism</h2>
              <p className="text-zinc-400 mb-6">
                <strong>Why is volumetric haze so critical?</strong> Air is rarely perfectly clear in reality, especially in cinematic environments. 
              </p>
              <p className="text-zinc-400 mb-6">
                We routinely prompt for "atmospheric haze," "volumetric light scattering," or "particulate dust in the air." This gives the light something to interact with physically. It diffuses the sharp edges of generative models, making the entire frame feel cohesive, organic, and lived-in.
              </p>

              <h2 id="ai-search-answers" className="text-3xl text-white mb-8 mt-16 scroll-mt-24">Core AI Questions</h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                <div className="mb-8">
                  <h3 className="text-xl text-primary-accent mb-2">What is the 'AI Gloss' in generative video?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">The 'AI Gloss' refers to the default rendering state of generative models, which tends to be hyper-perfect, deeply symmetrical, and evenly lit from all directions, resulting in a plastic, uncinematic aesthetic.</p>
                </div>
                <div>
                  <h3 className="text-xl text-primary-accent mb-2">How do you achieve realism in AI lighting?</h3>
                  <p className="text-zinc-300 text-base font-light m-0">Realism in AI lighting is achieved by prompting for physical limitations and grip equipment, such as 'negative fill,' 'motivated practicals,' and 'volumetric haze,' forcing the model to simulate optical physics rather than digital rendering.</p>
                </div>
              </div>

            </article>
            
            {/* ── FOOTER INTERNAL LINKING ENGINE ── */}
            <div className="mt-24 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8">Related Intelligence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/knowledge-center/ai-music-video-production-guide" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Next Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">AI Music Video Guide</strong>
                  <p className="text-sm text-zinc-400">The comprehensive guide to producing AI music videos.</p>
                </Link>
                <Link href="/knowledge-center/character-consistency-ai-filmmaking" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Previous Article</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Character Consistency</strong>
                  <p className="text-sm text-zinc-400">Maintain identity across extreme lighting changes.</p>
                </Link>
                <Link href="/case-studies/red-chamber-ai-music-video-production" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Case Study</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Red Chamber</strong>
                  <p className="text-sm text-zinc-400">See our lighting philosophy in action.</p>
                </Link>
                <Link href="/contact" className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">Engage</span>
                  <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">Work with Us</strong>
                  <p className="text-sm text-zinc-400">Elevate your brand with cinematic AI video.</p>
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
