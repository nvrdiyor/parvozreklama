import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Tezkor muddatlar",
    desc: "Buyurtmalarni kelishilgan vaqtda topshiramiz — shoshilinch ishlarni ko'pincha 24 soat ichida tayyorlaymiz.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 2.5M9 2h6" />
      </svg>
    ),
  },
  {
    title: "Sifat kafolati",
    desc: "Zamonaviy uskunalar va sinalgan materiallar — har bir mahsulot topshirishdan oldin tekshiruvdan o'tadi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 3.5v5c0 5-3 8.5-7 11-4-2.5-7-6-7-11v-5L12 2z" />
        <path d="M9 12l2 2 4-4.5" />
      </svg>
    ),
  },
  {
    title: "Hamyonbop narxlar",
    desc: "O'z ishlab chiqarishimiz bor, vositachilar yo'q — shuning uchun narxlarimiz bozordagi eng qulaylaridan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.4c0 3.4 6 1.8 6 5.2 0 1.4-1.3 2.4-3 2.4s-3-1.1-3-2.5" />
      </svg>
    ),
  },
  {
    title: "Tajribali jamoa",
    desc: "Dizayneridan chop etish ustasigacha — jamoamizdagi har bir mutaxassis o'z sohasida yillab ishlagan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
        <path d="M16 5a3.5 3.5 0 0 1 0 7M18.5 14.8c1.6.8 2.7 2.3 3 5.2" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="afzalliklar" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo2.png"
        alt=""
        aria-hidden="true"
        width={1540}
        height={1066}
        className="pointer-events-none absolute -left-32 bottom-0 w-[28rem] -scale-x-100 opacity-[0.05]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal className="lg:sticky lg:top-28">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-widest text-brand">
              Nega aynan biz?
            </span>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              Mijozlarimiz bizni{" "}
              <span className="text-brand">tavsiya qiladi</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/60">
              Parvoz Reklama — bu shunchaki bosmaxona emas. Biz har bir
              loyihaga brendingiz muvaffaqiyati sifatida qaraymiz: maslahat
              beramiz, dizaynni yaxshilaymiz va muddatida topshiramiz.
            </p>
            <a
              href="#aloqa"
              className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand"
            >
              Bepul maslahat olish
            </a>
          </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 120}>
              <div
                className="h-full rounded-3xl bg-paper p-7 transition-all hover:-translate-y-1 hover:bg-ink hover:text-white group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white [&_svg]:h-6 [&_svg]:w-6">
                  {r.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/60 group-hover:text-white/70">
                  {r.desc}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
