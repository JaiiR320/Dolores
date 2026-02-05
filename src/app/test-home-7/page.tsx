"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Zapotec/Mixtec inspired SVG patterns
const DiamondPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="diamond-weave" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M30 20L40 30L30 40L20 30Z" fill="currentColor" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#diamond-weave)"/>
  </svg>
);

const ZigzagBorder = ({ className = "" }: { className?: string }) => (
  <svg className={`w-full h-8 ${className}`} viewBox="0 0 400 32" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="zigzag" x="0" y="0" width="40" height="32" patternUnits="userSpaceOnUse">
        <path d="M0 16L10 8L20 16L30 8L40 16L30 24L20 16L10 24Z" fill="currentColor" opacity="0.6"/>
        <path d="M0 16L10 8L20 16L10 24Z" fill="currentColor"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#zigzag)"/>
  </svg>
);

const SteppedFret = () => (
  <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-48 opacity-20" viewBox="0 0 96 192" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24h24v24h24v24h24v24h-24v24h-24v24h-24v24H0v-24h24v-24h24v-24h24v-24h-24v-24h-24v-24h-24z" fill="currentColor"/>
  </svg>
);

const WovenTexture = () => (
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)
    `,
    backgroundSize: '8px 8px',
  }}/>
);

// Custom hook for scroll position using useSyncExternalStore
function useScrollY() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback, { passive: true });
      return () => window.removeEventListener("scroll", callback);
    },
    () => window.scrollY,
    () => 0
  );
}

// Custom hook to detect if component has mounted (client-side)
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    // Using requestAnimationFrame to batch the state update
    const frameId = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frameId);
  }, []);
  return hasMounted;
}

export default function TestHome7() {
  const mounted = useHasMounted();
  const scrollY = useScrollY();

  // Animation stagger classes
  const fadeIn = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const fadeInSlow = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";

  return (
    <main className="min-h-screen overflow-hidden" style={{ 
      backgroundColor: '#FAF6F1',
      fontFamily: 'var(--font-quiche-regular), serif'
    }}>
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/molino.jpg"
            alt="Dolores restaurant interior with traditional molino"
            fill
            className="object-cover"
            priority
            unoptimized
            style={{
              transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.2}px)`,
            }}
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"/>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-amber-900/30"/>
        </div>

        {/* Woven pattern overlay */}
        <div className="absolute inset-0 text-amber-200">
          <DiamondPattern />
        </div>

        {/* Top decorative band */}
        <div 
          className={`absolute top-0 left-0 right-0 h-16 transition-all duration-1000 delay-700 ${fadeIn}`}
          style={{
            background: 'linear-gradient(180deg, rgba(139,69,19,0.4) 0%, transparent 100%)',
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 text-amber-300/40">
            <ZigzagBorder />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Decorative element above title */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-200 ${fadeIn}`}>
            <span className="block w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"/>
            <svg className="w-8 h-8 text-amber-400" viewBox="0 0 32 32">
              <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12Z" fill="currentColor"/>
            </svg>
            <span className="block w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"/>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-quiche-bold text-white mb-4 tracking-tight transition-all duration-1000 delay-300 ${fadeIn}`}
            style={{ 
              textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 80px rgba(139,69,19,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            DOLORES
          </h1>

          {/* Subtitle with decorative lines */}
          <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ${fadeInSlow}`}>
            <span className="hidden sm:block w-20 h-px bg-gradient-to-r from-transparent to-amber-400/60"/>
            <p className="text-amber-100 text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase font-light">
              Contemporary Mexican
            </p>
            <span className="hidden sm:block w-20 h-px bg-gradient-to-l from-transparent to-amber-400/60"/>
          </div>

          {/* Location */}
          <p className={`text-white/80 text-base sm:text-lg mb-10 tracking-wide transition-all duration-1000 delay-600 ${fadeInSlow}`}>
            100 Hope St &bull; Fox Point &bull; Providence, RI
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${fadeInSlow}`}>
            <a
              href="https://app.upserve.com/s/dolores-providence"
              className="group relative px-10 py-4 overflow-hidden rounded-sm"
              style={{ backgroundColor: '#C45C26' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
              <span className="relative text-white font-quiche-bold tracking-widest uppercase text-sm">
                Order Online
              </span>
            </a>
            <a
              href="https://www.exploretock.com/dolores/"
              className="group relative px-10 py-4 border-2 border-white/40 hover:border-amber-400 rounded-sm transition-colors duration-300"
            >
              <span className="text-white group-hover:text-amber-300 font-quiche-bold tracking-widest uppercase text-sm transition-colors">
                Reserve a Table
              </span>
            </a>
          </div>
        </div>

        {/* Bottom decorative woven band */}
        <div className="absolute bottom-0 left-0 right-0">
          <div 
            className="h-20"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  rgba(139,69,19,0.6) 0px,
                  rgba(139,69,19,0.6) 20px,
                  rgba(184,115,51,0.5) 20px,
                  rgba(184,115,51,0.5) 40px,
                  rgba(139,69,19,0.6) 40px,
                  rgba(139,69,19,0.6) 60px,
                  rgba(212,175,55,0.4) 60px,
                  rgba(212,175,55,0.4) 80px
                )
              `,
            }}
          />
          <div className="h-3 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800"/>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-28 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"/>
          </div>
        </div>
      </section>

      {/* ===== RESTAURANT WEEK BANNER ===== */}
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#8B4513' }}>
        {/* Textile pattern background */}
        <div className="absolute inset-0 text-amber-200">
          <WovenTexture />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stepped-pattern" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="12" height="12" fill="currentColor"/>
                <rect x="12" y="12" width="12" height="12" fill="currentColor"/>
                <rect x="24" y="24" width="12" height="12" fill="currentColor"/>
                <rect x="36" y="36" width="12" height="12" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stepped-pattern)" className="text-amber-100"/>
          </svg>
        </div>

        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-4" style={{
          background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, #8B4513 8px, #8B4513 16px)',
        }}/>
        <div className="absolute bottom-0 left-0 right-0 h-4" style={{
          background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, #8B4513 8px, #8B4513 16px)',
        }}/>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-6 py-2 border border-amber-400/40 rounded-sm">
            <span className="text-amber-300 tracking-[0.4em] uppercase text-xs font-medium">Limited Time</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-quiche-bold text-white mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            Providence Restaurant Week
          </h2>
          
          <p className="text-amber-200 text-xl sm:text-2xl mb-2 tracking-wide">
            January 25 - February 7, 2026
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-px bg-amber-400/50"/>
            <p className="text-white text-2xl sm:text-3xl font-quiche-bold">
              3 Courses &bull; $40
            </p>
            <span className="w-12 h-px bg-amber-400/50"/>
          </div>
          
          <p className="text-amber-100/80 text-sm mb-8">(excludes tax and gratuity)</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu#restaurant-week"
              className="group px-8 py-3 bg-white/10 border border-white/30 hover:bg-white hover:text-amber-900 text-white rounded-sm transition-all duration-300"
            >
              <span className="font-quiche-bold tracking-wider uppercase text-sm">View Tasting Menu</span>
            </Link>
            <a
              href="https://www.exploretock.com/dolores/"
              className="px-8 py-3 text-amber-900 rounded-sm transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <span className="font-quiche-bold tracking-wider uppercase text-sm">Reserve Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / HERITAGE SECTION ===== */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#FAF6F1' }}>
        {/* Subtle diamond pattern */}
        <div className="absolute inset-0 text-amber-800">
          <DiamondPattern />
        </div>
        
        {/* Left decorative element */}
        <div className="absolute left-0 top-0 bottom-0 w-4 hidden lg:block" style={{
          background: 'repeating-linear-gradient(180deg, #385CC7 0px, #385CC7 20px, #D4AF37 20px, #D4AF37 40px, #8B4513 40px, #8B4513 60px)',
        }}/>

        <div className="relative z-10 container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/img/horz-plat-frosted.jpg"
                  alt="Traditional Mexican dish at Dolores"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20" style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #D4AF37 50%, transparent 50%)',
                }}/>
              </div>
              {/* Offset decorative frame */}
              <div 
                className="absolute -bottom-6 -left-6 w-full h-full border-2 rounded-sm -z-10"
                style={{ borderColor: '#385CC7' }}
              />
              {/* Stepped fret decoration */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-amber-700">
                <SteppedFret />
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:pl-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1" style={{ backgroundColor: '#D4AF37' }}/>
                <span className="text-amber-700 tracking-[0.3em] uppercase text-xs font-medium">Our Heritage</span>
              </div>

              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-quiche-bold mb-8 leading-tight"
                style={{ color: '#385CC7' }}
              >
                From the Heart of the Mixteca
              </h2>

              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#3d3d3d' }}>
                <p>
                  <span className="font-quiche-bold" style={{ color: '#385CC7' }}>Dolores</span> brings 
                  the soul of the Mixteca region to Fox Point, Providence. Our kitchen celebrates the 
                  ancient culinary traditions of <span className="font-quiche-bold" style={{ color: '#8B4513' }}>Puebla</span> and 
                  <span className="font-quiche-bold" style={{ color: '#8B4513' }}> Oaxaca</span>, where 
                  complex moles, rich sauces, and hearty stews have been perfected over generations.
                </p>
                <p>
                  Each dish tells a story of indigenous techniques and regional ingredients, from 
                  hand-ground chiles to slow-cooked meats. Our beverage program honors 
                  <span className="font-quiche-bold" style={{ color: '#385CC7' }}> Mexico&apos;s artisanal agave spirits</span>, 
                  featuring craft mezcals that complement our bold flavors.
                </p>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center gap-4 my-10">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"/>
                <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" fill="currentColor"/>
                </svg>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"/>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://app.upserve.com/s/dolores-providence"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#385CC7' }}
                >
                  <span className="font-quiche-bold tracking-wider uppercase text-sm">Order Online</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 rounded-sm transition-all duration-300 hover:bg-amber-50"
                  style={{ borderColor: '#8B4513', color: '#8B4513' }}
                >
                  <span className="font-quiche-bold tracking-wider uppercase text-sm">View Menu</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISUAL BREAK - WOVEN BAND ===== */}
      <div className="relative h-32 overflow-hidden">
        <Image
          src="/img/bar.jpg"
          alt="Dolores bar"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60"/>
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 10px,
                rgba(212,175,55,0.3) 10px,
                rgba(212,175,55,0.3) 12px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 10px,
                rgba(212,175,55,0.2) 10px,
                rgba(212,175,55,0.2) 12px
              )
            `,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: '#D4AF37' }}/>
        <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: '#D4AF37' }}/>
      </div>

      {/* ===== CONNECT SECTION ===== */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#2C1810' }}>
        {/* Textile weave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="weave-connect" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="10" height="10" fill="#D4AF37"/>
                <rect x="10" y="10" width="10" height="10" fill="#D4AF37"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#weave-connect)"/>
          </svg>
        </div>

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 text-amber-600/30">
          <ZigzagBorder />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-quiche-bold text-white mb-4">
            Connect With Us
          </h2>
          
          <p className="text-amber-200/80 text-lg mb-10 max-w-md mx-auto">
            Follow our journey and stay updated on special events, new dishes, and more.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <a
              href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group relative p-4 rounded-full border-2 border-amber-600/40 hover:border-amber-400 transition-all duration-300 hover:scale-110"
            >
              <FacebookIcon className="w-8 h-8 text-amber-400 group-hover:text-white transition-colors" />
              <span className="absolute inset-0 rounded-full bg-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-300"/>
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="group relative p-4 rounded-full border-2 border-amber-600/40 hover:border-amber-400 transition-all duration-300 hover:scale-110"
            >
              <InstagramIcon className="w-8 h-8 text-amber-400 group-hover:text-white transition-colors" />
              <span className="absolute inset-0 rounded-full bg-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-300"/>
            </a>
          </div>

          {/* Location Info */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-amber-100/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>100 Hope St, Providence RI</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-amber-600/40"/>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Fox Point Neighborhood</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 text-amber-600/30 rotate-180">
          <ZigzagBorder />
        </div>
      </section>

      {/* ===== FINAL DECORATIVE BAND ===== */}
      <div 
        className="h-6"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              #385CC7 0px,
              #385CC7 25%,
              #D4AF37 25%,
              #D4AF37 50%,
              #8B4513 50%,
              #8B4513 75%,
              #C45C26 75%,
              #C45C26 100%
            )
          `,
        }}
      />
    </main>
  );
}
