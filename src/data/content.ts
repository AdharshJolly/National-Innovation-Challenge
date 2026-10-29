export type TrackId = "automobile" | "eee" | "civil";

export const routes = {
  tracks: "/#tracks",
  problems: "/problems",
  prizes: "/#prizes",
  steps: "/#steps",
  support: "/#support",
  contact: "/#contact",
  register: "/#register", // → /register when built
} as const;

/** Same order as the sections on the home page. */
export const navLinks = [
  { label: "Tracks", href: routes.tracks },
  { label: "Problem Statements", href: routes.problems },
  { label: "Prizes", href: routes.prizes },
  { label: "Steps", href: routes.steps },
  { label: "Contact", href: routes.contact },
];

export const heroStats = [
  { icon: "trophy", value: "Up to ₹3 Lakh", label: "Total prize pool", countUp: true },
  { icon: "tracks", value: "3", label: "Tracks", countUp: true },
  { icon: "mentorship", value: "Up to 3", label: "Members per team", countUp: true },
  { icon: "explore", value: "Class 12", label: "Eligibility", countUp: false },
  // TODO(later): add stats once confirmed, e.g. registration fee, number of finalists, Grand Finale date.
] as const;

/** Same prize pool for every track. */
export const prizePool = {
  /** Overall pool across all three tracks, shown on the home page. */
  grandTotal: "Up to ₹3 Lakh",
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
    tagline: "Automotive Innovation Challenge",
    descriptor: "Practical, affordable ideas for sustainable mobility.",
    image: "/images/track-automobile.png",
    href: "/problems#autohack",
  },
  {
    id: "eee",
    number: "02",
    title: "ChargeUp",
    discipline: "ChargeUp",
    tagline: "E-mobility and clean energy",
    descriptor: "Build it with circuits, code or both.",
    image: "/images/track-eee.png",
    href: "/problems#chargeup",
  },
  {
    id: "civil",
    number: "03",
    title: "Buildathon",
    discipline: "Buildathon",
    tagline: "Monitoring, sustainability and geospatial",
    descriptor: "Six problem statements across three themes.",
    image: "/images/track-civil.png",
    href: "/problems#buildathon",
  },
];

export const journeySteps = [
  // TODO(later): add dates to these steps once confirmed (registration deadline, submission deadline, Grand Finale).
  { number: "01", title: "Explore", text: "Read the problem statements and pick a track." },
  { number: "02", title: "Register", text: "Form a team of up to three and register." },
  { number: "03", title: "Build", text: "Develop your prototype with guidance from mentors." },
  { number: "04", title: "Submit", text: "Send in your solution for evaluation." },
  { number: "05", title: "Finalists", text: "Top teams are invited to the Grand Finale." },
  { number: "06", title: "Prizes", text: "Winners in each track share ₹1,00,000." },
];

// Hardware support was removed (not provided any more).
// TODO(later): add the mentor names or mentorship schedule here once confirmed.
export const supportItems = [
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
    role: "Faculty Coordinator",
    name: "Dr. Jacob Alex",
    email: "jacob.alex@christuniversity.in",
    phone: "+919940689577",
  },
  {
    role: "Student Coordinator",
    name: "Annmarie Vinish",
    email: "annmarie.vinish@btech.christuniversity.in",
    phone: "+918921323033",
  },
  {
    role: "Student Coordinator",
    name: "Rebecca Lenin Koshy",
    email: "rebecca.lenin@btech.christuniversity.in",
    phone: "+916356117125",
  },
];

export interface Partner {
  name: string;
  /** Path under `public/`. Use a dark logo on transparent; tiles are white. */
  logo: string;
  /** Logo intrinsic size, to avoid layout shift. */
  width: number;
  height: number;
  /** Row label the logo sits under, e.g. "In collaboration" or "Sponsors". Same tier text = same row. */
  tier?: string;
  href?: string;
}

/** Add a sponsor or partner here and it appears in the Partners section. */
export const partners: Partner[] = [
  { name: "C-DAC", logo: "/images/CDAC.svg", width: 345, height: 247, tier: "In collaboration" },
];
