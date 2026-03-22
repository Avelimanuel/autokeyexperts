import Image from "next/image";

export const metadata = {
  title: "Broken Car Key Replacement Nairobi | Key Repair Services",
  description:
    "Broken car key? We repair and replace damaged car keys and key shells in Nairobi quickly and professionally.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-16 space-y-12">
      {/* TITLE */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Broken Car Key Replacement in Nairobi
        </h1>

        <p className="text-lg">
          If your car key is broken, worn out, or the outer casing (key shell)
          is damaged, we provide professional repair and replacement services in
          Nairobi. A damaged key shell can make it difficult to press buttons or
          even cause the internal components to fall out, making your key
          unreliable. Our experts carefully transfer the internal electronics
          into a brand new, durable key shell and restore your key to a like-new
          condition.
        </p>

        <p>
          Whether your key is cracked, buttons are not working, or the casing is
          completely broken, we offer fast and affordable solutions. Our mobile
          auto locksmith service ensures that we can assist you anywhere in
          Nairobi and get your key working properly again without the need for a
          full replacement.
        </p>
      </section>

      {/* IMAGE + DESCRIPTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/key-shell.jpg"
          alt="broken car key shell replacement Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Key Shell Replacement Services
          </h2>

          <p>
            A broken key shell does not mean you need a completely new key. In
            most cases, we can replace only the outer shell and reuse the
            original internal chip and electronics. This saves you money while
            restoring full functionality of your car key.
          </p>

          <p>
            We stock a wide range of high-quality key shells compatible with
            different car models, ensuring a perfect fit and long-lasting
            durability.
          </p>
        </div>
      </section>
    </main>
  );
}
