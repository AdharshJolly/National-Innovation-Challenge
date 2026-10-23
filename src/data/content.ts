export type TrackId = "automobile" | "eee" | "civil";

export const routes = {
  challenge: "/#challenge",
  tracks: "/#tracks",
  problems: "/problems",
  howItWorks: "/#how-it-works",
  support: "/#support",
  faq: "/#faq",
  contact: "/#contact",
  register: "/#register", // → /register when built
} as const;

export const navLinks = [
  { label: "Challenge", href: routes.challenge },
  { label: "Tracks", href: routes.tracks },
  { label: "Problem Statements", href: routes.problems },
  { label: "How It Works", href: routes.howItWorks },
  { label: "Support", href: routes.contact },
];

export const heroStats = [
  { icon: "tracks", value: "3", label: "Tracks" },
  { icon: "problems", value: "Real-World", label: "Problem Statements" },
  { icon: "mentorship", value: "Expert", label: "Mentorship" },
  { icon: "recognition", value: "National", label: "Recognition" },
] as const;

/** Same prize pool for every track. */
export const prizePool = {
  total: "₹1,00,000",
  places: [
    { place: "1st", amount: "₹50,000" },
    { place: "2nd", amount: "₹30,000" },
    { place: "3rd", amount: "₹20,000" },
  ],
} as const;

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
    title: "AutoHack",
    discipline: "AutoHack",
    tagline: "Smart. Safe. Green.",
    descriptor: "Automotive Innovation Challenge: practical, affordable ideas for sustainable mobility.",
    image: "/images/track-automobile.png",
    href: "/problems#autohack",
  },
  {
    id: "eee",
    number: "02",
    title: "ChargeUp",
    discipline: "ChargeUp",
    tagline: "Charging India's Future.",
    descriptor: "E-mobility and clean energy: build it with circuits, code or both.",
    image: "/images/track-eee.png",
    href: "/problems#chargeup",
  },
  {
    id: "civil",
    number: "03",
    title: "Buildathon",
    discipline: "Buildathon",
    tagline: "Build. Simulate. Solve.",
    descriptor: "Six real-world problems across monitoring, sustainability and geospatial analysis.",
    image: "/images/track-civil.png",
    href: "/problems#buildathon",
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
  { icon: "mentorship", title: "Mentorship and Prototype Development", text: "Guidance from experts throughout the development journey for transforming ideas into working solutions." },
  { icon: "finale", title: "Grand Finale", text: "Opportunity to showcase your prototype at the national finale at CHRIST (Deemed to be University), Bangalore Kengeri Campus." },
] as const;

export interface Coordinator {
  role: "Faculty Coordinator" | "Student Coordinator";
  name?: string;
  email?: string;
  phone?: string;
}

export const coordinators: Coordinator[] = [
  {
    role: "Faculty Coordinator",
    name: "Prof. Haneesh K M",
    email: "haneesh.km@christuniversity.in",
    phone: "+919731121921",
  },
  {
    role: "Student Coordinator",
    name: "Annmarie Vinish",
    email: "annmarie.vinish@btech.christuniversity.in",
    phone: "+918921323033",
  },
];
