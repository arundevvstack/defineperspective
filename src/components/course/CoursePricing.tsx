"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Trophy, Clock, Film, Bot, MapPin, Zap } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";

export default function CoursePricing() {
  const [seatsRemaining, setSeatsRemaining] = useState(6);

  // Simulated counter effect for dynamic feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setSeatsRemaining(3); // Drops to 3 to simulate high demand
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = "Hello Define Perspective, I would like to claim the Founder Offer (₹43,000) for the AI Integrated Content Creation & Video Production Professional Program. Please share admission details.";
  const whatsappUrl = `https://wa.me/917012941696?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollFade className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6">
            <Zap className="w-4 h-4 fill-blue-400" />
            🚀 Founder's Launch Offer – Limited Seats
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
            Become a Professional AI Content Creator, Filmmaker & Creative Producer
          </h2>
        </ScrollFade>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Offer Details & High-Converting Badge */}
          <ScrollFade delay={0.1} className="lg:col-span-7 space-y-6">
            
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Trophy className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-zinc-300 mb-2">Exclusive Founder's Scholarship</h3>
                <p className="text-zinc-500 mb-8">Available for the First 6 Admissions Only</p>
                
                <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
                  <div>
                    <p className="text-zinc-500 line-through text-2xl font-medium mb-1">₹110,000</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl md:text-7xl font-bold text-white tracking-tight">₹43,000</span>
                    </div>
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-xl font-bold text-lg mb-2 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    ✅ Save ₹67,000
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {[
                    "Industry-Focused Curriculum",
                    "AI + Live Action Production Training",
                    "Fashion, Commercial & Documentary Production",
                    "Professional Portfolio Development",
                    "Certification Included",
                    "Real Production Workflows"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* High Converting Badge List */}
                <div className="bg-black/50 rounded-2xl p-6 border border-white/5 space-y-4">
                  <div className="flex items-center gap-3 text-sm md:text-base font-medium text-amber-200">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    Founder Offer: ₹43,000 Instead of ₹110,000
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base font-medium text-red-200">
                    <Clock className="w-5 h-5 text-red-400" />
                    Only First 6 Admissions Eligible
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base font-medium text-zinc-300">
                    <Film className="w-5 h-5 text-zinc-400" />
                    Real Production House Training
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base font-medium text-blue-200">
                    <Bot className="w-5 h-5 text-blue-400" />
                    AI + Live Action Workflow
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base font-medium text-zinc-300">
                    <MapPin className="w-5 h-5 text-zinc-400" />
                    Kerala • India • UAE Students Welcome
                  </div>
                </div>
              </div>
            </div>
            
          </ScrollFade>

          {/* Right Column: What's Included & CTA */}
          <ScrollFade delay={0.2} className="lg:col-span-5 space-y-6">
            
            {/* Scarcity Banner */}
            <div className="bg-blue-600 border border-blue-500 rounded-3xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[length:200%_auto] animate-gradient" />
              <div className="relative z-10">
                <p className="text-blue-100 font-semibold mb-2">Limited Founder Seats</p>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                  </span>
                  <p className="text-white text-xl font-bold">Remaining Seats: {seatsRemaining}</p>
                </div>
                
                <h4 className="text-white font-bold text-lg mb-4">Secure Your Admission Before the Offer Closes</h4>
                <p className="text-blue-100 text-sm mb-6 opacity-90 leading-relaxed">
                  The Founder Offer is available only for the first six students joining the AI Integrated Content Creation & Video Production Professional Program.
                </p>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-xl text-lg shadow-xl hover:scale-105 hover:bg-zinc-100 transition-all active:scale-95"
                >
                  🚀 Apply for Admission on WhatsApp
                </a>
                <p className="text-blue-200 text-xs mt-4">Offer Ends When All 6 Seats Are Filled</p>
              </div>
            </div>

            {/* What's Included List */}
            <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">What's Included</h3>
              <ul className="space-y-4 mb-6">
                {[
                  "50-Day Professional Program",
                  "AI Content Creation Training",
                  "Video Production Training",
                  "Commercial Filmmaking",
                  "Fashion Film Production",
                  "Documentary Production",
                  "Editing & Post Production",
                  "Prompt Engineering",
                  "AI Video Generation",
                  "Showreel Development",
                  "Portfolio Website",
                  "Industry Certification"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-zinc-500 font-medium italic">Based on the Define Perspective professional curriculum.</p>
              </div>
            </div>

          </ScrollFade>
        </div>

        {/* SEO Heading Text Block */}
        <ScrollFade delay={0.3} className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-zinc-500 font-semibold mb-4 text-sm tracking-widest uppercase">AI Content Creation & Video Production Course Fee in Kerala</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            For a limited period, Define Perspective is offering an exclusive Founder Scholarship that reduces the program fee from ₹110,000 to ₹43,000 for the first six admissions. Students receive professional training in AI content creation, filmmaking, fashion media, commercial production, editing, and creative business workflows while building an industry-ready portfolio.
          </p>
        </ScrollFade>
      </div>
    </section>
  );
}
