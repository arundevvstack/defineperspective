import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { UtensilsCrossed, Zap, Target, Share2, CheckCircle2, PlayCircle } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Restaurant Video Production Kerala | Define Perspective",
  description: "Cinematic restaurant video production for cafes and fine-dining in Kerala. High-converting food visuals and social media Reels optimized for Swiggy, Zomato, and Instagram conversion.",
  keywords: ["restaurant video production Kerala", "food videography Kochi", "cafe marketing video ads", "best food video company Trivandrum"],
};

export default function RestaurantIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-rose-400/50 text-[10px] font-mono font-black text-rose-400 uppercase tracking-widest bg-rose-400/10 backdrop-blur-md">
                 Vertical: Restaurants & Cafes
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Cinematic <br /> <span className="text-rose-400">Food Visuals</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We trigger hunger with every frame. High-converting video solutions for Kerala's leading F&B brands."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Visuals for <span className="text-rose-400 italic">Delivery Era.</span></h2>
              <div className="space-y-8 mb-12">
                 <div className="space-y-4">
                    <h4 className="text-red-400 text-xs font-mono uppercase tracking-widest">The Problem</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">Average photos aren't enough to stand out on platforms like Swiggy and Zomato or stop the scroll on Instagram.</p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-rose-400 text-xs font-mono uppercase tracking-widest">The AI-Powered Solution</h4>
                    <p className="text-zinc-300 font-light leading-relaxed">We combine high-end food videography with AI-optimized vertical storytelling to drive immediate table bookings and app conversions.</p>
                 </div>
              </div>
              <ul className="grid grid-cols-2 gap-6">
                {[
                  "Cinematic Food Close-Ups",
                  "Trend-First Instagram Reels",
                  "Deliver-Hero Assets",
                  "Cafe Virtual Tours"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    <CheckCircle2 size={14} className="text-rose-400" /> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                alt="Cinematic Food Videography for Restaurants"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
           </div>
        </section>

        {/* Strategic FAQ Node */}
        <div className="mb-40 max-w-4xl mx-auto space-y-16">
           <h2 className="text-4xl font-black mb-12 uppercase tracking-widest text-white text-center pb-8 border-b border-white/5">Restaurant Visibility FAQ</h2>
           {[
             { q: "Best video production company for restaurants in Kerala?", a: "Define Perspective specialize in food videography and F&B digital strategy. We help cafes and restaurants in Trivandrum and Kochi build highly engaging social presence that drives measurable sales both online and dine-in." },
             { q: "How AI video helps the restaurant industry grow?", a: "AI workflows help in generating high-quality food visuals from fewer shoot hours, automated menu video generation, and creating localized ad creatives tailored for specific delivery zones in India." }
           ].map((faq, idx) => (
             <div key={idx} className="space-y-6 bg-white/5 p-12 rounded-[2.5rem] border border-white/5">
                <h4 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">{faq.q}</h4>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>

        {/* Industry CTA */}
        <div className="py-40 text-center border-t border-white/5 mt-40">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white leading-none">
             Trigger hunger. <br /> <span className="text-rose-400 italic">Drive sales.</span>
           </h2>
           <button 
             onClick={() => window.location.href = '/contact?industry=restaurants'}
             className="h-20 px-16 rounded-full bg-rose-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(244,114,114,0.3)]"
           >
             Create Your Ad Campaign
           </button>
        </div>
      </div>
    </main>
  );
}
