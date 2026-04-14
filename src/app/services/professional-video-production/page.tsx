"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Video, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";

// Note: In Next.js 16+, metadata should ideally be in a Server Component.
// For now, we fix the directive and syntax to restore the build.
export default function ProfessionalVideoProductionPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      
      <GlassNavbar /> {/* Background Fluid Motion (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-20">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] animate-pulse rounded-full bg-transparent border-2 border-primary-accent/5 blur-[150px] hover:bg-transparent    transition-all duration-300" />
      </div>
      <div className="container relative z-10 mx-auto max-w-5xl">
        
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-400  mb-12 transition group"
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
            
            Professional Video <br />
            <span className="text-primary-accent">Production</span>
          </motion.h1>
          <p className="text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl">
            
            "Elevate your brand with high-quality video. Our team of skilled
            videographers and editors is dedicated to producing professional
            video content that captures your story. From corporate films to
            product demos, we help brands communicate with clarity, creativity,
            and 2026-ready AI integration."
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          
          <div className="space-y-12">
            
            <h2 className="text-3xl font-bold uppercase text-zinc-100 italic">
              Storytelling Architecture
            </h2>
            <div className="space-y-8 text-lg font-light text-zinc-400 leading-relaxed">
              
              <p>
                
                Cinema-grade quality meets AI efficiency. We handle the full
                pipeline from script conceptualization to final generative VFX
                upscaling, ensuring your story is optimized for every dimension
                of the visual web.
              </p>
              <ul className="space-y-4">
                
                {[
                  "Generative VFX Pipelines",
                  "SaaS Interface Visuals",
                  "Cinematic Reality Capture",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    
                    <CheckCircle2 size={16} className="text-primary-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-[2rem] border border-white/5 bg-white/5 overflow-hidden flex items-center justify-center p-12">
            
            <Video size={120} className="text-primary-accent/20" />
          </div>
        </section>
        <section className="py-24 border-t border-white/5 text-center">
          
          <h3 className="text-3xl font-bold uppercase tracking-widest mb-12 text-white">
            Direct Your Vision
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            
            <Link
              href="/portfolio"
              className="h-16 px-12 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:scale-110  active:scale-95 transition-all shadow-xl  transition-all duration-300"
            >
              
              View Related Portfolio
            </Link>
            <Link
              href="/contact?subject=Portfolio Inquiry: Professional Video Production"
              className="h-16 px-12 rounded-full bg-white text-white font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl"
            >
              
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
      <WhatsAppChat />
    </main>
  );
}
