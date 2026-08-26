import Image from "next/image";
export const metadata = {
  title: "Car Unlocking Nairobi | 24/7 Emergency Auto Locksmith",
  description:
    "Locked your keys in your car? AutoKeysExperts Kenya provides fast, safe, and damage-free car unlocking services in Nairobi. 24/7 emergency auto locksmith.",
};
export default function Page() {
  return (
    <main className="flex flex-col">
      {" "}
      {/* HERO */}{" "}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden text-white md:h-[70vh]">
        {" "}
        <Image
          src="/images/unlocking.jpg"
          alt="Car unlocking Nairobi"
          fill
          priority
          className="object-cover"
        />{" "}
        <div className="absolute inset-0 bg-black/60" />{" "}
        <div className="relative z-10 w-full px-5 text-center sm:px-8 md:max-w-4xl">
          {" "}
          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl">
            {" "}
            Car Door Unlocking Service in Nairobi – Fast & Damage-Free{" "}
          </h1>{" "}
          <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {" "}
            Locked out of your car? Our professional auto locksmith team
            provides fast, safe, and damage-free unlocking services anywhere in
            Nairobi, 24/7.{" "}
          </p>{" "}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            {" "}
            <a
              href="tel:+254716884011"
              className="w-full rounded-xl bg-yellow-500 px-6 py-3.5 font-semibold text-black transition hover:bg-yellow-400 sm:w-auto"
            >
              {" "}
              Call Now: 0716 884 011{" "}
            </a>{" "}
            <a
              href="https://wa.me/254716884011"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white transition hover:bg-green-400 sm:w-auto"
            >
              {" "}
              WhatsApp Us{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* INTRO */}{" "}
      <section className="mx-auto w-full max-w-6xl space-y-10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-20">
        {" "}
        <div className="space-y-5">
          {" "}
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {" "}
            Emergency Car Unlocking Services in Nairobi{" "}
          </h2>{" "}
          <p className="text-base leading-7 text-gray-700 sm:text-lg">
            {" "}
            If you’ve locked your keys inside your car, AutoKeysExperts Kenya
            offers fast and professional car unlocking services. Our team uses
            specialized tools to safely unlock your vehicle without causing
            damage.{" "}
          </p>{" "}
          <p className="text-base leading-7 text-gray-700 sm:text-lg">
            {" "}
            Our mobile service covers all areas in Nairobi, including Westlands,
            Kilimani, Embakasi, Karen, Muthaiga, Kiambu, Kileleshwa and
            surrounding neighborhoods. We are available 24/7 for all car
            models.{" "}
          </p>{" "}
        </div>{" "}
        {/* IMAGE */}{" "}
        <div>
          {" "}
          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg sm:h-80 md:h-[420px]">
            {" "}
            <Image
              src="/images/lockedoutofcar.webp"
              alt="Professional car unlocking service"
              fill
              className="object-cover"
            />{" "}
          </div>{" "}
          <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
            {" "}
            Our experienced technicians are equipped with specialized tools to
            safely unlock your car without causing damage. Available 24/7 across
            Nairobi, we ensure fast and reliable service for all car
            models.{" "}
          </p>{" "}
        </div>{" "}
        {/* WHY CHOOSE US */}{" "}
        <div className="space-y-5">
          {" "}
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {" "}
            Why Choose AutoKeysExperts Kenya?{" "}
          </h2>{" "}
          <ul className="space-y-3 text-base leading-7 text-gray-700 sm:text-lg">
            {" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-yellow-500">●</span>{" "}
              <span>Fast and reliable emergency service</span>{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-yellow-500">●</span>{" "}
              <span>Damage-free unlocking for all car models</span>{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-yellow-500">●</span>{" "}
              <span>24/7 mobile auto locksmith anywhere in Nairobi</span>{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-yellow-500">●</span>{" "}
              <span>Expert technicians with years of experience</span>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* CONTACT */}{" "}
        <div className="space-y-4">
          {" "}
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            {" "}
            Contact Us{" "}
          </h2>{" "}
          <p className="text-base leading-7 text-gray-700 sm:text-lg">
            {" "}
            Call{" "}
            <a
              href="tel:+254716884011"
              className="font-semibold text-blue-600 underline"
            >
              {" "}
              0716 884 011{" "}
            </a>{" "}
            or WhatsApp us{" "}
            <a
              href="https://wa.me/254716884011"
              className="font-semibold text-blue-600 underline"
            >
              {" "}
              here{" "}
            </a>{" "}
            for immediate assistance. We respond fast and get you back on the
            road quickly.{" "}
          </p>{" "}
        </div>{" "}
      </section>
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AutoKeysExperts Kenya",
          "image": "https://www.autokeyexperts.co.ke/images/logo.png",
          "telephone": "+254716884011",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "url": "https://www.autokeyexperts.co.ke",
          "sameAs": ["https://www.facebook.com/AutoKeysExperts"]
        }
        `,
        }}
      />
    </main>
  );
}
