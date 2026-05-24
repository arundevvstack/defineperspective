"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock Data structure representing Supabase RPC Telemetry
const mockTelemetry = {
  averageLatency: "185ms",
  cacheHitRatio: "42%",
  vectorPrecision: "0.89",
  totalChunks: 2450,
  aiOverviewReady: 85,
  recentQueries: [
    { query: "luxury jewelry commercials Kerala", similarity: 0.92, latency: 145 },
    { query: "Runway Gen-3 real estate workflow", similarity: 0.88, latency: 190 },
    { query: "Bangalore tech startup AI film", similarity: 0.94, latency: 130 },
    { query: "midjourney v6 hospitality concepts", similarity: 0.81, latency: 210 }
  ]
};

export default function RetrievalAnalyticsDashboard() {
  const [telemetry, setTelemetry] = useState(mockTelemetry);
  const [isLoading, setIsLoading] = useState(false);

  // Future: Fetch live data from /api/admin/telemetry
  
  return (
    <div className="min-h-screen bg-black text-white font-sans p-8 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="border-b border-neutral-800 pb-8">
          <p className="text-amber-500 uppercase tracking-widest text-xs mb-2">Internal Operations Node</p>
          <h1 className="text-4xl font-light tracking-tight">Semantic Retrieval Analytics</h1>
          <p className="text-neutral-500 mt-2">Observability console for HNSW vector telemetry and AI Overview extraction readiness.</p>
        </header>

        {/* Core Metrics HUD */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard title="Avg Vector Latency" value={telemetry.averageLatency} status="optimal" />
          <MetricCard title="Global Cosine Precision" value={telemetry.vectorPrecision} status="optimal" />
          <MetricCard title="Edge Cache Hit Ratio" value={telemetry.cacheHitRatio} status="warning" />
          <MetricCard title="AI Overview Candidates" value={`${telemetry.aiOverviewReady}%`} status="optimal" />
        </div>

        {/* Live Semantic Query Stream */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-medium mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Query Telemetry
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-neutral-500 border-b border-neutral-800">
                <tr>
                  <th className="pb-4 font-normal">Natural Language Query</th>
                  <th className="pb-4 font-normal">Cosine Similarity</th>
                  <th className="pb-4 font-normal">Retrieval Latency</th>
                  <th className="pb-4 font-normal">System Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {telemetry.recentQueries.map((q, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="group"
                  >
                    <td className="py-4 text-neutral-300 font-mono text-xs">{q.query}</td>
                    <td className="py-4 text-amber-500">{q.similarity.toFixed(2)}</td>
                    <td className="py-4 text-neutral-400">{q.latency}ms</td>
                    <td className="py-4">
                      {q.similarity > 0.85 ? (
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs">High Precision</span>
                      ) : (
                        <span className="bg-amber-500/10 text-amber-400 px-2 py-1 rounded text-xs">Review Chunk</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Micro-component for HUD UI
function MetricCard({ title, value, status }: { title: string, value: string, status: 'optimal' | 'warning' | 'critical' }) {
  const statusColors = {
    optimal: 'text-emerald-400',
    warning: 'text-amber-400',
    critical: 'text-red-400'
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-800 to-transparent"></div>
      <h3 className="text-neutral-500 text-xs uppercase tracking-widest mb-4">{title}</h3>
      <div className="flex items-end gap-3">
        <span className="text-4xl font-light">{value}</span>
        <span className={`text-xs mb-1 ${statusColors[status]}`}>
          {status === 'optimal' && '●'}
          {status === 'warning' && '▲'}
          {status === 'critical' && '■'}
        </span>
      </div>
    </div>
  );
}
