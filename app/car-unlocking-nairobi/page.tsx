import Image from "next/image";

export const metadata = {
  title: "Car Unlocking Service Nairobi | Emergency Auto Locksmith",
  description:
    "Locked your keys inside the car? We provide fast and safe car unlocking services in Nairobi. 24/7 emergency auto locksmith near you.",
};

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative pt-16 md:pt-0 h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/images/unlocking.jpg"
          alt="car unlocking Nairobi"
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
        <h2 className="text-3xl font-bold">Emergency Car Unlocking</h2>
        <p>
          If you have locked your keys inside your car, our experienced auto
          locksmith team in Nairobi can unlock your vehicle quickly without
          causing any damage. We use specialized tools and techniques to safely
          access your car and get you back on the road.
        </p>
        <p>
          Our mobile service ensures we reach you wherever you are in Nairobi,
          including Westlands, Kilimani, Embakasi, and surrounding areas.
          Available 24/7 for all car models.
        </p>
      </section>
    </main>
  );
}
