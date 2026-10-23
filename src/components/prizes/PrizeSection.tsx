import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { PrizePodium } from "./PrizePodium";

export function PrizeSection() {
  return (
    <section className="section section--light bg-light-technical" id="prizes" aria-labelledby="prizes-title">
      <div className="container">
        <SectionHeading id="prizes-title">THE PRIZE POOL</SectionHeading>
        <p className="t-body-sm prize-note">The same prize pool applies in every track.</p>
        <Reveal>
          <PrizePodium label="Prize pool for each track" />
        </Reveal>
      </div>
    </section>
  );
}
