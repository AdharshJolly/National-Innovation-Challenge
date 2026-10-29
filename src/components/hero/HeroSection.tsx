import { routes } from "../../data/content";
import GradientWaves from "../effects/GradientWaves";
import { HeroVisual } from "../visuals/HeroVisual";
import { Button } from "../ui/Button";
import { HeroStats } from "./HeroStats";

export function HeroSection() {
  return (
    <section className="hero bg-spectrum--grid" id="top" aria-labelledby="hero-title">
      <div className="hero__waves" aria-hidden="true">
        {/* canvas colours must be literals; they mirror --nic-indigo, --nic-electric-blue, --nic-cyan */}
        <GradientWaves
          horizonColor="#312E81"
          waveColor="#4F46E5"
          crestColor="#06B6D4"
          speed={0.3}
          amplitude={2.2}
          relief={1}
          sheen={0.25}
          grain={0.12}
          opacity={0.7}
          lightAngle={120}
          swellOnClick={false}
        />
      </div>
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="t-display hero__title">
            <span className="hero__line">NATIONAL</span>
            <span className="hero__line">INNOVATION</span>
            <span className="hero__line text-spectrum">CHALLENGE</span>
          </h1>
          <p className="t-body-lg hero__lead">A national challenge for Class 12 students. Choose one of three tracks, build a working solution, and compete for up to ₹3 lakh in prizes.</p>
          <div className="hero__ctas">
            <Button variant="accent" size="lg" disabled>Registration opens soon</Button>
            <Button variant="outline-dark" size="lg" href={routes.tracks}>See the tracks</Button>
          </div>
        </div>

        <div className="hero__visual">
          <HeroVisual src="/images/hero-main.png" />
        </div>
      </div>
      <HeroStats />
    </section>
  );
}
