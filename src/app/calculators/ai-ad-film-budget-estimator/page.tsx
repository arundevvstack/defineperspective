"use client";

import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

export default function BudgetEstimatorPage() {
  const [duration, setDuration] = useState(30);
  const [complexity, setComplexity] = useState("standard");
  const [showResult, setShowResult] = useState(false);

  // Simple pricing logic for the calculator
  const calculateBudget = () => {
    let base = duration * 300; // $300 per second base
    let mult = complexity === "standard" ? 1 : complexity === "cinematic" ? 1.5 : 2;
    const total = base * mult;
    const traditional = total * 2.5; // Traditional costs 2.5x more
    
    return {
      ai: { min: total * 0.9, max: total * 1.1 },
      traditional: { min: traditional * 0.9, max: traditional * 1.1 }
    };
  };

  const results = calculateBudget();

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <header className="mb-20 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-12">
            Interactive Tool
          </div>
          <h1 className="text-5xl md:text-7xl font-blacker uppercase leading-[0.8] tracking-tighter mb-8 italic">
            AI vs Traditional <br />
            <span className="text-primary-accent">Budget Estimator_</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl font-light uppercase tracking-widest leading-relaxed">
            See how much you save by moving your physical ad production to our neural pipeline.
          </p>
        </header>

        <section className="mb-32">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16">
             <div className="space-y-12">
                
                {/* Duration */}
                <div>
                   <label className="block text-sm font-black uppercase text-white mb-6">Commercial Duration (Seconds): <span className="text-primary-accent">{duration}s</span></label>
                   <input 
                     type="range" 
                     min="15" 
                     max="120" 
                     step="15" 
                     value={duration} 
                     onChange={(e) => { setDuration(Number(e.target.value)); setShowResult(false); }}
                     className="w-full accent-primary-accent"
                   />
                   <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase mt-4">
                      <span>15s</span>
                      <span>60s</span>
                      <span>120s</span>
                   </div>
                </div>

                {/* Complexity */}
                <div>
                   <label className="block text-sm font-black uppercase text-white mb-6">Visual Complexity</label>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["standard", "cinematic", "complex_vfx"].map((type) => (
                        <button 
                          key={type}
                          onClick={() => { setComplexity(type); setShowResult(false); }}
                          className={`p-4 rounded-2xl border text-xs font-mono uppercase tracking-widest transition-all ${
                            complexity === type 
                            ? "bg-primary-accent/20 border-primary-accent text-primary-accent" 
                            : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10"
                          }`}
                        >
                          {type.replace("_", " ")}
                        </button>
                      ))}
                   </div>
                </div>

                <button 
                  onClick={() => setShowResult(true)}
                  className="w-full h-16 rounded-full bg-primary-accent text-black font-black uppercase tracking-widest hover:scale-[1.02] transition-transform flex items-center justify-center gap-4"
                >
                  <Calculator size={20} /> Calculate ROI
                </button>

                {showResult && (
                  <div className="mt-12 p-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="grid md:grid-cols-2 gap-12">
                        <div>
                           <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">Traditional Production Estimate</h4>
                           <div className="text-3xl font-black text-red-400/80 line-through">
                              ${results.traditional.min.toLocaleString()} - ${results.traditional.max.toLocaleString()}
                           </div>
                           <p className="text-xs text-zinc-500 font-light mt-4">Includes locations, 50+ crew, catering, permits, and rentals.</p>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] mb-4">DP AI Studio Estimate</h4>
                           <div className="text-4xl font-black text-white italic">
                              ${results.ai.min.toLocaleString()} - ${results.ai.max.toLocaleString()}
                           </div>
                           <p className="text-xs text-zinc-400 font-light mt-4">Includes full neural pipeline, VFX, and zero logistics.</p>
                        </div>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </section>
        
        <section className="mb-32">
           <LeadCaptureForm />
        </section>
      </div>
    </main>
  );
}
