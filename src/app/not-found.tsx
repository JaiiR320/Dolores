import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="section-heading">404</h1>
        <hr className="divider-heading" />
        <h2 className="mb-4 text-2xl text-primary font-quiche-bold sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-base leading-relaxed sm:text-lg md:text-xl">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
