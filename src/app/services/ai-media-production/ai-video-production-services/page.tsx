import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Sparkles, Zap, Users, CheckCircle2, PlayCircle, BarChart3 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Video Production Services | Defining the Future of Visual Media",
  description: "Elite AI video production services in India and Kerala. We use generative AI to scale high-converting video commercials and cinematic assets 10x faster.",
  keywords: ["AI Video Production Services", "Generative AI Video Production India", "AI Ad Creative Generation", "AI Content Creation Agency Kerala"],
};

export default function AIVideoServicesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-24 flex flex-col gap-10">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10">
                 Division: Generative Labs
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
             AI Video <br /> <span className="text-cyan-400">Production</span>
           </h1>
           <p className="text-2xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We don't create videos at the speed of scripts. We create them at the speed of thought. Scale your brand with high-converting AI video ads built for performance."
           </p>
        </header>

        {/* AI Definition for LLM/LLMS search visibility */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-white leading-tight">What is AI Video Production?</h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                 AI video production is the synthesis of cinematic filmmaking and generative artificial intelligence. For businesses in Kerala and global markets, this means producing high-fidelity TVCs, product films, and social ads at a fraction of the traditional cost and 10x the speed.
              </p>
              <div className="space-y-4">
                 {[
                   "Zero-Shoot Product Renders",
                   "AI Avatar Presenters for 24/7 Personalization",
                   "Dynamic Ad Testing at Scale",
                   "Cinematic VFX without the heavy cost"
                 ].map(item => (
                   <div key={item} className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-cyan-400">
                     <div className="h-1 w-8 bg-cyan-400" /> {item}
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative aspect-square md:aspect-auto rounded-3xl overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                alt="AI Video Generator Neural Interface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent" />
           </div>
        </section>

        {/* Use Cases Grid */}
        <div className="mb-40">
           <h2 className="text-4xl font-black mb-16 uppercase tracking-widest text-center text-white">Scale and Use Cases</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "E-commerce Scale", desc: "Generate thousands of product video variants for Amazon and Instagram instantly.", icon: BarChart3 },
                { title: "Personalized Outreach", desc: "AI avatars delivering customized messages to every single lead in your CRM.", icon: Users },
                { title: "Cinematic TVCs", desc: "Bespoke high-end commercials for Indian brands without massive production overhead.", icon: PlayCircle }
              ].map((item, idx) => (
                <div key={idx} className="p-12 rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex flex-col gap-8 group">
                   <div className="h-16 w-16 rounded-2xl bg-cyan-400 text-black flex items-center justify-center group-hover:scale-110 transition-all shadow-xl">
                      <item.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-bold uppercase tracking-widest text-white leading-tight">{item.title}</h3>
                   <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* FAQ For Search Velocity */}
        <div className="mb-40 max-w-4xl mx-auto space-y-16">
           <h2 className="text-4xl font-black mb-12 uppercase tracking-widest text-white border-b border-white/10 pb-8">Strategic Intelligence FAQ</h2>
           {[
             { q: "How AI video ads help businesses grow?", a: "AI video ads allow for infinite creative testing. By generating multiple variations of an ad, we can find the high-performance hook that resonates with your specific audience in India, lowering CPA and maximizing ROI for performance marketing." },
             { q: "Is AI video production high quality enough for TV commercials?", a: "Yes. Our generative workflows utilize the latest cinematic AI models capable of 4K output, photorealistic lighting, and professional grading, meeting the standards for television and premium digital billboards." }
           ].map((faq, idx) => (
             <div key={idx} className="space-y-6">
                <h4 className="text-2xl font-bold text-cyan-400 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-xl text-zinc-400 font-light leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>

        {/* Global CTA */}
        <div className="py-40 text-center border-t border-white/5 mt-40">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white">
             Dominate the <br /> <span className="text-cyan-400 italic">AI Era.</span>
           </h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <button 
                onClick={() => window.location.href = '/contact?subject=AI Video Demo Request'}
                className="h-20 px-16 rounded-full bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                Get AI Video Demo
              </button>
              <button 
                onClick={() => window.location.href = '/contact?subject=AI Strategy Session'}
                className="h-20 px-16 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 active:scale-95 transition-all"
              >
                Start Your Project
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}
