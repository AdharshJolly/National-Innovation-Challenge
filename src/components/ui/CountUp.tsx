import { useEffect, useRef, useState } from "react";

const NUMBER = /\d[\d,]*/;

/** Counts the first number in `value` up from 0 when scrolled into view; the rest of the text stays as written.
 *  Renders the final text immediately when motion is reduced or there is no number. */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(NUMBER);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || typeof IntersectionObserver === "undefined" || !matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    const target = Number(match[0].replace(/,/g, ""));
    const at = match.index ?? 0;
    const render = (n: number) => setShown(value.slice(0, at) + n.toLocaleString("en-IN") + value.slice(at + match[0].length));
    render(0);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / duration);
        render(Math.round(target * (1 - (1 - k) ** 3)));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration, match?.[0]]);  // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref} aria-label={value}>{shown}</span>;
}
