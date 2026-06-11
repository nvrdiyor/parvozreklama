import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Buyurtma va maslahat",
    desc: "Telefon yoki Telegram orqali bog'lanasiz — ehtiyojingizni aniqlab, eng mos variantni taklif qilamiz.",
  },
  {
    num: "02",
    title: "Dizayn tayyorlash",
    desc: "Dizaynerlarimiz maket tayyorlaydi va siz bilan kelishadi. O'z maketingiz bo'lsa, uni tekshirib beramiz.",
  },
  {
    num: "03",
    title: "Chop etish",
    desc: "Tasdiqlangan maket zamonaviy uskunalarda chop etiladi. Sifat har bosqichda nazorat qilinadi.",
  },
  {
    num: "04",
    title: "Topshirish",
    desc: "Tayyor mahsulotni olib ketishingiz mumkin yoki manzilingizgacha yetkazib beramiz.",
  },
];

export default function Process() {
  return (
    <section id="jarayon" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-extrabold uppercase tracking-widest text-brand">
              Ish jarayoni
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Buyurtmadan parvozgacha — 4 qadam
            </h2>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.num} className="relative">
              <Reveal delay={i * 130}>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-16 top-7 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-brand/60 to-white/10 lg:block"
                  />
                )}
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-xl font-black shadow-lg shadow-brand/30">
                  {step.num}
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
