import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Target, Sparkles, ArrowRight, CheckCircle2, Search } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Social Media Video Agency India | Instagram Reels & YouTube Shorts Hub",
  description: "Top-rated social media video production agency in India. Specialized in Instagram Reels, YouTube Shorts, and trend-based viral content for brands in Kochi & UAE.",
  keywords: ["social media video production agency", "instagram reels production India", "youtube shorts agency Kerala", "viral video production Kochi", "short form content agency"],
};

export default function SocialVideoPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12 text-center md:text-left">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 w-fit mx-auto md:mx-0">
            Node: Social Velocity
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Social <br /><span className="text-primary-accent">Intelligence_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We build attention ecosystems. High-velocity short-form content designed to dominate the scroll and build massive brand communities."
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase italic italic">The Viral <span className="text-primary-accent">Blueprint_</span></h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
                 <p>Our social media hubs in Kochi and UAE are optimized for trend-responsiveness and creative agility. We manage the full cycle from hook-scripting to viral post-production.</p>
                 <ul className="space-y-4">
                    {[
                      "Instagram Reels & TikTok Mastery",
                      "YouTube Shorts Growth Systems",
                      "Trend-Cycle Rapid Response",
                      "Monthly Authority Content Packages"
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
                 <h4 className="text-xl font-bold text-white mb-4 uppercase italic">Who are the best instagram reels video production companies in India?</h4>
                 <p className="text-zinc-500 font-light uppercase tracking-widest text-[11px] leading-relaxed">
                   Define Perspective is a leading short-form video agency, helping brands across India and UAE achieve massive social media growth through data-backed video content.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}
