"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, AlertTriangle, Activity, Globe, Terminal, 
  Cpu, Lock, Unlock, Zap, Database, Hash, Map as LucideMap 
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, 
  Tooltip, CartesianGrid, LineChart, Line 
} from "recharts";
// mapboxgl removed — now using PositionStack + SVG map
import { cn } from "@/lib/utils";

// Mock Data for the Charts
const trafficData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i}:00`,
  reqs: Math.floor(Math.random() * 500) + 200,
  threats: Math.floor(Math.random() * 50),
}));

const performanceData = Array.from({ length: 15 }, (_, i) => ({
  time: i,
  cpu: Math.random() * 100,
  mem: Math.random() * 100,
}));

// ── SCREENSHOT-INSPIRED COMPONENTS ──────────────────────────────────────────

// Circular Radar Scanner (top-right of map)
const RadarScanner = () => (
  <div className="absolute top-4 right-4 z-50 w-24 h-24 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#00ff41" strokeWidth="0.8" opacity="0.3"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#00ff41" strokeWidth="0.6" opacity="0.3"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="#00ff41" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="50" cy="50" r="2"  fill="#00ff41" opacity="0.9"/>
      {/* Cross-hairs */}
      <line x1="50" y1="5" x2="50" y2="95" stroke="#00ff41" strokeWidth="0.4" opacity="0.2"/>
      <line x1="5" y1="50" x2="95" y2="50" stroke="#00ff41" strokeWidth="0.4" opacity="0.2"/>
      {/* Rotating sweep */}
      <motion.line
        x1="50" y1="50" x2="50" y2="5"
        stroke="#00ff41" strokeWidth="1.5" opacity="0.8"
        style={{ transformOrigin: "50px 50px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <motion.path
        d="M50,50 L50,5 A45,45 0 0,1 95,50 Z"
        fill="#00ff41"
        opacity="0.05"
        style={{ transformOrigin: "50px 50px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
    </svg>
    <span className="absolute bottom-0 left-0 w-full text-center text-[6px] text-primary-accent font-mono uppercase opacity-60">RADAR_LOCK</span>
  </div>
);

// Audio Waveform Visualizer
const AudioWaveform = () => {
  const [bars, setBars] = useState<number[]>(Array(40).fill(0.2));
  useEffect(() => {
    const iv = setInterval(() => {
      setBars(prev => prev.map(() => 0.1 + Math.random() * 0.9));
    }, 80);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="flex items-center gap-[1px] h-8 w-full">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: h }}
          transition={{ duration: 0.08, ease: "linear" }}
          className="flex-1 bg-primary-accent opacity-70"
          style={{ transformOrigin: "center", minHeight: 1 }}
        />
      ))}
    </div>
  );
};

// Scrolling Number Stream
const ScrollingNumbers = () => {
  const [stream, setStream] = useState<string[]>([]);
  useEffect(() => {
    const iv = setInterval(() => {
      const line = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join("");
      setStream(prev => [...prev.slice(-18), line]);
    }, 120);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="font-mono text-[8px] text-primary-accent/60 overflow-hidden h-full leading-tight select-none tabular-nums">
      {stream.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  );
};

// Cracking Code Progress Bar
const CrackingBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + Math.random() * 4));
    }, 150);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="flex items-center gap-2 px-4">
      <span className="text-[9px] font-mono text-primary-accent/70 uppercase tracking-widest whitespace-nowrap">CRACKING_CODE</span>
      <div className="flex-1 h-1 bg-primary-accent/10 border border-primary-accent/20">
        <motion.div
          className="h-full bg-primary-accent"
          style={{ width: `${Math.min(progress, 100)}%`, boxShadow: "0 0 8px #00ff41" }}
          transition={{ duration: 0.15 }}
        />
      </div>
      <span className="text-[9px] font-mono text-primary-accent">{Math.floor(Math.min(progress,100))}%</span>
    </div>
  );
};
// ────────────────────────────────────────────────────────────────────────────

// Component: Cybersecurity Header
const Header = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 border-b border-primary-accent/30 bg-black flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-primary-accent"
        >
          <Shield size={24} />
        </motion.div>
        <div>
          <h1 className="text-xl font-bolder text-primary-accent">DEFENSE_STATION_CORE</h1>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">NETWORK_MONITORING_ACTIVE</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">SYSTEM_UPTIME</span>
          <span className="text-xs font-mono text-primary-accent">142:52:12:05</span>
        </div>
        <div className="flex flex-col items-end border-l border-white/5 pl-8">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">CURRENT_GMT</span>
          <span className="text-xs font-mono text-white">
            {time ? time.toLocaleTimeString() : "LOADING..."}
          </span>
        </div>
        <div className="flex flex-col items-end border-l border-white/5 pl-8">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">ACCESS_LEVEL</span>
          <span className="text-xs font-mono text-primary-accent">S_LEVEL_GLOBAL</span>
        </div>
      </div>
    </div>
  );
};

// Component: Scrolling Logs
const TerminalLogs = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mockLogs = [
      "INCOMING CONNECTION FROM 192.168.1.58",
      "DECODING PAYLOAD: 7A_4F_01_BB",
      "UNAUTHORIZED ACCESS ATTEMPT: REJECTED",
      "HANDSHAKE PROTOCOL: INITIATED",
      "DATABASE SYNC COMPLETE",
      "FIREWALL BLOCK: IP 45.12.8.99",
      "SYSTEM HEURISTICS: STABLE",
      "TRAFFIC SURGE DETECTED: PORT_8080",
      "SCANNING FOR VULNERABILITIES...",
      "THREAT MITIGATED: SQL_INJECTION_DETECTION",
    ];

    const interval = setInterval(() => {
      const randomLog = mockLogs[Math.floor(Math.random() * mockLogs.length)];
      setLogs(prev => [...prev.slice(-49), `> ${new Date().toLocaleTimeString()} :: ${randomLog}`]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex-1 flex flex-col glass border-r border-primary-accent/10 overflow-hidden">
      <div className="p-3 border-b border-primary-accent/20 flex items-center justify-between bg-black/40">
        <span className="text-[10px] font-mono font-bold text-primary-accent uppercase tracking-widest flex items-center gap-2">
          <Terminal size={14} /> THREAT_LOGS (REALTIME)
        </span>
        <div className="flex gap-1">
          <div className="h-1 w-4 bg-primary-accent/40 animate-pulse" />
          <div className="h-1 w-4 bg-primary-accent/20" />
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 p-4 font-mono text-[10px] leading-relaxed text-primary-accent/80 overflow-y-auto scrollbar-hide space-y-1"
      >
        <AnimatePresence initial={false}>
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hover:bg-primary-accent/10 transition-colors cursor-default"
            >
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Component: Kerala Regional Monitor
const KeralaMiniMap = () => {
    return (
        <div className="mt-8 border border-primary-accent/10 bg-gradient-to-b from-primary-accent/5 to-transparent p-3 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-accent/20 animate-scan" />
            <h3 className="text-[9px] font-bold text-primary-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                <LucideMap size={12} /> REGIONAL_HUBS_KERALA
            </h3>
            <div className="h-48 w-full flex items-center justify-center relative">
                <svg viewBox="0 0 100 200" className="h-full w-auto text-primary-accent stroke-current fill-transparent stroke-[0.5] opacity-50 group-hover:opacity-100 transition-opacity">
                    {/* Stylized Kerala path roughly sketched */}
                    <path d="M40,20 Q45,40 35,60 T40,100 T30,140 T45,180 L55,185 Q65,160 55,120 T60,80 T50,40 Z" />
                    {/* Trivandrum Node */}
                    <circle cx="48" cy="180" r="1.5" className="fill-primary-accent animate-pulse" />
                    <text x="52" y="182" className="text-[4px] fill-primary-accent font-mono">TVM_HQ</text>
                    {/* Kochi Node */}
                    <circle cx="40" cy="120" r="1.5" className="fill-primary-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <text x="44" y="122" className="text-[4px] fill-primary-accent font-mono">COK_NODE</text>
                    {/* Calicut Node */}
                    <circle cx="38" cy="60" r="1.5" className="fill-primary-accent animate-pulse" style={{ animationDelay: '0.8s' }} />
                    <text x="42" y="62" className="text-[4px] fill-primary-accent font-mono">CLT_ZONE</text>
                </svg>
                {/* Floating data on Kerala Map */}
                <div className="absolute top-4 right-2 text-right">
                    <p className="text-[7px] text-zinc-600 uppercase">SYS_LOAD</p>
                    <p className="text-[10px] text-primary-accent font-bold">STABLE</p>
                </div>
            </div>
        </div>
    );
};

// Helper: convert lat/lng to SVG percentage position (equirectangular projection)
const latLngToPercent = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 100,
  y: ((90 - lat) / 180) * 100,
});

type GeoLocation = { city: string; lat: number; lng: number };

// Component: Map Visualizer (PositionStack-powered)
const MapVisualizer = () => {
  const [locations, setLocations] = useState<GeoLocation[]>([]);
  const [activePings, setActivePings] = useState<(GeoLocation & { id: string })[]>([]);
  const [activePaths, setActivePaths] = useState<{ id: string; from: GeoLocation; to: GeoLocation }[]>([]);
  const [search, setSearch] = useState("");

  // Fetch real coords from PositionStack via our API route
  useEffect(() => {
    fetch("/api/geolocate")
      .then(r => r.json())
      .then(d => setLocations(d.locations || []))
      .catch(() => {});
  }, []);

  // Animate pings between real locations
  useEffect(() => {
    if (locations.length === 0) return;
    const interval = setInterval(() => {
      const from = locations[Math.floor(Math.random() * locations.length)];
      const to   = locations[Math.floor(Math.random() * locations.length)];
      const id   = Math.random().toString(36).substr(2, 8);
      setActivePings(prev => [...prev.slice(-8), { ...from, id }]);
      setActivePaths(prev => [...prev.slice(-5), { id: `p_${id}`, from, to }]);
    }, 2000);
    return () => clearInterval(interval);
  }, [locations]);

  return (
    <div className="flex-1 bg-black relative scanlines overflow-hidden border-b border-primary-accent/10">
      {/* Hacker Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none hacker-grid opacity-20" />

      {/* Global Laser Scanner */}
      <div className="laser-scanner opacity-40" />

      {/* Circular Radar Scanner (top-right) */}
      <RadarScanner />

      {/* SVG World Map + Real Location Pings */}
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      >
        {/* Continent outlines – simplified equirectangular paths */}
        <g fill="none" stroke="#00ff41" strokeWidth="0.2" opacity="0.25">
          {/* North America */}
          <path d="M5,8 Q12,5 18,10 T25,15 L22,22 Q18,28 14,30 T8,25 Z" />
          {/* South America */}
          <path d="M18,28 Q22,30 24,35 T20,45 L16,48 Q13,45 14,40 T15,32 Z" />
          {/* Europe */}
          <path d="M42,8 Q47,6 52,9 T55,15 L50,18 Q46,16 43,13 Z" />
          {/* Africa */}
          <path d="M45,18 Q52,18 55,22 T55,35 L50,42 Q45,42 43,36 T42,25 Z" />
          {/* Asia */}
          <path d="M55,8 Q65,5 75,8 T85,14 L82,22 Q75,25 65,22 T55,18 Z" />
          {/* India peninsula */}
          <path d="M65,20 Q68,22 70,28 T66,32 L63,28 Q62,24 63,22 Z" />
          {/* Australia */}
          <path d="M75,32 Q82,30 86,34 T85,42 L78,44 Q73,42 72,38 Z" />
        </g>

        {/* Attack/Transfer Paths between real locations */}
        <AnimatePresence>
          {activePaths.map(({ id, from, to }) => {
            const f = latLngToPercent(from.lat, from.lng);
            const t = latLngToPercent(to.lat, to.lng);
            // Midpoint control for curved arc
            const mx = (f.x + t.x) / 2;
            const my = Math.min(f.y, t.y) - 8;
            return (
              <motion.path
                key={id}
                d={`M ${f.x} ${f.y} Q ${mx} ${my} ${t.x} ${t.y}`}
                fill="none"
                stroke="#00ff41"
                strokeWidth="0.3"
                strokeDasharray="1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            );
          })}
        </AnimatePresence>

        {/* Static city nodes for all fetched locations */}
        {locations.map((loc, i) => {
          if (typeof loc.lat !== "number" || typeof loc.lng !== "number") return null;
          const pos = latLngToPercent(loc.lat, loc.lng);
          return (
            <g key={i}>
              <circle cx={pos.x} cy={pos.y} r="0.4" fill="#00ff41" opacity="0.7" />
              <text x={pos.x + 0.6} y={pos.y + 0.4} fontSize="1.2" fill="#00ff41" opacity="0.5" fontFamily="monospace">
                {(loc.city || "UNKNOWN").split(",")[0].toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Animated pings at real city coordinates */}
        <AnimatePresence>
          {activePings.map((ping) => {
            const pos = latLngToPercent(ping.lat, ping.lng);
            return (
              <motion.g key={ping.id}>
                <motion.circle
                  cx={pos.x} cy={pos.y} r="0.8"
                  fill="#00ff41"
                  initial={{ r: 0.3, opacity: 1 }}
                  animate={{ r: [0.3, 2, 3], opacity: [1, 0.5, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                />
                <circle cx={pos.x} cy={pos.y} r="0.5" fill="#00ff41" opacity="0.9" />
              </motion.g>
            );
          })}
        </AnimatePresence>
      </svg>

      {/* Search HUD Overlay */}
      <div className="absolute top-6 left-6 z-50 flex flex-col gap-4 min-w-[240px]">
          <div className="glass border-primary-accent/40 backdrop-blur-md p-1 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse ml-2" />
              <input 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="bg-transparent border-none text-[10px] text-primary-accent font-mono focus:ring-0 placeholder-primary-accent/30 w-full"
                 placeholder="SEARCH_TARGET_CITY_OR_COORDS..."
              />
          </div>
          <div className="glass border-primary-accent/40 backdrop-blur-md p-3 rounded-none">
              <h3 className="text-[10px] font-mono font-black text-primary-accent mb-2 uppercase tracking-tighter">TRACKED_NODES ({locations.filter(l => typeof l.lat === "number").length})</h3>
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {locations
                  .filter(l => typeof l.lat === "number" && typeof l.lng === "number")
                  .filter(l => !search || (l.city && l.city.toLowerCase().includes(search.toLowerCase())))
                  .map((loc, i) => (
                    <div key={i} className="text-[8px] text-primary-accent/70 font-mono flex justify-between">
                      <span>{(loc.city || "UNKNOWN").split(",")[0]}</span>
                      <span className="text-zinc-600">{loc.lat?.toFixed(2) || "0.00"}, {loc.lng?.toFixed(2) || "0.00"}</span>
                    </div>
                  ))}
              </div>
          </div>
      </div>

      {/* HUD Metrics side (Floating) */}
      <div className="absolute left-4 bottom-1/4 flex flex-col gap-2 z-40 pointer-events-none">
          {[
            { label: "ACTIVE_NODES", val: `${locations.length}` },
            { label: "BITRATE", val: "102.4 MBPS" },
            { label: "LATENCY", val: "12 MS" },
            { label: "UPTIME", val: "99.98%" }
          ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col border-l-2 border-primary-accent pr-4 pl-2 bg-black/40 backdrop-blur-sm p-1"
              >
                  <span className="text-[8px] text-zinc-400 uppercase">{m.label}</span>
                  <span className="text-[12px] text-primary-accent font-black tracking-tighter italic">{m.val}</span>
              </motion.div>
          ))}
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-40 text-right pointer-events-none">
          <div className="flex flex-col gap-1">
              <span className="text-[10px] text-zinc-400 uppercase">SAT_LINK</span>
              <span className="text-primary-accent animate-pulse font-bold">LOCKED</span>
          </div>
          <div className="h-32 w-1 border-r-2 border-primary-accent/20 self-end mr-2" />
          <div className="flex flex-col gap-1">
              <span className="text-[10px] text-zinc-400 uppercase">THREAT</span>
              <span className="text-red-500 font-black italic">OMEGA</span>
          </div>
      </div>

      <motion.div 
        animate={{ opacity: [1, 0.4, 1, 0.8, 1] }} 
        transition={{ repeat: Infinity, duration: 0.1 }}
        className="absolute bottom-6 right-6 p-2 border border-primary-accent text-primary-accent font-mono text-[8px] uppercase tracking-widest hidden md:block z-50"
      >
        POSITIONSTACK_LIVE_API_ACTIVE
      </motion.div>


      {/* HUD corner brackets (screenshot-style) */}
      <div className="absolute inset-4 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-accent/60" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-accent/60" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-accent/60" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-accent/60" />
      </div>

    </div>
  );
};

// Component: AudioWave Console (replaces DecodingConsole)
const DecodingConsole = () => {
  return (
    <div className="flex flex-col bg-[#000d00] border-t border-primary-accent/20" style={{ height: '100px' }}>
        <div className="flex items-center gap-3 px-4 pt-2 border-b border-primary-accent/10">
            <Terminal size={10} className="text-primary-accent" />
            <span className="text-[8px] font-mono text-primary-accent/60 uppercase tracking-widest">AUDIOWAVE_SCANNING_PROCESS</span>
        </div>
        <div className="flex-1 flex items-center px-4 gap-4 overflow-hidden">
            <div className="text-[7px] font-mono text-primary-accent/40 leading-tight shrink-0">
                <div>{`# = (VOID *) __GET_FREE_PAGE(GFP_USER)`}</div>
                <div>{`IF (R)`}</div>
            </div>
            <div className="flex-1 h-8 min-w-0">
                <AudioWaveform />
            </div>
        </div>
    </div>
  );
};



