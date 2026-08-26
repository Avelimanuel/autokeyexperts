import Image from "next/image";

export const metadata = {
  title: "Spare Car Key Nairobi | Car Key Duplication & Replacement",
  description:
    "Get a spare car key in Nairobi with AutoKeysExperts. Fast and professional duplication of mechanical, transponder, and smart keys, plus broken key shell replacement. 24/7 mobile service.",
  keywords: [
    "spare car key Nairobi",
    "car key duplication Nairobi",
    "car key replacement Nairobi",
    "smart key programming Nairobi",
    "transponder key duplication Nairobi",
    "mobile auto locksmith Nairobi",
  ],
};

export default function Page() {
  return (
    <main className="flex flex-col bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center text-white">
        <Image
          src="/images/sparecarkey-hero.jpeg"
          alt="Spare car key services Nairobi"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full px-6 py-32 text-center">
          <h1 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Spare Car Key Services in Nairobi
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl">
            Avoid emergencies with a spare car key. We provide fast, reliable
            duplication and programming for all types of car keys, including
            mechanical, transponder, and smart keys. Mobile service anywhere in
            Nairobi.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+254716884011"
              className="w-full max-w-xs rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400 sm:w-auto"
            >
              Call Now: 0716 884 011
            </a>

            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400 sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="mx-auto w-full max-w-5xl space-y-6 px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-20">
        <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Why Get a Spare Car Key?
        </h2>

        <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
          Having a spare key saves you from emergencies and unexpected lockouts.
          AutoKeysExperts provides professional duplication and programming for
          all key types. Our mobile service ensures convenience across Nairobi.
        </p>

        <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
          We also replace broken key shells and worn-out components. Each key is
          tested to ensure it works perfectly with your car before completion.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid items-center gap-8 bg-gray-50 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:px-10 md:py-16 lg:px-20">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg sm:h-80 md:h-[360px]">
          <Image
            src="/images/sparecarkey.jpeg"
            alt="spare car key duplication Nairobi"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            Key Duplication & Broken Shell Replacement
          </h2>

          <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            We duplicate your car keys and provide professional replacement of
            broken key shells. This ensures your spare key is durable and fully
            functional.
          </p>

          <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            Our technicians use precise cutting and programming tools to match
            your original key perfectly, giving you convenience, reliability,
            and security.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
            <a
              href="tel:+254716884011"
              className="w-full rounded-xl bg-yellow-500 px-5 py-3 text-center font-semibold text-black transition hover:bg-yellow-400 sm:w-auto"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-green-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-400 sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFO SECTION */}
      <section className="mx-auto w-full max-w-6xl space-y-6 px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-20">
        <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Our Spare Key Services Include:
        </h2>

        <ul className="space-y-3 text-base leading-7 text-gray-700 sm:text-lg">
          <li className="flex items-start gap-3">
            <span className="font-bold text-yellow-500">•</span>
            <span>Mechanical key duplication</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="font-bold text-yellow-500">•</span>
            <span>Transponder key programming</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="font-bold text-yellow-500">•</span>
            <span>Smart key duplication & programming</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="font-bold text-yellow-500">•</span>
            <span>Broken key shell replacement</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="font-bold text-yellow-500">•</span>
            <span>Mobile service anywhere in Nairobi</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
