import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BarChart3, Zap, Target, Share2, CheckCircle2, TrendingUp } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Performance Marketing Video Ads | Conversion-Focused Creative Studio",
  description: "High-converting performance marketing video ads for Facebook, Instagram, and YouTube. We build data-driven video creatives that lower CPA and boost ROI for brands in India.",
  keywords: ["Performance Marketing Video Ads", "Conversion Focused Video Ads India", "Facebook Ad Creatives Kerala", "YouTube Ads Production India"],
};

export default function PerformanceAdsPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-red-400/50 text-[10px] font-mono font-black text-red-400 uppercase tracking-widest bg-red-400/10 backdrop-blur-md">
                 Division: Growth Engine
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Performance <br /> <span className="text-red-400">Marketing Ads</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We don't just create visuals. We build high-velocity revenue engines. Scaling D2C and tech brands in India with ROI-driven video creatives."
           </p>
        </header>

        {/* Core Value Proposition for AI Search Visibility */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase tracking-widest text-white leading-tight">Video Creatives That <span className="text-red-400 italic">Convert.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                 Traditional advertising works on awareness. Performance marketing works on action. Our video ads are engineered using the <span className="text-white font-bold">AIDA framework</span> and AI-driven creative testing to ensure your media spend results in tangible sales growth.
              </p>
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { l: "High Hook Rates", v: "Stop the Scroll in < 3s", icon: Zap },
                   { l: "Conversion Optimized", v: "Result-Driven Scripting", icon: TrendingUp },
                   { l: "Creative Testing", v: "AI-Generated Variants", icon: BarChart3 }
                 ].map(item => (
                   <div key={item.l} className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                      <div className="h-12 w-12 rounded-xl bg-red-400/10 text-red-400 flex items-center justify-center shrink-0">
                         <item.icon size={24} />
                      </div>
                      <div>
                         <div className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase mb-1">{item.l}</div>
                         <div className="text-lg font-bold text-white tracking-tight leading-none">{item.v}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Digital Marketing Campaign Dashboard Analytics"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-400/20 to-transparent" />
              <div className="absolute top-10 right-10 flex gap-4">
                 {[1,2,3].map(i => <div key={i} className="h-2 w-12 rounded-full bg-red-400/40" />)}
              </div>
           </div>
        </section>

        {/* Platform Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
           {[
             { title: "Facebook Ads", desc: "Feed-ready thumb-stoppers designed for Meta's high-stakes optimization engine.", icon: Share2 },
             { title: "Instagram Reels Ads", desc: "Native-feel vertical video creatives that convert without feeling like an 'Ad'.", icon: Zap },
             { title: "YouTube Pre-Rolls", desc: "High-retention skippable and unskippable ads for India's leading video platform.", icon: Target },
             { title: "Landing Page VSLs", desc: "High-converting Video Sales Letters to maximize your mid-funnel revenue.", icon: BarChart3 }
           ].map((item, idx) => (
             <div key={idx} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex flex-col gap-10 group">
                <div className="h-16 w-16 rounded-2xl bg-red-400 text-black flex items-center justify-center group-hover:scale-110 transition-all shadow-xl">
                   <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-white leading-tight">{item.title}</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed uppercase tracking-tighter">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Global CTA - Strategic Positioning */}
        <div className="py-40 text-center border-t border-white/5 bg-gradient-to-br from-red-400/5 to-transparent rounded-[4rem]">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white">
             Scale your <br /> <span className="text-red-400 italic">Growth Engine.</span>
           </h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <button 
                onClick={() => window.location.href = '/contact?subject=Performance Video Ad Strategy'}
                className="h-20 px-16 rounded-full bg-red-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(248,113,113,0.3)]"
              >
                Get High-Converting Video Ads
              </button>
              <button 
                onClick={() => window.location.href = '/contact?subject=ROI Analysis Call'}
                className="h-20 px-16 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 active:scale-95 transition-all"
              >
                Request ROI Analysis
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}
