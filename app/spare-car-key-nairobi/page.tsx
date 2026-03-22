import Image from "next/image";

export const metadata = {
  title: "Spare Car Key Nairobi | Car Key Duplication Services",
  description:
    "Get a spare car key in Nairobi. We duplicate and program all types of car keys quickly and professionally, including transponder and smart keys.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-16 space-y-12">
      {/* TITLE & INTRO */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Spare Car Key Services in Nairobi
        </h1>

        <p className="text-lg">
          Avoid emergencies by having a spare car key ready. At AutoKeysExperts,
          we provide fast and reliable car key duplication and programming
          services for all types of keys, including traditional mechanical keys,
          transponder keys, and smart keys. Our mobile service allows us to
          reach your location anywhere in Nairobi, saving you time and giving
          you peace of mind.
        </p>

        <p className="text-lg">
          In addition to duplicating keys, we also replace broken key shells and
          worn-out components, ensuring your spare key works just as reliably as
          your original. Every key is tested thoroughly to guarantee proper
          functionality with your vehicle before we finish.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/spare-car-key.jpg"
          alt="spare car key duplication Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Key Duplication & Broken Shell Replacement
          </h2>

          <p>
            We not only duplicate your car keys but also provide professional
            replacement of broken key shells. This ensures your spare key is
            durable, fully functional, and ready to use whenever you need it.
          </p>

          <p>
            Our team uses precise cutting and programming tools to create keys
            that match your original perfectly, giving you convenience,
            reliability, and security for your vehicle.
          </p>
        </div>
      </section>
    </main>
  );
}
