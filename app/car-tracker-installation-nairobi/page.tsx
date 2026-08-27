import Image from "next/image";
import CallButton from "../components/Callbutton";

export const metadata = {
  title: "Car Tracker Installation Nairobi | GPS Tracking Services",
  description:
    "Professional car tracker installation in Nairobi. Monitor your car in real-time with GPS tracking systems. Mobile service available for all vehicle types.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="w-full bg-slate-950 text-white">
        <div className="mx-auto flex min-h-[480px] w-full max-w-7xl items-center px-5 pt-52 pb-16 sm:min-h-[520px] sm:px-8 sm:pt-48 sm:pb-16 md:min-h-[600px] md:px-10 md:pt-28 md:pb-16 lg:min-h-[480px] lg:px-12 lg:py-16">
          <div className="w-full max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
              <span className="text-sm font-semibold text-blue-400">
                GPS VEHICLE TRACKING
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Car Tracker Installation{" "}
              <span className="text-blue-500">in Nairobi</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Protect your vehicle and gain peace of mind with our professional
              car tracker installation services in Nairobi. Monitor your
              vehicle&apos;s real-time location, track routes, and receive
              alerts for movement or unauthorized access.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Our mobile team provides professional GPS tracker installation at
              your location for all types of vehicles.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton className="bg-yellow-500 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-yellow-400">
                📞 Call - 0716 884 011
              </CallButton>

              <a
                href="https://wa.me/254716884011"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-400"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="group overflow-hidden rounded-2xl bg-white shadow-md">
            <Image
              src="/images/gpstracking.jpeg"
              alt="Car tracker installation in Nairobi"
              width={800}
              height={550}
              priority
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80 lg:h-[400px]"
            />
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-md">
            <Image
              src="/images/kalgpsimage.jpeg"
              alt="GPS car tracking system"
              width={800}
              height={550}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80 lg:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* INFORMATION */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <div className="mb-5 h-1 w-12 rounded-full bg-blue-600" />

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Professional Installation
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Professional GPS Tracker Installation
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Our technicians specialize in installing high-quality GPS tracking
              devices that help you locate your vehicle at any time. We ensure
              that the tracker is discreetly installed, fully functional, and
              compatible with your vehicle&apos;s system.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-2xl bg-blue-600 p-7 text-white shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Monitor Your Vehicle Remotely
            </h2>

            <div className="mt-5 space-y-5 text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
              <p>
                Monitor your car remotely using your smartphone or computer.
                Receive alerts for vehicle movement or tampering and have an
                additional layer of protection against theft.
              </p>

              <p>
                The tracker can also be combined with other vehicle security
                solutions such as alarm installation and dashboard camera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Why Install a Tracker?
            </span>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Better Vehicle Security & Control
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                📍
              </div>

              <h3 className="text-lg font-bold text-white">
                Real-Time Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Know where your vehicle is and monitor its movements remotely.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                🔔
              </div>

              <h3 className="text-lg font-bold text-white">Security Alerts</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Receive alerts when your vehicle moves or suspicious activity
                occurs.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                📱
              </div>

              <h3 className="text-lg font-bold text-white">
                Remote Monitoring
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Access your vehicle tracking information from your phone or
                computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Need a GPS Tracker Installed?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">
            Get professional and discreet GPS tracker installation in Nairobi.
          </p>

          <div className="mt-7">
            <a
              href="tel:0716884011"
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-3.5 font-bold text-blue-700 shadow-sm transition hover:bg-slate-100 sm:w-auto"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
