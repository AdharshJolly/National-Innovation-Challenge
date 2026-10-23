import { tracks } from "../../data/content";
import { problemStatements, trackEvents } from "../../data/problems";
import { PrizePodium } from "../prizes/PrizePodium";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ProblemCard } from "./ProblemCard";

/** Anchor id for a track's block on the problem statements page, e.g. `#autohack`. */
export const trackAnchor = (name: string) => name.toLowerCase();

export function ProblemsIntro() {
  return (
    <section className="section section--light bg-light-technical problems-intro" aria-labelledby="problems-title">
      <div className="container">
        <SectionHeading id="problems-title" eyebrow="Problem statements">
          REAL PROBLEMS. PICK YOURS.
        </SectionHeading>
        <nav className="ptabs" aria-label="Jump to a track">
          {tracks.map((t) => (
            <a key={t.id} href={`#${trackAnchor(t.title)}`} data-track={t.id} className="ptab">
              <span className="t-label">{t.number}</span> {t.title}
            </a>
          ))}
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
          <div>
            <p className="t-label pevent__kicker">Track {track.number} · {event.tagline}</p>
            <h2 id={`${anchor}-title`} className="t-h1 pevent__name">{event.name}</h2>
            <p className="pevent__theme">{event.theme}</p>
          </div>
          <dl className="pevent__facts">
            <div>
              <dt className="t-label">Problems</dt>
              <dd>{items.length}</dd>
            </div>
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
