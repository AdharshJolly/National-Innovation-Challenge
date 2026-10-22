import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

export function SectionHeading({ eyebrow, children, id }: { eyebrow?: string; children: ReactNode; id?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="section-heading reveal">
      {eyebrow && <p className="t-label eyebrow">{eyebrow}</p>}
      <h2 id={id} className="t-h1 t-balance">{children}</h2>
    </div>
  );
}
