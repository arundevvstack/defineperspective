"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  RefreshCcw,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Trophy,
  PieChart,
  BarChart3,
  Globe,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/magnetic";

const ANALYSIS_STEPS = [
  "Initializing Neural Engine...",
  "Crawling URL structure...",
  "Analyzing Semantic Density...",
  "Evaluating AI Authority Signals...",
  "Testing Regional Performance...",
  "Finalizing Report..."
];

export default function AnalysisView({ city }: { city?: string }) {
  const [url, setUrl] = useState("");
  const [compUrl, setCompUrl] = useState("");
  const [isComparing, setIsComparing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const startAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    setCurrentStep(0);
    setProgress(0);
  };

  useEffect(() => {
    if (isAnalyzing) {
      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < ANALYSIS_STEPS.length - 1) return prev + 1;
          return prev;
        });
      }, 1500);

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 1;
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          setIsAnalyzing(false);
          setShowResults(true);
          return 100;
        });
      }, 100);

      return () => {
        clearInterval(stepInterval);
        clearInterval(progressInterval);
      };
    }
  }, [isAnalyzing]);

  return (
    <div className="space-y-12">
      {/* Deep Scan Engine Header */}
      <section className="relative overflow-hidden p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-accent/5 blur-[100px] -z-10" />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
           <div className="flex justify-center mb-6">
              <button 
                onClick={() => setIsComparing(!isComparing)}
                className={cn(
                  "px-4 py-1.5 rounded-full border text-[9px] font-mono uppercase tracking-widest transition-all",
                  isComparing ? "bg-primary-accent border-primary-accent text-white" : "bg-white/5 border-white/10 text-zinc-500 hover:border-white/20"
                )}
              >
                {isComparing ? "Disable Comparison" : "Enable Competitor Comparison"}
              </button>
           </div>
           <h2 className="text-4xl font-black uppercase mb-4">{isComparing ? "Neural Comparison" : "Deep Scan Engine"}</h2>
           <p className="text-zinc-500 text-sm font-light">{isComparing ? "Benchmark your brand against a top rival in real-time." : "Evaluate your semantic authority across the 2026 search landscape."}</p>
        </div>

        <form onSubmit={startAnalysis} className="max-w-2xl mx-auto space-y-4">
          <div className="relative group">
            <div className="relative flex items-center p-2 rounded-3xl bg-white/5 border border-white/10 focus-within:border-primary-accent/50 transition-all duration-500">
              <div className="pl-6 text-zinc-500">
                <Globe size={18} />
              </div>
              <input 
                type="url" 
                placeholder="Enter your website URL"
                className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 text-sm font-light"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isAnalyzing}
              />
              {!isComparing && (
                <button 
                  type="submit"
                  disabled={isAnalyzing}
                  className="bg-primary-accent hover:bg-primary-accent/90 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isAnalyzing ? <RefreshCcw className="animate-spin" size={14} /> : "Scan"}
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {isComparing && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative group">
                <div className="relative flex items-center p-2 rounded-3xl bg-white/5 border border-white/10 focus-within:border-red-500/50 transition-all duration-500">
                  <div className="pl-6 text-zinc-500">
                    <Target size={18} className="text-red-500" />
                  </div>
                  <input 
                    type="url" 
                    placeholder="Enter competitor URL"
                    className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 text-sm font-light"
                    required
                    value={compUrl}
                    onChange={(e) => setCompUrl(e.target.value)}
                    disabled={isAnalyzing}
                  />
                  <button 
                    type="submit"
                    disabled={isAnalyzing}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isAnalyzing ? <RefreshCcw className="animate-spin" size={14} /> : "Compare"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </section>

      {/* Loading State */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-12">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/5" />
                  <motion.circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray="276" animate={{ strokeDashoffset: 276 - (276 * progress) / 100 }} className="text-primary-accent" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-black">{progress}%</div>
              </div>
              <div className="space-y-3 w-full max-w-xs mx-auto">
                {ANALYSIS_STEPS.map((step, idx) => (
                  <div key={idx} className={cn("flex items-center gap-4 text-[10px] font-mono tracking-wider transition-opacity duration-300", idx === currentStep ? "opacity-100" : idx < currentStep ? "opacity-40" : "opacity-10")}>
                    {idx < currentStep ? <CheckCircle2 size={12} className="text-green-500" /> : <div className="h-1.5 w-1.5 rounded-full bg-primary-accent" />}
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <ResultCard icon={Zap} title="Performance" score="92" status="Optimal" color="text-green-400" items={[{label:"LCP", value:"0.8s", status:"good"}, {label:"CLS", value:"0.01", status:"good"}]} />
               <ResultCard icon={BrainCircuit} title="Semantic" score="78" status="Strong" color="text-primary-accent" items={[{label:"Schema", value:"Found", status:"good"}, {label:"Entities", value:"Strong", status:"good"}]} />
               <ResultCard icon={Cpu} title="AI Ready" score="89" status="Elite" color="text-purple-400" items={[{label:"Crawler", value:"Allowed", status:"good"}, {label:"Vector", value:"V2", status:"good"}]} />
            </div>

            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary-accent via-primary-accent/80 to-blue-700 border border-white/30 shadow-xl relative overflow-hidden group">
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1">
                     <h4 className="text-3xl font-black uppercase mb-4">Elite Upgrade Available</h4>
                     <p className="text-white/80 text-sm mb-8 leading-relaxed">Implement a 2026-ready Neural SEO layer to boost conversions by 140%.</p>
                     <Magnetic>
                        <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3">
                          Boost Authority <ArrowRight size={14} />
                        </button>
                     </Magnetic>
                  </div>
                  <div className="h-32 w-32 rounded-full border-4 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-xl">
                     <Trophy size={48} className="text-white" />
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({ icon: Icon, title, score, status, items, color }: any) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center bg-white/5", color)}>
            <Icon size={20} />
          </div>
          <h4 className="font-bold uppercase tracking-widest text-xs">{title}</h4>
        </div>
        <div className="text-right">
          <span className={cn("text-xl font-black", color)}>{score}</span>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-[10px] text-zinc-500 font-mono">{item.label}</span>
            <span className="text-[10px] font-bold text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
