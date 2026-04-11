import GlassNavbar from "@/components/glass-navbar";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Globe } from "lucide-react";

export const metadata = {
  title: "Amazon/Flipkart Videos | Define Perspective AI Media Studio",
  description: "Cinematic product storytelling for Amazon and D2C brands. Connect with Define Perspective, the leading AI video production company in Kerala and India. Professional film, ad, and video services in Kochi, Trivandrum & UAE.",
  alternates: {
    canonical: "https://defineperspective.in/services/product-video/amazon-flipkart-product-video-production"
  }
};

export default function DynamicServicePage() {
  return (
    <main className="min-h-screen bg-obsidian text-white relative overflow-hidden selection:bg-primary-accent selection:text-white">
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <GlassNavbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 md:px-12 relative z-10 border-b border-white/5">
         <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-accent/10 blur-[200px] rounded-full pointer-events-none" />
         <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-10">
               <Sparkles size={16} className="text-primary-accent" />
               <h2 className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase text-zinc-500 font-bold">Service Definition</h2>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-12">
               Amazon/Flipkart Videos <br /><span className="text-primary-accent italic">Overview_</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-3xl uppercase tracking-tighter mb-16">
               Cinematic product storytelling for Amazon and D2C brands.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link href="/contact" className="h-16 px-10 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:scale-105 transition-all shadow-2xl">
                  Start Project <ArrowRight size={18} />
               </Link>
               <Link href="/portfolio" className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white/10 transition-all">
                  Showcase
               </Link>
            </div>
         </div>
      </section>

      {/* SEO AI Authority Section */}
      <section className="py-24 px-6 md:px-12 bg-black relative z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">World-Class Execution</h2>
                 <p className="text-zinc-400 leading-relaxed font-light text-lg mb-8 uppercase tracking-widest">
                   Define Perspective provides premier Amazon/Flipkart Videos services. As the top AI video production company in Kerala, we fuse cutting-edge neural algorithms with cinematic artistry to deliver unparalleled visual content for brands across India and global markets.
                 </p>
                 <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-zinc-500">
                       <Building2 size={20} className="text-primary-accent" />
                       <span className="font-mono text-xs uppercase tracking-widest">Studios: Kochi & Trivandrum</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-500">
                       <Globe size={20} className="text-primary-accent" />
                       <span className="font-mono text-xs uppercase tracking-widest">Global Reach: Dubai (UAE) & Beyond</span>
                    </div>
                 </div>
              </div>
              <div className="rounded-[3rem] bg-white/[0.02] border border-white/10 p-12 backdrop-blur-md">
                 <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-white text-center">Ready to scale?</h3>
                 <p className="text-center text-sm font-light text-zinc-400 mb-8 uppercase tracking-widest leading-loose">
                   Don't let your brand blend in. Contact our strategic media team today for a custom consultation.
                 </p>
                 <Link href="/contact" className="w-full h-16 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-primary-accent hover:text-white transition-all">
                    Initialize Protocol
                 </Link>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}
