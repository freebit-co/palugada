"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const service = data.get("service");
    const budget = data.get("budget");
    const message = data.get("message");

    const whatsappNumber = "6287767366668";

    const whatsappMessage = `Halo PALUGADA, saya ingin berkonsultasi mengenai project digital.

Nama: ${name}
Email: ${email}
WhatsApp: ${phone}
Layanan: ${service}
Budget: ${budget}

Kebutuhan:
${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank");
  }

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
                Get In Touch
              </p>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-lime-400">something</span>
              <br />
              meaningful.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Punya ide, bisnis, atau project yang ingin dikembangkan?
              Ceritakan kepada kami. Mari kita ubah ide tersebut menjadi
              pengalaman digital yang bernilai.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="bg-slate-100 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* INFORMATION */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Contact PALUGADA
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Tell us about
                <br />
                your project.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-slate-600">
                Semakin jelas kebutuhan yang Anda ceritakan, semakin mudah
                bagi kami memahami solusi yang tepat.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-12 space-y-8">
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    +62 877 6736 6668
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Email
                  </p>

                  <p className="mt-2 break-all text-lg font-semibold text-slate-950">
                    Igolifestyle@gmail.com
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Indonesia
                  </p>
                </div>
              </div>

              {/* MINI STATEMENT */}
              <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.7)]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Available for projects
                  </span>
                </div>

                <p className="mt-5 text-xl font-semibold leading-8">
                  Great things often start with a simple conversation.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[2rem] bg-white p-7 shadow-xl md:p-10">
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Project Inquiry
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Start your project.
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Nama
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Nama lengkap"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:border-lime-500 focus:ring-4 focus:ring-lime-400/10"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@anda.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:border-lime-500 focus:ring-4 focus:ring-lime-400/10"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div className="mt-6">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Nomor WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="628123456789"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:border-lime-500 focus:ring-4 focus:ring-lime-400/10"
                  />
                </div>

                {/* SERVICE */}
                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Layanan yang Dibutuhkan
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition duration-300 focus:border-lime-500 focus:ring-4 focus:ring-lime-400/10"
                  >
                    <option value="" disabled>
                      Pilih layanan
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="Brand Identity">
                      Brand Identity
                    </option>

                    <option value="Business Solutions">
                      Business Solutions
                    </option>

                    <option value="Other">
                      Lainnya
                    </option>
                  </select>
                </div>

                {/* BUDGET */}
                <div className="mt-6">
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Perkiraan Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition duration-300 focus:border-lime-500 focus:ring-4 focus:ring-lime-400/10"
                  >
                    <option value="" disabled>
                      Pilih range budget
                    </option>

                    <option value="Di bawah Rp5 juta">
                      Di bawah Rp5 juta
                    </option>

                    <option value="Rp5 juta - Rp10 juta">
                      Rp5 juta - Rp10 juta
                    </option>

                    <option value="Rp10 juta - Rp25 juta">
                      Rp10 juta - Rp25 juta
                    </option>

                    <option value="Rp25 juta - Rp50 juta">
                      Rp25 juta - Rp50 juta
                    </option>

                    <option value="Di atas Rp50 juta">
                      Di atas Rp50 juta
                    </option>

                    <option value="Belum menentukan">
                      Belum menentukan
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Ceritakan Project Anda
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Ceritakan bisnis, kebutuhan, tujuan, atau ide project Anda..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:border-lime-500 focus:ring-4 focus:ring-lime-400/10"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-slate-950"
                >
                  {submitted ? "Membuka WhatsApp..." : "Kirim Project Inquiry"}

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  Setelah formulir dikirim, Anda akan diarahkan ke WhatsApp
                  PALUGADA.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Your Next Move
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Your idea deserves
            <br />
            a digital experience.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-slate-400">
            Jangan biarkan ide bagus berhenti sebagai ide. Mari mulai
            percakapan dan lihat apa yang bisa kita bangun bersama.
          </p>
        </div>
      </section>
    </div>
  );
}