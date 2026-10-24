import { useEffect } from "react";
import type { RefObject } from "react";

const fine = () =>
  typeof matchMedia === "function" &&
  matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches;

/** Sets --px / --py (-1 to 1) on the element while a mouse moves over `source`; resets on leave. Mouse only, motion allowed only. */
export function usePointerParallax(source: RefObject<HTMLElement | null>, target: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const src = source.current;
    const tgt = target.current;
    if (!src || !tgt || !fine()) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = src.getBoundingClientRect();
      tgt.style.setProperty("--px", String(((e.clientX - r.left) / r.width) * 2 - 1));
      tgt.style.setProperty("--py", String(((e.clientY - r.top) / r.height) * 2 - 1));
    };
    const leave = () => {
      tgt.style.setProperty("--px", "0");
      tgt.style.setProperty("--py", "0");
    };
    src.addEventListener("pointermove", move);
    src.addEventListener("pointerleave", leave);
    return () => {
      src.removeEventListener("pointermove", move);
      src.removeEventListener("pointerleave", leave);
    };
  }, [source, target]);
}
