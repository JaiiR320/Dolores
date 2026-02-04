"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Design 1: Editorial Magazine Style with Immersive Parallax
// Aesthetic: Elegant, editorial, layered depth with smooth parallax scrolling

export default function TestHome1() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Floating Navigation Indicator */}
      <div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease 0.5s" }}
      >
        {["Hero", "Story", "Experience", "Connect"].map((label, i) => (
          <div key={label} className="group flex items-center gap-3 cursor-pointer">
            <span className="text-xs tracking-widest text-primary/0 group-hover:text-primary transition-all duration-300 uppercase">
              {label}
            </span>
            <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Hero Section - Full Viewport with Parallax Layers */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background Layer - Slow parallax */}
        <div 
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        >
          <Image
            src="/img/molino.jpg"
            alt="Dolores Interior"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-white" />
        </div>

        {/* Floating Decorative Elements */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-45"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px) rotate(45deg)`,
            opacity: isLoaded ? 0.6 : 0,
            transition: "opacity 1.5s ease 0.3s"
          }}
        />
        <div 
          className="absolute bottom-40 right-20 w-48 h-48 border border-primary/10"
          style={{ 
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: isLoaded ? 0.4 : 0,
            transition: "opacity 1.5s ease 0.5s"
          }}
        />

        {/* Hero Content - Medium parallax */}
        <div 
          className="relative h-full flex flex-col justify-center items-center text-center z-10"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          {/* Elegant Pre-title */}
          <p 
            className="text-white/80 text-sm tracking-[0.4em] uppercase mb-4"
            style={{ 
              opacity: isLoaded ? 1 : 0, 
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.2s"
            }}
          >
            Contemporary Mexican Cuisine
          </p>

          {/* Main Title with Staggered Animation */}
          <h1 
            className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-quiche-bold tracking-tight leading-none"
            style={{ 
              textShadow: "0 4px 60px rgba(0,0,0,0.3)",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
            }}
          >
            DOLORES
          </h1>

          {/* Subtitle */}
          <p 
            className="text-white/90 text-lg md:text-xl tracking-widest mt-6"
            style={{ 
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.7s"
            }}
          >
            100 Hope Street, Providence
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mt-10"
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.9s"
            }}
          >
            <Link 
              href="https://app.upserve.com/s/dolores-providence"
              className="group relative px-10 py-4 bg-white text-primary font-semibold tracking-wide overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">Order Online</span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            <Link 
              href="https://www.exploretock.com/dolores/"
              className="group relative px-10 py-4 border-2 border-white text-white font-semibold tracking-wide overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Reserve a Table</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease 1.2s"
          }}
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Restaurant Week Banner - Overlapping Card */}
      <section className="relative z-20 -mt-20 px-4 sm:px-8">
        <div 
          className="max-w-4xl mx-auto bg-white shadow-2xl shadow-primary/10 p-8 sm:p-12"
          style={{
            transform: `translateY(${Math.max(0, 200 - scrollY * 0.3)}px)`,
            opacity: Math.min(1, scrollY / 300)
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-primary/60 text-sm tracking-widest uppercase mb-2">Limited Time</p>
              <h2 className="text-primary text-3xl sm:text-4xl font-quiche-bold">Providence Restaurant Week</h2>
              <p className="text-gray-600 mt-2">January 25 - February 7, 2026 | 3 courses $40</p>
            </div>
            <Link 
              href="/menu#restaurant-week" 
              className="shrink-0 px-8 py-4 bg-primary text-white font-semibold tracking-wide hover:bg-primary-dark transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section - Editorial Layout */}
      <section className="py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <div className="order-2 lg:order-1">
              <p className="text-primary/60 text-sm tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-quiche-bold leading-tight mb-8">
                Where Tradition<br />Meets Innovation
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="text-primary font-quiche-bold">Dolores</span> brings the soul of the 
                  Mixteca region to Providence&apos;s Fox Point neighborhood. Our kitchen celebrates 
                  the ancient traditions of Puebla and Oaxaca.
                </p>
                <p>
                  From complex moles crafted over days to vibrant sauces that sing with fresh 
                  ingredients, every dish tells a story of heritage and craftsmanship.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="w-16 h-px bg-primary/30" />
                <Link href="/menu" className="text-primary font-semibold tracking-wide hover:text-primary-dark transition-colors">
                  Explore Our Menu
                </Link>
              </div>
            </div>

            {/* Image Column - Stacked with offset */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] ml-8">
                <Image
                  src="/img/horz-plat-frosted-blue.jpg"
                  alt="Plated dish"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Offset decorative frame */}
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square border-2 border-primary/20 -z-10" />
              {/* Small accent image */}
              <div className="absolute -bottom-12 -right-4 w-32 h-32 shadow-xl">
                <Image
                  src="/img/bar.jpg"
                  alt="Bar detail"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Full width with cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary/60 text-sm tracking-widest uppercase mb-4">The Experience</p>
            <h2 className="text-primary text-4xl sm:text-5xl font-quiche-bold">Crafted With Passion</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Regional Cuisine", desc: "Authentic flavors from the Mixteca region of Puebla and Oaxaca", img: "/img/horz-mixer-front.jpg" },
              { title: "Artisanal Spirits", desc: "Mexico's finest agave distillates and craft cocktails", img: "/img/bar.jpg" },
              { title: "Warm Atmosphere", desc: "An intimate setting where every guest feels at home", img: "/img/molino.jpg" }
            ].map((item, i) => (
              <div 
                key={item.title}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-primary text-xl font-quiche-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary/60 text-sm tracking-widest uppercase mb-4">Stay Connected</p>
          <h2 className="text-primary text-4xl sm:text-5xl font-quiche-bold mb-8">Follow Our Journey</h2>
          
          <div className="flex justify-center gap-8">
            <a
              href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group"
            >
              <div className="p-4 border border-primary/20 rounded-full hover:bg-primary hover:border-primary transition-all duration-300">
                <FacebookIcon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="group"
            >
              <div className="p-4 border border-primary/20 rounded-full hover:bg-primary hover:border-primary transition-all duration-300">
                <InstagramIcon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Back to main link */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link 
          href="/"
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded shadow-lg hover:bg-primary-dark transition-colors"
        >
          Back to Original
        </Link>
      </div>
    </div>
  );
}
