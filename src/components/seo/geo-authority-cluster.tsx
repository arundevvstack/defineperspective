import { MapPin } from "lucide-react";

export default function GeoAuthorityCluster() {
  return (
    <div className="py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto max-w-4xl px-6 md:px-12">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-white/5 text-zinc-500 shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Global Deployment & Regional Presence</h4>
            <p className="text-xs text-zinc-500 leading-loose uppercase tracking-widest font-mono">
              DP AI Studios is headquartered in <span className="text-zinc-300">Kochi, Kerala</span> with extended production nodes in <span className="text-zinc-300">Trivandrum</span>, <span className="text-zinc-300">Bangalore</span>, and <span className="text-zinc-300">Chennai</span>. We serve as a tier-1 AI video production partner for enterprise brands across <span className="text-zinc-300">India</span>, <span className="text-zinc-300">Mumbai</span>, <span className="text-zinc-300">Hyderabad</span>, and <span className="text-zinc-300">Dubai (UAE)</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
