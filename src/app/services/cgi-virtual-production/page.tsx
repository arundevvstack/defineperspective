import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Sparkles, Wand2, Layers, Globe, Zap, BarChart3, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI CGI & Virtual Production Services in Kerala & India | Define Perspective",
  description: "Elite AI CGI and virtual production services for product ads and luxury brand visuals. We create hyper-realistic 3D visualizations and AI-generated environments without the need for physical shoots.",
  keywords: ["AI CGI production India", "CGI product video services", "AI virtual production company", "AI 3D product visualization", "CGI ads production India"],
};

export default function AICGIPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8 md:gap-12">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 backdrop-blur-md">
                 Node: Premium CGI Studio
              </div>
              <div className="h-[1px] w-24 bg-cyan-400/20" />
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             AI CGI & <br /> <span className="text-cyan-400 italic">Virtual Production</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We build high-converting AI-powered visual campaigns. Impossible visuals, rendered in neural time. No physical shoot required."
           </p>
        </header>

        {/* Section 1: What is AI CGI Production? (AI Search Focus) */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">What is AI CGI Production?</h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                AI CGI Production is the next evolution of 3D visualization. We use generative neural networks to create hyper-realistic product commercials and surreal environments. For brands in India, this eliminates the logistical overhead of physical studios while delivering luxury-tier cinematic quality.
              </p>
              <div className="space-y-6">
                 {[
                   "Neural 3D Scene Synthesis",
                   "Photorealistic Light Interaction",
                   "AI-Generated Virtual Environments",
                   "Automated Asset Scaling"
                 ].map(item => (
                   <div key={item} className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-cyan-400">
                     <div className="h-0.5 w-12 bg-cyan-400" /> {item}
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                alt="Futuristic AI CGI Scene Generation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
           </div>
        </section>

        {/* Section 2: Why Brands Use AI CGI */}
        <div className="mb-40 grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: "Zero Logistics", desc: "No physical shoot required. No travel. No weather delays. Just pure creative engineering.", icon: Globe },
             { title: "Velocity", desc: "Production cycles reduced from months to days using AI-accelerated render pipelines.", icon: Zap },
             { title: "Hyper-Control", desc: "Modify every pixel, light source, and camera move with infinite precision.", icon: Wand2 }
           ].map((item, idx) => (
             <div key={idx} className="p-12 rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex flex-col gap-8 group">
                <div className="h-16 w-16 rounded-2xl bg-cyan-400 text-black flex items-center justify-center group-hover:scale-110 transition-all shadow-xl">
                   <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white leading-tight">{item.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed uppercase tracking-tighter text-xs">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Section 3: Use Cases Node */}
        <section className="mb-40">
           <h2 className="text-4xl font-black mb-16 uppercase tracking-widest text-center text-white">Strategic Industry Node</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Premium Product Ads", text: "Liquid-simulations and impossible camera angles for luxury beverages and cosmetics.", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop" },
                { title: "E-commerce Visualization", text: "8K photorealistic renders for Amazon and Flipkart that outperform physical photography.", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop" },
                { title: "Virtual Production Sets", text: "Create high-end backgrounds for live-action talent without leaving our studio in Kerala.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" },
                { title: "Concept Commercials", text: "Bespoke sci-fi or futuristic environments tailored for tech and energy sectors.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" }
              ].map((use, idx) => (
                <div key={idx} className="relative h-[400px] rounded-[3rem] overflow-hidden border border-white/5 group">
                   <Image src={use.img} alt={use.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 opacity-40 group-hover:opacity-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                   <div className="absolute bottom-12 left-12 right-12">
                      <h4 className="text-2xl font-black uppercase tracking-widest mb-4">{use.title}</h4>
                      <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md">{use.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Section 4: Who Is This For? & FAQ */}
        <div className="mb-40 grid md:grid-cols-2 gap-20">
           <div className="space-y-12">
              <h2 className="text-3xl font-black uppercase tracking-widest">Who is AI CGI for?</h2>
              <ul className="space-y-8">
                {[
                  { t: "D2C Brands", d: "Scale your product visuals daily without waiting for photographers." },
                  { t: "Agencies", d: "High-end visual delivery for your clients at 1/3 the traditional budget." },
                  { t: "Startups", d: "Professional grade commercials that compete with Fortune 500 standards." }
                ].map(item => (
                  <li key={item.t} className="flex gap-6">
                     <CheckCircle2 size={24} className="text-cyan-400 shrink-0" />
                     <div>
                        <div className="text-xl font-bold uppercase tracking-widest text-white mb-2">{item.t}</div>
                        <div className="text-zinc-500 font-light">{item.d}</div>
                     </div>
                  </li>
                ))}
              </ul>
           </div>
           <div className="bg-white/5 rounded-[3rem] p-12 border border-white/5">
              <h2 className="text-2xl font-black uppercase tracking-widest mb-10">AI CGI Strategy FAQ</h2>
              <div className="space-y-10">
                 <div className="space-y-3">
                    <h5 className="text-cyan-400 font-bold uppercase text-sm tracking-widest">What is AI CGI production?</h5>
                    <p className="text-zinc-400 text-sm leading-relaxed">It's a workflow where we combine 3D modelling with neural rendering to create visuals that exceed physical reality in both detail and creative possibility.</p>
                 </div>
                 <div className="space-y-3">
                    <h5 className="text-cyan-400 font-bold uppercase text-sm tracking-widest">How AI CGI helps brands?</h5>
                    <p className="text-zinc-400 text-sm leading-relaxed">It provides absolute creative control, creates assets that are infinitely reusable, and significantly lowers the cost of high-end visual production for Indian brands.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* High-Conversion CTAs */}
        <div className="py-40 text-center border-t border-white/5 mt-40">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white leading-none">
             Engineered for <br /> <span className="text-cyan-400 italic">Visual Dominance.</span>
           </h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <button 
                onClick={() => window.location.href = '/contact?subject=AI CGI Ad Project'}
                className="h-20 px-16 rounded-full bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              >
                Create Your AI CGI Ad
              </button>
              <button 
                onClick={() => window.location.href = '/contact?subject=AI Visual Demo Request'}
                className="h-20 px-16 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 active:scale-95 transition-all"
              >
                Get AI Visual Demo
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}
