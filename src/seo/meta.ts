import { problemStatements, trackEvents } from "../data/problems";

/** Production origin. Override with SITE_URL at build time (e.g. for a preview deploy). */
export const siteUrl = (process.env.SITE_URL ?? "https://nic.christuniversity.in").replace(/\/+$/, "");

const siteName = "National Innovation Challenge";
export interface PageSeo {
  path: string;
  title: string;
  description: string;
  crumbs: [name: string, path: string][];
}

/** Add a route here and it gets its own title, description, canonical, social tags, JSON-LD and sitemap entry. */
export const pages: PageSeo[] = [
  {
    path: "/",
    title: "National Innovation Challenge | Class 12 Science Hackathon at CHRIST University",
    description:
      "Class 12 Science stream national hackathon: pick AutoHack, ChargeUp or Buildathon, build a working prototype and win up to ₹3 lakh. Hosted by CHRIST University, Bangalore.",
    crumbs: [],
  },
  {
    path: "/problems",
    title: "Problem Statements | AutoHack, ChargeUp, Buildathon | National Innovation Challenge",
    description: `Browse all ${problemStatements.length} problem statements across AutoHack (automotive), ChargeUp (e-mobility, clean energy) and Buildathon (civil, sustainability). Open to Class 12 Science stream students.`,
    crumbs: [["Problem Statements", "/problems"]],
  },
];

const abs = (p: string) => siteUrl + p;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function jsonLd(page: PageSeo) {
  const graph: object[] = [
    {
      "@type": "CollegeOrUniversity",
      "@id": abs("/#organizer"),
      name: "CHRIST (Deemed to be University)",
      url: "https://christuniversity.in",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    },
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: abs("/"),
      name: siteName,
      description: pages[0].description,
      inLanguage: "en-IN",
      publisher: { "@id": abs("/#organizer") },
    },
    {
      "@type": "WebPage",
      "@id": abs(page.path) + "#webpage",
      url: abs(page.path),
      name: page.title,
      description: page.description,
      isPartOf: { "@id": abs("/#website") },
      inLanguage: "en-IN",
    },
  ];
  if (page.crumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: ([["Home", "/"], ...page.crumbs] as [string, string][]).map(([name, p], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: abs(p),
      })),
    });
  }
  if (page.path === "/problems") {
    graph.push({
      "@type": "ItemList",
      name: "Problem statements",
      itemListElement: problemStatements.map((p, i) => {
        const track = trackEvents.find((e) => e.id === p.track);
        return {
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: abs(`/problems#${track ? track.id : ""}`),
        };
      }),
    });
  }
  // Add a schema.org Event (Hackathon) here once start/end dates and venue are confirmed.
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}

export const SEO_START = "<!--seo:start-->";
export const SEO_END = "<!--seo:end-->";

/** The <head> block that differs per page. */
export function headFor(page: PageSeo) {
  const url = abs(page.path);
  return [
    SEO_START,
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${siteName}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<script type="application/ld+json">${jsonLd(page)}</script>`,
    SEO_END,
  ].join("\n    ");
}

export const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${abs("/sitemap.xml")}\n`;

export const sitemapXml = () =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${abs(p.path)}</loc><priority>${p.path === "/" ? "1.0" : "0.8"}</priority></url>`)
    .join("\n")}\n</urlset>\n`;
