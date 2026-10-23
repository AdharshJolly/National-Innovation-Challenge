import { useEffect } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { TrackSection } from "./components/tracks/TrackSection";
import { ProblemsIntro, TrackProblems } from "./components/problems/ProblemsSection";
import { PrizeSection } from "./components/prizes/PrizeSection";
import { HowItWorks } from "./components/journey/HowItWorks";
import { ImpactSection } from "./components/impact/ImpactSection";
import { SupportSection } from "./components/support/SupportSection";
import { PartnersSection } from "./components/partners/PartnersSection";
import { ContactSection } from "./components/contact/ContactSection";
import { FinalCTA } from "./components/cta/FinalCTA";
import { tracks } from "./data/content";

function Home() {
  return (
    <>
      <HeroSection />
      <TrackSection />
      <PrizeSection />
      <HowItWorks />
      <ImpactSection />
      <SupportSection />
      <PartnersSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}

function ProblemsPage() {
  return (
    <>
      <ProblemsIntro />
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
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar solid={onProblems} />
      <main id="main">{onProblems ? <ProblemsPage /> : <Home />}</main>
      <Footer />
    </>
  );
}
