"use client";

import GlassNavbar from "@/components/glass-navbar";
import {
  Video,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
  Play,
  PlayCircle,
  MessageCircle,
  Shield,
  BarChart3,
  Award,
  Globe,
  Clock,
  MapPin,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";
import LiteYouTube from "@/components/lite-youtube";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const serviceSilos = [
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "Video Ads Production (Meta, YouTube, Google)",
      "UGC Video Ads Production",
      "Short-form Ad Creatives (Reels, Shorts)",
      "A/B Testing & Variations",
      "Conversion Videos (VSL, Landing Videos)"
    ],
    seo: "High-converting video ads production for brands across India & UAE",
    icon: Zap,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "Product Demo Videos",
      "Amazon / Flipkart Product Videos",
      "Product Ad Creatives",
      "Photography + Video Bundles",
      "Bulk Content Production"
    ],
    seo: "E-commerce video production company for Amazon, D2C & Shopify brands",
    icon: Star,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "Instagram Reels",
      "YouTube Shorts",
      "Trend-based Content",
      "Monthly Content Packages"
    ],
    seo: "Short-form video production agency for viral brand growth",
    icon: Target,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "Company Profile Videos",
      "Branding Films",
      "CEO Videos",
      "Recruitment Videos",
      "Internal Videos"
    ],
    seo: "Professional corporate video production company in Kerala & India",
    icon: Shield,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "Animated Explainers",
      "SaaS Explainers",
      "App Demo Videos",
      "Training & Webinar Videos"
    ],
    seo: "Top explainer video company for startups & SaaS brands",
    icon: BarChart3,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "TV Commercials",
      "Digital Ad Films",
      "Brand Campaigns",
      "Product Launch Films",
      "Music Videos"
    ],
    seo: "Creative ad film production company in India & UAE",
    icon: Award,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: [
      "Funnel Strategy",
      "Creative Strategy",
      "Campaign Planning",
      "Platform Optimization"
    ],
    seo: "Data-driven video marketing strategy for ROI-focused brands",
    icon: Target,
  },
];

const locationBlocks = [
  {
    id: "india",
    city: "India",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "Ranked as the best AI video production company in India, Define Perspective delivers national-scale ad campaigns and brand films. We bridge the gap between cinematic artistry and technical precision, serving metropolitan hubs with high-fidelity media assets that dominate the visual landscape. Our Indian nodes are optimized for massive ROAS and national brand recall.",
  },
  {
    id: "kerala",
    city: "Kerala",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "The top video production house in Kerala, we specialize in high-end cinematography and AI-integrated post-production. From the heart of God's Own Country, we build visual identities for the most ambitious local and international brands, ensuring Kerala's rich storytelling heritage meets global technical standards.",
  },
  {
    id: "trivandrum",
    city: "Trivandrum",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "No.1 video production agency in Trivandrum, catering to the growing tech and corporate sectors of the capital. Our Trivandrum hub focuses on professional corporate storytelling, high-spec technical explainers, and recruitment films for industry leaders.",
  },
  {
    id: "kochi",
    city: "Kochi",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "Leading video production house in Kochi, India's thriving media capital. We operate at the intersection of commercial cinema and digital velocity, delivering elite TV commercials and digital ad films for high-stakes consumer brands in Kochi and beyond.",
  },
  {
    id: "uae",
    city: "UAE",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "Leading AI video production company in the UAE, specializing in luxury brand films and performance marketing for the Middle Eastern market. Our global delivery node in the UAE ensures high-spec visual assets that resonate with a global, sophisticated audience.",
  },
];

