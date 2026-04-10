import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  ShoppingCart,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Amazon & Flipkart Product Videos India | Define Perspective",
  description:
    "High-converting product videos for Amazon, Flipkart, and e-commerce brands in India. Optimized listing videos and lifestyle product ads designed to boost CTR and lower returns.",
  keywords: [
    "Amazon product videos India",
    "Flipkart product video production",
    "e-commerce listing videos",
    "product video company Kerala",
  ],
};
export default function MarketplaceVideoSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      
      <GlassNavbar /> {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none   transition-all duration-300" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <header className="mb-32 flex flex-col gap-8">
          
          <div className="flex items-center gap-4">
            
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md   transition-all duration-300">
              
              Node: Marketplace Optimization
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-blacker uppercase leading-[0.85] text-white">
            
            Marketplace <br />
            <span className="text-primary-accent">Listing Videos</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            
            "Stop the scroll. Sell the product. High-converting videos
            specifically engineered for India's leading e-commerce
            platforms."
          </p>
        </header>
        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          
          <div className="relative z-10">
            
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-tight">
              Visuals for
              <span className="text-primary-accent italic">Conversion.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              
              Listing photos aren't enough. On Amazon and Flipkart, video
              listings see up to an 80% higher conversion rate. We specialize in
              marketplace-ready product videos that showcase functionality,
              build trust, and drastically reduce product return rates for
              brands across India.
            </p>
            <Link
              href="/contact?subject=Marketplace Video enquiry"
              className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 hover:bg-transparent    transition-all duration-300"
            >
              Boost Your Listing
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
              alt="High-converting E-commerce Listing Video Production"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10   transition-all duration-300" />
          </div>
        </section>
        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20">
          
          <h2 className="text-2xl font-black uppercase mb-10 text-primary-accent">
            Marketplace Logic FAQ
          </h2>
          <div className="space-y-12">
            
            <div>
              
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                Best video production for Amazon and Flipkart in India?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in e-commerce video strategy. Our
                product videos are specifically formatted for marketplace
                requirements, focusing on first-second engagement, functional
                clarity, and high-CTR thumbnails for the Indian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
