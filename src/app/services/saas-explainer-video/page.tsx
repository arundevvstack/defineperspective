import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Cpu, Monitor, Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Video, Clapperboard, MonitorPlay, MousePointer2, Smartphone, TrendingUp, LayoutGrid, LayoutList, MessageSquare, Presentation, Rocket, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Define Perspective is the best SaaS explainer video agency in India. We specialize in high-fidelity software explainers, product demos, and onboarding videos in Kochi, Kerala.",
  keywords: [
    "best saas explainer video agency india",
    "software product demos kochi",
    "saas walkthrough videos kerala",
    "onboarding video production india",
    "feature launch videos kochi",
    "tech video production agency kerala",
    "DP Industry Solutions saas tech"
  ],
};

export default function SaaSExplainerVideoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS & Tech Video Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-fidelity SaaS explainer videos, product demos, and feature launch narratives for tech companies in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SaaS & Tech Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "SaaS Explainer Videos" },
        { "@type": "Service", "name": "Product Demos" },
        { "@type": "Service", "name": "Onboarding Content" }
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
              Industry // 03 SaaS & Tech Excellence
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Software <br />
            <span className="text-primary-accent">Explainers_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer digital clarity. Our SaaS production hub delivers world-class explainers and product demographics that solve complex communication challenges for global tech giants."
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-40">
           {[
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: MessageSquare, desc: "Bespoke narratives that explain complex SaaS solutions instantly." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: Presentation, desc: "Feature-focused walkthroughs with world-class UI visual fidelity." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: UserPlus, desc: "Synchronized visual systems for seamless global user acquisition." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: Rocket, desc: "High-impact visual capsules for massive product updates and reveals." }
           ].map((item) => (
             <div key={item.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl text-left overflow-hidden relative">
            <div className="max-w-4xl relative z-10">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Software Intelligence</span>
               <h2 className="text-4xl md:text-7xl font-black uppercaseer mb-16 italic text-white leading-[0.8]">Master The <br /><span className="text-primary-accent italic">SaaS Narrative_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best SaaS Explainer Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">High-Fidelity UI Animation</strong> pipelines to provide <strong className="text-white">Tier-1 Explainer Content</strong> for global tech entities and India's elite software ventures.
                 </p>
                 <p>
                    By deploying <strong className="text-white">Product Demo Services</strong>, we enable companies to launch <strong className="text-primary-accent">SaaS Onboarding Content</strong> and <strong className="text-white">Feature Reveal Narratives</strong> that maintain world-class fidelity with zero communication latency, making us the <strong className="text-white">Best Tech Video Studio in Kerala</strong>.
                 </p>
               </div>
            </div>
            <div className="absolute right-0 bottom-0 h-1/2 w-1/2 opacity-5 pointer-events-none hidden lg:block">
               <Cpu size={600} className="text-white/20" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
