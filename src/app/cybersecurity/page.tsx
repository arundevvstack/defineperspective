"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, AlertTriangle, Activity, Globe, Terminal, 
  Cpu, Lock, Unlock, Zap, Database, Hash, Map as LucideMap 
} from "lucide-react";
// recharts imports removed due to compatibility issues in dev
// mapboxgl removed — now using PositionStack + SVG map
import { cn } from "@/lib/utils";

// Mock Data for the Charts
// Real Industry Competitors for AI Video Production (India/Global)
const competitors = [
  { name: "Rephrase.ai", market: "Personalized AI Video", rank: "#1 Global", status: "STABLE" },
  { name: "Gan.ai", market: "Video Personalization", rank: "#2 India", status: "ACTIVE" },
  { name: "Synthesia", market: "AI Avatars", rank: "#1 Enterprise", status: "STABLE" },
  { name: "Stark Communications", market: "Kerala Creative Agency", rank: "#1 Kerala", status: "ACTIVE" },
  { name: "Maitri Advertising", market: "South India Media", rank: "#2 Kerala", status: "ACTIVE" }
];

const trafficData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  reqs: 2100 + Math.floor(Math.random() * 850),
  threats: 12 + Math.floor(Math.random() * 45),
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
    <span className="absolute bottom-0 left-0 w-full text-center text-[6px] text-primary-accent font-mono uppercase opacity-60">SCANNING_ACTIVE</span>
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
      <span className="text-[9px] font-mono text-primary-accent/70 uppercase tracking-widest whitespace-nowrap">ANALYZING_TRAFFIC</span>
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
const Header = ({ userData }: { userData?: any }) => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-auto md:h-16 border-b border-primary-accent/30 bg-black flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 md:py-0 z-50 gap-4 md:gap-0">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-primary-accent shrink-0"
        >
          <Shield size={20} />
        </motion.div>
        <div className="overflow-hidden">
          <h1 className="text-lg md:text-xl font-black text-primary-accent truncate tracking-tighter">SYSTEM_SECURITY_CONSOLE_V6</h1>
          <p className="text-[8px] md:text-[9px] font-mono text-red-500 uppercase tracking-[0.3em] truncate opacity-80">VISITOR_IP: {userData?.query || "SCANNING..."} // {userData?.city || "LOCATING..."}</p>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
        <div className="flex flex-col items-start md:items-end">
          <span className="text-[8px] md:text-[10px] font-mono text-red-500 uppercase tracking-widest leading-none">SYSTEM_LOAD</span>
          <span className="text-[10px] md:text-xs font-mono text-primary-accent font-bold">OPTIMIZED_HIGH</span>
        </div>
        <div className="flex flex-col items-start md:items-end border-l border-white/5 pl-4 md:pl-8">
          <span className="text-[8px] md:text-[10px] font-mono text-red-500 uppercase tracking-widest leading-none">LAST_SYNC</span>
          <span className="text-[10px] md:text-xs font-mono text-white whitespace-nowrap">
            {time ? time.toLocaleTimeString() : "LOADING..."}
          </span>
        </div>
        <div className="hidden sm:flex flex-col items-end border-l border-white/5 pl-8">
          <span className="text-[8px] md:text-[10px] font-mono text-red-500 uppercase tracking-widest leading-none">PROVIDER</span>
          <span className="text-[10px] md:text-xs font-mono text-primary-accent truncate max-w-[100px]">{userData?.isp || "CLOUDFLARE_NETWORK"}</span>
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
      "VISITOR DETECTED: CACHE HIT (CDN)",
      "SEO INDEX STATUS: VERIFIED",
      "MOBILE RESPONSIVENESS TEST: PASS",
      "GEO-TARGETING KERALA: ACTIVE",
      "DATABASE SYNC: 100% SUCCESS",
      "TRAFFIC ORIGIN: SEARCH_QUERY_AI_VIDEO",
      "LATENCY OPTIMIZED: 22ms",
      "RENDER SPEED: 0.4s",
      "SSL ENCRYPTION: ACTIVE (TLS 1.3)",
      "SEO AUTHORITY: DOMAIN_POWER_UP",
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
          <Terminal size={14} /> LIVE_TRAFFIC_ACTIVITY
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
            <h3 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <LucideMap size={12} /> SOUTH_INDIA_SERVICE_HUBS
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

type GeoLocation = { city: string; lat: number; lng: number; region?: string };

