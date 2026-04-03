import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Users, Zap, Target, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Avatar Videos & AI Presenters India | Define Perspective",
  description: "Scale your learning content and brand presence with photorealistic AI avatar presenters. High-fidelity generative characters for EdTech, corporate training, and commerce across India.",
  keywords: ["AI avatar videos India", "AI presenters for brands", "generative human video production", "AI characters for EdTech Kerala"],
};

export default function AIAvatarSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-pink-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-pink-400/50 text-[10px] font-mono font-black text-pink-400 uppercase tracking-widest bg-pink-400/10 backdrop-blur-md">
                 DP AI Studios: Generative Humans
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             AI Avatar <br /> <span className="text-pink-400">Presenters</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Your brand, 24/7. Photorealistic AI presenters that scale your educational and marketing content instantly."
           </p>
        </header>

        {/* Section 1: Problem/Solution */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Infinite <br /><span className="text-pink-400 italic">Personalization.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Traditional course and training production is slow and requires hours of studio time with talent. Our AI Avatar pipeline allows EdTech brands and corporate enterprises to generate professional video content in minutes by simply converting script to photorealistic human video.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=AI Avatar Project enquiry'}
                className="h-16 px-10 rounded-2xl bg-pink-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(244,114,182,0.3)]"
              >
                Create Your AI Avatar
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="AI Avatar Presenter for Corporate Brand"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-400/10" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-pink-400">Avatar Logic FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best AI avatar production in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective provides high-fidelity AI avatars tailored for the Indian market, supporting multiple regional languages including Malayalam, Tamil, and Hindi. Our generative human models are designed for EdTech and corporate scaling.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
