import { useEffect, useState } from "react";
import { navLinks } from "../../data/content";
import { useScrolled } from "../../hooks/useScrolled";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";

export function Navbar({ solid = false }: { solid?: boolean }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${solid || scrolled || open ? " nav--solid" : ""}`}>
      <div className="container nav__inner">
        <div className="nav__brand">
          <a href="/" className="nav__logo" aria-label="National Innovation Challenge, home">
            <Logo />
          </a>
        </div>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="t-nav nav__link">{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <Button variant="accent" className="nav__cta" disabled>Registration Coming Soon</Button>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="nav__drawer" aria-label="Mobile" hidden={!open}>
        <div className="container">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="nav__drawer-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Button variant="accent" className="nav__drawer-cta" disabled>Registration Coming Soon</Button>
        </div>
      </nav>
    </header>
  );
}
