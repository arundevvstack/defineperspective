import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Building2, Home, Map, Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Video, Clapperboard, MonitorPlay, MousePointer2, Smartphone, TrendingUp, LayoutGrid, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best Real Estate Video Production Agency Kochi | Property Showcase India | Define Perspective",
  description: "Define Perspective is the best real estate video production agency in India. Specialized in high-end property showcase videos, project launch ads, and cinematic walkthroughs in Kochi, Kerala.",
  keywords: [
    "best real estate video production agency kochi",
    "property showcase videos india",
    "real estate walkthrough videos kerala",
    "project launch video ads Kochi",
    "cinematic real estate film production india",
    "DP Industry Solutions real estate"
  ],
};

export default function RealEstateVideoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate Video Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-end real estate video production for property showcases, project launches, and architectural walkthroughs in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "Property Showcase Videos" },
        { "@type": "Service", "name": "Project Launch Ads" },
        { "@type": "Service", "name": "Cinematic Walkthroughs" }
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
              Industry // 02 Real Estate Mastery
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Architectural <br />
            <span className="text-primary-accent">Visuals_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer spatial immortality. Our real estate production hub delivers cinematic property films and high-fidelity walkthroughs that redefine luxury living across the Indian skyline."
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-40">
           {[
             { title: "Property Showcase", icon: Building2, desc: "High-fidelity films that capture property essence and luxury vibes." },
             { title: "Project Launch", icon: Zap, desc: "Surgical digital ad campaigns for high-stakes real estate launches." },
             { title: "Walkthroughs", icon: Map, desc: "Bespoke cinematic walkthroughs featuring architectural mastery." },
             { title: "Campaigns", icon: TrendingUp, desc: "Synchronized promotional campaigns for massive market lead generation." }
           ].map((item) => (
             <div key={item.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 border-y border-white/5 py-32 flex flex-col md:flex-row gap-24 items-center text-left">
            <div className="flex-1 space-y-12">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Spatial Intelligence</span>
               <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-12 italic text-white leading-[0.9]">Elevate Property <br /><span className="text-primary-accent italic font-black">Presentation_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best Real Estate Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> and <strong className="text-white">Trivandrum</strong> based studio specializes in <strong className="text-primary-accent">High-End Architectural films</strong> and <strong className="text-white">Drone Cinematography</strong> for the builders in <strong className="text-white">Kerala</strong>.
                 </p>
                 <p>
                    By deploying <strong className="text-white">Neural Storytelling for Real Estate</strong>, we enable developers to launch <strong className="text-primary-accent">Cinematic Walkthroughs</strong> that capture human-level emotion and architectural fidelity with world-class lighting and composition, making us the <strong className="text-white">Best Video Company in Kerala</strong>.
                 </p>
               </div>
            </div>
            <div className="flex-1 relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl group">
               <Image 
                 src="/images/blog/cognitive-hero.png"
                 alt="Real Estate Video Production Agency Kochi India"
                 fill
                 className="object-cover transition-transform group-hover:scale-105 duration-1000"
               />
               <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
