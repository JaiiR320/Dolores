"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              className="h-21.25 w-auto"
              src="/img/top-left-logo.png"
              alt="Dolores PVD Logo"
              width={85}
              height={85}
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400 hover:text-gray-900 hover:border-gray-600"
            aria-label="Toggle navigation"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-5">
              <li>
                <Link
                  href="/"
                  className={`nav-link ${
                    isActive("/") && pathname === "/" ? "font-quiche-bold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className={`nav-link ${
                    isActive("/menu") ? "font-quiche-bold" : ""
                  }`}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className={`nav-link ${
                    isActive("/reservation") ? "font-quiche-bold" : ""
                  }`}
                >
                  Reserve
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className={`nav-link ${
                    isActive("/order") ? "font-quiche-bold" : ""
                  }`}
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/"
                  className={`nav-link-mobile ${isActive("/") && pathname === "/" ? "font-quiche-bold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className={`nav-link-mobile ${isActive("/menu") ? "font-quiche-bold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className={`nav-link-mobile ${isActive("/reservation") ? "font-quiche-bold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Reserve
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className={`nav-link-mobile ${isActive("/order") ? "font-quiche-bold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
