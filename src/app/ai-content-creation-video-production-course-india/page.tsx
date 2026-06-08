import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronDown, Play, Star, Video, Camera, Scissors, Target, Layers, Laptop, Globe, MapPin } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";
import LiteYouTube from "@/components/lite-youtube";
import EpicHeroSection from "@/components/course/HeroSection";
import WorkflowTimeline from "@/components/course/WorkflowTimeline";
import CoursePricing from "@/components/course/CoursePricing";
import BrochureSection from "@/components/course/BrochureSection";
import GlassNavbar from "@/components/glass-navbar";
export const metadata: Metadata = {
  title: "Best AI Content Creation & Video Production Course in India | Define Perspective Academy",
  description: "Join India's most comprehensive AI Content Creation and Video Production Program. Learn filmmaking, AI content creation, editing, fashion production, commercial filmmaking, documentary production, and creative business workflows in a professional 50-day certification program.",
  keywords: ["AI Content Creation Course India", "Video Production Course India", "Filmmaking Course India", "AI Video Generation Course", "Content Creator Training India", "Fashion Filmmaking Course", "Documentary Production Course", "AI Creative Course", "Commercial Filmmaking Training", "Video Editing Course India", "Creative Production Academy", "AI Media Training", "Professional Content Creator Certification", "Creative Direction Course", "Digital Content Production Course"],
  openGraph: {
    title: "Best AI Content Creation & Video Production Course in India",
    description: "Join India's most comprehensive AI Content Creation and Video Production Program.",
    type: "website",
    url: "/ai-content-creation-video-production-course-india",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "AI Integrated Content Creation & Video Production Professional Program",
      "description": "Learn filmmaking, AI content creation, editing, fashion production, commercial filmmaking, documentary production, and creative business workflows in a professional 50-day certification program.",
      "provider": {
        "@type": "Organization",
        "name": "Define Perspective Academy",
        "sameAs": "https://www.defineperspective.com"
      },
      "educationalCredentialAwarded": "Define Perspective Certified Professional",
      "timeRequired": "P50D",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "instructor": {
          "@type": "Person",
          "name": "Define Perspective Faculty"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best AI Content Creation Course in Kerala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Define Perspective Academy offers one of the most comprehensive AI-integrated content creation and video production programs in Kerala, combining filmmaking, AI tools, fashion production, editing, and commercial advertising."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an AI filmmaking course in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Define Perspective Academy offers professional AI filmmaking training in Kochi covering AI video generation, storytelling, commercial production, and hybrid filmmaking workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Dubai join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The program is designed for students and professionals from India, UAE, and other GCC countries seeking future-ready creative skills."
          }
        },
        {
          "@type": "Question",
          "name": "Does the course include fashion filmmaking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students learn fashion film production, editorial campaigns, fashion storytelling, and magazine production workflows through real projects and case studies."
          }
        },
        {
          "@type": "Question",
          "name": "What projects will students create?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students create commercial advertisements, documentaries, fashion campaigns, AI films, hybrid productions, portfolio websites, showreels, and magazine projects."
          }
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "Define Perspective Academy",
      "url": "https://www.defineperspective.com"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.defineperspective.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Academy",
          "item": "https://www.defineperspective.com/academy"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI Content Creation & Video Production Course"
        }
      ]
    }
  ]
};

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />

      <EpicHeroSection />

      <section className="py-16 bg-black text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Best AI Content Creation & Video Production Course in India, Kerala & Dubai</h2>
          <p className="text-zinc-400 leading-relaxed">
            Train in commercial filmmaking, AI advertising, fashion production, documentary creation, editing, creative direction, and professional content production through real-world projects and industry workflows. Students build portfolios including commercials, documentaries, fashion campaigns, AI films, hybrid productions, showreels, and portfolio websites.
          </p>
        </div>
      </section>
      {/* Program Overview */}
      <section className="py-20 border-t border-white/10 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollFade className="p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Duration</div>
              <div className="text-3xl font-bold">50 Days</div>
            </ScrollFade>
            <ScrollFade delay={0.1} className="p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Level</div>
              <div className="text-3xl font-bold">Beginner to Pro</div>
            </ScrollFade>
            <ScrollFade delay={0.2} className="p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Certification</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">DP Certified</div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Why This Program */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <ScrollFade>
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-medium text-zinc-500 mb-4">Content Creator Training Program India</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Modern Creators Need Expertise In</h3>
            </div>
          </ScrollFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "AI Content Creation", "Video Production", "Commercial Filmmaking", 
              "Fashion Content Creation", "Documentary Production", "Brand Storytelling", 
              "Social Media Content", "Editing & Post Production", "Creative Direction", 
              "Production Management", "Freelancing", "Agency Workflow"
            ].map((skill, index) => (
              <ScrollFade key={index} delay={index * 0.05} className="p-6 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center gap-3">
                <Target className="w-5 h-5 text-zinc-400" />
                <span className="font-medium text-sm md:text-base">{skill}</span>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollFade>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Integrated Creative Production Program</h2>
              <p className="text-zinc-400 text-lg">Comprehensive modules designed to take you from basics to professional production workflows.</p>
            </div>
          </ScrollFade>

          <div className="space-y-8">
            {[
              {
                title: "Creative Foundations",
                seoHeading: "Creative Direction Course Kerala",
                items: ["Storytelling", "Script Writing", "Visual Language", "Creative Research", "Brand Communication", "Production Workflow"]
              },
              {
                title: "Video Production",
                seoHeading: "Professional Video Production Training in Kerala",
                items: ["Camera Operations", "Cinematography", "Lighting", "Audio Recording", "Commercial Production", "Documentary Production", "Fashion Production"]
              },
              {
                title: "AI Content Creation",
                seoHeading: "AI Video Generation Training Program",
                items: ["Prompt Engineering", "AI Photography", "AI Fashion Models", "AI Advertising", "AI Video Generation", "AI Storytelling", "Hybrid Production"]
              },
              {
                title: "Post Production",
                seoHeading: "Video Editing and Post Production Course",
                items: ["Editing", "Color Grading", "Motion Graphics", "Sound Design", "Visual Effects", "AI-Assisted Editing"]
              },
              {
                title: "Industry & Business",
                seoHeading: "Future of Content Creation Careers",
                items: ["Client Communication", "Budgeting", "Proposal Writing", "Agency Operations", "Freelancing", "Portfolio Development"]
              }
            ].map((module, index) => (
              <ScrollFade key={index} delay={0.1 * index} className="p-8 border border-white/10 rounded-2xl bg-black relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-zinc-800 group-hover:bg-white transition-colors" />
                <h2 className="text-sm font-medium text-zinc-500 mb-2 pl-4">{module.seoHeading}</h2>
                <h3 className="text-2xl font-bold mb-6 pl-4">{module.title}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-zinc-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Real Industry Projects Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollFade className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Our Projects</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8">Learn From Real Industry Productions</h3>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              At Define Perspective, students learn from real productions created by our in-house creative team. From commercial advertisements and documentaries to AI-generated films, fashion campaigns, and hybrid productions, our curriculum is built around actual industry workflows and real-world creative execution.
              <br /><br />
              Explore a selection of our AI and live-action productions that showcase the quality, innovation, and professional standards students are exposed to throughout the program.
            </p>
          </ScrollFade>

          <div className="space-y-32">
            
            {/* Why Define Perspective? (Featured Intro Video) */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFade>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Define Perspective?</h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Watch how Define Perspective combines traditional filmmaking, commercial production, fashion media, and AI-powered content creation into a future-ready creative ecosystem.
                  <br /><br />
                  This video introduces our vision, production capabilities, industry approach, and commitment to building the next generation of creators, filmmakers, and AI content specialists.
                </p>
              </ScrollFade>
              <ScrollFade delay={0.2}>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                  <LiteYouTube videoId="qJwObz6fe-M" title="Why Define Perspective?" />
                </div>
              </ScrollFade>
            </div>

            {/* Commercial & Brand Productions */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFade>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Commercial Filmmaking Certification Program</h2>
                <h3 className="text-xl font-medium text-zinc-400 mb-8">Commercial & Brand Productions</h3>
                <div className="mb-8">
                  <h4 className="font-semibold text-lg mb-4 text-white">Students learn:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-zinc-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Commercial Filmmaking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Brand Storytelling</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Production Planning</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Camera Direction</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Lighting Techniques</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Client Communication</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Professional Editing</li>
                  </ul>
                </div>
              </ScrollFade>
              <ScrollFade delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="sNp1a5I6WsI" title="Commercial Production 1" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="INpn97C16yM" title="Commercial Production 2" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="NEqjeiDThcY" title="Commercial Production 3" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="oP9rsiWbGAE" title="Commercial Production 4" /></div>
              </ScrollFade>
            </div>

            {/* AI Film Production & AI Advertising */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFade delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
                <div className="md:col-span-2 rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video"><LiteYouTube videoId="vGijXeVUS74" title="AI Film Production 1" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="5kOnWP-dZZY" title="AI Advertising 1" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="ViVvFiF-kBQ" title="AI Advertising 2" /></div>
              </ScrollFade>
              <ScrollFade className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Advertising Creation Course</h2>
                <h3 className="text-xl font-medium text-zinc-400 mb-8">AI Film Production & AI Advertising</h3>
                <div className="mb-8">
                  <h4 className="font-semibold text-lg mb-4 text-white">Students Learn:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-zinc-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Video Generation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Advertising Creation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Prompt Engineering</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Fashion Models</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Character Development</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Product Visualization</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Commercial Production</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Hybrid Workflows</li>
                  </ul>
                </div>
              </ScrollFade>
            </div>

            {/* West Vogue Fashion Productions */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFade>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Fashion Film Production Training in India</h2>
                <h3 className="text-xl font-medium text-zinc-400 mb-8">West Vogue Fashion Productions</h3>
                <div className="mb-8">
                  <h4 className="font-semibold text-lg mb-4 text-white">Students Learn:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-zinc-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Fashion Film Production</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Editorial Storytelling</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Photography Direction</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Luxury Content Creation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Magazine Production</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Creative Direction</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Model Direction</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Campaign Development</li>
                  </ul>
                </div>
              </ScrollFade>
              <ScrollFade delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video"><LiteYouTube videoId="HtomLPOzkCU" title="Fashion Production 1" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="-CYvl4ytIFY" title="Fashion Production 2" /></div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10"><LiteYouTube videoId="ic0skwrzA5M" title="Fashion Production 3" /></div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Capstone Projects */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <ScrollFade className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Capstone Projects</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Build an industry-standard portfolio with real-world production projects.</p>
          </ScrollFade>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Commercial Advertisement", "Documentary Film", "Fashion Campaign", 
              "AI Fashion Campaign", "AI Short Film", "Hybrid AI + Live Action Film", 
              "Magazine Cover Design", "Brand Campaign Presentation", "Professional Showreel", "Portfolio Website"
            ].map((project, idx) => (
              <ScrollFade key={idx} delay={idx * 0.05} className="aspect-square p-6 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center gap-4 bg-black hover:bg-zinc-900 transition-colors">
                <Layers className="w-8 h-8 text-zinc-500" />
                <span className="font-semibold text-sm leading-tight">{project}</span>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes & Industry Applications */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          <ScrollFade className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Career Outcomes</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto text-lg">After completing this program, students are equipped to lead creative initiatives across top-tier industries.</p>
          </ScrollFade>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Camera className="w-6 h-6" /> Work In Top Industries
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Advertising Agencies", "Production Houses", "Fashion Brands", 
                  "Media Companies", "Television Production", "Digital Marketing Agencies", 
                  "Creative Agencies", "Startup Marketing Teams", "E-commerce Companies", "AI Creative Studios"
                ].map((industry, i) => (
                  <span key={i} className="px-4 py-2 bg-black/5 rounded-full text-sm font-medium cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-6 h-6" /> Independent Careers
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Content Creators", "Filmmakers", "Video Editors", "AI Content Specialists",
                  "Fashion Content Creators", "Documentary Producers", "Commercial Directors",
                  "Creative Consultants", "Freelancers"
                ].map((role, i) => (
                  <span key={i} className="px-4 py-2 border border-black/10 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors cursor-default">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Across India & UAE Choose DP AI STUDIOS */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollFade className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Students Across India & UAE Choose DP AI STUDIOS</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Our AI-integrated curriculum prepares students for the future of content creation, filmmaking, advertising, fashion media, and creative business.
            </p>
          </ScrollFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollFade delay={0.1} className="p-8 border border-white/10 rounded-2xl bg-zinc-950">
              <MapPin className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Kerala</h3>
              <p className="text-zinc-400 leading-relaxed">Kochi, Trivandrum, Calicut, Thrissur, Kottayam, Kannur, Malappuram</p>
            </ScrollFade>
            
            <ScrollFade delay={0.2} className="p-8 border border-white/10 rounded-2xl bg-zinc-950">
              <Globe className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">South India</h3>
              <p className="text-zinc-400 leading-relaxed">Bangalore, Chennai, Hyderabad, Coimbatore, Mysore, Mangalore</p>
            </ScrollFade>
            
            <ScrollFade delay={0.3} className="p-8 border border-white/10 rounded-2xl bg-zinc-950">
              <Target className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Metro Cities</h3>
              <p className="text-zinc-400 leading-relaxed">Mumbai, Delhi NCR, Pune, Ahmedabad, Kolkata</p>
            </ScrollFade>
            
            <ScrollFade delay={0.4} className="p-8 border border-white/10 rounded-2xl bg-zinc-950">
              <Globe className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">GCC & Middle East</h3>
              <p className="text-zinc-400 leading-relaxed">Dubai, Abu Dhabi, Sharjah, UAE, Qatar, Oman, Saudi Arabia, Kuwait</p>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Real Production Workflows */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollFade className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Learn the Professional Workflow Used by Production Houses, Creative Agencies, Fashion Studios & AI Content Companies</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">Real Production Workflows</h3>
            <p className="text-xl text-zinc-400 leading-relaxed">
              This workflow is based on real-world commercial productions, fashion campaigns, documentaries, AI films, and brand content projects executed by the Define Perspective team. It gives students exposure to the complete lifecycle of modern content creation—from client brief to final campaign delivery.
            </p>
          </ScrollFade>

          <WorkflowTimeline />
        </div>
      </section>

      <CoursePricing />

      <BrochureSection />

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollFade className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </ScrollFade>
          
          <div className="space-y-6">
            {[
              {
                q: "Which is the best AI Content Creation Course in Kerala?",
                a: "Define Perspective Academy offers one of the most comprehensive AI-integrated content creation and video production programs in Kerala, combining filmmaking, AI tools, fashion production, editing, and commercial advertising."
              },
              {
                q: "Is there an AI filmmaking course in Kochi?",
                a: "Yes. Define Perspective Academy offers professional AI filmmaking training in Kochi covering AI video generation, storytelling, commercial production, and hybrid filmmaking workflows."
              },
              {
                q: "Can students from Dubai join?",
                a: "Yes. The program is designed for students and professionals from India, UAE, and other GCC countries seeking future-ready creative skills."
              },
              {
                q: "Does the course include fashion filmmaking?",
                a: "Yes. Students learn fashion film production, editorial campaigns, fashion storytelling, and magazine production workflows through real projects and case studies."
              },
              {
                q: "What projects will students create?",
                a: "Students create commercial advertisements, documentaries, fashion campaigns, AI films, hybrid productions, portfolio websites, showreels, and magazine projects."
              }
            ].map((faq, index) => (
              <ScrollFade key={index} delay={index * 0.05} className="group">
                <details className="border border-white/10 rounded-xl bg-zinc-950 p-6 cursor-pointer [&_svg]:open:-rotate-180 transition-all">
                  <summary className="font-semibold text-lg flex items-center justify-between list-none">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-zinc-500 transition-transform duration-300" />
                  </summary>
                  <p className="mt-4 text-zinc-400 leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </details>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking / Topic Clusters */}
      <section className="py-24 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8 text-center">Explore Related Services & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {[
              { name: "AI Content Creation Course in Kerala", href: "/ai-content-creation-video-production-course-india" },
              { name: "Video Production Training in Kochi", href: "/ai-content-creation-video-production-course-india" },
              { name: "Commercial Filmmaking Course in India", href: "/ai-content-creation-video-production-course-india" },
              { name: "Fashion Film Production Training", href: "/ai-content-creation-video-production-course-india" },
              { name: "AI Filmmaking Academy India", href: "/ai-content-creation-video-production-course-india" },
              { name: "Learn From Real Industry Productions", href: "/ai-content-creation-video-production-course-india" },
              { name: "AI Advertising & Brand Content Creation", href: "/ai-content-creation-video-production-course-india" },
              { name: "Hybrid AI + Live Action Production Training", href: "/ai-content-creation-video-production-course-india" },
              { name: "Creative Media Academy for Future Creators", href: "/ai-content-creation-video-production-course-india" },
              { name: "Professional Content Creator Certification Program", href: "/ai-content-creation-video-production-course-india" }
            ].map((link, i) => (
              <h2 key={i} className="m-0">
                <Link href={link.href} className="inline-block px-5 py-2.5 rounded-full bg-black border border-white/5 hover:border-white/20 transition-colors text-zinc-300 hover:text-white font-normal">
                  {link.name}
                </Link>
              </h2>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Lead Capture */}
      <a 
        href="https://wa.me/917012941696?text=Hello%20Define%20Perspective,%20I%20am%20interested%20in%20the%20AI%20Integrated%20Content%20Creation%20%26%20Video%20Production%20Professional%20Program.%20Please%20share%20course%20details,%20fees,%20upcoming%20batch%20dates,%20and%20admission%20process."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[5000] flex items-center gap-4 group"
      >
        <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl hidden md:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 shadow-2xl">
          <span className="text-white font-semibold text-sm">Talk to an Admission Advisor</span>
          <span className="text-zinc-400 text-xs">Get Course Details Instantly</span>
        </div>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 transition-all duration-300 relative">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-black">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </div>
      </a>

    </main>
  );
}
