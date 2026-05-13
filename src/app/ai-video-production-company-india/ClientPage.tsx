"use client";

import Image from "next/image";
import { useState } from "react";
import GlassNavbar from "@/components/glass-navbar";
import NeuralHero from "@/components/ai-video-hub/NeuralHero";
import AIVideoROICalculator from "@/components/ai-video-hub/AIVideoROICalculator";
import CaseStudyBento from "@/components/ai-video-hub/CaseStudyBento";
import AIVideoComparison from "@/components/ai-video-hub/AIVideoComparison";
import NeuralPipeline from "@/components/ai-video-hub/NeuralPipeline";
import AIScriptGenerator from "@/components/ai-video-hub/AIScriptGenerator";
import BlueprintLeadMagnet from "@/components/ai-video-hub/BlueprintLeadMagnet";
import EfficiencyLeadMagnet from "@/components/ai-video-hub/EfficiencyLeadMagnet";
import FAQSection from "@/components/faq-section";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import { 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Zap, 
  Target, 
  Cpu, 
  Sparkles, 
  BrainCircuit, 
  PlayCircle 
} from "lucide-react";
import Link from "next/link";
import VideoLightbox from "@/components/ai-video-hub/VideoLightbox";

export default function AIVideoProductionIndiaClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden theme-blue">
      <NeuralSeoLayer />
      <GlassNavbar />
      
      <NeuralHero />
      
      {/* 🚀 SEO CONTENT BLOCK 1: THE AUTHORITY POSITIONING */}
      <section className="section-pad border-y border-white/5 bg-black/40">
         <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="heading-section">
                     Why Leading Brands <br />
                     <span className="text-primary-accent">Choose AI Video_</span>
                  </h2>
                  <p className="body-copy">
                     Traditional video production is often slow and expensive. <span className="text-white font-bold">AI Video Production</span> allows brands to create high-quality content 10X faster and at 60% lower cost. 
                     <br /><br />
                     As the premier <span className="text-primary-accent font-bold">AI Creative Studio in South India</span>, we combine artistic storytelling with the latest AI technology to serve brands across Kerala and the entire country.
                  </p>
                  
                  <div className="py-6">
                     <p className="text-lg md:text-xl font-black uppercase text-white leading-tight max-w-2xl border-l-2 border-primary-accent pl-6">
                        We create consistent, high-quality cinematic videos using advanced AI motion technology.
                     </p>
                  </div>
                  <div className="pt-2">
                     <Link href="https://www.youtube.com/@DP.AI.Studio" target="_blank" className="btn-glass w-fit">
                        Explore Our AI Portfolio <Play size={16} fill="currentColor" />
                     </Link>
                  </div>
                  <div className="space-y-6">
                     {[
                       { t: "Global Production Quality", d: "High-quality cinematic videos made with AI." },
                       { t: "Fast Ad Scalability", d: "Create many versions of your ad quickly for different markets." },
                       { t: "Platform Optimized", d: "Videos made to look perfect on Instagram, YouTube, and Cinema." }
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
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-primary-accent/5 z-10 group-hover:opacity-0 transition-opacity" />
                  <Image 
                    src="/artifacts/media__1778571632209.jpg" 
                    alt="AI Video Production India" 
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-all duration-1000"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* 🚀 HIGH-IMPACT FEATURED PROJECT: SHE LUXURY */}
      <section className="section-pad bg-obsidian border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary-accent/[0.02] pointer-events-none" />
         
         <div className="container-max relative z-10">
            <div className="space-y-8 text-center mb-20">
               <span className="label-mono">
                  Featured Project {" // "} Luxury AI Ad
               </span>
               <h2 className="heading-hero">
                  SHE Luxury <br />
                  <span className="text-primary-accent">Body Lotion_</span>
               </h2>
               <p className="body-copy max-w-2xl mx-auto">
                  A high-end cinematic AI commercial for SHE Luxury. This project demonstrates our capability to create realistic, elegant, and high-fidelity product storytelling using advanced neural pipelines.
               </p>
            </div>

            <div 
              className="relative aspect-video rounded-3xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
              onClick={() => setActiveVideo("5kOnWP-dZZY")}
            >
               <Image 
                 src="https://img.youtube.com/vi/5kOnWP-dZZY/maxresdefault.jpg" 
                 alt="SHE Luxury AI Ad - Define Perspective" 
                 fill
                 className="object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                 sizes="100vw"
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
                        <span className="px-4 py-1.5 rounded-full bg-primary-accent text-black text-[9px] font-black uppercase tracking-widest">Luxury AI</span>
                        <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-[9px] font-black uppercase tracking-widest">4K Neural</span>
                     </div>
                     <div className="space-y-1">
                        <h3 className="heading-section !text-3xl md:!text-5xl !leading-none">SHE Luxury</h3>
                        <p className="label-mono opacity-60">Status: Completed // Production: DP AI Studio</p>
                     </div>
                  </div>
                  <div className="btn-primary !h-16">
                     Watch Full Ad
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Exclusive Reveal Section: Lacrispo */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary-accent/[0.01] pointer-events-none" />
         
         <div className="container-max relative z-10">
            <div className="space-y-8 text-center mb-20">
               <span className="label-mono">
                  Featured Project {" // "} AI Theater Ad
               </span>
               <h2 className="heading-hero">
                  Lacrispo <br />
                  <span className="text-primary-accent">AI Cinema Ad_</span>
               </h2>
               <p className="body-copy max-w-2xl mx-auto">
                  Watch India's first AI-produced theater commercial for Lacrispo. High-quality visuals designed for the big screen.
               </p>
            </div>

            <div 
              className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
              onClick={() => setActiveVideo("vGijXeVUS74")}
            >
               <Image 
                 src="https://img.youtube.com/vi/vGijXeVUS74/maxresdefault.jpg" 
                 alt="Lacrispo AI Commercial" 
                 fill
                 className="object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                 sizes="100vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               
               {/* Custom Offset Double Play Button */}
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
                        <span className="px-4 py-1.5 rounded-full bg-primary-accent text-black text-[9px] font-black uppercase tracking-widest">Theater Ad</span>
                        <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-[9px] font-black uppercase tracking-widest">4K Quality</span>
                     </div>
                     <div className="space-y-1">
                        <h3 className="heading-section !text-3xl md:!text-5xl !leading-none">Lacrispo Snacks Ad</h3>
                        <p className="label-mono opacity-60">Status: Completed Project // Code: LAC-001</p>
                     </div>
                  </div>
                  <div className="btn-primary !h-16">
                     Watch Full Video
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Second Highlight: Red Chamber */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div 
                 className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black"
                 onClick={() => setActiveVideo("L7aRxqziN8w")}
               >
                  <Image 
                    src="https://img.youtube.com/vi/L7aRxqziN8w/maxresdefault.jpg" 
                    alt="Red Chamber AI Music Video" 
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Custom Offset Double Play Button */}
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
                     Cinematic Showcase {" // "} Music Video
                  </span>
                  <h2 className="heading-section">
                     Red Chamber <br />
                     <span className="text-primary-accent">Music Video_</span>
                  </h2>
                  <p className="body-copy">
                     A visual look into modern AI filmmaking. This project shows how we use AI to tell atmospheric and cinematic stories.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Quality</span>
                        <span className="text-sm font-black text-white uppercase">4K AI Motion</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Type</span>
                        <span className="text-sm font-black text-white uppercase">Music Video</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("L7aRxqziN8w")} className="btn-accent w-fit !h-16">
                     Watch The Video <ArrowRight size={16} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Third Highlight: SHE Luxury */}
      <section className="section-pad bg-black border-t border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <span className="label-mono">
                     Case Study {" // "} AI Beauty
                  </span>
                  <h2 className="heading-section">
                     SHE Luxury <br />
                     <span className="text-primary-accent">Body Lotion_</span>
                  </h2>
                  <p className="body-copy">
                     A high-quality AI commercial for SHE Luxury. We create realistic and elegant product videos that help your brand stand out.
                  </p>
                  <div className="flex gap-4 pt-4">
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Visual Grade</span>
                        <span className="text-sm font-black text-white uppercase">Ultra-Realistic</span>
                     </div>
                     <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Format</span>
                        <span className="text-sm font-black text-white uppercase">Product Ad</span>
                     </div>
                  </div>
                  <button onClick={() => setActiveVideo("5kOnWP-dZZY")} className="btn-primary w-fit !h-16">
                     Watch Commercial <Play size={16} fill="currentColor" />
                  </button>
               </div>

               <div 
                 className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 shadow-[0_0_100px_rgba(var(--primary-accent-rgb),0.05)] cursor-pointer bg-black order-1 lg:order-2"
                 onClick={() => setActiveVideo("5kOnWP-dZZY")}
               >
                  <Image 
                    src="https://img.youtube.com/vi/5kOnWP-dZZY/maxresdefault.jpg" 
                    alt="SHE Luxury Ad" 
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-2000 opacity-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Custom Offset Double Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                        <div className="absolute h-16 w-16 rounded-full bg-black/40 backdrop-blur-md -translate-x-3 z-10" />
                        <div className="relative h-16 w-16 rounded-full bg-primary-accent text-black flex items-center justify-center z-20 shadow-2xl">
                           <Play size={24} fill="currentColor" className="ml-1" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <NeuralPipeline />
      
      <CaseStudyBento />
      
      <AIVideoComparison />
      
      <AIVideoROICalculator />
      
      <AIScriptGenerator />
      
      <EfficiencyLeadMagnet />

      {/* 📊 AI SERVICE SILOS */}
      <section className="section-pad bg-black border-t border-white/5">
         <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
               <div className="space-y-4">
                  <span className="label-mono">What We Offer {" // "} AI Video Solutions</span>
                  <h2 className="heading-section">
                     Our <br />
                     <span className="text-primary-accent">Services_</span>
                  </h2>
               </div>
               <p className="body-copy max-w-sm text-right">
                  Specialized AI video services to help your brand grow and reach more customers.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "AI Video Ads", services: ["Meta Ads (FB / IG)", "YouTube Ads", "Performance Content", "A/B Testing Variations"], icon: Zap },
                 { title: "Social Media Videos", services: ["Reels / Shorts / TikTok", "Daily Content", "Trend-based Videos"], icon: Target },
                 { title: "AI Video Editing", services: ["Automated Editing", "AI VFX", "Color Grading", "Video Upscaling"], icon: Cpu },
                 { title: "Product Videos", services: ["Product Demos", "E-commerce Ads", "Lifestyle Product Shots"], icon: Sparkles },
                 { title: "SaaS & Tech Videos", services: ["Onboarding Videos", "Walkthroughs", "AI Avatar Videos"], icon: BrainCircuit },
                 { title: "Brand Storytelling", services: ["AI Brand Films", "Short Films", "Music Videos"], icon: PlayCircle }
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

      {/* 🏙️ GEO SEO COMPONENT */}
      <section className="section-pad bg-black/60">
         <div className="container-max">
            <h2 className="heading-section text-center mb-24">
               Serving <br /><span className="text-primary-accent">India & South India_</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
               {[
                 { city: "Mumbai", role: "Media & Ad Center" },
                 { city: "Bangalore", role: "Tech & SaaS Hub" },
                 { city: "Kochi", role: "DP AI Lab Alpha" },
                 { city: "Trivandrum", role: "Enterprise Media" },
                 { city: "Delhi", role: "Corporate Strategy" },
                 { city: "Chennai", role: "Brand Storytelling" },
                 { city: "Hyderabad", role: "Digital Content" },
                 { city: "Dubai", role: "Global Luxury" }
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
