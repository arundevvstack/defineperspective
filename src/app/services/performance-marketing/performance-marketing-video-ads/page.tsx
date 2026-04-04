import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  BarChart3,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Performance Marketing Video Ads India | Best ROAS Video Agency Kerala | Define Perspective",
  description:
    "High-performance video ad creatives designed for conversion. We build ROI-focused ads for D2C brands in India, focusing on low CPA and high ROAS through strategic storytelling.",
  keywords: [
    "performance marketing video ads India",
    "best ROAS video agency Kerala",
    "D2C video ads Kochi",
    "high-converting ad creatives India",
  ],
};
export default function PerformanceAdsSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-transparent border-2 border-primary-accent/5 blur-[180px] rounded-full pointer-events-none hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-transparent border-2 border-primary-accent/10 backdrop-blur-md hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
              {" "}
              Division: Performance Intelligence{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white font-black italic">
            {" "}
            Performance <br />{" "}
            <span className="text-primary-accent font-black">Video Ads_</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Creative is the new targeting. We build data-driven video ads for
            Indian brands that want to dominate the feed."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Scale Your{" "}
              <span className="text-primary-accent italic">ROI Engine.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Most agencies focus on aesthetics. We focus on ROAS. Our
              performance marketing video ads are structured around first-second
              hooks and algorithmic growth psychology. We help D2C and SaaS
              brands in Kerala and across India lower their customer acquisition
              costs by creating creatives that win auctions.{" "}
            </p>{" "}
            <Link
              href="/contact?subject=Performance Ads enquiry"
              className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              {" "}
              Start Scaling Now{" "}
            </Link>{" "}
          </div>{" "}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="Performance Marketing ROI Metrics"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
            />{" "}
            <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/10 hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            ROAS Visibility FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best video ad agency for performance in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in ROI-centric video ads. We
                provide specialized performance media services for national and
                international brands in Kerala and across India, focusing on
                scalable creative testing and lower acquisition costs.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
