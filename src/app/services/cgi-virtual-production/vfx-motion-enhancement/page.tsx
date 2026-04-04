import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "AI VFX & Motion Enhancement India | Best Visual Effects Studio Kerala | Define Perspective",
  description:
    "Breathtaking AI-enhanced VFX and motion graphics for brands in India. Elevate your brand visuals with neural motion enhancement, automated roto-scoping, and cinematic CGI integration.",
  keywords: [
    "AI VFX studio India",
    "best visual effects Kerala",
    "AI motion enhancement Kochi",
    "VFX for brands India",
  ],
};
export default function AIVFXSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              {" "}
              DP AI STUDIOS: VFX Division{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white font-black italic">
            {" "}
            AI VFX <br />{" "}
            <span className="text-primary-accent font-black">Enhancement_</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Impossible movement. Seamless integration. We elevate traditional
            film with next-gen neural visual effects."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Neural <span className="text-primary-accent italic">VFX Velocity.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Traditional VFX is labor-intensive and slow. Our AI VFX & Motion
              enhancement pipeline uses deep learning models to automate rote
              tasks like roto-scoping, object removal, and scene tracking,
              allowing our artists to focus on cinematic high-fidelity visuals.
              We provide Kerala's and India's leading brands with visual effects
              quality that competes with global cinema.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=AI VFX enquiry"
                className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/50 transition-all flex items-center justify-center gap-3 hover:text-primary-accent transition-all duration-300"
              >
                Chat on WhatsApp
              </Link>
            </div>{" "}
          </div>{" "}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt="Cinematic AI-Enhanced VFX Environment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            VFX Innovation FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best visual effects studio in Kerala?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a pioneer in neural motion enhancement.
                Our Kochi studio provides high-end AI VFX services for
                commercials and brand films across India, focusing on seamless
                CGI integration and high-velocity asset enhancement.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
