import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BrainCircuit, Film, Clapperboard, Music2, BookOpen } from "lucide-react";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Top AI Film Production Studio India | Music Videos & Narrative Content | Define Perspective",
  description: "Define Perspective is the top AI film and narrative production studio in India. We specialize in AI short films, music videos, and narrative AI content in Kochi, Kerala.",
  keywords: [
    "top ai film production studio india",
    "ai short film production kochi",
    "ai music video production kerala",
    "narrative ai content creators india",
    "best ai filmmakers kochi",
    "ai film studio kerala",
    "DP AI Studios film production"
  ],
};

export default function AIFilmProductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Film & Narrative Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-fidelity AI-powered film production, music videos, and cinematic narrative content in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Film Production Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Short Films" },
        { "@type": "Service", "name": "AI Music Videos" },
        { "@type": "Service", "name": "Narrative AI Content" }
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
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              AI Services // 10 Narrative Studio
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] italic">
            AI Film <br />
            <span className="text-primary-accent">Narratives_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer future cinema. Our AI-powered film studio delivers photorealistic short films and music videos that push the boundaries of neural storytelling and narrative aesthetics."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Short Films", icon: Film, desc: "Bespoke AI-generated narrative short films with cinematic world-building." },
             { title: "Music Videos", icon: Music2, desc: "Synchronized AI-driven music videos for the next generation of global artists." },
             { title: "Narrative", icon: BookOpen, desc: "Synthesizing recursive narrative structures into AI video content at high-fidelity levels." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic text-white leading-tight">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl text-left overflow-hidden relative">
            <div className="max-w-4xl relative z-10">
               <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent mb-8 block font-black">Film Intelligence</span>
               <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-16 italic text-white leading-[0.8]">Neural <br /><span className="text-primary-accent italic">Storytelling_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-500 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Top AI Film Production Studio in India</strong>. Our <strong className="text-white">Kochi</strong> and <strong className="text-white">Trivandrum</strong> based studio specializes in <strong className="text-primary-accent">AI-Driven Narrative Content</strong> and <strong className="text-white">Music Videos</strong> for global distribution.
                 </p>
                 <p>
                    By deploying <strong className="text-white">Neural Film Pipelines</strong>, we enable creators to launch <strong className="text-primary-accent">Feature-Length Aesthetics</strong> in short-form narratives, making us the <strong className="text-white">Best AI Cinema Studio in Kerala</strong>.
                 </p>
               </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 hidden lg:block">
               <Clapperboard size={600} className="text-white" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
