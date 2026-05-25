"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { publishIntelligence } from '@/app/actions/publisher';

// ==============================================================================
// CONSTANTS
// ==============================================================================
const GEO_OPTIONS = ['Kerala', 'Kochi', 'Dubai', 'Bangalore', 'Mumbai', 'Chennai'] as const;
const INDUSTRY_OPTIONS = ['Jewellery', 'Fashion', 'Hospitality', 'Real Estate', 'SaaS'] as const;

const PIPELINE_STEPS = [
  { key: 'detect', label: 'Platform Detection' },
  { key: 'extract', label: 'Metadata Extraction' },
  { key: 'enrich', label: 'AI Enrichment' },
  { key: 'schema', label: 'Schema Generation' },
  { key: 'database', label: 'Database Insert' },
  { key: 'vector', label: 'Vector Embedding' },
  { key: 'publish', label: 'Cache Revalidation' },
] as const;

type PipelineStep = typeof PIPELINE_STEPS[number]['key'];
type PublishResult = {
  success: boolean;
  slug?: string;
  isDraft?: boolean;
  title?: string;
  aiSummary?: string;
  faqs?: { question: string; answer: string }[];
  socialPosts?: Record<string, any>;
  workflows?: string[];
  semanticLinks?: string[];
  geo?: string;
  industry?: string;
  error?: string;
};

// ==============================================================================
// SOCIAL PLATFORM CONFIG
// ==============================================================================
const SOCIAL_PLATFORMS = [
  { key: 'linkedin', label: 'LinkedIn', icon: '🔗' },
  { key: 'instagram', label: 'Instagram', icon: '📸' },
  { key: 'twitter', label: 'X / Twitter', icon: '𝕏' },
  { key: 'youtube_description', label: 'YouTube Description', icon: '▶️' },
  { key: 'youtube_tags', label: 'YouTube Tags', icon: '🏷️' },
  { key: 'behance', label: 'Behance', icon: '🎨' },
  { key: 'medium', label: 'Medium', icon: '📝' },
  { key: 'newsletter', label: 'Newsletter', icon: '📧' },
] as const;

