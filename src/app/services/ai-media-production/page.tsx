import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Sparkles, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Media Production India | Best AI Video Content Agency Kerala | Define Perspective Studios",
  description: "Elite generative AI video production and media automation across India. Specialized in AI avatar presenters, neural ad creatives, and high-velocity content scaling.",
  keywords: ["AI video production India", "best AI media agency Kerala", "generative AI video production Kochi", "AI media automation India"],
};

const subServices = [
  { 
    title: "AI Avatar Videos", 
    href: "/services/ai-media-production/ai-avatar-videos-ai-presenters",
    desc: "Photorealistic AI presenters that scale your educational and marketing content instantly."
  },
  { 
    title: "AI Product Videos", 
    href: "/services/ai-media-production/ai-product-videos-no-shoot-required",
    desc: "Zero-shoot cinematic product commercials rendered entirely from static images or 3D models."
  },
  { 
    title: "Generative AI Content", 
    href: "/services/ai-media-production/generative-ai-content-creation",
    desc: "Automated visual asset generation and vertical social feeds for rapid brand scaling."
  }
];

export default function AIMediaLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Cinematic Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8 text-center md:text-left">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
                 DP AI STUDIOS: Neural Core
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
             AI Media <br /> <span className="text-primary-accent italic">Production_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "The future of media is neural. We build high-velocity AI-powered visual campaigns for brands that want to scale exponentially."
           </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {subServices.map((service, idx) => (
             <div 
               key={service.title} 
               onClick={() => window.location.href = service.href}
               className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary-accent/30 transition-all flex flex-col gap-8"
             >
                <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--glow)]">
                   <Sparkles size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-white transition-colors">
                   Enter Hub <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
             </div>
           ))}
        </div>

        {/* Strategic Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">Scale Beyond <br /><span className="text-primary-accent italic font-black">Human Limits.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                Traditional production cycles are the bottleneck of brand growth. Our AI Media wing in Kerala and India utilizes proprietary neural pipelines to create world-class visual content at a fraction of the cost and time. We help e-commerce, EdTech, and SaaS brands reach more markets with content that feels human but is powered by the next decade of technology.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?service=ai-media-production'}
                className="h-20 px-12 rounded-full bg-primary-accent text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_var(--glow)]"
              >
                Initalize AI Strategy
              </button>
           </div>
           <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                alt="AI Media Neural Scene Production"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-accent/10 opacity-30" />
           </div>
        </section>
      </div>
    </main>
  );
}
