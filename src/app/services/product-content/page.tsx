import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Package,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Product & E-commerce Content India | Best Product Photographer Kerala | Define Perspective",
  description:
    "High-impact product photography and e-commerce video production in India. We create cinematic marketplaces visuals for D2C brands, specializing in Amazon and Flipkart content.",
  keywords: [
    "product photography India",
    "best product videographer Kerala",
    "E-commerce content Kochi",
    "marketplace product videos India",
  ],
};

const subServices = [
  {
    title: "E-commerce Product Photography",
    href: "/services/product-content/e-commerce-product-photography",
    desc: "Luxury-spec product photography for high-end catalogs and digital storefronts.",
  },
  {
    title: "Product Demo Videos",
    href: "/services/product-content/product-demo-videos",
    desc: "Detailed feature walkthroughs and cinematic product highlights that build confidence.",
  },
  {
    title: "Amazon & Flipkart Product Videos",
    href: "/services/product-content/amazon-flipkart-product-videos",
    desc: "Marketplace-optimized video assets designed to increase conversion rates on retail platforms.",
  },
  {
    title: "Product Video Production",
    href: "/services/product-content/product-video-production",
    desc: "Cinematic, high-energy product films for social media and brand launches.",
  },
];

export default function ProductContentLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />

      {/* Background Graphic */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Division: Product Precision
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            Product <br />{" "}
            <span className="text-primary-accent italic">Content_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            "Texture meet technology. We build the photorealistic visual hub for
            India's high-stakes consumer brands."
          </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/30 transition-all flex flex-col gap-8 hover:text-primary-accent transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform hover:bg-white hover:text-primary-accent transition-all duration-300">
                <Package size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-primary-accent transition-colors">
                View Node{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Strategic Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">
              The Optic <br />
              <span className="text-primary-accent italic font-black">
                Success Hub.
              </span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Most product visuals fail to capture detail. We specialize in
              high-fidelity product photography and videography in Kerala and
              across India that communicates quality instantly. From cinematic
              Amazon listings to high-end apparel catalogs, we ensure your
              product looks premium on every screen.
            </p>
            <Link
              href="/contact?service=product-content"
              className="inline-flex h-20 px-12 rounded-full bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              Launch Product Campaign
            </Link>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-xl shadow-primary-accent/10">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
              alt="Elite Product Photography Scene"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>
      </div>
    </main>
  );
}
