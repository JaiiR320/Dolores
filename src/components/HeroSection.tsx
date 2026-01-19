"use client";

import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  onButtonClick?: () => void;
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  onButtonClick,
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
          <div className="hero-text-container">
            <button
              type="button"
              className="btn-primary px-12 py-4 text-2xl"
              onClick={() => {
                onButtonClick?.();
                window.open(buttonLink, "_self");
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
