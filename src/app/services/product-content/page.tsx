import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { ShoppingCart, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Product & E-commerce Content India | Best Product Photography Kerala | Define Perspective",
  description: "High-end product photography and e-commerce content for brands across India. Specialized in Amazon/Flipkart listings, luxury product videos, and cinematic product visuals.",
  keywords: ["product photography India", "best product photographer Kerala", "e-commerce video production Kochi", "product content company India"],
};

const subServices = [
  { 
    title: "Marketplace Listing Videos", 
    href: "/services/product-content/amazon-flipkart-product-videos",
    desc: "Optimized product videos for Amazon and Flipkart that drive CTR and conversion."
  },
  { 
    title: "Product Demo Videos", 
    href: "/services/product-content/product-demo-videos",
    desc: "Functional and cinematic demonstrations of tech products, SaaS, and hardware."
  },
  { 
    title: "Product Photography", 
    href: "/services/product-content/e-commerce-product-photography",
    desc: "High-impact, cinematic product photography for catalogs, editorials, and web stores."
  }
];

export default function ProductContentLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-green-400/50 text-[10px] font-mono font-black text-green-400 uppercase tracking-widest bg-green-400/10 backdrop-blur-md">
                 Division: Marketplace Optimization
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white font-black italic">
             Product <br /> <span className="text-green-400 font-black underline decoration-green-400/30">Content_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "First-second engagement. High-velocity visual assets built specifically for the thriving Indian D2C sector."
           </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {subServices.map((service, idx) => (
             <div 
               key={service.title} 
               onClick={() => window.location.href = service.href}
               className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-green-400/30 transition-all flex flex-col gap-8"
             >
                <div className="h-14 w-14 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                   <ShoppingCart size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-white transition-colors">
                   View Node <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
             </div>
           ))}
        </div>

        {/* Strategic Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
                alt="Product Content Studio Indian"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-400/10" />
           </div>
           <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">The Science Of <br /><span className="text-green-400 italic">Thumb-Stop.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                Most e-commerce photos are static. We build high-impact content designed to stop the scroll. By integrating advanced lighting kits, macro cinematography, and AI grading, your product will stand out on any global or Indian marketplace from Amazon to your own D2C storefront.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?service=product-content'}
                className="h-20 px-12 rounded-full bg-green-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                Initalize Product Shoot
              </button>
           </div>
        </section>
      </div>
    </main>
  );
}
