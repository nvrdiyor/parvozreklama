const LINKS = [
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#afzalliklar", label: "Afzalliklar" },
  { href: "#jarayon", label: "Ish jarayoni" },
  { href: "#aloqa", label: "Aloqa" },
];

const SERVICES = [
  "Bannerlar",
  "Vizitkalar",
  "Bosma ishlar",
  "Grafik dizayn",
  "Keng formatli pechat",
  "Tashqi reklama",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <a
              href="#"
              aria-label="Bosh sahifa"
              className="inline-block rounded-2xl bg-white px-5 py-3.5 shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/parvozlogo-navy.png"
                alt="Parvoz Reklama logotipi"
                width={800}
                height={271}
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-5 max-w-xs leading-relaxed text-white/60">
              Parvoz Reklama — bannerlar, vizitkalar, bosma mahsulotlar va
              grafik dizayn bo&apos;yicha ishonchli hamkoringiz.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/40">
              Sahifalar
            </h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-semibold text-white/80 transition-colors hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/40">
              Xizmatlar
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="font-semibold text-white/80">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/40">
              Aloqa
            </h3>
            <ul className="mt-4 space-y-3 font-semibold text-white/80">
              <li>
                <a href="tel:+998700574000" className="transition-colors hover:text-brand">
                  +998 70 057 40 00
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/parvozreklamamarkazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  @parvozreklamamarkazi
                </a>
              </li>
              <li className="text-white/60">
                Xorazm, Urganch sh., Mirzo Ulug&apos;bek ko&apos;chasi, 54
              </li>
              <li className="text-white/60">Du–Sha, 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Parvoz Reklama. Barcha huquqlar
            himoyalangan.
          </p>
          <a
            href="#"
            className="text-sm font-bold text-white/60 transition-colors hover:text-brand"
          >
            Yuqoriga qaytish ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
