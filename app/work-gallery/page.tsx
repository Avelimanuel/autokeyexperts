import Image from "next/image";
import Link from "next/link";
import CallButton from "../components/Callbutton";

export const metadata = {
  title: "Our Work Gallery | Car Key Experts Kenya",
  description:
    "Explore completed automotive locksmith jobs by AutoKeysExperts. View our car key replacements, key programming, tracker installations, car unlocking and other automotive services across Kenya.",
};

const projects = [
  {
    title: "Mazda Cx5 Lost Key Replacement",
    category: "Lost Key Replacement",
    description:
      "Successfully replaced a lost car key and provided the customer with a fully functional replacement, restoring convenient access to their vehicle.",
    image: "/workgalleryimages/mazdacx5keyreplacement.jpg",
  },
  {
    title: "Mazda Cx8 spare Key Programming",
    category: "Key Programming",

    image: "/workgalleryimages/mazdacx8spare.jpg",
  },
  {
    title: "2020 Toyota Rav4 spare key",
    category: "Key Duplication",
    description:
      "Programmed an additional spare car key, giving the vehicle owner a reliable backup and extra peace of mind.",
    image: "/workgalleryimages/2020Rav4spare.jpg",
  },
  {
    title: "Honda Odyssey Spare Key Programming",
    category: "Key Programming",
    description:
      "Programmed a new spare key for a Honda Odyssey.",
    image: "/workgalleryimages/hondaodyssyspare.jpg",
  },
  {
    title: "GPS Tracker Installation",
    category: "Vehicle Tracking",
    description:
      "Installed a GPS vehicle tracking system, allowing the owner to monitor vehicle location, movement and other tracking information in real time.",
    image: "/workgalleryimages/gpstracker.jpg",
  },
  {
    title: "Toyota Harrier spare key",
    category: "Key Duplication",
    description:
      "Programmed an additional spare car key, giving the vehicle owner a reliable backup and extra peace of mind.",
    image: "/workgalleryimages/harriersparekey.jpg",
  },
  {
    title: "Car Key Upgrade",
    category: "Key Upgrade",
    description:
      "Upgraded a traditional car key to a modern remote key, providing improved convenience and easier vehicle access.",
    image: "/workgalleryimages/keyupgrade.jpg",
  },
  {
    title: "Honda Key upgrade",
    category: "Key Cutting",
    image: "/workgalleryimages/hondakeyupgrade.jpg",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-28">
      {/* Hero Section */}
      <section className="bg-slate-950 px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            OUR WORK & PROJECTS
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Our Work <span className="text-blue-500">Gallery</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            A look at some of the automotive locksmith and vehicle security
            projects we have completed. From car key replacement and programming
            to GPS tracker installations, see the quality of service we deliver.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Recent Projects
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                A Showcase of Our Work
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Every project represents our commitment to reliable automotive
                locksmith solutions and customer satisfaction.
              </p>
            </div>

            <p className="text-sm font-medium text-slate-500">
             Featured Projects
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Project Image */}

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-slate-50 p-4 sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <span className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Completed Project
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Professional Car Key Services?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            Whether you need a replacement car key, key programming, vehicle
            security installation or any other automotive locksmith service, our
            team is ready to help.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-blue-500 hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
