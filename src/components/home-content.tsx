"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  Plus, Users, Globe, BarChart3, Star, Building2, Zap, Target, Activity, MessageCircle, ArrowRight, Shield, Cpu, Play, CheckCircle2
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import VideoHero from "@/components/video-hero";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Dynamic imports for performance
const IndustriesSection = dynamic(() => import("@/components/industries-section"));
const PortfolioSection = dynamic(() => import("@/components/portfolio-section"));
const TestimonialSection = dynamic(() => import("@/components/testimonial-section"));
const FAQSection = dynamic(() => import("@/components/faq-section"));
const WhatsAppChat = dynamic(() => import("@/components/whatsapp-chat"), { ssr: false });

const SectionHeader = ({ tag, title, subtitle, align = "center", h2 = false }: any) => {
  const TitleTag = h2 ? "h2" : "h3";
  return (
    <div className={cn("mb-16 md:mb-20", align === "center" ? "text-center" : "text-left")}>
      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent mb-6 block font-bold">{tag}</span>
      <TitleTag className="text-3xl md:text-6xl lg:text-[5.5rem] font-black text-white uppercase leading-tight md:leading-[0.9] tracking-tighter">
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

      {/* High-Ranking SEO Block (Crucial for AI Search & Authority) */}
      <section className="py-20 px-6 md:px-12 bg-zinc-950 border-b border-white/5 relative z-10 text-center">
        <div className="container mx-auto max-w-4xl">
           <p className="text-zinc-500 font-normal italic text-xs md:text-sm leading-relaxed uppercase tracking-widest">
              We are a leading <span className="text-white font-bold">video production company in Kerala</span> offering end-to-end media production services, including TV commercial production, brand film production, and corporate video production. Our <span className="text-white font-bold">AI-powered video production studio in Kochi</span> combines cinematic storytelling with generative AI workflows to deliver scalable, high-performance content for brands across India.
           </p>
        </div>
      </section>

      {/* 1. CORE CAPABILITIES (H2: Media Production & AI Studio Services) */}
      <section id="capabilities" className="py-24 md:py-40 px-4 md:px-12 bg-black border-b border-white/5 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            h2
            tag="Strategic Identity"
            title={<>Media Production & <br />AI Studio <span className="text-primary-accent italic">Services_</span></>}
            subtitle="We are a video production company in Kerala specializing in AI-powered video production and cinematic brand films."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
             <div className="space-y-10">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight">Unified Production Excellence</h3>
                <p className="text-lg text-zinc-400 font-normal leading-relaxed">
                   Based in <span className="text-white font-bold">Kochi and Trivandrum</span>, we serve brands across India. We provide TV commercial production, corporate video production, and AI-generated content designed to increase engagement, conversions, and brand authority.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                   <div className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-500">Kochi & Trivandrum</div>
                   <div className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-500">National Reach</div>
                   <div className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-500">AI Innovation</div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { t: "TV Commercial Production", d: "H3: Broadcast-quality ad films", i: Play },
                  { t: "AI Video Production", d: "H3: High-speed AI content", i: Cpu },
                  { t: "Corporate Brand Films", d: "H3: Professional storytelling", i: Star },
                  { t: "Digital Ad Creatives", d: "H3: Performance-driven ads", i: Zap }
                ].map(item => (
                  <div key={item.t} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4 group hover:bg-primary-accent/5 transition-all">
                     <item.i size={20} className="text-primary-accent" />
                     <div className="space-y-1">
                        <h4 className="text-sm font-bold uppercase tracking-widest block text-white">{item.t}</h4>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{item.d}</span>
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
                   tag="Cinematic Focus" 
                   title={<>Cinematic Video <br />Production & <span className="text-primary-accent italic">Brand Films_</span></>} 
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
                      <h3 key={bullet} className="flex items-center gap-4 text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-white font-bold">
                         <div className="h-1.5 w-1.5 rounded-full bg-primary-accent" />
                         {bullet}
                      </h3>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                 <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] relative group">
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" alt="AI Video Production Company in Kerala" />
                    <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                       <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] block mb-2">Service Excellence</span>
                       <h4 className="text-base md:text-lg font-bold uppercase tracking-widest text-white">AI Content Lab</h4>
                    </div>
                 </div>
                 <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] relative group lg:mt-24">
                    <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" alt="Best Video Production Company in Kerala" />
                    <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                       <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] block mb-2">Cinematic Art</span>
                       <h4 className="text-base md:text-lg font-bold uppercase tracking-widest text-white">Brand Film Hub</h4>
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
             tag="Future Tech" 
             title={<>AI Video <br />Production & <span className="text-primary-accent italic">Content Creation_</span></>} 
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
                   <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed font-normal">{adv.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. AUTHORITY BLOCK (H2: Best Video Production Company in Kerala) */}
      <section className="relative py-32 md:py-56 px-6 md:px-12 bg-black overflow-hidden border-b border-white/5">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-accent-rgb),0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left: The "We Are" Statement */}
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary-accent/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-accent">The Authority</span>
                </div>

                <div className="space-y-12">
                  <h2 className="text-3xl md:text-5xl lg:text-[4.2rem] font-medium leading-[1.1] tracking-tight text-white">
                    We are a <span className="text-primary-accent italic font-light">leading</span> video production company in Kerala.
                  </h2>
                  
                  <div className="max-w-3xl">
                    <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                      Offering end-to-end media production services, including <span className="text-white border-b border-primary-accent/30 pb-1">TV commercial production</span>, brand film production, and corporate video production.
                    </p>
                    
                    <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed">
                      Our AI-powered video production studio in Kochi combines <span className="italic">cinematic storytelling</span> with generative AI workflows to deliver <span className="text-primary-accent font-normal">scalable, high-performance content</span> for brands across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Stats / Feature Cards */}
            <div className="lg:col-span-4 lg:pt-12">
              <div className="grid grid-cols-1 gap-6">
                <div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-primary-accent/20 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                      <Cpu size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Neural Engine</span>
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">AI-Powered Studio</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-tighter">Proprietary generative workflows for visual scaling.</p>
                </div>

                <div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-primary-accent/20 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                      <Zap size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Cinematic Mesh</span>
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">End-to-End Media</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-tighter">Full-spectrum TVC & Brand Film production cycle.</p>
                </div>
                
                <Link 
                  href="/contact" 
                  className="mt-4 flex items-center justify-center gap-3 w-full h-16 rounded-3xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.2)]"
                >
                  Start Production <ArrowRight size={18} />
                </Link>
              </div>
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
            <SectionHeader h2 tag="Success Factors" title={<>Why Brands Choose Our <br />Production <span className="text-primary-accent italic">Studio_</span></>} />
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
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed font-normal">{adv.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. SOCIAL PROOF (Experience, Clients, Stats) */}
      <section className="py-24 md:py-40 px-4 md:px-12 bg-obsidian border-y border-white/5">
        <div className="container mx-auto">
          <SectionHeader tag="Market Reach" title={<>Proven <span className="text-primary-accent italic">Authority_</span></>} />
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
                <m.i size={20} className="text-primary-accent mb-6" />
                <span className="text-2xl md:text-3xl font-black mb-2">{m.v}</span>
                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-500">{m.l}</span>
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
              tag="Initialize Mission" 
              title={<>Start Your <br /><span className="text-primary-accent italic">Project Now_</span></>}
            />
            <p className="text-zinc-500 font-normal uppercase text-sm tracking-[0.2em] md:tracking-[0.4em] mb-16 md:mb-20 max-w-2xl mx-auto">
              Are you ready for national-level brand films and high-speed AI content? Partner with the best video production company in Kerala.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               <Link href="/portfolio" className="h-20 md:h-24 rounded-2xl md:rounded-3xl bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl">See Our Portfolio <ArrowRight size={18} /></Link>
               <Link href="/contact" className="h-20 md:h-24 rounded-2xl md:rounded-3xl bg-primary-accent text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary-accent/20">Get a Quote <MessageCircle size={18} /></Link>
            </div>
        </div>
      </section>

      <WhatsAppChat />
    </main>
  );
}
