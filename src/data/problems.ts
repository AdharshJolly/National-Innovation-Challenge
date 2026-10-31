import type { TrackId } from "./content";

/** Extracted from the organiser documents in `Hackathon Docs/`. Nothing here is invented; unknowns stay out. */
export interface ProblemStatement {
  id: string;
  track: TrackId;
  number: string;
  title: string;
  /** Short hook / tagline, where the source gives one. */
  hook?: string;
  problem?: string;
  challenge: string;
  explore?: string[];
  hardware?: string;
  software?: string;
  approaches?: string;
  safety?: string;
  theme?: string;
  partner?: string;
  tools?: string[];
  data?: string[];
}

export interface TrackEvent {
  id: TrackId;
  name: string;
  tagline: string;
  theme: string;
  eligibility: string;
  teamSize: string;
  notes: string[];
  judging: { label: string; weight?: string }[];
}

export const trackEvents: TrackEvent[] = [
  {
    id: "automobile",
    name: "AutoHack",
    tagline: "Automotive Innovation Challenge",
    theme: "Smart, safe, green and sustainable mobility",
    eligibility: "Class 11 & 12",
    teamSize: "1–3 students",
    notes: [
      "Choose one of five problem statements; 3–4 hours.",
      "Present as a concept, model or prototype; a simple working model is encouraged.",
      "Explain innovation, working principle, feasibility, estimated cost and expected benefits.",
      "Certificates for all participants. Registration link, date and venue to be announced.",
    ],
    judging: [
      { label: "Problem clarity" },
      { label: "Originality" },
      { label: "Feasibility" },
      { label: "Cost" },
      { label: "Practical impact" },
      { label: "Presentation" },
    ],
  },
  {
    id: "eee",
    name: "ChargeUp",
    tagline: "Charging India's Future",
    theme: "E-mobility and clean energy (a C-DAC collaborated initiative)",
    eligibility: "Class 11 & 12, pre-university students across India",
    teamSize: "1–3 students, one proposal per team",
    notes: [
      "Registration fee ₹300 per team, non-refundable.",
      "Round 1: idea and online pitch. Proposals (3–4 page PDF) due 15 Nov.",
      "Top 10 shortlist announced 30 Nov; four weeks of online mentorship in Dec.",
      "Round 2: Grand Finale, second week of Jan, at CHRIST University, with a live prototype.",
      "Every team submits a proposal PDF, a prototype or simulation, and a 3-minute demo video.",
    ],
    judging: [
      { label: "Originality & innovation", weight: "20%" },
      { label: "Feasibility & technical merit", weight: "20%" },
      { label: "Structure & clarity", weight: "15%" },
      { label: "Theme alignment", weight: "15%" },
      { label: "Environmental impact", weight: "15%" },
      { label: "Prototype potential", weight: "15%" },
    ],
  },
  {
    id: "civil",
    name: "Buildathon",
    tagline: "Build. Simulate. Solve.",
    theme: "Three themes, six real-world problem statements",
    eligibility: "Grade 11 & 12",
    teamSize: "Not specified",
    notes: ["Industry partners: Mantis Infra Solutions, MYK Laticrete India, Space Geo Tech."],
    judging: [],
  },
];

