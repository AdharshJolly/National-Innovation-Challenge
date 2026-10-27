import { routes } from "../../data/content";
import { Button } from "../ui/Button";
import { HeroStats } from "./HeroStats";

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__copy">
        <p className="hero__org">
          Industry Institute Interaction Cell (IIIC)
          <br />
          School of Engineering and Technology
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__gold">National</span>
          <span className="hero__white">Innovation</span>
          <span className="hero__row">
            <span className="hero__white">Challenge</span>
            <span className="hero__year">2027</span>
          </span>
        </h1>
        {/* TODO(later): add the registration deadline and Grand Finale date to this line once confirmed. */}
        <p className="hero__lead">A national challenge for Class 12 teams. Three tracks, up to ₹3 lakh in prizes.</p>
        <div className="hero__ctas">
          <Button variant="accent" size="lg" disabled>Registration opens soon</Button>
          <Button variant="outline-dark" size="lg" href={routes.tracks}>See the tracks</Button>
        </div>
      </div>
      <HeroStats />
    </section>
  );
}
