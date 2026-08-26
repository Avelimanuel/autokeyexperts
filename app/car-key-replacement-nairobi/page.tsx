import Image from "next/image";
export const metadata = {
  title:
    "Car Key Replacement Nairobi | Lost Car Key Replacement | AutoKeysExperts",
  description:
    "Need car key replacement in Nairobi? AutoKeysExperts provides fast lost car key replacement, key programming, and duplication services. 24/7 mobile auto locksmith near you.",
};
export default function CarKeyReplacementPage() {
  return (
    <main className="flex flex-col bg-white text-gray-900">
      {" "}
      {/* HERO */}{" "}
      <section className="relative flex h-[75vh] items-center overflow-hidden text-white">
        {" "}
        <Image
          src="/images/mercedeskey.jpeg"
          alt="car key replacement Nairobi"
          fill
          priority
          className="object-cover"
        />{" "}
        <div className="absolute inset-0 bg-black/70" />{" "}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-20">
          {" "}
          <div className="max-w-4xl">
            {" "}
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-yellow-400 md:text-base">
              {" "}
              Auto Locksmith Nairobi • 24/7 Mobile Service{" "}
            </p>{" "}
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {" "}
              Lost Your Car Key? We Replace It Fast anywhere{" "}
            </h1>{" "}
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
              {" "}
              We provide on-site car key replacement, programming, and
              duplication. Our mobile locksmith reaches you anywhere across Nairobi and beyond 
              — fast.{" "}
            </p>{" "}
            <div className="flex flex-wrap gap-4">
              {" "}
              <a
                href="tel:+254716884011"
                className="rounded-xl bg-yellow-500 px-6 py-3.5 font-bold text-black shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl"
              >
                {" "}
                📞 Call 0716 884 011{" "}
              </a>{" "}
              <a
                href="https://wa.me/254716884011"
                target="_blank"
                className="rounded-xl bg-green-500 px-6 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-xl"
              >
                {" "}
                💬 WhatsApp{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* INTRO */}{" "}
      <section className="mx-auto w-full max-w-5xl space-y-6 px-6 py-16 md:px-10 md:py-20">
        {" "}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {" "}
          Car Key Replacement Services{" "}
        </h2>{" "}
        <p className="text-base leading-8 text-gray-700 md:text-lg">
          {" "}
          At AutoKeysExperts, we specialize in replacing lost or damaged car
          keys for all vehicle models. Whether you’ve lost your only key or need
          a spare, we provide fast and reliable solutions using advanced key
          cutting and programming tools.{" "}
        </p>{" "}
        <p className="text-base leading-8 text-gray-600 md:text-lg">
          {" "}
          Our mobile auto locksmith service operates across Nairobi and beyond.
           We come to your
          location and get you back on the road quickly.{" "}
        </p>{" "}
      </section>{" "}
      {/* IMAGE + DETAILS */}{" "}
      <section className="grid items-center gap-12 bg-gray-50 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-20">
        {" "}
        <Image
          src="/images/cx5lostkey.jpeg"
          alt="lost car key replacement Nairobi"
          width={600}
          height={400}
          className="w-full rounded-2xl object-cover shadow-lg"
        />{" "}
        <div className="space-y-5">
          {" "}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {" "}
            Lost All Car Keys? No Problem{" "}
          </h2>{" "}
          <p className="text-base leading-8 text-gray-700 md:text-lg">
            {" "}
            If you’ve lost all your car keys, we can create a new one from
            scratch and program it to your car’s immobilizer system.{" "}
          </p>{" "}
          <p className="text-base leading-8 text-gray-600">
            {" "}
            No need to tow your car to the dealership. We come fully equipped
            and handle everything on-site.{" "}
          </p>{" "}
          <ul className="space-y-3 pt-2 text-gray-700">
            {" "}
            <li className="flex items-center gap-3">
              {" "}
              <span className="font-bold text-yellow-500">✔</span>{" "}
              <span>Transponder keys</span>{" "}
            </li>{" "}
            <li className="flex items-center gap-3">
              {" "}
              <span className="font-bold text-yellow-500">✔</span>{" "}
              <span>Remote keys</span>{" "}
            </li>{" "}
            <li className="flex items-center gap-3">
              {" "}
              <span className="font-bold text-yellow-500">✔</span>{" "}
              <span>Smart key systems</span>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </section>{" "}
      {/* SERVICES */}{" "}
      <section className="space-y-10 px-6 py-20 md:px-10 lg:px-20">
        {" "}
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {" "}
          Our Car Key Services{" "}
        </h2>{" "}
        <div className="grid gap-5 md:grid-cols-3">
          {" "}
          {[
            "Lost car key replacement",
            "Spare key duplication",
            "Car key programming",
            "Broken key extraction",
            "Key shell replacement",
            "Remote repair",
          ].map((service, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {" "}
              <p className="font-semibold text-gray-800">
                {" "}
                <span className="mr-2 font-bold text-yellow-500">✔</span>{" "}
                {service}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {/* WHY US */}{" "}
      <section className="space-y-10 bg-gray-50 px-6 py-20 text-center md:px-10 lg:px-20">
        {" "}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {" "}
          Why Choose AutoKeysExperts?{" "}
        </h2>{" "}
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {" "}
          {[
            "24/7 Emergency Service",
            "Fast Response Time",
            "Affordable Pricing",
            "Mobile On-Site Service",
            "All Car Models Supported",
            "Professional Equipment",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 font-medium text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {" "}
              {item}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA */}{" "}
      <section className="space-y-6 bg-black px-6 py-20 text-center text-white">
        {" "}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {" "}
          Need Car Key Replacement?{" "}
        </h2>{" "}
        <p className="text-gray-300">
          {" "}
          Call now and get fast mobile locksmith service at your location.{" "}
        </p>{" "}
        <div className="flex flex-wrap justify-center gap-4">
          {" "}
          <a
            href="tel:+254716884011"
            className="rounded-xl bg-yellow-500 px-7 py-3.5 font-bold text-black shadow-lg transition duration-300 hover:bg-yellow-400 hover:shadow-xl"
          >
            {" "}
            📞 Call Now{" "}
          </a>{" "}
          <a
            href="https://wa.me/254716884011"
            target="_blank"
            className="rounded-xl bg-green-500 px-7 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:bg-green-400 hover:shadow-xl"
          >
            {" "}
            💬 WhatsApp{" "}
          </a>{" "}
        </div>{" "}
      </section>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Car Key Replacement",
            provider: {
              "@type": "LocalBusiness",
              name: "AutoKeysExperts",
              areaServed: "Nairobi",
            },
          }),
        }}
      />
    </main>
  );
}
