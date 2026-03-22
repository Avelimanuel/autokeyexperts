import Image from "next/image";

export const metadata = {
  title: "Car Tracker Installation Nairobi | GPS Tracking Services",
  description:
    "Professional car tracker installation in Nairobi. Monitor your car in real-time with GPS tracking systems. Mobile service available for all vehicle types.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-20 py-16 space-y-12">
      {/* TITLE & INTRO */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Car Tracker Installation in Nairobi
        </h1>

        <p className="text-lg">
          Protect your vehicle and gain peace of mind with our professional car
          tracker installation services in Nairobi. We install advanced GPS
          tracking systems that allow you to monitor your car’s real-time
          location, track routes, and receive alerts for movement or
          unauthorized access. Our mobile team comes to your location, providing
          convenient and professional installation for all vehicle types.
        </p>

        <p className="text-lg">
          In addition to tracking, our service can be combined with other car
          security solutions, including alarm installation and broken key shell
          replacements, giving you full control and security over your vehicle.
          Each installation is tested thoroughly to ensure your tracker
          functions reliably and accurately.
        </p>
      </section>

      {/* IMAGE + DETAILS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/gpstracking.jpeg"
          alt="car tracker installation Nairobi"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Professional GPS Tracker Installation
          </h2>

          <p>
            Our technicians specialize in installing high-quality GPS tracking
            devices that help you locate your vehicle at any time. We ensure
            that the tracker is discreetly installed, fully functional, and
            compatible with your vehicle’s system.
          </p>

          <p>
            With proper installation, you can monitor your car remotely via
            smartphone or computer, receive alerts for movement or tampering,
            and have an extra layer of protection against theft. Combined with
            other car security services, your vehicle is fully safeguarded.
          </p>
        </div>
      </section>
    </main>
  );
}
