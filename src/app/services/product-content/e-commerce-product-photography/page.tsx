import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Camera, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "E-commerce Product Photography India | Define Perspective",
  description: "Breathtaking product photography for e-commerce, catalogs, and social media. Specialized photography studio in Kerala for fashion, luxury goods, and D2C brands in India.",
  keywords: ["e-commerce product photography India", "best product photographer Kerala", "fashion catalog photography Cochin", "D2C product shots India"],
};

export default function PhotoProductSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-green-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-green-400/50 text-[10px] font-mono font-black text-green-400 uppercase tracking-widest bg-green-400/10 backdrop-blur-md">
                 Node: Optic Precision
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Market-Leading <br /> <span className="text-green-400 font-black italic">Photography</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Breathtaking visuals. Cinematic lighting. High-impact photography that sells your product before the customer even reads the price."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Elite <span className="text-green-400 italic">Optic Craft.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                In e-commerce, the first touchpoint is the image. Our product photography studio in Kerala uses high-end cinematic lighting and post-processing to create visuals that stand out on global marketplaces like Amazon, Instagram, and your own D2C storefront. We help Indian brands build an elite visual presence through precision photography.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Product Photography enquiry'}
                className="h-16 px-10 rounded-2xl bg-green-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                Inquire For Shoot
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
                alt="Elite Product Photography Studio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-400/10" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-green-300">Optic Logic FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best e-commerce photographer in Kerala?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in high-end product photography for Indian brands. Our specialized studio in Kerala provides premium product shots, fashion catalog photography, and creative editorials for brands that want to dominate the global marketplace with world-class visuals.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
