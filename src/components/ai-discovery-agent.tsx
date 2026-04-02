"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Sparkles, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
};

export default function AIDiscoveryAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [mounted, setMounted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quoteId, setQuoteId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: "welcome",
        role: "ai",
        text: "Welcome to Define Perspective. I am your AI production consultant. How can I help you reach your 2026 production goals today?",
        timestamp: new Date(),
      },
    ]);

    const handleOpen = (e?: any) => {
      setIsOpen(true);
      if (e?.detail) {
        if (typeof e.detail === 'string' && e.detail.includes("Quote:")) {
          // Extract quoteId if passed through detail
          const match = e.detail.match(/DP-\d+/);
          if (match) setQuoteId(match[0]);
        }
        handleSend(`I'm interested in the ${e.detail} package.`);
      }
    };
    window.addEventListener("open-ai-chat", handleOpen);
    return () => window.removeEventListener("open-ai-chat", handleOpen);
  }, []);

  const handleSend = (overrideValue?: string) => {
    const textToSend = overrideValue || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    const currentInput = textToSend.toLowerCase();
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Varied fallbacks to prevent "looping" feel
    const fallbacks = [
      "I'm processing that through our 2026 strategy engine. To give you the best advice, could you specify if you're looking for high-end cinematic quality or rapid AI-driven scale?",
      "That's an interesting perspective. Our hybrid 360° approach usually handles such requirements by mixing human creativity with AI efficiency. Would you like to see how we apply this to brand growth?",
      "To better assist your production goals, could you tell me more about the scale of your project? We have specific workflows for both boutique startups and enterprise-level campaigns.",
      "I've noted your interest. Based on current market trends, most leaders in your space are shifting towards AI-augmented workflows. Shall we explore our 'Scale Packs' or 'Cinematic' division first?"
    ];

    let responseText = fallbacks[Math.floor(Math.random() * fallbacks.length)];

    if (currentInput.includes("video") || currentInput.includes("ai") || currentInput.includes("cgi") || currentInput.includes("automation") || currentInput.includes("tech")) {
      responseText = "Your focus on AI-driven production is strategic. For 2026, we recommend our Generative AI Video pipeline combined with CGI. This can reduce your lead time by 70%. Shall I calculate the potential ROI for your project?";
    } else if (currentInput.includes("photography") || currentInput.includes("brand") || currentInput.includes("cinematic") || currentInput.includes("tvc") || currentInput.includes("commercial") || currentInput.includes("film")) {
      responseText = "Exquisite craftsmanship detected. Our Professional Production division specializes in high-end cinematic brand films and advertisement photography. This is perfect for prestige positioning. Should I connect you with our Creative Director?";
    } else if (currentInput.includes("both") || currentInput.includes("all") || currentInput.includes("retainer") || currentInput.includes("growth") || currentInput.includes("everything") || currentInput.includes("package")) {
      responseText = "The DP 360° Hybrid Retainer is our most advanced solution. It bridges professional human craftsmanship with AI-automated distribution at scale. This is the ultimate competitive advantage for 2026. Would you like to see a sample case study?";
    } else if (currentInput.includes("price") || currentInput.includes("cost") || currentInput.includes("budget") || currentInput.includes("how much") || currentInput.includes("rate")) {
      responseText = "We provide custom, precision-indexed quotes based on your specific project requirements. For 2026, our rates are dynamic to offer maximum ROI across both AI and Cinematic divisions. Shall I generate a custom quote intake for you?";
    } else if (currentInput.includes("who") || currentInput.includes("hello") || currentInput.includes("hi") || currentInput.includes("help") || currentInput.includes("hey")) {
      responseText = "I am the DP Discovery Agent. I bridge the gap between Define Perspective's world-class cinematic craftsmanship and DP AI Studios' next-gen neural video engines. Which production pipeline interests you today?";
    } else if (currentInput.includes("yes") || currentInput.includes("sure") || currentInput.includes("ok") || currentInput.includes("connect")) {
      const isPrestige = messages.some(m => m.text.includes("Prestige") || m.text.includes("Creative Director"));
      const isEfficiency = messages.some(m => m.text.includes("Efficiency") || m.text.includes("spec"));
      
      if (isPrestige) {
        responseText = "Initializing secure uplink to Creative Director... Redirecting you to the priority booking form now. We'll have your project scope review ready in 4 hours.";
        setTimeout(() => { if (typeof window !== 'undefined') window.location.href = `/contact?subject=Priority Production Request: Creative Director consult for ${quoteId || 'Prestige Project'}`; }, 2500);
      } else if (isEfficiency) {
        responseText = "Compiling Technical Spec... Redirecting you to the AI Pipeline Intake. This will initialize your 2026-era automated workflow.";
        setTimeout(() => { if (typeof window !== 'undefined') window.location.href = `/contact?subject=AI Pipeline Intake: Efficiency Roadmap initialization`; }, 2500);
      } else {
        responseText = "Excellent. I'm preparing a customized implementation roadmap for you. While I compile the data, would you prefer to focus on 'AI Efficiency' or 'Cinematic Prestige'?";
      }
    } else if (currentInput.includes("ai efficiency") || currentInput.includes("efficiency")) {
      responseText = "Strategizing for AI Efficiency... Our 2026 pipeline will utilize text-to-video for initial drafts and automated social scaling. This will reduce your content overhead by 60%. Ready to view the technical spec?";
    } else if (currentInput.includes("cinematic prestige") || currentInput.includes("prestige")) {
      responseText = "Allocating resources for Cinematic Prestige... Our human-led production team will craft a bespoke brand identity film using high-end optics and 2026 color science. This is the hallmark of prestige. Should I connect you with our Creative Director?";
    } else if (currentInput.includes("human-led") || currentInput.includes("classic")) {
      responseText = "Excellent choice. Our Classic Human-Led workflow is for brands that prioritize artisanal craftsmanship and physical locations. We'll assign a senior Creative Director to your project. Should we review our high-end brand film portfolio next?";
    } else if (currentInput.includes("ai-powered mix") || currentInput.includes("assisted")) {
      responseText = "The AI-Powered Mix is our most popular 2026 choice. It balances human direction with virtual production speed. I'm calculating your delivery timeline now—it looks like we can ship this in 12 business days. Does that fit your launch window?";
    } else if (currentInput.includes("modern ai-only") || currentInput.includes("full-ai")) {
      responseText = "Going for raw velocity? Our Full-AI workflow is optimized for text-to-master delivery. We use prompt-engineered cinematic models to generate high-fidelity socials in under 24 hours. Would you like to see a sample of an AI-generated TVC?";
    } else if (currentInput.includes("download") || currentInput.includes("pdf") || currentInput.includes("quote")) {
      responseText = `Generating your custom 2026 Production Roadmap PDF... Done. I've archived this quote as ${quoteId || 'DP-2026'}. You can download the full capability deck here once our secure link initializes. Shall I email a copy to your team?`;
    }

    // Simulate AI thinking and typing
    setTimeout(() => {
      const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "ai",
          text: responseText,
          timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-primary-accent text-primary-accent-fg shadow-[0_0_40px_var(--glow)] flex items-center justify-center transition-opacity",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <MessageSquare size={28} />
        <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white text-black text-[10px] font-black flex items-center justify-center shadow-md">
          AI
        </span>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[450px] h-[600px] max-h-[80vh] rounded-3xl bg-[#0F0F0F]/95 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-accent shadow-lg text-primary-accent-fg">
                  <Sparkles size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white uppercase tracking-widest">DP Discovery Agent</span>
                  <span className="text-[10px] text-primary-accent font-mono tracking-widest uppercase flex items-center gap-1.5 translate-y-[-2px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-accent animate-pulse" /> Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-full text-zinc-500 hover:bg-white/10 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar font-sans">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={cn(
                    "flex flex-col gap-2 max-w-[85%]",
                    msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === "user" 
                      ? "bg-primary-accent text-primary-accent-fg font-bold rounded-tr-none" 
                      : "bg-white/5 text-white border border-white/5 rounded-tl-none backdrop-blur-sm"
                  )}>
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest px-1">
                    {msg.role === "ai" ? "DP AGENT" : "CONSULTANT"} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                 <div className="flex flex-col gap-2 mr-auto items-start max-w-[85%]">
                    <div className="p-4 rounded-2xl bg-white/5 text-white rounded-tl-none backdrop-blur-sm flex gap-1.5 h-10 items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-accent animate-bounce [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-accent animate-bounce [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-accent animate-bounce" />
                    </div>
                 </div>
              )}

              {/* Quick Replies */}
              {!isTyping && messages.length > 0 && messages[messages.length-1].role === 'ai' && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {(messages[messages.length-1].text.includes("Efficiency") || messages[messages.length-1].text.includes("Prestige")) ? (
                    ["AI Efficiency", "Cinematic Prestige"].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSend(suggestion)}
                        className="px-4 py-2 rounded-full bg-primary-accent text-primary-accent-fg text-[11px] hover:scale-105 transition-all font-black uppercase tracking-widest shadow-[0_0_15px_var(--glow)]"
                      >
                        {suggestion}
                      </button>
                    ))
                  ) : (
                    ["AI Video Solutions", "Cinematic Brand Films", "Pricing Plans", "Hybrid Retainer"].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSend(suggestion)}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400 hover:bg-primary-accent/10 hover:border-primary-accent/30 hover:text-primary-accent transition-all font-medium"
                      >
                        {suggestion}
                      </button>
                    ))
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/5 border-t border-white/5 flex gap-3">
               <div className="flex-1 relative group">
                  <input 
                    type="text" 
                    placeholder="Describe your production goal..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="w-full h-14 bg-black/40 rounded-2xl px-6 pr-14 text-sm text-white placeholder:text-zinc-600 border border-white/5 focus:outline-none focus:border-primary-accent/50 transition-all font-sans"
                  />
                  <button 
                    onClick={() => handleSend()}
                    className="absolute right-2.5 top-2.5 h-9 w-9 flex items-center justify-center bg-primary-accent text-primary-accent-fg rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-xl"
                  >
                    <Send size={18} />
                  </button>
               </div>
            </div>

            {/* Footer Tag */}
            <div className="px-6 py-3 bg-black text-[9px] font-mono text-zinc-700 text-center tracking-[0.2em] uppercase">
              Powered by Define Perspective SLM-2026 Core
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
