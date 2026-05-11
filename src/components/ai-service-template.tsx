"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageCircle, HelpCircle, Target, Zap, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";
import GlassNavbar from "@/components/glass-navbar";
import LeadMagnetModal from "@/components/LeadMagnetModal";

interface FAQ {
  q: string;
  a: string;
}

interface AIServiceTemplateProps {
  h1: string;
  intro: string;
  services: string[];
  benefits: string[];
  locationBlock: string;
  faqs: FAQ[];
  currentPath: string;
  categoryName: string;
  type?: "ai" | "video";
}

export const AI_PAGES = [
  { name: "AI Video Ads", href: "/services/ai-video-ads" },
  { name: "AI Social Media Videos", href: "/services/ai-social-video" },
  { name: "AI Video Editing", href: "/services/ai-post-production" },
  { name: "AI Product Videos", href: "/services/ai-product-video" },
  { name: "AI Explainer Videos", href: "/services/ai-explainer" },
  { name: "AI Corporate Videos", href: "/services/ai-corporate-video" },
  { name: "AI Video Strategy", href: "/services/ai-video-strategy" },
  { name: "Cinematic AI", href: "/services/ai-cinematic" },
  { name: "AI Film & Narrative", href: "/services/ai-film-narrative" },
];

export const VIDEO_PAGES = [
  { name: "Performance Video", href: "/services/performance-video" },
  { name: "Product & E-comm", href: "/services/product-video" },
  { name: "Social Media Video", href: "/services/social-video" },
  { name: "Corporate Video", href: "/services/corporate-video" },
  { name: "Explainer & Educational", href: "/services/explainer-video" },
  { name: "Ad Film & Creative", href: "/services/ad-film-production" },
  { name: "Marketing & Strategy", href: "/services/video-strategy" },
];

export default function AIServiceTemplate({
  h1,
  intro,
  services,
  benefits,
  locationBlock,
  faqs,
  currentPath,
  categoryName,
  type = "ai"
}: AIServiceTemplateProps) {
  const pages = type === "video" ? VIDEO_PAGES : AI_PAGES;

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <LeadMagnetModal />
      
      {/* Background FX */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* HERO */}
        <header className="mb-32 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary-accent/20 bg-primary-accent/5 w-fit font-mono text-[10px] text-primary-accent uppercase tracking-[0.3em]"
          >
            <Cpu size={12} className="animate-pulse" /> {type === "video" ? "Global Ops" : "AI Studio"} Node: {categoryName}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-blacker uppercase leading-[0.85] tracking-tighter italic"
          >
            {h1}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl border-l border-primary-accent/30 pl-10"
          >
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed uppercase tracking-wider">
              {intro}
            </p>
          </motion.div>
        </header>

        {/* SERVICES & LEAD FORM */}
        <section className="grid lg:grid-cols-[1fr_450px] gap-20 mb-40">
           <div className="space-y-16">
              <div className="space-y-8">
                 <h2 className="text-3xl font-black uppercase italic tracking-widest text-white flex items-center gap-4">
                    <Zap size={24} className="text-primary-accent" /> {type === "video" ? "Production Capabilities_" : "Neural Capabilities_"}
                 </h2>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((s, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all flex items-start gap-4">
                         <CheckCircle2 size={18} className="text-primary-accent shrink-0 mt-1" />
                         <span className="text-sm font-bold uppercase tracking-widest text-zinc-300 leading-tight">{s}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-8">
                 <h2 className="text-3xl font-black uppercase italic tracking-widest text-white flex items-center gap-4">
                    <Target size={24} className="text-primary-accent" /> Strategic Benefits_
                 </h2>
                 <div className="grid sm:grid-cols-2 gap-6">
                    {benefits.map((b, idx) => (
                      <div key={idx} className="flex gap-4">
                         <div className="h-2 w-2 rounded-full bg-primary-accent mt-2 shrink-0" />
                         <p className="text-[13px] text-zinc-400 uppercase tracking-widest leading-loose font-medium">{b}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="relative">
              <div className="sticky top-40">
                 <LeadCaptureForm />
              </div>
           </div>
        </section>

        {/* LOCATION BLOCK */}
        <section className="mb-40 p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-1 h-full bg-primary-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
           <h2 className="text-3xl font-black uppercase italic mb-10 tracking-widest">Regional Authority_</h2>
           <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed uppercase tracking-[0.1em]">
              {locationBlock}
           </p>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-40">
           <h2 className="text-4xl font-black uppercase italic mb-16 tracking-tighter flex items-center gap-6">
              <HelpCircle size={40} className="text-primary-accent" /> Intelligence <span className="text-primary-accent">FAQ_</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((f, i) => (
                <div key={i} className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.04] space-y-4 hover:bg-white/[0.03] transition-all">
                   <h4 className="text-lg font-black uppercase italic text-white tracking-wide">{f.q}</h4>
                   <p className="text-sm text-zinc-400 leading-relaxed uppercase tracking-widest font-normal">{f.a}</p>
                </div>
              ))}
           </div>
        </section>

        {/* INTERNAL LINKING BLOCK */}
        <section className="mb-40 border-t border-white/5 pt-20">
           <h2 className="text-2xl font-black uppercase italic mb-12 tracking-widest">Network Nodes_</h2>
           <div className="flex flex-wrap gap-4">
              {pages.map(page => (
                <Link 
                  key={page.href} 
                  href={page.href}
                  className={cn(
                    "px-8 py-4 rounded-xl border text-[11px] font-bold uppercase tracking-widest transition-all",
                    currentPath === page.href 
                      ? "bg-primary-accent text-black border-primary-accent" 
                      : "bg-white/5 border-white/10 text-white hover:border-primary-accent hover:text-primary-accent"
                  )}
                >
                  {page.name}
                </Link>
              ))}
              <Link href={type === "video" ? "/services/video-production" : "/services/ai-video-production"} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white text-[11px] font-bold uppercase tracking-widest hover:border-primary-accent hover:text-primary-accent transition-all">
                 {type === "video" ? "Main Production Hub" : "Main AI Studio"}
              </Link>
           </div>
        </section>

        {/* FINAL CTA */}
        <footer className="text-center space-y-12">
           <h2 className="text-5xl md:text-7xl font-blacker uppercase italic leading-[0.8] mb-12">
              Ready to <br /><span className="text-primary-accent">Ascend?</span>
           </h2>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="#lead-capture" 
                className="h-20 px-12 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:scale-105 transition-all shadow-2xl"
              >
                Get Free Strategy Call <ArrowRight size={20} />
              </Link>
              <Link 
                href="https://wa.me/917012941696"
                className="h-20 px-12 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white/10 transition-all shadow-xl"
              >
                WhatsApp Now <MessageCircle size={20} className="text-[#25D366]" />
              </Link>
           </div>
        </footer>

      </div>
    </main>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
