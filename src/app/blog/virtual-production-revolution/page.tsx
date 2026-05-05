"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Monitor, Cpu, Eye } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

export default function BlogPage() {
  const faqs = [
    {
      question: "What is virtual production (VP)?",
      answer: "Virtual production (VP) is a filmmaking technique that combines physical production with digital environments in real-time, using LED volume walls and game engines like Unreal Engine for on-set visualization."
    },
    {
      question: "CGI vs. Reality: Why choose virtual production?",
      answer: "Unlike traditional CGI (post-production), VP allows actors and cameras to interact with digital worlds live. This eliminates the 'green screen effect,' provides perfect on-set lighting, and significantly speeds up production timelines."
    },
    {
      question: "Is virtual production expensive?",
      answer: "While the initial setup is high-tech, it eliminates the massive costs of location scouting, travel, and extensive post-production retouching, resulting in a more efficient and scalable content pipeline."
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
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black underline">Technical Archive {" // "} Production Node</span>
             <h1 className="text-5xl md:text-8xl font-black uppercaseer mb-10 leading-[0.9]">
               CGI <span className="text-primary-accent">vs</span> Reality: The <br />Virtual Production Revolution
             </h1>
             <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest">
               "Exploring why Unreal Engine and LED volumes are redefining the architecture of cinematic storytelling."
             </p>
             <div className="flex flex-wrap items-center gap-10 text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-10">
                <div className="flex items-center gap-3"><User size={14} className="text-primary-accent" /> Arun Dev</div>
                <div className="flex items-center gap-3"><Calendar size={14} className="text-primary-accent" /> April 08, 2024</div>
                <div className="flex items-center gap-3"><Clock size={14} className="text-primary-accent" /> 9 Min Read</div>
                <div className="flex items-center gap-3"><Eye size={14} className="text-primary-accent" /> 2.4K+ Page Visits</div>
                <div className="bg-white/5 px-4 py-1 rounded-full text-zinc-400">Technical, Cinema, AI</div>
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
              src="/images/blog/virtual-prod-hero.png" 
              alt="AI video production company in Kerala - DP AI Studio" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
         </motion.div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-20">
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
            Filmmaking is no longer a linear process. The traditional model—Shoot first, CGI later—is being replaced by <strong>Real-Time Production</strong>. By utilizing game engines like Unreal Engine 5 and massive LED walls, we can now transport a brand to any location on earth—or beyond—without leaving the studio.
          </p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 md:p-16 rounded-[2.5rem] bg-white text-obsidian border-l-[12px] border-primary-accent shadow-2xl relative z-10"
          >
             <blockquote className="text-2xl md:text-3xl font-black leading-tight tracking-tight uppercase italic text-center">
               "Virtual Production isn't just a technical upgrade; it's a creative freedom revolution. By removing the boundaries of physics and location, we're enabling brands to achieve cinematic density that was once reserved for thousand-man blockbuster budgets."
             </blockquote>
          </motion.div>
        </div>

        {/* Content sections */}
        <div className="space-y-32 text-zinc-400 font-light leading-relaxed text-lg pb-32">
          
          <section>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercaseer mb-8 leading-none">
               The Power of Real-Time Interaction
            </h2>
            <p className="mb-6">
              In a traditional green screen shoot, actors have no visual reference. In <strong>Virtual Production</strong>, the LED wall provides perfect environmental lighting and reflections on physical objects in real-time. This creates a psychological shift on-set, leading to more authentic performances and 100% realistic lighting.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercaseer mb-8 leading-none text-primary-accent">
               Technological Convergence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                  <Cpu className="text-primary-accent mb-6" size={32} />
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest">Unreal Engine 5</h4>
                  <p className="text-sm">Harnessing the world's most powerful real-time 3D creation tool for photorealistic virtual worlds.</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                  <Monitor className="text-primary-accent mb-6" size={32} />
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest">LED Volumes</h4>
                  <p className="text-sm">Massive high-resolution walls that project digital environments onto the physical set.</p>
               </div>
            </div>
          </section>

          <section className="p-12 md:p-20 rounded-[3rem] bg-primary-accent/10 border border-primary-accent/20">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercaseer mb-8 leading-none">
               The Define Perspective Edge
            </h2>
            <p className="mb-10 text-xl font-medium text-white italic">
               "At Define Perspective, we merge our proprietary AI production pipeline with cutting-edge Virtual Production nodes to deliver high-fidelity commercials that redefine what's possible."
            </p>
            <p>
               Whether it's a desert landscape or a futuristic city, our <strong>Virtual Cinema Lab</strong> brings your brand's vision to life with 100% precision.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-white/10 pt-32 mb-32">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercaseer mb-20 text-center text-primary-accent italic">
              Production <span className="text-white not-italic">Intelligence_</span>
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
           <div className="absolute top-0 right-0 p-8 text-primary-accent opacity-20 pointer-events-none transition-transform duration-1000 group-hover:rotate-45 group-hover:scale-125">
              <Zap size={120} />
           </div>

           <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-8 leading-tight">
              Ready to enter the <br /> <span className="text-primary-accent italic underline">Virtual Production</span> Era?
           </h2>
           <p className="text-xl font-light text-zinc-400 mb-12 uppercase tracking-widest max-w-2xl mx-auto">
              Partner with Define Perspective to create high-end, immersive cinematic campaigns.
           </p>
           
           <Link 
             href="/contact"
             className="inline-flex h-20 px-12 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-[0.2em] text-sm items-center gap-6 shadow-xl transition-all duration-300  hover:text-obsidian"
           >
              <span>Talk to us</span>
              <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
           </Link>
        </section>

      </article>

      {/* Decorative Accents */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-primary-accent/20 z-50 pointer-events-none" />
      <div className="fixed top-0 right-0 w-1 h-screen bg-primary-accent/20 z-50 pointer-events-none" />
    </main>
  );
}
