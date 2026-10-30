# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers filling **frontend developer** roles (React, UI). They skim quickly, often between other candidates, and they need to judge from the site whether Pujitha can build and ship real frontend work.

Secondary (confirmed only as existing site copy): freelance clients. The About page says "open to full-time opportunities and freelance work".

## Product Purpose

A personal portfolio for Ravipati Pujitha: a B.Tech CSE student at VIT-AP University (2023–present) who is a fresher seeking a first full-time frontend role. Success: a recruiter leaves with a clear "frontend developer" read, sees shipped projects, and either sends a message or opens LinkedIn or GitHub.

## Positioning

Frontend developer first, with self-taught UI/UX design skills. Her own projects show she has worked across the stack: React frontends with Node/Express backends, plus one smart-contract project (VerifyOnChain). AI/ML is a secondary interest, not the headline.

Open decision: the Home hero currently says "AI Developer", which conflicts with the confirmed frontend focus. Future work should change it to frontend wording, with her approval.

## Operating Context

- Deployed on Vercel at https://portfolio-pujitharavipati.vercel.app. Personal domain on the GitHub profile: https://pujitharavipati.me.
- Routes: `/` Home, `/about`, `/projects`, `/contact`. There is also a shared Navbar and Footer.
- Recruiters reach the site from a résumé, LinkedIn, or GitHub, on desktop or mobile.

## Capabilities and Constraints

- Stack: React 19 + Vite 8, react-router-dom 7, lucide-react icons, plain CSS per component with tokens in `src/styles/variables.css`. Lint: oxlint.
- Contact form (`src/components/ContactForm.jsx`) currently fakes success. **Decided:** wire it to a real static-host form service. The host is Vercel, so the service needs to work there; Formspree is one that does, Netlify Forms is not.
- `src/pages/Contact.jsx` has a broken `mailto:{{EMAIL_ADDRESS}}`. The displayed address is `ravipatipujitha@gmail.com`, wrapped in literal quote marks.
- Several strings include stray literal quotes: hero name, role, teaser, footer copyright.
- The Home hero has an empty `photo-placeholder`. `src/assets/hero.png` exists but has not been confirmed as her photo.

## Brand Commitments

- Name: Ravipati Pujitha (the site also uses "Pujitha Ravipati" in the `<title>`).
- LinkedIn: https://www.linkedin.com/in/pujitha-ravipati/ · GitHub: https://github.com/PujithaRavipati
- Voice in existing copy: warm, first-person, informal ("let's talk", "Currently obsessed with").
- Dark only, no light/dark toggle (her decision, 2026-10-30). Palette she chose: charcoal #16141A everywhere, with one colour per page: Home coral #FF7A59, Projects mint #5FD6A8, About amber #F2B544, Contact lilac #B9A2FF. This replaces her earlier "no dark look" preference; glowing edges and navy-with-blobs stay ruled out.

## Evidence on Hand

Real projects from GitHub:

- **VerifyOnChain** (confirmed from its live site copy): an academic research project. It is a certificate registry where each certificate's keccak-256 fingerprint lives on Ethereum. Anyone can verify a certificate with no account and no wallet. Names, birth dates and grades are never stored. Three roles: the registrar issues, anyone verifies, the issuing university revokes. Stack: Solidity ^0.8.20 + OpenZeppelin; Express + MongoDB Atlas; React + Vite + ethers v6 + MetaMask. Frontend live at https://verifyonchain-frontend.vercel.app, backend at https://verifyonchain-backend.vercel.app. Repos: `verifyonchain-frontend`, `verifyonchain-backend`, `verifyonchain-contracts`.
- **Task Scheduler** (she called it "just a normal one"; the description comes from its code): a task manager with accounts. Users register and log in (JWT + bcrypt), create and edit tasks with due dates, and track them on a dashboard. Stack: React 18 (CRA), React Router, axios, react-datepicker; Express + MongoDB/Mongoose. Repos: `task-schedular-frontend`, `task-scheduler-backend`, earlier `Task_Scheduler`. No live link.
- `MERNDAY-*` (about 35 repos) and `WT_01`: course/exercise repos. These are not portfolio pieces.

Also on hand: education (VIT-AP B.Tech CSE 2023–present; SR Junior College MPC 2021–2023; KCP Siddhartha Adarsh Residential Public School Class X 2021) and interests, all in `src/pages/About.jsx`.

Absent, and future work must not fabricate them: testimonials, employers, internships, metrics, awards, project descriptions beyond what she confirms. The About page "Achievements" are general claims; keep them as written and do not add to them.

## Product Principles

1. Read as a frontend developer within five seconds. Everything else supports that.
2. Show shipped work with live links rather than adjectives.
3. Every contact path must work: the form sends, the email link opens, the socials resolve.
4. Stay honest about being a fresher: real projects, no padded claims.

## Accessibility & Inclusion

No product-specific requirement was stated. Default to WCAG 2.2 AA. Recruiters on mobile are a real share of visits.
