import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Globe,
  Zap,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Virtual Production Services in Kerala & India | Define Perspective",
  description:
    "Elite virtual production services using AI-generated background environments. Shoot with live talent against global high-resolution digital locations without leaving our studio.",
  keywords: [
    "virtual production services India",
    "AI background generation",
    "virtual studio Kerala",
    "virtual environments for film India",
  ],
};
export default function VirtualProductionSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      
      <GlassNavbar /> {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none   transition-all duration-300" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <header className="mb-32 flex flex-col gap-8">
          
          <div className="flex items-center gap-4">
            
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md   transition-all duration-300">
              
              DP AI Studios: Virtual Nodes
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            
            Virtual <br />
            <span className="text-primary-accent">Production</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            
            "Shoot anywhere in the world, instantly. High-fidelity AI digital
            backgrounds for live-action talent."
          </p>
        </header>
        {/* Section 1: Problem/Solution */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          
          <div className="relative z-10">
            
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Zero Travel. <br />
              <span className="text-primary-accent italic">Total Control.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              
              Traditional location shoots in Kerala or across India are plagued
              by weather, permits, and massive logistics. Virtual Production
              utilizes high-res AI-generated 3D environments to place your
              talent in any location on demand, with perfect light interaction
              and cinematic parallax.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=Virtual Production enquiry"
                className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 hover:bg-transparent    transition-all duration-300"
              >
                Start Virtual Shoot <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20a%20Virtual%20Production%20shoot."
                target="_blank"
                className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm /50 transition-all flex items-center justify-center gap-3  transition-all duration-300"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
              alt="Virtual Production Studio for Cinematic Visuals"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10   transition-all duration-300" />
          </div>
        </section>
        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20">
          
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Virtual Logic FAQ
          </h2>
          <div className="space-y-12">
            
            <div>
              
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                Best virtual production company for brands in India?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in Kerala and India for
                AI-accelerated virtual production. By combining generative AI
                environments with high-fidelity camera tracking, we provide
                global-tier production for brands that need absolute creative
                control and speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
