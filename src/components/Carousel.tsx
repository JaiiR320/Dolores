"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance to trigger navigation (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!autoSlide || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, slides.length, currentSlide, isPaused]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Touch handlers for swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Hover handlers for pause functionality
  const onMouseEnter = () => setIsPaused(true);
  const onMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full shrink-0"
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
