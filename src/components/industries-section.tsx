"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, UtensilsCrossed, HeartPulse, GraduationCap, Rocket, Hotel, ArrowUpRight, Cpu, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const industries = [
  {
    id: "luxury-brands",
    title: "Luxury Brands",
    desc: "Cinematic AI commercials for high-end fashion, perfumes, and lifestyle icons.",
    icon: Star,
    href: "/industries/luxury"
  },
  {
    id: "fashion-jewellery",
    title: "Fashion & Jewellery",
    desc: "Neural rendering for intricate details and premium brand storytelling.",
    icon: ShoppingBag,
    href: "/industries/fashion"
  },
  {
    id: "technology",
    title: "Technology & SaaS",
    desc: "Product films that visualize the future through AI-integrated storytelling.",
    icon: Cpu,
    href: "/industries/technology"
  },
  {
    id: "real-estate",
    title: "Real Estate & Builders",
    desc: "AI-powered property films and CGI walkthroughs for premium developments.",
    icon: Building2,
    href: "/industries/real-estate"
  },
  {
    id: "hospitality",
    title: "Hospitality & Resorts",
    desc: "Architectural property films and immersive visuals for elite resorts.",
    icon: Hotel,
    href: "/industries/hospitality"
  },
  {
    id: "healthcare",
    title: "Healthcare Systems",
    desc: "Trust-centric institutional films for Kerala's premier medical centers.",
    icon: HeartPulse,
    href: "/industries/healthcare"
  },
  {
    id: "startups",
    title: "High-Growth Startups",
    desc: "Viral AI commercials and product demos designed for rapid scale.",
    icon: Rocket,
    href: "/industries/startups"
  },
  {
    id: "education",
    title: "Education & EdTech",
    desc: "Scale your learning platform with AI presenters and engaging content.",
    icon: GraduationCap,
    href: "/industries/education"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-pad bg-black relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container-max relative z-10">
        <div className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent mb-12 shadow-2xl backdrop-blur-xl"
          >
             <Zap size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-section !text-4xl md:!text-8xl"
          >
            Industries <br /><span className="text-primary-accent">We Serve_</span>
          </motion.h2>
          <p className="body-copy !text-base md:!text-xl max-w-3xl mt-12">
            As a <span className="text-white font-bold uppercase">leading video production company in Kerala</span>, we build AI-powered video solutions tailored for high-growth sectors across India and the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {industries.map((item, idx) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group"
             >
                <Link 
                  href={item.href}
                  className="flex flex-col h-full rounded-[3rem] border border-white/5 bg-white/[0.02] p-10 hover:bg-white/[0.04] hover:border-primary-accent/30 transition-all duration-500 overflow-hidden text-left relative"
                  aria-label={`View solutions for ${item.title}`}
                >
                   <div className="mb-10 h-14 w-14 rounded-2xl bg-primary-accent/5 border border-primary-accent/20 flex items-center justify-center text-primary-accent shadow-lg transition-all group-hover:bg-primary-accent group-hover:text-black">
                      <item.icon size={24} aria-hidden="true" />
                   </div>
                   
                   <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-6 leading-tight group-hover:text-primary-accent transition-colors">
                      {item.title}
                   </h3>
                   <p className="label-mono !text-[11px] !text-zinc-500 !leading-relaxed mb-12">
                      {item.desc}
                   </p>
                   
                   <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase group-hover:text-white transition-colors">View Hub</span>
                      <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-primary-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                   </div>
                   
                   <span className="absolute -right-4 -bottom-6 text-9xl font-black text-white/[0.03] pointer-events-none select-none tracking-tighter group-hover:text-primary-accent/5 transition-colors">
                      0{idx + 1}
                   </span>
                </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
