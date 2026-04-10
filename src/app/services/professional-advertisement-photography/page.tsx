"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";

// Fixed directive for Next.js 16 build stability
export default function AdvertisementPhotographyPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      
      <GlassNavbar /> {/* Background Fluid Motion (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-20">
        
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-[var(--accent)]/10 blur-[150px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-5xl">
        
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-500  mb-12 transition group"
        >
          
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition"
          />
          Back to Nodes
        </button>
        <header className="mb-24">
          
          <motion.h1
            
className="text-5xl font-black md:text-8xl tracking-tighter uppercase mb-12"
          >
            
            Professional Advertisement <br />
            <span className="text-primary-accent">Photography</span>
          </motion.h1>
          <p className="text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl">
            
            "At Define Perspective, we specialize in high-impact advertisement
            photography that elevates your brand and drives engagement. Our
            expert photographers are dedicated to creating stunning,
            high-quality images that effectively communicate your brand’s story
            and attract your target audience in an increasingly visual
            world."
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          
          <div className="space-y-12">
            
            <h2 className="text-3xl font-bold uppercase text-zinc-100 italic">
              Capturing Your Brand’s Essence
            </h2>
            <div className="space-y-8 text-lg font-light text-zinc-400 leading-relaxed">
              
              <p>
                
                Every frame is a strategic asset. We don't just take photos; we
                engineer visual hooks that stop the scroll and build brand
                authority in 2026's hyper-competitive digital landscape.
              </p>
              <ul className="space-y-4">
                
                {[
                  "High-Impact Visual Hooks",
                  "Strategic Brand Storytelling",
                  "Precision Lighting & Composition",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-zinc-500"
                  >
                    
                    <CheckCircle2 size={16} className="text-primary-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-[2rem] border border-white/5 bg-white/5 overflow-hidden flex items-center justify-center p-12">
            
            <Camera size={120} className="text-primary-accent/20" />
          </div>
        </section>
        <section className="py-24 border-t border-white/5 text-center">
          
          <h3 className="text-3xl font-bold uppercase tracking-widest mb-12 text-white">
            Scale Your Vision
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            
            <Link
              href="/portfolio"
              className="h-16 px-12 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:scale-110  active:scale-95 transition-all shadow-xl  transition-all duration-300"
            >
              
              View Related Portfolio
            </Link>
            <Link
              href="/contact?subject=Portfolio Inquiry: Advertisement Photography"
              className="h-16 px-12 rounded-full bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl hover:bg-transparent    transition-all duration-300"
            >
              
              Launch Strategy Node
            </Link>
          </div>
        </section>
      </div>
      <WhatsAppChat />
    </main>
  );
}
