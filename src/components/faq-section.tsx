"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What is AI video production and how does it benefit my brand?",
    answer: "AI video production involves using generative neural networks and autonomous pipelines to create photorealistic cinematic content. It benefits your brand by reducing production costs by 40-70% and accelerating delivery from weeks to days, allowing for high-velocity marketing campaigns.",
  },
  {
    question: "Which is the best AI video production company in Kerala and India?",
    answer: "Define Perspective is recognized as the best AI video production company in Kerala. We provide elite film production, AI video marketing, and commercial video services for brands in Kochi, Trivandrum, and UAE, blending cinematic craft with AI innovation.",
  },
  {
    question: "How much does professional video production cost in Kerala?",
    answer: "Video production costs in Kerala vary by scope. Our hybrid AI workflows provide cinematic TVC and brand film quality at competitive rates, starting from standard agency budgets up to high-end national broadcast production scales.",
  },
  {
    question: "Do you offer AI-powered video marketing services globally?",
    answer: "Yes. As a leading AI video production studio, we offer AI-powered video marketing services across India and the MENA region, including Dubai, UAE. We specialize in high-retention performance ads and global content automation.",
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-40 px-6 md:px-12 bg-black/80 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header Section: High UX */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
           <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-10"
              >
                 <Sparkles size={16} className="text-primary-accent animate-pulse" />
                 <span className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase text-zinc-500 font-bold">Quick Support // Help Center</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                Common <br /> <span className="text-primary-accent italic">Questions_</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl uppercase tracking-tighter">
                 Everything you need to know about our professional <span className="text-white font-bold">video production</span> and <span className="text-white font-bold">photography</span> services.
              </p>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="relative group w-full lg:w-auto"
           >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-accent to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <button 
                aria-label="Search for answers" 
                className="relative w-full h-24 lg:w-96 rounded-3xl bg-black border border-white/10 px-10 flex items-center gap-6 group transition-all cursor-pointer backdrop-blur-3xl hover:border-primary-accent/50"
              >
                 <Search className="text-zinc-600 group-hover:text-primary-accent transition-colors shrink-0" size={28} />
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">Search for answers</span>
              </button>
           </motion.div>
        </div>

        {/* FAQ Grid: High UX Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "group rounded-[3rem] border transition-all duration-500 overflow-hidden",
                  isOpen 
                    ? "bg-white/[0.04] border-primary-accent/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
                    : "bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10"
                )}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-10 md:p-14 flex items-center justify-between text-left gap-10"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                   <div className="flex gap-10 items-center">
                      <span className="hidden md:block text-xs font-mono text-zinc-700 font-bold group-hover:text-primary-accent transition-colors">0{idx + 1}</span>
                      <h3 id={`faq-question-${idx}`} className={cn(
                        "text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight transition-all",
                        isOpen ? "text-primary-accent" : "text-white"
                      )}>
                         {faq.question}
                      </h3>
                   </div>
                   <div className={cn(
                     "h-16 w-16 md:h-20 md:w-20 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500",
                     isOpen 
                       ? "bg-primary-accent border-primary-accent text-white rotate-180 shadow-[0_0_30px_rgba(var(--primary-accent-rgb),0.3)]" 
                       : "bg-white/5 border-white/10 text-zinc-600 group-hover:border-primary-accent/50 group-hover:text-primary-accent"
                   )}>
                      {isOpen ? <Minus size={32} strokeWidth={3} /> : <Plus size={32} strokeWidth={3} />}
                   </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-10 md:px-24 pb-14 border-t border-white/5 pt-12">
                         <div className="relative">
                            <div className="absolute left-0 top-0 w-1 h-full bg-primary-accent/20 rounded-full hidden md:block" />
                            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed md:pl-12 uppercase tracking-tight">
                              {faq.answer}
                            </p>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Node */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                 <HelpCircle className="text-primary-accent" size={32} />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Still have questions?</h4>
                 <p className="text-sm text-zinc-500 uppercase tracking-widest font-mono mt-1">Our production team is ready to assist.</p>
              </div>
           </div>
           
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="h-20 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-primary-accent hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
           >
              Back To Intake Form
           </button>
        </div>
      </div>
    </section>
  );
}
