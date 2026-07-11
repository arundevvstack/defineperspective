import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import GlassFooter from "@/components/glass-footer";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo-schema";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Building2, Zap, Target, Star, PlayCircle, MapPin, Film, Layers, MonitorPlay, BarChart, Smartphone, Shield, Clock, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Video Production for Real Estate in India | Property Video Agency | DP AI Studios",
  description: "AI video production for real estate developers, builders, architects and property brands. Create luxury property walkthroughs, AI commercials, launch films and social media campaigns across India.",
  keywords: [
    // Old keywords
    "AI Video Production for Real Estate",
    "Real Estate Video Production India",
    "Property Video Production Company",
    "AI Property Walkthrough",
    "Builder Promotional Videos",
    "Luxury Real Estate Video",
    "Real Estate Marketing Videos",
    "AI Commercials for Builders",
    "Architectural Visualization Videos",
    "Real Estate Advertising Agency India",
    // New keywords
    "Property Video Production",
    "Luxury Property Videos",
    "Property Marketing Videos",
    "Real Estate Commercial Production",
    "Real Estate Video Agency India",
    "Luxury Real Estate Marketing",
    "Builder Launch Campaign",
    "Construction Marketing Videos",
    "Residential Project Videos",
    "Commercial Property Videos",
    "AI Drone Videos",
    "Property Explainer Videos",
    "Architectural Visualization",
    "AI Advertising for Builders"
  ],
  alternates: {
    canonical: "https://defineperspective.in/industries/real-estate",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Video Production for Real Estate | Property Video Production Company India | DP AI Studios",
    description: "Cinematic property films, walkthrough videos, and AI commercials across India.",
    url: "https://defineperspective.in/industries/real-estate",
    siteName: "Define Perspective",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Production for Real Estate | DP AI Studios",
    description: "Cinematic property films, walkthrough videos, and AI commercials across India.",
  },
};

