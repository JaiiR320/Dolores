"use client";

import Carousel from "@/components/Carousel";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { trackSocialClick } from "@/lib/analytics";

export default function Home() {
  const slides = [
    {
      src: "/img/molino.jpg",
      alt: "Dolores Interior",
      caption: {
        title: "Dolores PVD",
        subtitle: "100 Hope St. Providence RI",
        buttonText: "Order Online",
        buttonLink: "https://app.upserve.com/s/dolores-providence",
      },
    },
    {
      src: "/img/bar.jpg",
      alt: "Bar",
    },
    {
      src: "/img/horz-mixer-front.jpg",
      alt: "Mixer",
    },
  ];

  return (
    <>
      {/* Image Slider */}
      <Carousel slides={slides} />

      {/* Welcome Section */}
      <div className="container mx-auto px-6 pb-10">
        <div className="mx-auto max-w-3xl pt-10 text-center">
          <h1 className="section-heading">
            About Us.
          </h1>
          <hr className="divider-heading" />
          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            <span className="text-primary font-quiche-bold">Dolores</span> is a restaurant located in
            the <span className="text-primary font-quiche-bold">Fox Point neighborhood</span> on the
            east side of Providence. Dolores features contemporary and regional
            Mexican cuisine from the
            <span className="text-primary font-quiche-bold"> Mixteca</span> region of Puebla and Oaxaca,
            drawing inspiration from its many types of Moles, sauces and stews.
            The beverage program boasts it&apos;s strength in
            <span className="text-primary font-quiche-bold"> México&apos;s artisanal agave distillates</span>,
            offering craft cocktails that are a compliment to the cuisine.
          </p>
        </div>
      </div>
      <hr className="divider" />

      {/* Connect Section */}
      <div className="container mx-auto pb-8">
        <div className="text-center pb-8">
          <h2 className="section-subheading">Connect</h2>
          <div className="social pb-8 flex w-full justify-center gap-8">
            <a
              href="https://www.facebook.com/pages/category/Mexican-Restaurant/Dolorespvd-103837847755769/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              onClick={() => trackSocialClick("facebook")}
            >
              <FacebookIcon className="social-icon text-social-facebook hover:text-footer-text" />
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              onClick={() => trackSocialClick("instagram")}
            >
              <InstagramIcon className="social-icon text-social-instagram hover:text-footer-text" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
