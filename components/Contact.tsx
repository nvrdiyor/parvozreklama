"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const INFO = [
  {
    label: "Telefon",
    value: "+998 70 057 40 00",
    href: "tel:+998700574000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    value: "@parvozreklamamarkazi",
    href: "https://t.me/parvozreklamamarkazi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 4.5L2.8 11.7c-.8.3-.8 1.4.1 1.7l4.6 1.5 1.7 5.3c.3.8 1.3 1 1.9.4l2.6-2.5 4.8 3.5c.6.4 1.5.1 1.7-.7l3-15c.2-.9-.7-1.7-1.7-1.4z" />
        <path d="M9.5 14.5l9-8" />
      </svg>
    ),
  },
  {
    label: "Manzil",
    value: "Xorazm, Urganch sh., Mirzo Ulug'bek ko'chasi, 54",
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Ish vaqti",
    value: "Du–Sha, 9:00–18:00",
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="aloqa" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* info */}
          <Reveal>
          <div>
            <span className="text-sm font-extrabold uppercase tracking-widest text-brand">
              Aloqa
            </span>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              Biz bilan bog&apos;laning
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink/60">
              Savolingiz bormi yoki narxlarni bilmoqchimisiz? Qo&apos;ng&apos;iroq
              qiling, Telegramda yozing yoki formani to&apos;ldiring — tez orada
              javob beramiz.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {INFO.map((item) => {
                const inner = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand [&_svg]:h-5 [&_svg]:w-5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-ink/40">
                        {item.label}
                      </p>
                      <p className="mt-0.5 break-words font-bold text-ink">
                        {item.value}
                      </p>
                    </div>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
          </Reveal>

          {/* form */}
          <Reveal delay={150}>
          <div className="h-full rounded-3xl bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-black text-ink">
                  Rahmat! So&apos;rovingiz qabul qilindi
                </h3>
                <p className="mt-2 text-ink/60">
                  Tez orada operatorlarimiz siz bilan bog&apos;lanadi.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3 className="text-2xl font-black text-ink">
                  Buyurtma qoldiring
                </h3>
                <p className="mt-2 text-ink/60">
                  Formani to&apos;ldiring — o&apos;zimiz qo&apos;ng&apos;iroq qilamiz.
                </p>

                <label className="mt-6 block">
                  <span className="text-sm font-bold text-ink">Ismingiz</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Masalan: Aziz"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 font-medium outline-none transition-colors placeholder:text-ink/30 focus:border-brand focus:bg-white"
                  />
                </label>

                <label className="mt-4 block">
                  <span className="text-sm font-bold text-ink">
                    Telefon raqamingiz
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+998 90 123 45 67"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 font-medium outline-none transition-colors placeholder:text-ink/30 focus:border-brand focus:bg-white"
                  />
                </label>

                <label className="mt-4 block">
                  <span className="text-sm font-bold text-ink">
                    Nima buyurtma qilmoqchisiz?
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Masalan: 1000 dona vizitka va 3×6 banner kerak..."
                    className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-paper px-4 py-3 font-medium outline-none transition-colors placeholder:text-ink/30 focus:border-brand focus:bg-white"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/50"
                >
                  So&apos;rov yuborish
                </button>
                <p className="mt-3 text-center text-xs text-ink/40">
                  Ma&apos;lumotlaringiz faqat siz bilan bog&apos;lanish uchun ishlatiladi.
                </p>
              </form>
            )}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
