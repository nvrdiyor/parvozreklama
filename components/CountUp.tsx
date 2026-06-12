"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  /** Yugurish davomiyligi, ms */
  duration?: number;
  /** Ekranga kirgach boshlashdan oldingi kechikish, ms (splash tugashini kutish uchun) */
  startDelay?: number;
};

/** Ekranga kirganda 0 dan `to` gacha yugurib sanaydigan raqam. */
export default function CountUp({
  to,
  suffix = "",
  duration = 1400,
  startDelay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVal(to);
      return;
    }
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(() => {
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }, startDelay);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, startDelay]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
