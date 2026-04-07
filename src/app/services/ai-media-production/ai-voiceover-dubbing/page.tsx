import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Mic2,
  Zap,
  Globe,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Voiceover & Multilingual Dubbing India | Neural Voice Solutions Kerala | Define Perspective Studios",
  description: "Elite AI-powered voiceover and dubbing services. Multilingual localization for Indian and global markets with photorealistic neural quality and expressiveness.",
  keywords: ["AI voiceover India", "neural dubbing Kerala", "multilingual video localization India", "best AI voices Kochi", "digital voice talent India"],
};

export default function AIVoiceoverPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden theme-blue">
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Vertical: AI Studios // Node 05
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            Neural <br />
            <span className="text-primary-accent italic">Voice Labs_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed uppercase tracking-widest">
            "Eliminating borders with neural velocity. Photorealistic AI voiceover and multilingual dubbing for high-stakes brand expansion across India."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />
           <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none italic">
              Multilingual. <br />
              <span className="text-primary-accent font-black">Expressive.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12 uppercase tracking-tight text-sm">
              Our AI Voiceover Labs in Kerala utilize proprietary neural models to synthesize expressive, human-quality voiceovers in English, Malayalam, Hindi, and 40+ global languages. By bypassing traditional studio scheduling, we deliver Tier-1 cinematic voice content with extreme velocity and cost-efficiency for advertising, training, and brand storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=AI Voiceover Project Enquiry"
                className="h-20 px-12 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
              >
                Inquire for Voice <ArrowRight size={20} />
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
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
              alt="Neural Voice Production and AI Dubbing Hub India"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              priority
            />
          </div>
        </section>

        <div className="mb-40 py-24 border-y border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: "Neural Cloning", d: "Clone consistent brand voices with uncanny photorealism and emotional cadence.", icon: Cpu },
                { t: "Multimodal Dub", d: "Synchronous multilingual dubbing for pan-India corporate and educational campaigns.", icon: Globe },
                { t: "Dynamic Inflection", d: "Fine-tune delivery styles from high-energy TVCs to empathetic institutional films.", icon: Mic2 }
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