const faqs = [
  // ORIGINAL FAQS (Preserved for SEO)
  {
    question: "What is AI video production for real estate, and how does it differ from traditional video production?",
    answer: "AI video production for real estate utilizes generative artificial intelligence, advanced motion graphics, and predictive storytelling to create high-end property videos. Unlike traditional video production which relies heavily on expensive physical shoots, large crews, and extended timelines, AI video production streamlines the process. We can generate hyper-realistic architectural visualizations, enhance drone footage, and create immersive walkthroughs in a fraction of the time, lowering costs while maintaining cinematic luxury."
  },
  {
    question: "How can AI video production help my real estate marketing campaigns?",
    answer: "AI video production significantly boosts real estate marketing by providing highly engaging, visually stunning assets that capture buyer attention. With our property video production company in India, you get access to dynamic AI commercials, social media reels, and luxury walkthroughs that increase engagement rates, improve lead generation, and accelerate sales velocity. We tailor the storytelling to highlight your project's unique selling propositions."
  },
  {
    question: "Do you provide AI property walkthrough videos for under-construction projects?",
    answer: "Yes! AI property walkthroughs are incredibly effective for under-construction or off-plan projects. We can take your architectural CAD files, blueprints, or 3D models and use AI to create photorealistic, fully staged virtual walkthroughs. This allows potential buyers to experience the luxury and layout of the property long before the physical construction is completed, facilitating faster presales."
  },
  {
    question: "What types of real estate projects do you create videos for?",
    answer: "Define Perspective handles AI video production for a wide spectrum of real estate projects. This includes luxury villas, premium apartment complexes, large-scale townships, commercial office spaces, retail malls, hospitality projects (hotels and resorts), and bespoke architectural designs. Our builder promotional videos are customized to the scale and prestige of the specific development."
  },
  {
    question: "Are your real estate marketing videos optimized for social media?",
    answer: "Absolutely. We understand that modern homebuyers consume content on Instagram, YouTube, and LinkedIn. Our AI video production pipeline is designed to deliver social-first campaigns. We produce vertical video formats, engaging AI social media reels, and short-form property teasers that are optimized for algorithms, ensuring maximum reach and engagement across all digital platforms."
  },
  {
    question: "How long does it take to produce a luxury real estate video using AI?",
    answer: "The timeline depends on the scope of the project, but AI significantly reduces turnaround times compared to traditional methods. While a traditional luxury real estate video might take weeks or months to shoot and edit, our AI-assisted workflows allow us to deliver high-quality, cinematic builder promotional videos and commercials in a matter of days or a few weeks, ensuring you meet tight launch deadlines."
  },
  {
    question: "Can you create multi-lingual real estate advertising videos for different regions in India?",
    answer: "Yes, this is one of the most powerful advantages of AI video production. We can rapidly generate multiple language versions of your real estate commercials using AI dubbing, voiceovers, and dynamic text replacements. This allows real estate developers to launch pan-India campaigns or target specific regional markets across India with localized, highly relevant content without the cost of re-shooting."
  },
  {
    question: "Why should real estate developers choose Define Perspective over a standard advertising agency?",
    answer: "Define Perspective is a specialized AI video production company, not just a general real estate advertising agency in India. We combine deep expertise in generative AI technology with enterprise-grade cinematic production standards. Our process offers faster revisions, lower production costs, and visually superior output. We don't just make videos; we architect high-converting visual assets engineered for ROI."
  },
  {
    question: "What is the cost of AI video production for real estate in India?",
    answer: "The cost is highly competitive and often much more efficient than traditional high-end production. Pricing varies based on the deliverables—whether you need a single AI social media reel, a comprehensive 3-minute luxury property film, or an entire suite of launch campaign assets. We offer customized packages tailored to the marketing budgets of builders, developers, and architects. Contact us for a detailed strategy session and quote."
  },
  {
    question: "How do we start a real estate video production project with you?",
    answer: "Starting is simple. You can book a free strategy session with our creative team through our website. During discovery, we will discuss your property, target audience, brand guidelines, and marketing objectives. We then propose a creative strategy, storyboard, and production timeline for your AI commercials or property walkthroughs."
  },
  // NEW FAQS (Additive enhancements)
  {
    question: "What is AI real estate video production?",
    answer: "AI real estate video production leverages advanced artificial intelligence tools to automate, enhance, and synthesize high-end video content for the property market. It replaces many traditional, manual elements of architectural visualization and live-action shooting with generative AI. This means we can create photorealistic property walkthroughs, virtually stage empty apartments, seamlessly alter lighting conditions from day to dusk, and dynamically generate environments without physical constraints. The result is cinematic storytelling that is faster, more cost-effective, and incredibly versatile, specifically engineered to capture the imagination of high-net-worth real estate buyers."
  },
  {
    question: "How much does an AI property commercial cost?",
    answer: "The cost of an AI property commercial depends significantly on the complexity of the project, the length of the video, and the scope of the architectural assets required. However, compared to traditional high-end commercial production—which requires large on-location crews, extensive equipment, and days of shooting—AI production offers substantial cost efficiencies. Typically, a comprehensive luxury launch film created with our AI pipeline can deliver a premium cinematic experience at a fraction of the budget of conventional methods, allowing developers to allocate more resources to media buying and campaign amplification. We provide bespoke quotes after an initial strategy consultation."
  },
  {
    question: "How long does production take?",
    answer: "Production timelines are drastically reduced with our AI-first approach. While a traditional luxury real estate video might take months to plan, shoot, edit, and color grade, our generative pipelines allow us to deliver world-class property commercials in a matter of weeks, and sometimes even days for social-first content. Because we minimize physical dependencies—like weather delays or permit approvals—the turnaround is vastly accelerated. Rapid iteration capabilities mean we can revise architectural details or adjust virtual staging almost instantly, ensuring you meet your most aggressive project launch deadlines."
  },
  {
    question: "Can AI create luxury walkthroughs?",
    answer: "Absolutely. Creating luxury AI property walkthroughs is one of the most powerful applications of our technology. By taking your existing CAD files, blueprints, or raw 3D models, our AI systems can generate breathtakingly realistic environments. We don't just render walls; we infuse spaces with atmosphere, cinematic lighting, and premium virtual staging that reflects the pinnacle of interior design. These walkthroughs allow prospective buyers to experience the true scale, aesthetic, and luxury of a property long before physical construction is even completed, dramatically improving off-plan sales conversions."
  },
  {
    question: "Do you work across India?",
    answer: "Yes, DP AI Studios operates as a premier property video agency serving clients nationwide. Whether you are launching a sprawling township in Bengaluru, marketing ultra-luxury sea-facing apartments in Mumbai, developing commercial IT parks in Hyderabad, or building bespoke villas in Kerala and Delhi, our digital-first workflow means geographical boundaries do not limit our capabilities. We routinely collaborate remotely with architects and developers across India, ensuring seamless communication and the delivery of assets that resonate deeply with both local and national investor demographics."
  },
  {
    question: "Can you produce multilingual videos?",
    answer: "Multilingual video production is seamlessly integrated into our AI workflow. In a diverse market like India, launching a real estate campaign in English, Hindi, and regional languages (such as Malayalam, Tamil, Telugu, or Marathi) is crucial for maximizing reach. Using advanced AI dubbing, voice synthesis, and dynamic text replacement, we can instantly generate localized versions of your property commercials without the immense cost and logistical nightmare of re-recording human voiceovers or re-editing text graphics manually for each language."
  },
  {
    question: "Can drone footage be enhanced with AI?",
    answer: "Yes, AI drone enhancement is a game-changer for property marketing. If you have raw drone footage of a construction site or the surrounding neighborhood, our AI tools can upscale the resolution, stabilize jittery camera movements, and significantly enhance color grading to a cinematic standard. Furthermore, we can use AI to seamlessly blend 3D architectural renders of your future project into the live-action drone footage, creating hyper-realistic composite shots that show exactly how the finished building will sit within its real-world environment."
  },
  {
    question: "Can AI create launch films?",
    answer: "AI is exceptionally well-suited for creating highly emotional, visually spectacular builder launch films. A successful launch campaign requires more than just showing a building; it requires selling a vision, a lifestyle, and a sense of prestige. By combining generative AI visuals with human-driven creative strategy, we craft launch films that are dramatic, engaging, and memorable. From sweeping cinematic intros to intimate lifestyle vignettes, AI enables us to storyboard and execute launch videos that build immense hype and anticipation for your new development."
  },
  {
    question: "What industries do you serve?",
    answer: "Within the broader real estate sector, our AI video production services cater to a wide array of specialized verticals. We partner with tier-one residential builders for luxury villas and apartment complexes, developers of large-scale integrated townships, and commercial real estate firms constructing office spaces and malls. Additionally, we provide tailored visual solutions for the hospitality sector, including hotels and resorts, as well as serving top-tier architects, interior designers, and construction companies who need to showcase their design prowess and project scale."
  },
  {
    question: "How do I start a project?",
    answer: "Starting a project with DP AI Studios is straightforward and collaborative. The first step is to request a consultation through our website. We'll schedule a discovery call to deeply understand your project, your brand identity, your target audience, and your specific campaign goals. From there, we develop a custom creative strategy and provide a detailed proposal including timelines and costs. Once approved, our team begins the AI production process, working closely with you through storyboarding and asset generation to ensure the final videos perfectly align with your vision."
  }
];

