import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Target, Zap, BarChart3, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Strategy & Business Consulting India | Best Video Strategy Agency Kerala | Define Perspective",
  description: "Strategic video consulting and content planning for high-growth brands across India. Align your media production with long-term business goals and ROI benchmarks.",
  keywords: ["video marketing strategy India", "business video consulting Kerala", "video content planning Kochi", "ROI video strategy India"],
};

const subServices = [
  { 
    title: "Video Marketing Strategy", 
    href: "/services/video-strategy/video-marketing-strategy",
    desc: "Comprehensive roadmap aligning your business goals with high-performance visual content."
  },
  { 
    title: "Content Strategy & Planning", 
    href: "/services/video-strategy/content-strategy-planning",
    desc: "Architecting your social and digital presence through long-term content scheduling."
  },
  { 
    title: "Campaign Execution", 
    href: "/services/video-strategy/campaign-planning-execution",
    desc: "Full-lifecycle management of your high-stakes video marketing campaigns across India."
  }
];

export default function VideoStrategyLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 backdrop-blur-md">
                 Division: Strategic Intelligence
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white font-black">
             Video <br /> <span className="text-cyan-400 italic">Strategy_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Content without strategy is noise. We build the data-driven blueprints for your brand's visual dominance."
           </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {subServices.map((service, idx) => (
             <div 
               key={service.title} 
               onClick={() => window.location.href = service.href}
               className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-400/30 transition-all flex flex-col gap-8"
             >
                <div className="h-14 w-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                   <Target size={28} />
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
           <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Strategic Hub Strategy Room"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-400/10" />
           </div>
           <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">Blueprints for <br /><span className="text-cyan-400 italic">Market Capture.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                We believe that every piece of visual content should be a spoke in a larger business wheel. Our strategy process in Kerala and Kochi involves deep audience profiling, journey mapping, and conversion-funnel optimization to ensure that your media budget is an investment, not an expense.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?service=video-strategy'}
                className="h-20 px-12 rounded-full bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                Draft Strategy Brief
              </button>
           </div>
        </section>
      </div>
    </main>
  );
}
