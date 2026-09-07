import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    short: "Website yang bekerja untuk bisnis Anda.",
    description:
      "Kami membangun website modern, cepat, responsive, dan scalable untuk bisnis, UMKM, personal brand, hingga perusahaan.",
    features: [
      "Company Profile",
      "Website UMKM",
      "Landing Page",
      "Business Website",
    ],
  },
  {
    number: "02",
    title: "Digital Marketing",
    short: "Membawa brand lebih dekat kepada pelanggan.",
    description:
      "Strategi digital yang membantu brand membangun awareness, meningkatkan engagement, dan menciptakan peluang bisnis baru.",
    features: [
      "Social Media Strategy",
      "Content Strategy",
      "Digital Campaign",
      "Brand Awareness",
    ],
  },
  {
    number: "03",
    title: "Brand Identity",
    short: "Membuat brand terlihat dan terasa berbeda.",
    description:
      "Kami membantu membangun identitas visual yang konsisten sehingga bisnis terlihat lebih profesional dan mudah dikenali.",
    features: [
      "Visual Identity",
      "Logo Direction",
      "Color System",
      "Brand Guidelines",
    ],
  },
  {
    number: "04",
    title: "Business Solutions",
    short: "Teknologi yang mengikuti kebutuhan bisnis.",
    description:
      "Solusi digital custom untuk membantu proses bisnis menjadi lebih terstruktur, efisien, dan siap berkembang.",
    features: [
      "Digital Platform",
      "Custom Dashboard",
      "Business System",
      "Digital Integration",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Kami memahami bisnis, target audience, masalah, dan tujuan yang ingin dicapai.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Menentukan pendekatan, struktur, teknologi, dan strategi yang paling sesuai.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Menciptakan visual dan pengalaman pengguna yang modern, jelas, dan sesuai brand.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Mengubah konsep menjadi produk digital yang cepat, responsive, dan scalable.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Melakukan pengecekan akhir dan memastikan semuanya siap digunakan.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-lime-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
                What We Do
              </p>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Digital
              <br />
              solutions
              <br />
              <span className="text-lime-400">with purpose.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Kami membantu bisnis membangun fondasi digital yang kuat melalui
              desain, teknologi, branding, dan strategi yang terintegrasi.
            </p>
          </div>

          <div className="mt-20 border-t border-slate-800 pt-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-slate-400">
                Dari sebuah ide sederhana hingga produk digital yang siap
                digunakan dan dikembangkan.
              </p>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                PALUGADA / SERVICES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
              Our Services
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Everything your
              <br />
              business needs.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Kami tidak hanya membuat sesuatu yang terlihat bagus. Setiap
              solusi dirancang untuk memiliki tujuan yang jelas bagi bisnis.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl"
              >
                <div className="grid lg:grid-cols-[100px_1fr_1fr]">
                  {/* NUMBER */}
                  <div className="flex items-start p-8 lg:p-10">
                    <span className="text-sm font-bold text-lime-600">
                      {service.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="px-8 pb-8 lg:px-5 lg:py-10">
                    <h3 className="text-3xl font-bold tracking-tight text-slate-950 transition duration-300 group-hover:text-lime-600 md:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-lg font-medium text-slate-500">
                      {service.short}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="border-t border-slate-100 bg-slate-50 p-8 lg:border-l lg:border-t-0 lg:p-10">
                    <p className="leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition duration-300 group-hover:border-lime-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="overflow-hidden bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
                Digital First
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Built for today.
                <br />
                <span className="text-slate-500">Ready for tomorrow.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Teknologi terus berubah. Karena itu kami membangun solusi
                digital dengan struktur yang dapat berkembang mengikuti
                kebutuhan bisnis.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-full bg-lime-400 px-7 py-4 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Discuss Your Project →
              </Link>
            </div>

            {/* VISUAL */}
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900">
              <div className="absolute h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

              <div className="relative h-64 w-64 rounded-full border border-lime-400/20">
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-400/30" />

                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 shadow-[0_0_80px_rgba(163,230,53,0.15)]" />

                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.8)]" />

                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.8)]" />

                <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.8)]" />

                <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.8)]" />
              </div>

              <span className="absolute bottom-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                DIGITAL SYSTEM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                How We Work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                From idea
                <br />
                to reality.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-slate-600">
                Proses sederhana, komunikasi jelas, dan setiap tahap memiliki
                tujuan yang terukur.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-6 py-8 transition duration-300 md:grid-cols-[80px_1fr]"
                >
                  <span className="text-sm font-bold text-lime-600">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <h3 className="text-2xl font-bold text-slate-950 transition group-hover:translate-x-1">
                        {item.title}
                      </h3>

                      <span className="text-slate-300 transition duration-300 group-hover:translate-x-2 group-hover:text-lime-600">
                        →
                      </span>
                    </div>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
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
                Start Something
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
                Have an idea?
                <br />
                Let&apos;s build it.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}