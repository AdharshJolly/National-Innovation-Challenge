import { heroStats } from "../../data/content";
import { CountUp } from "../ui/CountUp";
import { Icon } from "../ui/Icon";

export function HeroStats() {
  return (
    <div className="container">
      <ul className="hero-stats" aria-label="Challenge at a glance">
        {heroStats.map((s) => (
          <li key={s.label} className="hero-stats__item">
            <span className="hero-stats__icon"><Icon name={s.icon} size={24} /></span>
            <span>
              <span className="hero-stats__value"><CountUp value={s.value} /></span>
              <span className="hero-stats__label t-body-sm">{s.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
