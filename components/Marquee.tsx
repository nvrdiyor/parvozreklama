const ITEMS = [
  "Bannerlar",
  "Vizitkalar",
  "Bosma ishlar",
  "Grafik dizayn",
  "Keng formatli pechat",
  "Tashqi reklama",
  "Lightbox",
  "Brending",
];

/** Hero ostidagi yuguruvchi xizmatlar lentasi. Kontent 2 marta takrorlanadi —
 *  translate -50% bilan uzluksiz aylanadi. */
export default function Marquee() {
  return (
    <section aria-hidden="true" className="overflow-hidden bg-brand py-4">
      <div className="marquee flex w-max items-center gap-10">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-base font-black uppercase tracking-[0.2em] text-white sm:text-lg"
          >
            {t}
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/70">
              <path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2z" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
}
