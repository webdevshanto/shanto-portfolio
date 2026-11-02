# Shanto Portfolio

Personal portfolio for Shanto, a full-stack developer. The site introduces my work, services, technical skills, selected projects, and contact options.

**Live site:** [shanto-portfolio-eight.vercel.app](https://shanto-portfolio-eight.vercel.app/)

## Overview

This portfolio is built with Next.js and designed to present a responsive, animated developer profile. Its main sections are:

- **Hero:** Introduction, role, and shortcuts to projects and contact.
- **About:** Profile, background, and contact details.
- **Services:** Web development, full-stack apps, APIs, e-commerce, interface implementation, and maintenance.
- **Skills:** Skills grouped by frontend, backend, authentication, database, and tools.
- **Projects:** A Swiper carousel featuring selected projects, technology tags, and Code/Demo buttons. Add the project URLs in `Projects.js` to enable those buttons.
- **Contact:** A message form delivered through the contact API.

The interface also includes a scrolling skills ticker, responsive navigation, and animated section reveals.

## Motion and Interactions

- Section headings and cards reveal as they enter the viewport, with staggered timing in the Services, Skills, and Projects sections.
- Service and skill cards respond to hover with subtle movement, color, shadow, and icon changes.
- Project cards, technology tags, and action buttons provide hover or press feedback.
- The hero skills ticker scrolls continuously, and the project carousel advances automatically with swipe and arrow navigation on supported screen sizes.
- Lenis provides smooth page scrolling, while the navigation menu animates into view on mobile.

## Tech Stack

- **Framework:** Next.js App Router, React
- **Language:** JavaScript and TypeScript
- **Styling:** Tailwind CSS
- **Animation and scrolling:** Motion, GSAP ScrollTrigger utilities, and Lenis
- **Interactive UI:** Swiper and `react-fast-marquee`
- **Icons:** `react-icons`
- **Contact email:** Nodemailer with Gmail SMTP

## Project Structure

```text
app/
  api/
    contact/
      route.js            # Contact form email endpoint
  component/
    animations/
      h2Animation.js
      sectionAnimation.js
    image/                # Profile and project images
    About.js
    Contact.js
    Footer.js
    Hero.js
    Home.js               # Page sections and their order
    Navbar.js
    Projects.js           # Project data and carousel
    Services.js
    Skills.js
    SkillTicker.js
  globals.css
  layout.tsx              # Metadata, fonts, and global providers
  LenisProvider.js        # Smooth scrolling setup
  page.tsx                # App entry page
public/                   # Static files served from the site root
eslint.config.mjs
next.config.ts
package.json
postcss.config.mjs
tsconfig.json
```

## Requirements

- Node.js 20.9 or later
- npm
- Gmail credentials for the contact form (optional for running the rest of the site)

## Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/webdevshanto/shanto-portfolio.git
cd shanto-portfolio
npm install
```

Create a `.env.local` file in the project root to enable email delivery:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
```

Use a Gmail App Password for `EMAIL_PASS`, not your regular account password. Keep `.env.local` private; environment files are excluded by `.gitignore`.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact API

The contact form sends a `POST` request to `/api/contact`. The route uses Nodemailer and Gmail SMTP, with `EMAIL_USER` and `EMAIL_PASS` read from the server environment. Configure these same variables in your hosting provider to enable the form in production.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build. Run `npm run build` first. |
| `npm run lint` | Run ESLint. |

## Deployment

The app can be deployed to Vercel or another host that supports Next.js. For Vercel, import the repository and use the standard Next.js build settings. Add `EMAIL_USER` and `EMAIL_PASS` to the project's production environment variables if the contact form should send email.

## Updating Content

- Edit the introduction and profile content in `app/component/Hero.js` and `app/component/About.js`.
- Edit service descriptions in `app/component/Services.js`.
- Edit skill groups in `app/component/Skills.js` and ticker items in `app/component/SkillTicker.js`.
- Update project information and links in `app/component/Projects.js`.
- Update contact form presentation in `app/component/Contact.js`.
