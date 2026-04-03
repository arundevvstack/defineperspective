"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Workflow, ArrowLeft, CheckCircle2, Megaphone } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";

// Corrected directive for Next.js 16 requirements.
export default function CreativeCampaignDesignPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Background Fluid Motion (Simulated) */}{" "}
      <div className="absolute inset-0 z-0 opacity-20">
        {" "}
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-[var(--accent)]/10 blur-[150px]" />{" "}
      </div>{" "}
      <div className="container relative z-10 mx-auto max-w-5xl">
        {" "}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-500 hover:text-primary-accent mb-12 transition group"
        >
          {" "}
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition"
          />{" "}
          Back to Nodes{" "}
        </button>{" "}
        <header className="mb-24">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black md:text-8xl tracking-tighter uppercase mb-12"
          >
            {" "}
            Creative Campaign <br />{" "}
            <span className="text-primary-accent">Design</span>{" "}
          </motion.h1>{" "}
          <p className="text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl">
            {" "}
            "We specialize in campaign design services that resonate. Our
            experienced team combines strategic thinking with innovative design
            to craft multi-channel campaigns that elevate your brand and drive
            measurable results. We don’t just create ads; we build brand
            movements."{" "}
          </p>{" "}
        </header>{" "}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          {" "}
          <div className="space-y-12">
            {" "}
            <h2 className="text-3xl font-bold uppercase tracking-widest text-zinc-100 italic">
              Strategic Movement
            </h2>{" "}
            <div className="space-y-8 text-lg font-light text-zinc-400 leading-relaxed">
              {" "}
              <p>
                {" "}
                Every campaign is a movement. We align strategy with visual
                execution to ensure your brand's voice is heard across all
                channels, from physical nodes to the meta-space.{" "}
              </p>{" "}
              <ul className="space-y-4">
                {" "}
                {[
                  "Multi-Channel Architecture",
                  "Strategic Innovation",
                  "Measurable Conversion",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-zinc-500"
                  >
                    {" "}
                    <CheckCircle2 size={16} className="text-primary-accent" />{" "}
                    {f}{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="aspect-[4/5] rounded-[2rem] border border-white/5 bg-white/5 overflow-hidden flex items-center justify-center p-12">
            {" "}
            <Megaphone size={120} className="text-primary-accent/20" />{" "}
          </div>{" "}
        </section>{" "}
        <section className="py-24 border-t border-white/5 text-center">
          {" "}
          <h3 className="text-3xl font-bold uppercase tracking-widest mb-12 text-white">
            Execute the Movement
          </h3>{" "}
          <div className="flex flex-wrap justify-center gap-6">
            {" "}
            <Link
              href="/portfolio"
              className="h-16 px-12 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:scale-110 hover:bg-white/5 active:scale-95 transition-all shadow-xl"
            >
              {" "}
              View Related Portfolio{" "}
            </Link>{" "}
            <Link
              href="/contact?subject=Portfolio Inquiry: Creative Campaign Design"
              className="h-16 px-12 rounded-full bg-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
            >
              {" "}
              Initialize Campaign Node{" "}
            </Link>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
      <WhatsAppChat />{" "}
    </main>
  );
}
