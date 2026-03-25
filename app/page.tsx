import Image from "next/image";
import HeroAnimated from "./components/animations/HeroAnimated";
import FadeUp from "./components/animations/FadeUp";
import ServiceCardAnimated from "./components/animations/ServiceCardanimated";

export const metadata = {
  title:
    "Car Key Replacement Nairobi | 24/7 Auto Locksmith Kenya | AutoKeysExperts",
  description:
    "AutoKeysExperts offers car key replacement, key programming, car unlocking, ECU repair, GPS tracking, and car security services in Nairobi. 24/7 mobile auto locksmith near you.",
  keywords: [
    "car key replacement Nairobi",
    "auto locksmith Nairobi",
    "lost car key Nairobi",
    "car key programming Kenya",
    "car unlocking Nairobi",
  ],
  openGraph: {
    title: "Auto Locksmith Nairobi | Car Key Replacement 24/7",
    description:
      "Professional auto locksmith services in Nairobi. Fast mobile service for lost car keys, programming, unlocking & more.",
    url: "https://autokeyexperts.co.ke",
    siteName: "AutoKeysExperts",
    locale: "en_KE",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="auto locksmith Nairobi car key replacement services Kenya"
          fill
          priority
          className="object-cover"
        />

        {/* Better overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60" />

        <div className="relative z-10 px-6 md:px-20 max-w-6xl text-white">
          <HeroAnimated>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Car Key Replacement in Nairobi – 24/7 Auto Locksmith Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              We provide professional lost car key replacement, spare key
              programming, car door unlocking, ECU repair, and vehicle security
              solutions anywhere in Nairobi.
            </p>
          </HeroAnimated>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+254716884011"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-lg"
            >
              📞 Call - 0716 884 011
            </a>

            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* trust line */}
          <p className="mt-6 text-sm text-gray-300">
            ✔ Fast Response • ✔ Mobile Service • ✔ All Car Models
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 space-y-14">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Auto Locksmith & Car Tech Services in Nairobi
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <ServiceCardAnimated
            img="/images/landcruiserlostkey.jpeg"
            title="Lost Car Key Replacement"
            desc="Lost all your car keys in Nairobi? We provide complete car key replacement for all vehicle models. Our mobile auto locksmith comes to your location, cuts a new key, and programs it to your car’s immobilizer system on-site. No towing required. Fast, reliable, and available 24/7 across Nairobi."
          />

          <ServiceCardAnimated
            img="/images/corollacross.jpeg"
            title="Spare Key Duplication"
            desc="Avoid getting stranded by having a spare car key made in advance. We duplicate and program all types of car keys including transponder keys, remote keys, and smart keys. Our service is quick, affordable, and ensures your spare key works perfectly with your vehicle."
          />

          <ServiceCardAnimated
            img="/images/lockedoutofcar.webp"
            title="Car Door Unlocking"
            desc="Locked your keys inside the car? Our emergency car unlocking service in Nairobi is fast and damage-free. We use professional tools to safely unlock your vehicle without damaging the locks or doors. Available 24/7 for all car models."
          />

          <ServiceCardAnimated
            img="/images/mazdacx5spare.jpeg"
            title="Car Key Programming"
            desc="We specialize in car key programming for a wide range of vehicles. Whether you need a new key programmed or an existing key reprogrammed, we use advanced diagnostic tools to ensure proper synchronization with your car’s security system."
          />

          <ServiceCardAnimated
            img="/images/gpstracking.jpeg"
            title="GPS Tracking Installation"
            desc="Secure your vehicle with professional GPS tracking installation services in Nairobi. Monitor your car’s location in real-time, prevent theft, and improve security."
          />

          <ServiceCardAnimated
            img="/images/remoterepair.webp"
            title="Car Remote Repair"
            desc="Is your car remote not working properly? We diagnose and repair remote key issues including faulty buttons, weak signals, and internal damage. Our technicians restore full functionality or replace the remote if needed."
          />

          <ServiceCardAnimated
            img="/images/alarm.jpg"
            title="Car Alarm Installation"
            desc="Enhance your car’s security with professional car alarm installation in Nairobi. We install advanced alarm systems with features like remote control, immobilizers, and siren alerts to protect your vehicle from theft."
          />

          <ServiceCardAnimated
            img="/images/dashcam.jpeg"
            title="Dashboard Camera Installation"
            desc="Install a high-quality dashboard camera for security and driving evidence. We provide professional dashcam installation in Nairobi with clean wiring and proper positioning to ensure clear recording and reliable performance."
          />

          <ServiceCardAnimated
            img="/images/airbagmodulereset.jpeg"
            title="SRS Airbag Module Repair & Crash Data Reset"
            desc="After an accident, your car’s SRS airbag module may store crash data that prevents proper operation. We offer SRS module repair and crash data reset services in Nairobi, restoring the system without the need for expensive replacement."
          />

          <ServiceCardAnimated
            img="/images/ecurepair.jpeg"
            title="ECU Repair & Programming"
            desc="We diagnose and repair ECU issues, improving performance and restoring functionality."
          />

          <ServiceCardAnimated
            img="/images/keycutting.jpeg"
            title="Car Key Cutting"
            desc="We provide precise car key cutting services in Nairobi for all vehicle types. Using advanced key cutting machines, we ensure accurate duplication for smooth operation and perfect fit every time."
          />

          <ServiceCardAnimated
            img="/images/ignitionlockrepair.jpeg"
            title="Ignition & Door Lock Repair"
            desc="Having issues with your ignition or door locks? We repair worn-out or damaged locks to restore smooth operation. Our locksmith services help prevent key breakage and improve your vehicle’s security."
          />

          <ServiceCardAnimated
            img="/images/keyshell.jpeg"
            title="Broken Key Shell Replacement"
            desc="If your car key shell is cracked or worn out, we replace it with a durable new casing. We transfer the internal electronics safely, restoring your key’s functionality and appearance without needing a full replacement."
          />
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 md:px-20 bg-black text-white text-center space-y-8">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose AutoKeysExperts in Nairobi?
          </h2>
        </FadeUp>

        <p className="max-w-2xl mx-auto text-gray-300">
          We are trusted professionals offering fast, affordable, and reliable
          auto locksmith and car tech services across Nairobi.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {[
            "24/7 Emergency Service",
            "Fast Response Time",
            "Affordable Pricing",
            "Professional Technicians",
            "Mobile On-Site Service",
            "All Car Models Supported",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-yellow-500 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Need Auto Locksmith Services in Nairobi?
        </h2>

        <p className="text-lg">
          Call us now for fast and reliable service anywhere in Nairobi.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+254716884011"
            className="bg-black text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/254716884011"
            target="_blank"
            className="bg-green-500 px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
