"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 md:py-0 md:h-[72px]">
          {/* Logo */}
          <div className="mb-3 md:mb-0">
            <Link href="/">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white cursor-pointer">
                AutoKeys<span className="text-blue-500">Experts</span>
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-3 md:gap-x-7 w-full md:w-auto text-sm">
            {/* Regular Links */}
            {[
              { name: "Home", href: "/" },
              {
                name: "Key Replacement",
                href: "/car-key-replacement-nairobi",
              },
              {
                name: "Spare car key",
                href: "/spare-car-key-nairobi",
              },
              {
                name: "Car Unlocking",
                href: "/car-unlocking-nairobi",
              },
              {
                name: "Car Alarms",
                href: "/car-alarm-installation-nairobi",
              },
              {
                name: "GPS Tracking",
                href: "/car-tracker-installation-nairobi",
              },
              {
                name: "Dashboard Camera",
                href: "/dash-board-camera",
              },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-slate-300 font-medium hover:text-white transition-colors duration-300 group whitespace-nowrap"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-slate-300 font-medium hover:text-white transition-colors duration-300"
              >
                More Services
                <span
                  className={`text-xs transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-4 w-64 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/40 transition-all duration-200 ${
                  dropdownOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-2"
                }`}
              >
                {[
                  {
                    name: "Airbag Module Reset",
                    href: "/airbag-module-reset-nairobi",
                  },
                  {
                    name: "Catalytic Converter Errors Solution",
                    href: "/catalytic-converter-error-solution",
                  },
                  {
                    name: "DPF Error Solution",
                    href: "/dpf-error-solution",
                  },
                  {
                    name: "Fleet Management",
                    href: "/fleet-management-nairobi",
                  },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
