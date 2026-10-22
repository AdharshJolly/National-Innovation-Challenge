import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { TrackSection } from "./components/tracks/TrackSection";
import { HowItWorks } from "./components/journey/HowItWorks";
import { ImpactSection } from "./components/impact/ImpactSection";
import { SupportSection } from "./components/support/SupportSection";
import { FinalCTA } from "./components/cta/FinalCTA";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <TrackSection />
        <HowItWorks />
        <ImpactSection />
        <SupportSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
