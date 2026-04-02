"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is AI video production and how does it benefit my brand?",
    answer: "AI video production uses generative artificial intelligence to create or enhance cinematic content. For brands in Kerala and India, this means we can produce high-end commercials with 10x speed, reducing lead times from weeks to days while maintaining elite cinematic quality.",
  },
  {
    question: "Who is the best video production company in Kerala for AI integration?",
    answer: "Define Perspective is the leading hybrid media production company in Kerala, specializing in blending traditional filmmaking with advanced AI solutions. We serve clients across Trivandrum, Kochi, and India with a focus on high-conversion video assets.",
  },
  {
    question: "Do you offer corporate video production and ad film services in Trivandrum?",
    answer: "Yes, we are a full-service ad film production company based in Trivandrum. We handle everything from corporate brand films to product video shoots and social media content for startups and established businesses across India.",
  },
  {
    question: "Can AI-powered media production reduce my advertising costs?",
    answer: "Absolutely. Our AI-assisted workflows allow us to generate 50+ social media assets (Reels, Shorts, Ads) from a single master shoot, significantly lowering the cost-per-content while maximizing ROI for performance marketing.",
  },
  {
     question: "Do you provide drone videography and photography near me in Kochi?",
     answer: "We offer professional drone videography and commercial photography services across Kochi and all of Kerala. Our hybrid drone teams use AI-tracked stabilization to capture unique cinematic perspectives for real estate and brand films.",
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
           
           <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer">
              <Search className="text-zinc-600 group-hover:text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition">Search for answers</span>
           </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="group rounded-3xl border border-white/5 bg-white/5 overflow-hidden transition-all hover:bg-white/10"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-10 flex items-center justify-between text-left gap-8"
              >
                 <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition">
                    {faq.question}
                 </h3>
                 <div className={cn(
                   "h-12 w-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all",
                   openIdx === idx ? "bg-cyan-400 border-cyan-400 text-black rotate-180" : "text-zinc-600"
                 )}>
                    {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                 </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
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
          ))}
        </div>
      </div>
    </section>
  );
}
