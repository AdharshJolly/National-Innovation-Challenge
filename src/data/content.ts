export type TrackId = "automobile" | "eee" | "civil";

export const routes = {
  challenge: "#challenge",
  tracks: "#tracks",
  problems: "#tracks", // → /problems when built
  howItWorks: "#how-it-works",
  support: "#support",
  faq: "#faq",
  register: "#register", // → /register when built
} as const;

export const navLinks = [
  { label: "Challenge", href: routes.challenge },
  { label: "Tracks", href: routes.tracks },
  { label: "Problem Statements", href: routes.problems },
  { label: "How It Works", href: routes.howItWorks },
  { label: "Support", href: routes.support },
  { label: "FAQs", href: routes.faq },
];

export const heroStats = [
  { icon: "tracks", value: "3", label: "Engineering Tracks" },
  { icon: "problems", value: "Real-World", label: "Problem Statements" },
  { icon: "mentorship", value: "Expert", label: "Mentorship" },
  { icon: "recognition", value: "National", label: "Recognition" },
] as const;

export interface Track {
  id: TrackId;
  number: string;
  title: string;
  discipline: string;
  tagline: string;
  descriptor: string;
  image: string;
  href: string;
}

export const tracks: Track[] = [
  {
    id: "automobile",
    number: "01",
    title: "Automobile Engineering",
    discipline: "Automobile",
    tagline: "Mobility. Energy. Performance.",
    descriptor: "Prototype smarter, cleaner and safer ways to move people and goods.",
    image: "/images/track-automobile.png",
    href: "#tracks",
  },
  {
    id: "eee",
    number: "02",
    title: "Electrical & Electronics Engineering",
    discipline: "EEE",
    tagline: "Systems. Intelligence. Impact.",
    descriptor: "Build embedded, sensing and control systems that solve real problems.",
    image: "/images/track-eee.png",
    href: "#tracks",
  },
  {
    id: "civil",
    number: "03",
    title: "Civil Engineering",
    discipline: "Civil",
    tagline: "Infrastructure. Environment. Society.",
    descriptor: "Design resilient, sustainable structures and infrastructure for communities.",
    image: "/images/track-civil.png",
    href: "#tracks",
  },
];

export const journeySteps = [
  { number: "01", title: "Explore", text: "Choose a track and explore real-world problem statements." },
  { number: "02", title: "Register", text: "Form your team and complete your registration." },
  { number: "03", title: "Build", text: "Work on your prototype with guidance from experts and mentors." },
  { number: "04", title: "Submit", text: "Present your solution for evaluation." },
  { number: "05", title: "Finalists", text: "Top teams advance to the Grand Finale." },
  { number: "06", title: "Recognition", text: "Gain national recognition and showcase your innovation." },
];

export const supportItems = [
  { icon: "hardware", title: "Hardware", text: "Access to hardware boards and components for prototype development." },
  { icon: "mentorship", title: "Mentorship", text: "Guidance from experts throughout the development journey." },
  { icon: "prototype", title: "Prototype Support", text: "Support for transforming ideas into working solutions." },
  { icon: "finale", title: "Grand Finale", text: "Opportunity to showcase your prototype at the national finale." },
] as const;

export const footerContact = {
  // TODO: replace with the approved NIC contact once finalised.
  label: "Contact details to be announced",
};
