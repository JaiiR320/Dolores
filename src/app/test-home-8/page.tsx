"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Hook that adds 'in-view' class to element when it enters viewport
function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);

  const observe = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("in-view");
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    return observe();
  }, [observe]);

  return ref;
}

// Chapter number component
function ChapterNumber({ number, light = false }: { number: string; light?: boolean }) {
  return (
    <span className={`font-quiche-regular text-[10px] tracking-[0.4em] uppercase ${light ? "text-white/40" : "text-primary/40"}`}>
      {number}
    </span>
  );
}

export default function TestHome8() {
  const heroRef = useScrollReveal(0.1);
  const restaurantWeekRef = useScrollReveal(0.3);
  const aboutRef = useScrollReveal(0.2);
  const connectRef = useScrollReveal(0.3);

  return (
    <main className="bg-[#FAF8F5] min-h-screen overflow-x-hidden">
      {/* Custom animation styles */}
      <style jsx>{`
        /* Base reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .reveal-scale {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal-scale-y {
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        /* Active states when parent has in-view class */
        .in-view .reveal,
        .in-view .reveal-left,
        .in-view .reveal-right,
        .in-view .reveal-scale,
        .in-view .reveal-scale-y {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1) scaleY(1);
        }

        /* Staggered delays */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-700 { transition-delay: 700ms; }
        .delay-800 { transition-delay: 800ms; }
        .delay-1000 { transition-delay: 1000ms; }
      `}</style>

      {/* ============================================
          SECTION 01: HERO
          ============================================ */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-screen flex"
      >
        {/* Vertical DOLORES text - left side */}
        <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-24 items-center justify-center z-20">
          <h1 className="reveal-left delay-300 font-quiche-bold text-[14px] tracking-[0.5em] uppercase text-primary transform -rotate-90 whitespace-nowrap">
            Dolores PVD
          </h1>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left content panel */}
          <div className="lg:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:pl-32 py-20 lg:py-0 relative">
            {/* Chapter indicator */}
            <div className="reveal delay-100 mb-12">
              <ChapterNumber number="01" />
              <div className="w-12 h-[1px] bg-primary/20 mt-3" />
            </div>

            {/* Mobile title */}
            <h1 className="reveal delay-200 lg:hidden font-quiche-bold text-5xl md:text-6xl text-primary mb-6">
              Dolores
            </h1>

            {/* Tagline */}
            <p className="reveal delay-300 font-quiche-regular text-lg md:text-xl text-[#6B5B4F] leading-relaxed max-w-md mb-8">
              Contemporary Mexican cuisine from the Mixteca region of Puebla and Oaxaca.
              <span className="block mt-4 text-primary/70">
                Moles, sauces, stews, and artisanal agave spirits.
              </span>
            </p>

            {/* Location badge */}
            <div className="reveal delay-400 inline-flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-[#C4785A]" />
              <span className="font-quiche-regular text-sm tracking-wide text-[#6B5B4F]/80">
                100 Hope St, Fox Point, Providence RI
              </span>
            </div>

            {/* CTA buttons */}
            <div className="reveal delay-500 flex flex-wrap gap-4">
              <Link
                href="https://app.upserve.com/s/dolores-providence"
                className="group relative px-8 py-4 bg-primary text-white font-quiche-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="relative z-10">Order</span>
                <div className="absolute inset-0 bg-primary-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link
                href="https://www.exploretock.com/dolores/"
                className="group relative px-8 py-4 border-2 border-primary text-primary font-quiche-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Reserve</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          {/* Right image panel */}
          <div className="lg:w-[55%] relative min-h-[60vh] lg:min-h-screen">
            {/* Decorative terracotta shape */}
            <div className="reveal-scale delay-700 absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-[#C4785A]/10 blur-3xl" />

            {/* Main image */}
            <div className="reveal delay-200 absolute inset-4 lg:inset-8">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/img/molino.jpg"
                  alt="Traditional molino at Dolores"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-40" />
              </div>
            </div>

            {/* Floating accent image */}
            <div className="reveal-left delay-600 hidden lg:block absolute -left-16 bottom-24 w-48 h-64 shadow-2xl">
              <Image
                src="/img/4.jpg"
                alt="Dolores dish"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-quiche-regular text-[10px] tracking-[0.3em] uppercase text-primary/40">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ============================================
          SECTION 02: RESTAURANT WEEK BANNER
          ============================================ */}
      <section
        ref={restaurantWeekRef as React.RefObject<HTMLElement>}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #385CC7 0,
                #385CC7 1px,
                transparent 0,
                transparent 50%
              )`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Terracotta accent bar */}
        <div
          className="reveal-scale-y absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#C4785A] via-[#D4917A] to-[#C4785A]"
        />

        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
            {/* Left side - Chapter + Title */}
            <div className="lg:w-1/3">
              <div className="reveal delay-100 mb-6">
                <ChapterNumber number="02" />
                <div className="w-12 h-[1px] bg-primary/20 mt-3" />
              </div>

              <h2 className="reveal delay-200 font-quiche-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-[0.95]">
                Restaurant
                <br />
                <span className="text-[#C4785A]">Week</span>
              </h2>
            </div>

            {/* Right side - Details */}
            <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Date block */}
              <div className="reveal delay-300">
                <span className="font-quiche-regular text-xs tracking-[0.3em] uppercase text-primary/50 block mb-2">
                  Dates
                </span>
                <p className="font-quiche-bold text-2xl md:text-3xl text-[#6B5B4F]">
                  Jan 25 — Feb 7
                </p>
                <p className="font-quiche-regular text-lg text-[#6B5B4F]/70 mt-1">2026</p>
              </div>

              {/* Price block */}
              <div className="reveal delay-400">
                <span className="font-quiche-regular text-xs tracking-[0.3em] uppercase text-primary/50 block mb-2">
                  Prix Fixe
                </span>
                <p className="font-quiche-bold text-2xl md:text-3xl text-[#6B5B4F]">
                  3 Courses
                </p>
                <p className="font-quiche-regular text-lg text-[#6B5B4F]/70 mt-1">
                  <span className="font-quiche-bold text-[#C4785A] text-2xl">$40</span> per person
                </p>
              </div>

              {/* CTA */}
              <div className="reveal delay-500 flex items-end">
                <Link
                  href="https://www.exploretock.com/dolores/"
                  className="group inline-flex items-center gap-3 font-quiche-bold text-sm tracking-widest uppercase text-primary hover:text-[#C4785A] transition-colors"
                >
                  <span>Reserve Now</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 03: ABOUT
          ============================================ */}
      <section
        ref={aboutRef as React.RefObject<HTMLElement>}
        className="relative py-32 md:py-48"
      >
        {/* Large background text */}
        <div className="reveal-right delay-300 absolute top-1/2 -translate-y-1/2 -right-20 font-quiche-bold text-[20vw] text-primary/[0.02] leading-none select-none pointer-events-none">
          MIXTECA
        </div>

        <div className="container mx-auto px-8 md:px-16">
          {/* Chapter indicator */}
          <div className="reveal delay-100 mb-16">
            <ChapterNumber number="03" />
            <div className="w-12 h-[1px] bg-primary/20 mt-3" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Image column */}
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="reveal delay-200 relative">
                {/* Main image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/img/bar.jpg"
                    alt="Dolores bar and mezcal selection"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Overlapping accent */}
                <div className="reveal-scale delay-600 absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#C4785A]/30" />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              {/* Dramatic headline */}
              <h2 className="reveal delay-300 font-quiche-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8">
                Where tradition
                <br />
                meets <span className="text-[#C4785A]">craft</span>
              </h2>

              {/* Body text with staggered reveals */}
              <div className="space-y-6">
                <p className="reveal delay-400 font-quiche-regular text-lg text-[#6B5B4F] leading-relaxed">
                  Our kitchen honors the ancestral recipes of the Mixteca highlands, 
                  where moles are ground by hand and flavors develop over slow fires.
                </p>

                <p className="reveal delay-500 font-quiche-regular text-lg text-[#6B5B4F] leading-relaxed">
                  Each dish tells a story of generations — of markets in Oaxaca, 
                  of farms in Puebla, of hands that have perfected these techniques 
                  over centuries.
                </p>

                <p className="reveal delay-600 font-quiche-regular text-lg text-[#6B5B4F] leading-relaxed">
                  Our bar features rare artisanal mezcals sourced directly from 
                  family producers, each bottle a testament to the wild agave 
                  spirits of Mexico.
                </p>
              </div>

              {/* Decorative element */}
              <div className="reveal delay-700 mt-12 flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[#C4785A]" />
                <span className="font-quiche-regular text-xs tracking-[0.4em] uppercase text-[#C4785A]/70">
                  Est. Fox Point
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 04: CONNECT
          ============================================ */}
      <section
        ref={connectRef as React.RefObject<HTMLElement>}
        className="relative py-32 md:py-40 bg-primary overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="reveal-scale delay-300 absolute -top-32 -right-32 w-64 h-64 rounded-full border border-white/10" />
        <div className="reveal-scale delay-500 absolute -bottom-48 -left-48 w-96 h-96 rounded-full border border-white/5" />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-8 md:px-16 relative z-10">
          {/* Chapter indicator */}
          <div className="reveal delay-100 mb-16">
            <ChapterNumber number="04" light />
            <div className="w-12 h-[1px] bg-white/20 mt-3" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Title and social */}
            <div>
              <h2 className="reveal delay-200 font-quiche-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-8">
                Let&apos;s
                <br />
                <span className="text-[#D4917A]">connect</span>
              </h2>

              {/* Social links */}
              <div className="reveal delay-400 flex gap-6">
                <Link
                  href="https://www.facebook.com/dolorespvd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <span className="font-quiche-regular text-sm tracking-wide hidden md:inline">
                    Facebook
                  </span>
                </Link>

                <Link
                  href="https://www.instagram.com/dolorespvd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="font-quiche-regular text-sm tracking-wide hidden md:inline">
                    Instagram
                  </span>
                </Link>
              </div>
            </div>

            {/* Right - Contact info */}
            <div className="reveal delay-500 space-y-8">
              {/* Address */}
              <div>
                <span className="font-quiche-regular text-xs tracking-[0.3em] uppercase text-white/40 block mb-2">
                  Location
                </span>
                <p className="font-quiche-bold text-xl text-white">
                  100 Hope Street
                </p>
                <p className="font-quiche-regular text-white/70">
                  Fox Point, Providence RI
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10" />

              {/* Action links */}
              <div className="flex flex-wrap gap-6">
                <Link
                  href="https://app.upserve.com/s/dolores-providence"
                  className="group inline-flex items-center gap-2 font-quiche-bold text-sm tracking-widest uppercase text-[#D4917A] hover:text-white transition-colors"
                >
                  <span>Order Online</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://www.exploretock.com/dolores/"
                  className="group inline-flex items-center gap-2 font-quiche-bold text-sm tracking-widest uppercase text-[#D4917A] hover:text-white transition-colors"
                >
                  <span>Make Reservation</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom logo */}
          <div className="reveal delay-700 mt-24 flex justify-center">
            <Image
              src="/img/footer-logo.png"
              alt="Dolores"
              width={120}
              height={120}
              className="opacity-30"
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}
