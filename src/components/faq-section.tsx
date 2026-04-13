"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Which is the best video production company in Kerala?",
    answer: "Define Perspective is a leading media production and AI video production company based in Kochi and Trivandrum. We specialize in high-end brand films, TV commercial production, and cinematic corporate videos for clients across India.",
  },
  {
    question: "Do you offer AI video production services in India?",
    answer: "Yes, we provide advanced generative AI video production services across India. Our AI studio in Kochi combines cinematic craftsmanship with neural rendering to create high-performing social media content and product videos.",
  },
  {
    question: "What types of media production services do you provide?",
    answer: "Our services include TV commercial production, corporate video production, brand film production, cinematic photography, and AI-powered content creation designed for growth and brand authority.",
  },
  {
    question: "Is AI-powered video production effective for engagement?",
    answer: "Our AI-generated content is strictly designed to increase engagement, conversions, and brand authority. By combining cinematic human art direction with AI velocity, we deliver high-performing assets for modern brands.",
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="pt-40 pb-20 px-4 md:px-12 bg-black/80 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header Section: High UX */}
        <div className="mb-20 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-16">
           <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-10"
              >
                 <Sparkles size={16} className="text-primary-accent animate-pulse" aria-hidden="true" />
                 <span className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase text-zinc-400 font-bold">Quick Support // Help Center</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-9xl font-black text-white uppercase tracking-tighter leading-tight md:leading-[0.85] mb-12">
                Common <br /> <span className="text-primary-accent italic">Questions_</span>
              </h2>
              
              <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl uppercase tracking-tighter">
                 Everything you need to know about our professional <span className="text-white font-bold">video production</span> and <span className="text-white font-bold">AI content</span> services.
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
                className="relative w-full h-20 md:h-24 lg:w-96 rounded-2xl md:rounded-3xl bg-black border border-white/10 px-6 md:px-10 flex items-center gap-6 group transition-all cursor-pointer backdrop-blur-3xl hover:border-primary-accent/50"
              >
                 <Search className="text-zinc-400 group-hover:text-primary-accent transition-colors shrink-0" size={24} aria-hidden="true" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">Search for answers</span>
              </button>
           </motion.div>
        </div>

        {/* FAQ Grid: High UX Accordion */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                  "group rounded-[2.5rem] md:rounded-[3.5rem] border transition-all duration-500 overflow-hidden",
                  isOpen 
                    ? "bg-white/[0.04] border-primary-accent/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
                    : "bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10"
                )}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-8 md:p-14 flex items-center justify-between text-left gap-6 md:gap-10 outline-none focus:ring-2 focus:ring-primary-accent/50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                   <div className="flex gap-4 md:gap-10 items-center">
                      <span className="hidden md:block text-xs font-mono text-zinc-400 font-bold group-hover:text-primary-accent transition-colors">0{idx + 1}</span>
                      <h3 id={`faq-question-${idx}`} className={cn(
                        "text-lg md:text-3xl font-black uppercase tracking-tighter leading-tight transition-all",
                        isOpen ? "text-primary-accent" : "text-white"
                      )}>
                         {faq.question}
                      </h3>
                   </div>
                   <div className={cn(
                     "h-12 w-12 md:h-20 md:w-20 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500",
                     isOpen 
                       ? "bg-primary-accent border-primary-accent text-white rotate-180 shadow-[0_0_30px_rgba(var(--primary-accent-rgb),0.3)]" 
                       : "bg-white/5 border-white/10 text-zinc-600 group-hover:border-primary-accent/50 group-hover:text-primary-accent"
                   )}>
                      {isOpen ? <Minus size={20} strokeWidth={3} className="md:w-8 md:h-8" aria-hidden="true" /> : <Plus size={20} strokeWidth={3} className="md:w-8 md:h-8" aria-hidden="true" />}
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
                      <div className="px-8 md:px-24 pb-10 md:pb-14 border-t border-white/5 pt-8 md:pt-12">
                         <div className="relative">
                            <div className="absolute left-0 top-0 w-1 h-full bg-primary-accent/20 rounded-full hidden md:block" />
                            <p className="text-base md:text-2xl text-zinc-400 font-light leading-relaxed md:pl-12 uppercase tracking-tight">
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
        <div className="mt-24 md:mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                 <HelpCircle className="text-primary-accent" size={24} aria-hidden="true" />
              </div>
              <div>
                 <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">Still have questions?</h4>
                 <p className="text-[10px] md:text-sm text-zinc-400 uppercase tracking-widest font-mono mt-1">Our production team is ready to assist.</p>
              </div>
           </div>
           
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="h-16 md:h-20 w-full md:w-auto px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-primary-accent hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
           >
              Back To Intake Form
           </button>
        </div>
      </div>
    </section>
  );
}