export const problemStatements: ProblemStatement[] = [
  // AutoHack
  {
    id: "ah-01", track: "automobile", number: "01",
    title: "Energy-Efficient Electric Mobility & Battery Range",
    problem: "Electric vehicles have a limited driving range because batteries store a finite amount of energy. Losses from weight, friction, road conditions and inefficient operation reduce the distance further.",
    challenge: "Increase the travelling distance of a miniature electric vehicle with an affordable, practical and innovative solution that improves energy utilisation.",
    explore: ["Weight reduction", "Low-friction drive", "Efficient motor control", "Smart energy management"],
  },
  {
    id: "ah-02", track: "automobile", number: "02",
    title: "Smart Collision Detection & Accident Prevention",
    problem: "Pedestrians, stationary objects and sudden obstacles cause accidents when a driver has too little time to react, especially on crowded roads, in school zones and in poorly visible areas.",
    challenge: "Build a low-cost, reliable solution that identifies potential obstacles, alerts the driver or improves vehicle response to reduce the likelihood of collisions.",
    explore: ["Obstacle sensing", "Driver alerts", "Automatic braking response", "Low-visibility safety"],
  },
  {
    id: "ah-03", track: "automobile", number: "03",
    title: "Aerodynamic Design for Improved Vehicle Efficiency",
    problem: "Air resistance rises significantly with speed. A poor vehicle shape increases the energy needed for travel and reduces fuel economy or electric range.",
    challenge: "Design an innovative vehicle body concept or working model that minimises aerodynamic resistance while keeping practical vehicle functionality.",
    explore: ["Streamlined body shape", "Reduced frontal area", "Airflow management", "Drag testing"],
  },
  {
    id: "ah-04", track: "automobile", number: "04",
    title: "Vehicle Stability & Comfort on Uneven Roads",
    problem: "Potholes, speed breakers and damaged roads cause repeated shocks and vibrations that affect passenger comfort, stability and component life, and make steering harder.",
    challenge: "Propose a simple, economical and effective solution that reduces vibrations and improves stability, safety and ride comfort of a miniature vehicle on uneven surfaces.",
    explore: ["Suspension design", "Vibration damping", "Balance & stability", "Ride comfort"],
  },
  {
    id: "ah-05", track: "automobile", number: "05",
    title: "Regenerative Braking & Energy Recovery",
    problem: "When a conventional vehicle slows down, much of its kinetic energy is lost as heat in the brakes. Frequent braking in urban traffic repeats the loss.",
    challenge: "Devise an innovative solution or demonstrable model that captures, stores or reuses a portion of the energy normally wasted during braking.",
    explore: ["Kinetic energy capture", "Energy storage", "Reuse of recovered energy", "Urban driving efficiency"],
  },

  // ChargeUp
  {
    id: "cu-01", track: "eee", number: "01",
    title: "One Plug, Ten Rides",
    hook: "Share limited power. Keep every ride charged.",
    problem: "One charging point, ten e-scooters and e-rickshaws, and everyone needs a full battery by morning. First come, first served leaves some riders stranded.",
    challenge: "Design a smart charging system that shares limited power fairly, without overloading the supply.",
    hardware: "Current sensors, relays, RFID tags, a microcontroller.",
    software: "Scheduling logic, rider app or dashboard, solar- or off-peak-aware charging, simulation.",
    approaches: "Fair share, priority by need, queue by app, solar first: pick one or invent your own.",
    safety: "Use low-voltage batteries or LEDs as stand-in vehicles.",
  },
  {
    id: "cu-02", track: "eee", number: "02",
    title: "Cell Rescue",
    hook: "Retired batteries still have a life. Find it.",
    problem: "Used EV and laptop batteries often keep much of their capacity, yet most are thrown away. Which cells are still good, and what can they safely power?",
    challenge: "Build a low-cost way to test and grade used cells, then reuse the best ones safely in a streetlight, power bank or home backup.",
    hardware: "Voltage, current and temperature sensing, a discharge tester, a protection circuit.",
    software: "Health-estimation model, grading dashboard, overheating alerts, circuit simulation.",
    approaches: "Rule-based grading, machine learning, or a pure simulation study all count.",
    safety: "Small, low-voltage cells only, with adult supervision.",
  },
  {
    id: "cu-03", track: "eee", number: "03",
    title: "Watt Detective",
    hook: "Find the energy nobody notices.",
    problem: "Classrooms, shops and homes waste electricity: lights and fans on in empty rooms, devices left on standby. Nobody knows how much, or where.",
    challenge: "Build a low-cost monitor that finds wasted energy, tells people what to switch off or move to sunny hours, and proves the savings.",
    hardware: "ESP32-class board, current sensor, occupancy sensor, smart switch.",
    software: "Waste-detection logic or ML, live dashboard, alerts, solar-hour suggestions.",
    approaches: "Smart plug, whole-room meter, or analytics on recorded data: your call.",
    safety: "Use low-voltage setups or ready, isolated modules. No bare mains wiring.",
  },
  {
    id: "cu-04", track: "eee", number: "04",
    title: "Smart Home, Smarter Energy",
    hook: "Make every room respond intelligently.",
    problem: "At home, lights and fans may keep running when nobody needs them. Different family members also have different comfort and accessibility needs.",
    challenge: "Design an affordable home automation system that senses occupancy or daylight and controls lights, fans or model appliances automatically, while allowing easy manual control.",
    hardware: "Microcontroller, motion and light sensors, low-voltage relay modules, LEDs or small DC fans.",
    software: "Automation rules, timers, room-wise control interface, energy-use estimation.",
    approaches: "Motion-based lighting, daylight-aware control, voice commands, accessibility features: choose a useful combination.",
    safety: "Demonstrate with low-voltage LEDs and DC devices. No exposed household mains wiring.",
  },
  {
    id: "cu-05", track: "eee", number: "05",
    title: "Control From Anywhere",
    hook: "Connect devices. Control them securely.",
    problem: "A pump, classroom light or small appliance may need to be monitored and operated even when its user is elsewhere. But remote commands must be reliable and safe.",
    challenge: "Build an IoT-based system to monitor and switch multiple devices remotely, show their status in real time, and handle lost connectivity or unsafe commands.",
    hardware: "ESP32-class Wi-Fi board, relays or transistor drivers, status sensors, LEDs and low-voltage DC loads.",
    software: "Web or mobile dashboard, MQTT or HTTP messaging, device-status feedback, access control and alerts.",
    approaches: "Remote room control, model irrigation pump, timed switching, local fallback control or usage logging.",
    safety: "Use low-voltage model loads only; include a manual override and a safe default state.",
  },

  // Buildathon
  {
    id: "h27-1a", track: "civil", number: "01",
    title: "Earthquake Early Warning Model",
    hook: "Seconds Save Lives: The Seismic Shield",
    problem: "Fast, harmless P-waves arrive before destructive S-waves. A few seconds of warning can shut off gas lines, stop trains and get people under desks.",
    challenge: "Design and simulate an automated early-warning seismic model that detects early tremor vibrations, calculates signal severity and triggers emergency alerts seconds before the main shockwaves arrive.",
    theme: "Structural Health Monitoring",
    partner: "Mantis Infra Solutions Pvt Ltd",
  },
  {
    id: "h27-1b", track: "civil", number: "02",
    title: "Pothole Detection Vehicle",
    hook: "Road Patrol: AI on Wheels Against Dangerous Streets",
    problem: "Potholes wreck tyres and cause fatal accidents, yet cities rely on slow, manual citizen complaints to find them.",
    challenge: "Build a mini-rover or model vehicle with surface sensors or camera vision that autonomously scans terrain, detects potholes and cracks, and logs their exact locations on a real-time hazard map for maintenance crews.",
    theme: "Structural Health Monitoring",
    partner: "Mantis Infra Solutions Pvt Ltd",
  },
  {
    id: "h27-2a", track: "civil", number: "03",
    title: "Low-Carbon Building and Pavement Blocks",
    challenge: "Develop sustainable building or pavement blocks with the lowest feasible carbon footprint using alternative materials, recycled construction and demolition waste, or industrial by-products. Present the mix design, estimate embodied carbon and run a comparative Life Cycle Assessment (LCA) against conventional blocks.",
    theme: "Environment and Sustainability",
    partner: "MYK Laticrete India Pvt Ltd",
  },
  {
    id: "h27-2b", track: "civil", number: "04",
    title: "Sustainable Sewage Water Treatment",
    challenge: "Develop an innovative, low-cost, energy-efficient sewage treatment solution that enables water reuse for non-potable needs such as landscaping, construction or toilet flushing. Address treatment efficiency, resource recovery, operating costs and environmental sustainability.",
    theme: "Environment and Sustainability",
    partner: "MYK Laticrete India Pvt Ltd",
  },
  {
    id: "h27-3a", track: "civil", number: "05",
    title: "Pacific Fever, Indian Chills",
    hook: "How a warm ocean 15,000 km away decides our rain",
    challenge: "Map sea surface temperature anomalies over the Pacific and compare Karnataka rainfall in El Niño years (1997, 2015, 2023) against normal years. Deliver maps (legend, north arrow, scale bar, team details), charts and tables.",
    theme: "Water Resources and Geospatial Techniques",
    partner: "Space Geo Tech",
    tools: ["NASA Worldview", "Climate Reanalyzer", "QGIS", "LibreOffice Calc"],
    data: ["NOAA CPC Oceanic Niño Index", "NOAA OISST / Coral Reef Watch", "MOSDAC (ISRO)", "IMD Pune rainfall data"],
  },
  {
    id: "h27-3b", track: "civil", number: "06",
    title: "Green Lungs Audit",
    hook: "Calculate the percentage of tree cover in a city and compare it with another city",
    challenge: "Choose a few cities, calculate the percentage of tree cover in each, compare them and track the increase or decrease over the years. Deliver maps (legend, north arrow, scale bar, team details), charts and tables.",
    theme: "Water Resources and Geospatial Techniques",
    partner: "Space Geo Tech",
    tools: ["Copernicus Browser", "VEDAS (ISRO)", "QGIS"],
    data: ["Sentinel-2", "Landsat 8/9 (USGS)", "ESA WorldCover", "Bhuvan LULC (ISRO)", "OpenStreetMap"],
  },
];
