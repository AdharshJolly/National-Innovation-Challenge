import { tracks } from "../../data/content";
import { problemStatements, trackEvents } from "../../data/problems";
import { PrizePodium } from "../prizes/PrizePodium";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { ProblemCard } from "./ProblemCard";

/** Anchor id for a track's block on the problem statements page, e.g. `#autohack`. */
export const trackAnchor = (name: string) => name.toLowerCase();

export function ProblemsIntro() {
  return (
    <section className="phero bg-spectrum--grid" data-surface="dark" aria-labelledby="problems-title">
      <div className="container">
        <p className="t-label eyebrow phero__eyebrow">Problem statements</p>
        <h1 id="problems-title" className="t-h1 t-balance phero__title">Real problems. Pick yours.</h1>
        <p className="phero__lead">
          Three tracks, {problemStatements.length} briefs, each taken from a real constraint in mobility, energy or infrastructure. Choose a track to see its problems and prizes.
        </p>
        <nav className="ppick" aria-label="Jump to a track">
          {tracks.map((t) => {
            const count = problemStatements.filter((p) => p.track === t.id).length;
            return (
              <a key={t.id} href={`#${trackAnchor(t.title)}`} data-track={t.id} className="ppick__item">
                <img className="ppick__img" src={t.image} alt="" loading="lazy" />
                <span className="ppick__body">
                  <span className="t-label ppick__num">{t.number}</span>
                  <span className="ppick__name">{t.title}</span>
                  <span className="ppick__tag">{t.tagline}</span>
                  <span className="ppick__count">{count} problems <Icon name="arrow" size={16} /></span>
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export function TrackProblems({ trackId }: { trackId: (typeof tracks)[number]["id"] }) {
  const event = trackEvents.find((e) => e.id === trackId)!;
  const track = tracks.find((t) => t.id === trackId)!;
  const items = problemStatements.filter((p) => p.track === trackId);
  const anchor = trackAnchor(event.name);

  return (
    <section
      className="section section--light problems-track"
      id={anchor}
      data-track={trackId}
      aria-labelledby={`${anchor}-title`}
    >
      <div className="container">
        <div className="pevent">
          <span className="pevent__ghost" aria-hidden="true">{track.number}</span>
          <div className="pevent__main">
            <p className="t-label pevent__kicker">Track {track.number} · {event.tagline}</p>
            <h2 id={`${anchor}-title`} className="t-h1 pevent__name">{event.name}</h2>
            <p className="pevent__theme">{event.theme}</p>
          </div>
          <dl className="pevent__facts">
            <div><dt className="t-label">Problems</dt><dd>{items.length}</dd></div>
            <div><dt className="t-label">Who can enter</dt><dd>{event.eligibility}</dd></div>
            <div><dt className="t-label">Team size</dt><dd>{event.teamSize}</dd></div>
          </dl>
        </div>

        <PrizePodium compact label={`${event.name} prize pool`} />

        <ul className="problem-grid">
          {items.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i}>
              <ProblemCard p={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
