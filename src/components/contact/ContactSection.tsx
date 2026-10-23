import { coordinators } from "../../data/content";
import type { Coordinator } from "../../data/content";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const TBA = "To be announced";

function initials(name?: string) {
  if (!name) return "NIC";
  const parts = name.replace(/^Dr\.?\s+/i, "").split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

/** Offers a line break after the @ so long emails wrap cleanly on narrow screens. */
function breakable(value: string) {
  const [local, domain] = value.split("@");
  return domain === undefined ? value : <>{local}@<wbr />{domain}</>;
}

function ContactLine({ icon, label, value, href }: { icon: "mail" | "phone"; label: string; value?: string; href?: string }) {
  const body = (
    <>
      <span className="contact-pill__icon"><Icon name={icon} size={18} /></span>
      <span>{value ? breakable(value) : TBA}</span>
    </>
  );
  return (
    <div className="contact-line">
      <dt className="sr-only">{label}</dt>
      <dd>
        {value && href ? (
          <a className="contact-pill" href={href}>{body}</a>
        ) : (
          <span className="contact-pill contact-tba">{body}</span>
        )}
      </dd>
    </div>
  );
}

function Person({ c, featured = false }: { c: Coordinator; featured?: boolean }) {
  const phoneHref = c.phone ? `tel:${c.phone.replace(/[^\d+]/g, "")}` : undefined;
  return (
    <article className={`contact-person${featured ? " contact-person--featured" : ""}`}>
      <div className="contact-person__head">
        <span className="contact-person__mono" aria-hidden="true">{initials(c.name)}</span>
        <div>
          <p className="t-label contact-person__role">{c.role}</p>
          <h3 className={`${featured ? "t-h2" : "t-h3"} contact-person__name`}>{c.name ?? TBA}</h3>
        </div>
      </div>
      <dl className="contact-person__lines">
        <ContactLine icon="mail" label="Email" value={c.email} href={c.email ? `mailto:${c.email}` : undefined} />
        <ContactLine icon="phone" label="Phone" value={c.phone} href={phoneHref} />
      </dl>
    </article>
  );
}

export function ContactSection() {
  const faculty = coordinators.find((c) => c.role === "Faculty Coordinator");
  const students = coordinators.filter((c) => c.role === "Student Coordinator");
  return (
    <section className="section section--light bg-light-technical" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title">GET IN TOUCH WITH THE TEAM</SectionHeading>
        <div className="contact-grid">
          {faculty && (
            <Reveal>
              <Person c={faculty} featured />
            </Reveal>
          )}
          <div className="contact-students">
            {students.map((c, i) => (
              <Reveal key={i} delay={i + 1}>
                <Person c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
