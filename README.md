<div align="center">

# ⚡ Arkadeb Das — Personal Portfolio Website

**Entry-Level Data Analyst & Data Scientist**  
*Next.js 15 App Router • TypeScript • Tailwind CSS v4 • Autonomous Robot Construction Swarm*

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br />

[Explore Portfolio](#-signature-feature-autonomous-robot-construction-swarm) • [Tech Stack](#-technical-stack) • [Quick Start](#-quick-start) • [Verified Data](#-verified-data-integrity) • [Connect](#-contact--connect)

</div>

---

## 📖 Overview

A high-performance personal portfolio website built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS v4**.

Designed with an industrial dark aesthetic (`#09090b`), high-contrast zinc greys, and a singular crimson accent (`#ff3b2f`), the site features a **live autonomous robot cursor construction swarm** that actively plans, wireframes, and materializes sections as they enter the viewport.

All data, metrics, and achievements are **strictly derived from verified academic and commercial experience**—zero placeholder text, zero invented numbers, and zero vanity metrics.

---

## 🤖 Signature Feature: Autonomous Robot Construction Swarm

The interface boots into `build-mode` and is assembled live by a fleet of **6 to 12 autonomous robot cursors**:

| Robot | Signature Color | Role / Specialty |
| :--- | :--- | :--- |
| **Scout** | `#00f0ff` Cyan | Initial viewport detection & boundary reconnaissance |
| **Layout** | `#eab308` Yellow | Structural grid alignments & card positioning |
| **Typeset** | `#10b981` Emerald | Letter-by-letter kinetic text rendering |
| **Motion** | `#f97316` Orange | Cubic-bezier transition curves & pop springs |
| **QA** | `#a855f7` Purple | Integrity checks & boundary verification |
| **Deploy** | `#ff3b2f` Crimson | Final release & activation locks |
| **Copy** | `#38bdf8` Sky | Narrative flow & summary synchronization |
| **Lint** | `#ec4899` Pink | Token validation & font normalization |
| **Index** | `#f59e0b` Amber | Reading-order queue sequencing |
| **Render** | `#3b82f6` Blue | DOM tree composition & hardware acceleration |
| **Palette** | `#14b8a6` Teal | Contrast optimization & gradient maps |
| **Review** | `#84cc16` Lime | Final seal & wireframe dismissal |

### How It Works:
1. **Zero Layout Shift (CLS 0.0)**: Elements are hidden via an inline `<head>` script and CSS `visibility: hidden` so layout geometry is preserved without flash-of-unbuilt-content.
2. **Reading-Order Queue**: Visible DOM targets (`data-build="type"`, `"pop"`, or `"wipe"`) are discovered via a unified `IntersectionObserver` and queued top-to-bottom, left-to-right.
3. **Smooth Glide & Wireframe Drag**: Up to 6 active robots smoothly interpolate towards targets, dragging blueprint wireframe boxes with 4 corner anchors and dimension HUD tags (`[TYPE] 340×24`).
4. **Materialization**:
   - `type`: High-speed typing with blinking insertion cursor `▋`.
   - `pop`: Scale-and-opacity spring pop.
   - `wipe`: Hardware-accelerated clip-path wipe from left to right.
5. **Instant Disposal**: Wireframes immediately dissolve upon task completion; elements already scrolled past materialize instantaneously.

---

## 🎮 Control Dock & Interactive Shortcuts

A bottom floating glass dock grants full manual control over the runtime engine:

| Control | Shortcut | Function |
| :--- | :---: | :--- |
| **Pause / Resume** | <kbd>P</kbd> | Freezes all active robot cursors and timers in place. |
| **Agents ON / OFF** | <kbd>A</kbd> | Toggles autonomous construction. When OFF, all elements render directly (state stored in `localStorage`). |
| **Tour Mode** | <kbd>T</kbd> | Reloads, waits for the hero to assemble, and executes a smooth auto-scroll (ease-in, steady linear, ease-out) for screen recordings. Pressing <kbd>Esc</kbd> or scrolling halts the tour. |

### URL Overrides:
- `?agents=on`: Forces robot swarm animation even if system `prefers-reduced-motion` is active.
- `?agents=off`: Disables cursors and delivers instant static view.
- `?tour=true`: Automatically triggers the cinematic recording auto-scroll.

---

## 🛠️ Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Client Boundaries)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/) (Strict typing, no `any`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Iconography**: [lucide-react](https://lucide.dev/) + hand-crafted SVG brand components
- **Typography** via `next/font/google`:
  - `Anton`: Display typography and giant metallic sheen `PORTFOLIO` hero text
  - `Geist Sans`: High-legibility technical body text
  - `Geist Mono`: HUD labels, metrics, timestamps, and terminal logs
  - `Caveat Brush`: Expressive handwritten greeting line (*"Hello, I'm"*)
- **Image Processing**: OpenCV & PIL GrabCut alpha-matte extraction for studio portrait transparent PNGs

---

## 📊 Verified Data Integrity

Every number, project, and milestone is factual and verifiable:

- **11,000+ Records Queried & Cleaned**: Complex SQL transformation pipelines developed at Webskitters Academy.
- **₹20.96 Cr Retail Volume Analyzed**: Interactive sales analytics dashboard across 10,000 multi-region transactions with ₹21,035 AOV.
- **1,095 IPL Matches Modeled**: 17 tournament seasons transformed into KPI cards, slicers, and match margin dynamics.
- **Academic Performance**: B.Tech in Computer Science & Engineering (CGPA: 8.5) at Amity University Noida.
- **Global Academic Immersion**: Certified Participant in the *Three Continent Program* across:
  - Birkbeck, University of London (United Kingdom)
  - Fairleigh Dickinson University (United States)
- **Hackathon Builder**: Cyber Cup 2.0 (24-Hour Intensive) — Built *Lingua Display*, a multilingual digital display platform.

---

## 📁 Project Architecture

```
portfolio-2/
├── public/
│   ├── headshot.png        # Studio portrait (B&W transparent RGBA)
│   └── resume.pdf          # Official downloadable curriculum vitae
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind v4, metallic sheen & keyframes
│   │   ├── layout.tsx      # Font loaders, metadata, inline head script
│   │   └── page.tsx        # Central orchestration & section sequence
│   ├── components/
│   │   ├── AboutSection.tsx    # Bio, technical matrix & 4 principles
│   │   ├── BootLoader.tsx      # Sci-fi terminal boot sequence
│   │   ├── BrandIcons.tsx      # Precision SVG brand icons (GitHub, LinkedIn)
│   │   ├── BuildEngine.tsx     # Robot cursor swarm & single RAF loop
│   │   ├── ContactSection.tsx  # Direct channels, clipboard copy & CTA
│   │   ├── ControlDock.tsx     # Floating bottom interactive dock
│   │   ├── Hero.tsx            # Full-screen metallic hero & stats
│   │   ├── Navbar.tsx          # Monogram navigation & action pills
│   │   ├── RecordSection.tsx   # Filterable chronological timeline
│   │   ├── StackSection.tsx    # Infinite LTR marquee of certified tools
│   │   └── WorkSection.tsx     # "Work that ships" project cards
│   └── data/
│       └── resume.ts       # Single source of truth for resume data
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies & build scripts
├── postcss.config.mjs      # Tailwind CSS v4 PostCSS plugin
├── tsconfig.json           # Strict TypeScript configuration
└── README.md               # Technical documentation
```

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js `v20.x` or later (tested on Node v24)
- npm or pnpm

### 2. Clone Repository
```bash
git clone https://github.com/Arka0507/debportfolio.git
cd debportfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the next available port) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Name**: Arkadeb Das
- **Role**: Entry-Level Data Analyst & Data Scientist
- **Email**: [arkadeb001@gmail.com](mailto:arkadeb001@gmail.com)
- **LinkedIn**: [linkedin.com/in/arkadeb-das](https://www.linkedin.com/in/arkadeb-das)
- **GitHub**: [github.com/Arka0507](https://github.com/Arka0507)
- **Location**: Based in Noida, Uttar Pradesh, India

---

<div align="center">
<sub>Designed and engineered by Arkadeb Das • Built with Next.js 15 & Tailwind CSS v4</sub>
</div>
