"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Film, Info } from "lucide-react";

export interface PricingTier {
  id: string;
  group: "Short Vertical AI Video (9:16)" | "Landscape AI Commercial (16:9)" | "Bespoke Broadcast TVC / Flagship Campaign";
  label: string;
  shortLabel: string;
  kind: "starting" | "range" | "fixed" | "custom";
  minPrice?: number;
  maxPrice?: number;
  description: string;
}

export const APPROVED_PRICING_TIERS: PricingTier[] = [
  {
    id: "vertical-basic",
    group: "Short Vertical AI Video (9:16)",
    label: "Short Vertical AI Video (9:16) — Basic",
    shortLabel: "Basic (9:16)",
    kind: "starting",
    minPrice: 7000,
    description: "Focused vertical ad or product hook for Reels, Shorts, and social testing.",
  },
  {
    id: "vertical-standard",
    group: "Short Vertical AI Video (9:16)",
    label: "Short Vertical AI Video (9:16) — Standard",
    shortLabel: "Standard (9:16)",
    kind: "range",
    minPrice: 10000,
    maxPrice: 15000,
    description: "Refined pacing, visual transitions, and tailored music and voiceover integration.",
  },
  {
    id: "vertical-premium",
    group: "Short Vertical AI Video (9:16)",
    label: "Short Vertical AI Video (9:16) — Premium",
    shortLabel: "Premium (9:16)",
    kind: "starting",
    minPrice: 20000,
    description: "Art-directed vertical brand film with custom visual styling and closer product detail.",
  },
  {
    id: "landscape-premium",
    group: "Landscape AI Commercial (16:9)",
    label: "Landscape AI Commercial (16:9) — Premium",
    shortLabel: "Premium (16:9)",
    kind: "range",
    minPrice: 45000,
    maxPrice: 55000,
    description: "Widescreen brand or product commercial for YouTube, websites, and digital campaigns.",
  },
  {
    id: "landscape-cinematic",
    group: "Landscape AI Commercial (16:9)",
    label: "Landscape AI Commercial (16:9) — Cinematic Landscape",
    shortLabel: "Cinematic Landscape (16:9)",
    kind: "fixed",
    minPrice: 180000,
    description: "Director-led narrative commercial with multi-scene storytelling, colour grading, and sound mix.",
  },
  {
    id: "bespoke-tvc",
    group: "Bespoke Broadcast TVC / Flagship Campaign",
    label: "Bespoke Broadcast TVC / Flagship Campaign",
    shortLabel: "Bespoke TVC / Flagship",
    kind: "custom",
    description: "Major brand campaigns, broadcast television commercials, and multi-language rollouts.",
  },
];

function formatInr(amount: number): string {
  return `₹${new Intl.NumberFormat("en-IN").format(amount)}`;
}

export function calculateCommercialEstimate(
  tierId: string,
  quantity: number
): {
  tier: PricingTier;
  quantity: number;
  displayEstimate: string;
  perUnitDisplay: string;
  isCustom: boolean;
} {
  const tier = APPROVED_PRICING_TIERS.find((t) => t.id === tierId) || APPROVED_PRICING_TIERS[3];
  const safeQty = Math.min(10, Math.max(1, Math.floor(quantity)));

  if (tier.kind === "custom" || !tier.minPrice) {
    return {
      tier,
      quantity: safeQty,
      displayEstimate: "Custom quotation required",
      perUnitDisplay: "Custom quotation",
      isCustom: true,
    };
  }

  if (tier.kind === "range" && tier.maxPrice) {
    const perMin = formatInr(tier.minPrice);
    const perMax = formatInr(tier.maxPrice);
    const totalMin = formatInr(tier.minPrice * safeQty);
    const totalMax = formatInr(tier.maxPrice * safeQty);
    return {
      tier,
      quantity: safeQty,
      displayEstimate: `${totalMin} – ${totalMax}`,
      perUnitDisplay: `${perMin} – ${perMax}`,
      isCustom: false,
    };
  }

  if (tier.kind === "starting") {
    const perMin = formatInr(tier.minPrice);
    const totalMin = formatInr(tier.minPrice * safeQty);
    return {
      tier,
      quantity: safeQty,
      displayEstimate: `${totalMin} onwards`,
      perUnitDisplay: `${perMin} onwards`,
      isCustom: false,
    };
  }

  // Indicative fixed/starting tier (e.g. Cinematic Landscape ₹1,80,000)
  const perUnit = formatInr(tier.minPrice);
  const total = formatInr(tier.minPrice * safeQty);
  return {
    tier,
    quantity: safeQty,
    displayEstimate: total,
    perUnitDisplay: perUnit,
    isCustom: false,
  };
}

