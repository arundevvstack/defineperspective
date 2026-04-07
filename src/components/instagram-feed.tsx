import { motion } from "framer-motion";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const Instagram = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const igPosts = [
  { id: 1, img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", likes: "1.2k", comments: "48" },
  { id: 2, img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop", likes: "850", comments: "32" },
  { id: 3, img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop", likes: "2.4k", comments: "112" },
  { id: 4, img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", likes: "1.1k", comments: "24" },
  { id: 5, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop", likes: "920", comments: "18" },
  { id: 6, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", likes: "1.5k", comments: "56" },
  { id: 7, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", likes: "1.8k", comments: "92" },
  { id: 8, img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop", likes: "2.1k", comments: "74" },
];

export default function InstagramFeed() {
  return (
    <section className="py-40">
      <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-accent mb-6 block">Visual Stream {" // "} Studio Access</span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
            Live from <br /><span className="text-primary-accent italic">Instagram_</span>
          </h2>
        </div>
        <a 
          href="https://www.instagram.com/defineperspective/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-primary-accent transition-colors group"
        >
          Follow @defineperspective <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {igPosts.map((post, idx) => (
          <motion.a
            key={post.id}
            href="https://www.instagram.com/defineperspective/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative aspect-square rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900"
          >
            <Image 
              src={post.img} 
              alt={`Instagram post ${post.id}`} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-6 backdrop-blur-sm">
              <Instagram size={32} className="text-primary-accent" />
              <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-white">
                <span className="flex items-center gap-2"><Heart size={14} className="text-red-500 fill-red-500" /> {post.likes}</span>
                <span className="flex items-center gap-2"><MessageCircle size={14} className="text-primary-accent fill-primary-accent" /> {post.comments}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
