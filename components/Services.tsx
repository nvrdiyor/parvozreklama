import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Bannerlar",
    desc: "Tashqi va ichki reklama bannerlari: har qanday o'lcham, yorqin full-color chop etish, ob-havoga chidamli materiallar.",
    tags: ["Vinil banner", "Setka", "Press-wall"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M7 21h10M12 17v4M7 9l3 3 2.5-2L17 13" />
      </svg>
    ),
  },
  {
    title: "Vizitkalar",
    desc: "Biznesingiz yuzini ko'rsatadigan vizitkalar: premium qog'oz, laminatsiya, selektiv lak — dizayni bilan birga tayyorlab beramiz.",
    tags: ["Standart", "Premium", "VIP"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="6" width="19" height="12" rx="2" />
        <path d="M6 10.5h5M6 14h8M16.5 10.5h1.5" />
      </svg>
    ),
  },
  {
    title: "Bosma ishlar",
    desc: "Flyer, buklet, broshyura, katalog, taklifnoma va boshqa poligrafiya mahsulotlari — kichik va katta tirajlarda.",
    tags: ["Flyer", "Katalog", "Buklet"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V3h12v6M6 14H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2" />
        <rect x="6" y="14" width="12" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Grafik dizayn",
    desc: "Logotip, firma uslubi, banner maketlari, ijtimoiy tarmoqlar uchun dizayn — tajribali dizaynerlar tomonidan.",
    tags: ["Logotip", "Brending", "SMM dizayn"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Keng formatli pechat",
    desc: "Orakal, plyonka, stiker, plakat va fotosifatli keng formatli chop etish — vitrina va interyerlar uchun.",
    tags: ["Orakal", "Stiker", "Plakat"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4v16M4 6h13a3 3 0 0 1 0 6H4M20 4v3" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Tashqi reklama",
    desc: "Yorug'lik qutilari (lightbox), hajmli harflar, do'kon peshlavhalari — ishlab chiqarishdan o'rnatishgacha.",
    tags: ["Lightbox", "Hajmli harflar", "Peshlavha"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v1a2.5 2.5 0 0 0 5 0V9m0 0v1a2.5 2.5 0 0 0 5 0V9m0 0v1a2.5 2.5 0 0 0 5 0V9" />
        <path d="M5 13v8h14v-8M9 21v-5h6v5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="xizmatlar" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-extrabold uppercase tracking-widest text-brand">
              Xizmatlarimiz
            </span>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              Reklama uchun kerak bo&apos;lgan hamma narsa
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Dizayndan tortib tayyor mahsulotgacha — to&apos;liq sikl bizning
              qo&apos;limizda. Vositachilarsiz, o&apos;z ishlab chiqarishimizda.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
            <article
              className="group h-full rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="svc-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white [&_svg]:h-7 [&_svg]:w-7">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/60">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
