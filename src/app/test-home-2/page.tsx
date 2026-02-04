"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Design 2: Art Deco Geometric with Split Screen Reveals
// Aesthetic: Bold geometric patterns, dramatic reveals, art deco elegance

export default function TestHome2() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Geometric Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#385CC7" strokeWidth="1"/>
              <circle cx="40" cy="40" r="8" fill="none" stroke="#385CC7" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-pattern)"/>
        </svg>
      </div>

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Content */}
        <div className="lg:w-1/2 relative z-10 bg-white flex items-center justify-center p-8 lg:p-16">
          <div 
            className="max-w-lg"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateX(0)" : "translateX(-50px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
            }}
          >
            {/* Decorative top line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase">Providence, RI</span>
            </div>

            {/* Main Title with Art Deco Styling */}
            <h1 className="text-primary text-5xl sm:text-6xl lg:text-7xl font-quiche-bold leading-none mb-6">
              <span className="block">DOLORES</span>
              <span className="block text-2xl sm:text-3xl font-quiche-regular tracking-widest mt-2 text-primary/70">
                PVD
              </span>
            </h1>

            {/* Decorative Diamond Divider */}
            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <div className="w-3 h-3 bg-primary rotate-45" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Contemporary Mexican cuisine from the <span className="text-primary font-quiche-bold">Mixteca</span> region. 
              A celebration of Puebla and Oaxaca&apos;s rich culinary heritage.
            </p>

            {/* CTA Buttons with Geometric Styling */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://app.upserve.com/s/dolores-providence"
                className="group relative px-8 py-4 bg-primary text-white font-semibold tracking-wider text-center overflow-hidden"
              >
                <span className="relative z-10">ORDER ONLINE</span>
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
              </Link>
              <Link 
                href="https://www.exploretock.com/dolores/"
                className="group relative px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wider text-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                RESERVE
              </Link>
            </div>

            {/* Address with Geometric Accent */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-8 h-8 border border-primary/30 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rotate-45" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">100 Hope Street</p>
                <p className="text-gray-600 text-sm">Providence, Rhode Island</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image with Geometric Overlay */}
        <div 
          className="lg:w-1/2 relative min-h-[60vh] lg:min-h-screen"
          style={{
            clipPath: isLoaded ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            transition: "clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
          }}
        >
          <Image
            src="/img/molino.jpg"
            alt="Dolores Interior"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Geometric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
          
          {/* Corner Decorations */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-white/30">
            <div className="absolute top-2 right-2 w-full h-full border border-white/20" />
          </div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/30 rotate-45" />
        </div>
      </section>

      {/* Restaurant Week - Geometric Card */}
      <section className="relative py-20 px-4 sm:px-8 bg-gray-50">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/10" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/10" />

        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 sm:p-12 shadow-xl relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-primary" />
                <div className="w-3 h-3 bg-primary rotate-45" />
                <div className="w-16 h-px bg-primary" />
              </div>
              
              <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-quiche-bold mb-4">
                Providence Restaurant Week
              </h2>
              <p className="text-gray-600 text-lg mb-2">January 25 - February 7, 2026</p>
              <p className="text-primary font-quiche-bold text-2xl mb-8">3 Courses | $40</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/menu#restaurant-week" className="btn-primary">
                  View Tasting Menu
                </Link>
                <a href="https://www.exploretock.com/dolores/" className="btn-secondary">
                  Reserve Your Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Geometric Grid */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image
                  src="/img/horz-plat-frosted-blue.jpg"
                  alt="Plated dish"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 border-4 border-white" />
              </div>
              <div className="relative aspect-square mt-12">
                <Image
                  src="/img/bar.jpg"
                  alt="Bar"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 border-4 border-white" />
              </div>
              <div className="relative aspect-square -mt-12">
                <Image
                  src="/img/horz-mixer-front.jpg"
                  alt="Mixer"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 border-4 border-white" />
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <p className="text-xs tracking-widest uppercase mb-2">Est.</p>
                    <p className="text-4xl font-quiche-bold">2019</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 bg-primary rotate-45" />
                <span className="text-primary text-xs tracking-[0.3em] uppercase">Our Heritage</span>
              </div>
              
              <h2 className="text-primary text-4xl lg:text-5xl font-quiche-bold leading-tight mb-6">
                A Taste of<br />the Mixteca
              </h2>

              <div className="w-16 h-px bg-primary mb-6" />

              <div className="space-y-4 text-gray-700">
                <p>
                  Located in Providence&apos;s historic Fox Point neighborhood, 
                  <span className="text-primary font-quiche-bold"> Dolores</span> brings the authentic 
                  flavors of southern Mexico to New England.
                </p>
                <p>
                  Our kitchen celebrates the culinary traditions of the Mixteca region, 
                  where generations of knowledge come together in every mole, salsa, and stew.
                </p>
                <p>
                  The beverage program showcases 
                  <span className="text-primary font-quiche-bold"> Mexico&apos;s finest artisanal agave distillates</span>, 
                  paired with craft cocktails designed to complement our cuisine.
                </p>
              </div>

              <Link 
                href="/menu" 
                className="inline-flex items-center gap-3 mt-8 text-primary font-semibold hover:gap-5 transition-all"
              >
                <span>Explore Menu</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Art Deco Cards */}
      <section className="py-24 px-4 sm:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-white/50" />
              <div className="w-3 h-3 border border-white rotate-45" />
              <div className="w-16 h-px bg-white/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-quiche-bold">The Experience</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Moles & Sauces", 
                desc: "Complex flavors developed over days using traditional techniques passed down through generations",
                num: "01"
              },
              { 
                title: "Agave Spirits", 
                desc: "A curated selection of mezcal, tequila, and rare artisanal distillates from across Mexico",
                num: "02"
              },
              { 
                title: "Craft Cocktails", 
                desc: "Innovative drinks that honor tradition while embracing modern mixology techniques",
                num: "03"
              }
            ].map((item) => (
              <div key={item.num} className="group relative p-8 border border-white/20 hover:bg-white/10 transition-colors">
                {/* Corner Decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/50" />
                
                <span className="text-5xl font-quiche-bold text-white/20">{item.num}</span>
                <h3 className="text-2xl font-quiche-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-3 h-3 bg-primary rotate-45" />
          </div>
          <h2 className="text-primary text-4xl sm:text-5xl font-quiche-bold mb-4">Connect</h2>
          <p className="text-gray-600 mb-8">Follow us for the latest updates and behind-the-scenes glimpses</p>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group relative w-16 h-16 flex items-center justify-center"
            >
              <div className="absolute inset-0 border-2 border-primary rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              <FacebookIcon className="w-7 h-7 text-primary relative z-10" />
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="group relative w-16 h-16 flex items-center justify-center"
            >
              <div className="absolute inset-0 border-2 border-primary rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              <InstagramIcon className="w-7 h-7 text-primary relative z-10" />
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
