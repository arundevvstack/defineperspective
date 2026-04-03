import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Share2, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Performance Marketing Video Ads India | Best ROAS Video Agency Kerala | Define Perspective",
  description: "High-performance video ad creatives designed for ROAS. Specialized in Facebook, Instagram, and YouTube video ads for Indian D2C, SaaS, and App brands.",
  keywords: ["performance marketing video ads", "best ROAS video agency India", "high-converting social ad creatives Kochi", "performance ads company Kerala"],
};

const subServices = [
  { 
    title: "Facebook & Instagram Ads", 
    href: "/services/performance-marketing/facebook-instagram-ad-creatives",
    desc: "Vertical Reels, stop-motion, and AI-powered performance ads optimized for direct-response."
  },
  { 
    title: "YouTube Ads Production", 
    href: "/services/performance-marketing/youtube-ads-production",
    desc: "High-intent YouTube TrueView and Shorts creatives designed for long-term brand scaling."
  },
  { 
    title: "Conversion-Focused Video", 
    href: "/services/performance-marketing/conversion-focused-video-ads",
    desc: "Direct-response video assets specifically engineered to lower your CPA and boost conversions."
  }
];

export default function PerformanceAdsLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-rose-400/50 text-[10px] font-mono font-black text-rose-400 uppercase tracking-widest bg-rose-400/10 backdrop-blur-md">
                 Division: ROI Intelligence
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
             Performance <br /> <span className="text-rose-400 italic">Ads_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Creative is the new targeting. We build high-velocity video ad creatives that win auctions and dominate feeds across India."
           </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {subServices.map((service, idx) => (
             <div 
               key={service.title} 
               onClick={() => window.location.href = service.href}
               className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-rose-400/30 transition-all flex flex-col gap-8"
             >
                <div className="h-14 w-14 rounded-2xl bg-rose-400/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                   <Share2 size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-white transition-colors">
                   View Node <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
             </div>
           ))}
        </div>

        {/* Strategic Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">Creative That <br /><span className="text-rose-400 italic font-black">Scales ROAS.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                In today's performance environment, the quality of your video creative is your greatest competitive edge. Our Indian and Kerala based studios specialize in direct-response video production that fuses psychological hooks with viral storytelling formats. We help you spend less on testing and more on scaling profitable campaigns.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?service=performance-marketing'}
                className="h-20 px-12 rounded-full bg-rose-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                Launch Ad Campaign
              </button>
           </div>
           <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
                alt="Performance Video Ads Social"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-400/10" />
           </div>
        </section>
      </div>
    </main>
  );
}
