"use client";

import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export default function TestHome9() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.7s forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out 1s forwards;
          opacity: 0;
        }
      `}</style>

      {/* ========== HERO SECTION - DRAMATIC DIAGONAL SPLIT ========== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Left Side - Deep Blue with texture */}
        <div className="absolute inset-0 w-full md:w-[55%] bg-primary z-10">
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Diagonal clip on desktop */}
          <div 
            className="hidden md:block absolute inset-0 bg-primary"
            style={{
              clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
            }}
          />
          
          {/* Content */}
          <div className="animate-slide-in-left relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            {/* Logo mark */}
            <div className="mb-8">
              <Image
                src="/img/DoloresBrand-02.png"
                alt="Dolores"
                width={180}
                height={180}
                unoptimized
                className="w-28 md:w-36 lg:w-44 h-auto brightness-0 invert opacity-90"
              />
            </div>
            
            <h1 
              className="font-quiche-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6"
              style={{ textShadow: "2px 4px 20px rgba(0,0,0,0.3)" }}
            >
              DOLORES
              <span className="block text-[#c9a86c] text-2xl sm:text-3xl md:text-4xl font-quiche-regular tracking-[0.3em] mt-2">
                PVD
              </span>
            </h1>
            
            <p className="font-quiche-regular text-white/80 text-lg md:text-xl lg:text-2xl max-w-md mb-10 leading-relaxed">
              Contemporary Mexican from the Mixteca region of Puebla & Oaxaca
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.exploretock.com/dolores/"
                className="group relative px-8 py-4 bg-white text-primary font-quiche-bold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  RESERVE A TABLE
                </span>
                <div className="absolute inset-0 bg-[#c9a86c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              
              <Link
                href="https://app.upserve.com/s/dolores-providence"
                className="px-8 py-4 border-2 border-white/40 text-white font-quiche-bold text-lg tracking-wide hover:border-[#c9a86c] hover:text-[#c9a86c] transition-all duration-300"
              >
                ORDER ONLINE
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="animate-fade-in-scale absolute inset-0 md:left-[40%]">
          <Image
            src="/img/molino.jpg"
            alt="Traditional molino grinding"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          {/* Gradient overlay for text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          {/* Left fade for desktop diagonal blend */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent w-1/3" />
        </div>
        
        {/* Element crossing the split - floating text */}
        <div className="animate-fade-in-up hidden md:block absolute bottom-24 left-[35%] z-30 transform -rotate-90 origin-left">
          <span className="font-quiche-regular text-white/30 text-sm tracking-[0.5em] uppercase">
            Fox Point Providence
          </span>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========== RESTAURANT WEEK BANNER ========== */}
      <section 
        className="relative py-8 md:py-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #c9a86c 0%, #d4b87a 50%, #c9a86c 100%)",
        }}
      >
        {/* Decorative pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0,0,0,0.1) 10px,
              rgba(0,0,0,0.1) 20px
            )`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div>
              <span className="font-quiche-regular text-white/80 text-sm tracking-[0.3em] uppercase">
                Providence
              </span>
              <h2 className="font-quiche-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-tight">
                Restaurant Week
              </h2>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-white/30" />
            
            <div className="text-white">
              <p className="font-quiche-regular text-xl md:text-2xl">
                January 25 - February 7, 2026
              </p>
              <p className="font-quiche-bold text-2xl md:text-3xl mt-1">
                3 Courses <span className="text-primary">$40</span>
              </p>
            </div>
            
            <Link
              href="https://www.exploretock.com/dolores/"
              className="mt-4 md:mt-0 px-8 py-3 bg-primary text-white font-quiche-bold tracking-wide hover:bg-primary-dark transition-colors duration-300"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION - TRADITION VS CONTEMPORARY ========== */}
      <section className="relative min-h-screen">
        {/* Split container */}
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Half - Tradition (Dark) */}
          <div className="relative w-full md:w-1/2 min-h-[60vh] md:min-h-screen bg-[#1a1410] overflow-hidden group">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <Image
                src="/img/3.jpg"
                alt="Traditional preparation"
                fill
                className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/60 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <span className="font-quiche-regular text-[#c9a86c] text-sm tracking-[0.4em] uppercase mb-4">
                Rooted In
              </span>
              <h2 className="font-quiche-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                Tradition
              </h2>
              <p className="font-quiche-regular text-white/70 text-lg md:text-xl max-w-md leading-relaxed">
                Ancient recipes from the Mixteca highlands. Moles ground on volcanic stone. 
                Techniques passed through generations.
              </p>
              
              {/* Decorative element */}
              <div className="mt-8 w-24 h-px bg-gradient-to-r from-[#c9a86c] to-transparent" />
            </div>
            
            {/* Hover accent line */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#c9a86c] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </div>
          
          {/* Right Half - Contemporary (Light) */}
          <div className="relative w-full md:w-1/2 min-h-[60vh] md:min-h-screen bg-[#f5f3ef] overflow-hidden group">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <Image
                src="/img/bar.jpg"
                alt="Contemporary bar setting"
                fill
                className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] via-[#f5f3ef]/70 to-[#f5f3ef]/40" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <span className="font-quiche-regular text-primary text-sm tracking-[0.4em] uppercase mb-4">
                Expressed As
              </span>
              <h2 className="font-quiche-bold text-[#1a1410] text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                Contemporary
              </h2>
              <p className="font-quiche-regular text-[#1a1410]/70 text-lg md:text-xl max-w-md leading-relaxed">
                Refined presentations in Fox Point. Artisanal mezcal pairings. 
                A modern sanctuary for timeless flavors.
              </p>
              
              {/* Decorative element */}
              <div className="mt-8 w-24 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            {/* Hover accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </div>
        </div>
        
        {/* Center crossing element - Logo that spans the split */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#c9a86c]/30">
            <Image
              src="/img/squarelogo.png"
              alt="Dolores emblem"
              width={100}
              height={100}
              unoptimized
              className="w-20 lg:w-24 h-auto"
            />
          </div>
        </div>
      </section>

      {/* ========== FEATURED DISHES - DIAGONAL SPLIT ========== */}
      <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Diagonal background split */}
        <div 
          className="absolute inset-0 bg-primary"
          style={{
            clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-quiche-regular text-[#c9a86c] text-sm tracking-[0.4em] uppercase">
              Our Craft
            </span>
            <h2 className="font-quiche-bold text-white text-4xl md:text-5xl lg:text-6xl mt-4">
              Moles & Mezcal
            </h2>
          </div>
          
          {/* Featured grid with overlapping elements */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-0 max-w-5xl mx-auto">
            {/* Left card - offset up */}
            <div className="md:-mt-8 group">
              <div className="relative overflow-hidden bg-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/img/horz-plat-frosted.jpg"
                    alt="Signature dish"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-quiche-bold text-[#1a1410] text-2xl mb-2">
                    Seven Moles of Oaxaca
                  </h3>
                  <p className="font-quiche-regular text-[#1a1410]/60">
                    Complex sauces built from dozens of chiles, spices, and chocolate
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right card - offset down */}
            <div className="md:mt-8 md:-ml-8 group relative z-10">
              <div className="relative overflow-hidden bg-[#1a1410]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/img/light.JPG"
                    alt="Mezcal selection"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                    unoptimized
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-quiche-bold text-white text-2xl mb-2">
                    Artisanal Agave Spirits
                  </h3>
                  <p className="font-quiche-regular text-white/60">
                    Curated collection of small-batch mezcals and rare finds
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* View Menu CTA */}
          <div className="text-center mt-16">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 font-quiche-bold text-white text-lg tracking-wide group"
            >
              <span className="border-b-2 border-white/40 group-hover:border-[#c9a86c] transition-colors duration-300">
                EXPLORE OUR MENU
              </span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CONNECT SECTION - SPLIT FOOTER ========== */}
      <section className="relative min-h-[70vh] flex flex-col md:flex-row">
        {/* Left - Image with overlay */}
        <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-full">
          <Image
            src="/img/horz-dine.jpg"
            alt="Dining atmosphere"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-primary/70" />
          
          {/* Location info */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="font-quiche-regular text-white/60 text-sm tracking-[0.4em] uppercase mb-4">
              Visit Us
            </span>
            <h2 className="font-quiche-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6">
              100 Hope Street
            </h2>
            <p className="font-quiche-regular text-white/80 text-lg md:text-xl mb-2">
              Fox Point, Providence RI
            </p>
            <p className="font-quiche-regular text-white/60 text-base">
              Tuesday - Sunday
            </p>
            
            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.exploretock.com/dolores/"
                className="px-6 py-3 bg-white text-primary font-quiche-bold tracking-wide hover:bg-[#c9a86c] hover:text-white transition-colors duration-300"
              >
                RESERVE
              </Link>
              <Link
                href="https://app.upserve.com/s/dolores-providence"
                className="px-6 py-3 border-2 border-white text-white font-quiche-bold tracking-wide hover:bg-white hover:text-primary transition-colors duration-300"
              >
                ORDER
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right - Connect */}
        <div className="w-full md:w-1/2 bg-[#1a1410] flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <span className="font-quiche-regular text-[#c9a86c] text-sm tracking-[0.4em] uppercase mb-4">
            Stay Connected
          </span>
          <h2 className="font-quiche-bold text-white text-3xl md:text-4xl lg:text-5xl mb-8">
            Follow Along
          </h2>
          
          {/* Social links with hover effects */}
          <div className="flex gap-6 mb-12">
            <a
              href="https://www.facebook.com/dolorespvd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
              aria-label="Follow us on Facebook"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-[#c9a86c] group-hover:bg-[#c9a86c]/10 transition-all duration-300">
                <FacebookIcon className="w-6 h-6 text-white group-hover:text-[#c9a86c] transition-colors duration-300" />
              </div>
              <span className="hidden sm:block font-quiche-regular text-white/60 group-hover:text-white transition-colors duration-300">
                Facebook
              </span>
            </a>
            
            <a
              href="https://www.instagram.com/dolorespvd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
              aria-label="Follow us on Instagram"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-[#c9a86c] group-hover:bg-[#c9a86c]/10 transition-all duration-300">
                <InstagramIcon className="w-6 h-6 text-white group-hover:text-[#c9a86c] transition-colors duration-300" />
              </div>
              <span className="hidden sm:block font-quiche-regular text-white/60 group-hover:text-white transition-colors duration-300">
                Instagram
              </span>
            </a>
          </div>
          
          {/* Newsletter hint */}
          <div className="border-t border-white/10 pt-8">
            <p className="font-quiche-regular text-white/40 text-sm">
              For reservations and private events, contact us directly.
            </p>
          </div>
          
          {/* Footer logo */}
          <div className="mt-auto pt-12">
            <Image
              src="/img/footer-logo.png"
              alt="Dolores"
              width={120}
              height={40}
              unoptimized
              className="opacity-40"
            />
          </div>
        </div>
      </section>

      {/* ========== BOTTOM BAR ========== */}
      <div className="bg-[#0a0a0a] py-6 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-quiche-regular text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Dolores PVD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/menu" className="font-quiche-regular text-white/30 text-sm hover:text-white/60 transition-colors">
              Menu
            </Link>
            <Link href="/reservation" className="font-quiche-regular text-white/30 text-sm hover:text-white/60 transition-colors">
              Reservations
            </Link>
            <Link href="/order" className="font-quiche-regular text-white/30 text-sm hover:text-white/60 transition-colors">
              Order
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
