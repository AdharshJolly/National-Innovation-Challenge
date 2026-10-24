import { prizePool, routes } from "../../data/content";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export function PrizeSection() {
  return (
    <section className="section prize" id="prizes" aria-labelledby="prizes-title" data-surface="dark">
      <div className="prize__bg" aria-hidden="true" />
      <div className="container prize__grid">
        <Reveal>
          <div className="prize__copy">
            <h2 id="prizes-title" className="t-label prize__title">
              <Icon name="trophy" size={20} /> The Prize Pool
            </h2>
            <p className="prize__amount" aria-label={prizePool.grandTotal}>
              <span className="prize__upto">Up to</span><span className="prize__rupee">₹</span>3<span className="prize__unit">Lakh</span>
            </p>
            <a href={routes.problems} className="link-arrow prize__link">
              See prizes by track <Icon name="arrow" size={18} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
