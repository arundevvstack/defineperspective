"use client";

import { useState } from "react";
import GlassNavbar from "@/components/glass-navbar";
import { 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Zap, 
  Target, 
  Cpu, 
  Sparkles, 
  BrainCircuit, 
  PlayCircle,
  Video,
  Clapperboard,
  Camera,
  Film
} from "lucide-react";
import Link from "next/link";
import VideoLightbox from "@/components/ai-video-hub/VideoLightbox";

export default function VideoProductionClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden theme-gold">
      <GlassNavbar />
      
      {/* 🎬 PREMIUM HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-obsidian">
        {/* Background Visuals & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[1000px] h-[1000px] bg-primary-accent/5 blur-[250px] rounded-full opacity-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 blur-[200px] rounded-full opacity-20" />
        </div>

        <div className="container-max relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Status Badge */}
            <div className="group flex items-center gap-4 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl mb-12 hover:border-primary-accent/40 hover:bg-white/10 transition-all cursor-default shadow-2xl shadow-primary-accent/5">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent"></span>
              </div>
              <span className="label-mono !text-zinc-400 group-hover:!text-white transition-colors">
                India's Top <span className="text-primary-accent">Premium Video Production Studio_</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6 mb-16 max-w-7xl">
              <h1 className="heading-hero">
                Cinematic <br />
                <span className="text-primary-accent">Video Production_</span> <br />
                Agency in India
              </h1>

              <p className="body-copy !text-lg md:!text-xl max-w-5xl mx-auto">
                Broadcasting excellence through <span className="text-white font-bold">high-end commercials</span>, brand films, and viral social media campaigns for global brands.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl justify-center mb-24">
              <button
                onClick={() => setActiveVideo("INpn97C16yM")}
                className="btn-primary group"
              >
                Watch Our Showreel
                <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Play size={20} fill="currentColor" />
                </div>
              </button>
              <Link
                href="https://www.youtube.com/@DefinePerspective"
                target="_blank"
                className="btn-accent group"
              >
                See All Projects
                <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <Play size={20} fill="currentColor" />
                </div>
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-7xl pt-12 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity">
              {[
                "TVC Production",
                "Cinematic Ad Films",
                "Viral Reel Campaigns",
                "Corporate Identity",
                "Luxury Brand Films",
                "4K Broadcast Grade"
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

        {/* Background Cinematic Visual */}
        <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
           <img 
             src="/artifacts/media__1778571632209.jpg" 
             alt="Premium Cinematic Background" 
             className="w-full h-full object-cover grayscale brightness-50"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        </div>
      </section>

      {/* 🎥 HIGHLIGHT 1: TV COMMERCIAL (BB APP) */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <span className="label-mono">Featured TVC {" // "} Brand Campaign</span>
                  <h2 className="heading-section">
                     BB App <br />
                     <span className="text-primary-accent">TV Commercial_</span>
                  </h2>
                  <p className="body-copy">
                     A high-energy television commercial produced for the BB App. This project highlights our ability to deliver broadcast-quality TVCs that capture attention and drive user engagement.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Quality</span>
                        <span className="text-sm font-black text-white uppercase">Broadcast Grade</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Category</span>
                        <span className="text-sm font-black text-white uppercase">TV Commercial</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("INpn97C16yM")} className="btn-primary w-fit !h-16">
                     Watch Full Video <Play size={16} fill="currentColor" />
                  </button>
               </div>

               <div 
                 className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
                 onClick={() => setActiveVideo("INpn97C16yM")}
               >
                  <img 
                    src="https://img.youtube.com/vi/INpn97C16yM/maxresdefault.jpg" 
                    alt="BB App TVC" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative h-20 w-20 rounded-full bg-primary-accent text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={32} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 🎥 HIGHLIGHT 2: BRAND FILM (DOTSPACE) */}
      <section className="section-pad bg-obsidian border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div 
                 className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black order-2 lg:order-1"
                 onClick={() => setActiveVideo("HuX40LSwF7M")}
               >
                  <img 
                    src="https://img.youtube.com/vi/HuX40LSwF7M/maxresdefault.jpg" 
                    alt="Dotspace Brand Film" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative h-20 w-20 rounded-full bg-primary-accent text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={32} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
               </div>

               <div className="space-y-8 order-1 lg:order-2">
                  <span className="label-mono">Corporate Identity {" // "} Brand Film</span>
                  <h2 className="heading-section">
                     Dotspace <br />
                     <span className="text-primary-accent">Brand Film_</span>
                  </h2>
                  <p className="body-copy">
                     A cinematic brand story for Dotspace, focusing on modern workspaces and collaborative environments. We specialize in creating high-end corporate films that reflect your brand values.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Style</span>
                        <span className="text-sm font-black text-white uppercase">Premium Corporate</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Visuals</span>
                        <span className="text-sm font-black text-white uppercase">4K Cinematic</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("HuX40LSwF7M")} className="btn-accent w-fit !h-16">
                     Watch The Film <ArrowRight size={16} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 🎥 HIGHLIGHT 3: SOCIAL MEDIA (LULU MALL) */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <span className="label-mono">Viral Social Media {" // "} Reels & Content</span>
                  <h2 className="heading-section">
                     Lulu Mall <br />
                     <span className="text-primary-accent">Reel Campaign_</span>
                  </h2>
                  <p className="body-copy">
                     Engaging and high-velocity social media content created for Lulu Mall. We produce viral-worthy Reels and TikToks that capture modern audiences and trend on major platforms.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Platform</span>
                        <span className="text-sm font-black text-white uppercase">Instagram & TikTok</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Impact</span>
                        <span className="text-sm font-black text-white uppercase">Viral Growth</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("D94tWRtANhI")} className="btn-primary w-fit !h-16">
                     View Campaign <Play size={16} fill="currentColor" />
                  </button>
               </div>

               <div 
                 className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
                 onClick={() => setActiveVideo("D94tWRtANhI")}
               >
                  <img 
                    src="https://img.youtube.com/vi/D94tWRtANhI/maxresdefault.jpg" 
                    alt="Lulu Mall Reel" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative h-20 w-20 rounded-full bg-primary-accent text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={32} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 🚀 PRODUCTION PIPELINE - MATCHING AI STYLE */}
      <section className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-32 space-y-8">
            <span className="text-primary-accent font-mono text-[10px] uppercase font-black underline decoration-2 underline-offset-8">
              Creative Framework {" // "} Production_Delta
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
               The Production <br />
               <span className="text-primary-accent">Pipeline_</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto uppercase leading-relaxed">
              From creative concept to 4K broadcast delivery, we follow a high-fidelity workflow for world-class results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clapperboard, title: "Creative Blueprint", desc: "Crafting a unique narrative strategy and storyboard tailored to your brand's specific identity." },
              { icon: Camera, title: "High-End Cinematography", desc: "Filming with professional 8K camera systems and lighting for a true cinematic experience." },
              { icon: Film, title: "Premium Post-Production", desc: "Expert editing, color grading, and VFX that transform raw footage into a broadcast masterpiece." },
              { icon: Mic2, title: "Sound Architecture", desc: "Professional sound design and voiceovers recorded in high-end studios for maximum impact." },
              { icon: MonitorCheck, title: "Broadcast QC", desc: "Rigorous quality control to ensure every frame meets global television and digital standards." },
              { icon: Share2, title: "Omnichannel Delivery", desc: "Optimizing content for cinema, television, and every major social media platform." }
            ].map((step, idx) => (
              <div key={idx} className="p-12 rounded-[4rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary-accent/30 transition-all group">
                <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary-accent mb-12 group-hover:scale-110 transition-transform shadow-2xl">
                  <step.icon size={36} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-6 group-hover:text-primary-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-zinc-500 uppercase leading-relaxed font-light">
                  {step.desc}
                </p>
                <div className="mt-12 flex items-center gap-4 opacity-10 group-hover:opacity-40 transition-opacity">
                   <div className="h-px flex-1 bg-white" />
                   <div className="h-1.5 w-1.5 rounded-full bg-primary-accent" />
                   <span className="text-[8px] font-mono text-white uppercase">STEP_0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 PRODUCTION SERVICES SILOS */}
      <section className="section-pad bg-black border-t border-white/5">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
               <div className="space-y-4">
                  <span className="label-mono">What We Offer {" // "} Full-Scale Production</span>
                  <h2 className="heading-section">
                     Our <br />
                     <span className="text-primary-accent">Services_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  Professional video production services tailored to your brand's unique storytelling needs.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "TV Commercials", services: ["Broadcast TVCs", "Digital Ads", "Cinema Commercials", "National Campaigns"], icon: Clapperboard },
                 { title: "Brand Films", services: ["Company Profiles", "Product Launches", "Founder Stories", "Brand Manifestos"], icon: Video },
                 { title: "Social Media Reels", services: ["Instagram Reels", "TikTok Content", "YouTube Shorts", "Viral Campaigns"], icon: Target },
                 { title: "Corporate Videos", services: ["Internal Comms", "Event Coverage", "Training Videos", "Testimonials"], icon: Camera },
                 { title: "E-comm Videos", services: ["Product Demos", "Amazon Listings", "Explainer Videos", "360 Views"], icon: Sparkles },
                 { title: "Post-Production", services: ["High-End Editing", "VFX & Motion Graphics", "Color Grading", "Sound Design"], icon: Film }
               ].map((silo, idx) => (
                 <div key={idx} className="p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group flex flex-col gap-8">
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

      {/* 📂 PORTFOLIO BENTO GRID */}
      <section id="portfolio" className="section-pad bg-black border-t border-white/5">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
               <div className="space-y-4">
                  <span className="label-mono">Our Portfolio {" // "} Define Perspective</span>
                  <h2 className="heading-section">
                     Selected <br />
                     <span className="text-primary-accent">Projects_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  Browse our portfolio of high-quality videos created for world-class brands.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { id: "8TntXDekuE8", title: "BB Serum TVC", type: "TV Commercial" },
                 { id: "HG24sn19Dp0", title: "OhMyGene Ad", type: "Micro AD" },
                 { id: "67IExKhWqd0", title: "SP Wellness Ad", type: "Healthcare" },
                 { id: "HuX40LSwF7M", title: "Dotspace Film", type: "Brand Film" },
                 { id: "D94tWRtANhI", title: "Lulu Mall Reel", type: "Social Media" },
                 { id: "INpn97C16yM", title: "BB App TVC", type: "Commercial" }
               ].map((item) => (
                 <div 
                   key={item.id} 
                   className="relative aspect-video rounded-xl overflow-hidden group border border-white/5 cursor-pointer"
                   onClick={() => setActiveVideo(item.id)}
                 >
                    <img 
                      src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                       <div className="space-y-1">
                          <span className="text-[9px] font-mono text-primary-accent uppercase tracking-widest">{item.type}</span>
                          <h4 className="text-sm font-black text-white uppercase tracking-tighter">{item.title}</h4>
                       </div>
                       <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10">
                          <Play size={16} fill="currentColor" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <AIVideoComparison />
      
      <EfficiencyLeadMagnet />

      <section className="section-pad bg-obsidian border-y border-white/5">
         <div className="container-max text-center space-y-12">
            <h2 className="heading-hero">
               Ready to Create <br />Your <span className="text-primary-accent">Next Masterpiece?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <Link href="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={18} className="ml-2" />
               </Link>
               <Link href="https://wa.me/917012941696" className="btn-glass">
                  WhatsApp Us <Play size={18} fill="currentColor" className="ml-2" />
               </Link>
            </div>
         </div>
      </section>

      <BlueprintLeadMagnet />

      <VideoLightbox 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo || ""} 
      />
    </main>
  );
}
