import Image from "next/image";

export const metadata = {
  title: "Car Alarm Installation Nairobi | Vehicle Security Systems",
  description:
    "Protect your vehicle with professional car alarm installation services in Nairobi. We install high-quality alarms with remote control and anti-theft features.",
};

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative pt-16 md:pt-0 h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/images/car-alarm-hero.jpg"
          alt="car alarm installation Nairobi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Car Alarm Installation in Nairobi – Protect Your Vehicle
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-6">
            Keep your car and valuables safe with our professional car alarm
            installation services. We install advanced systems with remote
            control, immobilizers, sirens, and anti-theft features anywhere in
            Nairobi.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+254716884011"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition hover:bg-yellow-400"
            >
              Call Now: 0716 884 011
            </a>
            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition hover:bg-green-400"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* TITLE & INTRO */}
      <section className="px-6 md:px-20 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Car Alarm Installation in Nairobi
        </h1>

        <p className="text-lg">
          Protect your car and valuables with our professional car alarm
          installation services in Nairobi. We install advanced car alarm
          systems that include remote control access, immobilizers, sirens, and
          anti-theft features to keep your vehicle secure at all times. Our
          technicians ensure a clean and professional installation with minimal
          disruption to your car’s interior and electronics.
        </p>

        <p className="text-lg">
          Whether you own a sedan, SUV, or luxury vehicle, we offer alarms
          compatible with most car brands. Our mobile service allows us to
          install the system at your location, saving you time and ensuring your
          car is protected immediately.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/car-alarm-installation.jpg"
          alt="car alarm installation Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Professional Car Alarm Installation
          </h2>
          <p>
            Our team specializes in installing high-quality car alarm systems
            that deter theft and enhance your vehicle’s security. From wiring to
            programming the remote and sensors, every step is done
            professionally to guarantee maximum protection.
          </p>

          <p>
            We also provide guidance on using the system effectively, ensuring
            you understand all features and can monitor your car’s security with
            ease.
          </p>
        </div>
      </section>
    </main>
  );
}
