import { useEffect, useState } from "react";
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
    <section className="phero" data-surface="dark" aria-labelledby="problems-title">
      <div className="container">
        <p className="t-label eyebrow phero__eyebrow">Problem statements</p>
        <h1 id="problems-title" className="t-h1 t-balance phero__title">Pick a track and a problem.</h1>
        <p className="phero__lead">
          {problemStatements.length} briefs across three tracks. Each track lists its problems and prizes.
        </p>
        <dl className="phero__stats">
          <div><dd>{problemStatements.length}</dd><dt className="t-label">Problem briefs</dt></div>
          <div><dd>{tracks.length}</dd><dt className="t-label">Tracks</dt></div>
          <div><dd>Class 12</dd><dt className="t-label">Eligibility</dt></div>
        </dl>
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

/** Sticky track switcher; the active chip follows whichever track block is on screen. */
export function ProblemsNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const blocks = tracks.map((t) => document.getElementById(trackAnchor(t.title))).filter((el): el is HTMLElement => !!el);
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  return (
    <div className="pnav">
      <nav className="pnav__inner container" aria-label="Tracks">
        {tracks.map((t) => {
          const id = trackAnchor(t.title);
          return (
            <a key={t.id} href={`#${id}`} data-track={t.id} className="pnav__chip" aria-current={active === id ? "true" : undefined}>
              <span className="pnav__dot" aria-hidden="true" />
              <span className="pnav__num">{t.number}</span>
              {t.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export function TrackProblems({ trackId }: { trackId: (typeof tracks)[number]["id"] }) {
  const event = trackEvents.find((e) => e.id === trackId)!;
  const track = tracks.find((t) => t.id === trackId)!;
  const items = problemStatements.filter((p) => p.track === trackId);
  const anchor = trackAnchor(event.name);

  return (
    <section
      className="section section--light problems-track" data-surface="dark"
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
