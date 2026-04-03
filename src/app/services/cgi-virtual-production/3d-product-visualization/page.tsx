import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Layers,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "AI-Generated 3D Product Visualization India | Best CGI Studio Kerala | Define Perspective Studios",
  description:
    "Elite 3D product visualization for e-commerce and luxury brands in India. Photorealistic CGI renders and AI-enhanced product visuals optimized for high-end conversion.",
  keywords: [
    "AI 3D product visualization India",
    "best CGI studio Kerala",
    "3D product rendering company Kochi",
    "luxury product CGI India",
  ],
};
export default function AI3DProductVisualizationSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              {" "}
              DP AI STUDIOS: Optic Logic Node{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white font-black italic shadow-glow">
            {" "}
            3D Product <br />{" "}
            <span className="text-primary-accent font-black">
              Visualization_
            </span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Impossible detail. Absolute control. We build 8K photorealistic
            product worlds for the elite e-commerce sector."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Elite{" "}
              <span className="text-primary-accent italic">Optic Craft.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Most 3D renders look artificial. We combine traditional high-end
              CGI modelling with proprietary AI-enhanced texture and lighting
              synthesis to create product visuals that are indistinguishable
              from reality. For brands in Kerala and across India, this
              eliminates the need for expensive physical studio bookings while
              delivering luxury-tier cinematic quality.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=AI 3D Visualization enquiry"
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
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
              alt="Photorealistic 3D Product Renders"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            AI 3D Strategy FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best CGI studio for e-commerce in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in e-commerce 3D visualization.
                We provide specialized CGI services for high-end fashion,
                jewelry, and luxury goods in Kerala and across India, focusing
                on pixel-perfect detail and world-class visual aesthetics that
                out-perform traditional photography.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
