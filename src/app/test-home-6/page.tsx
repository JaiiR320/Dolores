"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Pre-computed ember positions for deterministic rendering
const EMBER_POSITIONS = [
  { left: 15, duration: 7.2 },
  { left: 28, duration: 8.5 },
  { left: 42, duration: 6.8 },
  { left: 55, duration: 9.1 },
  { left: 68, duration: 7.6 },
  { left: 82, duration: 8.3 },
  { left: 22, duration: 6.4 },
  { left: 35, duration: 9.5 },
  { left: 48, duration: 7.9 },
  { left: 62, duration: 8.1 },
  { left: 75, duration: 6.7 },
  { left: 88, duration: 9.2 },
];

export default function TestHome6() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes smokeRise {
          0% {
            transform: translateY(100%) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(-100%) scale(2.5);
            opacity: 0;
          }
        }

        @keyframes flickerGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        @keyframes emberFloat {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-400px) translateX(100px) scale(0);
            opacity: 0;
          }
        }

        @keyframes slowPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes textReveal {
          0% {
            clip-path: inset(0 100% 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineExpand {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes grainMove {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }

        .smoke-particle {
          animation: smokeRise 15s ease-out infinite;
        }

        .ember {
          animation: emberFloat 8s ease-out infinite;
        }

        .grain-overlay {
          animation: grainMove 0.5s steps(10) infinite;
        }
      `}</style>

      {/* Film Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] grain-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        >
          <Image
            src="/img/molino.jpg"
            alt="Dolores interior with traditional molino"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        </div>

        {/* Smoke Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute smoke-particle"
              style={{
                left: `${15 + i * 15}%`,
                bottom: 0,
                width: "200px",
                height: "400px",
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)`,
                animationDelay: `${i * 2.5}s`,
                filter: "blur(40px)",
              }}
            />
          ))}
        </div>

        {/* Ember particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {EMBER_POSITIONS.map((ember, i) => (
            <div
              key={i}
              className="absolute ember"
              style={{
                left: `${ember.left}%`,
                bottom: "20%",
                width: "4px",
                height: "4px",
                background: "#D4A574",
                borderRadius: "50%",
                boxShadow: "0 0 10px 2px rgba(212, 165, 116, 0.8)",
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${ember.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Golden ambient glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center bottom, rgba(212, 165, 116, 0.15) 0%, transparent 60%)",
            animation: "flickerGlow 4s ease-in-out infinite",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          {/* Small ritual symbol */}
          <div 
            className={`mb-8 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <svg 
              className="w-12 h-12 mx-auto text-[#D4A574]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 
            className={`font-quiche-bold text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-[-0.03em] mb-4 transition-all duration-[1.5s] ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ 
              transitionDelay: "0.5s",
              textShadow: "0 0 80px rgba(212, 165, 116, 0.3), 0 4px 30px rgba(0,0,0,0.8)",
            }}
          >
            DOLORES
          </h1>

          {/* Decorative line */}
          <div 
            className={`w-32 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "0.9s" }}
          />

          {/* Subtitle */}
          <p 
            className={`font-quiche-regular text-[#D4A574] text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase mb-2 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1.1s" }}
          >
            Contemporary Mexican
          </p>

          {/* Location */}
          <p 
            className={`font-quiche-regular text-white/60 text-sm sm:text-base tracking-[0.2em] uppercase mb-12 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1.3s" }}
          >
            100 Hope St &middot; Fox Point &middot; Providence
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1.5s" }}
          >
            <a
              href="https://app.upserve.com/s/dolores-providence"
              className="group relative px-10 py-4 border border-[#D4A574] text-[#D4A574] text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:text-[#0a0a0a]"
            >
              <span className="relative z-10">Order Online</span>
              <div className="absolute inset-0 bg-[#D4A574] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a
              href="https://www.exploretock.com/dolores/"
              className="group relative px-10 py-4 bg-[#D4A574] text-[#0a0a0a] text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c49464]"
            >
              <span className="relative z-10">Reserve a Table</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "2s" }}
        >
          <div className="flex flex-col items-center text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase mb-3">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* RESTAURANT WEEK SECTION */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Diagonal background element */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, transparent 40%, rgba(56, 92, 199, 0.1) 50%, transparent 60%)`,
          }}
        />

        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(212, 165, 116, 0.5) 2px, rgba(212, 165, 116, 0.5) 4px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-[#385CC7]" />
            <span className="text-[#385CC7] text-xs tracking-[0.4em] uppercase font-quiche-regular">
              Special Event
            </span>
            <div className="w-16 h-[1px] bg-[#385CC7]" />
          </div>

          {/* Main heading */}
          <h2 className="font-quiche-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-6 leading-tight">
            <span className="text-white">Providence</span>
            <br />
            <span className="text-[#385CC7]">Restaurant Week</span>
          </h2>

          {/* Dates */}
          <p className="text-center text-white/70 text-lg sm:text-xl mb-4 font-quiche-regular">
            January 25 &mdash; February 7, 2026
          </p>

          {/* Price highlight */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4A574]" />
            <div className="text-center">
              <span className="text-[#D4A574] text-5xl sm:text-6xl font-quiche-bold">$40</span>
              <p className="text-white/50 text-sm tracking-wider mt-1">3 Courses</p>
            </div>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4A574]" />
          </div>

          {/* Small print */}
          <p className="text-center text-white/40 text-sm mb-10">
            Excludes tax and gratuity
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu#restaurant-week"
              className="group relative px-8 py-3 border border-[#385CC7] text-[#385CC7] text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">View Tasting Menu</span>
              <div className="absolute inset-0 bg-[#385CC7] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            <a
              href="https://www.exploretock.com/dolores/"
              className="px-8 py-3 bg-[#385CC7] text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#2d4a9e]"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / HERITAGE SECTION */}
      <section className="relative py-24 sm:py-32">
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0">
          <Image
            src="/img/bar.jpg"
            alt="Bar atmosphere"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/img/horz-plat-frosted.jpg"
                  alt="Artfully plated dish"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Golden frame accent */}
                <div className="absolute inset-4 border border-[#D4A574]/30 pointer-events-none" />
              </div>
              {/* Floating accent image */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 hidden lg:block">
                <Image
                  src="/img/horz-mixer-front.jpg"
                  alt="Traditional mixer"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 border border-[#D4A574]/30" />
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#D4A574]" />
                <span className="text-[#D4A574] text-xs tracking-[0.4em] uppercase">Our Heritage</span>
              </div>

              <h2 className="font-quiche-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8">
                <span className="text-white">From the</span>
                <br />
                <span className="text-[#D4A574]">Mixteca</span>
                <br />
                <span className="text-white">Region</span>
              </h2>

              <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed font-quiche-regular">
                <p>
                  <span className="text-white font-quiche-bold">Dolores</span> is a sanctuary of 
                  contemporary Mexican cuisine, nestled in the historic{" "}
                  <span className="text-[#D4A574]">Fox Point neighborhood</span> of Providence.
                </p>
                <p>
                  Our kitchen draws deep inspiration from the{" "}
                  <span className="text-white font-quiche-bold">Mixteca region</span> of Puebla 
                  and Oaxaca&mdash;a land where ancient culinary traditions have been preserved 
                  for generations through the ceremonial preparation of{" "}
                  <span className="text-[#D4A574]">moles, sauces, and stews</span>.
                </p>
                <p>
                  Our beverage program celebrates{" "}
                  <span className="text-white font-quiche-bold">Mexico&apos;s artisanal agave spirits</span>, 
                  offering craft cocktails and rare mezcals that honor the ritualistic nature 
                  of distillation&mdash;each sip a meditation on smoke, earth, and time.
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-8 h-8 border border-[#D4A574]/50 rotate-45" />
                <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4A574] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERIC DIVIDER */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/img/horz-dine.jpg"
          alt="Dining atmosphere"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        
        {/* Centered quote */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="text-center max-w-2xl">
            <p className="font-quiche-regular text-2xl sm:text-3xl md:text-4xl text-white/90 italic leading-relaxed">
              &ldquo;In every mole, there lives the patience of generations&rdquo;
            </p>
            <div className="mt-6 w-16 h-[1px] bg-[#D4A574] mx-auto" />
          </blockquote>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section className="relative py-24 sm:py-32">
        {/* Subtle radial gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 92, 199, 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/20" />
            <span className="text-white/40 text-xs tracking-[0.4em] uppercase">Stay Connected</span>
            <div className="w-16 h-[1px] bg-white/20" />
          </div>

          <h2 className="font-quiche-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Join the Ritual
          </h2>

          <p className="text-white/60 text-lg sm:text-xl mb-12 max-w-xl mx-auto font-quiche-regular">
            Follow our journey and be the first to know about special events, 
            seasonal menus, and exclusive offerings.
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mb-16">
            <a
              href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group relative p-4"
            >
              <div className="absolute inset-0 border border-white/20 rotate-45 group-hover:border-[#385CC7] group-hover:rotate-0 transition-all duration-500" />
              <FacebookIcon className="w-8 h-8 text-white/60 group-hover:text-[#385CC7] transition-colors duration-300 relative z-10" />
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="group relative p-4"
            >
              <div className="absolute inset-0 border border-white/20 rotate-45 group-hover:border-[#D4A574] group-hover:rotate-0 transition-all duration-500" />
              <InstagramIcon className="w-8 h-8 text-white/60 group-hover:text-[#D4A574] transition-colors duration-300 relative z-10" />
            </a>
          </div>

          {/* Location info */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase mb-4 font-quiche-regular">
              Visit Us
            </p>
            <p className="text-white text-xl sm:text-2xl font-quiche-bold mb-2">
              100 Hope Street
            </p>
            <p className="text-white/60 text-base sm:text-lg font-quiche-regular">
              Fox Point, Providence, Rhode Island
            </p>
          </div>
        </div>
      </section>

      {/* Final decorative element */}
      <div className="py-12 flex justify-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-[#D4A574] rotate-45" />
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4A574] to-transparent" />
          <Image
            src="/img/squarelogo.png"
            alt="Dolores logo"
            width={40}
            height={40}
            className="opacity-40"
            unoptimized
          />
          <div className="w-16 h-[1px] bg-gradient-to-l from-[#D4A574] to-transparent" />
          <div className="w-2 h-2 bg-[#D4A574] rotate-45" />
        </div>
      </div>
    </div>
  );
}
