import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-dark px-8 py-14 text-white shadow-2xl shadow-brand/30 sm:px-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo2-white.png"
            alt=""
            aria-hidden="true"
            width={1540}
            height={1066}
            className="pointer-events-none absolute -right-10 -top-8 w-72 opacity-10"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Loyihangiz bormi? Keling, uni parvozga tayyorlaymiz!
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Bugun bog&apos;laning — narxlarni aytamiz, bepul maslahat beramiz
              va ishni darhol boshlaymiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+998700574000"
                className="rounded-full bg-white px-7 py-3.5 text-base font-bold text-brand shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Qo&apos;ng&apos;iroq qilish
              </a>
              <a
                href="https://t.me/parvozreklamamarkazi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/60 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white hover:text-brand"
              >
                Telegramda yozish
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
