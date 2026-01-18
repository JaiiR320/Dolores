"use client";

import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  return (
    <div className="relative">
      <div className="slide-container relative w-full">
        <div className="slide block relative w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="w-full h-auto"
            unoptimized
            priority
          />
          <div className="hero-overlay text-center text-white">
            <button
              type="button"
              id="order-btn"
              className="btn-primary text-white px-12 py-4 rounded text-4xl font-semibold hover:opacity-90 transition-opacity"
              onClick={() => window.open(buttonLink, "_self")}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
