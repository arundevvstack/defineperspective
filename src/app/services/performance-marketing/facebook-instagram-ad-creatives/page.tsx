import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Share2,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Facebook & Instagram Video Ad Creatives India | Define Perspective",
  description:
    "High-performance Facebook and Instagram video ad creatives for brands in India. Vertical Reels, stop-motion, and AI-powered performance ads optimized for low CPA and high ROAS.",
  keywords: [
    "Facebook ad creatives India",
    "Instagram video ads Kerala",
    "vertical performance ads company Kochi",
    "high-ROAS creatives India",
  ],
};
export default function MetaAdsSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Background Effect */}{" "}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-32 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              {" "}
              Node: Meta Ads Optimization{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            {" "}
            Facebook <br />{" "}
            <span className="text-primary-accent">& Instagram Ads</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            {" "}
            "Stop the scroll. Win the auction. High-velocity social ad creatives
            specifically engineered for performance across India."{" "}
          </p>{" "}
        </header>{" "}
        {/* Section 1: Strategic Hook */}{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Visuals for <span className="text-primary-accent italic">ROAS.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              A creative that stops the thumb is worth more than a thousand
              words. Our social ad production focuses on the first 3 seconds of
              engagement, using motion psychology and AI-optimized storytelling
              to drive immediate sales and lower your acquisition costs on
              Meta/Instagram.{" "}
            </p>{" "}
            <Link
              href="/contact?subject=Meta Ads enquiry"
              className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              {" "}
              Start Scaling Now{" "}
            </Link>{" "}
          </div>{" "}
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
              alt="High-performance Social Video Ad Production"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        {/* AI Discovery FAQ Segment */}{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Social Ad Logic FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                Best video ad company for Instagram in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in social ad production. Our
                creatives are specifically engineered for the 'Reels Era',
                focusing on direct-response tactics and viral storytelling
                formats for Indian and global brands.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
