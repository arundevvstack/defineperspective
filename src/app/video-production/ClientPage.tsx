"use client";

import { useState } from "react";
import GlassNavbar from "@/components/glass-navbar";
import VideoProductionHero from "@/components/video-hub/VideoProductionHero";
import VideoProductionPipeline from "@/components/video-hub/VideoProductionPipeline";
import AIVideoROICalculator from "@/components/ai-video-hub/AIVideoROICalculator";
import CaseStudyBento from "@/components/ai-video-hub/CaseStudyBento";
import AIVideoComparison from "@/components/ai-video-hub/AIVideoComparison";
import EfficiencyLeadMagnet from "@/components/ai-video-hub/EfficiencyLeadMagnet";
import BlueprintLeadMagnet from "@/components/ai-video-hub/BlueprintLeadMagnet";
import FAQSection from "@/components/faq-section";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import { 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Zap, 
  Target, 
  Clapperboard, 
  Video, 
  Camera, 
  Sparkles, 
  Film,
  PlayCircle 
} from "lucide-react";
import Link from "next/link";
import VideoLightbox from "@/components/ai-video-hub/VideoLightbox";

export default function VideoProductionClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden theme-gold">
      <NeuralSeoLayer />
      <GlassNavbar />
      
      <VideoProductionHero />
      
      {/* 🎬 SECTION 1: THE AUTHORITY POSITIONING */}
      <section className="section-pad border-y border-white/5 bg-black/40">
         <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="heading-section">
                     Why Leading Brands <br />
                     <span className="text-primary-accent">Choose Our Vision_</span>
                  </h2>
                  <p className="body-copy">
                     In a world of noise, <span className="text-white font-bold">Cinematic Excellence</span> is the only way to stand out. We don't just record video; we architect visual experiences that penetrate culture and define market authority.
                     <br /><br />
                     As India's premier <span className="text-primary-accent font-bold">Video Production Studio</span>, we serve global brands and visionary startups across Kochi, Mumbai, and Bangalore with broadcast-grade TVCs and high-velocity social content.
                  </p>
                  
                  <div className="py-6">
                     <p className="text-lg md:text-xl font-black uppercase text-white leading-tight max-w-2xl border-l-2 border-primary-accent pl-6">
                        From 8K television commercials to viral reel campaigns, we deliver high-fidelity storytelling that drives ROI.
                     </p>
                  </div>
                  <div className="pt-2">
                     <Link href="https://www.youtube.com/@DefinePerspective" target="_blank" className="btn-glass w-fit">
                        Explore Our Full Portfolio <Play size={16} fill="currentColor" />
                     </Link>
                  </div>
                  <div className="space-y-6">
                     {[
                       { t: "Broadcast Grade Quality", d: "Industry-standard 8K production rendered for cinema and television." },
                       { t: "Strategic Storytelling", d: "Content engineered to align with your brand's commercial objectives." },
                       { t: "Platform Dominance", d: "Optimized delivery for YouTube, Meta, and modern digital ecosystems." }
                     ].map(point => (
                       <div key={point.t} className="flex gap-6 group">
                          <div className="h-12 w-12 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-all">
                             <CheckCircle2 size={24} />
                          </div>
                          <div className="space-y-1">
                             <h4 className="heading-card">{point.t}</h4>
                             <p className="label-mono opacity-50">{point.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group shadow-2xl">
                  <div className="absolute inset-0 bg-primary-accent/5 z-10 group-hover:opacity-0 transition-opacity" />
                  <img 
                    src="/artifacts/media__1778572986694.jpg" 
                    alt="Premium Video Production India" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
               </div>
            </div>
         </div>
      </section>

      {/* 🎬 FEATURED PROJECT: TVC SHOWCASE */}
      <section className="section-pad bg-obsidian border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary-accent/[0.02] pointer-events-none" />
         
         <div className="container-max relative z-10">
            <div className="space-y-8 text-center mb-20">
               <span className="label-mono">
                  Featured TVC {" // "} Brand Campaign
               </span>
               <h2 className="heading-hero">
                  BB Serum <br />
                  <span className="text-primary-accent">TV Commercial_</span>
               </h2>
               <p className="body-copy max-w-2xl mx-auto">
                  A high-end television commercial for BB Serum, showcasing our ability to blend elegance with commercial impact.
               </p>
            </div>

            <div 
              className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
              onClick={() => setActiveVideo("8TntXDekuE8")}
            >
               <img 
                 src="https://img.youtube.com/vi/8TntXDekuE8/maxresdefault.jpg" 
                 alt="BB Serum TVC" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                     <div className="absolute h-24 w-24 rounded-full bg-black/40 backdrop-blur-md -translate-x-4 z-10" />
                     <div className="relative h-24 w-24 rounded-full bg-primary-accent text-black flex items-center justify-center z-20 shadow-2xl">
                        <Play size={40} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
               </div>

               <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                  <div className="space-y-4">
                     <div className="flex gap-2">
                        <span className="px-4 py-1.5 rounded-full bg-[#0070F3] text-white text-[9px] font-black uppercase tracking-widest">Brand Ad</span>
                        <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-[9px] font-black uppercase tracking-widest">8K Cinematic</span>
                     </div>
                     <div className="space-y-1">
                        <h3 className="heading-section !text-3xl md:!text-5xl !leading-none">BB Serum TVC</h3>
                        <p className="label-mono opacity-60">Status: Active Campaign // Code: BBS-092</p>
                     </div>
                  </div>
                  <div className="btn-primary !h-16">
                     Watch Full Video
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 🎬 SECOND HIGHLIGHT: BRAND FILM */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div 
                 className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
                 onClick={() => setActiveVideo("HuX40LSwF7M")}
               >
                  <img 
                    src="https://img.youtube.com/vi/HuX40LSwF7M/maxresdefault.jpg" 
                    alt="Dotspace Brand Film" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                        <div className="absolute h-16 w-16 rounded-full bg-black/40 backdrop-blur-md -translate-x-3 z-10" />
                        <div className="relative h-16 w-16 rounded-full bg-primary-accent text-black flex items-center justify-center z-20 shadow-2xl">
                           <Play size={24} fill="currentColor" className="ml-1" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <span className="label-mono">
                     Corporate Identity {" // "} Brand Film
                  </span>
                  <h2 className="heading-section">
                     Dotspace <br />
                     <span className="text-primary-accent">Brand Film_</span>
                  </h2>
                  <p className="body-copy">
                     A cinematic narrative for Dotspace, redefining modern workspaces through light, geometry, and collaborative storytelling.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Grade</span>
                        <span className="text-sm font-black text-white uppercase">Premium Identity</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Visuals</span>
                        <span className="text-sm font-black text-white uppercase">4K RAW Cinema</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("HuX40LSwF7M")} className="btn-accent w-fit !h-16">
                     Watch The Film <ArrowRight size={16} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      <VideoProductionPipeline />
      
      <CaseStudyBento />
      
      <AIVideoComparison />
      
      <AIVideoROICalculator />
      
      <EfficiencyLeadMagnet />

      {/* 🎬 PRODUCTION SERVICES SILOS */}
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

      {/* 🎬 PORTFOLIO BENTO GRID */}
      <section id="portfolio" className="section-pad bg-black border-t border-white/5">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
               <div className="space-y-4">
                  <span className="label-mono">Selected Works {" // "} Define Perspective</span>
                  <h2 className="heading-section">
                     Video <br />
                     <span className="text-primary-accent">Portfolio_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  Explore our latest projects across television, digital ads, and corporate storytelling.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { id: "8TntXDekuE8", title: "BB Serum TVC", type: "TV Commercial" },
                 { id: "HG24sn19Dp0", title: "OhMyGene Ad", type: "Micro AD" },
                 { id: "67IExKhWqd0", title: "SP Wellness Ad", type: "Healthcare" },
                 { id: "HuX40LSwF7M", title: "Dotspace Film", type: "Brand Film" },
                 { id: "D94tWRtANhI", title: "Lulu Mall Reel", type: "Social Media" },
                 { id: "INpn97C16yM", title: "BB App TVC", type: "Commercial" },
                 { id: "sNp1a5I6WsI", title: "DP Showreel", type: "Studio Reel" },
                 { id: "5kOnWP-dZZY", title: "SHE Luxury Ad", type: "Product Ad" },
                 { id: "vGijXeVUS74", title: "Lacrispo Snax", type: "Cinema Ad" }
               ].map((item) => (
                 <div 
                   key={item.id} 
                   className="relative aspect-video rounded-xl overflow-hidden group border border-white/5 cursor-pointer shadow-2xl"
                   onClick={() => setActiveVideo(item.id)}
                 >
                    <img 
                      src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-80"
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

      <BlueprintLeadMagnet />

      <FAQSection />

      <VideoLightbox 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo || ""} 
      />
    </main>
  );
}
