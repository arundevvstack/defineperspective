import React from "react";
import { Globe, Mail, Phone, Download, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

export default function PrintFooter() {
  const whatsappMsg = "Hello Define Perspective, I would like to claim the Founder Offer (₹43,000) for the AI Integrated Content Creation & Video Production Professional Program. Please share admission details.";
  const whatsappUrl = `https://wa.me/917012941696?text=${encodeURIComponent(whatsappMsg)}`;
  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(whatsappUrl)}&size=300&margin=2`;

  return (
    <div className="hidden print:flex flex-col items-center justify-between h-screen w-full bg-white text-black p-12 text-center break-before-page">
      <div className="border-[4px] border-black p-16 rounded-xl w-full h-full flex flex-col items-center justify-center relative">
        <h2 className="text-6xl font-black mb-8 uppercase tracking-tight">Final Contact</h2>
        
        <p className="text-3xl text-gray-600 mb-16 max-w-3xl font-medium leading-relaxed">
          Scan the QR code below using your phone camera to instantly message our admissions team on WhatsApp.
        </p>

        <div className="bg-white p-6 border-8 border-black rounded-[3rem] mb-16 shadow-2xl inline-block">
          <img src={qrUrl} alt="WhatsApp QR Code" className="w-80 h-80 object-contain" />
        </div>

        <div className="grid grid-cols-2 gap-x-24 gap-y-12 w-full max-w-4xl text-left mb-16">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white"><Phone size={32} /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Apply for Admission</p>
              <p className="text-3xl font-black">+91 70129 41696</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white"><Mail size={32} /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email Us</p>
              <p className="text-2xl font-black">hello@defineperspective.in</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white"><Globe size={32} /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Website</p>
              <p className="text-2xl font-black text-blue-600">defineperspective.in</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white"><Download size={32} /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Download Portfolio</p>
              <p className="text-2xl font-black text-blue-600">defineperspective.in/portfolio</p>
            </div>
          </div>
        </div>

        <div className="flex gap-12 mt-auto mb-12 border-t-2 border-gray-200 pt-12 w-full justify-center">
          <div className="flex items-center gap-3"><Instagram size={24} className="text-gray-500" /> <span className="text-xl font-bold">@defineperspective</span></div>
          <div className="flex items-center gap-3"><Youtube size={24} className="text-gray-500" /> <span className="text-xl font-bold">Define Perspective</span></div>
          <div className="flex items-center gap-3"><Linkedin size={24} className="text-gray-500" /> <span className="text-xl font-bold">Define Perspective</span></div>
        </div>
      </div>
    </div>
  );
}
