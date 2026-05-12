"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  Plus, Users, Globe, BarChart3, Star, Building2, Zap, Target, Activity, MessageCircle, ArrowRight, Shield, Cpu, Play, CheckCircle2, Clapperboard, MonitorPlay, Sparkles
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import VideoHero from "@/components/video-hero";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import VideoLightbox from "@/components/ai-video-hub/VideoLightbox";
import { useState } from "react";

// Dynamic imports for performance
// Dynamic imports with robust resolution
const IndustriesSection = dynamic(() => import("@/components/industries-section").then(mod => mod.default || mod));
const PortfolioSection = dynamic(() => import("@/components/portfolio-section").then(mod => mod.default || mod));
const TestimonialSection = dynamic(() => import("@/components/testimonial-section").then(mod => mod.default || mod));
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => mod.default || mod));
const WhatsAppChat = dynamic(() => import("@/components/whatsapp-chat"), { ssr: false });
const DynamicLeadMagnet = dynamic(() => import("@/components/seo-hub/leads/DynamicLeadMagnet"), { ssr: false });

const SectionHeader = ({ tag, title, subtitle, align = "center", h2 = false, className }: any) => {
  const TitleTag = h2 ? "h2" : "h3";
  return (
    <div className={cn("mb-16 md:mb-20", align === "center" ? "text-center" : "text-left", className)}>
      <span className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-primary-accent mb-6 block font-bold">{tag}</span>
      <TitleTag className={cn(
        "font-black text-white uppercase leading-tight md:leading-[0.9]",
        align === "center" ? "text-3xl md:text-6xl lg:text-[5.5rem]" : "text-3xl md:text-5xl lg:text-[4.5rem]"
      )}>
        {title}
      </TitleTag>
      {subtitle && <p className="mt-8 text-zinc-400 font-normal text-sm md:text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default function HomeContent() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-obsidian text-white transition-colors duration-500 overflow-x-hidden relative selection:bg-primary-accent selection:text-white theme-blue">
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <GlassNavbar />
      
      {/* 1. HERO SECTION (With H1 in components/video-hero.tsx) */}
      <VideoHero />

      {/* 🎬 SHOWREEL BLOCK — FULL SCREEN */}
      <section
        className="relative w-full h-screen min-h-[600px] overflow-hidden border-b border-white/5 cursor-pointer group"
        onClick={() => setActiveVideo("sNp1a5I6WsI")}
      >
        {/* Full-bleed thumbnail */}
        <img
          src="https://img.youtube.com/vi/sNp1a5I6WsI/maxresdefault.jpg"
          alt="Define Perspective Showreel — AI Video Production Company Kerala India"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.04] transition-all duration-[2500ms]"
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(235,30,44,0.06)_0%,transparent_70%)]" />

        {/* ── CENTRE CONTENT ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-10">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary-accent/50" />
            <span className="label-mono !text-primary-accent">DP AI Studio — Official Showreel 2025</span>
            <div className="h-px w-8 bg-primary-accent/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.85] max-w-5xl"
          >
            Watch What <br />
            <span className="text-primary-accent">We Create_</span>
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 px-12 py-5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/25 text-white font-black uppercase tracking-widest text-[11px] md:text-sm group-hover:bg-primary-accent group-hover:border-primary-accent group-hover:text-black transition-all duration-500 shadow-2xl"
            >
              <span className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-black/20 transition-colors">
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </span>
              Watch AI Video Showcase
            </motion.button>
          </motion.div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 z-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["TVCs", "Brand Films", "AI Ads", "Corporate Videos"].map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[8px] font-mono text-zinc-400 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Channel + CTA */}
          <div className="flex gap-3" onClick={e => e.stopPropagation()}>
            <a
              href="https://www.youtube.com/@DP.AI.Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Full Channel <ArrowRight size={13} />
            </a>
            <Link
              href="/contact"
              className="h-11 px-6 rounded-xl bg-primary-accent text-black font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-primary-accent/80 transition-all"
            >
              Start a Project <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>


      {/* 📍 LOCATION AUTHORITY BAR (SEO WEAPON) */}
      <div className="bg-black border-y border-white/5 py-8 relative z-30">
         <div className="container mx-auto px-6 overflow-hidden">
            <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
               {[
                 "Serving Brands Across India",
                 "Kerala", "Kochi", "Trivandrum", "Bangalore", 
                 "Chennai", "Mumbai", "Hyderabad", "South India", "Pan India"
               ].map((loc, i) => (
                 <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-accent group-hover:scale-150 transition-transform" />
                    <span className="label-mono !text-zinc-500 group-hover:!text-white transition-colors">{loc}</span>
                 </div>
               ))}
               {/* Duplicate for seamless marquee */}
               {[
                 "Serving Brands Across India",
                 "Kerala", "Kochi", "Trivandrum", "Bangalore", 
                 "Chennai", "Mumbai", "Hyderabad", "South India", "Pan India"
               ].map((loc, i) => (
                 <div key={`dup-${i}`} className="flex items-center gap-4 group cursor-default">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-accent group-hover:scale-150 transition-transform" />
                    <span className="label-mono !text-zinc-500 group-hover:!text-white transition-colors">{loc}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      {/* 🚀 PRIMARY SERVICE DOMINATION GRID (SEO CLUSTERING) */}
      <section id="services" className="section-pad bg-obsidian border-b border-white/5 relative z-10">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
               <div className="space-y-6">
                  <span className="label-mono">Service Infrastructure</span>
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
                     Production <br />
                     <span className="text-primary-accent">Intelligence_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right opacity-40 uppercase tracking-widest text-[10px]">
                  Semantically clustered media solutions for global brand dominance.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
               {/* Cluster 1: AI Video Production */}
               <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-12">
                  <div className="flex justify-between items-start">
                     <div className="space-y-2">
                        <span className="text-primary-accent font-mono text-[10px] uppercase tracking-[0.4em]">Node 01</span>
                        <h3 className="text-4xl font-black uppercase text-white">AI Video Production</h3>
                     </div>
                     <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                        <Cpu size={28} />
                     </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                     {[
                       "AI Commercial Production", "AI TVC Production", "AI Reel Production",
                       "AI Product Ads", "AI Fashion Commercials", "AI Food Commercials",
                       "AI Real Estate Videos", "AI Luxury Brand Films", "AI Theatre Ads",
                       "AI Social Media Campaigns"
                     ].map(s => (
                       <div key={s} className="flex items-center gap-3 py-3 border-b border-white/5 hover:border-primary-accent/40 transition-colors">
                          <CheckCircle2 size={12} className="text-primary-accent" />
                          <span className="label-mono !text-[11px] !text-zinc-400">{s}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Cluster 2: Traditional Video Production */}
               <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-12">
                  <div className="flex justify-between items-start">
                     <div className="space-y-2">
                        <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em]">Node 02</span>
                        <h3 className="text-4xl font-black uppercase text-white">Video Production</h3>
                     </div>
                     <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Clapperboard size={28} />
                     </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                     {[
                       "TV Commercial Production", "Corporate Films", "Brand Storytelling",
                       "Product Videos", "Social Media Videos", "Event Films",
                       "Documentary Production", "Promotional Videos", "Theatre Commercials",
                       "Broadcast Ad Films"
                     ].map(s => (
                       <div key={s} className="flex items-center gap-3 py-3 border-b border-white/5 hover:border-blue-500/40 transition-colors">
                          <CheckCircle2 size={12} className="text-blue-500" />
                          <span className="label-mono !text-[11px] !text-zinc-400">{s}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 🌟 ELITE FLAGSHIP PRODUCTIONS (MASTER-GRADE FEATURING) */}
      <section id="featured-productions" className="section-pad bg-black relative overflow-hidden">
         {/* Background Telemetry Grid */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         
         <div className="container-max relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
                     <span className="label-mono !text-primary-accent">Flagship Productions {" // "} Master Grade</span>
                  </div>
                  <h2 className="heading-section">
                     The <span className="text-primary-accent">Featured_</span> <br />
                     Collection
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right opacity-40">
                  Engineering cinematic authority through proprietary neural pipelines and world-class vision.
               </p>
            </div>

            <div className="space-y-32">
               {[
                 { 
                   id: "5kOnWP-dZZY", 
                   title: "SHE Luxury Ad", 
                   type: "Luxury Commercial", 
                   desc: "A high-fidelity cinematic ad film engineered for elite fashion brands, showcasing the intersection of neural aesthetics and luxury storytelling.",
                   specs: ["8K NATIVE", "NEURAL VFX", "SPATIAL AUDIO", "RTX COMPUTE"],
                   location: "Studio Node Alpha // India"
                 },
                 { 
                   id: "vGijXeVUS74", 
                   title: "Lacrispo Theater Ad", 
                   type: "Cinema Commercial", 
                   desc: "Broadcast-grade theater commercial optimized for high-impact cinema screens, delivering immersive visual fidelity across South India.",
                   specs: ["DCP READY", "SURROUND 7.1", "HDR10+", "400MBPS BITRATE"],
                   location: "Production Node Beta // Kerala"
                 }
               ].map((vid, idx) => (
                 <div 
                   key={vid.id}
                   className={cn(
                     "flex flex-col lg:flex-row gap-16 items-center group",
                     idx % 2 === 1 && "lg:flex-row-reverse"
                   )}
                 >
                    {/* Cinematic Canvas */}
                    <div 
                      className="w-full lg:w-3/5 aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-obsidian relative cursor-pointer shadow-2xl shadow-primary-accent/5 group-hover:border-primary-accent/40 transition-all duration-700"
                      onClick={() => setActiveVideo(vid.id)}
                    >
                       <img 
                         src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`} 
                         alt={vid.title} 
                         className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2000ms]"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                       
                       {/* Telemetry Overlay */}
                       <div className="absolute top-8 left-8 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          {vid.specs.map(spec => (
                            <span key={spec} className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-mono text-primary-accent uppercase tracking-[0.2em]">
                               {spec}
                            </span>
                          ))}
                       </div>

                       {/* Play Interface */}
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary-accent/10 backdrop-blur-3xl border border-primary-accent/40 text-primary-accent flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-accent group-hover:text-black transition-all duration-500">
                             <Play size={32} fill="currentColor" className="ml-1" />
                          </div>
                       </div>
                    </div>

                    {/* Metadata Narrative */}
                    <div className="w-full lg:w-2/5 space-y-10">
                       <div className="space-y-4">
                          <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.5em] block">{vid.type}</span>
                          <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-none tracking-tighter">
                             {vid.title}
                          </h3>
                       </div>
                       
                       <p className="body-copy !text-base !text-zinc-400 !leading-relaxed uppercase tracking-widest">
                          {vid.desc}
                       </p>

                       <div className="flex flex-wrap gap-4 pt-8">
                          <button 
                            onClick={() => setActiveVideo(vid.id)}
                            className="btn-glass !h-16 !px-10"
                          >
                             <span className="label-mono !text-xs">Stream Now</span>
                             <MonitorPlay size={18} />
                          </button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 🧠 WHY AI VIDEO PRODUCTION (EDUCATIONAL AUTHORITY) */}
      <section className="section-pad bg-black relative z-10">
         <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="space-y-12">
                  <span className="label-mono">The AI Advantage</span>
                  <h2 className="heading-section">Why Brands Are <br />Switching to <span className="text-primary-accent">AI Production_</span></h2>
                  <div className="space-y-8">
                     {[
                       { t: "Faster Production", d: "Neural workflows reduce turnaround times by 70% without sacrificing quality." },
                       { t: "Scalable Content", d: "Generate thousands of creative variations for multi-platform optimization." },
                       { t: "Cinematic Quality", d: "High-fidelity AI rendering that rivals traditional high-budget cinematography." },
                       { t: "Lower Production Cost", d: "Elite-tier commercials at a fraction of traditional production budgets." }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary-accent/40 transition-all">
                             <span className="text-lg font-black text-white/20 group-hover:text-primary-accent">0{i+1}</span>
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-xl font-bold uppercase text-white group-hover:text-primary-accent transition-colors">{item.t}</h4>
                             <p className="body-copy !text-base opacity-40">{item.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 bg-obsidian group shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
                    alt="AI Video Production Intelligence"
                    fill
                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[4000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-x-12 bottom-12 p-10 rounded-[2.5rem] bg-black/40 backdrop-blur-3xl border border-white/10">
                     <span className="label-mono !text-primary-accent mb-4">Neural Architecture</span>
                     <h3 className="text-3xl font-black uppercase text-white leading-none tracking-tighter">72HR TURNAROUND <br /> GUARANTEED_</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 📊 TRADITIONAL VS AI COMPARISON (AI OVERVIEW OPTIMIZATION) */}
      <section className="section-pad bg-black relative border-y border-white/5 overflow-hidden">
         <div className="container-max">
            <div className="text-center mb-32 space-y-6">
               <span className="label-mono">Efficiency Analytics</span>
               <h2 className="heading-section">Traditional vs <span className="text-primary-accent">AI Production_</span></h2>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                     <tr className="border-b border-white/10">
                        <th className="py-8 label-mono !text-zinc-500">Metric</th>
                        <th className="py-8 label-mono text-zinc-300">Traditional Agency</th>
                        <th className="py-8 label-mono text-primary-accent">DP AI Studio</th>
                     </tr>
                  </thead>
                  <tbody className="text-white">
                     {[
                       { m: "Production Speed", t: "4-8 Weeks", a: "48-72 Hours" },
                       { m: "Average Cost", t: "₹₹₹₹₹ (High)", a: "₹ (Scalable)" },
                       { m: "Scalability", t: "Limited", a: "Unlimited Variations" },
                       { m: "Revision Flexibility", t: "Difficult / Expensive", a: "Instant / Precise" },
                       { m: "Campaign Velocity", t: "Slow", a: "Neural Speed" },
                       { m: "Turnaround Time", t: "Monthly", a: "Weekly Batches" }
                     ].map((row, i) => (
                       <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                          <td className="py-8 font-black uppercase text-xs tracking-widest">{row.m}</td>
                          <td className="py-8 text-zinc-500 line-through opacity-40">{row.t}</td>
                          <td className="py-8 text-primary-accent font-black tracking-tighter text-xl">{row.a}</td>
                       </tr>
                     ))}
                   </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* 🇮🇳 KERALA + INDIA AUTHORITY BLOCK (GEO-AUTHORITY) */}
      <section className="section-pad bg-obsidian relative z-10 overflow-hidden">
         <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="order-2 lg:order-1 relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-primary-accent/10 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <MonitorPlay size={80} className="text-primary-accent/40" />
                  </div>
                  <div className="absolute inset-x-12 bottom-12 p-8 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10">
                     <span className="label-mono !text-primary-accent mb-2">Regional Authority</span>
                     <h3 className="text-xl font-bold uppercase text-white">Serving India's Media Hubs</h3>
                  </div>
               </div>
               <div className="order-1 lg:order-2 space-y-10">
                  <span className="label-mono">Geo-Political Authority</span>
                  <h2 className="heading-section">The Leading AI Video Production <br /><span className="text-primary-accent">Company in Kerala_</span></h2>
                  <p className="body-copy opacity-60 uppercase tracking-widest leading-loose">
                     Strategically headquartered in **Kochi**, we operate as the primary neural production node for brands in **Trivandrum, Bangalore, Chennai, Mumbai, and South India**. DP AI Studio is the definitive leader in cinematic AI advertising and premium video production services.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     {["Kochi", "Trivandrum", "Bangalore", "Mumbai", "Dubai"].map(city => (
                       <div key={city} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 label-mono !text-[10px]">{city}</div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 🏆 PREMIUM CASE STUDIES (BENTO GRID) */}
      <section id="portfolio" className="section-pad bg-black relative z-10">
         <div className="container-max">
            <div className="flex justify-between items-end mb-32">
               <div className="space-y-6">
                  <span className="label-mono">Visual Evidence</span>
                  <h2 className="heading-section">Campaign <br /><span className="text-primary-accent">Intelligence_</span></h2>
               </div>
               <Link href="/portfolio" className="btn-accent h-16 px-10">View All Work</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { t: "SHE Luxury Ad", r: "+320% Reach", c: "45% Conv", d: "72HR Delivery", bg: "bg-blue-500/20" },
                 { t: "Lacrispo Theater", r: "Cinema Ready", c: "8K HDR", d: "National TVC", bg: "bg-primary-accent/20" },
                 { t: "Neural Branding", r: "60% Lower Cost", c: "18 Assets", d: "Global Scale", bg: "bg-zinc-800" }
               ].map((caseStudy, i) => (
                 <div key={i} className={cn("p-12 rounded-[3.5rem] border border-white/5 flex flex-col gap-12 group hover:border-primary-accent/40 transition-all", caseStudy.bg)}>
                    <div className="space-y-4">
                       <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Case Study 0{i+1}</span>
                       <h3 className="text-4xl font-black uppercase text-white leading-none tracking-tighter">{caseStudy.t}</h3>
                    </div>
                    <div className="space-y-4 pt-12 border-t border-white/10">
                       <div className="flex justify-between items-center">
                          <span className="label-mono !text-[10px] opacity-40">Reach Metrics</span>
                          <span className="label-mono !text-[10px] text-white">{caseStudy.r}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="label-mono !text-[10px] opacity-40">Performance</span>
                          <span className="label-mono !text-[10px] text-primary-accent">{caseStudy.c}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="label-mono !text-[10px] opacity-40">Velocity</span>
                          <span className="label-mono !text-[10px] text-white">{caseStudy.d}</span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

       {/* 4. REDESIGNED AUTHORITY BLOCK (The Kerala Brand Narrative) */}
      <section className="relative py-32 md:py-60 px-6 md:px-12 bg-black overflow-hidden border-b border-white/5">
        {/* Kinetic Light Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            {/* Left: Prestigious Brand Narrative */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-6">
                  <div className="h-0.5 w-16 bg-primary-accent" />
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary-accent">Leading Video Production Kerala</span>
                </div>

                <h2 className="heading-section !text-5xl md:!text-8xl">
                  End-to-End <br /> Media <span>Dominance_</span>
                </h2>

                <div className="space-y-10">
                  <p className="body-copy !text-xl md:!text-3xl text-zinc-300 font-light leading-snug">
                    We are a <span className="text-white font-bold">leading video production company in Kerala</span> offering end-to-end media production services including TVCs, brand films, and corporate storytelling.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                    {[
                      { t: "TV Commercials", d: "High-end TVC production" },
                      { t: "Brand Films", d: "Cinematic narratives" },
                      { t: "Corporate Video", d: "Executive storytelling" },
                      { t: "AI Advertising", d: "Neural marketing assets" }
                    ].map(s => (
                      <div key={s.t} className="flex flex-col gap-2">
                        <span className="text-xs font-black text-white uppercase tracking-widest">{s.t}</span>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-primary-accent/40" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="body-copy">
                    Our <span className="text-white font-medium">AI-powered video production studio in Kochi</span> combines cinematic storytelling with generative AI workflows to deliver <span className="text-primary-accent underline underline-offset-8 decoration-primary-accent/30">scalable, high-performance content</span> for brands across India.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 pt-8">
                  <Link 
                    href="/contact" 
                    className="btn-primary"
                  >
                    Start Production <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Immersive Studio Visual */}
            <div className="order-1 lg:order-2">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2 }}
                 className="relative aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden border border-white/10 group shadow-[0_0_100px_-20px_rgba(var(--accent-rgb),0.3)]"
               >
                  <Image 
                    src="/images/kerala-ai-studio-cinematic.png"
                    alt="AI video production company in Kerala - DP AI Studio"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Glassmorphic Overlay Card */}
                  <div className="absolute inset-x-8 bottom-8 md:inset-x-12 md:bottom-12 p-8 md:p-12 rounded-[3rem] bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl">
                     <Cpu size={32} className="text-primary-accent mb-8" />
                     <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">AI Production <br /> Hub_</h3>
                     <p className="text-[10px] md:text-xs text-zinc-400 font-mono uppercase tracking-[0.3em] leading-relaxed">
                        End-to-end media production infrastructure powered by the DP Generation Engine.
                     </p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 🤖 AI AD CONCEPT GENERATOR (HIGH CONVERSION) */}
      <section className="section-pad bg-obsidian border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/10 blur-[150px] rounded-full" />
         </div>
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="space-y-10">
                  <span className="label-mono">Interactive Node</span>
                  <h2 className="heading-section">Generate Your AI <br /><span className="text-primary-accent">Commercial Concept_</span></h2>
                  <p className="body-copy opacity-50 uppercase tracking-widest leading-relaxed">
                     Input your brand parameters and our proprietary Neural Engine will draft a high-authority cinematic commercial concept instantly.
                  </p>
                  <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                     <div className="h-12 w-12 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                        <MessageCircle size={24} />
                     </div>
                     <span className="label-mono !text-[11px] !text-zinc-400">1,200+ Concepts Generated This Week</span>
                  </div>
               </div>
               <div className="p-12 rounded-[3.5rem] bg-black/60 backdrop-blur-3xl border border-white/10 shadow-2xl">
                  <form className="space-y-8">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                           <label className="label-mono !text-[9px] opacity-40">Brand Name</label>
                           <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-mono focus:border-primary-accent outline-none transition-all" placeholder="e.g. SHE Luxury" />
                        </div>
                        <div className="space-y-3">
                           <label className="label-mono !text-[9px] opacity-40">Product Category</label>
                           <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-mono focus:border-primary-accent outline-none transition-all" placeholder="e.g. Fashion" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="label-mono !text-[9px] opacity-40">Campaign Mood</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-mono focus:border-primary-accent outline-none transition-all appearance-none">
                           <option>Neural Cinema</option>
                           <option>High-Velocity Performance</option>
                           <option>Luxury Minimalist</option>
                           <option>Cyberpunk Elegance</option>
                        </select>
                     </div>
                     <div className="space-y-3">
                        <label className="label-mono !text-[9px] opacity-40">Target Platform</label>
                        <div className="flex gap-4">
                           {["Instagram", "YouTube", "Theater", "TVC"].map(p => (
                             <button key={p} type="button" className="flex-1 py-3 rounded-lg border border-white/5 bg-white/5 text-[9px] font-mono hover:bg-primary-accent hover:text-black transition-all">{p}</button>
                           ))}
                        </div>
                     </div>
                     <button type="button" className="w-full py-6 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-xs hover:scale-[1.02] transition-all shadow-xl shadow-primary-accent/20">
                        Generate Concept_
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* 5. INDUSTRIES (H2: Industries We Serve) */}
      <section id="industries">
        <Suspense fallback={<div className="h-96 bg-black" />}>
           <IndustriesSection />
        </Suspense>
      </section>

      {/* 6. STUDIO ADVANTAGE (H2: Why Brands Choose Our Production Studio) */}
      <section className="py-24 md:py-40 px-4 md:px-12 bg-black relative border-b border-white/5">
         <div className="container-max">
            <SectionHeader h2 tag="Why Choose Us" title={<>Why Brands Choose Our <br />Production <span>Studio_</span></>} align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { t: "Expert Cinematography", d: "Professional camera crews and meticulous lighting design.", i: Zap },
                 { t: "AI Integration", d: "Modern neural rendering for high-velocity output.", i: Cpu },
                 { t: "Growth ROI", d: "Strategically crafted content built for high conversions.", i: BarChart3 },
                 { t: "Global Mastering", d: "Industry-standard post-production for all platforms.", i: Activity }
               ].map(adv => (
                 <div key={adv.t} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all group hover:bg-white/[0.04]">
                    <adv.i size={32} className="text-primary-accent mb-10 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold uppercase tracking-widest text-white mb-6 group-hover:text-primary-accent transition-colors">{adv.t}</h4>
                    <p className="label-mono !text-zinc-500 !text-[11px] !leading-relaxed uppercase tracking-widest font-normal">{adv.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 🧩 MASSIVE FAQ SYSTEM (AI SEARCH OPTIMIZATION) */}
      <section className="section-pad bg-black relative border-t border-white/5">
         <div className="container-max">
            <div className="text-center mb-32 space-y-6">
               <span className="label-mono">Knowledge Base</span>
               <h2 className="heading-section">Frequently Asked <br /><span className="text-primary-accent">Questions_</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
               {[
                 { q: "What is AI video production?", a: "AI video production utilizes neural networks and generative models to create, enhance, and optimize cinematic content with unprecedented speed and precision." },
                 { q: "How much does AI commercial production cost in India?", a: "AI commercial production at DP AI Studio offers elite-tier results at 40-60% lower cost than traditional high-budget agencies, starting with scalable packages for premium brands." },
                 { q: "Can AI create luxury commercials?", a: "Yes. Our proprietary neural pipelines are specifically engineered for luxury fashion, jewelry, and high-end tech brands, delivering Apple-grade visual fidelity." },
                 { q: "Does DP AI Studio serve Kerala, Bangalore, and Mumbai?", a: "We are headquartered in Kerala with production nodes in Kochi and Trivandrum, serving national and global brands across Bangalore, Mumbai, Chennai, and Dubai." },
                 { q: "How long does AI production take?", a: "Standard commercial batches are delivered in 48-72 hours, representing a 10x velocity increase over traditional production timelines." },
                 { q: "Is AI video production affordable for startups?", a: "Our AI workflows allow us to provide high-fidelity video solutions that were previously only accessible to enterprise-level budgets, making us the ideal partner for high-growth startups." }
               ].map((faq, i) => (
                 <div key={i} className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6 group hover:border-white/20 transition-all">
                    <h3 className="text-xl font-bold uppercase text-white group-hover:text-primary-accent transition-colors flex items-start gap-4">
                       <span className="text-primary-accent/40 font-mono text-xs mt-1">Q{i+1}.</span>
                       {faq.q}
                    </h3>
                    <p className="body-copy !text-base opacity-40 pl-10 leading-relaxed uppercase tracking-widest">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 💎 FINAL CINEMATIC CTA */}
      <section className="py-40 md:py-60 px-6 md:px-12 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-accent-rgb),0.1)_0%,transparent_70%)] animate-pulse" />
         <div className="container-max relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="space-y-16"
            >
               <span className="label-mono !text-primary-accent">The Future is Here</span>
               <h2 className="text-5xl md:text-9xl font-black text-white uppercase leading-[0.8] tracking-tighter">
                  Ready to Create <br />
                  India's Next Viral <br />
                  <span className="text-primary-accent underline decoration-white/10 underline-offset-16">AI Commercial?_</span>
               </h2>
               <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
                  <Link href="/contact" className="h-24 px-16 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 hover:bg-primary-accent hover:text-white transition-all shadow-2xl active:scale-95">
                     Book Consultation <ArrowRight size={20} />
                  </Link>
                  <Link href="https://wa.me/917012941696" className="h-24 px-16 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 hover:bg-white/10 transition-all shadow-2xl active:scale-95 backdrop-blur-3xl">
                     WhatsApp Now <MessageCircle size={20} />
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>

      <WhatsAppChat />
      <VideoLightbox 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo || ""} 
      />
    </main>
  );
}
