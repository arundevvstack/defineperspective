import { motion } from "framer-motion";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const Instagram = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const igPosts = [
  { id: 1, img: "https://instagram.ftrv8-1.fna.fbcdn.net/v/t51.82787-15/627488977_18101429758683503_7153049076948682525_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=58cdad&oh=00_Af0bASFROr6jdrpm2O_je-i_SOOugIt0FaJR0cCbtUrnjQ&oe=69DB4EA5", link: "https://www.instagram.com/defineperspective/p/Cpm9zDOsyxd/" },
  { id: 2, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.82787-15/626678620_18079124168358471_4501918879199025996_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=58cdad&oh=00_Af2uUHHJuGT08AlH89ZR0VzIFjullZOzdbth2q31vY0HXA&oe=69DB5571", link: "https://www.instagram.com/defineperspective/p/Cpm9unHMBMf/" },
  { id: 3, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.82787-15/622509321_18103059616829383_6129039406761891336_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=7-5&_nc_sid=58cdad&oh=00_Af1_fgpiUHMxxFmBFySu05FORTbbtcfcoo-iO3vJ3cwGgg&oe=69DB7901", link: "https://www.instagram.com/defineperspective/p/Cpm9s4isVRd/" },
  { id: 4, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.82787-15/632047491_17999060210884942_5292417521370866260_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=58cdad&oh=00_Af13Kr3wQS9z3hSc6f8KfpVXhkYpXIAyf5lw_7m3e88RQA&oe=69DB655E", link: "https://www.instagram.com/dp.westvogue/reel/DUvRHENki__/" },
  { id: 5, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.71878-15/630184204_1994273604861296_1408825489005594863_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ccb=7-5&_nc_sid=58cdad&oh=00_Af3BpzRgj0dyjEODANYWW3X9amxJsv7iO8eJl8q8Uw6xrw&oe=69DB6383", link: "https://www.instagram.com/aiadskerala/reel/DUXD8uqkjXw/" },
  { id: 6, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.82787-15/630229373_17998777100884942_249057138854899324_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=7-5&_nc_sid=58cdad&oh=00_Af2xqQOK5j1MDhkWJAaQUL0b-yfQbSg9vKzSbw3Ib10aPg&oe=69DB757C", link: "https://www.instagram.com/defineperspective/reel/DQeZ6xugfM7/" },
  { id: 7, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.82787-15/626712922_17875822587482588_4456698458489169864_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ccb=7-5&_nc_sid=58cdad&oh=00_Af3qdgzIvFnWH0lPZQNa8zau6ZJuEGluHk_SCqgEokBEBA&oe=69DB56FF", link: "https://www.instagram.com/defineperspective/p/DN77zgqAWBU/" },
  { id: 8, img: "https://instagram.ftrv8-2.fna.fbcdn.net/v/t51.82787-15/574065273_18487613440077150_6532750915945746422_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ccb=7-5&_nc_sid=58cdad&oh=00_Af3wQPtKupo6-aatC7GgO7I1L6szL9GLYK8BsViCAGr-Ng&oe=69DB4ADE", link: "https://www.instagram.com/defineperspective/reel/DNA5BM_h4EC/" },
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
            href={post.link}
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
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-white font-bold">
                <Heart size={20} fill="white" />
                <span>Live</span>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <MessageCircle size={20} fill="white" />
                <span>View</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
