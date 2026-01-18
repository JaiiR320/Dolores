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
      <div className="relative w-full">
        <div className="block relative w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="w-full h-full"
            unoptimized
            priority
          />
          <div className="absolute left-0 right-0 transform -translate-y-1/2 top-[40%] sm:top-[45%] md:top-1/2 text-center text-white">
            <button
              type="button"
              className="bg-primary border border-primary transition hover:bg-primary-dark hover:border-primary-dark text-white px-12 py-4 rounded text-4xl font-semibold relative top-[35%] [text-shadow:6px_6px_10px_#000]"
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
