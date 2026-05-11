"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  BarChart3, 
  Globe, 
  Zap, 
  ShieldCheck, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  RefreshCcw,
  AlertCircle,
  CheckCircle2,
  Lock,
  Cpu,
  Trophy,
  PieChart
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassNavbar from "@/components/glass-navbar";
import GlassFooter from "@/components/glass-footer";
import Magnetic from "@/components/magnetic";

const ANALYSIS_STEPS = [
  "Initializing Neural Engine...",
  "Crawling URL structure...",
  "Analyzing Semantic Density...",
  "Evaluating AI Authority Signals...",
  "Testing Regional Performance...",
  "Finalizing Report..."
];

export default function SeoAnalysisPage() {
  const [url, setUrl] = useState("");
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
    <main className="min-h-screen bg-obsidian text-white font-sans selection:bg-primary-accent/30">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-accent/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-primary-accent mb-8">
              <Sparkles size={12} /> Neural SEO Diagnostic v6.0
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-tight tracking-tighter">
              Analyze Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-blue-400">Digital Presence.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Leverage DP's proprietary AI-driven analysis engine to evaluate your website's performance, semantic authority, and conversion potential in the 2026 search landscape.
            </p>

            <form onSubmit={startAnalysis} className="max-w-3xl mx-auto relative group">
              <div className="relative flex items-center p-2 rounded-[2rem] bg-white/5 border border-white/10 focus-within:border-primary-accent/50 transition-all duration-500 shadow-2xl backdrop-blur-xl">
                <div className="pl-6 text-zinc-500">
                  <Globe size={20} />
                </div>
                <input 
                  type="url" 
                  placeholder="Enter your website URL (e.g., https://yourbrand.com)"
                  className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-4 text-lg font-light placeholder:text-zinc-600"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isAnalyzing}
                />
                <button 
                  type="submit"
                  disabled={isAnalyzing}
                  className="bg-primary-accent hover:bg-primary-accent/90 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <RefreshCcw className="animate-spin" size={16} />
                  ) : (
                    <>Analyze <ArrowRight size={16} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Analysis Loading State */}
      <AnimatePresence>
        {isAnalyzing && (
          <section className="py-20 bg-white/[0.02]">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-12">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-white/5"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray="377"
                        animate={{ strokeDashoffset: 377 - (377 * progress) / 100 }}
                        className="text-primary-accent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-xl font-black">
                      {progress}%
                    </div>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-widest mb-4">
                    Deep Scanning in Progress
                  </h3>
                  
                  <div className="space-y-3 w-full max-w-sm">
                    {ANALYSIS_STEPS.map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: idx === currentStep ? 1 : idx < currentStep ? 0.4 : 0.2,
                          x: idx === currentStep ? 0 : idx < currentStep ? -5 : 5
                        }}
                        className="flex items-center gap-4 text-sm font-mono tracking-wider"
                      >
                        {idx < currentStep ? (
                          <CheckCircle2 size={14} className="text-green-500" />
                        ) : idx === currentStep ? (
                          <RefreshCcw size={14} className="text-primary-accent animate-spin" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-zinc-800" />
                        )}
                        {step}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <AnimatePresence>
        {showResults && (
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20"
          >
            <div className="container mx-auto px-6">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-500 mb-4">Neural Report: {url}</h2>
                  <h3 className="text-4xl font-black uppercase">Analysis Results</h3>
                </div>
                <div className="p-6 rounded-3xl bg-primary-accent/10 border border-primary-accent/20 flex items-center gap-6">
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Overall DP Score</span>
                    <span className="text-3xl font-black text-primary-accent">84/100</span>
                  </div>
                  <div className="h-12 w-[1px] bg-white/10" />
                  <div className="h-12 w-12 rounded-full bg-primary-accent flex items-center justify-center">
                    <Trophy size={20} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Column 1: Performance */}
                <div className="space-y-8">
                  <ResultCard 
                    icon={Zap} 
                    title="Performance" 
                    score="92" 
                    status="Excellent"
                    color="text-green-400"
                    items={[
                      { label: "LCP", value: "0.8s", status: "good" },
                      { label: "CLS", value: "0.01", status: "good" },
                      { label: "TTI", value: "1.2s", status: "good" }
                    ]}
                  />
                  <ResultCard 
                    icon={ShieldCheck} 
                    title="Security" 
                    score="100" 
                    status="Optimal"
                    color="text-blue-400"
                    items={[
                      { label: "SSL", value: "Valid", status: "good" },
                      { label: "Headers", value: "Secure", status: "good" },
                      { label: "CORS", value: "Configured", status: "good" }
                    ]}
                  />
                </div>

                {/* Column 2: Semantic SEO */}
                <div className="space-y-8">
                  <ResultCard 
                    icon={BrainCircuit} 
                    title="Semantic Authority" 
                    score="78" 
                    status="Good"
                    color="text-primary-accent"
                    items={[
                      { label: "Schema", value: "Found", status: "good" },
                      { label: "Keyword Hubs", value: "4/10", status: "warning" },
                      { label: "Entity Match", value: "Strong", status: "good" }
                    ]}
                  />
                  <ResultCard 
                    icon={BarChart3} 
                    title="Content Strategy" 
                    score="64" 
                    status="Needs Work"
                    color="text-orange-400"
                    items={[
                      { label: "Word Count", value: "Low", status: "warning" },
                      { label: "Readability", value: "Grade 8", status: "good" },
                      { label: "Alt Tags", value: "Missing", status: "error" }
                    ]}
                  />
                </div>

                {/* Column 3: AI Readiness & Regional */}
                <div className="space-y-8">
                  <ResultCard 
                    icon={Cpu} 
                    title="AI Readiness" 
                    score="89" 
                    status="High"
                    color="text-purple-400"
                    items={[
                      { label: "LLM Crawl", value: "Allowed", status: "good" },
                      { label: "Vector Map", value: "Partial", status: "warning" },
                      { label: "AI Metadata", value: "V2.0", status: "good" }
                    ]}
                  />
                  <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary-accent via-primary-accent/80 to-blue-700 border border-white/30 shadow-[0_0_50px_-12px_rgba(235,30,44,0.3)] relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]">
                    {/* Animated Background Mesh */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-white/20 blur-[80px] rounded-full animate-pulse" />
                      <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-black/20 blur-[60px] rounded-full" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Trophy className="text-white animate-bounce" size={28} />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-black/20 border border-white/10 text-[8px] font-mono tracking-widest uppercase text-white font-black">
                          Elite Strategy
                        </span>
                      </div>

                      <h4 className="text-3xl font-black uppercase mb-4 leading-tight">
                        Optimize For <br />
                        <span className="text-white/80">2026 Algorithms.</span>
                      </h4>
                      
                      <p className="text-white/90 text-sm mb-8 leading-relaxed font-light">
                        Our experts can implement a **2026-ready Neural SEO layer** to boost your visibility and conversion by up to <span className="font-black text-white">140%</span>.
                      </p>

                      <ul className="space-y-3 mb-10">
                        {[
                          "Entity-Attribute Schema Mapping",
                          "Malayalam AI Video Optimization",
                          "LLM-Specific Vector Indexing",
                          "Regional Authority Reinforcement"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white/70">
                            <div className="h-1 w-1 rounded-full bg-white" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Magnetic>
                        <button className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-zinc-100 transition-colors shadow-2xl">
                          Upgrade Strategy <ArrowRight size={16} />
                        </button>
                      </Magnetic>
                    </div>

                    {/* Decorative Sparkles */}
                    <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles size={120} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Breakdown */}
              <div className="mt-12 p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-xl">
                 <div className="flex items-center gap-4 mb-12">
                   <div className="h-10 w-10 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                      <PieChart size={20} />
                   </div>
                   <h3 className="text-2xl font-bold uppercase tracking-widest">Neural Insights</h3>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                        <div className="flex items-center gap-3 mb-4 text-orange-400">
                          <AlertCircle size={16} />
                          <span className="text-[10px] font-mono uppercase tracking-widest">Critical Optimization Required</span>
                        </div>
                        <h5 className="font-bold mb-2">Missing Semantic Schema</h5>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          Your site lacks structured data entities. Adding JSON-LD schemas for 'Service' and 'Organization' will significantly improve LLM-based discovery.
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                        <div className="flex items-center gap-3 mb-4 text-green-400">
                          <CheckCircle2 size={16} />
                          <span className="text-[10px] font-mono uppercase tracking-widest">Performance Win</span>
                        </div>
                        <h5 className="font-bold mb-2">Ultra-Fast LCP Detected</h5>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          Your Largest Contentful Paint is within the elite top 5% of tested sites. This is a massive ranking signal for 2026 algorithms.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                       <div className="relative h-64 w-full bg-white/5 rounded-[2rem] border border-white/5 overflow-hidden p-8 flex items-end gap-2">
                          {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="flex-1 bg-primary-accent/40 rounded-t-lg relative group"
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-primary-accent">
                                {h}%
                              </div>
                            </motion.div>
                          ))}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] -rotate-90">Authority Metrics</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

function ResultCard({ icon: Icon, title, score, status, items, color }: any) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform", color)}>
            <Icon size={24} />
          </div>
          <h4 className="font-bold uppercase tracking-widest text-sm">{title}</h4>
        </div>
        <div className="text-right">
          <span className={cn("text-2xl font-black", color)}>{score}</span>
          <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest">{status}</span>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono">{item.label}</span>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-white">{item.value}</span>
              <div className={cn(
                "h-1.5 w-1.5 rounded-full",
                item.status === 'good' ? "bg-green-500" : item.status === 'warning' ? "bg-orange-500" : "bg-red-500"
              )} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
