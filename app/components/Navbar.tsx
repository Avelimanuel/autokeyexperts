"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-16 py-2 md:py-0">
          {/* Logo */}
          <div className="flex-shrink-0 mb-1 md:mb-0">
            <Link href="/">
              <span className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer">
                AutoKeysExperts
              </span>
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-8 w-full md:w-auto text-sm md:text-base">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/car-key-replacement-nairobi"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Key Replacement
            </Link>
            <Link
              href="/car-unlocking-nairobi"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Car Unlocking
            </Link>
            <Link
              href="/car-alarm-installation-nairobi"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Car Alarms
            </Link>
            <Link
              href="/car-tracker-installation-nairobi"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              GPS Tracking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
