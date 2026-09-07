import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              PALUGADA
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Digital solutions untuk bisnis, UMKM, dan brand
              yang ingin berkembang di era digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <Link
                href="/"
                className="transition hover:text-lime-400"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="transition hover:text-lime-400"
              >
                Services
              </Link>

              <Link
                href="/about"
                className="transition hover:text-lime-400"
              >
                About
              </Link>

              <Link
                href="/portfolio"
                className="transition hover:text-lime-400"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-lime-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <p>Indonesia</p>
              <p>hello@palugada.id</p>
              <p>WhatsApp</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-500">
            © 2026 PALUGADA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}