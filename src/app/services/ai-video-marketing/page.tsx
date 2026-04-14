import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BrainCircuit, BarChart3, Rocket, Map } from "lucide-react";
import Image from "next/image";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Video Marketing Strategy Agency | Video Funnel Marketing India | Define Perspective",
  description: "Define Perspective is the best AI video marketing and strategy agency in India. We specialize in AI-driven campaign strategy, funnel video planning, and distribution in Kochi, Kerala.",
  keywords: [
    "best ai video marketing strategy agency india",
    "ai video funnel marketing Kochi",
    "ai distribution planning kerala",
    "video marketing campaign strategy india",
    "best ai video consultants kochi",
    "ai video strategy kerala",
    "DP AI Studios video marketing"
  ],
};

export default function AIVideoMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Marketing & Strategy",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-fidelity AI-powered video marketing strategy, distribution planning, and funnel design in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Video Marketing Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Campaign Strategy" },
        { "@type": "Service", "name": "AI Video Funnels" },
        { "@type": "Service", "name": "Distribution Planning" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              AI Services // 08 Marketing & Strategy
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Visual Funnel <br />
            <span className="text-primary-accent">Strategy_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer video impact. Our AI-powered strategy hub delivers data-driven visual funnels and distribution roadmaps that ensure your brand's video content translates into measurable market dominance."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Campaign Strategy", icon: Rocket, desc: "Bespoke AI-driven visual campaign roadmaps for high-growth ventures." },
             { title: "Funnel Videos", icon: BarChart3, desc: "Synchronized AI-powered video systems specifically designed for each stage of the buyer journey." },
             { title: "Distribution", icon: Map, desc: "Synthesizing cinematic distribution plans to ensure maximum reach across global digital nodes." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic text-white leading-tight">{item.title}</h3>
                <p className="text-sm text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 grid md:grid-cols-2 gap-24 items-center text-left">
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl group">
               <Image 
                 src="/images/blog/ai-video-companies-india-2026.png"
                 alt="Best AI Video Marketing Strategy Agency Kochi India"
                 fill
                 className="object-cover transition-transform group-hover:scale-105 duration-1000"
               />
               <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
            </div>
            <div className="space-y-12">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Marketing Intelligence</span>
               <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-12 italic text-white leading-[0.9]">Data-Driven <br /><span className="text-primary-accent italic font-black">Visual Funnels_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best AI Video Marketing Strategy Agency in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">Neural Strategy Engines</strong> to provide <strong className="text-white">Tier-1 Market Distribution</strong> for global brands and local challengers in <strong className="text-white">Kerala</strong>.
                 </p>
                 <p>
                    By deploying <strong className="text-white">AI-Powered Funnel Planning</strong>, we enable brands to launch <strong className="text-primary-accent">Synchronized Video Campaigns</strong> that feature measurable ROI and localized distribution with <strong className="text-white">Zero Creative Guesswork</strong>.
                 </p>
               </div>
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
