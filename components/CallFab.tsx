/** Burchakda suzib turuvchi, pulsatsiyalanuvchi qo'ng'iroq tugmasi. */
export default function CallFab() {
  return (
    <a
      href="tel:+998700574000"
      aria-label="Qo'ng'iroq qilish: +998 70 057 40 00"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/40 transition-transform hover:scale-110"
    >
      <span className="fab-ring absolute inset-0 rounded-full bg-brand/40" />
      <span className="fab-ring fab-ring-2 absolute inset-0 rounded-full bg-brand/30" />
      <svg
        viewBox="0 0 24 24"
        className="relative h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
      </svg>
    </a>
  );
}
