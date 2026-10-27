<div align="center">

# Shanto.dev

### A modern portfolio for a full-stack developer

Thoughtfully designed, responsive, and brought to life with smooth motion.

<p>
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
</p>

</div>

---

## About

Shanto.dev is a personal portfolio showcasing selected projects, development skills, and ways to get in touch. It is built with Next.js and React, with a responsive interface, animated sections, and a working email contact endpoint.

## Highlights

- **Responsive layout** designed for mobile, tablet, and desktop
- **About, skills, and project sections** to introduce the developer and their work
- **Project carousel** with links to project repositories and live previews
- **Motion effects** powered by Framer Motion
- **Smooth scrolling** with Lenis, respecting reduced-motion preferences
- **Contact form** that sends messages through Gmail SMTP
- **Dark and light theme styling**

## Built with

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | JavaScript, TypeScript |
| Styling | Tailwind CSS 4 |
| Animation & scrolling | Framer Motion, GSAP, Lenis |
| UI & carousel | Lucide React, React Icons, Swiper, React Fast Marquee |
| Contact email | Nodemailer |

## Getting started

### Requirements

- Node.js 20.9 or later
- npm

### Install and run

```bash
git clone https://github.com/webdevshanto/shanto-portfolio.git
cd shanto-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Configure the contact form

The contact API uses Gmail SMTP. Add your Gmail address and an [App Password](https://support.google.com/accounts/answer/185833) to a `.env.local` file in the project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

Restart the development server after adding the variables. Keep `.env.local` private and never commit real credentials.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
├── api/contact/       # Contact form email endpoint
├── component/         # Portfolio sections and UI components
├── globals.css        # Global styles
├── layout.tsx         # Root layout and metadata
└── page.tsx           # Home page
public/                # Static files
```

## Contact

Have a project in mind? Use the contact form on the portfolio or email [webdevshanto2007@outlook.com](mailto:webdevshanto2007@outlook.com).

---

<div align="center">
  Made with care by Shanto
</div>
