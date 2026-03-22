import Image from "next/image";

export const metadata = {
  title: "Car Key Replacement Nairobi | Auto Locksmith Kenya | AutoKeysExperts",
  description:
    "AutoKeysExperts offers car key replacement, programming, car alarms, ECU repair, GPS tracking, dashboard cameras, and auto locksmith services in Nairobi. 24/7 mobile service.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative pt-16 md:pt-0 h-[90vh] flex items-center justify-center text-white">
        <Image
          src="/images/hero.jpg"
          alt="auto locksmith services Nairobi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Car Key Replacement in Nairobi – 24/7 Auto Locksmith Services
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We provide professional car key replacement, programming, unlocking,
            ECU repair, and car security solutions anywhere in Nairobi.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+254716884011"
              className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition hover:bg-yellow-400"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition hover:bg-green-400"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 space-y-12">
        <h2 className="text-3xl font-bold text-center">
          Our Auto Locksmith & Car Tech Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ServiceCard
            img="/images/landcruiserlostkey.jpeg"
            title="Lost Car Key Replacement"
            desc="Lost all your car keys? Don’t worry. We provide complete car key replacement services in Nairobi for all vehicle models. Our mobile auto locksmith team comes to your location, cuts a new key, and programs it on-site so your car can start immediately. Fast, reliable, and available 24/7."
          />

          <ServiceCard
            img="/images/corollacross.jpeg"
            title="Spare Key Duplication"
            desc="Avoid getting stranded by having a spare car key made in advance. We duplicate and program all types of car keys including transponder keys, remote keys, and smart keys. Our service is quick, affordable, and ensures your spare key works perfectly with your vehicle."
          />

          <ServiceCard
            img="/images/lockedoutofcar.webp"
            title="Car Door Unlocking"
            desc="Locked your keys inside the car? Our emergency car unlocking service in Nairobi is fast and damage-free. We use professional tools to safely unlock your vehicle without damaging the locks or doors. Available 24/7 for all car models."
          />

          <ServiceCard
            img="/images/mazdacx5spare.jpeg"
            title="Car Key Programming"
            desc="We specialize in car key programming for a wide range of vehicles. Whether you need a new key programmed or an existing key reprogrammed, we use advanced diagnostic tools to ensure proper synchronization with your car’s security system."
          />

          <ServiceCard
            img="/images/gpstracking.jpeg"
            title="GPS Tracking Installation"
            desc="Secure your vehicle with professional GPS tracking installation services in Nairobi. Monitor your car’s location in real-time, prevent theft, and improve security. We install reliable tracking systems with user-friendly mobile access."
          />

          <ServiceCard
            img="/images/remoterepair.webp"
            title="Car Remote Repair"
            desc="If your car remote is not working properly, we provide expert repair and replacement services. From button issues to signal problems, we diagnose and fix faults quickly so your remote functions like new."
          />

          <ServiceCard
            img="/images/alarm.jpg"
            title="Car Alarm Installation"
            desc="Protect your vehicle from theft with high-quality car alarm systems. We supply and install advanced car alarms with features like remote control, immobilizer systems, and siren alerts for maximum security."
          />

          <ServiceCard
            img="/images/dashcam.jpeg"
            title="Dashboard Camera Installation"
            desc="Install a dashboard camera to record your driving and enhance your vehicle’s security. We provide professional dashcam installation with clean wiring and proper setup for clear recording and reliability."
          />

          <ServiceCard
            img="/images/airbagmodulereset.jpeg"
            title="SRS Airbag Module Repair & Crash Data Reset"
            desc="If your vehicle has been involved in an accident, the SRS (airbag) module often stores crash data that prevents the airbag system from functioning properly. Instead of replacing the entire module, we offer professional SRS module repair and crash data reset services. We safely clear the stored crash data and restore the system to proper working condition, saving you the high cost of replacement while ensuring your vehicle’s safety systems are fully operational."
          />

          <ServiceCard
            img="/images/ecurepair.jpeg"
            title="ECU Repair & Programming"
            desc="We diagnose and repair car computer (ECU) issues affecting your vehicle’s performance. Our ECU programming services help fix errors, improve efficiency, and restore proper engine functionality."
          />

          <ServiceCard
            img="/images/key-cutting.jpg"
            title="Car Key Cutting"
            desc="We offer precise car key cutting services for all vehicle types using advanced machines. Whether you need a replacement or spare key, we ensure accurate cutting for perfect fit and function."
          />

          <ServiceCard
            img="/images/lock.jpg"
            title="Ignition & Door Lock Repair"
            desc="Having trouble with your ignition or door locks? We repair worn-out or damaged locks to restore smooth operation. Our service helps prevent key breakage and ensures your vehicle remains secure."
          />

          <ServiceCard
            img="/images/keyshell.jpeg"
            title="Broken Key Shell Replacement"
            desc="If your car key shell is broken or worn out, we replace it with a new durable shell. This restores the appearance and usability of your key without affecting the internal electronics."
          />
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 md:px-20 bg-black text-white text-center space-y-6">
        <h2 className="text-3xl font-bold">Why Choose AutoKeysExperts?</h2>

        <p className="max-w-2xl mx-auto">
          We are trusted professionals offering fast, affordable, and reliable
          auto locksmith and car tech services across Nairobi.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div>✔ 24/7 Emergency Service</div>
          <div>✔ Fast Response Time</div>
          <div>✔ Affordable Pricing</div>
          <div>✔ Professional Technicians</div>
          <div>✔ Mobile On-Site Service</div>
          <div>✔ All Car Models Supported</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-yellow-500 space-y-6">
        <h2 className="text-3xl font-bold">
          Need Auto Locksmith Services in Nairobi?
        </h2>

        <p>Call us now for fast and reliable service anywhere in Nairobi.</p>

        <a
          href="tel:+254716884011"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Call Now
        </a>
      </section>
    </main>
  );
}
interface ServiceCardProps {
  img: string;
  title: string;
  desc: string;
}

/* REUSABLE CARD */
function ServiceCard({ img, title, desc }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <Image
        src={img}
        alt={title.toLowerCase()}
        width={600}
        height={400}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
