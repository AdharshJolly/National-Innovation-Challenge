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
          <p className="t-label eyebrow eyebrow--dark hero__eyebrow">A National Hardware Innovation Challenge</p>
          <h1 id="hero-title" className="t-display hero__title">
            <span className="hero__line">BUILD</span>
            <span className="hero__line">
              <span className="hero__line-plain">WHAT&rsquo;S </span>
              <span className="text-spectrum">NEXT.</span>
            </span>
          </h1>
          <p className="t-body-lg hero__lead">Real problems. Real engineering. Real-world impact.</p>
          <div className="hero__ctas">
            <Button variant="accent" size="lg" href={routes.register} target="_blank" rel="noopener noreferrer">Register Now</Button>
            <Button variant="outline-dark" size="lg" href={routes.challenge}>Explore the Challenge</Button>
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
