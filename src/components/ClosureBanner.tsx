"use client";

export default function ClosureBanner() {
  return (
    <div className="bg-red-600 text-white py-4 px-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">
          ⚠️ Closed Today Due to Winter Weather
        </p>
        <p className="text-sm sm:text-base md:text-lg mt-1">
          We apologize for the inconvenience. Stay safe and warm!
        </p>
      </div>
    </div>
  );
}
