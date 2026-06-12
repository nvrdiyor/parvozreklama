"use client";

import { useEffect, useState } from "react";

/**
 * Saytga kirganda ko'rinadigan intro: burgut uchib kiradi, brend yozuvi
 * chiqadi, so'ng butun parda yuqoriga ko'tarilib sayt ochiladi.
 * Chiqish animatsiyasi sof CSS'da (JS ishlamay qolsa ham parda o'zi yo'qoladi).
 */
export default function Splash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 2550);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="splash fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      <div className="splash-glow absolute h-[26rem] w-[26rem] rounded-full bg-brand/15 blur-[110px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/parvozlogoforwebsite.png"
        alt=""
        width={644}
        height={444}
        className="splash-eagle relative w-44 sm:w-60"
      />
      <div className="splash-text relative mt-7 text-center">
        <p className="text-sm font-extrabold italic tracking-[0.4em] text-brand">
          REKLAMA
        </p>
        <p className="mt-1 text-4xl font-black tracking-wider text-navy sm:text-5xl">
          PARVOZ
        </p>
      </div>
    </div>
  );
}
