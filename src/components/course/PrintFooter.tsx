import React from "react";

export default function PrintFooter() {
  const whatsappMsg = "Hello Define Perspective, I would like to claim the Founder Offer (₹43,000) for the AI Integrated Content Creation & Video Production Professional Program. Please share admission details.";
  const whatsappUrl = `https://wa.me/917012941696?text=${encodeURIComponent(whatsappMsg)}`;
  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(whatsappUrl)}&size=300&margin=2`;

  return (
    <div className="hidden print:flex flex-col items-center justify-center h-screen w-full bg-white text-black p-12 text-center break-before-page">
      <div className="border-[4px] border-black p-16 rounded-xl w-full h-full flex flex-col items-center justify-center relative">
        <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">Admission Contact</h2>
        
        <p className="text-2xl text-gray-600 mb-12 max-w-2xl">
          Scan the QR code below using your phone camera to instantly message our admissions team on WhatsApp.
        </p>

        <div className="bg-white p-4 border-4 border-blue-600 rounded-3xl mb-12 shadow-xl inline-block">
          <img src={qrUrl} alt="WhatsApp QR Code" className="w-64 h-64 object-contain" />
        </div>

        <h3 className="text-3xl font-bold mb-4">Apply for Admission</h3>
        <p className="text-xl text-gray-500 mb-8">+91 70129 41696</p>

        <div className="bg-blue-50 border-2 border-blue-200 py-6 px-12 rounded-2xl w-full max-w-lg">
          <p className="text-lg font-bold text-blue-600 uppercase tracking-widest mb-2">Founder Offer</p>
          <p className="text-4xl font-black mb-2">₹43,000</p>
          <p className="text-sm font-bold text-red-600 uppercase tracking-wider">Limited to First 6 Admissions</p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <p className="text-gray-400 font-bold tracking-widest uppercase">Define Perspective</p>
        </div>
      </div>
    </div>
  );
}
