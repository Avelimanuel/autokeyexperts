import Image from "next/image";
import Link from "next/link";

const DashBoardCamera = () => {
  return (
    <main className="bg-slate-950 text-white min-h-screen pt-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-500 font-semibold uppercase tracking-wider mb-4">
              4G Dashboard Camera Installation
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Monitor Your Car
              <span className="text-blue-500"> From Anywhere</span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-8">
              We professionally install 4G dashboard cameras that allow you to
              remotely view your vehicle from anywhere using your phone. Stay
              connected to your car whether you are at work, at home, or away
              .
            </p>

            <p className="mt-4 text-slate-400 leading-7">
              The camera supports live video, audio, GPS tracking, parking
              monitoring and continuous video recording, giving you greater
              visibility and security for your vehicle.
            </p>

            <Link
              href="/contact-page"
              className="inline-block mt-8 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
            >
              Book Installation
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full" />

            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl">
              <Image
                src="/images/dashboardcamera.jpeg"
                alt="4G car dashboard camera"
                width={1000}
                height={800}
                className="w-full rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Dashboard Camera Features</h2>

            <p className="mt-3 text-slate-400">
              Stay connected to your vehicle wherever you are.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">4G Connectivity</h3>
              <p className="text-slate-400 leading-7">
                Access your dashboard camera remotely through 4G connectivity
                without needing to be physically near your vehicle.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Live Remote Viewing
              </h3>
              <p className="text-slate-400 leading-7">
                View your vehicle remotely from your smartphone and check what
                is happening around your car.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Audio Support</h3>
              <p className="text-slate-400 leading-7">
                The camera supports audio, allowing you to hear what is
                happening inside the vehicle when the feature is enabled.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">GPS Tracking</h3>
              <p className="text-slate-400 leading-7">
                Monitor the location of your vehicle and keep track of where
                your car is.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Parking Monitoring</h3>
              <p className="text-slate-400 leading-7">
                Monitor your vehicle while it is parked and receive visibility
                into activity around your car.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Video Recording</h3>
              <p className="text-slate-400 leading-7">
                Record your journeys and keep important footage from your
                vehicle's cameras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to Monitor Your Car Remotely?
          </h2>

          <p className="mt-4 text-slate-400 text-lg">
            Get a 4G dashboard camera professionally installed in your vehicle
            by AutoKeysExperts.
          </p>

          <Link
            href="/contact-page"
            className="inline-block mt-7 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DashBoardCamera;
