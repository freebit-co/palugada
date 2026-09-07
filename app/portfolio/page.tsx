import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Website Development",
    title: "Website UMKM Modern",
    description:
      "Website modern untuk membantu bisnis lokal tampil lebih profesional dan meningkatkan kepercayaan pelanggan.",
    type: "website",
  },
  {
    number: "02",
    category: "Brand Identity",
    title: "Digital Brand Identity",
    description:
      "Konsep identitas digital yang dirancang untuk membuat brand terlihat lebih kuat, konsisten, dan mudah dikenali.",
    type: "branding",
  },
  {
    number: "03",
    category: "Business Solution",
    title: "Digital Business Solution",
    description:
      "Solusi digital untuk membantu bisnis mengelola kebutuhan operasional dan berkembang lebih efektif.",
    type: "business",
  },
  {
    number: "04",
    category: "Landing Page",
    title: "Product Launch",
    description:
      "Landing page dengan fokus pada visual, storytelling, dan pengalaman pengguna untuk memperkenalkan produk.",
    type: "landing",
  },
  {
    number: "05",
    category: "Corporate Website",
    title: "Corporate Experience",
    description:
      "Website perusahaan dengan tampilan premium yang memperkuat kredibilitas dan positioning brand.",
    type: "corporate",
  },
  {
    number: "06",
    category: "Digital Experience",
    title: "Custom Digital Platform",
    description:
      "Pengalaman digital yang dirancang khusus mengikuti kebutuhan dan karakter bisnis.",
    type: "platform",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "website") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-slate-900 p-6">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />

        <div className="relative h-full rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>

          <div className="grid h-[calc(100%-32px)] grid-cols-2 gap-4 pt-5">
            <div className="flex flex-col justify-center">
              <div className="h-2 w-16 rounded-full bg-lime-400" />
              <div className="mt-4 h-5 w-32 rounded bg-white/90" />
              <div className="mt-2 h-5 w-24 rounded bg-white/20" />
              <div className="mt-6 h-8 w-24 rounded-full bg-lime-400/90" />
            </div>

            <div className="rounded-xl bg-gradient-to-br from-lime-400/30 to-slate-800" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "branding") {
    return (
      <div className="relative h-full overflow-hidden bg-lime-400 p-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[60px] border-slate-950/10" />

        <div className="relative flex h-full flex-col justify-between">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900/60">
            Identity
          </span>

          <div>
            <div className="text-6xl font-black tracking-tighter text-slate-950 md:text-7xl">
              GO
            </div>

            <div className="mt-2 h-1 w-20 bg-slate-950" />
          </div>

          <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900/50">
            Brand / Digital / 2026
          </div>
        </div>
      </div>
    );
  }

  if (type === "business") {
    return (
      <div className="relative h-full overflow-hidden bg-slate-950 p-8">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative grid h-full grid-cols-2 gap-4">
          <div className="flex flex-col justify-end rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="text-xs text-slate-500">Revenue</span>
            <span className="mt-2 text-3xl font-bold text-white">
              +48%
            </span>
            <div className="mt-5 h-1 rounded-full bg-lime-400" />
          </div>

          <div className="flex flex-col justify-end rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="text-xs text-slate-500">Growth</span>
            <span className="mt-2 text-3xl font-bold text-white">
              +72%
            </span>
            <div className="mt-5 h-1 w-3/4 rounded-full bg-lime-400" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "landing") {
    return (
      <div className="relative h-full overflow-hidden bg-slate-100 p-7">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-lime-300/50 blur-3xl" />

        <div className="relative flex h-full flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            New Product
          </span>

          <div className="mt-5 text-5xl font-black tracking-tight text-slate-950">
            Launch
          </div>

          <div className="mt-2 text-5xl font-black tracking-tight text-slate-400">
            Something.
          </div>

          <div className="mt-7 h-10 w-32 rounded-full bg-slate-950" />
        </div>
      </div>
    );
  }

  if (type === "corporate") {
    return (
      <div className="relative h-full overflow-hidden bg-slate-950 p-7">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(163,230,53,0.08),transparent_70%)]" />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.3em] text-lime-400">
              COMPANY
            </span>

            <span className="text-xs text-slate-500">
              EST. 2026
            </span>
          </div>

          <div>
            <div className="text-5xl font-bold tracking-tight text-white">
              Future
            </div>
            <div className="text-5xl font-bold tracking-tight text-slate-500">
              Forward.
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-slate-900 p-7">
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />

      <div className="relative grid h-full place-items-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-lime-400/30">
          <div className="absolute h-28 w-28 rounded-full border border-lime-400/40" />
          <div className="absolute h-16 w-16 rounded-full bg-lime-400/20" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">
            Digital
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white md:py-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-lime-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
                Selected Work
              </p>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Work that
              <br />
              <span className="text-lime-400">speaks.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Beberapa konsep project digital yang menggambarkan bagaimana
              PALUGADA menggabungkan desain, teknologi, dan kebutuhan bisnis
              menjadi sebuah pengalaman digital.
            </p>
          </div>

          <div className="mt-20 grid gap-8 border-t border-slate-800 pt-8 md:grid-cols-3">
            <div>
              <p className="text-4xl font-bold text-white">06</p>
              <p className="mt-2 text-sm text-slate-500">
                Selected Concepts
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-white">03</p>
              <p className="mt-2 text-sm text-slate-500">
                Core Services
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-lime-400">∞</p>
              <p className="mt-2 text-sm text-slate-500">
                Possibilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Portfolio
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Selected projects.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-500">
              Setiap project memiliki pendekatan yang berbeda, tetapi tetap
              berfokus pada satu hal: menciptakan pengalaman digital yang
              bernilai.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 0 || index === 3 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <div className="h-full transition duration-700 group-hover:scale-105">
                    <ProjectVisual type={project.type} />
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-600">
                        {project.category}
                      </p>

                      <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                        {project.title}
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-slate-950">
                      ↗
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-slate-100" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400">
                      Project {project.number}
                    </span>

                    <span className="text-sm font-semibold text-slate-950 transition group-hover:text-lime-600">
                      Explore →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Our Approach
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Simple process.
                <br />
                <span className="text-slate-400">Strong result.</span>
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              <div className="grid gap-5 py-8 md:grid-cols-[80px_1fr]">
                <span className="text-sm font-bold text-lime-600">
                  01
                </span>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Discover
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Memahami bisnis, target audience, kebutuhan, dan tujuan
                    project sebelum menentukan solusi.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 py-8 md:grid-cols-[80px_1fr]">
                <span className="text-sm font-bold text-lime-600">
                  02
                </span>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Design
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Membangun visual dan user experience yang sesuai dengan
                    karakter brand.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 py-8 md:grid-cols-[80px_1fr]">
                <span className="text-sm font-bold text-lime-600">
                  03
                </span>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Develop
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Mengubah desain menjadi website dan solusi digital yang
                    cepat, responsive, dan scalable.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 py-8 md:grid-cols-[80px_1fr]">
                <span className="text-sm font-bold text-lime-600">
                  04
                </span>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Launch
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Melakukan final testing dan memastikan project siap
                    digunakan secara profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime-400 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-700">
                Have a project?
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
                Let&apos;s create
                <br />
                something great.
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