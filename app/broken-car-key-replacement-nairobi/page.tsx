import Image from "next/image";

export const metadata = {
  title:
    "Broken Car Key Repair & Replacement Nairobi | Key Shell Fix | AutoKey Experts",
  description:
    "Broken car key in Nairobi? We repair and replace damaged car keys, fix key shells, and restore remote buttons. Fast mobile auto locksmith service. Call 0716884011.",
  keywords: [
    "broken car key repair Nairobi",
    "car key shell replacement Nairobi",
    "car key repair Kenya",
    "auto locksmith Nairobi",
    "fix car key buttons Nairobi",
    "car key casing replacement",
  ],
  openGraph: {
    title: "Broken Car Key Repair Nairobi | Key Shell Replacement Services",
    description:
      "We fix broken car keys, replace damaged key shells, and restore functionality. Mobile service across Nairobi.",
    url: "https://autokeyexperts.co.ke/broken-car-key",
    siteName: "AutoKey Experts",
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-10 space-y-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gray-50 py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-yellow-600">
              Auto Locksmith Nairobi • Mobile Service
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Broken Car Key Repair & Replacement in Nairobi
            </h1>

            <p className="text-lg text-gray-600">
              We fix broken, cracked, or worn-out car keys, replace key shells,
              and restore remote buttons. Fast, affordable service anywhere in
              Nairobi.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0716884011"
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                📞 Call 0716 884 011
              </a>

              <a
                href="https://wa.me/254716884011"
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* TRUST BADGE */}
            <p className="text-sm text-gray-500">
              ✔ Fast Response • ✔ Affordable • ✔ All Car Models
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <Image
              src="/images/brokenshell.jpeg"
              alt="broken car key repair Nairobi"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full shadow-md"
            />

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl px-4 py-2 text-sm font-medium">
              🚗 Mobile Service in Nairobi
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Professional Broken Car Key Repair in Nairobi
        </h2>

        <p className="text-lg">
          If your car key is broken, cracked, or the buttons are no longer
          working, you don’t always need a full replacement. At AutoKey Experts,
          we specialize in repairing damaged car keys and replacing worn-out key
          shells while preserving the original chip and electronics.
        </p>

        <p>
          A damaged key can make it difficult to unlock your car, start the
          engine, or even use remote functions. Our technicians ensure your key
          is restored to full functionality quickly and affordably.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/brokenhondashell.jpeg"
          alt="car key shell replacement Nairobi auto locksmith service"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Car Key Shell Replacement Services
          </h2>

          <p>
            A broken key shell does not mean you need a new key. In most cases,
            we transfer your existing chip and internal components into a brand
            new, durable casing.
          </p>

          <p>
            This process restores your key’s structure, improves button
            responsiveness, and extends its lifespan — all at a lower cost than
            full key replacement.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>✔ Replace cracked or damaged key casings</li>
            <li>✔ Fix worn-out or unresponsive buttons</li>
            <li>✔ Restore remote functionality</li>
            <li>✔ Compatible with multiple car brands</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-100 p-8 rounded-2xl text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Need Your Car Key Fixed Today?
        </h2>

        <p>
          We offer fast, reliable mobile auto locksmith services across Nairobi.
          Contact us now and get your key repaired on the spot.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:0716884011"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Call 0716 884 011
          </a>

          <a
            href="https://wa.me/254716884011"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
