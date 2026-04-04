import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Package,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CGI Product Video Production India | High-End 3D Visuals Kerala | Define Perspective Studios",
  description: "Elite CGI and 3D product video production. Impossible shots and surreal environments created for premium brands across India. Cinematic 3D rendering with AI acceleration.",
  keywords: ["CGI product videos India", "3D product animation Kerala", "best 3D visuals Kochi", "CGI agency India", "virtual product commercials"],
};

export default function CGIProductPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden theme-blue">
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Vertical: AI CGI // Node 04
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            CGI <br />
            <span className="text-primary-accent italic">Production_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed uppercase tracking-widest">
            "We build worlds that don't exist, to sell products that do. High-end CGI for the 2026 marketplace."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />
           <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none italic">
              Impossible. <br />
              <span className="text-primary-accent font-black text-white">Visualized.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12 uppercase tracking-tight text-sm">
              CGI eliminates the physical limitations of traditional production. Our lab in Kerala and India utilizes neural-accelerated 3D pipelines to create surreal, gravity-defying product films that command attention in crowded digital storefronts. We help premium brands scale their visual identity with photorealistic textures and cinematic lighting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=CGI Project Enquiry"
                className="h-20 px-12 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
              >
                Inquire for CGI <ArrowRight size={20} />
              </Link>
              <Link
                href="https://wa.me/919496191684"
                target="_blank"
                className="h-20 px-12 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-4 hover:text-primary-accent transition-all duration-300"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              alt="High-fidelity 3D CGI and Product Visualization Hub India"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </div>
        </section>

        <div className="mb-40 py-24 border-y border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: "Neural Rendering", d: "Hyper-realistic lighting and volumetric shaders powered by AI-accelerated render farms.", icon: Sparkles },
                { t: "Surreal Motion", d: "Gravity-defying product interaction and impossible camera paths for thumb-stopping ads.", icon: Layers },
                { t: "Infinite Nodes", d: "Scale your visual library without travel logistics, building photorealistic digital worlds.", icon: Globe }
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                   <div className="h-12 w-12 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent hover:bg-white hover:text-primary-accent transition-all duration-300">
                      <item.icon size={24} />
                   </div>
                   <h4 className="text-xl font-bold uppercase tracking-widest">{item.t}</h4>
                   <p className="text-zinc-500 font-light text-xs uppercase tracking-widest leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}
