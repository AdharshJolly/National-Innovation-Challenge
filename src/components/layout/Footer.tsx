import { Icon } from "../ui/Icon";

export function Footer() {
  return (
    <footer className="footer" data-surface="dark">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">National Innovation<br />Challenge</p>
          <p className="t-body-sm footer__muted">
            A national hardware innovation challenge for the next generation of builders.
          </p>
        </div>

        <div>
          <h2 className="t-label footer__title">Organised by</h2>
          <p className="t-body-sm">
            Industry Institute Interaction Cell (IIIC)<br />
            School of Engineering and Technology<br />
            CHRIST (Deemed to be University), Kengeri Campus, Bangalore
          </p>
          <p className="t-body-sm footer__muted footer__collab">In collaboration with C-DAC</p>
        </div>
      </div>

      <div className="container footer__bottom t-caption">
        <span>© National Innovation Challenge</span>
        <a href="#top" className="footer__top">
          Back to top <Icon name="arrow" size={16} />
        </a>
      </div>
    </footer>
  );
}
