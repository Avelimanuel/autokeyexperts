
import Image from "next/image";

export const metadata = {
  title:
    "Car Key Replacement Nairobi | Lost Car Key Replacement | AutoKeysExperts",
  description:
    "Need car key replacement in Nairobi? AutoKeysExperts provides fast lost car key replacement, key programming, and duplication services. 24/7 mobile auto locksmith near you.",
  keywords: [
    "car key replacement Nairobi",
    "lost car key Nairobi",
    "auto locksmith Nairobi",
    "duplicate car key Nairobi",
    "car key programming Nairobi",
  ],
};

export default function CarKeyReplacementPage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      {/* HERO */}
      <section className="relative pt-16 md:pt-0 h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/images/car-key-replacement.jpg"
          alt="car key replacement Nairobi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Car Key Replacement in Nairobi – Fast & Reliable Service
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-6">
            Lost your car keys? We provide professional car key replacement, key
            cutting, and programming services anywhere in Nairobi. Our mobile
            auto locksmith comes to your location 24/7.
          </p>

          <a
            href="tel:+254716884011"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Call Now: 0716 884 011
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 md:px-20 space-y-6">
        <h2 className="text-3xl font-bold">
          Professional Car Key Replacement Services in Nairobi
        </h2>

        <p>
          At AutoKeysExperts, we specialize in car key replacement services for
          all vehicle models in Nairobi. Whether you have lost your only car
          key, broken your key, or need a spare, our experienced technicians
          provide fast and efficient solutions. We use advanced tools to cut and
          program new keys on-site, saving you the cost and inconvenience of
          towing your vehicle.
        </p>

        <p>
          Our mobile auto locksmith service ensures that we reach you wherever
          you are in Nairobi, including Westlands, Kilimani, Embakasi, Thika
          Road, and surrounding areas. We are available 24/7 for emergency
          situations.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="py-10 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/key-cutting.jpg"
          alt="car key cutting Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Lost All Car Keys? We’ve Got You Covered
          </h2>

          <p>
            Losing all your car keys can be stressful, but we make the process
            easy. Our team can create a brand new key from scratch and program
            it to your car’s immobilizer system. No need to visit the dealership
            — we bring everything to you.
          </p>

          <p>
            We handle transponder keys, remote keys, and smart keys for most car
            brands.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          What Our Car Key Replacement Service Includes
        </h2>

        <ul className="space-y-3 max-w-2xl mx-auto">
          <li>✔ Lost car key replacement</li>
          <li>✔ Spare key duplication</li>
          <li>✔ Car key programming</li>
          <li>✔ Broken key extraction</li>
          <li>✔ Key shell replacement</li>
        </ul>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 md:px-20 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Why Choose Us for Car Key Replacement in Nairobi?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>✔ 24/7 Emergency Service</div>
          <div>✔ Fast Response Time</div>
          <div>✔ Affordable Pricing</div>
          <div>✔ Mobile On-Site Service</div>
          <div>✔ All Car Models Supported</div>
          <div>✔ Professional Equipment</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-yellow-500 space-y-6">
        <h2 className="text-3xl font-bold">
          Need Car Key Replacement in Nairobi?
        </h2>

        <p>
          Call AutoKeysExperts now for fast, reliable, and affordable service.
        </p>

        <a
          href="tel:+254716884011"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Call Now
        </a>
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
