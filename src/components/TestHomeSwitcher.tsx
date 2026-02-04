"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const testPages = [
  { href: "/", label: "Current" },
  { href: "/test-home-1", label: "Option 1" },
  { href: "/test-home-2", label: "Option 2" },
  { href: "/test-home-3", label: "Option 3" },
  { href: "/test-home-4", label: "Option 4" },
  { href: "/test-home-5", label: "Option 5" },
];

export default function TestHomeSwitcher() {
  const pathname = usePathname();

  // Only show on home page and test-home pages
  const isTestPage =
    pathname === "/" || pathname.startsWith("/test-home");

  if (!isTestPage) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-sm py-2 px-4">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-white/70 text-sm mr-2">Home Page Options:</span>
        {testPages.map((page) => {
          const isActive =
            pathname === page.href ||
            (page.href !== "/" && pathname.startsWith(page.href));

          return (
            <Link
              key={page.href}
              href={page.href}
              className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {page.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
