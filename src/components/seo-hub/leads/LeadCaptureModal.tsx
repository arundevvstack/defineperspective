"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, Briefcase, DollarSign, Globe, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import CommandModal from "../CommandModal";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  guideTitle: string;
  guideId: string;
}

export default function LeadCaptureModal({ isOpen, onClose, guideTitle, guideId }: LeadCaptureModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    projectType: "",
    budget: "",
    region: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Calculate lead score (mock logic)
      const budgetNum = parseInt(formData.budget.replace(/[^0-9]/g, "")) || 0;
      const score = budgetNum > 10000 ? 90 : 65;

      const { error } = await supabase.from('leads').insert({
        ...formData,
        source_guide_id: guideId,
        score,
        interest_cluster: guideTitle,
        created_at: new Date().toISOString()
      });

      if (error) throw error;

      // Update download count
      await supabase.rpc('increment_download', { row_id: guideId });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setStep(1);
      }, 3000);
    } catch (err) {
      console.error(err);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
          <CommandModal 
            isOpen={showErrorModal}
            onClose={() => setShowErrorModal(false)}
            type="alert"
            title="Transmission Failed"
            description="The neural link could not be established. Please verify your credentials and try again."
            onConfirm={() => {}}
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-obsidian border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(235,30,44,0.15)] flex flex-col md:flex-row"
          >
            {/* Left: Branding/Preview */}
            <div className="w-full md:w-[40%] bg-primary-accent p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -z-0" />
              <div className="relative z-10">
                 <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center font-black text-primary-accent mb-8">DP</div>
                 <span className="text-[10px] font-mono text-black uppercase tracking-[0.3em] font-black">Private Intelligence Report</span>
                 <h2 className="text-3xl font-black text-black uppercase tracking-tighter mt-4 leading-tight">
                   {guideTitle}
                 </h2>
              </div>
              <div className="relative z-10 space-y-4">
                 <div className="flex items-center gap-3 text-black/60 font-mono text-[9px] uppercase tracking-widest">
                    <CheckCircle2 size={14} /> AI Trend Analysis
                 </div>
                 <div className="flex items-center gap-3 text-black/60 font-mono text-[9px] uppercase tracking-widest">
                    <CheckCircle2 size={14} /> Luxury Market Frameworks
                 </div>
                 <div className="flex items-center gap-3 text-black/60 font-mono text-[9px] uppercase tracking-widest">
                    <CheckCircle2 size={14} /> 2026 Production Insights
                 </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-1 p-12 relative">
              <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                       <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Access Granted</h3>
                    <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">The guide has been sent to your terminal.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Unlock Intelligence_</h3>
                      <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest leading-relaxed">Enter your credentials to receive the full encrypted industry blueprint.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-600 uppercase font-black">Full Name</label>
                        <input 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary-accent/50"
                          placeholder="EXECUTIVE NAME"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-600 uppercase font-black">Professional Email</label>
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary-accent/50"
                          placeholder="EMAIL@COMPANY.COM"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-600 uppercase font-black">Company</label>
                        <input 
                          required
                          value={formData.company}
                          onChange={e => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary-accent/50"
                          placeholder="ENTITY NAME"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-600 uppercase font-black">Industry</label>
                        <select 
                          required
                          value={formData.industry}
                          onChange={e => setFormData({...formData, industry: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary-accent/50 appearance-none text-zinc-400"
                        >
                          <option value="">SELECT SECTOR</option>
                          <option value="Luxury Retail">Luxury Retail</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Tech & AI">Tech & AI</option>
                          <option value="Fashion">Fashion</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-600 uppercase font-black">Region</label>
                        <input 
                          required
                          value={formData.region}
                          onChange={e => setFormData({...formData, region: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary-accent/50"
                          placeholder="e.g. Dubai, London, Kochi"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-600 uppercase font-black">Estimated Budget</label>
                        <select 
                          required
                          value={formData.budget}
                          onChange={e => setFormData({...formData, budget: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary-accent/50 appearance-none text-zinc-400"
                        >
                          <option value="">PROJECT RANGE</option>
                          <option value="$5k - $15k">$5k - $15k</option>
                          <option value="$15k - $50k">$15k - $50k</option>
                          <option value="$50k+">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-primary-accent text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all mt-8"
                    >
                      {isSubmitting ? <Clock size={18} className="animate-spin" /> : <Download size={18} />}
                      Secure Your Intelligence Copy
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
