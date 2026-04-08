import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Target,
  Zap,
  BarChart3,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Conversion-Focused Video Ads India | Define Perspective",
  description:
    "High-performance, conversion-centric video ads for D2C and SaaS brands in India. Lower your CPA and boost your ROAS with psychological hooks and AI-optimized storytelling.",
  keywords: [
    "conversion focused video ads India",
    "performance marketing video ads",
    "high-converting ad creatives Kerala",
    "D2C video ads India",
  ],
};
export default function ConversionAdsSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      
      <GlassNavbar /> {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none   transition-all duration-300" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <header className="mb-32 flex flex-col gap-8">
          
          <div className="flex items-center gap-4">
            
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md   transition-all duration-300">
              
              Node: Conversion Engine
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            
            Conversion <br />
            <span className="text-primary-accent">Video Ads</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            
            "Ads that don't just look good — they sell. High-intensity creatives
            designed for direct-response marketing."
          </p>
        </header>
        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          
          <div className="relative z-10">
            
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Visuals for <span className="text-primary-accent italic">Action.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              
              Most agencies focus on beauty. We focus on the bottom line. Our
              conversion-focused video production uses psychological triggers
              and first-second attention hooks to drive immediate user action,
              making every rupee of your ad spend work harder for your brand in
              India and Kerala.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=Conversion Ads enquiry"
                className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 hover:bg-transparent    transition-all duration-300"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm /50 transition-all flex items-center justify-center gap-3  transition-all duration-300"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="High-conversion Data Charts and Ad Creatives"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10   transition-all duration-300" />
          </div>
        </section>
        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20">
          
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Conversion Logic FAQ
          </h2>
          <div className="space-y-12">
            
            <div>
              
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                How conversion focused video ads help brands?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Unlike brand films, conversion ads are designed for a specific
                KPI: Sale, Lead, or Direct Interaction. By using high-intensity
                creative testing and psychological hooks, we ensure that your
                brand finds the winning ad format that scales your business
                profitably in the Indian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
