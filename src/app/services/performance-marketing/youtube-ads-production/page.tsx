import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Video,
  Zap,
  Target,
  ArrowRight,
  ShieldCheck,
  Globe
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YouTube Ads Production India | High-Performance Video Ads Kerala | Define Perspective Studios",
  description: "Elite YouTube ad production optimized for high retention and conversion. specialized in skippable and unskippable formats for Indian brands and global markets.",
  keywords: ["YouTube ad production India", "best video ads Kerala", "YouTube marketing agency Kochi", "high retention ads India"],
};

export default function YouTubeAdsPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden theme-red">
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Vertical: Performance Ads // Node 03
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            YouTube <br />
            <span className="text-primary-accent italic shadow-glow">Production_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed uppercase tracking-widest">
            "High-retention video ads engineered for YouTube's attention economy. ROI-focused storytelling for visionary brands."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none italic">
              Attention. <br />
              <span className="text-primary-accent font-black">Retention.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12 uppercase tracking-tight text-sm">
              YouTube ads require a different structural logic than traditional TVCs. We utilize data-backed hooks and optimized narrative arcs to ensure your message is delivered before the skip button appears. specialized in both high-fidelity production and AI-augmented creative testing for the Indian market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=YouTube Ad Project Enquiry"
                className="h-20 px-12 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_var(--glow)] flex items-center justify-center gap-4"
              >
                Inquire for Ads <ArrowRight size={20} />
              </Link>
              <Link
                href="https://wa.me/919496191684"
                target="_blank"
                className="h-20 px-12 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-4"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop"
              alt="High Quality YouTube Production Workflow India"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </div>
        </section>

        <div className="mb-40 py-24 border-y border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: "Skippable Format", d: "High-impact hooks designed for the first 5 seconds to maximize organic retention.", icon: Zap },
                { t: "Bumper Ads", d: "6-second bursts of brand recognition engineered for high-frequency reach.", icon: Video },
                { t: "Multilingual Dubbing", d: "AI-accelerated regional translation for pan-India campaign execution.", icon: Globe }
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                   <div className="h-12 w-12 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                      <item.icon size={24} />
                   </div>
                   <h4 className="text-xl font-bold uppercase tracking-widest">{item.t}</h4>
                   <p className="text-zinc-500 font-light text-xs uppercase tracking-widest leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}
