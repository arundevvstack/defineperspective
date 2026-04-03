"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, UtensilsCrossed, HeartPulse, GraduationCap, CarFront, Hotel, ArrowUpRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "real-estate",
    title: "Real Estate & Builders",
    desc: "AI-powered property films and CGI walkthroughs that help builders sell units faster.",
    icon: Building2,
    color: "from-blue-400 to-cyan-500",
    href: "/industries/real-estate"
  },
  {
    id: "e-commerce",
    title: "D2C Brands & E-commerce",
    desc: "Scale your product visuals daily with AI-integrated high-velocity content production.",
    icon: ShoppingCart,
    color: "from-amber-400 to-orange-600",
    href: "/industries/e-commerce"
  },
  {
    id: "restaurants",
    title: "Restaurants & Cafes",
    desc: "Thumb-stopping cinematic food visuals and social media Reels optimized for delivery conversion.",
    icon: UtensilsCrossed,
    color: "from-red-400 to-rose-600",
    href: "/industries/restaurants"
  },
  {
    id: "healthcare",
    title: "Healthcare & Hospitals",
    desc: "Trust-centric patient stories and institutional films optimized for Kerala's premier hospitals.",
    icon: HeartPulse,
    color: "from-emerald-400 to-teal-600",
    href: "/industries/healthcare"
  },
  {
    id: "education",
    title: "Education & EdTech",
    desc: "Scale your learning platform with AI-avatar presenters and engaging digital content modules.",
    icon: GraduationCap,
    color: "from-indigo-400 to-purple-600",
    href: "/industries/education"
  },
  {
    id: "automobile",
    title: "Automobile & Dealerships",
    desc: "Premium vehicle cinematic walkthroughs and performance ads for Kerala's leading dealerships.",
    icon: CarFront,
    color: "from-zinc-400 to-zinc-700",
    href: "/industries/automobile"
  },
  {
    id: "hospitality",
    title: "Resorts & Hospitality",
    desc: "Elevate your property's perception with architectural property films and immersive visuals.",
    icon: Hotel,
    color: "from-cyan-400 to-blue-600",
    href: "/industries/hospitality"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <div className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-14 w-14 rounded-2xl bg-primary-accent flex items-center justify-center text-primary-accent-fg mb-10 shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)]"
          >
             <Cpu size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-widest uppercase mb-12 leading-[0.85]"
          >
            Industries <br /><span className="text-cyan-400 italic">We Serve_</span>
          </motion.h2>
          <p className="text-xl text-zinc-500 font-light max-w-3xl leading-relaxed uppercase tracking-widest">
            We don't create generic videos. We build AI-powered video solutions tailored for high-growth industries across Kerala & India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {industries.map((item, idx) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.05 }}
               onClick={() => window.location.href = item.href}
               className="group relative cursor-pointer"
             >
                <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-br opacity-0 blur-lg transition duration-500 group-hover:opacity-30 group-hover:duration-200" style={{ backgroundImage: `linear-gradient(to bottom right, var(--accent-color), transparent)` }} />
                
                <div className="relative flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/5 p-10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                   <div className={cn(
                     "mb-10 h-14 w-14 rounded-2xl bg-gradient-to-tr flex items-center justify-center text-white shadow-xl transition-all group-hover:scale-110 group-hover:shadow-cyan-400/20",
                     item.color
                   )}>
                      <item.icon size={28} />
                   </div>
                   
                   <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-6 leading-tight group-hover:text-cyan-400 transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-xs text-zinc-500 font-light leading-relaxed uppercase tracking-tighter mb-10">
                      {item.desc}
                   </p>
                   
                   <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8 group-hover:border-white/20 transition-colors">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase group-hover:text-white transition-colors">View Solutions</span>
                      <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                   </div>
                   
                   {/* Background Node Number */}
                   <span className="absolute -right-4 -bottom-6 text-[10rem] font-black text-white/5 pointer-events-none select-none tracking-tighter italic">
                      0{idx + 1}
                   </span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
