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

function ContactLine({ icon, label, value, href }: { icon: "mail" | "phone"; label: string; value?: string; href?: string }) {
  const body = (
    <>
      <Icon name={icon} size={18} />
      <span>{value ? breakable(value) : TBA}</span>
    </>
  );
  return (
    <div className="contact-line">
      <dt className="sr-only">{label}</dt>
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

function Person({ c }: { c: Coordinator }) {
  const phoneHref = c.phone ? `tel:${c.phone.replace(/[^\d+]/g, "")}` : undefined;
  return (
    <article className="contact-person">
      <h4 className="t-h3 contact-person__name">{c.name ?? TBA}</h4>
      <dl className="contact-person__lines">
        <ContactLine icon="mail" label="Email" value={c.email} href={c.email ? `mailto:${c.email}` : undefined} />
        <ContactLine icon="phone" label="Phone" value={c.phone} href={phoneHref} />
      </dl>
    </article>
  );
}

function Group({ title, people, delay }: { title: string; people: Coordinator[]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="contact-group">
        <h3 className="t-label contact-group__title">{title}</h3>
        {people.map((c, i) => (
          <Person key={c.name ?? i} c={c} />
        ))}
      </div>
    </Reveal>
  );
}

export function ContactSection() {
  const faculty = coordinators.filter((c) => c.role === "Faculty Coordinator");
  const students = coordinators.filter((c) => c.role === "Student Coordinator");
  return (
    <section className="section section--light bg-light-technical" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title">GET IN TOUCH WITH THE TEAM</SectionHeading>
        <div className="contact-board">
          <Group title="Faculty coordinators" people={faculty} delay={0} />
          <Group title="Student coordinators" people={students} delay={1} />
        </div>
      </div>
    </section>
  );
}
