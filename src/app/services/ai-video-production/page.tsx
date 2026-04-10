import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Cpu, Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Video, Clapperboard, MonitorPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "AI Video Production Studio Kochi | Best AI Video Creators India | Define Perspective",
  description: "Define Perspective is the best AI video production agency and Top AI video creators for brands in India. Premium AI brand films, commercial videos, and cinematic campaign production in Kochi, Kerala.",
  keywords: [
    "AI video production services India",
    "best ai video production agency kochi",
    "top ai video creators for brands kerala",
    "ai brand films india",
    "ai commercial video production kochi",
    "ai campaign videos india",
    "DP AI Studios video production"
  ],
};

export default function AIVideoProductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Production Services",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-end AI-powered video production for premium brand films, commercials, and advertising campaigns in India and Kerala.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Video Production Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Brand Films" },
        { "@type": "Service", "name": "AI Commercial Videos" },
        { "@type": "Service", "name": "AI Campaign Videos" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlassNavbar />
      
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              AI Services // 01 High-End Production
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            AI Video <br />
            <span className="text-primary-accent">Production_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer cinematic excellence. Our AI-driven video production hub creates high-fidelity brand films and commercial assets that dominate the modern visual landscape."
          </p>
        </header>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Brand Films", icon: Clapperboard, desc: "Bespoke AI-powered storytelling for premium luxury and tech brands." },
             { title: "Commercials", icon: Video, desc: "High-impact AI commercial video production for nationwide TV and digital release." },
             { title: "Campaigns", icon: MonitorPlay, desc: "Synchronized AI-driven campaign video systems for massive market penetration." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl text-left overflow-hidden relative">
           <div className="absolute top-0 right-0 p-20 opacity-5">
              <BrainCircuit size={400} />
           </div>
           <div className="max-w-4xl relative z-10">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Performance Audit</span>
              <h2 className="text-4xl md:text-7xl font-black uppercaseer mb-16 italic text-white leading-[0.8]">
                 Neural <br /><span className="text-primary-accent">Cinematography_</span>
              </h2>
              <div className="space-y-12 text-zinc-500 uppercase tracking-widest leading-loose text-sm italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> utilizes advanced <strong className="text-primary-accent">Generative Neural Networks</strong> to synthesize hyper-realistic commercial footage. Our proprietary pipeline in <strong className="text-white">Kochi</strong> and <strong className="text-white">Trivandrum</strong> allows us to deliver <strong className="text-primary-accent">Tier-1 Visual Fidelity</strong> at high-frequency velocities.
                 </p>
                 <p>
                    By integrating <strong className="text-white">AI-Powered Production Services</strong>, we enable brands to launch <strong className="text-primary-accent">Cinematic Brand Films</strong> without the logistical friction of traditional sets, making us the <strong className="text-white">Best AI Video Production Company in Kerala</strong>.
                 </p>
              </div>
           </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