// Component: Firewall Strength Heatmap
const FirewallHeatmap = () => {
  const [grid, setGrid] = useState<number[]>(Array(100).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
        setGrid(prev => prev.map(() => Math.floor(Math.random() * 100)));
    }, 50); // Incredibly fast update (50ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-4 p-4 border border-primary-accent/10 bg-black/40">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold text-primary-accent uppercase tracking-widest flex items-center gap-2">
                <Shield size={16} className="animate-pulse" /> FIREWALL_STRENGTH_GRID
            </h3>
            <span className="text-[10px] text-primary-accent font-mono">CORE_LOCKED: 98.4%</span>
        </div>
        <div className="grid grid-cols-10 gap-[1px]">
            {grid.map((val, i) => (
                <motion.div
                    key={i}
                    animate={{ backgroundColor: val > 80 ? "#ff3e3e" : val > 50 ? "#f97316" : "#00ff41" }}
                    transition={{ duration: 0.1 }}
                    className={cn(
                        "h-2 w-full opacity-60",
                        val > 90 ? "animate-pulse" : ""
                    )}
                />
            ))}
        </div>
        <div className="mt-3 flex justify-between text-[8px] font-mono text-zinc-400 uppercase">
            <span>LOW_LOAD</span>
            <span>CRITICAL_LOAD</span>
        </div>
    </div>
  );
};

