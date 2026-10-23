import { partners } from "../../data/content";
import type { Partner } from "../../data/content";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const DEFAULT_TIER = "Partners";

/** Groups partners by tier, keeping the order they first appear in `partners`. */
function byTier(list: Partner[]) {
  const groups = new Map<string, Partner[]>();
  for (const p of list) {
    const tier = p.tier ?? DEFAULT_TIER;
    groups.set(tier, [...(groups.get(tier) ?? []), p]);
  }
  return [...groups];
}

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
    <section className="section section--light bg-clean" id="partners" aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading id="partners-title">SPONSORS AND PARTNERS</SectionHeading>
        <Reveal>
          <div className="partner-panel">
            {byTier(partners).map(([tier, items], t) => (
              <div className="partner-tier" role="group" aria-labelledby={`partner-tier-${t}`} key={tier}>
                <h3 className="t-label partner-tier__name" id={`partner-tier-${t}`}>{tier}</h3>
                <ul className="partner-logos">
                  {items.map((p) => (
                    <li key={p.name}><Logo p={p} /></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
