"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LeadCaptureForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  if (formState === "success") {
    return (
      <div className="p-12 rounded-[3.5rem] bg-primary-accent/10 border border-primary-accent/20 text-center space-y-6">
        <div className="h-16 w-16 bg-primary-accent rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 size={32} className="text-black" />
        </div>
        <h3 className="text-3xl font-black uppercase italic text-white">Protocol Initiated_</h3>
        <p className="text-sm text-zinc-400 uppercase tracking-widest leading-loose">
          Our strategy team will contact you within 24 hours to scale your vision.
        </p>
      </div>
    );
  }

  return (
    <div className="relative p-10 md:p-14 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <span className="text-8xl font-black uppercase italic tracking-tighter">LEAD</span>
      </div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
        <div className="space-y-4">
          <h3 className="text-3xl font-black uppercase text-white tracking-tight italic">
            Get Free Video <br /><span className="text-primary-accent">Strategy & Quote_</span>
          </h3>
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-mono">Precision Lead Protocol v0.1</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="NAME_" 
            required
            className="h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest focus:border-primary-accent outline-none transition-all"
          />
          <input 
            type="text" 
            placeholder="BUSINESS NAME_" 
            required
            className="h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest focus:border-primary-accent outline-none transition-all"
          />
          <input 
            type="tel" 
            placeholder="PHONE / WHATSAPP_" 
            required
            className="h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest focus:border-primary-accent outline-none transition-all"
          />
          <input 
            type="email" 
            placeholder="EMAIL_" 
            required
            className="h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest focus:border-primary-accent outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <select 
            required
            className="h-16 px-8 rounded-2xl bg-[#111] border border-white/10 text-zinc-500 text-xs font-black uppercase tracking-widest focus:border-primary-accent outline-none appearance-none transition-all"
          >
            <option value="">REQUIREMENT TYPE_</option>
            <option value="ads">ADS / PERFORMANCE</option>
            <option value="product">PRODUCT / E-COMM</option>
            <option value="corporate">CORPORATE FILMS</option>
            <option value="social">SOCIAL / REELS</option>
            <option value="explainer">EXPLAINER / SAAS</option>
          </select>
          <select 
            required
            className="h-16 px-8 rounded-2xl bg-[#111] border border-white/10 text-zinc-500 text-xs font-black uppercase tracking-widest focus:border-primary-accent outline-none appearance-none transition-all"
          >
            <option value="">BUDGET RANGE_</option>
            <option value="starter">₹50K - ₹2L</option>
            <option value="growth">₹2L - ₹10L</option>
            <option value="enterprise">₹10L+</option>
          </select>
        </div>

        <button 
          disabled={formState === "submitting"}
          className="h-20 w-full rounded-3xl bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(var(--primary-accent-rgb),0.3)] disabled:opacity-50 flex items-center justify-center gap-4"
        >
          {formState === "submitting" ? "Processing..." : "Deploy Strategy Request"} <ArrowRight size={20} />
        </button>

        <p className="text-[9px] text-zinc-700 text-center uppercase tracking-widest italic">
          Strictly Data-Protected // End-to-End Encryption Enabled
        </p>
      </form>
    </div>
  );
}
