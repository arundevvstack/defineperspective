"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowRight, ChevronRight, BarChart3 } from "lucide-react";

export default function EfficiencyLeadMagnet() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    output: "4-10 Videos",
    teamSize: "5-10 People",
    bottleneck: "Production Cost",
    name: "",
    email: "",
    industry: "E-commerce"
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/neural-production-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          asset_requested: "AI_EFFICIENCY_PLAN",
          details: {
            current_output: formData.output,
            team_size: formData.teamSize,
            primary_bottleneck: formData.bottleneck,
            calculated_savings: "Estimated 60% Reduction"
          }
        })
      });
      if (res.ok) setStep(5);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-pad bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-accent/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="p-12 md:p-20 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl">
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-10">
                <div className="space-y-6">
                  <span className="label-mono border border-primary-accent/30 px-4 py-1.5 rounded-full">Optimized Ops_</span>
                  <h2 className="heading-section">Get Your <br /><span className="text-primary-accent">AI Efficiency Plan_</span></h2>
                  <p className="body-copy">Calculate how much time and money you can save with AI video.</p>
                </div>

                <div className="space-y-6">
                  <label className="label-mono !text-zinc-400">Monthly Video Output_</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["1-3", "4-10", "11-30", "30+"].map(o => (
                      <button key={o} onClick={() => setFormData({...formData, output: o})} className={`h-16 rounded-xl border text-[11px] font-black uppercase transition-all ${formData.output === o ? 'bg-primary-accent text-black border-primary-accent' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}>
                        {o} Videos
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={nextStep} className="btn-primary w-full !h-24 !text-sm">
                  Next Stage <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                <div className="space-y-4">
                   <h3 className="heading-card !text-2xl">Current Team Structure_</h3>
                   <p className="body-copy !text-xs">What is the scale of your current production team?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["1-5 People", "5-10 People", "3-5 AI Experts"].map(t => (
                    <button 
                      key={t} onClick={() => setFormData({...formData, teamSize: t})}
                      className={`p-8 rounded-xl border text-center transition-all ${formData.teamSize === t ? 'bg-primary-accent text-black border-primary-accent' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                    >
                      <p className="label-mono !text-inherit">{t}</p>
                    </button>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn-glass flex-1">Back</button>
                  <button onClick={nextStep} className="btn-primary flex-[2]">Continue <ArrowRight size={16} /></button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-10">
                 <div className="h-24 w-24 rounded-full bg-primary-accent/20 border border-primary-accent/40 flex items-center justify-center mx-auto">
                    <BarChart3 size={40} className="text-primary-accent" />
                 </div>
                 <div className="space-y-4">
                    <h3 className="heading-section !text-4xl">Efficiency Locked</h3>
                    <p className="body-copy max-w-sm mx-auto">
                      Your personalized AI Efficiency Plan has been calculated and sent to <span className="text-white">{formData.email}</span>.
                      <br /><br />
                      <span className="text-primary-accent font-bold">Estimated Savings: 65% Production Cost</span>
                    </p>
                 </div>
                 <button onClick={() => setStep(1)} className="btn-glass mx-auto">Back to Dashboard</button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
