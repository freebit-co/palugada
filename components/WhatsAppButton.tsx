"use client";

export default function WhatsAppButton() {
  const phoneNumber = "6287767366668";

  const message = encodeURIComponent(
    "Halo PALUGADA, saya ingin berkonsultasi mengenai layanan digital."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi PALUGADA melalui WhatsApp"
      className="palugada-whatsapp fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-green-600 sm:bottom-6 sm:right-6"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}