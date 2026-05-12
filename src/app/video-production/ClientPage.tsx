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
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden theme-red">
      <NeuralSeoLayer />
      <GlassNavbar />
      
      <VideoProductionHero />
      
      {/* ðŸŽ¬ AUTHORITY POSITIONING */}
      <section className="section-pad border-y border-white/5 bg-black/40">
         <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="heading-section">
                     Why Top Brands <br />
                     <span className="text-primary-accent">Work With Us_</span>
                  </h2>
                  <p className="body-copy">
                     Good video helps your brand get noticed. We make <span className="text-white font-bold">professional videos</span> that look great and connect with your audience.
                     <br /><br />
                     We are a leading <span className="text-primary-accent font-bold">Video Production Company in India</span>. We work with brands in Kochi, Mumbai, and Bangalore to create TVCs, brand films, and social media content.
                  </p>
                  
                  <div className="py-6">
                     <p className="text-lg md:text-xl font-black uppercase text-white leading-tight max-w-2xl border-l-2 border-primary-accent pl-6">
                        From TV commercials to social media videos, we make content that gets results.
                     </p>
                  </div>
                  <div className="pt-2">
                     <Link href="https://www.youtube.com/@DefinePerspective" target="_blank" className="btn-glass w-fit !text-sm md:!text-base">
                        See Our Work <Play size={16} fill="currentColor" />
                     </Link>
                  </div>
                  <div className="space-y-6">
                     {[
                       { t: "Professional Quality", d: "We shoot in 4K and 8K for TV, cinema, and digital platforms." },
                       { t: "Clear Storytelling", d: "We build stories around your brand goals, not just visuals." },
                       { t: "Made for Every Platform", d: "We deliver content ready for YouTube, Instagram, Meta, and TV." }
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
                    src="/images/kerala-ai-studio-cinematic.png" 
                    alt="Premium Video Production India â€” Define Perspective Studio Kerala" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
               </div>
            </div>
         </div>
      </section>

      {/* ðŸŽ¬ EXCLUSIVE REVEAL: LACRISPO */}
      <section className="section-pad bg-obsidian border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary-accent/[0.02] pointer-events-none" />
         
         <div className="container-max relative z-10">
            <div className="space-y-8 text-center mb-20">
               <span className="label-mono">
                  Featured Project {" // "} Brand Film
               </span>
               <h2 className="heading-hero">
                  BB App <br />
                  <span className="text-primary-accent">TVC Production_</span>
               </h2>
               <p className="body-copy max-w-2xl mx-auto">
                  A full-scale TVC produced by Define Perspective, showcasing our end-to-end video production capabilities for leading brands in India.
               </p>
            </div>

            <div 
              className="relative aspect-video rounded-3xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
              onClick={() => setActiveVideo("INpn97C16yM")}
            >
               <img 
                 src="https://img.youtube.com/vi/INpn97C16yM/hqdefault.jpg" 
                 alt="BB App TVC - Define Perspective Video Production India" 
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
                        <span className="px-4 py-1.5 rounded-full bg-primary-accent text-black text-[9px] font-black uppercase tracking-widest">Brand TVC</span>
                        <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-[9px] font-black uppercase tracking-widest">8K HDR</span>
                     </div>
                     <div className="space-y-1">
                        <h3 className="heading-section !text-3xl md:!text-5xl !leading-none">BB App TVC</h3>
                        <p className="label-mono opacity-60">Client: BB App // Studio: Define Perspective</p>
                     </div>
                  </div>
                  <div className="btn-primary !h-16">
                     Watch the Ad
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ðŸŽ¬ HIGHLIGHT 2: BB SERUM */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div 
                 className="relative aspect-video rounded-3xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
                 onClick={() => setActiveVideo("8TntXDekuE8")}
               >
                  <img 
                    src="https://img.youtube.com/vi/8TntXDekuE8/hqdefault.jpg" 
                    alt="BB Serum Ad Film" 
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
                     Brand Film {" // "} Beauty & Skin
                  </span>
                  <h2 className="heading-section">
                     BB Serum <br />
                     <span className="text-primary-accent">Brand Film_</span>
                  </h2>
                  <p className="body-copy">
                     We made this brand film for BB Serum. It focuses on a clean, premium look that works well on TV and social media.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Format</span>
                        <span className="text-sm font-black text-white uppercase">8K Video</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Category</span>
                        <span className="text-sm font-black text-white uppercase">Luxury Brand</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("8TntXDekuE8")} className="btn-accent w-fit !h-16">
                     Watch Brand Film <ArrowRight size={16} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      <VideoProductionPipeline />
      
      <EfficiencyLeadMagnet />

      {/* 🎬 VIDEO PORTFOLIO SECTION */}
      <section className="section-pad bg-black border-t border-white/5">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
               <div className="space-y-4">
                  <span className="label-mono">Our Work {" // "} YouTube Showcase</span>
                  <h2 className="heading-section">
                     Video <br />
                     <span className="text-primary-accent">Portfolio_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  Explore our latest projects from the official Define Perspective YouTube channel.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 {id: "INpn97C16yM", title: "BB APP TV Commercial", type: "TVC"},
                 {id: "8TntXDekuE8", title: "BB Serum TVC", type: "TVC"},
                 {id: "HG24sn19Dp0", title: "OhMyGene Minime MicroAD", type: "MicroAD"},
                 {id: "67IExKhWqd0", title: "SP Wellness Fort Hospital AD", type: "Hospital AD"},
                 {id: "HuX40LSwF7M", title: "Dotspace", type: "Brand Film"},
                 {id: "D94tWRtANhI", title: "Lulu Mall", type: "Brand Film"},
                 {id: "NEqjeiDThcY", title: "To U", type: "Brand Film"},
                 {id: "HMAhbKKIiTo", title: "Uday Sky Kitchen", type: "Brand Film"},
                 {id: "sNp1a5I6WsI", title: "Define Perspective Showreel", type: "Showreel"},
                 {id: "HPPdQmyu1ck", title: "La Fleur BTS", type: "BTS"},
                 {id: "37qych-HSDY", title: "Sreeshma Photoshoot BTS", type: "BTS"},
                 {id: "LNvSbp-c1-Q", title: "BYHAND Cochin BTS", type: "BTS"}
               ].map((video) => (
                 <div 
                   key={video.id} 
                   className="relative aspect-video rounded-2xl overflow-hidden group border border-white/5 cursor-pointer shadow-2xl"
                   onClick={() => setActiveVideo(video.id)}
                 >
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                       <div className="h-16 w-16 rounded-full bg-primary-accent text-black flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                          <Play size={24} fill="currentColor" className="ml-1" />
                       </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                       <div className="space-y-1">
                          <span className="text-[9px] font-mono text-primary-accent uppercase tracking-widest">{video.type}</span>
                          <h4 className="text-sm font-black text-white uppercase tracking-tighter">{video.title}</h4>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <AIVideoComparison />
      
      <AIVideoROICalculator />

      {/* ðŸŽ¬ PRODUCTION SERVICES SILOS */}
      <section className="section-pad bg-black border-t border-white/5">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
               <div className="space-y-4">
                  <span className="label-mono">What We Do {" // "} Video Production Services</span>
                  <h2 className="heading-section">
                     Our <br />
                     <span className="text-primary-accent">Services_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  We offer a full range of video production services for brands of all sizes.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "TV Commercials", services: ["Broadcast TVCs", "Digital Ads", "Cinema Commercials", "National Campaigns"], icon: Clapperboard, desc: "We make ads for TV, cinema, and online. Great for national brands and product launches." },
                 { title: "Brand Films", services: ["Company Profiles", "Product Launches", "Founder Stories", "Brand Manifestos"], icon: Video, desc: "We tell your brand's story in a clear and beautiful way that people remember." },
                 { title: "Social Media Reels", services: ["Instagram Reels", "TikTok Content", "YouTube Shorts", "Viral Campaigns"], icon: Target, desc: "Short videos made for Instagram, YouTube, and TikTok that get views and shares." },
                 { title: "Corporate Videos", services: ["Internal Comms", "Event Coverage", "Training Videos", "Testimonials"], icon: Camera, desc: "Clean, professional videos for companies â€” events, training, and team communication." },
                 { title: "E-comm Videos", services: ["Product Demos", "Amazon Listings", "Explainer Videos", "360 Views"], icon: Sparkles, desc: "Product videos that help online shoppers understand and buy your product." },
                 { title: "Post-Production", services: ["High-End Editing", "VFX & Motion Graphics", "Color Grading", "Sound Design"], icon: Film, desc: "Editing, color correction, sound, and effects â€” we polish your footage to a great finish." }
               ].map((silo, idx) => (
                 <div key={idx} className="p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group flex flex-col gap-8">
                    <div className="h-14 w-14 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-all">
                       <silo.icon size={28} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="heading-card !text-lg">{silo.title}</h3>
                       <p className="text-[10px] uppercase tracking-widest text-zinc-500 leading-relaxed">{silo.desc}</p>
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

      {/* ðŸ™ï¸ GEO SEO COMPONENT */}
      <section className="section-pad bg-black/60 border-t border-white/5">
         <div className="container-max">
            <h2 className="heading-section text-center mb-24">
               We Work With Brands Across <br /><span className="text-primary-accent">India & South India_</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
               {[
                 { city: "Mumbai", role: "Media & Advertising" },
                 { city: "Bangalore", role: "Tech & Startup Brands" },
                 { city: "Kochi", role: "Our Home Studio" },
                 { city: "Trivandrum", role: "Kerala Production Hub" },
                 { city: "Delhi", role: "Corporate Clients" },
                 { city: "Chennai", role: "Brand Films" },
                 { city: "Hyderabad", role: "Digital Video" },
                 { city: "Dubai", role: "International Brands" }
               ].map(hub => (
                 <div key={hub.city} className="p-12 bg-obsidian hover:bg-white/[0.03] transition-colors group flex flex-col justify-center items-center text-center gap-4">
                    <span className="text-2xl font-black text-white group-hover:text-primary-accent transition-colors">{hub.city}</span>
                    <span className="label-mono opacity-50">{hub.role}</span>
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
