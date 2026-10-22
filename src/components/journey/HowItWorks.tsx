import { journeySteps } from "../../data/content";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { JourneyStep } from "./JourneyStep";

export function HowItWorks() {
  return (
    <section className="section bg-dark-technical" data-surface="dark" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <div className="how__head">
          <SectionHeading id="how-title">HOW IT WORKS</SectionHeading>
          <p className="t-body-lg how__lead t-pretty">
            A structured journey to turn ideas into working prototypes with real-world impact.
          </p>
        </div>
        <Reveal as="div" className="journey-wrap">
          <ol className="journey">
            {journeySteps.map((s) => (
              <JourneyStep key={s.number} {...s} />
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
