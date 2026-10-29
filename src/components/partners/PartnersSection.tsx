import { partners } from "../../data/content";
import type { Partner } from "../../data/content";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function Logo({ p }: { p: Partner }) {
  const img = <img src={p.logo} width={p.width} height={p.height} alt={p.name} loading="lazy" />;
  return p.href ? (
    <a className="partner-logo" href={p.href} target="_blank" rel="noopener noreferrer">{img}</a>
  ) : (
    <span className="partner-logo">{img}</span>
  );
}

export function PartnersSection() {
  return (
    <section className="section section--light bg-clean partners" id="partners" aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading id="partners-title">IN COLLABORATION WITH</SectionHeading>
        <Reveal>
          <ul className="partner-logos">
            {partners.map((p) => (
              <li key={p.name}><Logo p={p} /></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
