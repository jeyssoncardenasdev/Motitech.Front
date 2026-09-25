# Motitech 1.0.0

Personal portfolio of **Jeysson Cárdenas**, senior software engineer and AI engineer. The site presents backend and cloud work: APIs, microservices, SQL Server, Azure, and AWS, with support and maintenance of legacy systems. The domains are airlines, mortgage loan origination, and insurance.

The interface is available in **English** and **Spanish**. The visitor's choice is stored in the browser. Documentation in this repository is English only. Release notes are in `CHANGELOG.md`.

## Stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Vitest and Testing Library

Requires **Node.js 18 or newer**.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run test
npm run preview
```

The dev server prints a local URL, usually `http://localhost:5173`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | Profile, experience, and certifications |
| `/hire` | How freelance work is scoped and paid |
| `/works` | Airlines, mortgage origination, and insurance |
| `/contact` | Contact form |
| `/terms` | Terms and conditions |
| `/privacy-policy` | Privacy policy |

`?lang=en` or `?lang=es` selects the interface language. Any other value is ignored.

## Contact delivery

The contact form posts to Formspree at `https://formspree.io/f/xvgagrlg` after the visitor accepts the working method and the terms. Messages are forwarded to the portfolio inbox. Each attempt is recorded in the browser console as `[motitech] contact delivery` and in `sessionStorage` under `motitech-delivery-log`. The log stores time, HTTP status, and the service result. It does not store the visitor's name, email, or message.

## Project layout

```
src/
  i18n/            # English and Spanish interface copy, shared types
  content/         # Logos, delivery, and public profile links
  components/      # Pages and sections
```

Interface copy for both languages lives in `src/i18n/en.ts` and `src/i18n/es.ts` and must match `src/i18n/types.ts`.

Each route sets its own title and description for search engines and link previews. `public/robots.txt` allows crawling. A Person record in `index.html` names the profile, LinkedIn, and GitHub. A share image still needs a public site address; add `og:image` when the site is published.

"Last updated" labels and the footer year are taken from the clock. Employment dates and certification dates are historical and stay as recorded.

Client names are omitted on purpose. The project pages describe domains and the kind of systems delivered, not confidential engagements.

## Copyright

© Jeysson Cárdenas. All rights reserved.

The source code, the written content, and the personal information in this repository belong to Jeysson Cárdenas. That includes the profile, the work descriptions, and the contact details published here. None of it may be copied, republished, or reused without his permission.

The public site states the same reservation and notes that the interface was built with the help of AI.

## Production headers

The production build adds a content security policy. Scripts are limited to this site. The contact form may call `https://formspree.io` only. When the site is published, the host should also send `Strict-Transport-Security` and `Content-Security-Policy` as HTTP headers.
