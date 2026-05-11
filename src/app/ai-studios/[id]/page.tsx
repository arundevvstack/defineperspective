"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  Wand2,
  Maximize2,
  MoveRight,
  Database,
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { use } from "react";

const projects = {
  "ai-design-1": {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    client: "Moda Verve",
    cat: "AI Design & Digital Humans",
    hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2400",
    description:
      "Developing the first AI-generated virtual model for an Indian luxury brand. Every texture, lighting angle, and pose was meticulously engineered through multi-stage neural diffusion.",
    gallery: [
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614741487319-f9479ed30100?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
    ],
    technical: [
      { id: "gen", label: "Generator", value: "Custom Flux LoRA", icon: Cpu },
      { id: "proc", label: "Processing", value: "Dual RTX 6000 Ada", icon: Database },
      { id: "time", label: "Pipeline", value: "Neural Diffusion v4", icon: Wand2 },
    ],
  },
};

// Detect YouTube video IDs: 11-char alphanumeric strings not in hardcoded projects
function isYouTubeVideoId(id: string): boolean {
  return /^[a-zA-Z0-9_-]{11}$/.test(id) && !(id in projects);
}

export default function AICaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // ── YouTube Embed View ──────────────────────────────────────────────────────
  if (isYouTubeVideoId(id)) {
    return (
      <main className="min-h-screen bg-obsidian text-white relative theme-blue">
        <GlassNavbar />

        {/* Header */}
        <section className="pt-28 pb-0">
          <div className="container mx-auto px-6 md:px-24">
            <Link
              href="/ai-studios"
              className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-primary-accent mb-10 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={13} /> Back to AI Studios
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white mb-4 leading-[0.9]"
            >
              AI Film <span className="text-primary-accent">Production</span>
            </motion.h1>
            <p className="text-zinc-400 text-base mb-10 font-light">
              Define Perspective — Cinematic AI Video Production, India
            </p>
          </div>

          {/* Cinematic full-width YouTube embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="w-full aspect-video max-h-[82vh] bg-black"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&color=white`}
              title="AI Film Production — Define Perspective"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </motion.div>
        </section>

        {/* Info + CTA */}
        <div className="container mx-auto px-6 md:px-24 py-20">
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { id: "gen", label: "Production", value: "AI-Cinematic Pipeline", icon: Cpu },
              { id: "proc", label: "Studio", value: "Define Perspective", icon: Database },
              { id: "time", label: "Format", value: "Premium AI Film", icon: Wand2 },
            ].map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-5 p-7 rounded-3xl border border-white/10 border-l-[3px] border-l-primary-accent transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl border border-primary-accent/20 flex items-center justify-center text-primary-accent shrink-0">
                  <t.icon size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-primary-accent/60 uppercase block mb-1 font-black tracking-widest">
                    {t.label}
                  </span>
                  <span className="text-base font-black text-white">{t.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <section className="p-14 md:p-24 rounded-[3rem] border border-primary-accent/20 bg-gradient-to-br from-white/5 to-primary-accent/5 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Create Your <br />
              <span className="text-primary-accent">AI Film.</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-lg mx-auto mb-10">
              Partner with DP AI Studios for your next cinematic AI production.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/contact?subject=AI Film Production Inquiry"
                className="h-14 px-10 rounded-2xl border-2 border-primary-accent text-primary-accent font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio"
                className="h-14 px-10 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all flex items-center gap-3"
              >
                View Portfolio <MoveRight size={14} />
              </Link>
            </div>
          </section>
        </div>
        <WhatsAppChat />
      </main>
    );
  }

  // ── Hardcoded Case Study View ───────────────────────────────────────────────
  const project = projects[id as keyof typeof projects] || projects["ai-design-1"];

  return (
    <main className="min-h-screen bg-obsidian text-white relative theme-blue">
      <GlassNavbar />

      {/* Hero */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <motion.img
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.hero}
          alt={project.title}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        <div className="absolute bottom-20 left-6 md:left-24 max-w-4xl">
          <motion.div transition={{ delay: 0.5 }}>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-6 block">
              Case Study {" // "} AI Design
            </span>
            <h1 className="text-4xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
              {project.title}
            </h1>
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-primary-accent">
              <div>Client: <span className="text-white">{project.client}</span></div>
              <div>Year: <span className="text-white">2026</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-24 py-40">
        {/* Description + Technical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
          <div className="lg:col-span-12">
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-600 mb-12 border-b border-white/5 pb-4">
              Neural Architecture Context
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-3xl md:text-5xl font-light leading-snug text-white">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            {project.technical.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-6 p-8 rounded-3xl border border-white/20 border-l-[3px] border-l-primary-accent transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl border-2 border-primary-accent/20 flex items-center justify-center text-primary-accent">
                  <t.icon size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-primary-accent/60 uppercase block mb-1 font-bold">
                    {t.label}
                  </span>
                  <span className="text-lg font-black text-white">{t.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48">
          <div className="md:col-span-2 aspect-[21/9] rounded-[3rem] overflow-hidden group relative border border-white/5">
            <img
              src={project.gallery[0]}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="AI video production company in Kerala - DP AI Studio"
            />
            <div className="absolute inset-0 border-2 border-primary-accent/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <Maximize2 className="text-white" size={40} />
            </div>
          </div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5">
            <img
              src={project.gallery[1]}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="AI video production - DP AI Studio"
            />
          </div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5">
            <img
              src={project.gallery[2]}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="AI video production - DP AI Studio"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="p-16 md:p-32 rounded-[4rem] border border-primary-accent/20 bg-gradient-to-br from-white/5 to-primary-accent/5 text-center relative overflow-hidden">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-12 leading-[0.9]">
            Deploy the <br />
            <span className="text-primary-accent drop-shadow-xl">Future of Design.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/contact?subject=AI Studio Intake: General Inquire"
              className="h-20 px-16 rounded-3xl border-2 border-primary-accent text-primary-accent font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Inquire for AI
            </Link>
            <Link
              href="/portfolio?view=ai"
              className="h-20 px-16 rounded-3xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm transition-all flex items-center gap-4"
            >
              Back to DP AI Studios <ArrowLeft size={18} />
            </Link>
          </div>
        </section>
      </div>
      <WhatsAppChat />
    </main>
  );
}