export default function CommercialBudgetEstimator() {
  const [selectedTierId, setSelectedTierId] = useState<string>("landscape-premium");
  const [quantity, setQuantity] = useState<number>(1);

  const estimate = useMemo(
    () => calculateCommercialEstimate(selectedTierId, quantity),
    [selectedTierId, quantity]
  );

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-obsidian relative overflow-x-clip">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Guidance Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-primary-accent font-mono text-[10px] uppercase font-black tracking-[0.25em]">
                Budget Planning
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
                Commercial Video <br />
                <span className="text-primary-accent">Budget Estimator_</span>
              </h2>
              <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                Select a production format and the number of films or variations you are planning to see an indicative starting budget based on DP AI Studio&apos;s pricing tiers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-primary-accent">
                <Info size={18} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  How Estimates Are Scoped
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Final pricing depends on duration, creative complexity, revision rounds, deliverables, and usage rights. GST is additional on all quoted amounts.
              </p>
            </div>
          </div>

          {/* Right Estimator Card */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 md:p-12 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl space-y-10">
              {/* Format & Tier Selection */}
              <div className="space-y-4">
                <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <Film size={14} className="text-primary-accent" /> Select Format &amp; Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {APPROVED_PRICING_TIERS.map((tier) => {
                    const active = tier.id === selectedTierId;
                    const unitPreview =
                      tier.kind === "custom"
                        ? "Custom quotation"
                        : tier.kind === "range" && tier.minPrice && tier.maxPrice
                        ? `${formatInr(tier.minPrice)}–${formatInr(tier.maxPrice)}`
                        : tier.kind === "starting" && tier.minPrice
                        ? `${formatInr(tier.minPrice)} onwards`
                        : tier.minPrice
                        ? formatInr(tier.minPrice)
                        : "Custom quotation";

                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          active
                            ? "border-primary-accent bg-primary-accent/10 text-white"
                            : "border-white/10 bg-black/30 text-zinc-300 hover:border-white/25"
                        }`}
                      >
                        <span className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                          {tier.group}
                        </span>
                        <span className="block text-sm font-bold text-white">
                          {tier.shortLabel}
                        </span>
                        <span className="block text-xs font-mono text-primary-accent mt-1">
                          {unitPreview}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Selection (1 to 10) */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label
                    htmlFor="estimator-quantity"
                    className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2"
                  >
                    <Calculator size={14} className="text-primary-accent" /> Number of Films / Variations
                  </label>
                  <span className="text-2xl font-black text-white">
                    {estimate.quantity} {estimate.quantity === 1 ? "Film" : "Films"}
                  </span>
                </div>
                <input
                  id="estimator-quantity"
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary-accent"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>1 Film</span>
                  <span>5 Films</span>
                  <span>10 Films</span>
                </div>
              </div>

              {/* Output Display */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-primary-accent font-bold">
                    Indicative Estimate (GST Extra)
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Unit rate: {estimate.perUnitDisplay}
                  </span>
                </div>

                <div className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  {estimate.displayEstimate}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {estimate.tier.description}
                </p>

                <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">
                  Indicative planning estimate only; GST is extra. Final pricing depends on duration, creative complexity, revisions, deliverables, and usage rights.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full h-16 md:h-20 rounded-2xl bg-primary-accent text-black font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-[1.01] transition-all shadow-xl shadow-primary-accent/20"
              >
                Request a Project Estimate <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

