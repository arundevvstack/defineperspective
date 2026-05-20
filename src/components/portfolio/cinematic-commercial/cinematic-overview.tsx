"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const overviewData = [
  { label: "Client Category", value: "Premium Fashion & Lifestyle" },
  { label: "Production Type", value: "Generative AI Filmmaking" },
  { label: "Creative Focus", value: "Cinematic AI Storytelling" },
  { label: "Target Markets", value: "India & Global Premium Segments" },
];

const technologies = [
  "Advanced Neural Rendering",
  "Midjourney v6 Alpha",
  "Runway Gen-3 Alpha",
  "Luma Dream Machine",
  "DaVinci Resolve Studio",
];

export default function CinematicOverview() {
  return (
    <section className="relative py-24 px-6 border-t border-white/5 bg-[#050505]">
      <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Narrative Overview */}
        <div className="lg:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              The Creative <span className="text-red-500 italic">Challenge_</span>
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-sans leading-relaxed space-y-6">
              <p>
                As the leading <strong>AI video production company in India</strong>, DP AI Studios was tasked with pushing the absolute boundaries of emotional storytelling and visual ambition. The goal was to create a visceral, premium AI brand film that felt undeniably human.
              </p>
              <p>
                The <em>cinematic complexity</em> required for this project was immense. From underwater physics to heavy atmospheric red lighting and intricate macro smoke simulations, traditional production would demand specialized tanks, massive lighting rigs, and dangerous stunt coordination.
              </p>
              <p>
                Through advanced <strong>AI commercial production</strong> pipelines, we bypassed these physical constraints. Our generative filmmaking approach allowed us to achieve breathtaking <em>AI-generated realism</em> and profound emotional storytelling at a speed and production scalability previously impossible in the high-end ad film space.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Project Data */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-4">
              Production Details
            </h3>
            <ul className="space-y-4">
              {overviewData.map((item, i) => (
                <li key={i} className="flex flex-col space-y-1">
                  <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">{item.label}</span>
                  <span className="text-sm text-zinc-200 font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-4">
              AI Tech Stack
            </h3>
            <ul className="space-y-3">
              {technologies.map((tech, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="text-red-500" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
