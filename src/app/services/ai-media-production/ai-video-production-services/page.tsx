import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Sparkles, Zap, Target, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "AI Video Production Services India & Kerala | Define Perspective Studios",
  description:
    "Elite AI-powered video production services. Scale your brand vision across India with generative video labs and neural-accelerated production pipelines.",
  keywords: [
    "AI video production services India",
    "generative video agency Kerala",
    "AI video production Kochi",
    "neural media labs India",
  ],
};
export default function AIVideoServicesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-32 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              {" "}
              DP AI STUDIOS: Core Pipeline{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            {" "}
            AI Video <br />{" "}
            <span className="text-primary-accent italic">Services_</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Velocity is the new benchmark. We deploy proprietary neural engines
            to build high-fidelity media assets at speed."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Neural{" "}
              <span className="text-primary-accent italic">Aesthetics.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Traditional production is limited by physical constraints. Our AI
              Video Production Services leverage advanced diffusion and
              synthesis models to create cinematic visuals that were previously
              impossible. For brands in Kerala and across India, this means
              global-tier visual quality with significantly reduced lead
              times.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=AI Video Services Project"
                className="h-16 px-10 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_var(--glow)] flex items-center justify-center gap-3"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 hover:border-primary-accent/50 transition-all flex items-center justify-center gap-3"
              >
                Chat on WhatsApp
              </Link>
            </div>{" "}
          </div>{" "}
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
              alt="AI Neural Scene Synthesis Core"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            AI Visibility FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a pioneer in AI-driven media. Our Kochi
                and Trivandrum based labs provide generative video solutions for
                national and international brands, focusing on cinematic realism
                and high-velocity asset scaling.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
