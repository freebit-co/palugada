import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Website",
    title: "Website UMKM Modern",
    description:
      "Website profesional untuk membantu bisnis lokal membangun kehadiran digital.",
  },
  {
    number: "02",
    category: "Branding",
    title: "Digital Brand Identity",
    description:
      "Identitas visual modern untuk brand yang ingin tampil lebih profesional.",
  },
  {
    number: "03",
    category: "Business",
    title: "Digital Business Solution",
    description:
      "Solusi digital yang dirancang sesuai kebutuhan operasional bisnis.",
  },
];

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Website modern, cepat, responsive, dan profesional untuk bisnis, UMKM, maupun perusahaan.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Strategi digital untuk membantu brand meningkatkan jangkauan, engagement, dan peluang mendapatkan pelanggan.",
  },
  {
    number: "03",
    title: "Business Solutions",
    description:
      "Solusi digital yang disesuaikan dengan kebutuhan operasional dan pertumbuhan bisnis.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Modern",
    description:
      "Desain modern yang membuat brand terlihat lebih profesional dan terpercaya.",
  },
  {
    number: "02",
    title: "Responsive",
    description:
      "Pengalaman yang nyaman di smartphone, tablet, maupun desktop.",
  },
  {
    number: "03",
    title: "Fast",
    description:
      "Teknologi modern untuk memberikan pengalaman digital yang cepat.",
  },
  {
    number: "04",
    title: "Scalable",
    description:
      "Struktur yang dapat dikembangkan mengikuti kebutuhan bisnis Anda.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="premium-gradient relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />
        </div>

        <div className="palugada-hero relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-lime-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
                  Digital Solutions
                </p>
              </div>

              <h1 className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl lg:text-9xl">
                Build
                <br />
                <span className="text-gradient">Something</span>
                <br />
                Bigger.
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                PALUGADA membantu bisnis, UMKM, dan brand membangun
                pengalaman digital yang profesional, modern, dan siap
                berkembang.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-lime-400 px-8 py-4 text-center font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-300"
                >
                  Start a Project →
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-full border border-slate-700 px-8 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:text-lime-400"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* Hero Side */}
            <div className="hidden lg:block">
              <div className="border-l border-slate-800 pl-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  PALUGADA / 2026
                </p>

                <p className="mt-8 text-2xl font-semibold leading-10 text-slate-200">
                  Design.
                  <br />
                  Technology.
                  <br />
                  <span className="text-lime-400">Growth.</span>
                </p>

                <div className="mt-12 flex items-center gap-4">
                  <span className="flex h-3 w-3 rounded-full bg-lime-400" />

                  <span className="text-sm text-slate-400">
                    Digital experience studio
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3 md:items-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
              What We Do
            </p>

            <p className="text-2xl font-semibold leading-9 text-slate-950 md:col-span-2 md:text-3xl">
              Kami mengubah ide bisnis menjadi pengalaman digital yang
              terlihat profesional, terasa modern, dan dirancang untuk
              berkembang.
            </p>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Our Services
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Digital solutions
                <br />
                that move business.
              </h2>
            </div>

            <Link
              href="/services"
              className="font-semibold text-slate-950 transition hover:text-lime-600"
            >
              View All Services →
            </Link>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                href="/services"
                className="group bg-white p-8 transition duration-300 hover:bg-slate-950 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-lime-600 group-hover:text-lime-400">
                    {service.number}
                  </span>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-lime-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-bold text-slate-950 transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600 transition group-hover:text-slate-400">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* WHY PALUGADA */}
      <section className="bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
                Why PALUGADA
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                More than
                <br />
                just a website.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Setiap project dibangun dengan perhatian terhadap desain,
                teknologi, pengalaman pengguna, dan kebutuhan bisnis.
              </p>

              <Link
                href="/about"
                className="mt-10 inline-block font-semibold text-white transition hover:text-lime-400"
              >
                Discover PALUGADA →
              </Link>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="bg-slate-950 p-8 transition duration-300 hover:bg-slate-900"
                >
                  <span className="text-sm font-bold text-lime-400">
                    {benefit.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Projects that
                <br />
                make an impact.
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="font-semibold text-slate-950 transition hover:text-lime-600"
            >
              View Portfolio →
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Project Visual */}
                <div className="relative flex aspect-[4/3] items-end overflow-hidden bg-slate-950 p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(163,230,53,0.18),transparent_35%)] transition duration-500 group-hover:scale-110" />

                  <div className="relative flex w-full items-end justify-between">
                    <span className="text-7xl font-bold tracking-tight text-white">
                      {project.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-xl text-lime-400 transition duration-300 group-hover:-translate-y-1 group-hover:border-lime-400">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-lime-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-lime-400 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-700">
                Let's Work Together
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
                Ready to build
                <br />
                something bigger?
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-block rounded-full bg-slate-950 px-8 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
              Start a Project →
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}