"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const editorialItems = [
  { id: 1, type: "text", title: "Cinematic Direction", desc: "Establishing the luxury aesthetic with precise neural prompting for photorealistic lighting, skin textures, and high-end fashion styling." },
  { id: 2, type: "image", src: "/images/portfolio/client-cinematic.jpg", aspect: "aspect-[4/3]" },
  { id: 3, type: "image", src: "/images/portfolio/mag-1.jpg", aspect: "aspect-[3/4]" },
  { id: 4, type: "text", title: "Jewellery Detailing", desc: "Advanced upscaling and targeted neural refinement to ensure diamond clarity and authentic metal reflections." },
  { id: 5, type: "image", src: "/images/portfolio/client-jewellery.jpg", aspect: "aspect-video" },
  { id: 6, type: "image", src: "/images/portfolio/mag-2.jpg", aspect: "aspect-square" },
  { id: 7, type: "image", src: "/images/portfolio/mag-3.jpg", aspect: "aspect-[4/5]" },
  { id: 8, type: "text", title: "Motion Dynamics", desc: "Generative video algorithms mapped to create subtle, elegant motion sequences typical of high-end TVCs." },
  { id: 9, type: "image", src: "/images/portfolio/client-motion.jpg", aspect: "aspect-[16/9]" },
  { id: 10, type: "image", src: "/images/portfolio/mag-4.jpg", aspect: "aspect-[3/4]" },
  { id: 11, type: "text", title: "The Final Render", desc: "Color grading in DaVinci Resolve to match traditional Arri Alexa cinematic profiles, delivering the final premium AI commercial." },
  { id: 12, type: "image", src: "/images/portfolio/client-render.jpg", aspect: "aspect-video" },
  { id: 13, type: "image", src: "/images/portfolio/mag-5.jpg", aspect: "aspect-square" },
];

export default function ProductionBentoGrid() {
  return (
    <section className="relative py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-8">
            The Production <span className="text-primary-accent italic font-serif lowercase tracking-normal">editorial</span>
          </h2>
          <p className="text-zinc-400 font-sans leading-relaxed text-lg max-w-2xl mx-auto">
            A visual diary of our AI production pipeline. Pure, unfiltered generative outputs before final composite and grade.
          </p>
        </motion.div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {editorialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
              className="break-inside-avoid relative"
            >
              {item.type === "image" ? (
                <div className={`relative w-full rounded-xl overflow-hidden group ${item.aspect} bg-zinc-900 border border-white/5`}>
                  <Image 
                    src={item.src!} 
                    alt={`Production Still ${item.id}`} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
              ) : (
                <div className="p-8 md:p-10 bg-zinc-950/50 border border-white/5 rounded-xl flex flex-col justify-center min-h-[250px] backdrop-blur-sm">
                  <div className="mb-4 text-primary-accent font-black text-xs tracking-[0.2em] uppercase">Phase {item.id}</div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
