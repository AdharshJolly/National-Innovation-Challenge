import { routes, tracks } from "../../data/content";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TrackCard } from "./TrackCard";

export function TrackSection() {
  return (
    <section className="section section--light" data-surface="dark" id="tracks" aria-labelledby="tracks-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading id="tracks-title">
            CHOOSE YOUR TRACK
          </SectionHeading>
          <a href={routes.problems} className="link-arrow">
            View All Problem Statements <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="track-grid">
          {tracks.map((t, i) => (
            <Reveal key={t.id} delay={i}>
              <TrackCard track={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
