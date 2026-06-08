"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Download } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";

export default function BrochureSection() {
  const whatsappBrochureMsg = "Hello Define Perspective, I would like to receive the AI Integrated Content Creation & Video Production Program eBrochure.";
  const whatsappBrochureUrl = `https://wa.me/917012941696?text=${encodeURIComponent(whatsappBrochureMsg)}`;
  
  const whatsappAdmissionMsg = "Hello Define Perspective, I am interested in the AI Integrated Content Creation & Video Production Professional Program. Please share admission details.";
  const whatsappAdmissionUrl = `https://wa.me/917012941696?text=${encodeURIComponent(whatsappAdmissionMsg)}`;

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/5 print:hidden">
      {/* Background gradient for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Text and CTAs */}
          <ScrollFade className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Want the Complete Course Brochure?
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                Get the complete program guide instantly on WhatsApp. The brochure includes everything you need to know before joining.
              </p>
            </div>

            <div className="bg-black/40 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Inside the Official eBrochure:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Complete 50-Day Curriculum",
                  "Course Modules",
                  "Career Opportunities",
                  "AI & Live Action Production",
                  "Founder Offer Details",
                  "Portfolio Projects",
                  "Certification Information",
                  "Admission Process"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => window.open('/ebrochure?print=true', '_blank')}
                className="flex-1 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                📘 Download eBrochure (PDF)
              </button>
              <a 
                href={whatsappBrochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.02]"
              >
                💬 Get eBrochure on WhatsApp
              </a>
            </div>
            <p className="text-sm text-zinc-500 text-center sm:text-left">One Click. Delivered Instantly on WhatsApp.</p>
          </ScrollFade>

          {/* 3D Brochure Mockup */}
          <ScrollFade delay={0.2} className="relative order-1 lg:order-2 perspective-[2000px] flex justify-center items-center h-[500px] lg:h-auto">
            <motion.div 
              className="relative w-[320px] h-[450px] cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ rotateY: -15, rotateX: 5 }}
              whileHover={{ rotateY: -5, rotateX: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              
              {/* Spine shadow for depth */}
              <div className="absolute -left-6 top-4 bottom-4 w-12 bg-black/50 blur-xl -z-20 transform -translate-z-12" />

              {/* Brochure Cover (Front) */}
              <div 
                className="absolute inset-0 bg-zinc-950 border border-white/20 rounded-r-xl shadow-2xl flex flex-col justify-between overflow-hidden origin-left transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-y-12"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glossy Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
                
                {/* Book Spine Edge effect */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/20 to-transparent z-10" />

                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="mb-auto">
                    <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase mb-4">Official Program Guide</p>
                    <h3 className="text-3xl font-bold text-white leading-tight tracking-tight mb-2">
                      Define<br />Perspective
                    </h3>
                    <div className="w-12 h-1 bg-blue-600 mb-8" />
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "AI Content Creation",
                      "Video Production",
                      "Fashion Media",
                      "Commercial Filmmaking",
                      "AI Film Production"
                    ].map((topic, i) => (
                      <p key={i} className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{topic}</p>
                    ))}
                  </div>

                  <div className="flex justify-between items-end mt-auto">
                    <p className="text-xs text-zinc-600">2026 Edition</p>
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Cover Background Graphic */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl -z-10 rounded-full" />
              </div>

              {/* Pages (Behind Cover) */}
              <div 
                className="absolute inset-y-1 right-[-4px] left-2 bg-white rounded-r-lg -z-10 shadow-[2px_0_5px_rgba(0,0,0,0.5)] transform translate-z-[-2px]" 
              />
              <div 
                className="absolute inset-y-2 right-[-8px] left-2 bg-zinc-200 rounded-r-lg -z-10 shadow-[2px_0_5px_rgba(0,0,0,0.5)] transform translate-z-[-4px]" 
              />
              <div 
                className="absolute inset-y-3 right-[-12px] left-2 bg-zinc-300 rounded-r-lg -z-10 shadow-[2px_0_5px_rgba(0,0,0,0.5)] transform translate-z-[-6px]" 
              />
              
              {/* Back Cover */}
              <div 
                className="absolute inset-0 bg-zinc-900 border border-white/10 rounded-r-xl -z-20 transform translate-z-[-8px]" 
              />

            </motion.div>
          </ScrollFade>

        </div>
      </div>
    </section>
  );
}
