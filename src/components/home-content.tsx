"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  Plus, Users, Globe, BarChart3, Star, Building2, Zap, Target, Activity, MessageCircle, ArrowRight, Shield, Cpu, Play, CheckCircle2
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import VideoHero from "@/components/video-hero";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Dynamic imports for performance
// Dynamic imports with robust resolution
const IndustriesSection = dynamic(() => import("@/components/industries-section").then(mod => mod.default || mod));
const PortfolioSection = dynamic(() => import("@/components/portfolio-section").then(mod => mod.default || mod));
const TestimonialSection = dynamic(() => import("@/components/testimonial-section").then(mod => mod.default || mod));
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => mod.default || mod));
const WhatsAppChat = dynamic(() => import("@/components/whatsapp-chat"), { ssr: false });
const DynamicLeadMagnet = dynamic(() => import("@/components/seo-hub/leads/DynamicLeadMagnet"), { ssr: false });

const SectionHeader = ({ tag, title, subtitle, align = "center", h2 = false }: any) => {
  const TitleTag = h2 ? "h2" : "h3";
  return (
    <div className={cn("mb-16 md:mb-20", align === "center" ? "text-center" : "text-left")}>
      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent mb-6 block font-bold">{tag}</span>
      <TitleTag className="text-3xl md:text-6xl lg:text-[5.5rem] font-black text-white uppercase leading-tight md:leading-[0.9]">
        {title}
      </TitleTag>
      {subtitle && <p className="mt-8 text-zinc-400 font-normal text-sm md:text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white transition-colors duration-500 overflow-x-hidden relative selection:bg-primary-accent selection:text-white theme-red">
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <GlassNavbar />
      
      {/* 1. HERO SECTION (With H1 in components/video-hero.tsx) */}
      <VideoHero />

      {/* High-Ranking SEO Block (Tactical Intelligence Ribbon) */}
      <section className="py-12 px-6 md:px-12 bg-black relative z-10 border-y border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
             <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0">
                   <Activity size={24} className="text-primary-accent animate-pulse" />
                </div>
                <div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 block mb-2">Production Operations Hub</span>
                   <p className="max-w-3xl text-[11px] md:text-[13px] text-zinc-400 font-normal leading-relaxed uppercase tracking-tighter">
                      Leading <span className="text-white font-bold">video production company in Kerala</span> offering end-to-end media production including TV commercial production, brand film production, and corporate video production.
                   </p>
                </div>
             </div>
             <div className="h-px w-full lg:h-12 lg:w-px bg-white/5 hidden md:block" />
             <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                   <Cpu size={24} className="text-blue-500" />
                </div>
                <div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 block mb-2">AI Video Production Studio</span>
                   <p className="max-w-xl text-[11px] md:text-[13px] text-zinc-400 font-normal leading-relaxed uppercase tracking-tighter">
                      Our <span className="text-white font-bold">AI-video studio in Kochi</span> delivers high-performance <span className="text-white">generative content</span> for brands across <span className="text-blue-500">India</span>.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 1. CORE CAPABILITIES (H2: Media Production & AI Studio Services) */}
      <section id="capabilities" className="py-24 md:py-40 px-4 md:px-12 bg-black border-b border-white/5 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            h2
            tag="Our Core Services"
            title={<>Media Production & <br />AI Studio <span>Services_</span></>}
            subtitle="We are a video production company in Kerala specializing in AI-powered video production and cinematic brand films."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
             <div className="space-y-10">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight">Unified Production Excellence</h3>
                <p className="text-lg text-zinc-400 font-normal leading-relaxed">
                   Based in <span className="text-white font-bold">Kochi and Trivandrum</span>, we serve brands across India. We provide TV commercial production, corporate video production, and AI-generated content designed to increase engagement, conversions, and brand authority.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                   <div className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">Kochi & Trivandrum</div>
                   <div className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">National Reach</div>
                   <div className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">AI Innovation</div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { t: "TV Commercial Production", d: "Broadcast-quality ad films", i: Play },
                  { t: "AI Video Production", d: "High-speed AI content", i: Cpu },
                  { t: "Corporate Brand Films", d: "Professional storytelling", i: Star },
                  { t: "Digital Ad Creatives", d: "Performance-driven ads", i: Zap }
                ].map(item => (
                  <div key={item.t} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4 group hover:bg-primary-accent/5 transition-all">
                     <item.i size={20} className="text-primary-accent" aria-hidden="true" />
                     <div className="space-y-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest block text-white">{item.t}</h3>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">{item.d}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTION SERVICES (H2: Cinematic Video Production & Brand Films) */}
      <section className="py-24 md:py-40 px-4 md:px-12 bg-obsidian relative border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                 <SectionHeader 
                   h2 
                   tag="Our Expertise" 
                   title={<>Cinematic Video <br />Production & <span>Brand Films_</span></>} 
                   align="left" 
                 />
                 <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed mb-12">
                    As the best video production company in Kerala, we deliver TV commercial production and corporate video production that defines brand authority. Our cinematic approach ensures every frame resonates with your target audience.
                 </p>
                 <div className="space-y-6">
                    {[
                      "TV Commercial Production",
                      "Corporate Video Production",
                      "Brand Film Production",
                      "Cinematic Social Content"
                    ].map(bullet => (
                      <h3 key={bullet} className="flex items-center gap-4 text-[10px] md:text-[11px] font-mono uppercase text-white font-bold">
                         <div className="h-1.5 w-1.5 rounded-full bg-primary-accent" />
                         {bullet}
                      </h3>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                 <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] relative group">
                    <Image 
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=75&w=800" 
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                      alt="AI video production company in Kerala - DP AI Studio"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                       <span className="text-[10px] font-mono text-primary-accent uppercase block mb-2">Service Excellence</span>
                       <h3 className="text-base md:text-lg font-bold uppercase text-white">AI Content Lab</h3>
                    </div>
                 </div>
                 <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] relative group lg:mt-24">
                    <Image 
                      src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=75&w=800" 
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                      alt="AI video production company in Kerala - DP AI Studio"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                       <span className="text-[10px] font-mono text-primary-accent uppercase block mb-2">Cinematic Art</span>
                       <h3 className="text-base md:text-lg font-bold uppercase text-white">Brand Film Hub</h3>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

       {/* 3. AI STUDIO (H2: AI Video Production & Content Creation) */}
      <section className="py-24 md:py-40 px-4 md:px-12 bg-black relative border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
           <SectionHeader 
             h2 
             tag="AI Technology" 
             title={<>AI Video <br />Production & <span>Content Creation_</span></>} 
           />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "AI Product Videos", d: "High-end product visuals using neural rendering.", i: Zap },
                { t: "Social Media Video Production", d: "Optimized for Instagram, TikTok, and YouTube Shorts.", i: Cpu },
                { t: "Generative AI Content", d: "Creating photorealistic AI assets for your brand.", i: Activity }
              ].map(adv => (
                <div key={adv.t} className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all group">
                   <adv.i size={24} className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" />
                   <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-4 group-hover:text-primary-accent transition-colors">{adv.t}</h3>
                   <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed font-normal">{adv.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* LEAD MAGNET INTEGRATION */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <DynamicLeadMagnet 
            context="AI Advertising India" 
          />
        </div>
      </section>

      {/* 4. REDESIGNED AUTHORITY BLOCK (The Kerala Brand Narrative) */}
      <section className="relative py-32 md:py-60 px-6 md:px-12 bg-black overflow-hidden border-b border-white/5">
        {/* Kinetic Light Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-accent-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-[1500px] relative z-10">
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

                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                  End-to-End <br /> Media <span>Dominance_</span>
                </h2>

                <div className="space-y-10">
                  <p className="text-xl md:text-3xl text-zinc-300 font-light leading-snug uppercase tracking-tight">
                    We are a <span className="text-white font-bold">leading video production company in Kerala</span> offering end-to-end media production services.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                    {[
                      { t: "TV Commercials", d: "High-end TVC production" },
                      { t: "Brand Films", href: "Cinematic narratives" },
                      { t: "Corporate Video", href: "Executive storytelling" }
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

                  <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed">
                    Our <span className="text-white font-medium">AI-powered video production studio in Kochi</span> combines cinematic storytelling with generative AI workflows to deliver <span className="text-primary-accent underline underline-offset-8 decoration-primary-accent/30">scalable, high-performance content</span> for brands across India.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 pt-8">
                  <Link 
                    href="/contact" 
                    className="h-24 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-6 hover:bg-primary-accent hover:text-white transition-all shadow-2xl active:scale-95"
                  >
                    Start Production <ArrowRight size={20} />
                  </Link>
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center">
                       <Play size={24} className="text-primary-accent fill-primary-accent/20" />
                    </div>
                    <div>
                       <span className="block text-xs font-black text-white uppercase">Client Showreel</span>
                       <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Watch 2026 Collection</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Immersive Studio Visual */}
            <div className="order-1 lg:order-2">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2 }}
                 className="relative aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden border border-white/10 group shadow-[0_0_100px_-20px_rgba(var(--primary-accent-rgb),0.3)]"
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
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]" />
               </motion.div>
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
         <div className="container mx-auto max-w-7xl">
            <SectionHeader h2 tag="Why Choose Us" title={<>Why Brands Choose Our <br />Production <span>Studio_</span></>} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { t: "Expert Cinematography", d: "Professional camera crews and meticulous lighting design.", i: Zap },
                 { t: "AI Integration", d: "Modern neural rendering for high-velocity output.", i: Cpu },
                 { t: "Growth ROI", d: "Strategically crafted content built for high conversions.", i: BarChart3 },
                 { t: "Global Mastering", d: "Industry-standard post-production for all platforms.", i: Activity }
               ].map(adv => (
                 <div key={adv.t} className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all group hover:bg-white/[0.04]">
                    <adv.i size={24} className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" />
                    <h4 className="text-base md:text-lg font-bold uppercase tracking-widest text-white mb-4 group-hover:text-primary-accent transition-colors">{adv.t}</h4>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed font-normal">{adv.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. SOCIAL PROOF (Experience, Clients, Stats) */}
      <section className="py-24 md:py-40 px-4 md:px-12 bg-obsidian border-y border-white/5">
        <div className="container mx-auto">
          <SectionHeader tag="Our Experience" title={<>Proven <span>Authority_</span></>} />
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { l: "Years Active", v: "9+", i: Plus },
              { l: "Film Minutes", v: "1100+", i: BarChart3 },
              { l: "Global Clients", v: "100+", i: Globe },
              { l: "Success Rate", v: "99%", i: CheckCircle2 },
              { l: "Review Score", v: "4.9/5", i: Star },
              { l: "Industries", v: "55+", i: Building2 }
            ].map(m => (
              <div key={m.l} className="flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 group hover:bg-white hover:text-black transition-all duration-300">
                <m.i size={20} className="text-primary-accent mb-6" aria-hidden="true" />
                <span className="text-2xl md:text-3xl font-black mb-2">{m.v}</span>
                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-600">{m.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      
      {/* 8. FAQ SECTION (Voice Search Optimization) */}
      <FAQSection />

      {/* 9. CASE STUDIES / PROJECT CTA */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-black relative border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
            <SectionHeader 
              tag="Start Your Project" 
              title={<>Start Your <br /><span>Project Now_</span></>}
            />
            <p className="text-zinc-400 font-normal uppercase text-sm tracking-[0.2em] md:tracking-[0.4em] mb-16 md:mb-20 max-w-2xl mx-auto">
              Are you ready for national-level brand films and high-speed AI content? Partner with the best video production company in Kerala.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               <Link href="/portfolio" className="h-20 md:h-24 rounded-2xl md:rounded-3xl bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl" aria-label="View our portfolio of cinematic and AI films">See Our Portfolio <ArrowRight size={18} aria-hidden="true" /></Link>
               <Link href="/contact" className="h-20 md:h-24 rounded-2xl md:rounded-3xl bg-primary-accent text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary-accent/20" aria-label="Get a custom quote for your video project">Get a Quote <MessageCircle size={18} aria-hidden="true" /></Link>
            </div>
        </div>
      </section>

      <WhatsAppChat />
    </main>
  );
}
