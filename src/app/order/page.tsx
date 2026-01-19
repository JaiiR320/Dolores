"use client";

import HeroSection from "@/components/HeroSection";
import { trackOrderClick, trackGiftCardClick } from "@/lib/analytics";

export default function OrderPage() {
  return (
    <>
      {/* Order Button Section */}
      <HeroSection
        imageSrc="/img/horz-mixer-front.jpg"
        imageAlt="Mixers"
        buttonText="Order Here"
        buttonLink="https://app.upserve.com/s/dolores-providence"
        onButtonClick={() => trackOrderClick("order_page")}
      />

      {/* Welcome Section */}
      <div className="container mx-auto px-6 pb-10">
        <div className="mx-auto max-w-3xl pt-10 text-center">
          <h1 className="section-heading">
            Online Ordering
          </h1>
          <hr className="divider-heading" />
          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            Enjoy an authentic mexican meal in the comfort of your home! With
            an arrangement of our signature salsas, tasty beverage mixes, and
            traditional mexican grub, you can bring the Mixteca region to the
            comfort of your own home!
          </p>
        </div>
        <hr className="divider" />
      </div>

      {/* Gift Cards Section */}
      <div className="container mx-auto px-6 pb-12">
        <div className="mx-auto max-w-3xl pt-10 text-center">
          <h1 className="section-heading">
            Digital Gift Cards
          </h1>
          <p className="mt-6">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                trackGiftCardClick();
                window.open(
                  "https://app.upserve.com/b/dolores/gift-card",
                  "_self",
                );
              }}
            >
              Get Here
            </button>
          </p>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
}
