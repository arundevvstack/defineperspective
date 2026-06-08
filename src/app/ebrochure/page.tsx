"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Trophy, Zap, Globe, Mail, Phone, Download, MessageCircle, Play, ArrowRight } from "lucide-react";

const Youtube = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 10.15 10.15 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/>
  </svg>
);

const Instagram = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const VideoCard = ({ videoId, title, thumbUrl }: { videoId: string, title: string, thumbUrl: string }) => {
  return (
    <div className="flex flex-col w-full break-inside-avoid border-2 border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-md">
      <div className="relative w-full aspect-video bg-zinc-100 border-b-2 border-zinc-200">
        <img src={thumbUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-xl">
            <Play size={32} fill="currentColor" className="text-white ml-1" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <div className="flex flex-col gap-1 flex-grow overflow-hidden">
          <h4 className="font-black text-lg text-black uppercase tracking-tight truncate">{title}</h4>
          <div className="flex items-center gap-1">
            <Play size={12} fill="currentColor" className="text-red-600" />
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Watch Film</span>
          </div>
          <a href={`https://youtu.be/${videoId}`} className="text-xs font-mono text-blue-600 underline underline-offset-4 font-semibold break-all">
            youtu.be/{videoId}
          </a>
        </div>
      </div>
    </div>
  );
};

export default function EBrochurePage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('print')) {
        // Wait for images to load before printing to ensure they appear in the PDF
        const images = Array.from(document.images);
        Promise.all(images.map(img => {
          if (img.complete) return Promise.resolve(true);
          return new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
          });
        })).then(() => {
          setTimeout(() => window.print(), 500);
        });
      }
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const whatsappUrl = `https://wa.me/917012941696`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappUrl)}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />
      <div className="fixed inset-0 z-[9999] bg-gray-100 overflow-y-auto text-black print:bg-white print:static print:h-auto print:overflow-visible">
        <div className="w-full max-w-[210mm] mx-auto bg-white min-h-screen shadow-2xl print:shadow-none print:w-full print:max-w-none">
        
        {/* Page 1: Cover */}
        <div className="flex flex-col h-[297mm] w-full bg-black text-white text-center relative overflow-hidden break-after-page page-container">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/ai-advantage-cinematic.png" 
              alt="Cinematic Background" 
              className="object-cover opacity-60 w-full h-full absolute inset-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-between h-full p-16 w-full">
            <div className="pt-12">
              <h3 className="text-xl uppercase tracking-[0.4em] font-bold text-gray-300 mb-8">Official Program Brochure</h3>
              <div className="w-full flex justify-center mb-12">
                <img src="/images/main-logo.png" alt="Define Perspective" className="object-contain w-[300px] h-[90px]" />
              </div>
              <div className="w-24 h-1 bg-red-600 mb-12 mx-auto" />
              <h2 className="text-4xl font-black mb-4 max-w-4xl leading-tight uppercase tracking-tight">
                AI Integrated Content Creation & <br />
                <span className="text-red-500">Video Production</span>
              </h2>
              <p className="text-xl text-gray-300 font-medium uppercase tracking-widest">Professional Program</p>
            </div>
            
            <div className="w-full max-w-2xl mt-auto mb-16 backdrop-blur-md bg-black/40 border border-white/20 p-10 rounded-3xl shadow-2xl">
              <p className="text-xl font-bold uppercase tracking-widest text-red-500 mb-6">Founder's Launch Offer</p>
              <div className="flex flex-col items-center justify-center gap-2 mb-6">
                <span className="text-3xl text-gray-400 line-through font-medium tracking-wider">₹110,000</span>
                <span className="text-6xl font-black text-white tracking-tighter">₹43,000</span>
              </div>
              <p className="text-lg font-bold text-black bg-white py-2 px-6 rounded-full inline-block uppercase tracking-wider mb-2">
                Only First 6 Admissions
              </p>
            </div>
            
            <div className="w-full flex justify-between items-center border-t border-white/20 pt-8 px-8">
              <p className="text-gray-400 font-mono text-xs tracking-widest">DEFINEPERSPECTIVE.IN</p>
              <p className="text-gray-400 font-mono text-xs tracking-widest">KERALA // UAE</p>
            </div>
          </div>
        </div>

        {/* Page 2: Why Define Perspective */}
        <div className="flex flex-col min-h-[297mm] w-full bg-white text-black p-16 break-after-page page-container">
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">Why Define Perspective?</h2>
          <div className="w-24 h-2 bg-red-600 mb-8" />
          <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-medium">
            Watch how Define Perspective combines traditional filmmaking, commercial production, fashion media, and AI-powered content creation into a future-ready creative ecosystem.
          </p>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            This video introduces our vision, production capabilities, industry approach, and commitment to building the next generation of creators, filmmakers, and AI content specialists.
          </p>
          <VideoCard 
            videoId="qJwObz6fe-M" 
            title="Why Define Perspective?" 
            thumbUrl="https://img.youtube.com/vi/qJwObz6fe-M/hqdefault.jpg" 
          />
        </div>

        {/* Page 3: Our Productions */}
        <div className="flex flex-col min-h-[297mm] w-full bg-gray-50 text-black p-16 break-after-page page-container">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Commercial & Brand Productions</h2>
          <div className="w-24 h-2 bg-red-600 mb-12" />
          <div className="grid grid-cols-2 gap-8 mb-12">
            <VideoCard videoId="sNp1a5I6WsI" title="Commercial Production 1" thumbUrl="https://img.youtube.com/vi/sNp1a5I6WsI/hqdefault.jpg" />
            <VideoCard videoId="INpn97C16yM" title="Commercial Production 2" thumbUrl="https://img.youtube.com/vi/INpn97C16yM/hqdefault.jpg" />
            <VideoCard videoId="NEqjeiDThcY" title="Commercial Production 3" thumbUrl="https://img.youtube.com/vi/NEqjeiDThcY/hqdefault.jpg" />
            <VideoCard videoId="oP9rsiWbGAE" title="Commercial Production 4" thumbUrl="https://img.youtube.com/vi/oP9rsiWbGAE/hqdefault.jpg" />
          </div>
        </div>

        {/* Page 4: AI & Fashion */}
        <div className="flex flex-col min-h-[297mm] w-full bg-white text-black p-16 break-after-page page-container">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">AI & Fashion Productions</h2>
          <div className="w-24 h-2 bg-red-600 mb-12" />
          
          <h3 className="text-2xl font-bold mb-6">AI Film Production</h3>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <VideoCard videoId="vGijXeVUS74" title="AI Film Production 1" thumbUrl="https://img.youtube.com/vi/vGijXeVUS74/hqdefault.jpg" />
            <VideoCard videoId="ViVvFiF-kBQ" title="AI Advertising 2" thumbUrl="https://img.youtube.com/vi/ViVvFiF-kBQ/hqdefault.jpg" />
          </div>

          <h3 className="text-2xl font-bold mb-6">West Vogue Fashion Films</h3>
          <div className="grid grid-cols-2 gap-8">
            <VideoCard videoId="HtomLPOzkCU" title="Fashion Production 1" thumbUrl="https://img.youtube.com/vi/HtomLPOzkCU/hqdefault.jpg" />
            <VideoCard videoId="-CYvl4ytIFY" title="Fashion Production 2" thumbUrl="https://img.youtube.com/vi/-CYvl4ytIFY/hqdefault.jpg" />
          </div>
        </div>

        {/* Page 5: Workflow Infographic */}
        <div className="flex flex-col min-h-[297mm] w-full bg-zinc-50 text-black p-16 break-after-page page-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Real Production Workflow</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-medium">Learn the exact workflow used by professional production houses, creative agencies, and AI studios.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 1, title: "CLIENT BRIEF", features: ["Brand Goals", "Business Objectives", "Target Audience", "Campaign Requirements"] },
              { id: 2, title: "CREATIVE STRATEGY", features: ["Concept Development", "Creative Direction", "Visual Identity", "Campaign Planning"] },
              { id: 3, title: "RESEARCH & MOODBOARD", features: ["Market Analysis", "References", "Fashion Trends", "AI Inspiration Boards"] },
              { id: 4, title: "SCRIPT & STORY DESIGN", features: ["Storytelling", "Shot Planning", "Storyboard Creation", "Content Architecture"] },
              { id: 5, title: "PRE-PRODUCTION", features: ["Scheduling", "Budgeting", "Location Planning", "Talent Coordination"] },
              { id: 6, title: "LIVE ACTION PRODUCTION", features: ["Camera Operation", "Lighting", "Sound", "Direction", "Production Management"] },
              { id: 7, title: "AI CONTENT CREATION", features: ["Prompt Engineering", "AI Photography", "AI Fashion Models", "AI Video Generation"] },
              { id: 8, title: "POST PRODUCTION", features: ["Editing", "Color Grading", "Motion Graphics", "Sound Design", "Visual Effects"] },
              { id: 9, title: "CLIENT REVIEW", features: ["Feedback", "Optimization", "Revision Management"] },
              { id: 10, title: "PORTFOLIO DEVELOPMENT", features: ["Showreel Creation", "Case Studies", "Personal Branding", "Career Preparation"] },
            ].map((step) => (
              <div key={step.id} className="flex gap-6 items-center bg-white p-4 border-2 border-gray-200 rounded-xl shadow-sm break-inside-avoid">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-xl flex-shrink-0">
                  {step.id}
                </div>
                <div className="flex-grow flex items-center gap-8">
                  <h3 className="font-black text-xl uppercase tracking-tighter min-w-[250px]">{step.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {step.features.map((f, i) => (
                      <span key={i} className="text-sm font-medium text-gray-600 flex items-center gap-1">
                        <ArrowRight size={12} className="text-red-500" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page 6: Curriculum (Part 1) */}
        <div className="flex flex-col min-h-[297mm] w-full bg-white text-black p-16 break-after-page page-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">AI Integrated Creative Production Program</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-medium">Comprehensive modules designed to take you from basics to professional production workflows.</p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "Creative Foundations",
                seoHeading: "Module 1",
                items: ["Storytelling", "Script Writing", "Visual Language", "Creative Research", "Brand Communication", "Production Workflow"]
              },
              {
                title: "Video Production",
                seoHeading: "Module 2",
                items: ["Camera Operations", "Cinematography", "Lighting", "Audio Recording", "Commercial Production", "Documentary Production", "Fashion Production"]
              },
              {
                title: "AI Content Creation",
                seoHeading: "Module 3",
                items: ["Prompt Engineering", "AI Photography", "AI Fashion Models", "AI Advertising", "AI Video Generation", "AI Storytelling", "Hybrid Production"]
              }
            ].map((module, index) => (
              <div key={index} className="p-8 border-4 border-black rounded-3xl bg-white shadow-xl break-inside-avoid relative">
                <div className="absolute top-0 left-0 w-4 h-full bg-black rounded-l-2xl" />
                <h2 className="text-sm font-medium text-gray-500 mb-2 pl-8 uppercase tracking-widest">{module.seoHeading}</h2>
                <h3 className="text-3xl font-black mb-6 pl-8 uppercase tracking-tight">{module.title}</h3>
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8 pl-8">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-black">
                      <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Page 7: Curriculum (Part 2) */}
        <div className="flex flex-col min-h-[297mm] w-full bg-white text-black p-16 break-after-page page-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Curriculum Continued</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-6" />
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "Post Production",
                seoHeading: "Module 4",
                items: ["Editing", "Color Grading", "Motion Graphics", "Sound Design", "Visual Effects", "AI-Assisted Editing"]
              },
              {
                title: "Industry & Business",
                seoHeading: "Module 5",
                items: ["Client Communication", "Budgeting", "Proposal Writing", "Agency Operations", "Freelancing", "Portfolio Development"]
              }
            ].map((module, index) => (
              <div key={index} className="p-8 border-4 border-black rounded-3xl bg-white shadow-xl break-inside-avoid relative">
                <div className="absolute top-0 left-0 w-4 h-full bg-black rounded-l-2xl" />
                <h2 className="text-sm font-medium text-gray-500 mb-2 pl-8 uppercase tracking-widest">{module.seoHeading}</h2>
                <h3 className="text-3xl font-black mb-6 pl-8 uppercase tracking-tight">{module.title}</h3>
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8 pl-8">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-black">
                      <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Page 8: Founder Offer & Capstone */}
        <div className="flex flex-col min-h-[297mm] w-full bg-zinc-50 text-black p-16 break-after-page page-container">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Capstone Projects</h2>
          <div className="w-24 h-2 bg-red-600 mb-8" />
          <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-medium">
            Build an industry-standard portfolio with real-world production projects.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-24">
            {[
              "Commercial Advertisement", "Documentary Film", "Fashion Campaign", 
              "AI Fashion Campaign", "AI Short Film", "Hybrid AI + Live Action Film", 
              "Brand Campaign Presentation", "Professional Showreel", "Portfolio Website"
            ].map((project, idx) => (
              <div key={idx} className="p-6 border-2 border-black rounded-2xl flex items-center gap-4 bg-white font-bold text-lg">
                <Trophy className="w-8 h-8 text-red-600" />
                {project}
              </div>
            ))}
          </div>

          <div className="bg-white border-4 border-black rounded-3xl p-12 shadow-2xl relative overflow-hidden break-inside-avoid mt-auto">
            <h3 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-2">Exclusive Founder's Scholarship</h3>
            <p className="text-black font-black text-2xl mb-8">Available for the First 6 Admissions Only</p>
            <div className="flex items-center gap-8 mb-8">
              <div>
                <p className="text-gray-400 line-through text-3xl font-medium mb-1">₹110,000</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-8xl font-black text-black tracking-tight">₹43,000</span>
                </div>
              </div>
              <div className="bg-red-50 text-red-600 border-2 border-red-600 px-6 py-3 rounded-2xl font-black text-2xl uppercase tracking-widest ml-auto">
                ✅ Save ₹67,000
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t-2 border-gray-200">
              <div className="flex items-center gap-2 font-bold"><CheckCircle className="text-red-600" /> 50-Day Professional Program</div>
              <div className="flex items-center gap-2 font-bold"><CheckCircle className="text-red-600" /> Industry Certification</div>
              <div className="flex items-center gap-2 font-bold"><CheckCircle className="text-red-600" /> Professional Portfolio</div>
              <div className="flex items-center gap-2 font-bold"><CheckCircle className="text-red-600" /> AI + Live Action Training</div>
            </div>
          </div>
        </div>

        {/* Page 9: Final Contact */}
        <div className="flex flex-col items-center justify-between min-h-[297mm] w-full bg-white text-black p-12 text-center break-after-page page-container">
          <div className="border-4 border-black p-16 rounded-xl w-full h-full flex flex-col items-center justify-center relative">
            <div className="flex-grow flex flex-col items-center justify-center w-full">
              <h2 className="text-6xl font-black mb-16 uppercase tracking-tight">Final Contact</h2>
              
              <div className="flex flex-col gap-y-8 w-full max-w-sm mx-auto text-left mb-16">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0"><Phone size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Apply for Admission</p>
                    <p className="text-xl font-black whitespace-nowrap">+91 70129 41696</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0"><Mail size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Email Us</p>
                    <p className="text-xl font-black">defineperspective.in@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0"><Globe size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Website</p>
                    <p className="text-xl font-black text-blue-600">defineperspective.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0"><Download size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Download Portfolio</p>
                    <p className="text-xl font-black text-blue-600 truncate">defineperspective.in/portfolio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-auto border-t-2 border-gray-200 pt-12 w-full justify-center">
              <div className="flex items-center gap-2"><Instagram size={20} className="text-gray-500 flex-shrink-0" /> <span className="text-base font-bold whitespace-nowrap">@defineperspective</span></div>
              <div className="flex items-center gap-2"><Youtube size={20} className="text-gray-500 flex-shrink-0" /> <span className="text-base font-bold whitespace-nowrap">Define Perspective</span></div>
              <div className="flex items-center gap-2"><Linkedin size={20} className="text-gray-500 flex-shrink-0" /> <span className="text-base font-bold whitespace-nowrap">Define Perspective</span></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
}
