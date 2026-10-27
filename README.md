# Shanto Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Status-Portfolio-00C2A8?style=for-the-badge" alt="Portfolio status" />
</p>

<p align="center">
  <strong>Modern, premium, responsive developer portfolio built with Next.js and motion-rich UI.</strong>
</p>

<p align="center">
  <a href="https://nayeemdev-portfolio.vercel.app/">Live Demo</a>
  ·
  <a href="#getting-started">Getting Started</a>
  ·
  <a href="#project-structure">Project Structure</a>
</p>

---

## Overview

This portfolio showcases a personal brand with a sleek dark aesthetic, smooth scrolling interactions, animated sections, and a professional layout for projects, skills, and contact information. It is designed for developers and creatives who want a modern digital presence that feels premium and conversion-focused.

## Highlights

- Premium hero section with strong personal branding
- Motion-heavy UI using GSAP and scroll-based animation
- Responsive layout for desktop, tablet, and mobile
- Skills, experience, and project presentation sections
- Contact form powered by Nodemailer
- Clean modern design system with soft gradients and glass-like visuals

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP
- Lenis smooth scroll
- Nodemailer
- Lucide icons and React Icons

## Project Structure

```bash
portfolio-main/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js
│   ├── component/
│   │   ├── animations/
│   │   ├── Body.js
│   │   ├── Footer.js
│   │   ├── HeroPage.js
│   │   ├── NavBar.js
│   │   └── ...
│   ├── globals.css
│   ├── layout.tsx
│   ├── LenisProvider.js
│   └── page.tsx
├── public/
│   └── Nayeem_Frontend_Developer_CV.pdf
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/webdevshanto/shanto-portfolio.git
cd shanto-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run the app locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

For the contact form to work, add the following environment variables in a `.env.local` file:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

> If you are using Gmail, generate an App Password from your Google account security settings.

## Available Scripts

```bash
npm run dev    # starts local development server
npm run build  # creates production build
npm run start  # runs production build
npm run lint   # runs ESLint checks
```

## Deployment

This project is ready for deployment on platforms like:

- Vercel
- Netlify
- Railway
- Any Node.js-compatible hosting provider

For Vercel, the app can be deployed directly from the repository with zero additional configuration.

## License

This project is available for personal and portfolio use. Please respect the original work and do not reuse the design/assets commercially without permission.

## Contact

If you want to connect or collaborate, reach out through the contact form on the live site or via your preferred social/platform channels.

---

<p align="center">
  <i>Built with passion for clean code, smooth UX, and memorable digital experiences.</i>
</p>
