import type { CSSProperties } from "react";
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

/** +919731121921 becomes +91 97311 21921; anything else is shown as stored. */
function formatPhone(value: string) {
  const m = value.replace(/\s/g, "").match(/^\+91(\d{5})(\d{5})$/);
  return m ? `+91 ${m[1]} ${m[2]}` : value;
}

type LinkProps = {
  icon: "mail" | "phone";
  short: string;
  value?: string;
  href?: string;
  label: string;
};

/** Phones show the short label; from 1180px the full value shows. The aria-label always carries the full value. */
function BadgeLink({ icon, short, value, href, label }: LinkProps) {
  const body = (
    <>
      <Icon name={icon} size={16} />
      <span className="badge__short" aria-hidden="true">{short}</span>
      <span className="badge__full" aria-hidden="true">{value ? (icon === "phone" ? formatPhone(value) : breakable(value)) : TBA}</span>
    </>
  );
  return value && href ? (
    <a className="badge__link" href={href} aria-label={label}>{body}</a>
  ) : (
    <span className="badge__link badge__tba" aria-label={`${label}: ${TBA}`}>{body}</span>
  );
}

function Badge({ c, index }: { c: Coordinator; index: number }) {
  const who = c.name ?? TBA;
  const phoneHref = c.phone ? `tel:${c.phone.replace(/[^\d+]/g, "")}` : undefined;
  return (
    <li className="badge" style={{ "--i": index } as CSSProperties}>
      <div className="badge__card">
        <p className="badge__role">{c.role}</p>
        <h3 className="badge__name">{who}</h3>
        <div className="badge__links">
          <BadgeLink icon="mail" short="Email" value={c.email} href={c.email ? `mailto:${c.email}` : undefined} label={`Email ${who}${c.email ? ` at ${c.email}` : ""}`} />
          <BadgeLink icon="phone" short="Call" value={c.phone} href={phoneHref} label={`Call ${who}${c.phone ? ` on ${c.phone}` : ""}`} />
        </div>
      </div>
    </li>
  );
}

export function ContactSection() {
  return (
    <section className="section section--light bg-light-technical contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title">CONTACT US</SectionHeading>
        <Reveal as="p" className="t-body-lg section-lead">Have a question or need assistance? Reach out to our coordination team.</Reveal>
        <Reveal>
          <div className="contact-rail">
            <ul className="contact-badges">
              {coordinators.map((c, i) => (
                <Badge key={c.name ?? i} c={c} index={i} />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
