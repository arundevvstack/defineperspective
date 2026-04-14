import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Heart, Activity, Stethoscope, Users, Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Video, Clapperboard, MonitorPlay, MousePointer2, Smartphone, TrendingUp, LayoutGrid, LayoutList, Building2, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best Healthcare Video Production Agency India | Hospital Branding Kochi | Define Perspective",
  description: "Define Perspective is the best healthcare video production agency in India. We specialize in hospital branding videos, doctor profile movies, and patient awareness content in Kochi, Kerala.",
  keywords: [
    "best healthcare video production agency india",
    "hospital branding videos kochi",
    "doctor profile video production kerala",
    "patient awareness video content india",
    "healthcare trust-building campaigns kochi",
    "medical video production agency kerala",
    "DP Industry Solutions healthcare"
  ],
};

export default function HealthcareVideoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Video Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-impact healthcare video production for hospital branding, doctor profiles, and patient trust-building in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "Hospital Branding Videos" },
        { "@type": "Service", "name": "Doctor Profile Movies" },
        { "@type": "Service", "name": "Patient Awareness Content" }
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
              Industry // 04 Healthcare Trust Hub
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Vital <br />
            <span className="text-primary-accent">Narratives_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer human trust. Our healthcare production hub delivers cinematic hospital branding and medical narratives that bridge the gap between world-class expertise and patient trust."
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-40">
           {[
             { title: "Hospital Branding", icon: Building2, desc: "High-fidelity brand narratives that establish authority for elite hospitals." },
             { title: "Doctor Profiles", icon: Stethoscope, desc: "Bespoke cinematic profiles of world-class medical specialists." },
             { title: "Patient Content", icon: Users, desc: "Empathetic patient awareness videos designed for global distribution." },
             { title: "Trust Campaigns", icon: Heart, desc: "Synchronized trust-building visual campaigns for high-stakes clinical launches." }
           ].map((item) => (
             <div key={item.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 grid md:grid-cols-2 gap-24 items-center text-left relative overflow-hidden group">
            <div className="flex-1 space-y-12">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Medical Intelligence</span>
               <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-12 italic text-white leading-[0.9]">Humanizing <br /><span className="text-primary-accent italic font-black">Expertise_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best Healthcare Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> and <strong className="text-white">Trivandrum</strong> HQ utilizes <strong className="text-primary-accent">Empathetic Visual Storytelling</strong> to provide <strong className="text-white">Tier-1 Medical Branding</strong> for India's leading medical institutions and doctors in <strong className="text-white">Kerala</strong>.
                 </p>
                 <p>
                    By deploying <strong className="text-white">Trust-Centric Patient Awareness</strong>, we enable hospitals to launch <strong className="text-primary-accent">Cinematic Brand Movies</strong> and <strong className="text-white">Medical Profiles</strong> that maintain high-fidelity results while building deep emotional credibility.
                 </p>
               </div>
            </div>
            <div className="flex-1 relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl group">
               <Image 
                 src="/images/blog/cognitive-hero.png"
                 alt="Healthcare Video Production Agency Kochi India"
                 fill
                 className="object-cover transition-transform group-hover:scale-105 duration-1000 grayscale group-hover:grayscale-0 duration-700"
               />
               <div className="absolute inset-0 bg-primary-accent/5 pointer-events-none" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
