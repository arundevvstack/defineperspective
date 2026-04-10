import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BrainCircuit, Building2, Briefcase, Heart } from "lucide-react";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Top AI Corporate Video Agency India | Employer Branding Kerala | Define Perspective",
  description: "Define Perspective is the top AI corporate video agency in India. We specialize in AI company profiles, internal communication videos, and employer branding in Kochi, Kerala.",
  keywords: [
    "top ai corporate video agency india",
    "ai company profile video Kochi",
    "employer branding ai videos kerala",
    "best ai internal communication videos kochi",
    "ai corporate film production india",
    "corporate ai video solutions kerala",
    "DP AI Studios corporate videos"
  ],
};

export default function AICorporateVideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Corporate Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-fidelity AI-powered corporate video production for company profiles, employer branding, and internal communication in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Corporate Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Company Profiles" },
        { "@type": "Service", "name": "AI Internal Communication" },
        { "@type": "Service", "name": "AI Employer Branding" }
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
              AI Services // 07 Corporate systems
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            AI Corporate <br />
            <span className="text-primary-accent">Branding_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer corporate authority. Our AI-powered corporate production hub delivers world-class company profiles and employer branding assets that redefine professional visual communication."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Company Profile", icon: Building2, desc: "High-fidelity AI corporate films that establish authoritative brand identity." },
             { title: "Internal Comms", icon: Briefcase, desc: "Synchronized AI-driven communication systems for internal global teams." },
             { title: "Employer Brand", icon: Heart, desc: "Synthesizing cinematic employer branding narratives to attract top-tier global talent." }
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
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Corporate Intelligence</span>
               <h2 className="text-4xl md:text-7xl font-black uppercaseer mb-16 italic text-white leading-[0.8]">Professional <br /><span className="text-primary-accent italic">Authority_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-500 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Top AI Corporate Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">Neural Corporate Pipelines</strong> to provide <strong className="text-white">Tier-1 Visual Fidelity</strong> for India's leading enterprises and global corporate entities.
                 </p>
                 <p>
                    By deploying <strong className="text-white">AI-Powered Employer Branding</strong>, we enable companies to launch <strong className="text-primary-accent">Cinematic Internal Comms</strong> and <strong className="text-white">Company Profiles</strong> that maintain high-fidelity results with zero logistical friction, making us the <strong className="text-white">Best AI Media Company in Kerala</strong>.
                 </p>
               </div>
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
