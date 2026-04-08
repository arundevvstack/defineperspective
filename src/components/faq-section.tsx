"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What makes Define Perspective the best AI video production company in India?",
    answer: "As a leading AI video production company, Define Perspective combines 2026-era neural pipelines with elite cinematic craft. We specialize in generative media, providing brands across India and global markets with 10x faster production cycles and unmatched visual authority.",
  },
  {
    question: "Who is the top AI video production company in Kerala for hybrid projects?",
    answer: "Define Perspective is recognized as the top AI video production company in Kerala. We operate advanced AI labs in Kochi and Trivandrum, blending traditional live-action filming with neural synthesis for high-conversion brand films.",
  },
  {
    question: "How does an AI video production company reduce overall project costs?",
    answer: "Our AI-powered studio workflows allow us to generate specialized cinematic assets and multi-format variants from a single session. This efficiency makes us a highly cost-effective AI video production company for startups and global enterprises alike.",
  },
  {
     question: "Can an AI video production company handle professional drone videography in Kochi?",
     answer: "Yes. Our hybrid teams integrate AI-stabilized drone capture with generative post-production, making us the most technologically advanced AI video production company for real estate and commercial projects in Kochi.",
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-40 px-6 md:px-12 bg-black/40 relative">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 max-w-6xl mx-auto">
           <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500 mb-6 block">Quick Support {" // "} Help Center</span>
              <h2 className="text-4xl font-black md:text-7xl text-white tracking-widest uppercase">
                Common Questions
              </h2>
              <p className="mt-8 text-xl text-zinc-400 font-light leading-relaxed">
                 Everything you need to know about our professional video production and photography services.
              </p>
           </div>
           
           <button 
             aria-label="Search for answers" 
             className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl flex items-center gap-4 group transition-all cursor-pointer hover:border-primary-accent/30"
           >
              <Search className="text-zinc-600 group-hover:text-primary-accent transition-colors" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-primary-accent transition-colors">Search for answers</span>
           </button>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="group rounded-3xl border border-white/5 bg-white/5 overflow-hidden transition-all hover:bg-white/10 hover:border-primary-accent/20"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-10 flex items-center justify-between text-left gap-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                   <h3 id={`faq-question-${idx}`} className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-primary-accent">
                      {faq.question}
                   </h3>
                   <div className={cn(
                     "h-12 w-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all",
                     isOpen ? "bg-transparent border-2 border-primary-accent text-white rotate-180" : "text-zinc-600"
                   )}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-10 pb-10 border-t border-white/5 pt-8">
                         <p className="text-lg text-zinc-400 font-light leading-relaxed">
                           {faq.answer}
                         </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
