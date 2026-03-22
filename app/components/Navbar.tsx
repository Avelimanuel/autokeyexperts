"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/90 via-gray-900/90 to-slate-900/90 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-0 md:h-16">
          {/* Logo */}
          <div className="mb-1 md:mb-0">
            <Link href="/">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer tracking-wide">
                AutoKeysExperts
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 w-full md:w-auto text-sm md:text-base">
            {[
              { name: "Home", href: "/" },
              { name: "Key Replacement", href: "/car-key-replacement-nairobi" },
              { name: "Car Unlocking", href: "/car-unlocking-nairobi" },
              { name: "Car Alarms", href: "/car-alarm-installation-nairobi" },
              {
                name: "GPS Tracking",
                href: "/car-tracker-installation-nairobi",
              },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-300 font-medium transition duration-300 hover:text-white group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer text-gray-300 font-medium hover:text-white transition flex items-center gap-1">
                More Services ▼
              </span>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-3 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-md">
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
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition rounded-lg"
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
