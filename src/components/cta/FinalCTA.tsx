import { routes } from "../../data/content";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section final-cta bg-spectrum" data-surface="dark" id="register" aria-labelledby="cta-title">
      <Reveal className="container final-cta__inner">
        <h2 id="cta-title" className="t-h1 t-balance">
          READY TO BUILD <span className="text-spectrum">WHAT&rsquo;S NEXT?</span>
        </h2>
        <p className="t-body-lg final-cta__lead">Bring your team. Choose your challenge. Build something that matters.</p>
        <div className="final-cta__ctas">
          <Button variant="accent" size="lg" href={routes.register} arrow>Register Your Team</Button>
          <Button variant="outline-dark" size="lg" href={routes.problems}>Explore Problem Statements</Button>
        </div>
      </Reveal>
    </section>
  );
}
