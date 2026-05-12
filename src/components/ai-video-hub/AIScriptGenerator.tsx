"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Send, RefreshCw, MessageSquare, ArrowRight, Zap, Target, Sparkles, Calendar, DollarSign, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AIScriptGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: "",
    product: "",
    audience: "D2C Consumers",
    mood: "Luxury/Cinematic",
    goal: "Viral Awareness",
    budget: "₹2L - ₹5L",
    timeline: "2-4 Weeks",
    name: "",
    email: "",
    phone: ""
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [script, setScript] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateScript = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setScript(`[SCENE 1: NEURAL CONCEPT]
Visual: Slow-motion macro shot of ${formData.product} under volumetric lighting.
Audio: Low-frequency atmospheric hum.

[SCENE 2: THE HOOK]
Text Overlay: "THE FUTURE OF ${formData.brand.toUpperCase()} IS HERE."
Action: Neural transition into a cinematic lifestyle montage targeting ${formData.audience}.

[SCENE 3: THE CORE]
Visual: 3-second high-velocity montage showing the product in "Cyber-Luxury" environments.
Audio: Upbeat, rhythmic neural beat drops.

[SCENE 4: CTA]
Visual: Clean product shot with "ANTIGRAVITY" shadow effects.
CTA: "EXPERIENCE THE FUTURE."`);
      setIsGenerating(false);
      setStep(3);
    }, 2000);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/neural-production-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, script })
      });
      
      if (response.ok) {
        setStep(6);
      }
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-40 px-6 md:px-12 bg-obsidian relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-24 space-y-8">
           <span className="text-primary-accent font-mono text-[10px] uppercase font-black underline decoration-2 underline-offset-8">
              AI Creative Hub {" // "} Script Generator
           </span>
           <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
              Neural Cinema <br />
              <span className="text-primary-accent">Production Wizard_</span>
           </h2>
           <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto uppercase leading-relaxed">
              Generate your concept and convert it into a production-ready blueprint in seconds.
           </p>
        </div>

        <div className="p-12 md:p-24 rounded-[5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden">
           <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                   <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                         <label className="text-[10px] font-black text-zinc-500 uppercase">Brand Name_</label>
                         <input 
                            type="text" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})}
                            placeholder="e.g. Elite Silk"
                            className="w-full h-20 bg-white/5 border border-white/10 rounded-2xl px-8 text-white font-bold focus:border-primary-accent outline-none transition-all"
                         />
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black text-zinc-500 uppercase">Product/Service_</label>
                         <input 
                            type="text" value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})}
                            placeholder="e.g. Luxury Watches"
                            className="w-full h-20 bg-white/5 border border-white/10 rounded-2xl px-8 text-white font-bold focus:border-primary-accent outline-none transition-all"
                         />
                      </div>
                   </div>
                   <button 
                      onClick={() => setStep(2)}
                      disabled={!formData.brand || !formData.product}
                      className="w-full h-24 rounded-3xl bg-white text-black font-black uppercase text-sm flex items-center justify-center gap-6 hover:bg-primary-accent transition-all duration-500 disabled:opacity-30"
                   >
                      Continue To Mood <ArrowRight size={24} />
                   </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {["Luxury/Cinematic", "High-Energy/Viral", "Narrative/Emotional"].map(m => (
                        <button 
                           key={m} onClick={() => setFormData({...formData, mood: m})}
                           className={cn(
                               "p-8 rounded-[2.5rem] border transition-all text-center space-y-4",
                               formData.mood === m ? "bg-primary-accent text-black border-primary-accent" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                           )}
                        >
                           <Sparkles size={24} className={formData.mood === m ? "text-black" : "text-primary-accent"} />
                           <p className="text-[11px] font-black uppercase">{m}</p>
                        </button>
                      ))}
                   </div>
                   <div className="flex gap-8">
                      <button onClick={() => setStep(1)} className="h-24 px-12 rounded-3xl border border-white/10 text-white font-black uppercase text-sm">Back</button>
                      <button 
                         onClick={generateScript}
                         className="flex-1 h-24 rounded-3xl bg-primary-accent text-black font-black uppercase text-sm flex items-center justify-center gap-6 hover:scale-105 transition-all shadow-xl shadow-primary-accent/20"
                      >
                         {isGenerating ? "Creating Your Script..." : "Generate AI Script"} 
                         {isGenerating ? <RefreshCw className="animate-spin" size={24} /> : <Zap size={24} />}
                      </button>
                   </div>
                </motion.div>
              )}

              {step === 3 && script && (
                <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-10">
                   <div className="p-12 rounded-[3rem] bg-black/60 border border-primary-accent/30 font-mono text-[13px] leading-loose text-zinc-300 whitespace-pre-wrap uppercase relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-20 text-primary-accent">
                         <Target size={100} />
                      </div>
                      {script}
                   </div>
                   <div className="flex flex-col md:flex-row gap-6">
                      <button onClick={() => setStep(1)} className="h-20 flex-1 rounded-2xl border border-white/10 text-white font-black uppercase text-sm flex items-center justify-center gap-4">
                         Reset Concept <RefreshCw size={16} />
                      </button>
                      <Link href="/contact" className="h-20 flex-1 rounded-2xl bg-primary-accent text-black font-black uppercase text-sm flex items-center justify-center gap-4 hover:scale-[1.02] transition-all">
                         Execute with DP Studio <ArrowRight size={16} />
                      </Link>
                   </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                   <h3 className="text-2xl font-black uppercase text-white mb-10">Project Parameters_</h3>
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                         <label className="text-[10px] font-black text-zinc-500 uppercase flex items-center gap-2"><DollarSign size={12}/> Budget Range_</label>
                         <div className="grid grid-cols-2 gap-4">
                            {["₹1L - ₹2L", "₹2L - ₹5L", "₹5L - ₹10L", "₹10L+"].map(b => (
                              <button key={b} onClick={() => setFormData({...formData, budget: b})} className={cn("h-16 rounded-xl border text-[11px] font-bold uppercase transition-all", formData.budget === b ? "bg-primary-accent text-black border-primary-accent" : "bg-white/5 border-white/10 text-white")}>{b}</button>
                            ))}
                         </div>
                      </div>
                      <div className="space-y-6">
                         <label className="text-[10px] font-black text-zinc-500 uppercase flex items-center gap-2"><Calendar size={12}/> Delivery Timeline_</label>
                         <div className="grid grid-cols-2 gap-4">
                            {["72 Hours", "1 Week", "2-4 Weeks", "Custom"].map(t => (
                              <button key={t} onClick={() => setFormData({...formData, timeline: t})} className={cn("h-16 rounded-xl border text-[11px] font-bold uppercase transition-all", formData.timeline === t ? "bg-primary-accent text-black border-primary-accent" : "bg-white/5 border-white/10 text-white")}>{t}</button>
                            ))}
                         </div>
                      </div>
                   </div>
                   <div className="flex gap-8">
                      <button onClick={() => setStep(3)} className="h-24 px-12 rounded-3xl border border-white/10 text-white font-black uppercase text-sm">Review Script</button>
                      <button onClick={() => setStep(5)} className="flex-1 h-24 rounded-3xl bg-white text-black font-black uppercase text-sm flex items-center justify-center gap-6">Final Step <ArrowRight size={24} /></button>
                   </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                   <h3 className="text-2xl font-black uppercase text-white mb-10">Contact Credentials_</h3>
                   <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-4">
                            <label className="text-[10px] font-black text-zinc-500 uppercase flex items-center gap-2"><User size={12}/> Full Name_</label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Alex Sterling" className="w-full h-20 bg-white/5 border border-white/10 rounded-2xl px-8 text-white font-bold outline-none focus:border-primary-accent transition-all" />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-black text-zinc-500 uppercase flex items-center gap-2"><Phone size={12}/> Contact Number_</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 ..." className="w-full h-20 bg-white/5 border border-white/10 rounded-2xl px-8 text-white font-bold outline-none focus:border-primary-accent transition-all" />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black text-zinc-500 uppercase flex items-center gap-2"><Mail size={12}/> Professional Email_</label>
                         <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="alex@brand.com" className="w-full h-20 bg-white/5 border border-white/10 rounded-2xl px-8 text-white font-bold outline-none focus:border-primary-accent transition-all" />
                      </div>
                   </div>
                   <div className="flex gap-8">
                      <button onClick={() => setStep(4)} className="h-24 px-12 rounded-3xl border border-white/10 text-white font-black uppercase text-sm">Back</button>
                      <button onClick={handleSubmit} disabled={!formData.name || !formData.email || isSubmitting} className="flex-1 h-24 rounded-3xl bg-primary-accent text-black font-black uppercase text-sm flex items-center justify-center gap-6 hover:scale-105 transition-all shadow-xl shadow-primary-accent/20">
                         {isSubmitting ? "Transmitting..." : "Initialize Production"} <Send size={24} />
                      </button>
                   </div>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div key="step6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-12 py-10">
                   <div className="h-32 w-32 rounded-full bg-primary-accent/20 border border-primary-accent/40 flex items-center justify-center mx-auto mb-10">
                      <CheckCircle2 size={60} className="text-primary-accent" />
                   </div>
                   <div className="space-y-6">
                      <h3 className="text-4xl font-black uppercase text-white">Transmission Successful</h3>
                      <p className="text-zinc-400 uppercase text-xs tracking-widest max-w-md mx-auto leading-loose">
                         Your neural blueprint has been dispatched to <span className="text-white">defineperspective.in@gmail.com</span>. Our production lead will contact you within 4 hours.
                      </p>
                   </div>
                   <button onClick={() => setStep(1)} className="h-20 px-12 rounded-2xl border border-white/10 text-white font-black uppercase text-[10px]">Generate Another Concept</button>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
