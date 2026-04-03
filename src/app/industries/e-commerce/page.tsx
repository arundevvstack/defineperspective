import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { ShoppingCart, ShoppingBag, Zap, Target, BarChart3, CheckCircle2, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "E-commerce & Product Video Production India | Define Perspective",
  description: "High-converting product video production for E-commerce and D2C brands in India. Scaling visual content for Amazon, Flipkart, and Instagram with AI-powered velocity.",
  keywords: ["e-commerce video production India", "product video production Kerala", "D2C brand video ads", "Amazon product videos India"],
};

export default function EcommerceIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-amber-400/50 text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 backdrop-blur-md">
                 Vertical: D2C & E-commerce
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             E-commerce <br /> <span className="text-amber-400">Content Engine</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We build high-velocity product video solutions for D2C brands that want to dominate marketplaces and social feeds."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Scale Your <span className="text-amber-400 italic">Visual Identity.</span></h2>
              <div className="space-y-8 mb-12">
                 <div className="space-y-4">
                    <h4 className="text-red-400 text-xs font-mono uppercase tracking-widest leading-none">The Problem</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">Traditional product shoots are slow, expensive, and cannot keep up with the daily content requirements of modern D2C marketing.</p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-amber-400 text-xs font-mono uppercase tracking-widest leading-none">The AI-Powered Solution</h4>
                    <p className="text-zinc-300 font-light leading-relaxed">Our AI-integrated Content Engine allows you to generate hundreds of product video variants and marketplace-ready visuals from a single master project.</p>
                 </div>
              </div>
              <ul className="grid grid-cols-2 gap-6">
                {[
                  "Amazon/Flipkart Optimized",
                  "AI Product Render Scaling",
                  "Vertical Reels Production",
                  "High-ROAS Ad Creatives"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    <CheckCircle2 size={14} className="text-amber-400" /> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
                alt="High-end E-commerce Product Photography"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
           </div>
        </section>

        {/* Section 2: Use Cases */}
        <div className="mb-40">
           <h2 className="text-4xl font-black mb-16 uppercase tracking-widest text-center text-white">Strategic Product Nodes</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Marketplace Listing", desc: "Clean, professional white-background and lifestyle product videos optimized for Amazon & Flipkart conversion.", icon: ShoppingBag },
                { title: "Social Content Hub", desc: "Daily vertical video production for Instagram Reels and TikTok ensuring consistent brand visibility.", icon: Target },
                { title: "Performance Ads", desc: "Conversion-centric ad creatives engineered to lower CPA and boost your D2C store revenue.", icon: BarChart3 }
              ].map((item, idx) => (
                <div key={idx} className="p-12 rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex flex-col gap-10 group">
                   <div className="h-16 w-16 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-all">
                      <item.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-bold uppercase tracking-widest text-white leading-tight">{item.title}</h3>
                   <p className="text-zinc-500 font-light leading-relaxed uppercase tracking-tighter text-xs">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Strategic FAQ Node */}
        <div className="mb-40 max-w-4xl mx-auto space-y-16">
           <h2 className="text-4xl font-black mb-12 uppercase tracking-widest text-white text-center pb-8 border-b border-white/5">E-commerce Visibility FAQ</h2>
           {[
             { q: "How AI video helps the E-commerce industry grow?", a: "AI allows for instant background removals, voiceover dubbing in multiple Indian languages, and automated creative testing. This ensures your brand can iterate faster and find the winning ad creative that scales your sales." },
             { q: "Why businesses need product video marketing in India?", a: "Indian consumers are increasingly visual-first. High-quality video build trust, reduces return rates by showcasing the product accurately, and drives significantly higher engagement than static imagery on platforms like Amazon." }
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
             Engineered for <br /> <span className="text-amber-400 italic">E-comm Velocity.</span>
           </h2>
           <button 
             onClick={() => window.location.href = '/contact?industry=ecommerce'}
             className="h-20 px-16 rounded-full bg-amber-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)]"
           >
             Start Your Project
           </button>
        </div>
      </div>
    </main>
  );
}
