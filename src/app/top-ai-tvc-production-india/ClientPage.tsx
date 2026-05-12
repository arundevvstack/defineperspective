"use client";

import { useState } from "react";
import GlassNavbar from "@/components/glass-navbar";
import {
  Zap,
  Target,
  Cpu,
  Sparkles,
  Clapperboard,
  PlayCircle,
  MessageCircle,
  ArrowRight,
  Globe,
  Shield,
  Star,
  CheckCircle2,
  Video,
  MonitorPlay,
  Play,
  BrainCircuit,
  Film,
  Camera
} from "lucide-react";
import Link from "next/link";
import LiteYouTube from "@/components/lite-youtube";
import LeadCaptureForm from "@/components/lead-capture-form";
import VideoLightbox from "@/components/ai-video-hub/VideoLightbox";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import EfficiencyLeadMagnet from "@/components/ai-video-hub/EfficiencyLeadMagnet";
import AIVideoComparison from "@/components/ai-video-hub/AIVideoComparison";
import { cn } from "@/lib/utils";

export default function TopAITVCProductionIndiaClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: "5kOnWP-dZZY", title: "SHE Luxury Ad", type: "Luxury Commercial" },
    { id: "vGijXeVUS74", title: "Lacrispo Theater Ad", type: "Cinema Commercial" },
    { id: "ZKsTHF772K0", title: "AI Brand Narrative", type: "Brand Film" },
    { id: "HtomLPOzkCU", title: "Neural Showcase", type: "Experimental AI" }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden theme-blue">
      <NeuralSeoLayer />
      <GlassNavbar />

      {/* 🎬 AUTHORITY HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-obsidian">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[1000px] h-[1000px] bg-primary-accent/5 blur-[250px] rounded-full opacity-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 blur-[200px] rounded-full opacity-20" />
        </div>

        <div className="container-max relative z-10">
          <div className="flex flex-col items-center text-center">
            
            <div className="group flex items-center gap-4 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl mb-12 hover:border-primary-accent/40 hover:bg-white/10 transition-all cursor-default shadow-2xl shadow-primary-accent/5">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent"></span>
              </div>
              <span className="label-mono !text-zinc-400 group-hover:!text-white transition-colors">
                India's Top <span className="text-primary-accent">AI TVC Production Studio_</span>
              </span>
            </div>

            <div className="space-y-6 mb-16 max-w-7xl">
              <h1 className="heading-hero">
                Top AI TVC <br />
                <span className="text-primary-accent">Production India_</span>
              </h1>

              <p className="body-copy !text-lg md:!text-xl max-w-5xl mx-auto">
                Define Perspective is the premier **AI TVC Production Company in India, Kerala, and South India**. We deliver cinematic high-fidelity commercials for global luxury brands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl justify-center mb-24">
              <button
                onClick={() => setActiveVideo("5kOnWP-dZZY")}
                className="btn-primary group"
              >
                Watch Showcase
                <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Play size={20} fill="currentColor" />
                </div>
              </button>
              <Link
                href="#lead-capture"
                className="btn-accent group"
              >
                Get Custom Quote
                <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-7xl pt-12 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity">
              {[
                "AI Ad Filmmaking",
                "Luxury TVCs",
                "Kerala Media Hub",
                "South India Node",
                "Neural Post-Production",
                "Cinema Grade Output"
              ].map((text) => (
                <div key={text} className="flex items-center justify-center gap-3">
                   <CheckCircle2 size={12} className="text-primary-accent" />
                    <span className="label-mono !text-zinc-400 whitespace-nowrap">
                     {text}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
           <img 
             src="/artifacts/media__1778572504447.jpg" 
             alt="AI TVC Background" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        </div>
      </section>

      {/* 🌟 ELITE FLAGSHIP PRODUCTIONS (MASTER-GRADE FEATURING) */}
      <section className="section-pad bg-black/80 relative overflow-hidden">
         {/* Background Telemetry Grid */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         
         <div className="container-max relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
                     <span className="label-mono !text-primary-accent">Flagship Productions {" // "} Master Grade</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
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
                          <div className="h-24 w-24 rounded-full bg-primary-accent/10 backdrop-blur-3xl border border-primary-accent/40 text-primary-accent flex items-center justify-center group-hover:scale-125 group-hover:bg-primary-accent group-hover:text-black transition-all duration-500">
                             <Play size={36} fill="currentColor" className="ml-1" />
                          </div>
                       </div>

                       {/* Location Stamp */}
                       <div className="absolute bottom-8 right-8 label-mono !text-[8px] !text-white/20 uppercase tracking-[0.4em]">
                          {vid.location}
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
                            className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary-accent hover:text-black transition-all group/btn"
                          >
                             <span className="label-mono !text-xs">Initialize Stream</span>
                             <MonitorPlay size={18} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                          <Link 
                            href="#lead-capture"
                            className="flex items-center gap-4 px-8 py-4 rounded-full border border-primary-accent/40 text-primary-accent hover:bg-primary-accent/10 transition-all"
                          >
                             <span className="label-mono !text-xs">Project Specs</span>
                             <ArrowRight size={18} />
                          </Link>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 🎞️ CINEMATIC SHOWCASE - ADDITIONAL VIDEOS */}
      <section className="section-pad bg-obsidian border-t border-white/5">
         <div className="container-max">
            <div className="flex items-center gap-8 mb-20">
               <h2 className="heading-section !mb-0">Extended <span className="text-primary-accent">Showcase_</span></h2>
               <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               {videos.filter(v => v.id !== "5kOnWP-dZZY" && v.id !== "vGijXeVUS74").map((vid) => (
                 <div 
                   key={vid.id}
                   className="relative aspect-video rounded-[2rem] overflow-hidden group border border-white/10 cursor-pointer bg-black"
                   onClick={() => setActiveVideo(vid.id)}
                 >
                    <img 
                      src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`} 
                      alt={vid.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="h-20 w-20 rounded-full bg-primary-accent text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <Play size={32} fill="currentColor" className="ml-1" />
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-8">
                       <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest mb-2 block">{vid.type}</span>
                       <h3 className="text-xl font-black uppercase text-white tracking-tighter">{vid.title}</h3>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 🚀 SERVICE INTELLIGENCE MATRIX */}
      <section className="section-pad bg-obsidian">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
               <div className="space-y-4">
                  <span className="label-mono">AI TVC Solutions {" // "} South India Hub</span>
                  <h2 className="heading-section">
                     Related <br />
                     <span className="text-primary-accent">Services_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  Comprehensive AI video production services for brands in Kerala, India, and beyond.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "AI Ad Filmmaking", services: ["Luxury TV Commercials", "Cinema Ads", "National Brand Films"], icon: Clapperboard },
                 { title: "Performance Ads", services: ["Meta / YouTube Ads", "High-ROAS Creatives", "A/B Variations"], icon: Target },
                 { title: "Neural Post-Studio", services: ["AI VFX & Compositing", "Video Upscaling", "Neural Color Grading"], icon: Cpu },
                 { title: "Product AI Visuals", services: ["Automated Product Ads", "E-comm Videos", "Lifestyle Synthesis"], icon: Sparkles },
                 { title: "Strategic Media", services: ["Market Analysis", "Campaign Strategy", "Platform Optimization"], icon: Globe },
                 { title: "Global Delivery", services: ["UAE Market Scaling", "National Campaigns", "Omnichannel Assets"], icon: Shield }
               ].map((silo, idx) => (
                 <div key={idx} className="p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group flex flex-col gap-8">
                    <div className="h-14 w-14 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-all">
                       <silo.icon size={28} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="heading-card !text-lg">{silo.title}</h3>
                       <ul className="space-y-3">
                          {silo.services.map(s => (
                            <li key={s} className="label-mono !text-zinc-500 flex items-center gap-3">
                               <div className="h-1 w-1 bg-primary-accent/30 rounded-full" />
                               {s}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 📊 REGIONAL AUTHORITY BLOCKS */}
      <section className="section-pad bg-black/60 border-t border-white/5">
         <div className="container-max text-center">
            <h2 className="heading-section mb-24">
               Serving <br /><span className="text-primary-accent">India & Kerala_</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
               {[
                 { city: "Kerala", role: "Production Alpha Node", desc: "India's hub for creative AI talent and high-fidelity production." },
                 { city: "South India", role: "Regional Authority", desc: "Leading the neural advertising wave across Bangalore, Kochi & Chennai." },
                 { city: "India", role: "National HQ", desc: "Enterprise-grade AI TVC production for national luxury brands." }
               ].map(hub => (
                 <div key={hub.city} className="p-16 bg-obsidian hover:bg-white/[0.03] transition-colors group flex flex-col items-center gap-6">
                    <span className="text-3xl font-black text-white group-hover:text-primary-accent transition-colors">{hub.city}</span>
                    <span className="label-mono text-primary-accent/40">{hub.role}</span>
                    <p className="label-mono opacity-50 text-[11px] leading-relaxed">{hub.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <AIVideoComparison />
      
      <EfficiencyLeadMagnet />

      {/* 💰 LEAD CAPTURE */}
      <section id="lead-capture" className="section-pad bg-obsidian border-y border-white/5">
         <div className="container-max grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
               <h2 className="heading-hero">
                  Partner with <br /><span className="text-primary-accent">DP AI Studio_</span>
               </h2>
               <div className="space-y-10">
                  {[
                    { t: "Elite AI Talent", d: "Next-gen visual engineers mastering the latest neural workflows." },
                    { t: "South India Hub", d: "Deep roots in Kerala's cinematic heritage with global scale." },
                    { t: "Data-Driven TVCs", d: "Scientific ad structures designed for maximum conversion." }
                  ].map((node, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-all">
                          <Cpu size={28} />
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">{node.t}</h4>
                          <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed font-light">{node.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <LeadCaptureForm />
         </div>
      </section>

      <VideoLightbox 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo || ""} 
      />
    </main>
  );
}
