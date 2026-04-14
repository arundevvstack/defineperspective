"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Cpu, Zap, Activity, Bot, MessageCircle, Share2, ExternalLink, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AICharacter() {
  const [isMounted, setIsMounted] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  
  // Mounted check to prevent SSR/Hydration issues
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  const [isMoving, setIsMoving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [characterState, setCharacterState] = useState<"purring" | "prowling" | "zoomies">("purring");
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showSpeech, setShowSpeech] = useState(true);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState("AGENT_DP");
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastSpoken, setLastSpoken] = useState(0);

  // Pupil & Body Movement Logic (Lerp toward mouse)
  const charX = useSpring(0, { damping: 30, stiffness: 200 });
  const charY = useSpring(0, { damping: 30, stiffness: 200 });
  const pupilX = useSpring(0, { damping: 20, stiffness: 300 });
  const pupilY = useSpring(0, { damping: 20, stiffness: 300 });

  useEffect(() => {
    if (!isMounted) return;
    const updatePositions = () => {
      const char = document.getElementById("agent-dp-chassis");
      if (char) {
        const rect = char.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Visual "move towards mouse" logic for the whole body
        const moveDistX = (mousePos.x - centerX) * 0.15;
        const moveDistY = (mousePos.y - centerY) * 0.15;
        charX.set(Math.max(-100, Math.min(100, moveDistX)));
        charY.set(Math.max(-150, Math.min(150, moveDistY)));

        // Pupil specific tracking
        const deltaX = (mousePos.x - centerX) / 15;
        const deltaY = (mousePos.y - centerY) / 15;
        pupilX.set(Math.max(-6, Math.min(6, deltaX)));
        pupilY.set(Math.max(-8, Math.min(8, deltaY)));
      }
    };
    updatePositions();
  }, [mousePos, isMounted, charX, charY, pupilX, pupilY]);

  useEffect(() => {
    if (!isMounted) return;
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  const messages = {
    CONTACT: [
      "Agent DP Online", 
      "DP Cinematic Protocol Active", 
      "Need a production quote?", 
      "WhatsApp: Instant Response",
      "Kochi • Dubai • Trivandrum",
      "Analyzing project vision..."
    ]
  };

  const speakMessage = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis || isSpeaking) return;
    
    // Throttle speaking to avoid annoyance
    const now = Date.now();
    if (now - lastSpoken < 15000) return; 

    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Robotic Female Sound Configuration
    utterance.pitch = 1.65; // Highly robotic
    utterance.rate = 1.1; 
    utterance.volume = 0.45;

    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => 
      (v.name.includes("Zira") || v.name.includes("Samantha") || v.name.includes("Google UK English Female") || v.name.includes("Female"))
    ) || voices[0];
    
    if (targetVoice) utterance.voice = targetVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      setLastSpoken(Date.now());
    };
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      if (isHovered || isClicked) return;
      
      const nextIdx = (currentMessage + 1) % messages.CONTACT.length;
      setCurrentMessage(nextIdx);
      setShowSpeech(true);
      
      speakMessage(messages.CONTACT[nextIdx]);

      setTimeout(() => { if (!isHovered && !isClicked) setShowSpeech(false); }, 5000);
    }, 28000); 
    return () => clearInterval(interval);
  }, [currentMessage, isHovered, isClicked, isMounted]);

  useEffect(() => {
    if (isMoving || isHovered || isClicked) {
      setIsVisible(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    } else {
      hideTimeout.current = setTimeout(() => setIsVisible(false), 5000);
    }
    return () => { if (hideTimeout.current) clearTimeout(hideTimeout.current); };
  }, [isMoving, isHovered, isClicked]);

  useEffect(() => {
    const unsubscribe = smoothVelocity.on("change", (v) => {
      const velocity = Math.abs(v);
      setIsMoving(velocity > 0.001);
      if (isIntro || velocity > 0.1) setCharacterState("zoomies");
      else if (velocity > 0.005) setCharacterState("prowling");
      else setCharacterState("purring");
    });
    return () => unsubscribe();
  }, [smoothVelocity, isIntro]);

  const rotation = useTransform(smoothVelocity, [-0.1, 0.1], [-15, 15]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[300] hidden lg:block overflow-hidden">
      <motion.div
        id="agent-dp-chassis"
        style={{ 
          x: charX, 
          y: charY,
          rotate: rotation,
          position: "absolute",
          right: "4rem",
          top: "60vh"
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
        }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center pointer-events-auto cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => { 
          setIsClicked(!isClicked); 
          setShowSpeech(true); 
          const msg = messages.CONTACT[currentMessage % messages.CONTACT.length]; 
          speakMessage(msg); 
        }}
      >
        <AnimatePresence mode="wait">
          {(showSpeech || isHovered || isClicked) && (
            <motion.div
              key={isClicked ? "menu" : "msg"}
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              className={cn(
                "absolute bottom-full mb-6 px-5 py-4 text-black font-black uppercase tracking-tighter text-center rounded-[1.5rem] shadow-2xl transition-all duration-300 backdrop-blur-xl",
                isClicked ? "w-64 bg-zinc-900/90 border border-primary-accent border-b-8" : "w-48 bg-primary-accent text-[10px]"
              )}
            >
              <div className="relative">
                {isClicked ? (
                   <div className="flex flex-col gap-4 text-left">
                     <div className="flex flex-col gap-2 border-b border-white/10 pb-3">
                       <span className="text-[7px] text-primary-accent tracking-widest opacity-60">AGENT_DP_INTAKE</span>
                       <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-primary-accent py-2.5 rounded-xl text-[10px] text-black font-black transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2">
                         <Zap size={10} strokeWidth={3} /> SCROLL_TO_FORM
                       </button>
                       <a href="https://wa.me/917012941696" target="_blank" className="bg-white/5 border border-primary-accent/30 py-2.5 rounded-xl text-[10px] text-primary-accent transition-all hover:bg-primary-accent hover:text-black text-center flex items-center justify-center gap-2">
                         <MessageCircle size={10} /> WHATSAPP_NOW ⚡
                       </a>
                     </div>
                     <div className="flex flex-col gap-2">
                       <span className="text-[7px] text-primary-accent tracking-widest opacity-60">DP_STUDIO_NODES</span>
                       <div className="flex justify-between items-center bg-black/40 p-3 rounded-2xl">
                         <span className="text-[8px] text-zinc-400 underline font-bold">KOCHI</span>
                         <span className="text-[8px] text-zinc-400 underline font-bold">DUBAI</span>
                         <span className="text-[8px] text-primary-accent animate-pulse font-bold">SYNCED</span>
                       </div>
                     </div>
                   </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    {isSpeaking && <Volume2 size={12} className="animate-bounce" />}
                    <span>{isHovered ? "AGENT_DP_READY" : messages.CONTACT[currentMessage % messages.CONTACT.length]}</span>
                  </div>
                )}
                <div className={cn("absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px]", isClicked ? "border-t-zinc-900/90" : "border-t-primary-accent")} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{
            y: characterState === "purring" ? [0, -8, 0] : characterState === "zoomies" ? [-20, 0] : 0,
            scaleY: isClicked ? [1, 0.4, 1.3, 1] : 1,
            rotate: isClicked ? [0, 720] : 0
          }}
          transition={{ duration: 0.5, repeat: isClicked ? 0 : Infinity }}
          className="relative"
        >
          {/* Character Chassis */}
          <div className={cn(
            "relative w-18 h-14 bg-black border-2 rounded-[1.25rem] flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-500",
            isSpeaking ? "border-primary-accent ring-4 ring-primary-accent/20" : "border-primary-accent/40"
          )}>
            <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-x-0 h-[10px] bg-primary-accent/10" />
            
            {/* Robot Cat Ears */}
            <div className="absolute -top-3 w-full flex justify-between px-2.5">
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-primary-accent" />
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-primary-accent" />
            </div>

            {/* Neural Eyes (Follow Mouse) */}
            <div className="flex gap-3">
              <motion.div animate={{ scaleY: isHovered || isSpeaking ? 1.4 : [1, 1, 0, 1, 1] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }} className="w-3.5 h-5 rounded-full bg-primary-accent flex items-center justify-center overflow-hidden">
                <motion.div style={{ x: pupilX, y: pupilY }} className="w-2 h-4 bg-zinc-900 rounded-full" />
              </motion.div>
              <motion.div animate={{ scaleY: isHovered || isSpeaking ? 1.4 : [1, 1, 0, 1, 1] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1], delay: 0.15 }} className="w-3.5 h-5 rounded-full bg-primary-accent flex items-center justify-center overflow-hidden">
                <motion.div style={{ x: pupilX, y: pupilY }} className="w-2 h-4 bg-zinc-900 rounded-full" />
              </motion.div>
            </div>

            {/* Speaking Bars */}
            {isSpeaking && (
               <div className="absolute bottom-1.5 flex gap-1">
                  <motion.div animate={{ height: [2, 6, 2] }} transition={{ repeat: Infinity, duration: 0.2 }} className="w-1 bg-primary-accent" />
                  <motion.div animate={{ height: [2, 10, 2] }} transition={{ repeat: Infinity, duration: 0.2, delay: 0.1 }} className="w-1 bg-primary-accent" />
                  <motion.div animate={{ height: [2, 6, 2] }} transition={{ repeat: Infinity, duration: 0.2, delay: 0.2 }} className="w-1 bg-primary-accent" />
               </div>
            )}
          </div>
          
          {/* Tail */}
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 1, repeat: Infinity }} className="absolute -right-3 top-1/2 w-5 h-1.5 bg-primary-accent/60 rounded-full origin-left blur-[0.5px]" />
        </motion.div>

        {/* HUD Data Line */}
        <motion.div className="mt-5 px-4 py-2 bg-black/95 border border-primary-accent/30 rounded-full flex items-center gap-2.5 shadow-2xl backdrop-blur-xl">
           <Activity size={10} className={cn("text-primary-accent", isSpeaking ? "animate-spin" : "animate-pulse")} />
           <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">{isSpeaking ? "DP_BIO_OUTPUT" : "AGENT_DP_ONLINE"}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
