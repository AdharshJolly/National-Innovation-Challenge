import { useEffect } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { TrackSection } from "./components/tracks/TrackSection";
import { ProblemsIntro, ProblemsNav, TrackProblems } from "./components/problems/ProblemsSection";
import { PrizeSection } from "./components/prizes/PrizeSection";
import { StepsSection } from "./components/steps/StepsSection";
import { SupportSection } from "./components/support/SupportSection";
import { PartnersSection } from "./components/partners/PartnersSection";
import { ContactSection } from "./components/contact/ContactSection";
import { ClosingSection } from "./components/closing/ClosingSection";
import { tracks } from "./data/content";
import { SiteBackground } from "./components/effects/SiteBackground";

function Home() {
  return (
    <>
      <HeroSection />
      <TrackSection />
      <PrizeSection />
      <StepsSection />
      <SupportSection />
      <PartnersSection />
      <ContactSection />
      <ClosingSection />
    </>
  );
}

function ProblemsPage() {
  return (
    <>
      <ProblemsIntro />
      <ProblemsNav />
      {tracks.map((t) => (
        <TrackProblems key={t.id} trackId={t.id} />
      ))}
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const onProblems = path === "/problems";

  // Pages render after load, so the browser's own hash scroll misses; do it here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <SiteBackground />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar solid={onProblems} />
      <main id="main">
        {onProblems ? <ProblemsPage /> : <Home />}
      </main>
      <Footer />
    </>
  );
}
