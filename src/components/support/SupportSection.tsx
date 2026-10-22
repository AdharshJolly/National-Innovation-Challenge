import { supportItems } from "../../data/content";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SupportCard } from "./SupportCard";

export function SupportSection() {
  return (
    <section className="section section--light bg-clean" id="support" aria-labelledby="support-title">
      <div className="container">
        <SectionHeading id="support-title">BUILT WITH YOU, END TO END</SectionHeading>
        <ul className="support-grid">
          {supportItems.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i}>
              <SupportCard {...item} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
