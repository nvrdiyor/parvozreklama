"use client";

import { useEffect, useState } from "react";

/**
 * Saytga kirganda ko'rinadigan intro: burgut kichikdan kattaga
 * "uchib keladi" (zoom-in), so'ng parda yuqoriga ko'tarilib sayt ochiladi.
 * Chiqish animatsiyasi sof CSS'da (JS ishlamay qolsa ham parda o'zi yo'qoladi).
 */
export default function Splash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 2950);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="splash fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink"
    >
      <div className="splash-glow absolute h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-[120px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/parvozlogoforwebsite.png"
        alt=""
        width={644}
        height={445}
        className="splash-eagle relative w-72 sm:w-[34rem]"
      />
      <div className="splash-text relative -mt-2 text-center">
        <p className="text-sm font-extrabold italic tracking-[0.45em] text-brand sm:text-base">
          REKLAMA
        </p>
        <p className="mt-1 text-4xl font-black tracking-wider text-white sm:text-6xl">
          PARVOZ
        </p>
      </div>
    </div>
  );
}
