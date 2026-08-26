import Link from "next/link";

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-20">
      <section className="w-full max-w-3xl text-center">
        <p className="text-blue-500 font-semibold uppercase tracking-wider mb-4">
          Contact AutoKeysExperts
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Need Car Key or
          <span className="block text-blue-500">Automotive Services?</span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-8">
          Get in touch with us today for professional car key programming, car
          unlocking, dashboard camera installation, GPS tracking and other
          automotive services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          {/* Call Button */}
          <a
            href="tel:+254716884011"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition duration-300 shadow-lg shadow-blue-600/20"
          >
            Call Us: 0716 884 011
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254716884011"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition duration-300 shadow-lg shadow-green-600/20"
          >
            WhatsApp Us
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Available for automotive services.
        </p>
      </section>
    </main>
  );
};

export default Contact;