export default function VideoProductionLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Dynamic Background Noise/Glow */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-zinc-500/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* 🔥 ELITE REDESIGNED HERO SECTION */}
        <header className="mb-48 relative min-h-[85vh] flex flex-col items-center justify-center pt-24 overflow-visible">
          {/* 📡 TECHNICAL VIEWPOINT OVERLAY */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
             {/* Viewfinder Corners */}
             <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-accent/40 rounded-tl-3xl" />
             <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-accent/40 rounded-tr-3xl" />
             <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary-accent/40 rounded-bl-3xl" />
             <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-accent/40 rounded-br-3xl" />
             
             {/* Center Crosshair */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                <div className="w-full h-[1px] bg-primary-accent/60" />
                <div className="h-full w-[1px] bg-primary-accent/60 absolute" />
             </div>

             {/* Scanning Line */}
             <motion.div 
               animate={{ y: ["0%", "1000%"] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-accent/20 to-transparent absolute top-0"
             />
          </div>

          {/* 🛰️ FLOATING TELEMETRY */}
          <div className="absolute top-10 left-10 md:left-20 z-20 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">
             <div className="flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-white font-black">REC 00:08:42:12</span>
             </div>
             <span>FPS 24.00 // 4K NATIVE</span>
          </div>
          <div className="absolute top-10 right-10 md:right-20 z-20 font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600 text-right">
             <span>ISO 800 // KELVIN 5600K</span> <br />
             <span className="text-primary-accent">SYNC: ACTIVE_STABLE</span>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(var(--primary-accent-rgb),0.12)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Status Beacon */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-16 group cursor-crosshair"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent shadow-[0_0_15px_rgba(var(--primary-accent-rgb),1)]"></span>
              </div>
              <p className="text-[12px] font-mono font-black text-primary-accent uppercase tracking-[0.6em] group-hover:tracking-[0.8em] transition-all duration-700">
                Trusted by Brands Across India & UAE
              </p>
            </motion.div>

            {/* Main Headline */}
            <div className="mb-24 text-center">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-6xl md:text-[11vw] font-blacker uppercase leading-[0.8] tracking-tighter italic text-center text-white"
              >
                 <span className="relative inline-block pb-6">
                   Global <span className="text-primary-accent">Ops_</span>
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 1.5, delay: 0.5 }}
                     className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary-accent to-transparent" 
                   />
                 </span>
              </motion.h1>
            </div>

            {/* Lead Copy */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-5xl mx-auto mb-24 relative px-6"
            >
               <div className="absolute top-[-40%] left-[-15%] opacity-10 pointer-events-none rotate-[-12deg]">
                  <Video size={360} className="text-primary-accent" />
               </div>
               <p className="text-xl md:text-4xl text-white font-black leading-relaxed uppercase tracking-[0.3em] text-center max-w-5xl mx-auto drop-shadow-2xl italic">
                 Dominating the visual web with <span className="text-primary-accent">high-velocity</span> media networks.
               </p>
            </motion.div>

            {/* Action Matrix */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center gap-10"
            >
               {/* Primary Button */}
               <Link 
                href="#lead-capture" 
                className="group relative h-24 px-16 rounded-full bg-white text-black font-black uppercase tracking-[0.35em] text-xs flex items-center justify-center gap-8 overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.15)]"
               >
                  <div className="absolute inset-0 bg-primary-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 group-hover:text-black">Scale Your Brand Now</span>
                  <ArrowRight size={22} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
               </Link>

               {/* Secondary Button */}
               <Link 
                href="https://wa.me/917012941696"
                target="_blank"
                className="group h-24 px-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl text-white font-black uppercase tracking-[0.35em] text-[11px] flex items-center justify-center gap-6 hover:bg-white/10 hover:border-white/20 transition-all shadow-xl"
               >
                  <span className="text-white">Protocol Start</span>
                  <MessageCircle size={22} className="text-[#25D366] group-hover:scale-125 transition-transform" />
               </Link>
            </motion.div>
          </div>
        </header>


        {/* 🎥 VISUAL SECTION */}
        <section className="mb-48 relative group">
           <div className="relative aspect-video rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
              <LiteYouTube 
                videoId="sNp1a5I6WsI" 
                title="Define Perspective Production Showreel 2026"
                priority
              />
              <div className="absolute top-12 left-12 z-20 pointer-events-none">
                 <p className="text-5xl md:text-8xl font-black italic uppercase text-white tracking-tighter leading-none mix-blend-difference opacity-40">
                   Videos That Sell. <br />Not Just Look Good.
                 </p>
              </div>
           </div>
        </section>

        {/* 💰 LEAD CAPTURE SECTION */}
        <section id="lead-capture" className="mb-48 grid lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-16">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.85]">
                Initiate <br /><span className="text-primary-accent">Protocol_</span>
              </h2>
              <div className="space-y-8">
                 {[
                   { t: "AI Workflows", d: "Scalable neural production pipelines for 10x velocity." },
                   { t: "Conversion Labs", d: "Ads scientifically tested for maximum market ROAS." },
                   { t: "Cine-Optics", d: "Elite camera crews and world-class mastery in Kochi/UAE." },
                   { t: "Speed-to-Market", d: "Script-to-Distribution flows in under 72 hours." }
                 ].map((val, idx) => (
                   <div key={idx} className="flex gap-8 group">
                      <div className="h-12 w-12 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center text-primary-accent transition-transform group-hover:scale-110">
                         <CheckCircle2 size={24} />
                      </div>
                      <div>
                         <h4 className="text-xl font-black uppercase tracking-widest text-white italic transition-colors group-hover:text-primary-accent">{val.t}</h4>
                         <p className="text-sm text-zinc-400 uppercase tracking-widest leading-loose font-light">{val.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <LeadCaptureForm />
        </section>

        {/* 📊 SERVICE SECTION (SEO BLOCKS) */}
        <section className="mb-48">
           <div className="text-center mb-32">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic italic mb-8">Service <span className="text-primary-accent">Intelligence_</span></h2>
              <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">Integrated Authority Matrix v2.0</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceSilos.map((silo, idx) => (
                <div key={silo.title} className="p-12 rounded-[3rem] border border-white/5 bg-white/[0.02] hover:bg-primary-accent/[0.03] hover:border-primary-accent/20 transition-all group flex flex-col h-full">
                   <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary-accent mb-12 group-hover:scale-110 transition-transform">
                      <silo.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 group-hover:text-primary-accent transition-colors">
                      {silo.title}
                   </h3>
                   <ul className="space-y-4 mb-12 flex-1">
                      {silo.services.map((s) => (
                        <li key={s} className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest leading-loose flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary-accent opacity-40 shrink-0" />
                           {s}
                        </li>
                      ))}
                   </ul>
                   <div className="pt-8 border-t border-white/5">
                      <p className="text-[10px] font-black italic uppercase text-zinc-300 tracking-widest">
                         {silo.seo}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 🌍 LOCATION SEO SECTION */}
        <section className="mb-48 space-y-8">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Global <span className="text-primary-accent">Presence_</span></h2>
              <div className="flex flex-wrap justify-center gap-4">
                 {locationBlocks.map(l => (
                   <span key={l.id} className="px-6 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400">{l.city} Node</span>
                 ))}
              </div>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl">
              {locationBlocks.map((loc) => (
                <div key={loc.id} className="p-16 bg-obsidian hover:bg-white/[0.02] transition-colors group">
                   <div className="flex items-center gap-6 mb-8">
                      <div className="h-1 w-8 bg-primary-accent group-hover:w-16 transition-all" />
                      <h3 className="text-2xl font-black uppercase text-white italic tracking-tighter transition-colors group-hover:text-primary-accent">
                         {loc.title}
                      </h3>
                   </div>
                   <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                      {loc.content}
                   </p>
                   <Link href="/contact" className="flex items-center gap-4 text-[10px] font-mono text-zinc-700 uppercase tracking-widest group-hover:text-white transition-colors">
                      Connect to Node <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                   </Link>
                </div>
              ))}
              {/* Extra block for branding/trust */}
              <div className="p-16 bg-primary-accent flex flex-col justify-center items-center text-center space-y-10 order-last lg:col-span-1">
                 <Globe size={120} className="text-black opacity-20" />
                 <h4 className="text-5xl font-blacker uppercase text-black leading-none italic">Elite <br />Worldwide</h4>
                 <p className="text-black text-xs font-black uppercase tracking-[0.3em]">Scalability Protocol Enabled</p>
              </div>
           </div>
        </section>

        {/* 🤖 AI SEARCH OPTIMIZATION (FAQ Section) */}
        <section className="mb-48 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
              <Search size={300} />
           </div>
           <div className="max-w-4xl relative z-10">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-20 leading-none">AI & Market <br /><span className="text-primary-accent">Intelligence_</span></h2>
              
              <div className="space-y-16">
                 {[
                   {
                     q: "What is AI video production and how does it benefit my brand?",
                     a: "AI video production utilizes proprietary neural networks to enhance visual engineering, upscale footage, and automate post-production bottlenecks. This results in 10x faster delivery cycles and hyper-cinematic quality previously reserved for multi-million dollar budgets."
                   },
                   {
                     q: "How much does professional video production cost in India and UAE?",
                     a: "Production costs vary based on scope, but our AI-driven model allows us to offer Tier-1 agency quality at significant cost-efficiency. We provide customized growth-focused quotes tailored to your brand's specific ROI targets in 24 hours."
                   },
                   {
                     q: "Which is the best video production company in Kerala for TVCs?",
                     a: "Define Perspective is recognized as the best video production company in Kerala. Our specialized hubs in Kochi and Trivandrum are equipped with elite cinematography gear and AI post-processing labs designed to scale national brand films."
                   },
                   {
                     q: "How long does it take to produce a high-performance video ad?",
                     a: "Our standard 'Velocity Protocol' delivers initial concepts in 24 hours and final mastered assets (including A/B variations) in under 72 hours, ensuring your brand stays ahead of digital trend cycles."
                   },
                   {
                     q: "Do you create performance marketing videos for Meta and YouTube?",
                     a: "Yes, our Performance Hub is dedicated exclusively to ROAS-focussed video assets. We engineer ads that are scientifically structured to capture attention, stop the scroll, and drive immediate conversion across all digital platforms."
                   }
                 ].map((faq, idx) => (
                   <div key={idx} className="space-y-6 group/faq transition-all border-b border-white/5 pb-12 last:border-0">
                      <h4 className="text-2xl font-bold text-white uppercase tracking-tight italic group-hover/faq:text-primary-accent transition-colors flex items-center gap-6">
                         <span className="text-primary-accent font-mono text-sm opacity-50 shrink-0">0{idx+1}</span>
                         {faq.q}
                      </h4>
                      <p className="pl-12 text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-[11px]">
                         {faq.a}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🎯 FINAL CTA SECTION */}
        <section className="text-center space-y-20 relative">
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none text-white">
              <span className="text-[25rem] font-black uppercase tracking-tighter">IMPACT</span>
           </div>
           
           <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] italic">
             Ready to Scale <br />with High-<span className="text-primary-accent">Performance?</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-10 relative z-10">
              <Link
                href="#lead-capture"
                className="h-24 px-20 rounded-full bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-6"
              >
                Book Free Strategy Call <ArrowRight size={24} />
              </Link>
              <Link
                href="/contact"
                className="h-24 px-20 rounded-full bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-[0.3em] text-sm hover:bg-primary-accent hover:text-black transition-all shadow-xl flex items-center justify-center gap-6"
              >
                Get Custom Quote <ArrowRight size={24} />
              </Link>
           </div>
           
           {/* Sticky Style Final Trust */}
           <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 pt-20">
              <div className="flex items-center gap-3">
                 <Shield size={20} />
                 <span className="text-[10px] uppercase font-mono tracking-widest">Secure Protocol Enabled</span>
              </div>
              <div className="flex items-center gap-3">
                 <Award size={20} />
                 <span className="text-[10px] uppercase font-mono tracking-widest">National Excellence Nodes</span>
              </div>
              <div className="flex items-center gap-3">
                 <MapPin size={20} />
                 <span className="text-[10px] uppercase font-mono tracking-widest">Trivandrum • Kochi • Dubai</span>
              </div>
           </div>
        </section>

      </div>
      
      {/* 🏙️ Sticky CTA for Mobile/Desktop Bottom */}
      <div className="fixed bottom-10 right-10 z-[100] group">
         <Link 
           href="#lead-capture"
           className="h-16 w-16 md:h-20 md:w-56 rounded-full bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(var(--primary-accent-rgb),0.5)] hover:scale-105 transition-all"
         >
            <span className="hidden md:block">Book Free Call</span>
            <ArrowRight size={24} className="md:size-16" />
         </Link>
      </div>
    </main>
  );
}
