"use client";

import HeroSection from "@/components/HeroSection";

export default function OrderPage() {
  return (
    <>
      {/* Order Button Section */}
      <HeroSection
        imageSrc="/img/horz-mixer-front.jpg"
        imageAlt="Mixers"
        buttonText="Order Here"
        buttonLink="https://app.upserve.com/s/dolores-providence"
      />

      {/* Welcome Section */}
      <div className="container mx-auto px-6 pb-10">
        <div className="mx-auto max-w-3xl pt-10 text-center">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Online Ordering
          </h1>
          <hr className="mx-auto mt-3 mb-6 w-4/5 border-t-2 border-neutral-300/80" />
          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            Enjoy an authentic mexican meal in the comfort of your home! With
            an arrangement of our signature salsas, tasty beverage mixes, and
            traditional mexican grub, you can bring the Mixteca region to the
            comfort of your own home!
          </p>
        </div>
        <hr className="my-6 border-neutral-200" />
      </div>

      {/* Gift Cards Section */}
      <div className="container mx-auto px-6 pb-12">
        <div className="mx-auto max-w-3xl pt-10 text-center">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Digital Gift Cards
          </h1>
          <p className="mt-6">
            <button
              type="button"
              className="bg-primary border border-primary transition hover:bg-primary-dark hover:border-primary-dark text-white px-8 py-3 rounded text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://app.upserve.com/b/dolores/gift-card",
                  "_self",
                )
              }
            >
              Get Here
            </button>
          </p>
        </div>
        <hr className="my-6 border-neutral-200" />
      </div>
    </>
  );
}
