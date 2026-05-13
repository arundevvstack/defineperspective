"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Zap, 
  Cpu, 
  Brain, 
  Star, 
  Award,
  Globe,
  TrendingUp,
  Play
} from "lucide-react";
import Link from "next/link";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import FAQSection from "@/components/faq-section";
import SemanticSeoLayer from "@/components/semantic-seo-layer";
import { cn } from "@/lib/utils";

interface PillarPageTemplateProps {
  title: string;
  subtitle: string;
  content: string;
  features: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  currentPath: string;
  videoUrl?: string;
}

export default function PillarPageTemplate({
  title,
  subtitle,
  content,
  features,
  stats,
  faqs,
  currentPath,
  videoUrl
}: PillarPageTemplateProps) {
  return (
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden">
      <GlassNavbar />
      <SemanticSeoLayer />
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-40 pb-32 px-6 md:px-12 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(235,30,44,0.1),transparent_70%)]" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary-accent/20 bg-primary-accent/5 w-fit font-mono text-[10px] text-primary-accent uppercase tracking-[0.3em]"
            >
              <Cpu size={12} className="animate-pulse" /> Neural Authority Pillar
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-9xl font-blacker uppercase leading-[0.85] tracking-tighter italic"
            >
              {title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed uppercase tracking-wider border-l-2 border-primary-accent pl-10"
            >
              {subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
               <Link href="#contact" className="h-20 px-12 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:scale-105 transition-all">
                  Request Intelligence Brief <ArrowRight size={20} />
               </Link>
               <div className="flex items-center gap-6">
                  {stats.map((s, i) => (
                    <div key={i} className="flex flex-col">
                       <span className="text-2xl font-black text-white">{s.value}</span>
                       <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{s.label}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE CONTENT CLUSTER */}
      <section className="section-pad bg-black/40">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-20">
             {/* Main Content */}
             <div className="lg:col-span-7 space-y-16">
                <div 
                  className="prose prose-invert prose-zinc max-w-none 
                  prose-h2:text-4xl prose-h2:font-black prose-h2:uppercase prose-h2:italic prose-h2:tracking-tighter prose-h2:mb-10
                  prose-p:text-lg prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-8
                  prose-strong:text-white prose-strong:font-bold
                  prose-ul:space-y-4 prose-li:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6 pt-10">
                   {features.map((f, i) => (
                     <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all group">
                        <div className="h-12 w-12 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent mb-6 group-hover:bg-primary-accent group-hover:text-black transition-all">
                           <Zap size={24} />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-widest mb-3">{f.title}</h3>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest leading-relaxed">{f.desc}</p>
                     </div>
                   ))}
                </div>
             </div>

             {/* Sidebar / Lead Capture */}
             <div className="lg:col-span-5">
                <div className="sticky top-40 space-y-12">
                   <LeadCaptureForm />
                   
                   {/* Authority Signals */}
                   <div className="p-10 rounded-3xl bg-primary-accent/5 border border-primary-accent/10 space-y-8">
                      <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-primary-accent flex items-center gap-2">
                        <Award size={14} /> Global Authority Status
                      </h4>
                      <div className="space-y-6">
                         {[
                           { t: "Verified AI Pipeline", d: "Neural architecture optimized for 8K." },
                           { t: "Market Leader", d: "Dominant entity in South India AI media." },
                           { t: "Enterprise Ready", d: "Scalable video infrastructure for MNCs." }
                         ].map((sig, i) => (
                           <div key={i} className="flex gap-4">
                              <CheckCircle2 size={18} className="text-primary-accent shrink-0" />
                              <div>
                                 <h5 className="text-[11px] font-black uppercase text-white tracking-widest mb-1">{sig.t}</h5>
                                 <p className="text-[10px] text-zinc-500 uppercase font-mono">{sig.d}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. SEMANTIC TOPIC MESH (Phase 9) */}
      <section className="section-pad border-t border-white/5 bg-black/60">
        <div className="container mx-auto max-w-7xl">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
              <h2 className="text-sm font-mono text-primary-accent uppercase tracking-[0.5em]">Semantic Topic Mesh_</h2>
              <div className="h-px flex-1 bg-white/5 hidden md:block" />
           </div>
           <div className="flex flex-wrap gap-x-12 gap-y-8">
              {[
                { name: "Cinematic AI Commercial Workflow", href: "/ai-video-production-india" },
                { name: "AI TVC Production Pipeline", href: "/ai-tvc-production-india" },
                { name: "AI Fashion Film Production", href: "/ai-fashion-commercials" },
                { name: "Luxury Brand AI Filmmaking", href: "/ai-luxury-brand-films" },
                { name: "AI Video Production Kochi", href: "/ai-video-production-kochi" },
                { name: "Best AI Video Production Company India", href: "/best-ai-video-production-company-india" }
              ].map(topic => (
                <Link 
                  key={topic.name} 
                  href={topic.topicHref || topic.href}
                  className="text-[11px] font-black uppercase tracking-widest text-zinc-500 hover:text-primary-accent transition-colors flex items-center gap-2 group"
                >
                   <span className="w-1.5 h-1.5 rounded-full bg-primary-accent/20 group-hover:bg-primary-accent transition-colors" />
                   {topic.name}
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 3. GEO-REGIONAL REINFORCEMENT */}
      <section className="section-pad border-y border-white/5 bg-obsidian">
        <div className="container mx-auto max-w-7xl">
           <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
              <div className="space-y-6">
                 <span className="label-mono">Regional Infrastructure</span>
                 <h2 className="heading-section">Serving The <br /><span className="text-primary-accent">Global South_</span></h2>
              </div>
              <p className="body-copy max-w-md text-right">
                 DP Studio operates as a decentralized neural media hub, serving brands from Kochi to Mumbai, and Dubai to Singapore.
              </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
              {[
                { c: "Kochi", d: "Production Lab" },
                { c: "Bangalore", d: "Tech Integration" },
                { c: "Mumbai", d: "Creative Strategy" },
                { c: "Trivandrum", d: "Enterprise Media" }
              ].map((loc, i) => (
                <div key={i} className="p-12 bg-black/40 hover:bg-white/[0.03] transition-all group text-center space-y-3">
                   <h4 className="text-xl font-black uppercase group-hover:text-primary-accent transition-colors">{loc.c}</h4>
                   <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{loc.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. FAQ / INTELLIGENCE */}
      <section className="section-pad">
         <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-24 space-y-6">
               <h2 className="heading-section">Pillar <span className="text-primary-accent">Intelligence_</span></h2>
               <p className="label-mono opacity-50">Frequently asked questions about {title}</p>
            </div>
            <div className="space-y-6">
               {faqs.map((f, i) => (
                 <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all">
                    <h4 className="text-xl font-black uppercase italic text-white mb-4">{f.q}</h4>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-wider">{f.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="section-pad border-t border-white/5 text-center">
         <div className="container mx-auto max-w-4xl space-y-16">
            <h2 className="text-6xl md:text-9xl font-blacker uppercase italic leading-[0.8]">
               Ready to <br /><span className="text-primary-accent">Dominate?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
               <Link href="#contact" className="h-20 px-12 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:scale-105 transition-all">
                  Book A Discovery Session <ArrowRight size={20} />
               </Link>
               <Link href="/portfolio" className="h-20 px-12 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white/10 transition-all">
                  View Case Studies <Play size={20} fill="currentColor" />
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
