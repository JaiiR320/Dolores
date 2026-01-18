import Carousel from "@/components/Carousel";

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
            >
              <svg
                className="social-icon text-social-facebook hover:text-footer-text"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dolorespvd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <svg
                className="social-icon text-social-instagram hover:text-footer-text"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
