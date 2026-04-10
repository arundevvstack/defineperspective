"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Had a chance to work with the people of Define Perspective and had to stay very creative and humble people. The quality of content is outstanding and appreciable. Looking forward to working with them again.",
    author: "Jensene James",
    role: "Tulsa, OK",
    location: "Global Partner",
    rating: 5
  },
  {
    quote: "Their organized AI-hybrid workflow and timely completion within a smart budget is highly appreciated.",
    author: "Megha Manoj",
    role: "Digital Curator",
    location: "Los Angeles",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col items-center text-center">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-6 block">Global Perspectives {" // "} v2.0</span>
            <h2 className="text-4xl font-black md:text-7xl text-white uppercase">
              Trust in Every Frame
            </h2>
            <div className="mt-8 h-1 w-24 rounded-full bg-transparent border-2 border-primary-accent/20 hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.author}
              
whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="group relative p-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white hover:text-primary-accent transition-all duration-300"
            >
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-transparent border-2 border-primary-accent flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110 hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                 <Quote size={20} />
              </div>

              <div className="mb-10 flex gap-1">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} size={16} className="fill-primary-accent text-primary-accent" />
                 ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-light text-white leading-snug mb-12 tracking-tight">
                 &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-6 mt-auto">
                 <div className="h-12 w-12 rounded-full bg-transparent border-2 border-primary-accent flex items-center justify-center font-black text-black text-sm uppercase hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                 </div>
                 <div className="flex flex-col">
                    <span className="text-lg font-bold text-white uppercase tracking-widest">{testimonial.author}</span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
                       {testimonial.role} — <span className="text-primary-accent">{testimonial.location}</span>
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
