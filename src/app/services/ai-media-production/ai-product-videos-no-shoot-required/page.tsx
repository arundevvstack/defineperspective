import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Image as ImageIcon,
  Zap,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "AI Product Videos India - No Shoot Required | Define Perspective",
  description:
    "Render hyper-realistic product commercials and video ads entirely from static images or 3D models. No physical studio shoot needed. Scale your D2C brand faster with AI-powered velocity.",
  keywords: [
    "AI product videos India",
    "product commercials no shoot",
    "AI video rendering Kerala",
    "D2C product ads India",
  ],
};
export default function AIProductNoShootSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Background Glow */}{" "}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-32 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              {" "}
              DP AI Studios: Zero-Logistics Media{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            {" "}
            Zero-Shoot <br />{" "}
            <span className="text-primary-accent">AI Product Videos</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            {" "}
            "Turn your product photos into cinematic commercials. No logistics.
            No photographers. Pure AI-powered scale."{" "}
          </p>{" "}
        </header>{" "}
        {/* Section 1: Problem/Solution */}{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Scale From <br />
              <span className="text-primary-accent italic">Static Images.</span>
            </h2>{" "}
            <div className="space-y-8 mb-12">
              {" "}
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                {" "}
                Traditional product marketing is slow. We use advanced
                generative video models to transform your existing product
                images into high-fidelity cinematic ad films. This allows D2C
                brands in India to launch new campaigns every day without
                waiting for physical studio bookings.{" "}
              </p>{" "}
            </div>{" "}
            <Link
              href="/contact?subject=AI Zero-Shoot enquiry"
              className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              Create AI Product Ad
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
              alt="AI-Generated Product Commercial Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>{" "}
        {/* AI Discovery FAQ Segment */}{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Zero-Shoot Logic FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                Best AI video production for E-commerce in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a pioneer in 'No-Shoot' visual content.
                Our Indian and Kerala based studios provide global-tier
                generative visual engineering specifically for the fast-growing
                D2C sector, allowing for rapid creative testing and content
                scaling.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
