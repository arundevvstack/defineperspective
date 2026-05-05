import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BrainCircuit, MessageSquare, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Define Perspective is the best AI explainer video company in India. Specialized in AI SaaS explainers, educational AI videos, and photorealistic AI avatar presenters in Kochi, Kerala.",
  keywords: [
    "best ai explainer video company india",
    "saas ai explainer videos kochi",
    "ai avatar video production kerala",
    "best ai educational videos Kochi",
    "ai video presenters india",
    "photorealistic ai avatars kerala",
    "DP AI Studios explainer videos"
  ],
};

export default function AIExplainerVideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Explainer Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-fidelity AI-powered explainer videos for SaaS, education, and brands in India and Kochi. AI avatar technology.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Explainer Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI SaaS Explainers" },
        { "@type": "Service", "name": "AI Educational Content" },
        { "@type": "Service", "name": "AI Avatar Presenters" }
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
              AI Services // 06 Explainer Mastery
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            AI Explainer <br />
            <span className="text-primary-accent">Solutions_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer visual clarity. Our AI-powered explainer production hub delivers world-class SaaS walk-throughs and educational content featuring hyper-realistic AI avatar technology."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: MessageSquare, desc: "Bespoke AI explainer videos for high-growth software and tech brands." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: GraduationCap, desc: "High-fidelity AI educational sequences for modern online learning platforms." },
             { title: "Best AI Video Production Company in Kerala | DP AI Studio India", icon: Users, desc: "Synthesizing photorealistic human presenters for localized globally scaled communication." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 border-y border-white/5 py-32 flex flex-col md:flex-row gap-24 items-center text-left relative overflow-hidden group">
            <div className="flex-1 space-y-12">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Explainer Intelligence</span>
               <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-12 italic text-white leading-[0.9]">Clarity <br /><span className="text-primary-accent italic font-black">Through AI_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best AI Explainer Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">Neural Voice & Avatar Pipelines</strong> to provide <strong className="text-white">Tier-1 Explainer Content</strong> for global SaaS startups and educational giants.
                 </p>
                 <p>
                    By deploying <strong className="text-white">Neural Presentation Services</strong>, we enable brands to launch <strong className="text-primary-accent">AI-Avatar Education Sequences</strong> that feature human-level emotion and localized communication with <strong className="text-white">Zero Production Deadlines</strong>.
                 </p>
               </div>
            </div>
            <div className="flex-1 relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/5 group shadow-2xl">
               <Image 
                 src="/images/blog/ai-film-concept.png"
                 alt="AI video production company in Kerala - DP AI Studio"
                 fill
                 className="object-cover transition-transform group-hover:scale-105 duration-1000"
               />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
