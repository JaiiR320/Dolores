"use client";

import HeroSection from "@/components/HeroSection";
import { trackReservationClick } from "@/lib/analytics";

export default function ReservationPage() {
  return (
    <HeroSection
      imageSrc="/img/horz-dine.jpg"
      imageAlt="Dining Room Horizontal"
      buttonText="Reserve Here"
      buttonLink="https://www.exploretock.com/dolores/"
      onButtonClick={trackReservationClick}
    />
  );
}
