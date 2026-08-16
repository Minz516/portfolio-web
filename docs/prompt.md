# Build Task: Tran Hoang Minh — Personal Portfolio Website

You are building a complete, production-ready personal portfolio website from scratch. Work end-to-end: scaffold the project, write all code, and leave it in a runnable state (`npm run dev` works with no errors). Do not stop to ask for confirmation on implementation details — make reasonable decisions and document them in a short `NOTES.md` at the end.

---

## 1. Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Deployment target**: Vercel (structure the project so it deploys with zero config)
- **Fonts**: use `next/font` (no external font CDN calls)

---

## 2. Design Direction

Theme: **futuristic / immersive tech**, reflecting the person's focus on AR/VR and immersive technologies. This should NOT look like a generic AI-generated template. Specifically avoid: warm cream background with terracotta accent, plain near-black background with a single neon accent and nothing else, and generic centered hero with big number + small label + gradient blob.

Instead, design around these choices:

- **Typography**: a distinctive display face for the hero/headings (something geometric or technical, e.g. Space Grotesk, Sora, or similar via `next/font/google`) paired with a clean readable body face (e.g. Inter). Don't just use one font everywhere.
- **Signature element**: pick ONE memorable visual motif tied to AR/VR/immersive tech — e.g. a subtle animated 3D-ish grid/mesh in the hero, a scan-line or depth-layer effect on project cards, or a cursor-reactive parallax layer. Use it deliberately, once, well — not scattered everywhere.
- **Motion**: scroll-triggered reveals for each section (fade + slight rise), hover micro-interactions on project cards and buttons, and a subtle page-load sequence for the hero. Respect `prefers-reduced-motion`.
- **Layout**: single-page scroll site with a fixed/sticky minimal nav (section links + smooth scroll). Section order below.
- Fully responsive down to mobile. Visible keyboard focus states on all interactive elements.

Before writing code, briefly plan the color tokens, type scale, and signature element, then build to that plan.

---

## 3. Site Structure (single page, scroll sections)

1. **Hero**
2. **About**
3. **Skills**
4. **Projects**
5. **Honors & Awards**
6. **Contact / Footer**

---

## 4. Content (use exactly this information — do not invent facts)

### Hero
- Name: **Tran Hoang Minh**
- Role/tagline: Software Engineering Student @ RMIT University
- Short hook line derived from this summary (rewrite concisely, don't paste verbatim):
  > Believes technology is the catalyst for turning the impossible into reality. Building a strong foundation in OOP and algorithms, with a long-term goal of researching AR/VR and immersive technologies that bridge virtual and physical experience.
- CTA buttons: "View Projects" (scrolls to Projects), "Contact Me" (scrolls to Contact)
- Social links: GitHub (github.com/Minz516), LinkedIn (linkedin.com/in/hoang-minh-897487307), Email (hoangminhthbh@gmail.com)

### About
- Education: **RMIT University** — Bachelor of Software Engineering, GPA 3.3/4.0, Oct 2024 – Oct 2028 (Expected), Ho Chi Minh City, Vietnam
- Languages: English (IELTS 6.5 Overall), Vietnamese (Native)
- Location: Ho Chi Minh City, Vietnam
- Weave in the long-term vision (AR/VR, immersive tech) from the summary.

### Skills (group into categories, use icon chips or a grid — not a boring bullet list)
- **Languages**: Python, Java, C/C++, HTML, CSS, JavaScript
- **Frameworks & Libraries**: React, Supabase, Tailwind, Bootstrap
- **Backend/Deployment**: WebSocket, FastAPI, REST API
- **Databases**: PostgreSQL, MongoDB
- **Tools**: Git, VS Code, Excel, Word, PowerPoint
- **Soft Skills**: Critical Thinking, Problem Solving, Algorithm Solving, Team Collaboration, Time Management, Project Leadership

### Projects (project cards — image/visual placeholder, title, role, date, description, tech tags, link)

1. **EventX — Event Management Application**
   - Role: Backend Specialist
   - Date: Dec 2025
   - Link: GitHub repo (use placeholder `#` if no URL given — flag this in NOTES.md)
   - Description: End-to-end event platform supporting 4 user types (system admins, event organizers, presenters, attendees). Backend built with PostgreSQL, Java, JPA. Includes automated batch ticket generation, real-time registration with QR code check-ins, automated email notifications, and an analytics suite for event health, revenue, and attendee distribution.
   - Result: Achieved High Distinction (81/100)
   - Tags: Java, PostgreSQL, JPA

2. **Railway Management System**
   - Role: Database & Application Developer
   - Date: Dec 2025
   - Link: Video (placeholder `#`, flag in NOTES.md)
   - Description: Relational database architected from scratch with sample data via Oracle APEX. End-to-end passenger booking flow with real-time trip search, dynamic visual seat mapper, instant booking history. Admin suite with real-time fleet monitor (Lat/Long tracking), interactive dashboards for revenue/trip performance, QR-code ticket generation.
   - Result: Highest score in the course (80/100)
   - Tags: Oracle APEX, SQL, Database Design

3. **FlowGuard — Flood Early Warning Platform**
   - Role: Lead Developer
   - Date: 2025
   - Link: GitHub repo (placeholder `#`, flag in NOTES.md)
   - Description: Real-time flood early-warning platform integrating IoT sensors, weather APIs, and tidal data.
   - Result: 🏆 1st place among 100+ teams nationwide
   - Tags: Next.js, Python, Supabase

### Honors & Awards (timeline or badge-style layout)
- **RMIT Hack-A-Venture 2025 — Champion** (2025): Developed practical solutions addressing UN SDGs 6, 11, 12, and 13 for environmental conservation.
- **Naver AI Hackathon 2025 — Top 10%** (2025): Built AI-driven applications to streamline daily tasks and planning, in a talent-acquisition hackathon.
- **IC3 Spark Competition 2016 — Consolation Award #99** (2016): International Certiport certification for foundational computing skills.

### Contact / Footer
- Email: hoangminhthbh@gmail.com
- Phone: (+84) 981-197-605
- GitHub: github.com/Minz516
- LinkedIn: linkedin.com/in/hoang-minh-897487307
- Location: Ho Chi Minh City, Vietnam
- Simple contact section (mailto link is fine — no backend form needed unless you want to add one with a static handler)

---

## 5. Technical Requirements

- Semantic HTML, proper heading hierarchy
- SEO: metadata (title, description, OG tags) in `layout.tsx`
- Optimized images via `next/image` (use placeholders/gradients where no real project screenshots exist — flag this in NOTES.md)
- Lighthouse-friendly: no layout shift, lazy-load below-the-fold content
- Code comments in English
- Clean folder structure: `/components`, `/app`, `/lib` or `/data` (put the content above into a typed data file, e.g. `data/projects.ts`, `data/skills.ts`, so content is separate from UI)

---

## 6. Deliverables

1. Fully working Next.js project
2. `NOTES.md` listing: design decisions made, any placeholder content/links that need the user to fill in real URLs, and suggested next steps (e.g. add real project screenshots, connect a contact form backend, add a resume PDF download)
3. Brief instructions in `README.md` for running locally and deploying to Vercel

---

## 7. What NOT to do

- Don't fabricate work experience, dates, or scores not present in the CV data above
- Don't use a generic AI-template look (see Design Direction section)
- Don't hardcode content directly into JSX — keep it in data files
- Don't skip mobile responsiveness or accessibility
