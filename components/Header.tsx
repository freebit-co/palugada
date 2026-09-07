"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontak", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:py-5">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group relative text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl"
        >
          PALUGADA

          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-lime-600"
                  : "text-slate-700 hover:text-lime-600"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:text-slate-950 md:block"
        >
          Mulai Sekarang
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 transition duration-300 hover:border-lime-400 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />

          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-slate-100 py-4 text-base font-semibold transition ${
                  isActive(item.href)
                    ? "text-lime-600"
                    : "text-slate-800 hover:text-lime-600"
                }`}
              >
                <span>{item.label}</span>

                <span
                  className={`text-lg transition duration-300 ${
                    isActive(item.href)
                      ? "translate-x-0 text-lime-500"
                      : "-translate-x-2 text-slate-300"
                  }`}
                >
                  →
                </span>
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-slate-950 px-6 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-lime-400 hover:text-slate-950"
            >
              Mulai Sekarang →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}