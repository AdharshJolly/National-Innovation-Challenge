import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

export function Reveal({ as: Tag = "div", delay = 0, className = "", children }: {
  as?: ElementType; delay?: number; className?: string; children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  const style = { "--reveal-i": Math.min(delay, 6) } as CSSProperties;
  return <Tag ref={ref} className={`reveal ${className}`} style={style}>{children}</Tag>;
}
