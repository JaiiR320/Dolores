"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Design 3: Cinematic Luxury - Full-bleed imagery with dramatic reveals
// Aesthetic: High-end, cinematic, immersive photography, luxury feel

export default function TestHome3() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const images = ["/img/molino.jpg", "/img/bar.jpg", "/img/horz-mixer-front.jpg"];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-[#0a0a12] text-white overflow-x-hidden">
      {/* Hero Section - Cinematic Full-bleed */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images with Crossfade */}
        {images.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-2000"
            style={{ opacity: activeImage === i ? 1 : 0 }}
          >
            <Image
              src={img}
              alt="Dolores atmosphere"
              fill
              className="object-cover"
              priority={i === 0}
              unoptimized
            />
          </div>
        ))}
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12]/60 to-transparent" />
        
        {/* Film Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-end pb-32 px-8 lg:px-16 z-10">
          {/* Accent Line */}
          <div 
            className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-primary/50 mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "top",
              transition: "all 1.5s ease 0.3s"
            }}
          />

          {/* Tagline */}
          <p 
            className="text-primary text-sm tracking-[0.4em] uppercase mb-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.5s"
            }}
          >
            Contemporary Mexican
          </p>

          {/* Main Title */}
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-quiche-bold leading-none mb-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
            }}
          >
            <span className="text-white">DOLORES</span>
            <span className="block text-3xl sm:text-4xl font-quiche-regular text-white/60 tracking-[0.2em] mt-2">
              PROVIDENCE
            </span>
          </h1>

          {/* CTAs */}
          <div 
            className="flex flex-wrap gap-6 mt-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 1s"
            }}
          >
            <Link 
              href="https://app.upserve.com/s/dolores-providence"
              className="group flex items-center gap-3 text-white hover:text-primary transition-colors"
            >
              <span className="text-sm tracking-widest uppercase">Order Online</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              href="https://www.exploretock.com/dolores/"
              className="group flex items-center gap-3 text-white hover:text-primary transition-colors"
            >
              <span className="text-sm tracking-widest uppercase">Reserve</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-3 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`h-1 transition-all duration-500 ${
                activeImage === i ? "w-12 bg-primary" : "w-6 bg-white/30"
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>

        {/* Location Badge */}
        <div 
          className="absolute top-8 right-8 text-right z-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease 1.2s"
          }}
        >
          <p className="text-white/50 text-xs tracking-widest uppercase">Fox Point</p>
          <p className="text-white text-sm">100 Hope Street</p>
        </div>
      </section>

      {/* Restaurant Week - Cinematic Banner */}
      <section className="relative py-24 px-8 lg:px-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Limited Engagement</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-quiche-bold leading-tight mb-6">
                Restaurant<br />Week 2026
              </h2>
              <div className="flex items-center gap-4 text-white/60 mb-8">
                <span>January 25 - February 7</span>
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>3 Courses</span>
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>$40</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/menu#restaurant-week" className="px-8 py-4 bg-primary text-white font-semibold tracking-wider hover:bg-primary-light transition-colors">
                  VIEW MENU
                </Link>
                <a href="https://www.exploretock.com/dolores/" className="px-8 py-4 border border-white/30 text-white font-semibold tracking-wider hover:bg-white/10 transition-colors">
                  RESERVE
                </a>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="/img/horz-plat-frosted-blue.jpg"
                alt="Featured dish"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Frame Accent */}
              <div className="absolute -inset-4 border border-primary/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Cinematic Text */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase">The Story</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-quiche-regular text-white/90 leading-relaxed">
              <span className="text-primary font-quiche-bold">Dolores</span> is a celebration of the 
              <span className="text-primary"> Mixteca</span> — where the mountains of Puebla and Oaxaca 
              have shaped culinary traditions for millennia.
            </p>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Our kitchen honors this heritage through complex moles, vibrant salsas, 
              and dishes that tell the story of generations.
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <Link 
              href="/menu"
              className="group flex items-center gap-4 text-primary text-sm tracking-widest uppercase hover:gap-6 transition-all"
            >
              <span>Discover the Menu</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Cinematic */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {[
              { src: "/img/molino.jpg", span: "col-span-2 row-span-2" },
              { src: "/img/bar.jpg", span: "" },
              { src: "/img/horz-mixer-front.jpg", span: "" },
              { src: "/img/horz-plat-frosted-blue.jpg", span: "col-span-2" },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`relative aspect-square overflow-hidden group ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { 
                title: "Regional Cuisine",
                desc: "Authentic flavors from the Mixteca region, where tradition meets contemporary technique.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              { 
                title: "Artisanal Spirits",
                desc: "Mexico's finest agave distillates — mezcal, tequila, and rare artisanal expressions.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: "Craft Cocktails",
                desc: "Innovative drinks designed to complement and elevate the dining experience.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/30 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-quiche-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Stay Connected</p>
          <h2 className="text-3xl sm:text-4xl font-quiche-bold text-white mb-8">Follow Our Journey</h2>
          
          <div className="flex justify-center gap-8">
            <a
              href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <FacebookIcon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="group"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <InstagramIcon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
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