// Component: Sidebar Mini Map
const SidebarMiniMap = () => {
    return (
        <div className="mt-8 border border-primary-accent/10 bg-black/40 p-3 relative overflow-hidden group">
            <h3 className="text-[9px] font-bold text-primary-accent/60 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Globe size={12} /> SEC_ZONE_DELTA
            </h3>
            <div className="h-24 w-full relative opacity-40 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 200 100" className="w-full h-full text-primary-accent fill-current">
                    <path d="M30,20 Q50,10 70,25 T110,40 T150,20 T180,35 L180,80 Q150,90 100,75 T30,85 Z" className="opacity-20" />
                    <circle cx="60" cy="40" r="1.5" className="animate-ping" />
                    <circle cx="140" cy="35" r="1.5" className="animate-ping" style={{ animationDelay: '1s' }} />
                    <circle cx="100" cy="65" r="1.5" className="animate-ping" style={{ animationDelay: '0.5s' }} />
                </svg>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-accent/20 to-transparent" />
        </div>
    );
};

// Component: Animated Metrics Ticker
const SidebarAnimatedMetrics = () => {
    const [vals, setVals] = useState({ freq: 42, load: 12, enc: 99 });
    
    useEffect(() => {
        const interval = setInterval(() => {
            setVals({
                freq: Math.floor(Math.random() * 100),
                load: Math.floor(Math.random() * 40),
                enc: 98 + Math.random()
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-4 grid grid-cols-3 gap-2">
            {[
                { label: "FREQ", val: `${vals.freq}Hz` },
                { label: "LOAD", val: `${vals.load}%` },
                { label: "ENC", val: `${vals.enc.toFixed(1)}%` }
            ].map((m, i) => (
                <div key={i} className="flex flex-col border border-primary-accent/5 bg-white/5 p-2">
                    <span className="text-[7px] text-zinc-600 uppercase">{m.label}</span>
                    <span className="text-[9px] text-primary-accent font-bold tabular-nums">{m.val}</span>
                </div>
            ))}
        </div>
    );
};

// Main Page
export default function CybersecurityDashboard() {
  const [isBooted, setIsBooted] = useState(false);

  // Auto-boot effect option (if user doesn't want click-to-start)
  // But requestFullscreen requires user gesture. So we force a click.
  const handleBoot = () => {
    setIsBooted(true);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  if (!isBooted) {
    return (
      <div 
        onClick={handleBoot}
        className="fixed inset-0 z-50 bg-[#000d00] flex flex-col items-center justify-center font-mono text-primary-accent cursor-pointer selection:bg-transparent"
      >
        <div className="laser-scanner opacity-30" />
        <Terminal size={48} className="mb-6 animate-pulse" />
        <h1 className="text-2xl md:text-5xl font-black mb-2 uppercase">System Offline</h1>
        <p className="text-sm md:text-md opacity-60 mb-8 animate-pulse text-center px-4">CONNECTION_STANDBY // CLICK_ANYWHERE_TO_INITIALIZE_FULLSCREEN</p>
        
        <div className="w-64 h-1 border border-primary-accent/30 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-primary-accent" 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="theme-hacker bg-[#000d00] text-white flex flex-col overflow-x-hidden lg:overflow-hidden font-mono selection:bg-primary-accent selection:text-black" style={{ height: '100dvh', background: '#000d00' }}>
      {/* CSS Injection to hide global footer on this page */}
      <style dangerouslySetInnerHTML={{ __html: `
        footer { border: none !important; margin: 0 !important; opacity: 0; pointer-events: none; height: 0 !important; }
        #glass-footer { display: none !important; }
      ` }} />
      
      <Header />

      <div className="h-6 bg-primary-accent/5 border-b border-primary-accent/20 flex items-center overflow-hidden z-40 gap-4">
          <div className="flex items-center gap-4 px-4 bg-primary-accent/20 text-primary-accent text-[9px] font-black italic uppercase tracking-widest whitespace-nowrap h-full border-r border-primary-accent/30">
              <Activity size={10} /> SEARCH_TRENDS_B1
          </div>
          <CrackingBar />
          <div className="flex-1 overflow-hidden relative">
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex items-center gap-10 whitespace-nowrap text-[9px] font-mono text-primary-accent/60 uppercase"
              >
                  {[
                    "AI Video Production India +240%",
                    "Virtual Production Studio Kerala +110%",
                    "Cinematic Brand Films Kochi +85%",
                    "AI CGI & 3D Pipelines +150%",
                    "Define Perspective SEO Rank #1",
                    "Performance Marketing Video Ads +92%",
                    "Generative AI Media Workflows +310%"
                  ].map((trend, i) => (
                      <span key={i} className="flex items-center gap-2">
                          <Hash size={10} className="text-primary-accent" /> {trend}
                      </span>
                  ))}
              </motion.div>
          </div>
      </div>

      <main className="flex-1 flex flex-col xl:flex-row overflow-y-auto xl:overflow-hidden">

        {/* Left Side: Intel & Activity */}
        <aside className="w-full xl:w-80 flex flex-col border-b xl:border-b-0 border-r-0 xl:border-r border-primary-accent/10">
          <TerminalLogs />
          
          <div className="flex-none xl:flex-1 flex flex-col p-4 glass bg-black/20 overflow-y-auto">
            {/* Search Keywords */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Hash size={14} /> SEARCH_KEYWORDS
              </h3>
              <div className="space-y-2">
                  {[
                    { key: "AI Video Production", rank: "#1", trend: "+12%" },
                    { key: "CGI Studios India", rank: "#2", trend: "+5%" },
                    { key: "AI Media Production", rank: "#1", trend: "+20%" },
                    { key: "Define Perspective", rank: "#1", trend: "0%" }
                  ].map((kw, i) => (
                      <div key={i} className="flex justify-between items-center text-[9px] border-b border-primary-accent/5 pb-2">
                          <span className="text-zinc-400 font-mono">{kw.key}</span>
                          <span className="text-primary-accent font-bold">{kw.rank}</span>
                      </div>
                  ))}
              </div>
            </div>

            {/* Competitor Radar */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Globe size={14} /> COMPETITOR_RADAR
              </h3>
              <div className="space-y-2">
                  {[
                    { name: "Studio_X_Rival", status: "ACTIVE", load: "High" },
                    { name: "Alpha_Media_Group", status: "STABLE", load: "Low" },
                    { name: "Cinematic_AI_Lab", status: "OFFLINE", load: "None" }
                  ].map((comp, i) => (
                      <div key={i} className="flex justify-between items-center text-[9px] font-mono">
                          <span className="text-zinc-200">{comp.name}</span>
                          <span className={cn(
                            "px-1 rounded-sm",
                            comp.status === "ACTIVE" ? "bg-primary-accent/20 text-primary-accent" : 
                            comp.status === "OFFLINE" ? "bg-red-500/20 text-red-500" : "bg-zinc-800 text-zinc-400"
                          )}>{comp.status}</span>
                      </div>
                  ))}
              </div>
            </div>

            {/* Live Location Tracking Stats */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> ORIGIN_ANALYSIS
              </h3>
              <div className="space-y-1">
                  {[
                    "IP_102.12.5.1 >> MUMBAI, IN",
                    "IP_45.1.8.99 >> SINGAPORE, SG",
                    "IP_88.102.5.4 >> LONDON, UK"
                  ].map((loc, i) => (
                      <div key={i} className="text-[8px] text-zinc-400 py-1 border-l-2 border-primary-accent/20 pl-2">
                          {loc}
                      </div>
                  ))}
              </div>
            </div>

            {/* Regional Map of Kerala */}
            <KeralaMiniMap />
          </div>
        </aside>

        {/* Center: Map */}
        <section className="flex-none xl:flex-1 h-[60vh] xl:h-auto flex flex-col border-b xl:border-b-0 border-r-0 xl:border-r border-primary-accent/10 relative min-h-[400px]">
          <MapVisualizer />
          <DecodingConsole />
        </section>

        {/* Right Side: Stats & Threats */}
        <aside className="w-full xl:w-96 flex flex-col p-4 glass bg-[#000d00]/80 overflow-y-visible xl:overflow-y-auto border-l-0 xl:border-l border-primary-accent/10 relative">
          {/* Scrolling Number Stream — matches screenshot right panel */}
          <div className="mb-4 border border-primary-accent/10 bg-black/60 p-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-accent/20 animate-scan" />
            <div className="text-[7px] text-primary-accent/30 font-mono uppercase mb-2 tracking-widest">// DATA_STREAM_FEED_9X</div>
            <div className="h-24 overflow-hidden">
              <ScrollingNumbers />
            </div>
          </div>

          {/* Firewall Heatmap */}
          <FirewallHeatmap />

          {/* Network Throughput */}
          <div className="mb-4">
            <h3 className="text-xs font-bold text-primary-accent mb-6 uppercase tracking-widest flex items-center gap-2">
              <Activity size={16} /> NETWORK_THROUGHPUT
            </h3>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="colorReqs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ff41" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00ff41" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="reqs" 
                    stroke="#00ff41" 
                    fillOpacity={1} 
                    fill="url(#colorReqs)" 
                    strokeWidth={2}
                    animationDuration={1500}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="threats" 
                    stroke="#ff3e3e" 
                    fillOpacity={0.1} 
                    fill="#ff3e3e"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Threat Matrix Section */}
          <div className="mb-4 p-4 border border-primary-accent/10 bg-black/40">
            <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
              <AlertTriangle size={16} className="text-yellow-500" /> THREAT_MATRIX_A1
            </h3>
            <div className="space-y-4">
              {[
                { type: "DDoS_ATTACK", risk: "CRITICAL", action: "FIREWALL_MAX" },
                { type: "SQL_INJECTION", risk: "STABLE", action: "SANITIZED" }
              ].map((threat, i) => (
                <div key={i} className="flex flex-col gap-1 border-l-2 border-primary-accent/40 pl-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-white">{threat.type}</span>
                    <span className={cn(
                      "text-[8px] font-black italic",
                      threat.risk === "CRITICAL" ? "text-red-500" : "text-primary-accent"
                    )}>{threat.risk}</span>
                  </div>
                  <span className="text-[8px] text-zinc-400 uppercase">ACTION: {threat.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 border border-primary-accent/20 bg-white/5 flex flex-col gap-1 relative glitch">
                <span className="text-[9px] text-zinc-400 uppercase tracking-widest">REQUESTS</span>
                <span className="text-xl font-black text-white italic">442</span>
            </div>
            <div className="p-3 border border-primary-accent/20 bg-white/5 flex flex-col gap-1 relative glitch">
                <span className="text-[9px] text-zinc-400 uppercase tracking-widest">THREATS</span>
                <span className="text-xl font-black text-red-500 italic">2</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={16} /> CORE_HEURISTICS
            </h3>
            <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                        <XAxis hide dataKey="time" />
                        <YAxis hide domain={[0, 100]} />
                        <Line type="monotone" dataKey="cpu" stroke="#00ff41" dot={false} strokeWidth={2} />
                        <Line type="monotone" dataKey="mem" stroke="#00f5ff" dot={false} strokeWidth={1} strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
          </div>

          {/* Sidebar MiniMap and Animated Metrics (Newly Added) */}
          <SidebarMiniMap />
          <SidebarAnimatedMetrics />

          <div className="mt-8 pt-4 border-t border-primary-accent/10 flex justify-between">
            <div className="flex flex-col gap-1">
                <span className="text-zinc-600 text-[8px] uppercase">IDENTITY_HASH</span>
                <span className="text-[10px] text-primary-accent truncate w-40">0x7AF2_D4E1_BBCA_9912</span>
            </div>
            <div className="flex flex-col items-end gap-1">
                <span className="text-zinc-600 text-[8px] uppercase">SESSION_KEY</span>
                <span className="text-[10px] text-white">ACTIVE_SSL</span>
            </div>
          </div>
        </aside>

      </main>

      {/* Global Bottom HUD */}
      <div className="h-6 bg-primary-accent px-4 flex items-center justify-between text-[8px] font-bold text-black uppercase tracking-[0.2em] z-50">
        <div className="flex gap-8">
            <span>ENCRYPTED_LINK_INITIATED</span>
            <span>DATA_REPLICATION_SYNC_SUCCESS</span>
            <span className="hidden md:inline">SYSTEM_HEURISTICS_99_PERCENT</span>
        </div>
        <div className="flex gap-4">
            <span>HOST: 0.0.0.0</span>
            <span>PORT: 8080</span>
        </div>
      </div>
    </div>
  );
}
