"use client";

import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export default function TestHome10() {
  return (
    <main className="min-h-screen bg-[#1a0f0a] overflow-hidden">
      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes morphBlob1 {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%;
            transform: rotate(180deg) scale(1.05);
          }
          75% {
            border-radius: 60% 40% 60% 30% / 70% 30% 50% 40%;
          }
        }

        @keyframes morphBlob2 {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: rotate(0deg) scale(1);
          }
          33% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          66% {
            border-radius: 30% 60% 40% 70% / 50% 70% 30% 50%;
            transform: rotate(-180deg) scale(1.08);
          }
        }

        @keyframes morphBlob3 {
          0%, 100% {
            border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
          }
          50% {
            border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) translateX(-15px) rotate(5deg);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }

        @keyframes drip {
          0% {
            transform: translateY(-100%) scaleY(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) scaleY(1.5);
            opacity: 0;
          }
        }

        @keyframes staggerFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes liquidWave {
          0%, 100% {
            d: path("M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,300 L0,300 Z");
          }
          50% {
            d: path("M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,300 L0,300 Z");
          }
        }

        .animate-morph1 {
          animation: morphBlob1 12s ease-in-out infinite;
        }

        .animate-morph2 {
          animation: morphBlob2 15s ease-in-out infinite;
        }

        .animate-morph3 {
          animation: morphBlob3 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: floatMedium 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .stagger-fade-in {
          animation: staggerFadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }

        @keyframes blobFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .blob-fade-in {
          animation: blobFadeIn 1.5s ease-out forwards;
        }

        .blob-delay-1 { animation-delay: 0.3s; }
        .blob-delay-2 { animation-delay: 0.5s; }

        .mole-gradient {
          background: linear-gradient(
            135deg,
            #2d1810 0%,
            #4a2820 25%,
            #6b3a2a 50%,
            #8b4513 75%,
            #cd853f 100%
          );
        }

        .blob-mask {
          clip-path: polygon(
            50% 0%, 80% 10%, 100% 35%, 100% 70%, 
            80% 90%, 50% 100%, 20% 90%, 0% 70%, 
            0% 35%, 20% 10%
          );
        }

        .organic-shape {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div 
          className="absolute inset-0 animate-gradient"
          style={{
            background: `linear-gradient(
              -45deg,
              #1a0f0a,
              #2d1810,
              #3d1f15,
              #4a2820,
              #2d1810,
              #1a0f0a
            )`,
            backgroundSize: "400% 400%",
          }}
        />

        {/* Floating Mole Blobs */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] animate-morph1 animate-float-slow blob-fade-in"
          style={{
            background: "radial-gradient(ellipse at 30% 30%, #6b3a2a 0%, #4a2820 50%, transparent 70%)",
          }}
        />
        <div 
          className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] animate-morph2 animate-float-medium blob-fade-in blob-delay-1"
          style={{
            background: "radial-gradient(ellipse at 70% 70%, #8b4513 0%, #4a2820 40%, transparent 70%)",
          }}
        />
        <div 
          className="absolute top-[30%] left-[5%] w-[300px] h-[300px] animate-morph3 animate-pulse-glow blob-fade-in blob-delay-2"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, #cd853f 0%, #8b4513 30%, transparent 60%)",
          }}
        />

        {/* Dripping Sauce Elements */}
        <div className="absolute top-0 left-[15%] w-2 h-32 bg-gradient-to-b from-[#cd853f] to-transparent rounded-full opacity-30"
          style={{ animation: "drip 8s ease-in infinite", animationDelay: "0s" }}
        />
        <div className="absolute top-0 left-[35%] w-3 h-40 bg-gradient-to-b from-[#8b4513] to-transparent rounded-full opacity-25"
          style={{ animation: "drip 10s ease-in infinite", animationDelay: "2s" }}
        />
        <div className="absolute top-0 right-[25%] w-2 h-28 bg-gradient-to-b from-[#6b3a2a] to-transparent rounded-full opacity-35"
          style={{ animation: "drip 7s ease-in infinite", animationDelay: "4s" }}
        />
        <div className="absolute top-0 right-[10%] w-4 h-36 bg-gradient-to-b from-[#cd853f] to-transparent rounded-full opacity-20"
          style={{ animation: "drip 12s ease-in infinite", animationDelay: "1s" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 stagger-fade-in stagger-1">
            <Image
              src="/img/DoloresBrand-02.png"
              alt="Dolores PVD"
              width={280}
              height={280}
              unoptimized
              className="mx-auto drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 40px rgba(205, 133, 63, 0.3))" }}
              priority
            />
          </div>

          {/* Tagline */}
          <p 
            className="text-[#cd853f] text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase mb-6 font-quiche-regular stagger-fade-in stagger-2"
          >
            Contemporary Mexican
          </p>

          {/* Main Headline */}
          <h1 
            className="text-[#f5e6d3] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-quiche-bold leading-[0.9] mb-8 stagger-fade-in stagger-3"
            style={{ textShadow: "0 0 60px rgba(205, 133, 63, 0.4)" }}
          >
            From the <span className="text-[#cd853f]">Mixteca</span><br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-quiche-regular italic opacity-80">to your table</span>
          </h1>

          {/* Description */}
          <p 
            className="text-[#d4c4b5] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed stagger-fade-in stagger-4"
          >
            Celebrating the rich traditions of Puebla and Oaxaca through 
            ancestral moles, complex sauces, and artisanal mezcal
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center stagger-fade-in stagger-5">
            <Link
              href="https://app.upserve.com/s/dolores-providence"
              className="group relative px-10 py-4 bg-[#cd853f] text-[#1a0f0a] font-quiche-bold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ borderRadius: "60% 40% 40% 60% / 50% 50% 50% 50%" }}
            >
              <span className="relative z-10">Order Online</span>
              <div className="absolute inset-0 bg-[#e6a55f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ borderRadius: "inherit" }} />
            </Link>
            <Link
              href="https://www.exploretock.com/dolores/"
              className="group relative px-10 py-4 border-2 border-[#cd853f] text-[#cd853f] font-quiche-bold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:text-[#1a0f0a]"
              style={{ borderRadius: "40% 60% 60% 40% / 50% 50% 50% 50%" }}
            >
              <span className="relative z-10">Reserve a Table</span>
              <div className="absolute inset-0 bg-[#cd853f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" style={{ borderRadius: "inherit" }} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 stagger-fade-in stagger-7">
          <div className="w-6 h-10 border-2 border-[#cd853f]/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#cd853f] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== RESTAURANT WEEK BANNER ===== */}
      <section className="relative py-16 overflow-hidden">
        {/* Flowing Background */}
        <div 
          className="absolute inset-0 animate-gradient"
          style={{
            background: "linear-gradient(90deg, #385CC7, #4a6fd4, #5d82e1, #4a6fd4, #385CC7)",
            backgroundSize: "300% 100%",
          }}
        />

        {/* Organic Overlay Shapes */}
        <div 
          className="absolute -top-20 -left-20 w-64 h-64 animate-morph1 opacity-20"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-80 h-80 animate-morph2 opacity-15"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block px-6 py-2 border border-white/30 rounded-full mb-4">
            <span className="text-white/90 text-sm tracking-[0.2em] uppercase">Limited Time</span>
          </div>
          
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-quiche-bold mb-4">
            Providence Restaurant Week
          </h2>
          
          <p className="text-white/80 text-xl sm:text-2xl md:text-3xl font-quiche-regular mb-6">
            January 25 - February 7, 2026
          </p>

          <div 
            className="inline-block px-8 sm:px-12 py-4 sm:py-6 mb-8"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
            }}
          >
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-quiche-bold">
              3 Courses <span className="text-[#ffd700]">$40</span>
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="https://www.exploretock.com/dolores/"
              className="group relative px-10 py-4 bg-white text-[#385CC7] font-quiche-bold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
            >
              <span className="relative z-10">Reserve Now</span>
              <div className="absolute inset-0 bg-[#ffd700] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" style={{ borderRadius: "inherit" }} />
            </Link>
          </div>
        </div>

        {/* Bottom Wave */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-16 sm:h-24"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1000,50 L1000,100 L0,100 Z" 
            fill="#1a0f0a"
          />
        </svg>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #cd853f 1px, transparent 1px),
                               radial-gradient(circle at 80% 50%, #cd853f 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Accent Blobs */}
        <div 
          className="absolute top-20 right-10 w-40 h-40 animate-morph3 animate-float-slow opacity-30"
          style={{ background: "radial-gradient(circle, #cd853f 0%, transparent 70%)" }}
        />
        <div 
          className="absolute bottom-20 left-10 w-56 h-56 animate-morph1 animate-float-medium opacity-20"
          style={{ background: "radial-gradient(circle, #8b4513 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-[#cd853f] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-quiche-bold mb-6">
              Our Story
            </h2>
            <div 
              className="w-32 h-1 mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #cd853f, transparent)",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Content Grid with Organic Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with Blob Mask */}
            <div className="relative">
              <div 
                className="relative overflow-hidden animate-morph2"
                style={{
                  aspectRatio: "4/5",
                }}
              >
                <Image
                  src="/img/molino.jpg"
                  alt="Traditional molino grinding process"
                  fill
                  unoptimized
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(26,15,10,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating Badge */}
              <div 
                className="absolute -bottom-6 -right-6 sm:bottom-8 sm:right-[-2rem] w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center animate-float-slow"
                style={{
                  background: "linear-gradient(135deg, #cd853f, #8b4513)",
                  borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
                }}
              >
                <span className="text-[#1a0f0a] text-center font-quiche-bold text-sm sm:text-base leading-tight px-4">
                  Fox Point<br />Providence
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <p className="text-[#d4c4b5] text-lg sm:text-xl leading-relaxed">
                Dolores brings the vibrant culinary heritage of the <span className="text-[#cd853f] font-quiche-bold">Mixteca region</span> to 
                Providence&apos;s historic Fox Point neighborhood. Our kitchen honors the ancient 
                techniques of Puebla and Oaxaca, where complex moles take days to prepare 
                and every sauce tells a story.
              </p>

              <p className="text-[#d4c4b5] text-lg sm:text-xl leading-relaxed">
                We source traditional ingredients&mdash;chilhuacles, mulatos, and pasillas&mdash;to create 
                authentic flavors that have been perfected over generations. Our bar features 
                an exceptional selection of <span className="text-[#cd853f] font-quiche-bold">artisanal mezcals</span> and agave spirits, 
                each with its own unique character and origin.
              </p>

              <div 
                className="inline-block px-8 py-4 mt-4"
                style={{
                  background: "rgba(205, 133, 63, 0.1)",
                  border: "1px solid rgba(205, 133, 63, 0.3)",
                  borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                }}
              >
                <p className="text-[#cd853f] text-lg font-quiche-bold tracking-wide">
                  100 Hope Street, Providence RI
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-3 gap-8 mt-24">
            {[
              { title: "Ancestral Moles", desc: "Complex sauces crafted over days using traditional methods" },
              { title: "Agave Spirits", desc: "Curated selection of artisanal mezcals from small producers" },
              { title: "Regional Stews", desc: "Slow-cooked dishes celebrating Mixteca culinary traditions" },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="text-center p-8 transition-transform duration-300 hover:scale-105"
                style={{
                  background: "rgba(205, 133, 63, 0.05)",
                  borderRadius: idx === 0 ? "60% 40% 60% 40% / 40% 60% 40% 60%" : 
                               idx === 1 ? "50% 50% 50% 50% / 60% 60% 40% 40%" :
                               "40% 60% 40% 60% / 60% 40% 60% 40%",
                  border: "1px solid rgba(205, 133, 63, 0.15)",
                }}
              >
                <h3 className="text-[#cd853f] text-xl sm:text-2xl font-quiche-bold mb-4">{item.title}</h3>
                <p className="text-[#a89585] text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE SHOWCASE ===== */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Bar Image */}
            <div 
              className="relative overflow-hidden group"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/img/bar.jpg"
                alt="Dolores bar featuring mezcal selection"
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <p className="text-[#cd853f] text-sm tracking-[0.2em] uppercase mb-2">The Bar</p>
                <p className="text-white text-xl sm:text-2xl font-quiche-bold">Agave & Spirits</p>
              </div>
            </div>

            {/* Dining Image */}
            <div 
              className="relative overflow-hidden group"
              style={{
                borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/img/horz-dine.jpg"
                alt="Intimate dining atmosphere at Dolores"
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-right">
                <p className="text-[#cd853f] text-sm tracking-[0.2em] uppercase mb-2">The Space</p>
                <p className="text-white text-xl sm:text-2xl font-quiche-bold">Intimate Dining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONNECT SECTION ===== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #1a0f0a 0%, #2d1810 50%, #1a0f0a 100%)",
          }}
        />

        {/* Large Background Blob */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-morph1 opacity-10"
          style={{
            background: "radial-gradient(circle, #cd853f 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-[#cd853f] text-4xl sm:text-5xl md:text-6xl font-quiche-bold mb-6">
            Connect With Us
          </h2>
          
          <p className="text-[#a89585] text-lg sm:text-xl max-w-xl mx-auto mb-12">
            Follow our journey and stay updated on seasonal menus, 
            special events, and the stories behind our dishes.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-16">
            <a 
              href="https://www.facebook.com/DoloresPVD"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{
                background: "rgba(205, 133, 63, 0.1)",
                border: "2px solid rgba(205, 133, 63, 0.3)",
                borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
              }}
              aria-label="Facebook"
            >
              <FacebookIcon className="w-8 h-8 text-[#cd853f] group-hover:text-[#e6a55f] transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/dolorespvd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{
                background: "rgba(205, 133, 63, 0.1)",
                border: "2px solid rgba(205, 133, 63, 0.3)",
                borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%",
              }}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-8 h-8 text-[#cd853f] group-hover:text-[#e6a55f] transition-colors" />
            </a>
          </div>

          {/* Contact Info */}
          <div 
            className="inline-block px-12 py-8 max-w-lg"
            style={{
              background: "rgba(205, 133, 63, 0.05)",
              border: "1px solid rgba(205, 133, 63, 0.2)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
          >
            <p className="text-[#d4c4b5] text-lg mb-2">100 Hope Street</p>
            <p className="text-[#d4c4b5] text-lg mb-4">Fox Point, Providence RI</p>
            <p className="text-[#cd853f] text-xl font-quiche-bold">(401) 831-9200</p>
          </div>

          {/* Final CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="https://app.upserve.com/s/dolores-providence"
              className="group relative px-10 py-4 bg-[#cd853f] text-[#1a0f0a] font-quiche-bold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
            >
              <span className="relative z-10">Order Pickup</span>
              <div className="absolute inset-0 bg-[#e6a55f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ borderRadius: "inherit" }} />
            </Link>
            <Link
              href="https://www.exploretock.com/dolores/"
              className="group relative px-10 py-4 border-2 border-[#cd853f] text-[#cd853f] font-quiche-bold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:text-[#1a0f0a]"
              style={{ borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" }}
            >
              <span className="relative z-10">Make Reservation</span>
              <div className="absolute inset-0 bg-[#cd853f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" style={{ borderRadius: "inherit" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 border-t border-[#cd853f]/20">
        <div className="container mx-auto px-6 text-center">
          <Image
            src="/img/footer-logo.png"
            alt="Dolores"
            width={120}
            height={60}
            unoptimized
            className="mx-auto mb-6 opacity-70"
          />
          <p className="text-[#6b5b50] text-sm">
            &copy; {new Date().getFullYear()} Dolores PVD. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
