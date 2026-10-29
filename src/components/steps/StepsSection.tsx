import { journeySteps } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

export function StepsSection() {
  const total = journeySteps.length;
  return (
    <section className="section how bg-dark-technical" data-surface="dark" id="steps" aria-labelledby="how-title">
      <div className="container">
        <div className="how__head">
          <SectionHeading id="how-title">HOW IT WORKS</SectionHeading>
          <p className="t-body-lg how__lead t-pretty">
            A structured journey to turn ideas into working prototypes with real-world impact.
          </p>
        </div>
        <ol className="how-stack">
          {journeySteps.map((s, i) => (
            <li key={s.number} className="how-stack__card" style={{ ["--i" as string]: i }}>
              <span className="how-stack__ghost" aria-hidden="true">{s.number}</span>
              <div className="how-stack__top">
                <span className="how-stack__count">Step {i + 1} of {total}</span>
                <span className="how-stack__bar" aria-hidden="true">
                  {journeySteps.map((_, k) => (
                    <span key={k} className={k <= i ? "is-on" : ""} />
                  ))}
                </span>
              </div>
              <h3 className="how-stack__title">{s.title}</h3>
              <p className="how-stack__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
