
import Image from "next/image";
import HeroAnimated from "./components/animations/HeroAnimated";
import FadeUp from "./components/animations/FadeUp";
import ServiceCardAnimated from "./components/animations/ServiceCardanimated";
import CallButton from "./components/Callbutton";
import Link from "next/link";

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
    url: "[https://autokeyexperts.co.ke](https://autokeyexperts.co.ke)",
    siteName: "AutoKeysExperts",
    locale: "en_KE",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-[150px] md:pt-0">
        <Image
          src="/images/hero.jpg"
          alt="auto locksmith Nairobi car key replacement services Kenya"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <HeroAnimated>
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight text-white">
                  Car Key Replacement in Nairobi – 24/7 Auto Locksmith Services
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                  We provide professional lost car key replacement, spare key
                  programming, car door unlocking, ECU repair, and vehicle
                  security solutions anywhere in Nairobi.
                </p>
              </div>
            </HeroAnimated>

            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton className="bg-yellow-500 text-black px-7 py-3.5 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-1">
                📞 Call - 0716 884 011
              </CallButton>

              <a
                href="[https://wa.me/254716884011](https://wa.me/254716884011)"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-400 transition-all duration-300 shadow-xl hover:shadow-green-500/20 hover:-translate-y-1 text-center"
              >
                💬 WhatsApp
              </a>
            </div>

            <p className="mt-7 text-sm sm:text-base text-gray-300 font-medium">
              ✔ Fast Response
              <span className="mx-2 text-gray-500">•</span>
              ✔ Mobile Service
              <span className="mx-2 text-gray-500">•</span>
              ✔ All Car Models
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-14">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Auto Locksmith & Car Tech Services in Nairobi
              </h2>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Link
              href={"/car-key-replacement-nairobi"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/landcruiserlostkey.jpeg"
                title="Lost Car Key Replacement"
                desc="Lost all your car keys in Nairobi? We provide complete car key replacement for all vehicle models. Our mobile auto locksmith comes to your location, cuts a new key, and programs it to your car’s immobilizer system on-site. No towing required. Fast, reliable, and available 24/7 across Nairobi."
              />
            </Link>

            <Link
              href={"/spare-car-key-nairobi"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/corollacross.jpeg"
                title="Spare Key Duplication"
                desc="Avoid getting stranded by having a spare car key made in advance. We duplicate and program all types of car keys including transponder keys, remote keys, and smart keys. Our service is quick, affordable, and ensures your spare key works perfectly with your vehicle."
              />
            </Link>

            <Link
              href={"/car-unlocking-nairobi"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/lockedoutofcar.webp"
                title="Car Door Unlocking"
                desc="Locked your keys inside the car? Our emergency car unlocking service in Nairobi is fast and damage-free. We use professional tools to safely unlock your vehicle without damaging the locks or doors. Available 24/7 for all car models."
              />
            </Link>

            <Link
              href={"/spare-car-key-nairobi"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/mazdacx5spare.jpeg"
                title="Car Key Programming"
                desc="We specialize in car key programming for a wide range of vehicles. Whether you need a new key programmed or an existing key reprogrammed, we use advanced diagnostic tools to ensure proper synchronization with your car’s security system."
              />
            </Link>

            <Link
              href={"/car-tracker-installation-nairobi"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/gpstracking.jpeg"
                title="GPS Tracking Installation"
                desc="Secure your vehicle with professional GPS tracking installation services in Nairobi. Monitor your car’s location in real-time, prevent theft, and improve security."
              />
            </Link>

            <div className="h-full transition-transform duration-300 hover:-translate-y-1">
              <ServiceCardAnimated
                img="/images/remoterepair.webp"
                title="Car Remote Repair"
                desc="Is your car remote not working properly? We diagnose and repair remote key issues including faulty buttons, weak signals, and internal damage. Our technicians restore full functionality or replace the remote if needed."
              />
            </div>

            <Link
              href={"/car-alarm-installation-nairobi"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/caralarm.jpeg"
                title="Car Alarm Installation"
                desc="Enhance your car’s security with professional car alarm installation in Nairobi. We install advanced alarm systems with features like remote control, immobilizers, and siren alerts to protect your vehicle from theft."
              />
            </Link>

            <Link
              href={"/dash-board-camera"}
              className="block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <ServiceCardAnimated
                img="/images/dashboardcamera.jpeg"
                title="Dashboard Camera Installation"
                desc="Install a high-quality dashboard camera for security and driving evidence. We provide professional dashcam installation in Nairobi with clean wiring and proper positioning to ensure clear recording and reliable performance."
              />
            </Link>

            <div className="h-full transition-transform duration-300 hover:-translate-y-1">
              <ServiceCardAnimated
                img="/images/airbagmodulereset.jpeg"
                title="SRS Airbag Module Repair & Crash Data Reset"
                desc="After an accident, your car’s SRS airbag module may store crash data that prevents proper operation. We offer SRS module repair and crash data reset services in Nairobi, restoring the system without the need for expensive replacement."
              />
            </div>

            <div className="h-full transition-transform duration-300 hover:-translate-y-1">
              <ServiceCardAnimated
                img="/images/ecurepair.jpeg"
                title="ECU Repair & Programming"
                desc="We diagnose and repair ECU issues, improving performance and restoring functionality."
              />
            </div>

            <div className="h-full transition-transform duration-300 hover:-translate-y-1">
              <ServiceCardAnimated
                img="/images/keycutting.jpeg"
                title="Car Key Cutting"
                desc="We provide precise car key cutting services in Nairobi for all vehicle types. Using advanced key cutting machines, we ensure accurate duplication for smooth operation and perfect fit every time."
              />
            </div>

            <div className="h-full transition-transform duration-300 hover:-translate-y-1">
              <ServiceCardAnimated
                img="/images/ignitionlockrepair.jpeg"
                title="Ignition & Door Lock Repair"
                desc="Having issues with your ignition or door locks? We repair worn-out or damaged locks to restore smooth operation. Our locksmith services help prevent key breakage and improve your vehicle’s security."
              />
            </div>

            <div className="h-full transition-transform duration-300 hover:-translate-y-1">
              <ServiceCardAnimated
                img="/images/keyshell.jpeg"
                title="Broken Key Shell Replacement"
                desc="If your car key shell is cracked or worn out, we replace it with a durable new casing. We transfer the internal electronics safely, restoring your key’s functionality and appearance without needing a full replacement."
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-20 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Why Choose AutoKeysExperts in Nairobi?
            </h2>
          </FadeUp>

          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            We are trusted professionals offering fast, affordable, and reliable
            auto locksmith and car tech services across Nairobi.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
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
                className="group bg-white/[0.07] border border-white/10 backdrop-blur-sm p-6 rounded-2xl font-semibold text-gray-100 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:-translate-y-1"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-black text-sm font-bold mb-3">
                  ✓
                </span>

                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 px-5 sm:px-8 text-center bg-yellow-500 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Need Auto Locksmith Services in Nairobi?
          </h2>

          <p className="text-base sm:text-lg text-black/80 max-w-2xl mx-auto">
            Call us now for fast and reliable service anywhere in Nairobi.
          </p>

          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <CallButton className="bg-black text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300 shadow-xl hover:-translate-y-1">
              📞 Call - 0716 884 011
            </CallButton>

            <a
              href="[https://wa.me/254716884011](https://wa.me/254716884011)"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-green-400 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

