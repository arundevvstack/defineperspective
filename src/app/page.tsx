"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MoveRight, ChevronRight, BarChart3, Clock, Workflow, Sparkles, 
  Wand2, Globe, Mail, Phone, Calendar, Download, MessageCircle, 
  Camera, Video, User, MapPin, Send, Zap, Star, ArrowRight
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import TerminalHero from "@/components/terminal-hero";
import ServiceGrid from "@/components/service-grid";
import PortfolioSection from "@/components/portfolio-section";
import MetricsSection from "@/components/metrics-section";
import TestimonialSection from "@/components/testimonial-section";
import FAQSection from "@/components/faq-section";
import PricingCalculator from "@/components/pricing-calculator";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";

import IndustriesSection from "@/components/industries-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <GlassNavbar />
      
      {/* Section 0: Hero Section */}
      <TerminalHero />

      {/* Section 1: Services */}
      <ServiceGrid />

      {/* Section 2: Why Choose Us (Benefits) */}
      <section className="py-32 px-6 md:px-12 bg-black relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {[
               { title: "Fast Delivery with AI", text: "Production cycles reduced from weeks to days with high-velocity AI pipelines.", icon: Zap },
               { title: "Premium Cinematic Quality", text: "High-end filmmaking fused with modern AI to outshine traditional competition.", icon: Star },
               { title: "Cost-Effective Scale", text: "Efficient asset generation at lower budgets for startups and brands across India.", icon: BarChart3 }
             ].map((benefit, bIdx) => (
               <motion.div 
                 key={bIdx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: bIdx * 0.1 }}
                 className="p-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--glass-white)] flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
               >
                 <div className="h-16 w-16 rounded-2xl bg-primary-accent flex items-center justify-center text-primary-accent-fg mb-6">
                    <benefit.icon size={32} />
                 </div>
                 <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-4">{benefit.title}</h3>
                 <p className="text-zinc-500 font-light leading-relaxed">{benefit.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 3: Strategic Verticals (Industries) */}
      <IndustriesSection />

      {/* Section 4: Results & Metrics */}
      <MetricsSection />

      {/* Section 5: DP 360° Plan (The "Bridge") */}

      {/* Section 6: Our Work (Portfolio) */}
      <PortfolioSection />

      {/* Section 7: Conversion Hub (Call to Action) */}
      <section className="py-40 px-6 md:px-12 bg-black/40 relative">
        <div className="container mx-auto">
          <div className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-black md:text-7xl text-white tracking-widest uppercase">
              Start Your <span className="text-cyan-400 font-black italic drop-shadow-[0_0_15px_rgba(240,68,71,0.4)]">Project.</span>
            </h2>
            <p className="mt-8 text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
              "We combine cinematic filmmaking with AI-powered speed and scalability to deliver high-impact content for modern brands."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32 text-left">
             <motion.div 
               whileHover={{ y: -10 }}
               className="p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--glass-white)] backdrop-blur-xl flex flex-col gap-10 hover:bg-[var(--glass-white)]/80 transition-all group shadow-sm"
             >
                <div className="h-16 w-16 rounded-2xl bg-primary-accent flex items-center justify-center text-primary-accent-fg shadow-2xl transition-transform group-hover:scale-110">
                   <Calendar size={32} />
                </div>
                <div>
                   <h3 className="text-3xl font-black uppercase tracking-widest mb-6 leading-tight">Book a Free Consultation</h3>
                   <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                     "Need a custom strategy? Book a free 15-minute call with our creative team to plan your video roadmap for 2026."
                   </p>
                </div>
                <button 
                   onClick={() => window.location.href = '/contact?subject=Priority Strategy Session Request'}
                   className="h-16 w-full rounded-2xl bg-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl"
                 >
                   Request a Quote <MoveRight size={18} className="inline ml-2" />
                 </button>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10 }}
               className="p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--glass-white)] backdrop-blur-xl flex flex-col gap-10 hover:bg-[var(--glass-white)] transition-all group"
             >
                <div className="h-16 w-16 rounded-2xl bg-[var(--glass-white)] border border-[var(--border-subtle)] flex items-center justify-center text-cyan-400 shadow-2xl transition-transform group-hover:scale-110">
                   <Download size={32} />
                </div>
                <div>
                   <h3 className="text-3xl font-black uppercase tracking-widest mb-6 leading-tight">Request a Custom Quote</h3>
                   <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                     "Get a precision estimate for your cinematic brand films and AI content within 24 hours. Our rates are performance-indexed."
                   </p>
                </div>
                <button 
                   onClick={() => {
                     window.dispatchEvent(new CustomEvent('open-ai-chat', { detail: 'Custom Quote Generation' }));
                   }}
                   className="h-16 w-full rounded-2xl border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-primary-accent hover:text-primary-accent-fg hover:border-primary-accent transition-all shadow-[0_0_20px_rgba(var(--accent-rgb),0)]"
                 >
                   Request a Quote <ArrowRight size={18} className="inline ml-2" />
                 </button>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Position: Minimalist SEO Summary */}
      <section className="py-24 px-6 md:px-12 bg-black/60 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-cyan-400 mb-6 block">Strategic Focus {" // "} 2026</span>
              <h2 className="text-4xl font-bold text-white mb-10 tracking-tight leading-tight">
                Premium AI filmmaking specifically engineered for <span className="text-cyan-400">Growth-Stage Brands.</span>
              </h2>
            </div>
            <div className="space-y-8 text-sm text-zinc-500 font-light leading-relaxed">
              <p>
                Based in <span className="text-white font-medium">Trivandrum & Kochi</span>, we deliver the future of media. By fusing high-fidelity cinematography with proprietary AI pipelines, we provide <span className="text-white font-medium">10x faster production</span> without compromising on aesthetic excellence.
              </p>
              <p>
                Our production models are <span className="text-cyan-400">AEO-Structured</span> — ensuring your content is optimized not just for legacy search engines, but for the next generation of AI-driven visibility platforms across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <TestimonialSection />

      {/* Intelligent FAQ (AEO Optimized) */}
      <FAQSection />

      {/* Floating AI Agent */}
      <AIDiscoveryAgent />
    </main>
  );
}
