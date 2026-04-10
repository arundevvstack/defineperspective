"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Workflow, ArrowLeft, CheckCircle2, Megaphone } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";

// Corrected directive for Next.js 16 requirements.
export default function CreativeCampaignDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creative Campaign Design",
    "description": "Multi-channel creative campaign design and strategic brand movements engineered for growth.",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-primary-accent/10 blur-[150px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-5xl">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-500  mb-12 transition group mx-auto md:mx-0 uppercase tracking-widest text-[10px] font-black"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition"
          />
          Back to Nodes
        </button>
        <header className="mb-24 text-center md:text-left">
          <motion.h1 className="text-5xl font-black md:text-[8rem] tracking-tighter uppercase mb-12 leading-[0.8] italic">
            Creative Campaign <br />
            <span className="text-primary-accent">Design</span>
          </motion.h1>
          <p className="text-xl md:text-3xl text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We specialize in campaign design services that resonate. Our
            experienced team combines strategic thinking with innovative design
            to craft multi-channel movements that elevate your brand and drive
            measurable results. We don’t just create ads; we build brand
            movements."
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40 text-left">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold uppercase text-zinc-100 italic">
              Strategic Movement
            </h2>
            <div className="space-y-8 text-lg font-light text-zinc-400 leading-relaxed uppercase tracking-widest">
              <p>
                Every campaign is a movement. We align strategy with visual
                execution to ensure your brand's voice is heard across all
                channels, from physical nodes to the meta-space.
              </p>
              <ul className="space-y-4">
                {[
                  "Multi-Channel Architecture",
                  "Strategic Innovation",
                  "Measurable Conversion",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-xs text-zinc-500 font-black uppercase tracking-widest"
                  >
                    <CheckCircle2 size={16} className="text-primary-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-[2rem] border border-white/5 bg-white/5 overflow-hidden flex items-center justify-center p-12 shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary-accent/5 backdrop-blur-3xl" />
            <Megaphone size={120} className="text-primary-accent/20 relative z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </section>

        <section className="py-24 border-t border-white/5 text-center">
          <h3 className="text-3xl font-bold uppercase tracking-widest mb-12 text-white italic">
            Execute the Movement
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/portfolio"
              className="inline-flex h-16 px-12 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-primary-accent/10  transition-all hover:scale-105 active:scale-95 shadow-xl font-black"
            >
              View Related Portfolio
            </Link>
            <Link
              href="/contact?subject=Portfolio Inquiry: Creative Campaign Design"
              className="inline-flex h-16 px-12 rounded-full bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
            >
              Initialize Campaign Node
            </Link>
          </div>
        </section>
      </div>
      <WhatsAppChat />
    </main>
  );
}
