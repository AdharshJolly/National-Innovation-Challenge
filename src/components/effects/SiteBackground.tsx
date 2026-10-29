import { useEffect, useRef } from "react";

/**
 * Fixed, site-wide poster backdrop. Calm by design: a few slow aurora glows whose
 * colour mood follows scroll (violet + gold up top, warmer mid-page, deep night at the
 * close), two depth layers of sparse stars that parallax with scroll, and a little gold dust.
 */
interface Mote {
  x: number;
  y: number;
  v: number;
  s: number;
  p: number;
  gold: boolean;
}

interface Star {
  x: number;
  y: number;
  s: number;
  p: number;
  z: number; // depth 0 (far) .. 1 (near)
  spark: boolean;
}

// Aurora glows: [x, y, radius, rgb, speed, phase, alpha at scroll 0 / 0.5 / 1]
const BLOBS: [number, number, number, string, number, number, [number, number, number]][] = [
  [0.2, 0.35, 0.55, "91,50,190", 0.00011, 0, [0.42, 0.3, 0.18]],
  [0.82, 0.3, 0.5, "124,58,237", 0.00009, 2, [0.36, 0.26, 0.2]],
  [0.5, 0.95, 0.6, "242,182,60", 0.00007, 4, [0.14, 0.26, 0.2]],
  [0.5, 0.2, 0.45, "60,40,160", 0.00013, 1, [0.38, 0.22, 0.12]],
];

// Star brightness multiplier across the page: bright hero, quieter middle, glowing close.
const STAR_MOOD: [number, number, number] = [1, 0.6, 0.85];

const mix = (k: [number, number, number], p: number) =>
  p < 0.5 ? k[0] + (k[1] - k[0]) * (p / 0.5) : k[1] + (k[2] - k[1]) * ((p - 0.5) / 0.5);

export function SiteBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let small = false;
    let motes: Mote[] = [];
    let stars: Star[] = [];
    let raf = 0;
    let last = 0;
    let visible = true;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const scroll = { y: 0, p: 0, ty: 0, tp: 0 };

    const readScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scroll.ty = window.scrollY;
      scroll.tp = Math.min(Math.max(window.scrollY / max, 0), 1);
    };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      small = w < 700;
      stars = Array.from({ length: small ? 55 : 110 }, () => {
        const z = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          s: 0.4 + z * 1.1,
          p: Math.random() * Math.PI * 2,
          z,
          spark: Math.random() < 0.05,
        };
      });
      motes = Array.from({ length: small ? 14 : 28 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        v: 0.1 + Math.random() * 0.22,
        s: 0.8 + Math.random() * 1.4,
        p: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.7,
      }));
      readScroll();
      scroll.y = scroll.ty;
      scroll.p = scroll.tp;
    };

    const wrap = (v: number, max: number) => ((v % max) + max) % max;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      scroll.y += (scroll.ty - scroll.y) * 0.08;
      scroll.p += (scroll.tp - scroll.p) * 0.05;
      const m = Math.max(w, h);

      ctx.globalCompositeOperation = "lighter";
      for (const [fx, fy, fr, rgb, sp, ph, ak] of BLOBS) {
        const x = (fx + Math.sin(t * sp + ph) * 0.08) * w + mouse.x * 24;
        const y = (fy + Math.cos(t * sp * 1.3 + ph) * 0.07) * h + mouse.y * 16;
        const r = fr * m * (0.9 + 0.1 * Math.sin(t * sp * 2 + ph));
        const a = mix(ak, scroll.p);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${rgb},${a})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }

      ctx.globalCompositeOperation = "source-over";
      const mood = mix(STAR_MOOD, scroll.p);
      for (const s of stars) {
        const tw = 0.45 + 0.55 * Math.sin(t * 0.0016 + s.p);
        // far stars drift up slowly with scroll, near stars faster
        const x = s.x + mouse.x * s.z * 6;
        const y = wrap(s.y - scroll.y * (0.04 + s.z * 0.14) + mouse.y * s.z * 4, h);
        const a = mood * (0.1 + tw * 0.42) * (0.55 + s.z * 0.45);
        if (s.spark) {
          const L = 3 + tw * 4;
          ctx.fillStyle = `rgba(255,222,140,${a + 0.12})`;
          ctx.fillRect(x - L, y - 0.5, L * 2, 1);
          ctx.fillRect(x - 0.5, y - L, 1, L * 2);
        } else {
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect(x, y, s.s, s.s);
        }
      }

      ctx.globalCompositeOperation = "lighter";
      for (const d of motes) {
        if (!still) {
          d.y -= d.v;
          if (d.y < -4) {
            d.y = h + 4;
            d.x = Math.random() * w;
          }
        }
        const x = d.x + Math.sin(t * 0.0005 + d.p) * 14 + mouse.x * d.s * 8;
        const fade = Math.min(1, d.y / (h * 0.25), (h - d.y) / (h * 0.1));
        ctx.fillStyle = d.gold
          ? `rgba(242,182,60,${0.42 * Math.max(fade, 0)})`
          : `rgba(196,181,253,${0.34 * Math.max(fade, 0)})`;
        ctx.beginPath();
        ctx.arc(x, d.y, d.s, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      // 30fps on small screens keeps phones cool
      if (small && t - last < 33) return;
      last = t;
      draw(t);
    };

    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onStillScroll = () => {
      scroll.y = scroll.ty;
      scroll.p = scroll.tp;
      draw(0);
    };

    build();
    draw(0);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    window.addEventListener("resize", build);
    window.addEventListener("scroll", readScroll, { passive: true });
    if (!still) {
      window.addEventListener("pointermove", onMove);
      raf = requestAnimationFrame(loop);
    } else {
      // reduced motion: no loop, but repaint once per scroll so the mood still follows
      window.addEventListener("scroll", onStillScroll, { passive: true });
    }
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("scroll", onStillScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="site-bg" aria-hidden="true" />;
}
