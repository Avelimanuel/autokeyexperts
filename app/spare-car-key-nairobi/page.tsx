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
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/images/sparecarkey-hero.jpeg"
          alt="Spare car key services Nairobi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Spare Car Key Services in Nairobi
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Avoid emergencies with a spare car key. We provide fast, reliable
            duplication and programming for all types of car keys, including
            mechanical, transponder, and smart keys. Mobile service anywhere in
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

      {/* INTRO SECTION */}
      <section className="px-6 md:px-20 py-16 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Get a Spare Car Key?
        </h2>
        <p className="text-lg text-gray-700">
          Having a spare key saves you from emergencies and unexpected lockouts.
          AutoKeysExperts provides professional duplication and programming for
          all key types. Our mobile service ensures convenience across Nairobi.
        </p>
        <p className="text-lg text-gray-700">
          We also replace broken key shells and worn-out components. Each key is
          tested to ensure it works perfectly with your car before completion.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/sparecarkey.jpeg"
            alt="spare car key duplication Nairobi"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Key Duplication & Broken Shell Replacement
          </h2>
          <p className="text-gray-700">
            We duplicate your car keys and provide professional replacement of
            broken key shells. This ensures your spare key is durable and fully
            functional.
          </p>
          <p className="text-gray-700">
            Our technicians use precise cutting and programming tools to match
            your original key perfectly, giving you convenience, reliability,
            and security.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="tel:+254716884011"
              className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold transition hover:bg-yellow-400"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-5 py-3 rounded-xl font-semibold transition hover:bg-green-400"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFO SECTION */}
      <section className="px-6 md:px-20 py-16 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Spare Key Services Include:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Mechanical key duplication</li>
          <li>Transponder key programming</li>
          <li>Smart key duplication & programming</li>
          <li>Broken key shell replacement</li>
          <li>Mobile service anywhere in Nairobi</li>
        </ul>
      </section>
    </main>
  );
}
