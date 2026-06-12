"use client";

import { useEffect, useState } from "react";

/**
 * Saytga kirganda ko'rinadigan intro: rasmiy logo chap tomondan uchib kiradi,
 * so'ng butun parda yuqoriga ko'tarilib sayt ochiladi.
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
      className="splash fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink"
    >
      <div className="splash-glow absolute h-[26rem] w-[26rem] rounded-full bg-brand/20 blur-[110px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/parvozlogostart.png"
        alt=""
        width={1972}
        height={1207}
        className="splash-eagle relative w-72 sm:w-96"
      />
    </div>
  );
}
