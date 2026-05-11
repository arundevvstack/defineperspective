"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Download, ShieldCheck, Mail } from "lucide-react";

export default function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    // Trigger modal after 15 seconds or 50% scroll
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("dp_lead_magnet_seen");
      if (!hasSeen) setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await fetch('/api/leads/capture', {
        method: 'POST',
        body: JSON.stringify({ 
          email, 
          sourceUrl: window.location.href,
          asset: "2026_AI_Production_Strategy_Guide"
        })
      });
      
      setStatus("success");
      localStorage.setItem("dp_lead_magnet_seen", "true");
      setTimeout(() => setIsOpen(false), 3000);
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-obsidian border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-6 z-10">
               <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full text-zinc-500 transition-colors">
                  <X size={20} />
               </button>
            </div>

            <div className="p-12 space-y-8">
               <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary-accent/20 bg-primary-accent/5 w-fit font-mono text-[10px] text-primary-accent uppercase tracking-[0.3em]">
                  <Download size={12} className="animate-bounce" /> Exclusive Intelligence Asset
               </div>

               <div className="space-y-4">
                  <h2 className="text-4xl font-blacker uppercase italic leading-[0.9] tracking-tighter">
                     The 2026 <br /><span className="text-primary-accent">AI Video Strategy</span> <br /> Manifesto_
                  </h2>
                  <p className="text-sm text-zinc-400 font-light uppercase tracking-widest leading-relaxed">
                     Get the exact blueprint we use to scale high-fidelity cinematic content for global brands. Zero fluff. Pure neural velocity.
                  </p>
               </div>

               {status === "success" ? (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto text-green-500">
                       <ShieldCheck size={32} />
                    </div>
                    <p className="text-sm font-black uppercase tracking-widest text-white">Transmission Successful. Check your inbox.</p>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                       <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-primary-accent transition-colors" size={18} />
                       <input 
                         type="email" 
                         required
                         placeholder="ENTER WORK EMAIL"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="w-full h-16 bg-white/[0.03] border border-white/10 rounded-2xl px-16 text-sm font-mono focus:border-primary-accent/50 focus:outline-none transition-all placeholder:text-zinc-700"
                       />
                    </div>
                    <button 
                      disabled={status === "loading"}
                      className="w-full h-16 bg-primary-accent text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary-accent/20"
                    >
                      {status === "loading" ? "INITIALIZING..." : <><ArrowRight size={16} /> Access Strategic Intel</>}
                    </button>
                    <p className="text-[9px] text-zinc-600 text-center uppercase tracking-widest font-mono">
                       Secure Neural Connection. No Spam. 100% Signal.
                    </p>
                 </form>
               )}
            </div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-accent/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
