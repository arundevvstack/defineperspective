import React from "react";

export default function PrintCover() {
  return (
    <div className="hidden print:flex flex-col items-center justify-center h-screen w-full bg-white text-black p-12 text-center break-after-page">
      <div className="border-[4px] border-black p-16 rounded-xl w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-xl uppercase tracking-[0.3em] font-bold text-gray-500 mb-8">Official Program Brochure</h3>
        
        <h1 className="text-6xl font-black mb-12 tracking-tight uppercase leading-none">
          Define<br />Perspective
        </h1>
        
        <div className="w-24 h-2 bg-blue-600 mb-16" />
        
        <h2 className="text-4xl font-bold mb-16 max-w-4xl leading-tight">
          AI Integrated Content Creation & Video Production Professional Program
        </h2>
        
        <div className="border-t-2 border-b-2 border-gray-200 py-12 px-8 w-full max-w-2xl">
          <p className="text-2xl font-bold uppercase tracking-widest text-blue-600 mb-6">Founder Offer</p>
          <div className="flex items-center justify-center gap-8 mb-6">
            <span className="text-3xl text-gray-400 line-through font-medium">₹110,000</span>
            <span className="text-6xl font-black text-black">₹43,000</span>
          </div>
          <p className="text-xl font-bold text-red-600 bg-red-50 py-2 px-6 rounded-full inline-block">
            Limited to First 6 Admissions
          </p>
        </div>
        
        <div className="mt-auto">
          <p className="text-gray-500 font-medium">Define Perspective Academy • Kerala • India • UAE</p>
        </div>
      </div>
    </div>
  );
}
