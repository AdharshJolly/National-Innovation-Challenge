import { coordinators } from "../../data/content";
import type { Coordinator } from "../../data/content";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const TBA = "To be announced";

/** Offers a line break after the @ so long emails wrap cleanly on narrow screens. */
function breakable(value: string) {
  const [local, domain] = value.split("@");
  return domain === undefined ? value : <>{local}@<wbr />{domain}</>;
}

function ContactLink({ icon, label, value, href }: { icon: "mail" | "phone"; label: string; value?: string; href?: string }) {
  const body = (
    <>
      <Icon name={icon} size={18} />
      <span>{value ? breakable(value) : TBA}</span>
    </>
  );
  return (
    <div className="contact-row__cell">
      <dt className="contact-row__label t-label">{label}</dt>
      <dd>
        {value && href ? (
          <a className="contact-link" href={href}>{body}</a>
        ) : (
          <span className="contact-link contact-tba">{body}</span>
        )}
      </dd>
    </div>
  );
}

function Row({ c, index }: { c: Coordinator; index: number }) {
  const phoneHref = c.phone ? `tel:${c.phone.replace(/[^\d+]/g, "")}` : undefined;
  return (
    <li className="contact-row">
      <span className="contact-row__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div className="contact-row__who">
        <h3 className="contact-row__name">{c.name ?? TBA}</h3>
        <p className="t-label contact-row__role">{c.role}</p>
      </div>
      <dl className="contact-row__lines">
        <ContactLink icon="mail" label="Email" value={c.email} href={c.email ? `mailto:${c.email}` : undefined} />
        <ContactLink icon="phone" label="Phone" value={c.phone} href={phoneHref} />
      </dl>
    </li>
  );
}

export function ContactSection() {
  return (
    <section className="section section--light bg-light-technical" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title">GET IN TOUCH WITH THE TEAM</SectionHeading>
        <Reveal>
          <ul className="contact-list">
            {coordinators.map((c, i) => (
              <Row key={c.name ?? i} c={c} index={i} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
