"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselSlide {
  src: string;
  alt: string;
  caption?: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

interface CarouselProps {
  slides: CarouselSlide[];
  showIndicators?: boolean;
  autoSlide?: boolean;
  interval?: number;
}

export default function Carousel({
  slides,
  showIndicators = true,
  autoSlide = true,
  interval = 5000,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="hidden sm:flex absolute bottom-4 left-0 right-0 justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slides */}
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "block" : "hidden"
            } relative w-full`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="w-full h-auto"
              unoptimized
              priority={index === 0}
            />
            {slide.caption && (
              <div className="hero-text-container">
                {slide.caption.title && (
                  <h1 className="hero-title">
                    {slide.caption.title}
                  </h1>
                )}
                {slide.caption.subtitle && (
                  <h3 className="hero-subtitle">
                    {slide.caption.subtitle}
                  </h3>
                )}
                {slide.caption.buttonText && slide.caption.buttonLink && (
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() =>
                      window.open(slide.caption!.buttonLink, "_self")
                    }
                  >
                    {slide.caption.buttonText}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-4 z-10 hover:bg-black/10 transition-colors"
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-4 z-10 hover:bg-black/10 transition-colors"
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
