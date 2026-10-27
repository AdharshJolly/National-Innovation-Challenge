import { useEffect, useRef } from "react";

/** Fixed, site-wide poster backdrop: slow aurora, twinkling stars, rising gold dust. */
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
  spark: boolean;
}

// Slow aurora blobs: [x, y, radius, rgb, alpha, speed, phase]
const BLOBS: [number, number, number, string, number, number, number][] = [
  [0.2, 0.35, 0.55, "91,50,190", 0.5, 0.00011, 0],
  [0.82, 0.3, 0.5, "124,58,237", 0.45, 0.00009, 2],
  [0.5, 0.95, 0.6, "242,182,60", 0.2, 0.00007, 4],
  [0.5, 0.2, 0.45, "60,40,160", 0.45, 0.00013, 1],
];

export function SiteBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let motes: Mote[] = [];
    let stars: Star[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = w < 700;
      stars = Array.from({ length: small ? 80 : 190 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 1.3 + 0.3,
        p: Math.random() * Math.PI * 2,
        spark: Math.random() < 0.06,
      }));
      motes = Array.from({ length: small ? 36 : 80 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        v: 0.12 + Math.random() * 0.3,
        s: 0.8 + Math.random() * 1.8,
        p: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.7,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const m = Math.max(w, h);

      ctx.globalCompositeOperation = "lighter";
      for (const [fx, fy, fr, rgb, a, sp, ph] of BLOBS) {
        const x = (fx + Math.sin(t * sp + ph) * 0.08) * w + mouse.x * 24;
        const y = (fy + Math.cos(t * sp * 1.3 + ph) * 0.07) * h + mouse.y * 16;
        const r = fr * m * (0.9 + 0.1 * Math.sin(t * sp * 2 + ph));
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${rgb},${a})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }

      ctx.globalCompositeOperation = "source-over";
      for (const s of stars) {
        const tw = 0.45 + 0.55 * Math.sin(t * 0.0016 + s.p);
        const x = s.x + mouse.x * s.s * 4;
        const y = s.y + mouse.y * s.s * 3;
        if (s.spark) {
          const L = 4 + tw * 5;
          ctx.fillStyle = `rgba(255,222,140,${0.25 + tw * 0.6})`;
          ctx.fillRect(x - L, y - 0.5, L * 2, 1);
          ctx.fillRect(x - 0.5, y - L, 1, L * 2);
        } else {
          ctx.fillStyle = `rgba(255,255,255,${0.15 + tw * 0.5})`;
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
          ? `rgba(242,182,60,${0.55 * Math.max(fade, 0)})`
          : `rgba(196,181,253,${0.45 * Math.max(fade, 0)})`;
        ctx.beginPath();
        ctx.arc(x, d.y, d.s, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      if (visible) draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    build();
    draw(0);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    window.addEventListener("resize", build);
    if (!still) {
      window.addEventListener("pointermove", onMove);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="site-bg" aria-hidden="true" />;
}
