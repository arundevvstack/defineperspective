"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  BarChart3, Zap, Star, ArrowRight, Calendar, MessageCircle
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import TerminalHero from "@/components/terminal-hero";
import ServiceGrid from "@/components/service-grid";
import Link from "next/link";

// Dynamic imports for performance optimization
const IndustriesSection = dynamic(() => import("@/components/industries-section"));
const MetricsSection = dynamic(() => import("@/components/metrics-section"));
const PortfolioSection = dynamic(() => import("@/components/portfolio-section"));
const TestimonialSection = dynamic(() => import("@/components/testimonial-section"));
const FAQSection = dynamic(() => import("@/components/faq-section"));
const WhatsAppChat = dynamic(() => import("@/components/whatsapp-chat"), { ssr: false });


export default function HomeContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white transition-colors duration-500 overflow-x-hidden">
      <GlassNavbar />
      
      {/* Section 0: Hero Section */}
      <TerminalHero />

      {/* Section 1: Services Matrix */}
      <section id="services" className="relative z-10">
        <ServiceGrid />
      </section>

      {/* Section 2: Why Choose Us (Benefits) */}
      <section className="py-32 px-6 md:px-12 bg-black relative border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {[
               { title: "Fast Delivery with AI", text: "Production cycles reduced from weeks to days with high-speed AI systems.", icon: Zap },
               { title: "Premium Visual Quality", text: "High-end filmmaking combined with modern AI to outshine the competition.", icon: Star },
               { title: "Cost-Effective Results", text: "Efficient video creation at lower budgets for startups and brands across India.", icon: BarChart3 }
             ].map((benefit, bIdx) => (
               <motion.div 
                 key={bIdx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: bIdx * 0.1 }}
                 className="p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col items-center group/30 transition-all shadow-xl hover:text-primary-accent transition-all duration-300"
               >
                 <div className="h-16 w-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                    <benefit.icon size={32} />
                 </div>
                 <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-6 leading-none">{benefit.title}</h3>
                 <p className="text-zinc-600 font-light leading-relaxed uppercase text-[10px] tracking-widest">{benefit.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 3: Strategic Verticals (Industries) */}
      <IndustriesSection />

      {/* Section 4: Results & Metrics */}
      <MetricsSection />

      {/* Section 6: Our Work (Portfolio) */}
      <PortfolioSection />

      {/* Section 7: Conversion Hub (Call to Action) */}
      <section className="py-48 px-6 md:px-12 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-accent mb-8 block">Project Inquiry {" // "} Start Today</span>
            <h2 className="text-5xl md:text-[8rem] font-black text-white tracking-tighter uppercase leading-[0.8]">
              Ready for <br /><span className="text-primary-accent italic">Impact?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 text-left">
             <motion.div 
               className="p-16 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col gap-10/30 transition-all group shadow-xl hover:text-primary-accent transition-all duration-300"
             >
                <div className="h-20 w-20 rounded-3xl bg-transparent border-2 border-primary-accent text-white flex items-center justify-center transition-transform group-hover:scale-110 hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                   <Calendar size={36} />
                </div>
                <div>
                   <h3 className="text-4xl font-black uppercase tracking-widest mb-6 leading-tight">Business <br />Consultation</h3>
                   <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10 uppercase tracking-widest text-[11px]">
                     "Plan your high-impact visual strategy for the new year."
                   </p>
                </div>
                <div className="flex flex-col gap-6 mt-auto">
                  <button
                    onClick={() => window.location.href = '/contact?subject=Priority Strategy Session Request'}
                    className="group relative h-20 w-full rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-xl transition-all hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-accent">Get a Quote</span> 
                    <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform transition-colors duration-300 group-hover:text-primary-accent" />
                  </button>
                  <Link 
                    href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20a%20Consultation."
                    target="_blank"
                    className="group h-20 w-full rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/50 transition-all flex items-center justify-center gap-4 hover:text-primary-accent transition-all duration-300"
                  >
                    Chat on WhatsApp <MessageCircle size={22} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
             </motion.div>

             <motion.div 
               className="p-16 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col gap-10/30 transition-all group shadow-xl hover:text-primary-accent transition-all duration-300"
             >
                <div className="h-20 w-20 rounded-3xl bg-transparent border border-white/20 text-primary-accent flex items-center justify-center transition-transform group-hover:scale-110 hover:text-primary-accent transition-all duration-300">
                   <Zap size={36} />
                </div>
                <div>
                   <h3 className="text-4xl font-black uppercase tracking-widest mb-6 leading-tight">AI Product <br />Production</h3>
                   <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10 uppercase tracking-widest text-[11px]">
                     "Scale your brand identity with realistic AI videos and assets."
                   </p>
                </div>
                <div className="flex flex-col gap-6 mt-auto">
                  <motion.button 
                    onClick={() => window.location.href = '/contact?subject=AI Content Production Inquiry'}
                    className="h-20 w-full rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/50 transition-all flex items-center justify-center gap-4 hover:text-primary-accent transition-all duration-300"
                  >
                    Request AI Demo <ArrowRight size={22} />
                  </motion.button>
                  <Link 
                    href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20AI%20Content%20Production."
                    target="_blank"
                    className="group relative h-20 w-full rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-xl transition-all hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
                  >
                    <span className="relative z-10">Discuss on WhatsApp</span> 
                    <MessageCircle size={22} className="relative z-10 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

       {/* Strategic Position: Search Authority Summary */}
      <section className="py-32 px-6 md:px-12 bg-black/60 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent mb-8 block">Our Location {" // "} India & Kerala</span>
              <h2 className="text-5xl font-black text-white mb-10 tracking-tighter leading-none uppercase">
                AI filmmaking for <br /><span className="text-primary-accent">Visionary Brands.</span>
              </h2>
            </div>
            <div className="space-y-10 text-xl font-light text-zinc-500 leading-relaxed uppercase tracking-tight">
              <p>
                Based in <span className="text-white font-bold">Trivandrum & Kochi</span>, we deliver high-quality media. By combining beautiful filmmaking with our custom AI systems, we provide <span className="text-white font-bold italic">10x faster production</span> without compromising quality.
              </p>
              <p>
                Everything we build is <span className="text-primary-accent font-bold">Search Ready</span> — optimized for easy discovery by search engines and the newest AI tools used by customers globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <TestimonialSection />

      {/* Intelligent FAQ */}
      <FAQSection />

      {/* Floating AI Agent */}
      <WhatsAppChat />
    </main>
  );
}
