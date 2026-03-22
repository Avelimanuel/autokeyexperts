import Image from "next/image";

export const metadata = {
  title: "Car Key Cutting Nairobi | Precision Key Cutting Services",
  description:
    "We provide accurate car key cutting services in Nairobi for all car models. Fast, precise, and professional car key cutting for lost, spare, or replacement keys.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-16 space-y-12">
      {/* TITLE & INTRO */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Car Key Cutting in Nairobi
        </h1>

        <p className="text-lg">
          We provide professional car key cutting services in Nairobi for all
          car models. Whether you need a replacement, spare key, or lost key
          solution, our expert technicians use precision machines to cut your
          keys accurately. Each key is tested to ensure it works perfectly with
          your vehicle before we finish the job.
        </p>

        <p className="text-lg">
          Our services include cutting and duplicating traditional mechanical
          keys, transponder keys, flip keys, and remote keys. We prioritize
          speed, accuracy, and quality to save you time and give you peace of
          mind.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/car-key-cutting.jpg"
          alt="car key cutting Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Precision Key Cutting Services
          </h2>
          <p>
            A precise cut is essential for your car key to function properly.
            Our state-of-the-art key cutting machines allow us to duplicate or
            create keys with exact specifications, ensuring smooth operation and
            longevity.
          </p>

          <p>
            Whether it’s a standard mechanical key or a complex transponder key,
            we handle every type with professionalism. Our mobile service allows
            us to come to your location in Nairobi, giving you convenience and
            peace of mind.
          </p>
        </div>
      </section>
    </main>
  );
}
