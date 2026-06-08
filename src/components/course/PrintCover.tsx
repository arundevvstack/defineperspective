import React from "react";
import Image from "next/image";

export default function PrintCover() {
  return (
    <div className="hidden print:flex flex-col h-screen w-full bg-black text-white text-center break-after-page relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/ai-advantage-cinematic.png" 
          alt="Cinematic Background" 
          fill 
          className="object-cover opacity-60" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-16 w-full">
        <div className="pt-12">
          <h3 className="text-2xl uppercase tracking-[0.4em] font-bold text-gray-300 mb-8">Official Program Brochure</h3>
          
          <div className="w-full flex justify-center mb-12">
             <Image src="/images/main-logo.png" alt="Define Perspective" width={400} height={120} className="object-contain" />
          </div>
          
          <div className="w-24 h-1 bg-red-600 mb-16 mx-auto" />
          
          <h2 className="text-5xl font-black mb-6 max-w-4xl leading-tight uppercase tracking-tight">
            AI Integrated Content Creation & <br />
            <span className="text-red-500">Video Production</span>
          </h2>
          <p className="text-2xl text-gray-300 font-medium uppercase tracking-widest">Professional Program</p>
        </div>
        
        <div className="w-full max-w-3xl mt-auto mb-16 backdrop-blur-md bg-black/40 border border-white/20 p-12 rounded-3xl shadow-2xl">
          <p className="text-2xl font-bold uppercase tracking-widest text-red-500 mb-8">Founder's Launch Offer</p>
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <span className="text-4xl text-gray-400 line-through font-medium tracking-wider">₹110,000</span>
            <span className="text-7xl font-black text-white tracking-tighter">₹43,000</span>
          </div>
          <p className="text-2xl font-bold text-black bg-white py-3 px-8 rounded-full inline-block uppercase tracking-wider mb-4">
            Only First 6 Admissions
          </p>
        </div>
        
        <div className="w-full flex justify-between items-center border-t border-white/20 pt-8 px-8">
          <p className="text-gray-400 font-mono text-sm tracking-widest">DEFINEPERSPECTIVE.IN</p>
          <p className="text-gray-400 font-mono text-sm tracking-widest">KERALA // UAE</p>
        </div>
      </div>
    </div>
  );
}
