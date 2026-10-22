import { useState } from "react";
import type { Track } from "../../data/content";
import PixelSwap from "../effects/PixelSwap";
import { Icon } from "../ui/Icon";
import { TrackVisual } from "../visuals/TrackVisual";

export function TrackCard({ track }: { track: Track }) {
  const [hot, setHot] = useState(false);
  return (
    <article
      className="track-card"
      data-track={track.id}
      onPointerEnter={(e) => e.pointerType !== "touch" && setHot(true)}
      onPointerLeave={(e) => e.pointerType !== "touch" && setHot(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setHot(true)}
      onBlur={() => setHot(false)}
    >
      <div className="track-card__media">
        <PixelSwap
          className="track-card__swap"
          aspectRatio="auto"
          trigger="none"
          intro={false}
          active={hot}
          pattern="pointer"
          pixelSize={40}
          duration={380}
          pixelDuration={320}
          randomness={0.25}
          bounce={0.25}
          firstContent={
            <TrackVisual track={track.id} src={track.image} alt={`${track.title} illustration`} />
          }
          secondContent={
            <div className="track-card__reveal">
              <p className="track-card__reveal-title">{track.tagline}</p>
              <span className="track-card__reveal-cta">
                {track.discipline} <Icon name="arrow" size={18} />
              </span>
            </div>
          }
        />
        <span className="track-card__number t-label">Track {track.number}</span>
      </div>
      <div className="track-card__body">
        <p className="t-label track-card__discipline">{track.discipline}</p>
        <h3 className="t-h3 track-card__title">
          <a href={track.href} className="track-card__link">
            {track.title}
          </a>
        </h3>
        <p className="track-card__tagline">{track.tagline}</p>
        <p className="t-body-sm track-card__text">{track.descriptor}</p>
        <span className="track-card__cta" aria-hidden="true">
          Explore track <Icon name="arrow" size={18} />
        </span>
      </div>
    </article>
  );
}
