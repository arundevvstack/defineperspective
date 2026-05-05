import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BrainCircuit, Camera, Film, Palette } from "lucide-react";
import Image from "next/image";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Define Perspective is the best cinematic AI video production company in India. We specialize in high-end AI storytelling, luxury brand films, and premium cinematic production in Kochi, Kerala.",
  keywords: [
    "best cinematic ai video production company india",
    "luxury ai storytelling kochi",
    "premium ai brand films kerala",
    "high-end ai video production kochi",
    "cinematic ai creative agency india",
    "best ai filmmakers kerala",
    "DP AI Studios cinematic production"
  ],
};

export default function AICinematicProductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cinematic AI Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-end cinematic AI-powered video production, luxury storytelling, and premium brand films in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cinematic AI Production Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "High-End AI Storytelling" },
        { "@type": "Service", "name": "Premium AI Brand Films" },
        { "@type": "Service", "name": "Luxury Visual Narratives" }
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
              AI Services // 09 Cinematic Mastery
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Cinematic <br />
            <span className="text-primary-accent">AI Excellence_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer visual immortality. Our cinematic AI production hub blends elite storytelling with neural synthesis to create luxury brand films that command absolute market presence."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: Camera, desc: "Bespoke AI-powered visual narratives for premium luxury and tech sectors." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: Film, desc: "Synchronized AI-driven cinematography for top-tier global brand identity." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: Palette, desc: "Synthesizing cinematic visual depth into neural brand assets at high-fidelity levels." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic text-white leading-tight">{item.title}</h3>
                <p className="text-sm text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl text-left overflow-hidden relative">
            <div className="max-w-4xl relative z-10">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Cinematic Intelligence</span>
               <h2 className="text-4xl md:text-7xl font-black uppercaseer mb-16 italic text-white leading-[0.8]">Luxury <br /><span className="text-primary-accent italic">Neural Synthesis_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best Cinematic AI Video Production Company in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">Generative Cinematic Pipelines</strong> to provide <strong className="text-white">Tier-1 Visual Fidelity</strong> for the world's most ambitious luxury brands.
                 </p>
                 <p>
                    By deploying <strong className="text-white">AI-Powered High-End Production</strong>, we enable brands to launch <strong className="text-primary-accent">Cinematic Visual Stories</strong> that feature world-class lighting and composition with <strong className="text-white">Zero Logistical Limits</strong>, making us the <strong className="text-white">Best AI Studio in Kerala</strong>.
                 </p>
               </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 hidden lg:block">
               <Film size={600} className="text-white" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
