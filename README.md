# Shanto | Full-Stack Developer

**From the first sketch to the last API call, I build web experiences that feel considered and work end to end.**

[Visit the live portfolio](https://shanto-portfolio-eight.vercel.app/)

This is my personal portfolio: part introduction, part workbench. It brings together the interfaces I build, the systems behind them, and a few selected projects that show how the pieces come together.

## The Journey

- **Meet Shanto:** A short introduction, background, and ways to get in touch.
- **Explore services:** Websites, full-stack products, APIs, e-commerce, responsive UI, and ongoing improvements.
- **Browse the toolkit:** Frontend, backend, authentication, database, and development tools in one grouped skills section.
- **See selected work:** A project carousel with concise descriptions, stack details, and Code/Demo actions. Add project URLs in `app/component/Projects.js` to activate those actions.
- **Start a conversation:** A contact form backed by a server-side email endpoint.

## Motion, With a Purpose

Movement helps guide attention rather than compete with the content. Headings and cards reveal as they enter view; service and skill cards respond with small shifts, color, and icon details; buttons provide hover and press feedback. A continuous skills ticker and autoplaying project carousel add motion between sections, while Lenis smooths page scrolling. The mobile navigation also animates into view.

## Built With

| Area | Tools |
| --- | --- |
| App | Next.js App Router, React |
| Languages | JavaScript, TypeScript |
| Styling | Tailwind CSS |
| Motion and scroll | Motion, GSAP ScrollTrigger utilities, Lenis |
| Carousel and ticker | Swiper, `react-fast-marquee` |
| Icons | `react-icons` |
| Contact email | Nodemailer, Gmail SMTP |

## Get It Running

**You’ll need:** Node.js 20.9 or later and npm. Email credentials are optional unless you want the contact form to send messages.

```bash
git clone https://github.com/webdevshanto/shanto-portfolio.git
cd shanto-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Enable Contact Email

Create `.env.local` in the project root:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
```

Use a Gmail App Password, not your regular password. Environment files are ignored by Git; keep these values private. The contact form sends a `POST` request to `/api/contact`, where Nodemailer uses Gmail SMTP. Set the same variables in your hosting provider to enable email in production.

## Useful Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Creates the production build. |
| `npm run start` | Serves the production build. |
| `npm run lint` | Runs ESLint. |

## Where to Make Changes

| Content | File |
| --- | --- |
| Page composition and section order | `app/component/Home.js` |
| Hero and about content | `app/component/Hero.js`, `app/component/About.js` |
| Service descriptions | `app/component/Services.js` |
| Skill groups and ticker | `app/component/Skills.js`, `app/component/SkillTicker.js` |
| Project cards and URLs | `app/component/Projects.js` |
| Contact form | `app/component/Contact.js` |
| Global appearance | `app/globals.css` |

## Launch

The portfolio is deployed on Vercel and can be deployed to another Next.js-compatible host. For production email, configure `EMAIL_USER` and `EMAIL_PASS` in the host’s environment settings before deploying.
