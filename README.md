# National Innovation Challenge

Website for the National Innovation Challenge, a national hardware innovation hackathon organised by the School of Engineering and Technology, CHRIST (Deemed to be University), in collaboration with C-DAC.

Stack: Vite 8, React 19, TypeScript (strict), plain CSS built on the NIC design tokens, `lucide-react` icons. No backend, no router library, no runtime API calls. The build output is a static site.

## Quick start

Requires Node.js 20.19+ or 22.12+ (Vite 8) and npm.

```bash
npm install
npm run dev          # dev server, http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type check (`tsc -b`), then production build into `dist/` |
| `npm run preview` | Serves `dist/` locally to test the production build |
| `npm run typecheck` | Type check only |
| `npm run lint` | ESLint |
| `npm test` | Vitest (jsdom) |

Before pushing, run `npm run build && npm run lint && npm test`. The build fails on any TypeScript error.

## Pages and routing

There is no router library. `src/App.tsx` reads `window.location.pathname`:

| Path | Page |
|---|---|
| `/` | Home: hero, tracks, prize pool, how it works, impact, support, contact, final call to action |
| `/problems` | Problem statements, grouped by track, each with a full-brief modal |

Any other path renders the home page. Nav links use plain `<a href>` tags, and a hash-scroll effect in `App.tsx` handles anchors such as `/#contact` after the page renders.

Because `/problems` is a real path, the host must serve `index.html` for unknown paths (see Deployment). Without that, opening `/problems` directly or refreshing on it returns a 404.

## Project structure

| Path | Contents |
|---|---|
| `src/App.tsx` | Page selection, hash scrolling |
| `src/main.tsx` | Entry point, imports global CSS |
| `src/components/` | One folder per section: `hero`, `tracks`, `journey`, `impact`, `support`, `contact`, `cta`, `problems`, plus `layout` (navbar, footer), `ui` (button, icon, logo, reveal, section heading), `visuals`, `effects` |
| `src/data/content.ts` | Site copy: nav links, routes, tracks, journey steps, support items, coordinators |
| `src/data/problems.ts` | Problem statements and per-track event details |
| `src/hooks/` | `useReveal` (scroll reveal), `useScrolled` (navbar state) |
| `src/styles/site.css` | Component and layout CSS |
| `tokens/`, `styles/`, `nic.css` | Design tokens (colour, type, spacing, radius, shadow, motion), typography classes, background recipes, base and focus styles |
| `public/images/` | Logos (`christ_logo.png`, `CDAC.svg`) and hero, track and impact imagery |
| `vercel.json` | SPA rewrite for Vercel (ignored by other hosts) |

Design rules, tokens and component specs are in [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md).

## Editing content

Most changes need no component edits.

- **Prize pool:** `prizePool` in `src/data/content.ts` (total and 1st/2nd/3rd amounts). It is the same for every track. It shows as a podium in the home page Prizes section and on each track header on `/problems`, and as a total on each track card. Components are in `src/components/prizes/`.
- **Coordinators:** edit the `coordinators` array in `src/data/content.ts` (role, name, email, phone). A missing field renders "To be announced".
- **Nav links:** `navLinks` in `src/data/content.ts`. Route constants are in `routes` in the same file.
- **Problem statements:** `src/data/problems.ts`. Add only what the organiser documents state; leave unknown fields out.
- **Logos:** replace files in `public/images/`. The C-DAC logo is a single-colour SVG shown white on the dark navbar through a CSS filter (`.logo--cdac` in `src/styles/site.css`). The logo components are in `src/components/ui/Logo.tsx`.

### Opening registration

Registration buttons are currently disabled and read "Registration Coming Soon". They are in `Navbar.tsx` (desktop bar and mobile menu), `HeroSection.tsx` and `FinalCTA.tsx`. To open registration, remove the `disabled` prop on each `Button`, set the label back to "Register your team", and point `routes.register` in `src/data/content.ts` at the registration form.

## Content rules

- No visible event years.
- No references to phases.
- Do not invent competition details. Unknowns stay out until the organisers confirm them.
- Track names shown to visitors are AutoHack, ChargeUp and Buildathon.

## Deployment

The build is a folder of static files: `npm run build` writes it to `dist/`. Any static host works. One requirement applies everywhere: **unknown paths must fall back to `/index.html`** so `/problems` works on direct load and refresh.

The site is served from the domain root. If you host it under a sub-path (for example `example.com/nic/`), set `base: "/nic/"` in `vite.config.ts` and rebuild.

### Any static host (generic)

1. `npm ci`
2. `npm run build`
3. Upload the contents of `dist/` to the web root.
4. Add the SPA fallback described for your server below.

### Netlify or Cloudflare Pages

Build command `npm run build`, publish directory `dist`. Add `public/_redirects` containing:

```
/*    /index.html   200
```

Vite copies `public/` into `dist/`, so the file is picked up on the next build. Set the Node version to 20.19+ or 22.12+ in the project settings.

### Nginx (own server or VPS)

```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/nic;          # contents of dist/
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Hashed build assets can be cached for a year
  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

Reload with `sudo nginx -t && sudo systemctl reload nginx`. Add HTTPS with certbot or your provider's certificate.

### Apache

Enable `mod_rewrite` and put this in `.htaccess` beside `index.html` (or in the vhost):

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Docker

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

Use the Nginx `server` block above as `nginx.conf`, with `root /usr/share/nginx/html;`. Then:

```bash
docker build -t nic-site .
docker run -d -p 8080:80 nic-site
```

### GitHub Pages

GitHub Pages has no rewrite rules, so direct loads of `/problems` would 404. Either use a custom domain with a host that supports rewrites (above), or copy `dist/index.html` to `dist/404.html` after each build so unknown paths load the app. For a project site at `username.github.io/repo/`, also set `base: "/repo/"` in `vite.config.ts`.

### Checking a deployment

1. Open the home page and confirm both logos show in the navbar.
2. Open `/problems` directly in a new tab. It must load, not 404.
3. Refresh on `/problems`. It must still load.
4. Click "Support" in the navbar. It must scroll to the contact section.
5. Narrow the window below 1024px. The registration button must be inside the hamburger menu.

## Accessibility and quality bar

- Visible keyboard focus on every interactive element.
- No horizontal overflow at 320px width and up.
- Reduced-motion preference respected.
- No console errors, no TypeScript or lint errors, successful build.

## Open inputs from organisers

Official NIC logo and tagline, evaluation weights, trophy design, photography consent policy, registration link and dates, social links.
