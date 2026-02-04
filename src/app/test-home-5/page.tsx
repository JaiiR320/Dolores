"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

// Design 5: Bold Brutalist/Asymmetric - Dramatic overlapping elements, strong typography
// Aesthetic: Brutalist, asymmetric, overlapping elements, bold contrast, modern gallery

export default function TestHome5() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Bold Asymmetric Hero */}
      <section className="relative min-h-screen">
        {/* Background Split */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 bg-primary" />
          <div className="w-2/3 bg-white" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-12 gap-4 min-h-screen items-center">
            {/* Left Column - Title */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12">
              {/* Oversized Typography */}
              <div 
                className="relative"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateX(0)" : "translateX(-100px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <span className="absolute -left-4 -top-16 text-[12rem] lg:text-[16rem] font-quiche-bold text-white/10 leading-none select-none pointer-events-none">
                  D
                </span>
                <h1 className="relative">
                  <span className="block text-white text-7xl sm:text-8xl lg:text-9xl font-quiche-bold leading-none tracking-tight">
                    DOLORES
                  </span>
                  <span className="block text-primary-light text-xl sm:text-2xl tracking-[0.5em] mt-4 font-quiche-regular">
                    PROVIDENCE
                  </span>
                </h1>
              </div>

              {/* Location Tag - Brutalist Style */}
              <div 
                className="mt-12 inline-block"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease 0.3s"
                }}
              >
                <div className="bg-white px-6 py-4 inline-block shadow-brutal">
                  <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-1">Fox Point</p>
                  <p className="text-primary font-quiche-bold text-lg">100 Hope Street</p>
                </div>
              </div>

              {/* CTAs - Bold Blocks */}
              <div 
                className="mt-8 flex flex-wrap gap-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease 0.5s"
                }}
              >
                <Link 
                  href="https://app.upserve.com/s/dolores-providence"
                  className="group relative bg-white text-primary px-8 py-4 font-bold tracking-wider uppercase shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all"
                >
                  Order Online
                </Link>
                <Link 
                  href="https://www.exploretock.com/dolores/"
                  className="group relative bg-primary-dark text-white px-8 py-4 font-bold tracking-wider uppercase shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all"
                >
                  Reserve
                </Link>
              </div>
            </div>

            {/* Right Column - Asymmetric Image Collage */}
            <div className="col-span-12 lg:col-span-7 relative py-12">
              <div className="relative h-[600px] lg:h-[700px]">
                {/* Main Image - Large */}
                <div 
                  className="absolute top-0 right-0 w-4/5 h-3/5 shadow-brutal-lg"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded 
                      ? `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)` 
                      : "translateX(100px)",
                    transition: isLoaded ? "opacity 1s ease 0.2s" : "all 1s ease 0.2s"
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
                  {/* Bold Border */}
                  <div className="absolute inset-0 border-4 border-primary" />
                </div>

                {/* Secondary Image - Overlapping */}
                <div 
                  className="absolute bottom-0 left-0 w-2/3 h-2/5 shadow-brutal-lg z-10"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded 
                      ? `translateX(${mousePosition.x * -0.3}px) translateY(${mousePosition.y * -0.3}px)` 
                      : "translateY(100px)",
                    transition: isLoaded ? "opacity 1s ease 0.4s" : "all 1s ease 0.4s"
                  }}
                >
                  <Image
                    src="/img/bar.jpg"
                    alt="Bar"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 border-4 border-white" />
                </div>

                {/* Text Block Overlay */}
                <div 
                  className="absolute bottom-1/4 right-0 bg-primary text-white p-6 z-20 max-w-xs shadow-brutal"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateX(0)" : "translateX(50px)",
                    transition: "all 0.8s ease 0.6s"
                  }}
                >
                  <p className="text-xs tracking-widest uppercase mb-2">Contemporary</p>
                  <p className="font-quiche-bold text-lg">Mexican Cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Week - Bold Banner */}
      <section className="relative py-20 bg-gray-100">
        {/* Diagonal Stripe */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 bottom-0 w-1/2 bg-primary/5 -skew-x-12" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative shadow-brutal-lg">
                <Image
                  src="/img/horz-plat-frosted-blue.jpg"
                  alt="Restaurant Week dish"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="absolute inset-0 border-4 border-primary" />
                {/* Price Tag */}
                <div className="absolute -top-4 -right-4 bg-white px-6 py-4 shadow-brutal">
                  <p className="text-primary font-quiche-bold text-3xl">$40</p>
                  <p className="text-xs tracking-widest uppercase text-gray-500">3 courses</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <div className="inline-block bg-primary text-white px-4 py-1 text-xs tracking-widest uppercase mb-4">
                Limited Time
              </div>
              <h2 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-quiche-bold leading-none mb-6">
                RESTAURANT<br />WEEK 2026
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                January 25 — February 7, 2026<br />
                Experience our carefully curated tasting menu
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/menu#restaurant-week" className="bg-primary text-white px-8 py-4 font-bold tracking-wider uppercase shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all">
                  View Menu
                </Link>
                <a href="https://www.exploretock.com/dolores/" className="bg-white text-primary border-2 border-primary px-8 py-4 font-bold tracking-wider uppercase hover:bg-primary hover:text-white transition-all">
                  Reserve
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Large Text */}
            <div className="col-span-12 lg:col-span-6 flex items-center">
              <div>
                <div className="inline-block bg-primary/10 px-4 py-1 text-primary text-xs tracking-widest uppercase mb-6">
                  About Us
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-quiche-bold text-primary leading-tight mb-8">
                  THE<br />MIXTECA<br />TRADITION
                </h2>
                <div className="space-y-6 text-gray-700 text-lg">
                  <p>
                    <span className="text-primary font-quiche-bold">Dolores</span> brings the soul 
                    of southern Mexico to Providence&apos;s Fox Point. Our kitchen celebrates the 
                    Mixteca region — where Puebla meets Oaxaca.
                  </p>
                  <p>
                    Complex moles, vibrant sauces, traditional stews. Each dish carries 
                    generations of knowledge and passion.
                  </p>
                </div>
                <Link 
                  href="/menu"
                  className="inline-flex items-center gap-4 mt-8 text-primary font-bold tracking-wider uppercase hover:gap-6 transition-all"
                >
                  <span>Explore Menu</span>
                  <span className="text-2xl">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Image Grid */}
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square shadow-brutal">
                  <Image
                    src="/img/horz-mixer-front.jpg"
                    alt="Mixer"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 border-2 border-primary" />
                </div>
                <div className="relative aspect-square mt-12 shadow-brutal">
                  <Image
                    src="/img/bar.jpg"
                    alt="Bar"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 border-2 border-primary" />
                </div>
                <div className="relative aspect-[2/1] col-span-2 shadow-brutal">
                  <Image
                    src="/img/molino.jpg"
                    alt="Interior"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 border-2 border-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bold Blocks */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { num: "01", title: "Regional Moles", desc: "Complex sauces perfected over generations in the mountains of Oaxaca and Puebla" },
              { num: "02", title: "Agave Spirits", desc: "Mexico's finest artisanal mezcals, tequilas, and rare distillates" },
              { num: "03", title: "Craft Cocktails", desc: "Innovative drinks designed to complement our bold cuisine" }
            ].map((item, i) => (
              <div 
                key={item.num}
                className={`p-12 border-white/10 ${i < 2 ? "border-r" : ""} group hover:bg-white/10 transition-colors`}
              >
                <span className="text-white/20 text-6xl font-quiche-bold">{item.num}</span>
                <h3 className="text-white text-2xl font-quiche-bold mt-4 mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - Brutalist */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-primary/10 px-4 py-1 text-primary text-xs tracking-widest uppercase mb-6">
              Connect
            </div>
            <h2 className="text-primary text-4xl sm:text-5xl font-quiche-bold mb-8">
              FOLLOW<br />THE JOURNEY
            </h2>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="group"
              >
                <div className="w-16 h-16 bg-primary flex items-center justify-center shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all">
                  <FacebookIcon className="w-7 h-7 text-white" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/dolorespvd/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="group"
              >
                <div className="w-16 h-16 bg-primary flex items-center justify-center shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all">
                  <InstagramIcon className="w-7 h-7 text-white" />
                </div>
              </a>
            </div>

            {/* Contact Grid */}
            <div className="mt-16 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Phone", value: "(401) 409-2075" },
                { label: "Email", value: "info@dolorespvd.com" },
                { label: "Address", value: "100 Hope St, Providence" }
              ].map((item) => (
                <div key={item.label} className="bg-gray-100 p-6">
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">{item.label}</p>
                  <p className="text-primary font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for Brutalist Shadows */}
      <style jsx global>{`
        .shadow-brutal {
          box-shadow: 6px 6px 0 0 #385CC7;
        }
        .shadow-brutal-hover {
          box-shadow: 8px 8px 0 0 #385CC7;
        }
        .shadow-brutal-lg {
          box-shadow: 10px 10px 0 0 rgba(56, 92, 199, 0.3);
        }
      `}</style>

      {/* Back to main link */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link 
          href="/"
          className="px-4 py-2 bg-primary text-white text-sm font-semibold shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all"
        >
          Back to Original
        </Link>
      </div>
    </div>
  );
}
