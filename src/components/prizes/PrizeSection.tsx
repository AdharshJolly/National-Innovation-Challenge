import { prizePool, routes } from "../../data/content";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export function PrizeSection() {
  return (
    <section className="section prize" id="prizes" aria-label="Prize pool" data-surface="dark">
      <div className="container">
        <Reveal>
          <div className="prize__cheque">
            <div className="prize__main">
              <h2 className="prize__label">Total prize pool</h2>
              <p className="prize__amount" aria-label={prizePool.grandTotal}>
                <span className="prize__upto">Up to</span> ₹3,00,000
              </p>
              <p className="prize__split">Split among the winning teams of all three tracks</p>
            </div>
            <div className="prize__stub">
              <Icon name="trophy" size={44} />
              <p className="prize__stubtext">Each track has its own prize pool. Its top teams share it.</p>
              <a href={routes.problems} className="link-arrow prize__link">
                See prizes by track <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
