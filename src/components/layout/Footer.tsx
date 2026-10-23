import { navLinks, routes } from "../../data/content";

export function Footer() {
  return (
    <footer className="footer" data-surface="dark" id="faq">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="t-label footer__title">National Innovation Challenge</p>
          <p className="t-body-sm footer__muted">
            A national hardware innovation challenge for the next generation of builders.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="t-label footer__title">Explore</h2>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="t-label footer__title">Contact</h2>
          <p className="t-body-sm"><a href={routes.contact}>Meet the coordinators</a></p>
          <p className="t-body-sm footer__muted">Social links coming soon.</p>
        </div>

        <div>
          <h2 className="t-label footer__title">Organised by</h2>
          <p className="t-body-sm">School of Engineering and Technology<br />CHRIST (Deemed to be University)</p>
          <h2 className="t-label footer__title footer__title--gap">In collaboration with</h2>
          <p className="t-body-sm">C-DAC</p>
        </div>
      </div>
      <div className="container footer__bottom t-caption">
        <span>© National Innovation Challenge</span>
      </div>
    </footer>
  );
}
