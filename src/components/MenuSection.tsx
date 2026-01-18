import Image from "next/image";

interface MenuImage {
  src: string;
  alt: string;
}

interface MenuSectionProps {
  title: string;
  images: MenuImage[];
}

export default function MenuSection({ title, images }: MenuSectionProps) {
  return (
    <>
        <div className="w-full bg-gray-100">
          <div className="container mx-auto">
            <div className="p-4 rounded-none text-center text-xl bg-gray-100">
              <p className="text-lg">
                <span className="text-primary font-quiche-bold">{title}</span>
              </p>
            </div>
          </div>
        </div>


      {images.map((image, index) => (
        <div key={index} className="flex flex-wrap px-1">
          <div className="w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1600}
              className="w-full my-1 align-middle"
              unoptimized
            />
          </div>
        </div>
      ))}
    </>
  );
}
