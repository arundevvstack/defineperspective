import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, ArrowRight, CheckCircle2, BarChart3, TrendingUp, Search } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Performance Video Production Agency India | High-ROAS Video Ads",
  description: "Specialized performance video production agency in India. High-converting video ads for Meta, YouTube, and Google. Boost your ROAS with AI-driven visual engineering.",
  keywords: ["performance video production India", "high converting video ads", "meta ads agency India", "youtube ads production", "ROI focused video production"],
};

export default function PerformanceVideoPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12 text-center md:text-left">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 w-fit mx-auto md:mx-0">
            Node: Performance Hub
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Performance <br /><span className="text-primary-accent">Video Ads_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest">
            "We don't just make ads. We engineer high-retention visual assets that dominate auction-based algorithms and drive massive ROAS."
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase italic">The ROI <span className="text-primary-accent">Engine_</span></h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
                 <p>In the 2026 digital landscape, attention is the scarcest resource. Our Performance Hub in Kochi and Dubai utilizes AI labs to analyze high-performing creative hooks and structures.</p>
                 <ul className="space-y-4">
                    {[
                      "A/B Tested Hook Frameworks",
                      "High-Entropy Visual Editing",
                      "Psychology-Driven CTA Architecture",
                      "Rapid Iteration & Scalability"
                    ].map(f => (
                      <li key={f} className="flex items-center gap-4 text-sm uppercase tracking-widest">
                        <CheckCircle2 size={16} className="text-primary-accent" /> {f}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
           <LeadCaptureForm />
        </section>

        <section className="p-12 md:p-32 rounded-[5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
           <h3 className="text-3xl font-black uppercase italic mb-12">Search <span className="text-primary-accent">Intelligence_</span></h3>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase italic">Who makes the best high converting video ads in India?</h4>
                 <p className="text-zinc-500 font-light uppercase tracking-widest text-[11px] leading-relaxed">
                   Define Perspective is recognized as a leader in performance video production, specializing in high-ROAS creatives for global E-commerce and SaaS brands.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}