// Component: Map Visualizer (MapLibre-powered High Performance GL)
const MapVisualizer = () => {
  const [locations, setLocations] = useState<GeoLocation[]>([]);
  const [search, setSearch] = useState("");
  const [alerts, setAlerts] = useState<{ id: string; city: string; ip: string; lat: number; lng: number }[]>([]);
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Fetch real coords from PositionStack via our API route
  useEffect(() => {
    fetch("/api/geolocate")
      .then(r => r.json())
      .then(d => setLocations(d.locations || []))
      .catch(() => {});
  }, []);

  // Initialize MapLibre
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    // Dynamically import MapLibre to avoid SSR issues
    const initMap = async () => {
      // Ensure CSS is loaded before map init
      if (!document.getElementById("maplibre-css-fix")) {
        const link = document.createElement("link");
        link.id = "maplibre-css-fix";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/maplibre-gl@3.3.1/dist/maplibre-gl.css";
        document.head.appendChild(link);
      }

      const module = await import('maplibre-gl');
      const maplibregl = module.default || module;

      if (mapRef.current || !mapContainerRef.current) return;
      
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
        center: [0, 20],
        zoom: 1.5,
        attributionControl: false
      });

      map.on('load', () => {
        mapRef.current = map;
        
        // Add Standard Navigation Controls
        map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'bottom-right');
        map.addControl(new maplibregl.FullscreenControl(), 'top-right');
        
        // Add Scale Control
        map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');
      });
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Tactical City Search Function
  const jumpToCity = async (query: string) => {
    if (!query || !mapRef.current) return;
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`, {
        headers: { 'Accept-Language': 'en' }
      });
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      if (data && data[0]) {
        const { lat, lon } = data[0];
        mapRef.current.flyTo({
          center: [parseFloat(lon), parseFloat(lat)],
          zoom: 10,
          speed: 1.5,
          curve: 1,
          essential: true
        });
        setSearch("");
      }
    } catch (e) {
      console.warn("Geocoding failed - check network/CORS", e);
    }
  };

  // Live Alert Simulator: Trigger "Incoming Search" alerts
  useEffect(() => {
    if (locations.length === 0) return;
    
    const interval = setInterval(() => {
      const target = locations[Math.floor(Math.random() * locations.length)];
      if (!target.lat || !target.lng) return;

      const newAlert = {
        id: Math.random().toString(36).substr(2, 9),
        city: target.city.split(",")[0],
        ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        lat: target.lat,
        lng: target.lng
      };

      setAlerts(prev => [newAlert, ...prev].slice(0, 5));
      triggerMapAnimation(newAlert);
    }, 4000);

    return () => clearInterval(interval);
  }, [locations]);

  const triggerMapAnimation = async (alert: any) => {
    if (!mapRef.current) return;
    const module = await import('maplibre-gl');
    const maplibregl = module.default || module;

    const el = document.createElement('div');
    el.className = 'hacker-alert-pin';
    el.innerHTML = `
      <div class="relative flex flex-col items-center">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-12 h-12 border border-red-500 rounded-full animate-ping opacity-30"></div>
          <div class="w-8 h-8 border border-red-500 rounded-full animate-ping delay-150 opacity-50"></div>
        </div>
        <div class="w-6 h-6 bg-red-600 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.8)] z-20">
          <div class="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
        <div class="w-0.5 h-3 bg-gradient-to-b from-red-600 to-transparent z-10 -mt-1" />
        <div class="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[5px] border-t-red-600" />
      </div>
    `;

    const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([alert.lng, alert.lat])
      .addTo(mapRef.current);

    // Remove marker after animation
    setTimeout(() => {
      marker.remove();
    }, 5000);
  };

  const handleZoom = (type: 'in' | 'out') => {
    if (!mapRef.current) return;
    if (type === 'in') mapRef.current.zoomIn();
    else mapRef.current.zoomOut();
  };

  const jumpToNode = (lat: number, lng: number) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [lng, lat],
      zoom: 8,
      speed: 1.2,
      curve: 1.42,
      essential: true
    });
  };

  // Plot permanent static markers
  useEffect(() => {
    const plotMarkers = async () => {
      if (!mapRef.current || locations.length === 0) return;
      const module = await import('maplibre-gl');
      const maplibregl = module.default || module;

      const existingMarkers = document.querySelectorAll('.hacker-node-static');
      existingMarkers.forEach(m => m.remove());

      locations.forEach(loc => {
        if (typeof loc.lat === "number" && typeof loc.lng === "number") {
          const el = document.createElement('div');
          el.className = 'hacker-node-static';
          
          const cityName = (loc.city || "UNKNOWN").split(",")[0].toUpperCase();
          
          el.innerHTML = `
            <div class="relative group flex flex-col items-center cursor-pointer">
              <div class="w-1.5 h-1.5 bg-red-500/80 rounded-full border border-white/20 group-hover:scale-150 transition-transform" />
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 border border-red-500/20 px-2 py-1 text-[7px] text-red-500 pointer-events-none uppercase font-black">
                 ${cityName}
              </div>
            </div>
          `;

          const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
            .setLngLat([loc.lng, loc.lat])
            .addTo(mapRef.current);
            
          el.addEventListener('click', () => {
            mapRef.current.flyTo({ center: [loc.lng, loc.lat], zoom: 8, speed: 1.2 });
          });
        }
      });
    };

    plotMarkers();
  }, [locations]);

  const seoMetrics = [
    { label: "AI Search Visibility", value: "98.4%", trend: "+2.1%", color: "text-primary-accent" },
    { label: "Keyword Dominance", value: "Elite", trend: "Lock", color: "text-blue-400" },
    { label: "Regional Power", value: "Global", trend: "High", color: "text-purple-400" },
    { label: "Authority Score", value: "92/100", trend: "+5", color: "text-amber-400" }
  ];

  return (
    <div className="flex-1 bg-black relative overflow-hidden border-b border-primary-accent/10 group">
      {/* CSS Injection for MapLibre Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .maplibregl-canvas { outline: none !important; }
        .maplibregl-ctrl-attrib { display: none !important; }
        .maplibregl-ctrl-logo { display: none !important; }
        .maplibregl-ctrl-group { 
          background: rgba(0,0,0,0.8) !important; 
          border: 1px solid rgba(0,255,65,0.2) !important; 
          backdrop-filter: blur(10px);
        }
        .maplibregl-ctrl-group button { border-bottom: 1px solid rgba(0,255,65,0.1) !important; }
        .maplibregl-ctrl-group button span { filter: invert(1) brightness(100) !important; }
        
        /* High Contrast Tactical Map */
        .maplibregl-map { 
          filter: grayscale(1) brightness(0.8) contrast(1.4) !important;
          background: #000 !important;
        }
        .hacker-alert-pin { pointer-events: none; z-index: 500; }
        .hacker-node-static { cursor: pointer; z-index: 100; }
      ` }} />

      {/* Map Container - MapLibre GL */}
      <div 
        ref={mapContainerRef} 
        className="absolute inset-0 z-10 w-full h-full" 
        style={{ backgroundColor: '#000' }} 
      />


      {/* SEO Strength HUD Overlay - Vertical Stack to avoid overlap */}
      <div className="absolute bottom-20 left-6 z-50 flex flex-col gap-3 pointer-events-none">
          {seoMetrics.map((metric) => (
            <div key={metric.label} className="glass p-2 min-w-[120px] border-white/5 bg-black/60 backdrop-blur-md">
                <div className="text-[7px] text-zinc-500 font-mono uppercase tracking-[0.2em] mb-1">{metric.label}</div>
                <div className="flex items-baseline justify-between gap-3">
                  <div className={cn("text-sm font-black tracking-tighter", metric.color)}>{metric.value}</div>
                  <div className="text-[7px] font-mono opacity-40">{metric.trend}</div>
                </div>
            </div>
          ))}
      </div>

      {/* Incoming Alerts Feed HUD */}
      <div className="absolute top-36 right-6 z-50 flex flex-col gap-2 pointer-events-none">
          <AnimatePresence>
            {alerts.map((alert) => (
              <motion.div 
                key={alert.id}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="glass border-red-500/50 bg-red-950/20 p-2 min-w-[180px] flex items-center gap-3 backdrop-blur-md"
              >
                  <div className="w-1 h-8 bg-red-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-[7px] text-red-500 font-black tracking-widest leading-none mb-1">INCOMING_SIGNAL_DETECTED</span>
                    <span className="text-[10px] text-white font-bold tracking-tighter uppercase">{alert.city} // {alert.ip}</span>
                    <span className="text-[7px] text-zinc-500 font-mono">LAT: {alert.lat.toFixed(2)} / LNG: {alert.lng.toFixed(2)}</span>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
      </div>

      {/* Hacker Overlays - Higher z-index but transparent to events */}
      <div className="absolute inset-0 z-20 pointer-events-none hacker-grid opacity-[0.1]" />
      <div className="absolute inset-0 z-30 pointer-events-none laser-scanner opacity-10" />
      <div className="absolute inset-0 z-30 pointer-events-none scanlines opacity-10" />

      {/* Custom Zoom Controls HUD */}
      <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2">
        <button 
          onClick={() => handleZoom('in')}
          className="w-10 h-10 border border-primary-accent/40 bg-black/80 text-primary-accent flex items-center justify-center hover:bg-primary-accent hover:text-black transition-all font-black text-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] backdrop-blur-md pointer-events-auto"
          title="ZOOM_IN"
        >
          +
        </button>
        <button 
          onClick={() => handleZoom('out')}
          className="w-10 h-10 border border-primary-accent/40 bg-black/80 text-primary-accent flex items-center justify-center hover:bg-primary-accent hover:text-black transition-all font-black text-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] backdrop-blur-md pointer-events-auto"
          title="ZOOM_OUT"
        >
          -
        </button>
      </div>

      {/* Circular Radar Scanner (top-right) */}
      <RadarScanner />
      
      {/* Map Loading Indicator */}
      {!mapRef.current && (
        <div className="absolute inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-primary-accent">
          <div className="w-12 h-12 border-2 border-primary-accent border-t-transparent animate-spin rounded-full mb-4" />
          <span className="text-[10px] uppercase tracking-widest animate-pulse">INIT_MAP_SEQUENCE...</span>
        </div>
      )}

      {/* Consolidated Search HUD Overlay */}
      <div className="absolute top-6 left-6 z-50 flex flex-col gap-3 min-w-[280px]">
          <div className="glass border-primary-accent/40 bg-black/80 backdrop-blur-xl p-2 flex items-center gap-3 shadow-[0_0_30px_rgba(0,255,65,0.1)]">
              <LucideMap size={14} className="text-red-500 ml-1" />
              <input 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && jumpToCity(search)}
                 className="bg-transparent border-none text-[9px] text-primary-accent font-mono focus:ring-0 placeholder-primary-accent/30 w-full uppercase"
                 placeholder="SCAN_LOCATION_COORDS..."
              />
              <button 
                onClick={() => jumpToCity(search)}
                className="bg-primary-accent/10 border border-primary-accent/30 px-2 py-1 text-[7px] font-black hover:bg-primary-accent/20 transition-all uppercase text-primary-accent"
              >
                EXEC_FLY
              </button>
          </div>
          <div className="glass border-primary-accent/20 backdrop-blur-md p-3 rounded-none bg-black/40">
              <h3 className="text-[9px] font-mono font-black text-primary-accent/60 mb-2 uppercase tracking-[0.2em] flex justify-between">
                <span>NODE_DATABASE</span>
                <span className="text-zinc-600">[{locations.length}]</span>
              </h3>
              <div className="space-y-1 max-h-32 overflow-y-auto custom-scrollbar pr-2">
                {locations
                  .filter(l => typeof l.lat === "number" && typeof l.lng === "number")
                  .filter(l => !search || (l.city && l.city.toLowerCase().includes(search.toLowerCase())))
                  .map((loc, i) => (
                    <button 
                      key={i} 
                      onClick={() => jumpToNode(loc.lat, loc.lng)}
                      className="w-full text-left text-[8px] text-primary-accent/70 font-mono flex justify-between hover:bg-primary-accent/20 px-1 py-1 border-b border-white/5 transition-colors group"
                    >
                      <span className="group-hover:text-white transition-colors">{(loc.city || "UNKNOWN").split(",")[0].toUpperCase()}</span>
                      <span className="text-zinc-600 group-hover:text-primary-accent transition-colors font-bold">{loc.lat?.toFixed(1)}, {loc.lng?.toFixed(1)}</span>
                    </button>
                  ))}
              </div>
          </div>
      </div>

      {/* HUD Metrics side (Floating) */}
      <div className="absolute left-4 bottom-1/4 flex flex-col gap-2 z-40 pointer-events-none">
          {[
            { label: "MAP_API", val: "LEAFLET_OPEN" },
            { label: "TILE_SET", val: "CARTO_DARK" },
            { label: "ACTIVE_NODES", val: `${locations.length}` },
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
              <span className="text-red-500 font-black italic">LOW</span>
          </div>
      </div>

      <motion.div 
        animate={{ opacity: [1, 0.4, 1, 0.8, 1] }} 
        transition={{ repeat: Infinity, duration: 0.1 }}
        className="absolute top-24 left-6 p-2 border border-primary-accent/40 text-primary-accent font-mono text-[7px] uppercase tracking-[0.3em] hidden md:block z-50 bg-black/40 backdrop-blur-sm"
      >
        FREE_MAP_API_INTEGRATED_V1
      </motion.div>

      {/* HUD corner brackets - Adjusted positioning and z-index to avoid overlap */}
      <div className="absolute inset-8 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary-accent/40" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary-accent/40" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary-accent/40" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary-accent/40" />
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
  const [userData, setUserData] = useState<any>(null);
  const [sitePages, setSitePages] = useState<string[]>([
    "/", "/arun-devv", "/services/ai-video-production", "/blogs", "/portfolio", "/contact"
  ]);

  useEffect(() => {
    // Fetch real user data
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(() => setUserData({ query: "127.0.0.1", city: "Unknown", isp: "Encrypted" }));
  }, []);

  if (!isBooted) {
    return (
      <div 
        onClick={() => setIsBooted(true)}
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono text-primary-accent cursor-pointer selection:bg-transparent overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0%,transparent_70%)]" />
        <div className="laser-scanner opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center gap-12"
        >
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 border border-primary-accent/10 rounded-full"
            />
            <Shield size={64} className="absolute inset-0 m-auto text-primary-accent animate-pulse" />
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-7xl font-black tracking-[0.3em] uppercase italic text-primary-accent drop-shadow-[0_0_30px_rgba(0,255,65,0.4)]">
              SYSTEM_SECURITY_CONSOLE
            </h1>
            <p className="text-[10px] md:text-xs opacity-50 tracking-[0.5em] uppercase">Tactical Infrastructure Monitoring // DP_AI_NODE_KERALA</p>
          </div>

          <div className="w-80 h-px bg-primary-accent/10 relative overflow-hidden">
            <motion.div 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 w-1/2 h-full bg-primary-accent" 
            />
          </div>

          <button className="px-16 py-4 bg-primary-accent text-black font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all shadow-[0_0_50px_rgba(0,255,65,0.2)] active:scale-95">
            ESTABLISH_NEURAL_LINK_V6
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="theme-hacker bg-zinc-950 text-primary-accent flex flex-col font-mono selection:bg-red-500 selection:text-white min-h-screen xl:h-screen overflow-x-hidden xl:overflow-hidden">
      {/* TOTAL TACTICAL LOCK - 100% Red/Green Only */}
      <style dangerouslySetInnerHTML={{ __html: `
        footer, #glass-footer { display: none !important; opacity: 0 !important; visibility: hidden !important; height: 0 !important; pointer-events: none !important; }
        
        .glow-green { text-shadow: 0 0 8px rgba(0, 255, 65, 0.6); }
        .glow-red { text-shadow: 0 0 8px rgba(255, 62, 62, 0.6); }
        
        /* Force everything to Green or Red */
        * { color: inherit; }
        body, div, span, h1, h2, h3, h4, p, a, button, input { 
          color: #00ff41 !important; 
        }
        
        .text-red-500, .text-breach, .text-breach-muted, 
        .text-zinc-400, .text-zinc-500, .text-zinc-600,
        .text-amber-400, .text-blue-400, .text-purple-400 { 
          color: #ff3e3e !important; 
        }

        .text-primary-accent { color: #00ff41 !important; }
        .text-secondary { color: rgba(0, 255, 65, 0.7) !important; }

        /* Fix Design Overlaps */
        .glass-panel {
          background: rgba(0, 5, 0, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 65, 0.15);
          z-index: 10;
        }
        .z-top { z-index: 100 !important; }
      ` }} />
      
      <Header userData={userData} />

      <div className="h-auto md:h-8 bg-black/90 border-b border-primary-accent/20 flex flex-col md:flex-row items-center overflow-hidden z-40 gap-2 md:gap-4 py-2 md:py-0">
          <div className="flex items-center gap-4 px-6 bg-gradient-to-r from-red-600/20 to-transparent text-red-500 text-[10px] font-black italic uppercase tracking-[0.2em] h-full border-b md:border-b-0 md:border-r border-primary-accent/10 py-1 md:py-0 w-full md:w-auto justify-center md:justify-start">
              <Activity size={12} className="animate-pulse" /> LIVE_INTEL_STREAM
          </div>
          <div className="w-full md:w-auto px-4 flex items-center">
            <CrackingBar />
          </div>
          <div className="flex-1 overflow-hidden relative w-full md:w-auto">
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap text-[10px] font-bold text-primary-accent uppercase tracking-wider"
              >
                  {[
                    `VISITOR: ${userData?.city || "Unknown"}, ${userData?.country_name || "Unknown"}`,
                    `NODE_IP: ${userData?.query || "SCANNING..."}`,
                    "AI SEARCH VISIBILITY +240%",
                    "DOMAIN AUTHORITY LOCK: ELITE",
                    "KEYWORD DOMINANCE: #1 KERALA",
                    "NEURAL MEDIA PIPELINES: STABLE",
                    "SEO PENETRATION 92%",
                    "VIRTUAL PRODUCTION UPLINK: ACTIVE"
                  ].map((trend, i) => (
                      <span key={i} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-red-500 rounded-full animate-ping" /> {trend}
                      </span>
                  ))}
              </motion.div>
          </div>
      </div>

      <main className="flex-1 flex flex-col xl:flex-row overflow-y-auto xl:overflow-hidden bg-[#000500]">

        {/* Left Side: Intel & Activity */}
        <aside className="w-full xl:w-80 flex flex-col border-b xl:border-b-0 border-r-0 xl:border-r border-primary-accent/10 min-h-[300px] xl:min-h-0 bg-black/20">
          <TerminalLogs />
          
          <div className="flex-none xl:flex-1 flex flex-col p-4 glass bg-black/20 overflow-y-auto max-h-[400px] xl:max-h-none">
            {/* Real Website Pages - Most Visited */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Activity size={14} /> VISITOR_DISTRIBUTION
              </h3>
              <div className="space-y-2">
                  {sitePages.map((page, i) => (
                      <div key={i} className="flex justify-between items-center text-[9px] border-b border-primary-accent/5 pb-2">
                          <span className="text-zinc-400 font-mono truncate mr-4">{page}</span>
                          <span className="text-primary-accent font-bold tabular-nums">{800 - i * 120 + Math.floor(Math.random() * 50)}</span>
                      </div>
                  ))}
              </div>
            </div>

            {/* Competitor Analysis - Real Data */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Globe size={14} /> COMPETITION_BENCHMARKS
              </h3>
              <div className="space-y-3">
                  {competitors.map((comp, i) => (
                      <div key={i} className="group p-3 border border-primary-accent/5 bg-white/5 hover:border-primary-accent/30 transition-all cursor-default">
                          <div className="flex justify-between items-center text-[10px] font-black uppercase mb-1">
                              <span className="text-white">{comp.name}</span>
                              <span className="text-primary-accent">{comp.rank}</span>
                          </div>
                          <div className="flex justify-between items-center text-[8px] text-zinc-500 font-mono">
                              <span>{comp.market}</span>
                              <span className={comp.status === "ACTIVE" ? "text-green-500" : "text-primary-accent"}>{comp.status}</span>
                          </div>
                      </div>
                  ))}
              </div>
            </div>

            {/* Regional Map of Kerala */}
            <KeralaMiniMap />
          </div>
        </aside>

        {/* Center: Map */}
        <section className="flex-none xl:flex-1 h-[50vh] sm:h-[60vh] xl:h-auto flex flex-col border-b xl:border-b-0 border-r-0 xl:border-r border-primary-accent/10 relative min-h-[400px]">
          <MapVisualizer />
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <DecodingConsole />
          </div>
        </section>

        {/* Right Side: Stats & Threats */}
        <aside className="w-full xl:w-96 flex flex-col p-4 md:p-6 glass bg-[#000d00]/80 overflow-y-visible xl:overflow-y-auto border-l-0 xl:border-l border-primary-accent/10 relative">
          {/* Scrolling Number Stream */}
          <div className="mb-4 border border-primary-accent/10 bg-black/60 p-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-accent/20 animate-scan" />
            <div className="text-[7px] text-primary-accent/30 font-mono uppercase mb-2 tracking-widest">// LIVE_SECURITY_STREAM</div>
            <div className="h-24 overflow-hidden">
              <ScrollingNumbers />
            </div>
          </div>

          {/* Visitor Intelligence Block - REAL DATA */}
          <div className="mb-4 p-4 md:p-6 border border-primary-accent/20 bg-black/80 rounded-none shadow-[inset_0_0_20px_rgba(0,255,65,0.05)]">
            <h3 className="text-[11px] font-black text-breach uppercase tracking-[0.2em] mb-5 flex items-center gap-3 glow-red">
              <Activity size={16} /> VISITOR_DIGITAL_IDENTITY
            </h3>
            <div className="space-y-4 text-[10px] font-mono">
              <div className="flex justify-between gap-4 border-b border-primary-accent/5 pb-2"><span className="text-secondary uppercase">ADDRESS_ID</span><span className="text-primary-accent glow-green truncate">{userData?.query || "SCANNING..."}</span></div>
              <div className="flex justify-between gap-4 border-b border-primary-accent/5 pb-2"><span className="text-secondary uppercase">CORE_OS</span><span className="text-primary-accent truncate">{typeof window !== 'undefined' ? window.navigator.platform : "DETECTING..."}</span></div>
              <div className="flex justify-between gap-4 border-b border-primary-accent/5 pb-2"><span className="text-secondary uppercase">U_AGENT</span><span className="text-primary-accent truncate max-w-[150px]">{typeof window !== 'undefined' ? window.navigator.userAgent.split(')')[0].split('(')[1] : "DETECTING..."}</span></div>
              <div className="flex justify-between gap-4 border-b border-primary-accent/5 pb-2"><span className="text-secondary uppercase">GEOMETRY</span><span className="text-primary-accent">{typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : "DETECTING..."}</span></div>
              <div className="flex justify-between gap-4"><span className="text-breach uppercase">LATENCY</span><span className="text-breach font-bold glow-red">{userData?.latitude ? `${Math.floor(Math.random() * 15) + 12}ms` : "CALIBRATING..."}</span></div>
            </div>
          </div>

          {/* Firewall Heatmap */}
          <FirewallHeatmap />

          {/* Network Throughput */}
          <div className="mb-4">
            <h3 className="text-xs font-bold text-primary-accent mb-6 uppercase tracking-widest flex items-center gap-2">
              <Activity size={16} /> NETWORK_THROUGHPUT
            </h3>
            <div className="h-32 w-full flex items-center justify-center border border-primary-accent/10 bg-black/40">
                <div className="text-primary-accent text-[10px] font-mono">[TRAFFIC_CHART_OFFLINE]</div>
            </div>
          </div>

          {/* Market Intelligence Section */}
          <div className="mb-4 p-4 border border-primary-accent/10 bg-black/40">
            <h3 className="text-xs font-bold text-red-500 mb-4 uppercase tracking-widest flex items-center gap-2">
              <AlertTriangle size={16} className="text-red-500" /> GLOBAL_MARKET_INTEL
            </h3>
            <div className="space-y-4">
              {competitors.map((comp, i) => (
                <div key={i} className="flex flex-col gap-1 border-l-2 border-primary-accent/40 pl-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-white">{comp.name}</span>
                    <span className={cn(
                      "text-[8px] font-black italic text-primary-accent"
                    )}>{comp.rank}</span>
                  </div>
                  <span className="text-[8px] text-red-500 uppercase">STATUS: {comp.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Performance Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 border border-primary-accent/20 bg-white/5 flex flex-col gap-1 relative overflow-hidden">
                <span className="text-[9px] text-primary-accent/60 uppercase tracking-widest">LOAD_SPEED</span>
                <span className="text-xl font-black text-white italic">0.42s</span>
                <div className="absolute bottom-0 left-0 h-[2px] bg-primary-accent w-full opacity-30" />
            </div>
            <div className="p-3 border border-primary-accent/20 bg-white/5 flex flex-col gap-1 relative overflow-hidden">
                <span className="text-[9px] text-primary-accent/60 uppercase tracking-widest">SEO_STRENGTH</span>
                <span className="text-xl font-black text-red-500 italic">92%</span>
                <div className="absolute bottom-0 left-0 h-[2px] bg-red-500 w-full opacity-30" />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-primary-accent mb-4 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={16} /> CORE_HEURISTICS
            </h3>
            <div className="h-24">
            <div className="h-24 flex items-center justify-center border border-primary-accent/10 bg-black/40">
                <div className="text-primary-accent text-[10px] font-mono">[HEURISTICS_CHART_OFFLINE]</div>
            </div>
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
