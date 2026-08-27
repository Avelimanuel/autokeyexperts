import Image from "next/image";

export const metadata = {
  title: "Car Alarm Installation Nairobi | Vehicle Security Systems",
  description:
    "Protect your vehicle with professional car alarm installation services in Nairobi. We install high-quality alarms with remote control and anti-theft features.",
};

export default function Page() {
  return (
    <main className="flex w-full flex-col overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden px-5 py-20 text-white sm:min-h-[550px] sm:px-6 md:min-h-[600px] md:px-10 lg:min-h-[70vh] lg:px-20">
        <Image
          src="/images/car-alarm-hero.jpg"
          alt="car alarm installation Nairobi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl">
            Car Alarm Installation in Nairobi – Protect Your Vehicle
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            Keep your car and valuables safe with our professional car alarm
            installation services. We install advanced systems with remote
            control, immobilizers, sirens, and anti-theft features anywhere in
            Nairobi.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="tel:+254716884011"
              className="rounded-xl bg-yellow-500 px-6 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
            >
              Call Now: 0716 884 011
            </a>

            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-400"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* TITLE & INTRO */}
      <section className="mx-auto w-full max-w-7xl space-y-6 px-5 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Car Alarm Installation in Nairobi
        </h1>

        <p className="text-base leading-relaxed sm:text-lg">
          Protect your car and valuables with our professional car alarm
          installation services in Nairobi. We install advanced car alarm
          systems that include remote control access, immobilizers, sirens, and
          anti-theft features to keep your vehicle secure at all times. Our
          technicians ensure a clean and professional installation with minimal
          disruption to your car’s interior and electronics.
        </p>

        <p className="text-base leading-relaxed sm:text-lg">
          Whether you own a sedan, SUV, or luxury vehicle, we offer alarms
          compatible with most car brands. Our mobile service allows us to
          install the system at your location, saving you time and ensuring your
          car is protected immediately.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-12 sm:px-6 sm:pb-16 md:grid-cols-2 md:gap-10 md:px-10 lg:px-20">
        <Image
          src="/images/caralarm.jpeg"
          alt="car alarm installation Nairobi"
          width={600}
          height={400}
          className="h-auto w-full rounded-2xl object-cover"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Professional Car Alarm Installation
          </h2>

          <p className="leading-relaxed">
            Our team specializes in installing high-quality car alarm systems
            that deter theft and enhance your vehicle’s security. From wiring to
            programming the remote and sensors, every step is done
            professionally to guarantee maximum protection.
          </p>

          <p className="leading-relaxed">
            We also provide guidance on using the system effectively, ensuring
            you understand all features and can monitor your car’s security with
            ease.
          </p>
        </div>
      </section>
    </main>
  );
}
