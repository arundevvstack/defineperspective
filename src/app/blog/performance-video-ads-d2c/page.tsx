"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, BarChart, Target, Eye } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

export default function BlogPage() {
  const faqs = [
    {
      question: "What are performance video ads for D2C?",
      answer: "Performance video ads focus on driving measurable actions—like sales or signups—rather than just brand awareness. They use psychology, data analysis, and iterative testing to convert viewers into customers."
    },
    {
      question: "How does AI enhance video ad conversion?",
      answer: "AI analyzes high-performing creative variables and automates versioning for different audiences. It enables hyper-personalization by dynamic altering of hooks, benefits, and calls-to-action based on real-time data."
    },
    {
      question: "Why should D2C brands scale with video content?",
      answer: "Video is the most consumed content on social media. For D2C brands, it's the fastest way to build trust, demonstrate product utility, and scale customer acquisition without linear increases in spending."
    }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 lg:mb-40">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black underline">Market Intelligence {" // "} Conversion Node</span>
             <h1 className="text-5xl md:text-8xl font-black uppercaseer mb-10 leading-[0.9]">
               Mastering <span className="text-primary-accent italic">Performance</span> <br />Video Ads for D2C Brands
             </h1>
             <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest">
               "How data-driven creativity and automated scaling are defining the next-gen of D2C growth."
             </p>
             <div className="flex flex-wrap items-center gap-10 text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-10">
                <div className="flex items-center gap-3"><User size={14} className="text-primary-accent" /> Define Labs</div>
                <div className="flex items-center gap-3"><Calendar size={14} className="text-primary-accent" /> April 12, 2024</div>
                <div className="flex items-center gap-3"><Clock size={14} className="text-primary-accent" /> 6 Min Read</div>
                <div className="flex items-center gap-3"><Eye size={14} className="text-primary-accent" /> 3.2K+ Page Visits</div>
                <div className="bg-white/5 px-4 py-1 rounded-full text-zinc-400">Marketing, Performance, AI</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group"
         >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
            <Image 
              src="/images/blog/d2c-ads-hero.png" 
              alt="Performance Ads Hero" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
         </motion.div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-20">
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
            In the modern D2C ecosystem, attention is the new currency, and performance video ads are the most effective way to spend it. The most successful brands no longer rely on single "hero" films; they utilize <strong>iterative creative networks</strong> that combine high-end cinematic execution with rapid data analysis.
          </p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 md:p-16 rounded-[2.5rem] bg-white text-obsidian border-l-[12px] border-primary-accent shadow-2xl relative z-10"
          >
             <blockquote className="text-2xl md:text-3xl font-black leading-tight tracking-tight uppercase italic">
               "Mastering performance video ads involves the intersection of direct-response psychology and AI-accelerated production. By automating the versioning and scaling process, D2C brands can achieve a ROAS (Return on Ad Spend) that legacy creative agencies simply cannot match."
             </blockquote>
          </motion.div>
        </div>

        {/* Content sections */}
        <div className="space-y-32 text-zinc-400 font-light leading-relaxed text-lg pb-32">
          
          <section>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercaseer mb-8 leading-none">
               The Psychology of the "Hook"
            </h2>
            <p className="mb-6">
              The first 3 seconds of your video ad determine its success. AI allows us to analyze thousands of hooks—testing different intros, text overlays, and audio cues—to find the <strong>optimal attention-trigger</strong> for every specific audience segment. 
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercaseer mb-8 leading-none text-primary-accent">
               Iterative Creative Scaling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                  <Target className="text-primary-accent mb-6" size={32} />
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest">Rapid Variations</h4>
                  <p className="text-sm">We generate dozens of versions from a single production shoot, testing color, copy, and music in real time.</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                  <BarChart className="text-primary-accent mb-6" size={32} />
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest">ROAS Optimization</h4>
                  <p className="text-sm">Media spending is dynamically allocated to creators that show the highest conversion efficiency.</p>
               </div>
            </div>
          </section>

          <section className="p-12 md:p-20 rounded-[3rem] bg-primary-accent/10 border border-primary-accent/20">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercaseer mb-8 leading-none">
               The Define Perspective Edge
            </h2>
            <p className="mb-10 text-xl font-medium text-white italic">
               "Performance-focused D2C storytelling isn't just about pretty visuals; it's about engineering Desire, Trust, and Action through proprietary neural content workflows."
            </p>
            <p>
               At Define Perspective, we don't just "make ads"—we build <strong>conversion engines</strong> that leverage AI to scale your brand with surgical precision.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-white/10 pt-32 mb-32">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercaseer mb-20 text-center">
              Market <span className="text-primary-accent italic">Intelligence_</span>
           </h2>
           <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-neutral-900 transition-colors"
                >
                   <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-4">
                      <span className="h-2 w-2 rounded-full bg-primary-accent" /> {faq.question}
                   </h3>
                   <p className="text-zinc-400 font-light leading-relaxed">
                      {faq.answer}
                   </p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* CTA Section */}
        <section className="p-12 md:p-20 rounded-[4rem] bg-obsidian text-white text-center border border-white/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 text-primary-accent opacity-20 pointer-events-none">
              <Zap size={120} />
           </div>

           <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-8 leading-tight">
              Ready to scale your D2C <br /> <span className="text-primary-accent italic underline">Growth Engine?</span>
           </h2>
           <p className="text-xl font-light text-zinc-400 mb-12 uppercase tracking-widest max-w-2xl mx-auto">
              Partner with Define Perspective to create high-impact, performance-driven video campaigns.
           </p>
           
           <Link 
             href="/contact"
             className="inline-flex h-20 px-12 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-[0.2em] text-sm items-center gap-6 shadow-xl transition-all duration-300  hover:text-obsidian"
           >
              <span>Talk to us</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </section>

      </article>

      {/* Decorative Accents */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-primary-accent/20 z-50 pointer-events-none" />
      <div className="fixed top-0 right-0 w-1 h-screen bg-primary-accent/20 z-50 pointer-events-none" />
    </main>
  );
}
