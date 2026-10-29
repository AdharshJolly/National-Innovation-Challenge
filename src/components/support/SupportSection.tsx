import { useState } from "react";
import { supportItems } from "../../data/content";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function SupportSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mentorship, finale] = supportItems;

  return (
    <section className="section support-sec bg-dark-technical" data-surface="dark" id="support" aria-labelledby="support-title">
      <div className="container">
        <SectionHeading id="support-title">WHAT YOU TAKE HOME</SectionHeading>
        <div className="support">
          <Reveal className="support__plain">
            <span className="support__icon"><Icon name={mentorship.icon} size={26} /></span>
            <h3>{mentorship.title}</h3>
            <p>{mentorship.text}</p>
          </Reveal>
          <Reveal delay={1}>
            <div
              className="support__pass"
              style={{ transform: `perspective(900px) rotateY(${tilt.x * 8}deg) rotateX(${tilt.y * -8}deg)` }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
              }}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            >
              <span className="support__passicon"><Icon name={finale.icon} size={26} /></span>
              <h3>{finale.title}</h3>
              <div className="support__tear" aria-hidden="true" />
              <p>{finale.text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
