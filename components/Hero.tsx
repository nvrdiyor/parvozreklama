import CountUp from "./CountUp";

const STATS = [
  { to: 8, suffix: "+", label: "yillik tajriba" },
  { to: 1200, suffix: "+", label: "mamnun mijoz" },
  { to: 5000, suffix: "+", label: "bajarilgan loyiha" },
  { to: 24, suffix: "/7", label: "buyurtma qabuli" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* background glow + watermark */}
      <div
        aria-hidden="true"
        className="glow-breathe pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="glow-breathe pointer-events-none absolute -bottom-52 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px] [animation-delay:-3.5s]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo2-white.png"
        alt=""
        aria-hidden="true"
        width={1540}
        height={1066}
        className="drift pointer-events-none absolute -right-24 top-10 w-[36rem] opacity-[0.04]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 animate-fade-up [animation-delay:2.25s]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            Reklama agentligi
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:2.4s]">
            Brendingiz baland{" "}
            <span className="relative inline-block text-brand">
              parvoz
              <svg
                viewBox="0 0 200 12"
                className="draw-line absolute -bottom-2 left-0 w-full text-brand/60"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 C 60 2, 140 2, 198 8"
                  pathLength={1}
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            qilsin!
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 animate-fade-up [animation-delay:2.5s]">
            Bannerlar, vizitkalar, bosma mahsulotlar va grafik dizayn — barchasi
            bir joyda. G&apos;oyangizni aytasiz, qolganini biz qilamiz: tez,
            sifatli va hamyonbop.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up [animation-delay:2.6s]">
            <a
              href="#aloqa"
              className="group rounded-full bg-brand px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/50"
            >
              Buyurtma berish{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a
              href="#xizmatlar"
              className="rounded-full border border-white/25 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-brand hover:text-brand"
            >
              Xizmatlar bilan tanishish
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 animate-fade-up [animation-delay:2.7s]">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-black text-white">
                  <CountUp to={s.to} suffix={s.suffix} startDelay={2750} />
                </dd>
                <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: product mockups */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          {/* banner mockup */}
          <div className="animate-fade-up [animation-delay:2.5s]">
          <div className="animate-float-slow rotate-2 rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-8 shadow-2xl shadow-brand/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo2-white.png"
              alt=""
              width={1540}
              height={1066}
              className="h-14 w-auto"
            />
            <p className="mt-6 text-2xl font-black uppercase leading-tight">
              Katta o&apos;lchamli
              <br />
              bannerlar
            </p>
            <p className="mt-2 text-sm font-semibold text-white/80">
              3×6 m gacha · full-color · 1 kunda
            </p>
            <div className="mt-6 flex gap-2">
              {["Vinil", "Setka", "Press-wall"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          </div>

          {/* black business card */}
          <div className="absolute -bottom-10 -left-16 w-60 animate-fade-up [animation-delay:2.8s]">
            <div className="animate-float [animation-delay:-1.5s] -rotate-6 rounded-2xl border border-white/10 bg-ink-soft p-5 shadow-2xl">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo2.png"
                  alt=""
                  width={1540}
                  height={1066}
                  className="h-6 w-auto"
                />
                <span className="text-sm font-black tracking-wide">PARVOZ</span>
              </div>
              <div className="mt-4 h-2 w-24 rounded bg-white/20" />
              <div className="mt-2 h-2 w-32 rounded bg-white/10" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/50">
                Vizitka · Premium
              </p>
            </div>
          </div>

          {/* white business card */}
          <div className="absolute -bottom-24 -right-4 w-60 animate-fade-up [animation-delay:2.95s]">
            <div className="animate-float [animation-delay:-3s] rotate-3 rounded-2xl bg-white p-5 text-ink shadow-2xl">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo2.png"
                  alt=""
                  width={1540}
                  height={1066}
                  className="h-6 w-auto"
                />
                <span className="text-sm font-black tracking-wide">PARVOZ</span>
              </div>
              <div className="mt-4 h-2 w-28 rounded bg-ink/15" />
              <div className="mt-2 h-2 w-20 rounded bg-ink/10" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-ink/40">
                Vizitka · Klassik
              </p>
            </div>
          </div>

          {/* floating chip */}
          <div className="absolute -right-6 -top-6 animate-fade-up [animation-delay:3.1s]">
            <div className="animate-float [animation-delay:-2s] rounded-full bg-white px-4 py-2 text-xs font-black text-ink shadow-xl">
              ✦ Grafik dizayn ham bizda
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