export default function RealEstateIndustryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
    { name: "Real Estate AI Video Production", item: "/industries/real-estate" },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Production for Real Estate",
    "description": "Premium AI video production for real estate developers, builders, architects, and property brands across India. Specializing in cinematic property films, AI walkthroughs, and luxury commercials.",
    "provider": {
      "@type": "Organization",
      "@id": "https://defineperspective.in/#organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" }
    ]
  };

  const jsonLd = [breadcrumbSchema, faqSchema, serviceSchema];

  return (
    <main className="min-h-screen bg-obsidian text-white relative overflow-hidden selection:bg-primary-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/10 blur-[250px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none opacity-30" />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 z-10 text-center md:text-left border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
            <div className="px-5 py-2 rounded-full text-xs font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md border border-primary-accent/20">
              Industry Vertical: Real Estate
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] text-white italic mb-8 drop-shadow-2xl">
            AI Video Production <br />
            <span className="text-primary-accent font-black">for Real Estate in India</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 tracking-wide mb-12">
            Create cinematic property films, AI walkthroughs, luxury project launches, commercial real estate campaigns, builder branding films and social media content that converts viewers into buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-16">
            <Link
              href="/contact?subject=Real Estate Video Production"
              className="inline-flex h-16 px-10 rounded-full bg-primary-accent text-obsidian font-black items-center justify-center uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(var(--primary-accent-rgb),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary-accent-rgb),0.5)]"
            >
              Get Free Consultation <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-16 px-10 rounded-full bg-transparent border-2 border-white/20 text-white font-bold items-center justify-center uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              View Portfolio <PlayCircle className="ml-3 w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            {[
              { icon: Zap, label: "AI Powered" },
              { icon: Clock, label: "Fast Delivery" },
              { icon: Star, label: "Premium Cinematic Quality" },
              { icon: MapPin, label: "Nationwide Service" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-400 text-sm uppercase tracking-wider font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <badge.icon className="w-4 h-4 text-primary-accent" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: Why AI for Real Estate */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10 bg-white/[0.02]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic">
              Why AI <span className="text-primary-accent">For Real Estate?</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-4xl leading-relaxed">
              The real estate market in India is highly competitive and evolving at breakneck speed. To stand out, developers must captivate buyers with immersive, high-end visual experiences long before construction concludes. Traditional real estate video production companies are often hindered by slow processes, prohibitive CGI costs, weather dependencies, and logistical nightmares. Our AI video production pipeline completely revolutionizes property marketing, delivering unprecedented quality, speed, and versatility. By adopting AI-driven creative strategies, top-tier builders can ensure their luxury projects command the attention and prestige they deserve in a crowded marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Faster Campaign Creation", desc: "Cut production time from months to weeks or days. Get your builder promotional videos to market faster exactly when buyer demand peaks." },
              { icon: Target, title: "Lower Production Cost", desc: "Eliminate massive crew costs, location logistics, and extensive post-production teams. AI video production significantly reduces overheads traditionally associated with luxury campaigns." },
              { icon: Star, title: "Luxury Cinematic Visuals", desc: "Hyper-realistic architectural visualization and cinematic property films that elevate your brand prestige and attract high-net-worth individuals." },
              { icon: Building2, title: "AI Walkthroughs", desc: "Transform static blueprints into breathtakingly realistic, fully immersive walkthroughs that allow prospective buyers to virtually experience the luxury of the property." },
              { icon: Smartphone, title: "Multi Language Versions", desc: "Instantly generate regional language versions using AI dubbing for pan-India real estate advertising campaigns." },
              { icon: BarChart, title: "High Social Media Performance", desc: "Optimized vertical formats for AI social media reels, Instagram, and performance marketing ads designed for viral engagement." },
              { icon: Film, title: "AI Storytelling", desc: "We don't just show walls; we sell lifestyles through compelling, AI-driven narrative storytelling." },
              { icon: Layers, title: "Faster Revisions", desc: "Traditional CGI takes weeks to tweak. AI allows for rapid iterations and architectural changes, ensuring flexibility." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-accent/50 hover:bg-white/10 transition-all group">
                <feature.icon className="w-10 h-10 text-primary-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{feature.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed text-lg">
            <p className="mb-6">
              When launching a new luxury villa project, an expansive integrated township, or a state-of-the-art commercial property, the visual narrative is your strongest asset. <strong>Real estate video production in India</strong> has evolved rapidly. Today, prospective buyers expect an immersive experience that traditional photography simply cannot provide. They want to feel the ambiance, understand the lifestyle, and visualize themselves within the space. This is precisely where <em>Define Perspective</em> steps in as a leading property video production company.
            </p>
            <p className="mb-6">
              By leveraging advanced generative AI models, we produce <strong>AI property walkthroughs</strong> that allow buyers to visualize spaces before the first brick is laid. For completed projects, our <strong>luxury real estate videos</strong> combine cinematic FPV drone cinematography with AI enhancements—such as virtual staging and dynamic lighting adjustments—to present the property in its absolute best light, regardless of the physical shooting conditions.
            </p>
            <p>
              Furthermore, real estate marketing videos need to perform across diverse platforms. A long-form corporate film might work for a sales gallery, but you need punchy, 15-second <strong>AI commercials for builders</strong> for Instagram and Facebook ads. Our enterprise pipeline ensures you receive a comprehensive suite of assets, perfectly formatted and optimized for every touchpoint of your customer's journey.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Services */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic">
                Our Specialized <span className="text-primary-accent">Services</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
                Comprehensive AI video production solutions tailored for the real estate and construction ecosystem, designed to elevate property marketing and accelerate sales.
              </p>
            </div>
            <Link href="/services" className="text-primary-accent hover:text-white uppercase tracking-widest font-bold flex items-center gap-2 transition-colors">
              Explore All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI Property Commercials",
              "Luxury Launch Films",
              "Residential Campaign Videos",
              "Commercial Property Videos",
              "Drone + AI Enhancement",
              "Builder Brand Films",
              "Social Media Reels",
              "Property Walkthrough Videos",
              "Architect Presentation Videos",
              "Construction Progress Videos",
              "Virtual Property Tours"
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary-accent/50 transition-all flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary-accent" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide">{service}</h3>
              </div>
            ))}
          </div>

          {/* RESTORED CTA BLOCK */}
          <div className="mt-16 bg-primary-accent/5 border border-primary-accent/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-black uppercase mb-4">Need a custom Architectural Visualization Video?</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">We transform CAD files and raw 3D renders into breathtaking, photorealistic cinematic animations using our proprietary AI rendering pipelines.</p>
            <Link href="/contact" className="inline-flex h-12 px-8 rounded-full bg-white text-obsidian font-bold items-center justify-center uppercase tracking-wider hover:bg-primary-accent transition-all">
              Request a Custom Quote
            </Link>
          </div>

          <div className="mt-20 prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed text-lg">
            <p className="mb-6">
              Our <Link href="/ai-video-production-services" className="text-primary-accent underline hover:text-white">AI video production services</Link> are meticulously categorized to ensure that whether you are a boutique architect or a national builder, you receive exactly what you need. <strong>Luxury Launch Films</strong> are designed to create massive impact during the initial unveiling of a project, utilizing cinematic storytelling to build prestige. Our <strong>Property Walkthrough Videos</strong> serve as the ultimate conversion tool, giving buyers a hyper-realistic sense of space and layout.
            </p>
            <p>
              For ongoing marketing efforts, our <strong>Social Media Reels</strong> and <strong>Drone + AI Enhancement</strong> services ensure your digital presence remains dominant and engaging. We don't just create standalone videos; we architect cohesive, multi-format visual campaigns that ensure your real estate brand remains top-of-mind for prospective buyers across India.
            </p>
          </div>
        </div>
      </section>

      {/* RESTORED SECTION: Production Process */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10 bg-black/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic">
              Our Production <span className="text-primary-accent">Process</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
              A streamlined, enterprise-grade AI video production workflow designed for speed, quality, and collaboration with real estate developers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Understanding the property, target demographic, and brand guidelines." },
              { num: "02", title: "Creative Strategy", desc: "Developing the core concept and narrative arc for the real estate marketing video." },
              { num: "03", title: "Storyboard", desc: "Visualizing the flow, key architectural highlights, and transitions." },
              { num: "04", title: "AI Asset Creation", desc: "Generating virtual staging, environments, and high-fidelity visuals." },
              { num: "05", title: "Motion Design", desc: "Animating elements, adding cinematic camera movements, and typography." },
              { num: "06", title: "Voiceover", desc: "Integrating premium AI voiceovers or human talent in multiple languages." },
              { num: "07", title: "Editing", desc: "Crafting the final cut with color grading, sound design, and music." },
              { num: "08", title: "Delivery", desc: "Exporting multiple aspect ratios optimized for web, social, and presentations." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl md:text-8xl font-black text-white/5 absolute -top-8 -left-4 z-0 pointer-events-none italic">
                  {step.num}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold uppercase text-primary-accent mb-4">{step.title}</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Industries We Work With */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 italic">
                Sectors We <span className="text-primary-accent">Serve</span>
              </h2>
              <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed mb-10 text-lg">
                <p>
                  As a premier <strong>real estate advertising agency in India</strong>, our AI video production services are utilized across the entire spectrum of property development and architectural design. The real estate ecosystem is vast and varied, and our capabilities are highly adaptable to serve its diverse facets. 
                </p>
                <p>
                  Marketing a serene luxury villa requires a vastly different emotional tone and visual pacing than launching a bustling, high-density commercial IT park. We understand these critical nuances. Whether you are an elite residential developer launching a sprawling new township, a visionary architect looking to showcase bespoke residential designs, or a hospitality brand unveiling a five-star resort, our creative team crafts tailored, high-impact visual narratives designed to captivate your specific target audience and drive decisive action.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "Residential Developers",
                "Luxury Builders",
                "Luxury Villas",
                "Apartments",
                "Commercial Projects",
                "Townships",
                "Hotels",
                "Resorts",
                "Architects",
                "Interior Designers",
                "Construction Companies"
              ].map((industry, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center font-bold text-sm uppercase tracking-wider hover:bg-primary-accent hover:text-obsidian transition-colors cursor-default flex items-center justify-center">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Portfolio Showcase */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic">
                Portfolio <span className="text-primary-accent">Showcase</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                Explore our recent AI video production projects for the real estate sector. Witness the intersection of cinematic art and generative technology.
              </p>
            </div>
            <Link href="/portfolio" className="text-primary-accent hover:text-white uppercase tracking-widest font-bold flex items-center gap-2 transition-colors">
              View All Work <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black">
              <div className="aspect-video relative w-full h-full bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-primary-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Placeholder for video/image */}
                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                  <PlayCircle className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500 group-hover:text-primary-accent" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-black text-primary-accent uppercase tracking-widest mb-2 block">Luxury Villas</span>
                    <h3 className="text-2xl font-bold uppercase text-white">Azure Heights Launch Film</h3>
                  </div>
                </div>
                <p className="text-zinc-400 font-light mb-6">
                  A sweeping cinematic launch film utilizing AI environmental generation to showcase a premium upcoming villa project before construction began.
                </p>
                <Link href="/portfolio" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white hover:text-primary-accent transition-colors">
                  View Portfolio <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black">
              <div className="aspect-video relative w-full h-full bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-primary-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                  <PlayCircle className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500 group-hover:text-primary-accent" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-black text-primary-accent uppercase tracking-widest mb-2 block">Commercial Projects</span>
                    <h3 className="text-2xl font-bold uppercase text-white">TechHub IT Park Walkthrough</h3>
                  </div>
                </div>
                <p className="text-zinc-400 font-light mb-6">
                  Hyper-realistic AI architectural visualization and walkthrough for a massive commercial IT park, highlighting world-class amenities and office spaces.
                </p>
                <Link href="/portfolio" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white hover:text-primary-accent transition-colors">
                  View Portfolio <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why DP AI Studios */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic">
              Why <span className="text-primary-accent">DP AI Studios?</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
              We are not just a video agency; we are your strategic visual partners, combining cutting-edge technology with world-class creative storytelling to dominate the real estate sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Premium AI workflows", desc: "We utilize proprietary generative pipelines, not just off-the-shelf tools, ensuring unmatched visual fidelity." },
              { title: "Fast turnaround", desc: "Meet strict launch deadlines with our accelerated production cycles." },
              { title: "National coverage", desc: "Serving real estate developers in Mumbai, Bangalore, Delhi, Kochi, and across India." },
              { title: "Luxury cinematic quality", desc: "Every frame is treated with the care of a high-end commercial film." },
              { title: "Enterprise production pipeline", desc: "Scalable solutions capable of handling massive township campaigns and multi-channel asset generation." },
              { title: "Experienced creative team", desc: "A blend of traditional filmmakers, motion designers, and AI technologists." },
              { title: "SEO-ready marketing assets", desc: "Videos designed to integrate seamlessly into your digital marketing and SEO strategies." },
              { title: "End-to-end production", desc: "From initial storyboarding and AI generation to final color grading and multi-format delivery, we handle it all." }
            ].map((reason, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm">
                <h3 className="text-lg font-black uppercase text-white mb-4">{reason.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed text-lg text-center mx-auto max-w-4xl">
            <p>
              Choosing the right partner for your real estate marketing is a critical decision. DP AI Studios stands out because we deeply understand the nuances of property marketing in India. We know how to highlight the unique selling propositions of a project, whether it's the sweeping views of a luxury penthouse or the strategic location of a commercial hub. Our commitment to an <strong>AI-first production pipeline</strong> ensures that you receive visually stunning, highly effective marketing assets that drive tangible ROI. We invite you to explore our work and see the difference that true cinematic storytelling combined with advanced AI can make for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Frequently Asked Questions */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic">
              Frequently Asked <span className="text-primary-accent">Questions</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Everything you need to know about our AI video production process for real estate.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">
                  {faq.question}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10 text-center">
        <div className="container mx-auto max-w-5xl bg-gradient-to-br from-primary-accent/20 to-transparent border border-primary-accent/30 rounded-[3rem] p-12 md:p-24 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/20 blur-[100px] rounded-full"></div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-8 italic text-white relative z-10">
            Let's Build Your Next <span className="text-primary-accent block mt-2">Real Estate Campaign</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light mb-12 max-w-3xl mx-auto relative z-10">
            Create premium property videos powered by AI and cinematic storytelling. Elevate your brand, engage buyers, and accelerate sales with India's leading AI video agency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex h-20 px-12 rounded-full bg-primary-accent text-obsidian font-black items-center justify-center uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(var(--primary-accent-rgb),0.4)]"
            >
              Request Consultation <ArrowRight className="ml-4 w-6 h-6" />
            </Link>
            <Link
              href="/contact?subject=Quote"
              className="inline-flex h-20 px-12 rounded-full bg-transparent border-2 border-white/30 text-white font-bold items-center justify-center uppercase tracking-widest text-lg hover:bg-white/10 transition-all"
            >
              Get Quote
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-zinc-400 font-bold uppercase tracking-widest relative z-10">
            <Link href="/about" className="hover:text-primary-accent transition-colors">About Us</Link>
            <span>|</span>
            <Link href="/locations/kerala" className="hover:text-primary-accent transition-colors">Kerala</Link>
            <span>|</span>
            <Link href="/locations/kochi" className="hover:text-primary-accent transition-colors">Kochi</Link>
          </div>
        </div>
      </section>

      <GlassFooter />
    </main>
  );
}
