import Image from "next/image";

export const metadata = {
  title: "Car ECU Repair Nairobi | ECU Programming Services",
  description:
    "Professional ECU repair and programming services in Nairobi for all vehicle types. We also assist with broken key shell replacements and key programming.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-16 space-y-12">
      {/* TITLE & INTRO */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Car ECU Repair & Programming in Nairobi
        </h1>

        <p className="text-lg">
          Is your vehicle experiencing performance issues, engine problems, or
          warning lights on the dashboard? Our professional ECU repair and
          programming services in Nairobi help diagnose and fix all electronic
          control unit (ECU) issues affecting your car. From faulty sensors to
          programming errors, our experts ensure your vehicle operates at peak
          performance.
        </p>

        <p className="text-lg">
          In addition to ECU repair, we also assist with related services such
          as car key programming and broken key shell replacements, providing a
          comprehensive solution for your vehicle’s electronics and security.
          Our mobile and in-shop services ensure convenience, reliability, and
          expert care for all vehicle types.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/car-ecu-repair.jpg"
          alt="car ECU repair and key programming Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Expert ECU Diagnostics & Programming
          </h2>

          <p>
            Our technicians use advanced diagnostic tools to identify ECU faults
            accurately. We then repair or reprogram the ECU to restore full
            functionality, improving engine performance, fuel efficiency, and
            safety.
          </p>

          <p>
            Whether your vehicle is experiencing engine misfires, poor
            acceleration, or electronic glitches, we provide precise solutions.
            By combining ECU repair with key programming and broken key shell
            replacement, your car is fully functional and secure.
          </p>
        </div>
      </section>
    </main>
  );
}
