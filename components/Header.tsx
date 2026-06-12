"use client";

import { useState } from "react";

const NAV = [
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#afzalliklar", label: "Afzalliklar" },
  { href: "#jarayon", label: "Ish jarayoni" },
  { href: "#aloqa", label: "Aloqa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" aria-label="Bosh sahifa" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/parvozlogo-sm.png"
            alt="Parvoz Reklama logotipi"
            width={800}
            height={271}
            className="h-12 w-auto animate-logo-fly [animation-delay:1.95s]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex animate-fade-up [animation-delay:2.2s]">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex animate-fade-up [animation-delay:2.35s]">
          <a
            href="tel:+998700574000"
            className="text-sm font-bold text-ink transition-colors hover:text-brand"
          >
            +998 70 057 40 00
          </a>
          <a
            href="#aloqa"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/50"
          >
            Buyurtma berish
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white px-4 pb-6 pt-2 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-ink-soft hover:bg-paper hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#aloqa"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-brand px-5 py-3 text-center text-base font-bold text-white"
          >
            Buyurtma berish
          </a>
        </nav>
      )}
    </header>
  );
}
