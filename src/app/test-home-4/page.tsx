"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Design 4: Organic Flowing - Scroll-driven Narrative with Soft Curves
// Aesthetic: Organic, flowing, soft gradients, elegant typography, nature-inspired

export default function TestHome4() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-x-hidden">
      {/* Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Floating Organic Shapes Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
          style={{ transform: `translateY(${scrollProgress * 100}px)` }}
        />
        <div 
          className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"
          style={{ transform: `translateY(${-scrollProgress * 150}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          style={{ transform: `translateY(${-scrollProgress * 80}px)` }}
        />
      </div>

      {/* Hero Section - Organic Flow */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 py-32">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Floating Decorative Element */}
          <div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 opacity-20"
            style={{
              opacity: isLoaded ? 0.2 : 0,
              transform: isLoaded ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-20px)",
              transition: "all 1.5s ease 0.2s"
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-primary">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.1" />
            </svg>
          </div>

          {/* Pre-title */}
          <p 
            className="text-primary/70 text-sm tracking-[0.5em] uppercase mb-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.3s"
            }}
          >
            Contemporary Mexican Cuisine
          </p>

          {/* Main Title - Flowing Typography */}
          <h1 
            className="mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
            }}
          >
            <span className="block text-primary text-7xl sm:text-8xl lg:text-9xl font-quiche-bold tracking-tight">
              Dolores
            </span>
            <span className="block text-primary/50 text-2xl sm:text-3xl font-quiche-regular tracking-[0.3em] mt-4">
              PROVIDENCE
            </span>
          </h1>

          {/* Organic Divider */}
          <div 
            className="flex items-center justify-center gap-4 my-10"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease 0.6s"
            }}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/40" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-primary/40 to-primary/40" />
          </div>

          {/* Subtitle */}
          <p 
            className="text-gray-600 text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed mb-12"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.7s"
            }}
          >
            A celebration of Oaxacan and Pueblan traditions in the heart of Fox Point
          </p>

          {/* CTAs - Soft Rounded */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.9s"
            }}
          >
            <Link 
              href="https://app.upserve.com/s/dolores-providence"
              className="group px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary-dark transition-all duration-300"
            >
              Order Online
            </Link>
            <Link 
              href="https://www.exploretock.com/dolores/"
              className="group px-10 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Location */}
          <p 
            className="text-gray-500 text-sm mt-12 tracking-wide"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease 1.1s"
            }}
          >
            100 Hope Street, Providence, Rhode Island
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease 1.3s"
          }}
        >
          <span className="text-primary/50 text-xs tracking-widest uppercase">Discover</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Image Reveal Section */}
      <section className="relative py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Curved Image Display */}
          <div className="relative">
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/img/molino.jpg"
                alt="Dolores Interior"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 left-8 right-8 sm:left-auto sm:right-12 sm:w-80 bg-white rounded-2xl shadow-xl p-6">
              <p className="text-primary/60 text-xs tracking-widest uppercase mb-2">Limited Time</p>
              <h3 className="text-primary text-xl font-quiche-bold mb-2">Restaurant Week</h3>
              <p className="text-gray-600 text-sm mb-4">January 25 - February 7 | 3 courses $40</p>
              <Link href="/menu#restaurant-week" className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors">
                View Menu &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Flowing Cards */}
      <section className="py-32 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 text-primary/60 text-sm tracking-[0.3em] uppercase mb-6">
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <span>Our Story</span>
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
            <h2 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-quiche-bold leading-tight">
              Where Heritage<br />Meets Heart
            </h2>
          </div>

          {/* Flowing Story Cards */}
          <div className="space-y-16">
            {/* Card 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/img/horz-plat-frosted-blue.jpg"
                    alt="Plated dish"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-primary text-2xl font-quiche-bold mb-4">The Mixteca Region</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our kitchen draws inspiration from the ancient traditions of the Mixteca — 
                  the mountainous region spanning Puebla and Oaxaca where complex moles and 
                  vibrant sauces have been perfected over generations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/img/bar.jpg"
                    alt="Bar"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-right lg:text-left">
                <h3 className="text-primary text-2xl font-quiche-bold mb-4">Artisanal Spirits</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our beverage program celebrates Mexico&apos;s artisanal agave distillates — 
                  from small-batch mezcals to rare tequilas. Each cocktail is crafted 
                  to complement and elevate the dining experience.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/img/horz-mixer-front.jpg"
                    alt="Mixer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-primary text-2xl font-quiche-bold mb-4">Fox Point Welcome</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nestled in Providence&apos;s historic Fox Point neighborhood, 
                  Dolores offers an intimate atmosphere where every guest 
                  becomes part of our extended family.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link 
              href="/menu"
              className="inline-flex items-center gap-3 text-primary font-semibold text-lg hover:gap-5 transition-all"
            >
              <span>Explore Our Full Menu</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Pills */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Traditional Moles",
              "Artisanal Mezcal",
              "Craft Cocktails",
              "Regional Cuisine",
              "Intimate Atmosphere",
              "Seasonal Specials"
            ].map((item, i) => (
              <div 
                key={item}
                className="px-6 py-3 bg-white border border-primary/20 rounded-full text-primary font-semibold shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - Soft & Organic */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-[2rem] p-12 text-center">
            <div className="inline-flex items-center gap-3 text-primary/60 text-sm tracking-[0.3em] uppercase mb-6">
              <span>Stay Connected</span>
            </div>
            <h2 className="text-primary text-3xl sm:text-4xl font-quiche-bold mb-8">
              Join Our Community
            </h2>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <FacebookIcon className="w-6 h-6 text-primary" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/dolorespvd/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <InstagramIcon className="w-6 h-6 text-primary" />
                </div>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-primary/10">
              <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-600">
                <div>
                  <p className="text-xs tracking-widest uppercase text-primary/60 mb-1">Phone</p>
                  <p>(401) 409-2075</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-primary/60 mb-1">Email</p>
                  <p>info@dolorespvd.com</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-primary/60 mb-1">Address</p>
                  <p>100 Hope St, Providence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to main link */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link 
          href="/"
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        >
          Back to Original
        </Link>
      </div>
    </div>
  );
}
