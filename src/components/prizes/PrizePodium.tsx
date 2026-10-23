import { prizePool } from "../../data/content";
import { Icon } from "../ui/Icon";

const PLACE_LABEL = ["Winner", "Runner up", "Second runner up"] as const;

/** Stepped podium: 2nd, 1st, 3rd on wide screens, 1st to 3rd stacked on mobile. */
export function PrizePodium({ compact = false, label }: { compact?: boolean; label?: string }) {
  return (
    <div className={`podium${compact ? " podium--compact" : ""}`} data-surface="dark" role="group" aria-label={label ?? "Prize pool"}>
      <div className="podium__total">
        <span className="podium__trophy"><Icon name="trophy" size={compact ? 22 : 28} /></span>
        <p className="t-label podium__kicker">Prize pool</p>
        <p className="podium__amount">{prizePool.total}</p>
      </div>
      <ol className="podium__steps">
        {prizePool.places.map((p, i) => (
          <li key={p.place} className={`podium__step podium__step--${i + 1}`}>
            <span className="podium__place">{p.place}</span>
            <strong className="podium__prize">{p.amount}</strong>
            <span className="podium__rank">{PLACE_LABEL[i]}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
