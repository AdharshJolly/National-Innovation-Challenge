import { ImpactVisual } from "../visuals/ImpactVisual";
import { Reveal } from "../ui/Reveal";

export function ImpactSection() {
  return (
    <section className="section section--light bg-clean--white" id="challenge" aria-labelledby="impact-title">
      <div className="container impact">
        <Reveal className="impact__copy">
          <p className="t-label eyebrow">Real challenges. Nationwide impact.</p>
          <h2 id="impact-title" className="t-h1 t-balance">
            ENGINEERING FOR A BRIGHTER <span className="text-spectrum-light">TOMORROW.</span>
          </h2>
          <p className="t-body-lg impact__text t-pretty">
            Tackle real-world problems, develop practical solutions, and contribute to a safer, smarter, and more sustainable future.
          </p>
        </Reveal>
        <Reveal className="impact__visual" delay={1}>
          <ImpactVisual src="/images/impact-globe.png" />
        </Reveal>
      </div>
    </section>
  );
}
