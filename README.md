# Shanto Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Portfolio-Active-00C2A8?style=for-the-badge" alt="Portfolio active" />
</p>

<p align="center">
  <strong>Full-Stack Developer Portfolio</strong>
</p>

<p align="center">
  <a href="https://shanto-portfolio-eight.vercel.app/" target="_blank" rel="noreferrer">🌐 Live Demo</a>
  ·
  <a href="#getting-started">⚙️ Getting Started</a>
  ·
  <a href="#project-structure">📁 Project Structure</a>
</p>

<p align="center">
  A modern, premium, and responsive portfolio built for showcasing projects, skills, and professional identity through a smooth and highly engaging digital experience.
</p>

---

## ✨ About This Project

This portfolio is crafted to represent a polished personal brand with a dark luxury aesthetic, motion-rich storytelling, and conversion-focused sections. It combines strong visual design with clean code architecture to present a professional developer presence online.

### Highlights

- Premium hero section and brand-first layout
- Smooth scroll experience with Lenis
- GSAP-powered animation and motion interactions
- Responsive design optimized for all screen sizes
- Portfolio sections for expertise, projects, and contact
- Contact form integration with Nodemailer
- Modern UI built using Next.js and Tailwind CSS

---

## 🛠️ Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP
- Lenis Smooth Scroll
- Nodemailer
- Lucide Icons
- React Icons

---

## 📁 Project Structure

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
├── package-lock.json
└── .next/
```

---

## 🚀 Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/webdevshanto/shanto-portfolio.git
cd shanto-portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## 🔐 Environment Variables

To enable the contact form, create a `.env.local` file in the root directory and add:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

> For Gmail, use an App Password instead of your normal account password.

---

## 📦 Available Scripts

```bash
npm run dev    # Start the development server
npm run build  # Build the production app
npm run start  # Run the production build
npm run lint   # Run ESLint checks
```

---

## 🌍 Deployment

This project is ready to deploy on modern hosting platforms such as:

- Vercel
- Netlify
- Railway
- Any Node.js-compatible server

For Vercel, it can be deployed directly from the repository with minimal setup.

---

## 📬 Contact

If you'd like to collaborate, connect, or discuss a project, use the contact form on the live website or reach out through your preferred communication channel.

---

<p align="center">
  <i>Built with care, creativity, and a strong focus on modern web experiences.</i>
</p>
