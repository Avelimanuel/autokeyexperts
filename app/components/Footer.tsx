"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            AutoKeysExperts
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Professional auto locksmith services in Nairobi. We specialize in
            car key replacement, programming, unlocking, tracking systems, and
            advanced vehicle electronics solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/car-key-replacement-nairobi"
                className="hover:text-white transition"
              >
                Key Replacement
              </Link>
            </li>
            <li>
              <Link
                href="/car-unlocking-nairobi"
                className="hover:text-white transition"
              >
                Car Unlocking
              </Link>
            </li>
            <li>
              <Link
                href="/car-alarm-installation-nairobi"
                className="hover:text-white transition"
              >
                Car Alarms
              </Link>
            </li>
            <li>
              <Link
                href="/car-tracker-installation-nairobi"
                className="hover:text-white transition"
              >
                GPS Tracking
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Other Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/airbag-module-reset-nairobi"
                className="hover:text-white transition"
              >
                Airbag Module Reset
              </Link>
            </li>
            <li>
              <Link
                href="/catalytic-converter-error-solution"
                className="hover:text-white transition"
              >
                Catalytic Error Solution
              </Link>
            </li>
            <li>
              <Link
                href="/dpf-error-solution"
                className="hover:text-white transition"
              >
                DPF Error Solution
              </Link>
            </li>
            <li>
              <Link
                href="/fleet-management-nairobi"
                className="hover:text-white transition"
              >
                Fleet Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">📍 Nairobi, Kenya</li>
            <li>
              <a
                href="tel:+254716884011"
                className="hover:text-white transition"
              >
                📞 0716 884 011
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/254716884011"
                target="_blank"
                className="hover:text-green-400 transition"
              >
                💬 WhatsApp Chat
              </a>
            </li>
            <li className="text-gray-400">⏰ 24/7 Emergency Service</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} AutoKeysExperts. All rights reserved.
      </div>
    </footer>
  );
}
