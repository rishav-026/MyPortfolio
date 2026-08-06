# Rishav Kumar Portfolio

An interactive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed to showcase projects, skills, GitHub activity, and professional background in a polished single-page experience.

---

## Preview

This portfolio includes:

- an animated hero section with rotating role titles
- dark/light theme support
- profile image and resume access
- featured project storytelling
- GitHub activity visualization
- skills with tech logos
- experience, achievements, certificates, and education sections

The UI is inspired by modern portfolio sites and customized with **Rishav Kumar's** content, projects, and links.

---

## Tech Stack

### Core

- **React 19**
- **Vite**
- **Tailwind CSS 4**

### UI / Assets

- **react-icons**
- **Simple Icons CDN**
- Custom SVG illustrations and UI accents

### Project Content

- Local profile image
- Local resume PDF
- GitHub activity components

---

## Features

- Animated rotating headline such as `Software Engineer`, `Fullstack Developer`, and `AI Engineer`
- Responsive layout for desktop and mobile
- Theme toggle with custom color tokens
- Skills section with grouped technologies and visual badges
- Rich project sections with summaries, stacks, highlights, and GitHub links
- GitHub activity section
- Resume download integration
- Dedicated sections for:
  - experience
  - featured projects
  - achievements
  - certificates
  - education

---

## Project Structure

```text
.
├── assets/
│   ├── profile/
│   │   └── photo.jpeg
│   └── Rishav-Kumar-Resume.pdf
├── src/
│   ├── Components/
│   │   ├── GitHubActivitySection.jsx
│   │   ├── GitHubHeatmap.jsx
│   │   ├── HeatmapTooltip.jsx
│   │   ├── StatCard.jsx
│   │   ├── githubConfig.js
│   │   └── githubUtils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```powershell
cmd /c npm install
```

### 2. Start the development server

```powershell
cmd /c npm run dev
```

### 3. Build for production

```powershell
cmd /c npm run build
```

### 4. Preview the production build

```powershell
cmd /c npm run preview
```

---

## Available Scripts

Defined in [package.json](D:/My-Portfolio/package.json):

- `npm run dev`  
  Starts the Vite development server.

- `npm run build`  
  Creates an optimized production build.

- `npm run preview`  
  Serves the production build locally for testing.

---

## Portfolio Content

The site currently includes content around:

- **Rishav Kumar's profile**
- **Resume** in [assets/Rishav-Kumar-Resume.pdf](D:/My-Portfolio/assets/Rishav-Kumar-Resume.pdf)
- **Profile image** in [assets/profile/photo.jpeg](D:/My-Portfolio/assets/profile/photo.jpeg)
- **Project showcases** such as:
  - Vercel Clone
  - LogIntelligence
  - InfraLedger
  - Civic Sim
  - Sarkaar Sarthi
  - other full-stack and AI-driven builds

---

## Customization Guide

### Update portfolio content

Edit [src/App.jsx](D:/My-Portfolio/src/App.jsx) to change:

- hero text
- project data
- social links
- experience
- achievements
- certificates
- education

### Update visual styling

Edit [src/index.css](D:/My-Portfolio/src/index.css) to change:

- color theme tokens
- gradients
- animations
- spacing and visual polish

### Replace assets

- Profile image: [assets/profile/photo.jpeg](D:/My-Portfolio/assets/profile/photo.jpeg)
- Resume PDF: [assets/Rishav-Kumar-Resume.pdf](D:/My-Portfolio/assets/Rishav-Kumar-Resume.pdf)

---

## Components

The project includes reusable GitHub-related UI pieces in [src/Components](D:/My-Portfolio/src/Components):

- `GitHubActivitySection.jsx`
- `GitHubHeatmap.jsx`
- `HeatmapTooltip.jsx`
- `StatCard.jsx`
- `githubConfig.js`
- `githubUtils.js`

These help keep the activity section modular and easier to extend.

---

## Design Goals

This portfolio aims to feel:

- modern
- clean
- visually bold
- developer-focused
- easy to navigate
- strong enough for internships, hiring, and project showcasing

---

## Future Improvements

- add final live deployment link
- add screenshot or GIF previews for major projects
- improve motion polish and micro-interactions
- expand project detail pages further
- connect final social links everywhere
- refine mobile spacing section-by-section

---

## Author

**Rishav Kumar**

- GitHub: [rishav-026](https://github.com/rishav-026)
- LinkedIn: [rishavkumar12](https://www.linkedin.com/in/rishavkumar12/)
- Email: `rishavkumar7034@gmail.com`

---

## License

This project is currently for personal portfolio use unless you decide to add a specific license.
