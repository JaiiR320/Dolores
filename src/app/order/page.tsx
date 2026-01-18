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
      <div className="container mx-auto pb-8">
        <div className="w-3/4 mx-auto pt-8 text-center">
          <div>
            <h1 className="text-primary text-4xl md:text-5xl font-bold">
              Online Ordering
            </h1>
          </div>
          <hr className="border-t-2 border-[#b4b4b4] w-[95%] mt-1 mb-4" />
          <div>
            <p className="text-lg md:text-xl">
              Enjoy an authentic mexican meal in the comfort of your home! With
              an arrangement of our signature salsas, tasty beverage mixes, and
              traditional mexican grub, you can bring the Mixteca region to the
              comfort of your own home!
            </p>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Gift Cards Section */}
      <div className="container mx-auto pb-8">
        <div className="w-3/4 mx-auto pt-8 text-center">
          <div>
            <h1 className="text-primary text-4xl md:text-5xl font-bold">
              Digital Gift Cards
            </h1>
            <p className="mt-6">
                <button
                  type="button"
                  className="bg-primary border border-primary transition-colors hover:bg-primary-light hover:border-primary-light text-white px-8 py-3 rounded text-lg font-semibold hover:opacity-90 transition-opacity"
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
        </div>
        <hr className="my-4 border-gray-300" />
      </div>
    </>
  );
}
