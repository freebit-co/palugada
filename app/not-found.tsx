import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-500">
          PALUGADA
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight text-slate-900 md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold text-slate-900 md:text-3xl">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
          Maaf, halaman yang kamu cari tidak tersedia atau mungkin
          sudah dipindahkan ke halaman lain.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-lime-500 hover:text-slate-900"
          >
            Kembali ke Home
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-lime-500 hover:text-lime-500"
          >
            Hubungi Kami
          </Link>
        </div>

      </div>
    </section>
  );
}
