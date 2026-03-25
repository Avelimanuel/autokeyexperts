import Image from "next/image";

export const metadata = {
  title:
    "Car Key Replacement Nairobi | Lost Car Key Replacement | AutoKeysExperts",
  description:
    "Need car key replacement in Nairobi? AutoKeysExperts provides fast lost car key replacement, key programming, and duplication services. 24/7 mobile auto locksmith near you.",
};

export default function CarKeyReplacementPage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center">
        <Image
          src="/images/cx5lostkey.jpeg"
          alt="car key replacement Nairobi"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl px-6 md:px-20 text-white">
          <p className="text-yellow-400 font-medium mb-3">
            Auto Locksmith Nairobi • 24/7 Mobile Service
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Lost Your Car Key? We Replace It Fast in Nairobi
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mb-8">
            We provide on-site car key replacement, programming, and
            duplication. Our mobile locksmith reaches you anywhere in Nairobi —
            fast.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+254716884011"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
            >
              📞 Call 0716 884 011
            </a>

            <a
              href="https://wa.me/254716884011"
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Car Key Replacement Services in Nairobi
        </h2>

        <p className="text-lg text-gray-700">
          At AutoKeysExperts, we specialize in replacing lost or damaged car
          keys for all vehicle models. Whether you’ve lost your only key or need
          a spare, we provide fast and reliable solutions using advanced key
          cutting and programming tools.
        </p>

        <p className="text-gray-600">
          Our mobile auto locksmith service operates across Nairobi including
          Westlands, Kilimani, Embakasi, and Thika Road. We come to your
          location and get you back on the road quickly.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center bg-gray-50">
        <Image
          src="/images/cx5lostkey.jpeg"
          alt="lost car key replacement Nairobi"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover w-full"
        />

        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Lost All Car Keys? No Problem
          </h2>

          <p className="text-gray-700">
            If you’ve lost all your car keys, we can create a new one from
            scratch and program it to your car’s immobilizer system.
          </p>

          <p className="text-gray-600">
            No need to tow your car to the dealership. We come fully equipped
            and handle everything on-site.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Transponder keys</li>
            <li>✔ Remote keys</li>
            <li>✔ Smart key systems</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-20 space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Car Key Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Lost car key replacement",
            "Spare key duplication",
            "Car key programming",
            "Broken key extraction",
            "Key shell replacement",
            "Remote repair",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">✔ {service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose AutoKeysExperts?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "24/7 Emergency Service",
            "Fast Response Time",
            "Affordable Pricing",
            "Mobile On-Site Service",
            "All Car Models Supported",
            "Professional Equipment",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-black text-white space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Need Car Key Replacement in Nairobi?
        </h2>

        <p className="text-gray-300">
          Call now and get fast mobile locksmith service at your location.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+254716884011"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/254716884011"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Car Key Replacement",
            provider: {
              "@type": "LocalBusiness",
              name: "AutoKeysExperts",
              areaServed: "Nairobi",
            },
          }),
        }}
      />
    </main>
  );
}
