import Image from "next/image";

export const metadata = {
  title: "Car Key Repair Nairobi | Fix Faulty Car Keys",
  description:
    "Car key not working? We repair faulty car keys, broken key shells, and remotes in Nairobi quickly and professionally.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-16 space-y-12">
      {/* TITLE & INTRO */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Car Key Repair in Nairobi
        </h1>

        <p className="text-lg">
          Are your car keys faulty, worn out, or broken? At AutoKeysExperts, we
          provide professional car key repair services in Nairobi for all types
          of keys and remotes. Whether it’s a malfunctioning transponder key, a
          worn-down button, or a broken key shell, our expert technicians
          carefully repair and restore it to full working condition.
        </p>

        <p className="text-lg">
          We specialize in repairing internal electronics, replacing broken key
          shells, and fixing remote functionality. Our mobile service allows us
          to reach you anywhere in Nairobi, providing fast and convenient car
          key repair without the need to visit a dealership.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/car-key-repair.jpg"
          alt="car key repair and broken key shell replacement Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Broken Key Shell Replacement
          </h2>

          <p>
            A broken key shell can make your car key unusable or cause internal
            components to fail. We replace only the outer casing while
            preserving your original electronics, giving your key a like-new
            appearance and full functionality. This approach saves time and
            money while maintaining the reliability of your car key.
          </p>

          <p>
            We keep a wide selection of high-quality key shells compatible with
            various car brands, ensuring durability and a perfect fit. After
            replacement, your key is fully functional and ready to use
            immediately.
          </p>
        </div>
      </section>
    </main>
  );
}