// ==============================================================================
// COMPONENT
// ==============================================================================
export default function IntelligencePublisher() {
  const [url, setUrl] = useState('');
  const [clientName, setClientName] = useState('');
  const [geo, setGeo] = useState<string>(GEO_OPTIONS[0]);
  const [industry, setIndustry] = useState<string>(INDUSTRY_OPTIONS[0]);
  const [transcript, setTranscript] = useState('');

  const [status, setStatus] = useState<'idle' | 'publishing' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState<PipelineStep | null>(null);
  const [result, setResult] = useState<PublishResult | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // ── Simulated pipeline step progression ──
  const simulatePipeline = async () => {
    for (const step of PIPELINE_STEPS) {
      setCurrentStep(step.key);
      await new Promise(r => setTimeout(r, 600 + Math.random() * 400));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('publishing');
    setResult(null);
    setCurrentStep('detect');

    const formData = new FormData();
    formData.append('externalUrl', url);
    formData.append('clientName', clientName);
    formData.append('geo', geo);
    formData.append('industry', industry);
    formData.append('transcript', transcript);

    // Run pipeline UI animation and actual publish in parallel
    const [res] = await Promise.all([
      publishIntelligence(formData),
      simulatePipeline(),
    ]);

    if (res.success) {
      setStatus('success');
      setResult(res);
    } else {
      setStatus('error');
      setResult(res);
    }
    setCurrentStep(null);
  };

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleReset = () => {
    setUrl('');
    setClientName('');
    setTranscript('');
    setStatus('idle');
    setResult(null);
    setCurrentStep(null);
  };

  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-amber-500/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* ── HEADER ── */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-1">
            Intelligence Publisher<span className="text-amber-500">™</span>
          </h1>
          <p className="text-neutral-500 font-mono text-xs tracking-widest uppercase">
            DP AI Studios — Content Authority Engine
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ══════════════════════════════════════════
              LEFT COLUMN: INPUT FORM
              ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                {/* URL Input */}
                <div>
                  <label htmlFor="pub-url" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                    External Media URL
                  </label>
                  <input
                    id="pub-url"
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    disabled={status === 'publishing'}
                    className="w-full bg-black border border-neutral-700 text-white px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 transition-colors disabled:opacity-40 placeholder:text-neutral-600"
                  />
                  <p className="mt-1.5 text-[10px] text-neutral-600">
                    YouTube · Vimeo · Instagram · Facebook
                  </p>
                </div>

                {/* Client + GEO + Industry Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="pub-client" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                      Client / Brand
                    </label>
                    <input
                      id="pub-client"
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Brand name"
                      disabled={status === 'publishing'}
                      className="w-full bg-black border border-neutral-700 text-white px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 transition-colors disabled:opacity-40 placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="pub-geo" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                      GEO Target
                    </label>
                    <select
                      id="pub-geo"
                      value={geo}
                      onChange={(e) => setGeo(e.target.value)}
                      disabled={status === 'publishing'}
                      className="w-full bg-black border border-neutral-700 text-white px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 transition-colors disabled:opacity-40 appearance-none"
                    >
                      {GEO_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pub-industry" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                      Industry
                    </label>
                    <select
                      id="pub-industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      disabled={status === 'publishing'}
                      className="w-full bg-black border border-neutral-700 text-white px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 transition-colors disabled:opacity-40 appearance-none"
                    >
                      {INDUSTRY_OPTIONS.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                </div>

                {/* Transcript Paste */}
                <div>
                  <label htmlFor="pub-transcript" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                    Transcript <span className="text-neutral-600">(paste from YouTube / manual)</span>
                  </label>
                  <textarea
                    id="pub-transcript"
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    placeholder="Paste the full video transcript here..."
                    rows={5}
                    disabled={status === 'publishing'}
                    className="w-full bg-black border border-neutral-700 text-white px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 transition-colors disabled:opacity-40 resize-y placeholder:text-neutral-600 font-mono"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                      {status === 'success' && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className={`text-sm truncate ${result?.isDraft ? 'text-amber-500' : 'text-blue-500'}`}
                        >
                          {result?.isDraft ? `⚠️ Draft Saved (AI Failed): /case-studies/${result?.slug}` : `✓ Published: /case-studies/${result?.slug}`}
                        </motion.p>
                      )}
                      {status === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-sm truncate"
                        >
                          ✖ {result?.error || 'Unknown error'}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    {status === 'success' && (
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-5 py-3.5 border border-neutral-700 text-neutral-300 text-xs rounded-full hover:bg-neutral-800 transition-colors uppercase tracking-widest"
                      >
                        New Project
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'publishing' || !url || !clientName}
                      className="px-6 sm:px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-amber-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
                    >
                      {status === 'publishing' ? 'Publishing...' : 'Publish Everywhere'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════
              RIGHT COLUMN: PIPELINE STATUS
              ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md sticky top-8">
              <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === 'publishing' ? 'bg-amber-500 animate-pulse' : status === 'success' ? 'bg-blue-500' : 'bg-neutral-700'}`} />
                Pipeline Status
              </h2>

              <div className="space-y-3">
                {PIPELINE_STEPS.map((step, idx) => {
                  const stepIdx = PIPELINE_STEPS.findIndex(s => s.key === currentStep);
                  const thisIdx = idx;
                  let state: 'pending' | 'active' | 'done' = 'pending';
                  if (status === 'success') state = 'done';
                  else if (currentStep && thisIdx < stepIdx) state = 'done';
                  else if (currentStep && thisIdx === stepIdx) state = 'active';

                  return (
                    <div key={step.key} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] shrink-0 transition-all duration-300 ${
                        state === 'done'
                          ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                          : state === 'active'
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-400 animate-pulse'
                          : 'bg-neutral-900 border-neutral-700 text-neutral-600'
                      }`}>
                        {state === 'done' ? '✓' : state === 'active' ? '⟳' : idx + 1}
                      </div>
                      <span className={`text-sm transition-colors duration-300 ${
                        state === 'done' ? 'text-blue-400' : state === 'active' ? 'text-amber-400' : 'text-neutral-600'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {status === 'success' && result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pt-6 border-t border-neutral-800"
                >
                  <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Published Node</p>
                  <a
                    href={`/case-studies/${result.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 text-sm underline underline-offset-4 break-all"
                  >
                    /case-studies/{result.slug}
                  </a>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-neutral-800 rounded text-[10px] uppercase text-neutral-400">{result.geo}</span>
                    <span className="px-2.5 py-1 bg-neutral-800 rounded text-[10px] uppercase text-neutral-400">{result.industry}</span>
                    {result.workflows?.slice(0, 3).map(w => (
                      <span key={w} className="px-2.5 py-1 bg-neutral-800 rounded text-[10px] uppercase text-neutral-400">{w}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════
            RESULTS PANEL — SHOWN AFTER SUCCESSFUL PUBLISH
            ══════════════════════════════════════════════════ */}
        <AnimatePresence>
          {status === 'success' && result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
              className="mt-10 space-y-8"
            >
              {/* AI Summary Preview */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-xs uppercase tracking-widest text-amber-500 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  AI Summary — Google AI Overview Signal
                </h3>
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-neutral-300 leading-relaxed text-sm">{result.aiSummary}</p>
                </div>
              </div>

              {/* FAQ Preview */}
              {result.faqs && result.faqs.length > 0 && (
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                  <h3 className="text-xs uppercase tracking-widest text-amber-500 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    FAQ Block — FAQPage Schema Active
                  </h3>
                  <div className="space-y-4">
                    {result.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-neutral-800 pb-4 last:border-0">
                        <p className="text-white text-sm font-medium mb-1">{faq.question}</p>
                        <p className="text-neutral-400 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Semantic Internal Links */}
              {result.semanticLinks && result.semanticLinks.length > 0 && (
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                  <h3 className="text-xs uppercase tracking-widest text-amber-500 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Semantic Authority Mesh
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.semanticLinks.map(link => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-neutral-800 hover:bg-amber-600 text-neutral-300 hover:text-white rounded text-xs uppercase tracking-wider transition-colors"
                      >
                        {link.replace(/^\//, '').replace(/-/g, ' ')}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* ── PUBLISH EVERYWHERE: Social Content ── */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-xs uppercase tracking-widest text-amber-500 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Publish Everywhere — Distribution Assets
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SOCIAL_PLATFORMS.map(platform => {
                    const content = result.socialPosts?.[platform.key];
                    if (!content) return null;

                    const displayText = Array.isArray(content) ? content.join(', ') : String(content);

                    return (
                      <div key={platform.key} className="bg-black/50 border border-neutral-800 rounded-xl p-4 group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                            <span>{platform.icon}</span>
                            {platform.label}
                          </span>
                          <button
                            onClick={() => handleCopy(platform.key, displayText)}
                            className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-neutral-700 text-neutral-500 hover:text-white hover:border-amber-500 transition-colors"
                          >
                            {copiedKey === platform.key ? '✓ Copied' : 'Copy'}
                          </button>
                        </div>
                        <p className="text-neutral-400 text-xs leading-relaxed line-clamp-4 font-mono">
                          {displayText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
