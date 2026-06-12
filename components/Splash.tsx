"use client";

import { useEffect, useState } from "react";

/**
 * Saytga kirganda ko'rinadigan intro:
 *   1) burgut chap-pastdan markazga uchib kiradi (kattalashib),
 *   2) biroz turadi,
 *   3) yopilayotganda o'ng-tepaga uchib ketadi, qora fon so'nib sayt ochiladi.
 * Qora fon alohida qatlam (splash-bg) — burgut uchib ketayotganda mustaqil so'nadi.
 * JS o'chiq bo'lsa ham parda CSS orqali yashirinadi (xavfsizlik).
 */
export default function Splash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 3050);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="splash fixed inset-0 z-[100] overflow-hidden"
    >
      <div className="splash-bg absolute inset-0 bg-ink" />
      <div className="splash-glow absolute inset-0 m-auto h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-[120px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
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
    </div>
  );
}
