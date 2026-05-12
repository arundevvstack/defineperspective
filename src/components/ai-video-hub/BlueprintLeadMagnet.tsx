"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Zap, Sparkles, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function BlueprintLeadMagnet() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="lead-magnet" className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-accent/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="p-12 md:p-32 rounded-[5rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl relative overflow-hidden group">
          
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
                <div className="space-y-6">
                   <div className="flex items-center gap-4 mb-4">
                      <span className="px-5 py-1.5 rounded-full bg-primary-accent/10 border border-primary-accent/30 text-[9px] font-black text-primary-accent uppercase">Free Resource_</span>
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
                      The 2026 AI <br />
                      <span className="text-primary-accent">Commercial_</span> <br />
                      Blueprint
                   </h2>
                   <p className="text-xl text-zinc-400 font-light max-w-xl uppercase leading-relaxed">
                      Download the luxury guide explaining how modern brands use cinematic AI advertising to scale attention, authority, and conversions.
                   </p>
                </div>

                <ul className="space-y-6">
                   {[
                     "Future of AI vs Traditional TVCs",
                     "Viral Ad Psychology & Hook Design",
                     "Luxury AI Branding Strategies",
                     "2026 AI Media Content Trends"
                   ].map((item) => (
                     <li key={item} className="flex items-center gap-6 group/item">
                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent group-hover/item:bg-primary-accent group-hover/item:text-black transition-all">
                           <CheckCircle2 size={18} />
                        </div>
                        <span className="text-xs font-bold text-zinc-300 uppercase group-hover/item:text-white transition-colors">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>

             <div className="relative">
                <AnimatePresence mode="wait">
                   {!submitted ? (
                     <motion.div 
                        key="form"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="p-12 rounded-[4rem] bg-black/40 border border-white/5 space-y-10"
                     >
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-zinc-500 uppercase">Email Address_</label>
                           <input 
                              type="email" 
                              placeholder="you@brand.com"
                              className="w-full h-20 bg-white/5 border border-white/10 rounded-2xl px-8 text-white font-bold focus:border-primary-accent outline-none transition-all"
                           />
                        </div>
                        <button 
                           onClick={() => setSubmitted(true)}
                           className="w-full h-24 rounded-3xl bg-white text-black font-black uppercase text-xs flex items-center justify-center gap-6 hover:bg-primary-accent transition-all duration-500 shadow-2xl shadow-white/5"
                        >
                           Download Blueprint <Download size={24} />
                        </button>
                        <p className="text-[8px] text-zinc-600 uppercase text-center">No spam. Only high-fidelity intelligence.</p>
                     </motion.div>
                   ) : (
                     <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-12 rounded-[4rem] bg-primary-accent text-black flex flex-col items-center text-center space-y-8"
                     >
                        <div className="h-24 w-24 rounded-full bg-black/10 flex items-center justify-center">
                           <Zap size={48} />
                        </div>
                        <h4 className="text-3xl font-black uppercase">Transmission Successful</h4>
                        <p className="text-xs font-bold uppercase">The 2026 AI Commercial Blueprint has been sent to your terminal.</p>
                        <button className="h-16 px-10 rounded-2xl bg-black text-white font-black uppercase text-[10px] flex items-center gap-4">
                           Check Inbox <ArrowRight size={16} />
                        </button>
                     </motion.div>
                   )}
                </AnimatePresence>

                {/* Floating Icons */}
                <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary-accent/10 blur-[50px] rounded-full pointer-events-none" />
             </div>
          </div>

          {/* Decorative Icon Background */}
          <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
             <FileText size={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
