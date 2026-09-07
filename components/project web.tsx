"use client";

export default function WhatsAppButton() {
  const nomorWhatsApp = "6287767366668";

  const pesan = "Halo PALUGADA, saya ingin konsultasi tentang layanan digital.";

  const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
    pesan
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi PALUGADA melalui WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}