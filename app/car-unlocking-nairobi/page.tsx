import Image from "next/image";

export const metadata = {
  title: "Car Unlocking Nairobi | 24/7 Emergency Auto Locksmith",
  description:
    "Locked your keys in your car? AutoKeysExperts Kenya provides fast, safe, and damage-free car unlocking services in Nairobi. 24/7 emergency auto locksmith.",
};

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative pt-16 md:pt-0 h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/images/unlocking.jpg"
          alt="Car unlocking Nairobi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Car Unlocking Service in Nairobi – Fast & Damage-Free
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Locked out of your car? Our professional auto locksmith team
            provides fast, safe, and damage-free unlocking services anywhere in
            Nairobi, 24/7.
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

      {/* INTRO */}
      <section className="px-6 md:px-20 py-16 space-y-6">
        <h2 className="text-3xl font-bold">
          Emergency Car Unlocking Services in Nairobi
        </h2>
        <p>
          If you’ve locked your keys inside your car, AutoKeysExperts Kenya
          offers fast and professional car unlocking services. Our team uses
          specialized tools to safely unlock your vehicle without causing
          damage.
        </p>
        <p>
          Our mobile service covers all areas in Nairobi, including Westlands,
          Kilimani, Embakasi, Karen, Muthaiga, Kiambu, Kileleshwa and surrounding neighborhoods. We are available
          24/7 for all car models.
        </p>

        <h2 className="text-3xl font-bold">
          Why Choose AutoKeysExperts Kenya?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Fast and reliable emergency service</li>
          <li>Damage-free unlocking for all car models</li>
          <li>24/7 mobile auto locksmith anywhere in Nairobi</li>
          <li>Expert technicians with years of experience</li>
        </ul>

        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p>
          Call{" "}
          <a href="tel:+254716884011" className="text-blue-600 underline">
            0716 884 011
          </a>{" "}
          or WhatsApp us{" "}
          <a
            href="https://wa.me/254716884011"
            className="text-blue-600 underline"
          >
            here
          </a>
          for immediate assistance. We respond fast and get you back on the road
          quickly.
        </p>
      </section>

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AutoKeysExperts Kenya",
          "image": "https://www.autokeyexperts.co.ke/images/logo.png",
          "telephone": "+254716884011",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "url": "https://www.autokeyexperts.co.ke",
          "sameAs": ["https://www.facebook.com/AutoKeysExperts"]
        }
        `,
        }}
      />
    </main>
  );
}
