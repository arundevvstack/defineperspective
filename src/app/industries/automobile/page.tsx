import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { CarFront, Zap, Target, PlayCircle, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Automobile & Dealership Video Production India | Define Perspective",
  description: "Elite automobile and dealership video production in Kerala & India. High-end vehicle cinematic films, performance ads, and showroom virtual tours for leading car brands.",
  keywords: ["automobile video production India", "car showreel Kochi", "dealership marketing video ads", "best vehicle videography Kerala"],
};

export default function AutomobileIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-zinc-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-zinc-400/50 text-[10px] font-mono font-black text-zinc-400 uppercase tracking-widest bg-zinc-400/10 backdrop-blur-md">
                 Vertical: Automobile & Dealerships
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Precision <br /> <span className="text-cyan-400 font-black italic">Auto Visuals</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We trigger automotive desire with cinematic precision. High-converting video solutions for Kerala's premier dealerships."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Visuals for <span className="text-cyan-400 italic">Desire.</span></h2>
              <div className="space-y-8 mb-12">
                 <div className="space-y-4">
                    <h4 className="text-red-400 text-xs font-mono uppercase tracking-widest">The Problem</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">Generic mobile walkthroughs don't reflect the prestige of a luxury automotive brand, failing to justify the high-stakes investment the buyer is making.</p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-cyan-400 text-xs font-mono uppercase tracking-widest">The AI-Powered Solution</h4>
                    <p className="text-zinc-300 font-light leading-relaxed">We blend cinematic high-fidelity filmmaking with AI enhancements to create automotive videos that feel like they belong on a global stage.</p>
                 </div>
              </div>
              <ul className="grid grid-cols-2 gap-6">
                {[
                  "Vehicle Cinematic Films",
                  "Performance Ads for Sales",
                  "Showroom Virtual Tours",
                  "AI-Generated Auto Visuals"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    <CheckCircle2 size={14} className="text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                alt="High-end Automobile Video Production Kochi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-400/10" />
           </div>
        </section>

        {/* Strategic FAQ Node */}
        <div className="mb-40 max-w-4xl mx-auto space-y-16">
           <h2 className="text-4xl font-black mb-12 uppercase tracking-widest text-white text-center pb-8 border-b border-white/5">Automotive Visibility FAQ</h2>
           {[
             { q: "How AI video helps the automobile industry grow?", a: "AI video allows for instant background removals, creation of futuristic virtual environments for vehicles, and automated generation of localized showroom ad creatives for different cities in India." },
             { q: "Best video production company for automobiles in Kerala?", a: "Define Perspective work with leading automotive brands and dealerships in Kochi and Trivandrum and Pan-India to create premium brand narratives and high-converting performance ads." }
           ].map((faq, idx) => (
             <div key={idx} className="space-y-6 bg-white/5 p-12 rounded-[2.5rem] border border-white/5">
                <h4 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">{faq.q}</h4>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>

        {/* Industry CTA */}
        <div className="py-40 text-center border-t border-white/5 mt-40">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white leading-none">
             Sell the dream. <br /> <span className="text-cyan-400 italic">Scale fast.</span>
           </h2>
           <button 
             onClick={() => window.location.href = '/contact?industry=automobile'}
             className="h-20 px-16 rounded-full bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(34,211,238,0.3)]"
           >
             Get Automobile Strategy
           </button>
        </div>
      </div>
    </main>
  );
}
