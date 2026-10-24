import { navLinks, routes } from "../../data/content";
import { Icon } from "../ui/Icon";

export function Footer() {
  return (
    <footer className="footer" data-surface="dark" id="faq">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">National Innovation Challenge</p>
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
          <a href={routes.contact} className="footer__cta">
            Meet the coordinators <Icon name="arrow" size={16} />
          </a>
          <p className="t-body-sm footer__muted footer__soon">Social links coming soon.</p>
        </div>

        <div>
          <h2 className="t-label footer__title">Organised by</h2>
          <p className="t-body-sm">School of Engineering and Technology<br />CHRIST (Deemed to be University)</p>
          <p className="t-body-sm footer__muted footer__collab">In collaboration with</p>
          <span className="footer__partner">
            <img src="/images/CDAC.svg" width={345} height={247} alt="C-DAC" loading="lazy" />
          </span>
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
