import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Think Different",
    description:
      "Kami tidak hanya mengikuti tren. Kami mencari pendekatan yang paling tepat untuk setiap kebutuhan bisnis.",
  },
  {
    number: "02",
    title: "Keep It Simple",
    description:
      "Teknologi yang baik bukan yang terlihat rumit, tetapi yang terasa mudah digunakan dan memberikan hasil.",
  },
  {
    number: "03",
    title: "Built to Grow",
    description:
      "Setiap solusi dirancang agar dapat berkembang bersama bisnis, bukan hanya untuk kebutuhan hari ini.",
  },
  {
    number: "04",
    title: "Details Matter",
    description:
      "Dari typography hingga interaction, detail kecil membentuk pengalaman digital yang besar.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-lime-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
                About PALUGADA
              </p>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl">
              We build
              <br />
              <span className="text-lime-400">digital</span>
              <br />
              possibilities.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              PALUGADA adalah digital solution studio yang membantu bisnis,
              UMKM, dan brand membangun kehadiran digital yang lebih modern,
              profesional, dan siap berkembang.
            </p>
          </div>

          <div className="mt-20 grid gap-8 border-t border-slate-800 pt-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Founded
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                2026
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Focus
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Digital Experience
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Based In
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Our Story
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Digital should be
                <br />
                <span className="text-slate-400">
                  more than just beautiful.
                </span>
              </h2>

              <div className="mt-10 grid gap-7 text-lg leading-8 text-slate-600 md:grid-cols-2">
                <p>
                  Website dan teknologi bukan sekadar tampilan. Keduanya harus
                  membantu bisnis berkomunikasi, membangun kepercayaan, dan
                  menciptakan pengalaman yang lebih baik bagi pelanggan.
                </p>

                <p>
                  Karena itu PALUGADA menggabungkan strategi, desain, teknologi,
                  dan kebutuhan bisnis dalam satu pendekatan yang sederhana dan
                  terarah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="overflow-hidden bg-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Our Philosophy
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-[1] tracking-tight text-slate-950 md:text-7xl">
                Simple.
                <br />
                Bold.
                <br />
                <span className="text-slate-400">Useful.</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Kami percaya solusi digital terbaik tidak harus rumit. Ia harus
                memiliki tujuan yang jelas, mudah dipahami, dan memberikan
                value nyata.
              </p>
            </div>

            {/* VISUAL */}
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-slate-950">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

              <div className="absolute left-8 top-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                PALUGADA / 001
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-7xl font-black tracking-[-0.06em] text-white md:text-8xl">
                  IDEAS
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-400" />

                  <span className="text-sm text-slate-500">
                    into experiences
                  </span>
                </div>
              </div>

              <div className="absolute right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-lime-400/20">
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
              What We Believe
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Principles behind
              <br />
              every project.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.number}
                className="group bg-white p-8 transition duration-500 hover:bg-slate-950 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-lime-600 group-hover:text-lime-400">
                    {value.number}
                  </span>

                  <span className="text-xl text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-lime-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-bold text-slate-950 transition group-hover:text-white">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-lg leading-7 text-slate-600 transition group-hover:text-slate-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <p className="text-5xl font-bold text-lime-400">01</p>
              <p className="mt-3 text-sm text-slate-500">
                Digital Studio
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold">∞</p>
              <p className="mt-3 text-sm text-slate-500">
                Ideas to explore
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold">24/7</p>
              <p className="mt-3 text-sm text-slate-500">
                Digital mindset
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold">2026</p>
              <p className="mt-3 text-sm text-slate-500">
                The beginning
              </p>
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
                Work With Us
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
                Let&apos;s turn
                <br />
                ideas into reality.
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