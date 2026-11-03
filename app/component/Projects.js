'use client';

import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import portfolioPreview from "./image/portfolio.png"
import landingPagePreview from "./image/landing_page.png"
import 'swiper/css'
import 'swiper/css/pagination'

const Projects = () => {
  const swiperRef = useRef(null)

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS. Features smooth animations and responsive design.",
      tech: ["React", "Tailwind", "Gsap", "Motion"],
      image: portfolioPreview,
      github: "https://github.com/webdevshanto/shanto-portfolio",
      live: "https://shanto-portfolio-dev.vercel.app/"
    },
    {
      title: "Genesis Landing Page",
      description: "A modern landing page converted from a design into a live website. Focused on clean layout, smooth sections, and visual consistency.",
      tech: ["React", "CSS", "Tailwind"],
      github: "",
      live: ""
    },
    {
      title: "Business Landing Page",
      description: "A professional landing page built from Figma design using React and Tailwind CSS, focused on responsiveness and modern layout.",
      tech: ["React", "CSS", "Tailwind"],
      image: landingPagePreview,
      github: "https://github.com/webdevshanto/modern-business-landing-page",
      live: "https://modern-business-landing-page-gamma-tan.vercel.app/"
    },
    {
      title: "E-commerce Shop",
      description: "A fully functional online store built with React and Tailwind CSS, featuring user authentication, cart management, address handling, and API integration.",
      tech: ["React", "API", "Router", "State management"],
      github: "https://github.com/developernayeemx/SPRWFORGE_ONLINE_SHOPPING_PROJECT",
      live: "https://sprwforge-online-shopping-project.vercel.app/"
    },
    {
      title: "Trading Landing Page",
      description: "A fully responsive landing page coded from Figma using Next.js and Tailwind CSS, designed for trading businesses.",
      tech: ["Next.js", "Typescript", "CSS", "Tailwind"],
      github: "https://github.com/developernayeemx/trading_landing_page",
      live: "https://trading-landing-page-one.vercel.app/"
    },
    {
      title: "Evogym Application",
      description: "A gym application website built with React and Tailwind CSS, allowing users to apply and register seamlessly.",
      tech: ["React", "CSS", "Tailwind"],
      github: "https://github.com/developernayeemx/EVOGYM_APPLICATION_WEBSITE",
      live: "https://evogym-application-website.vercel.app/"
    },
    {
      title: "Flavor Finder Website",
      description: "A recipe website built with React and Tailwind CSS, featuring category filters and video tutorials for creating a variety of dishes.",
      tech: ["React", "Router", "API", "Tailwind"],
      github: "https://github.com/developernayeemx/FLAVORFINDER_UI_WEBSITE",
      live: "https://flavorfinder-ui-website-crf1.vercel.app/"
    },
    {
      title: "Movies Website",
      description: "A dynamic entertainment platform built with React and Tailwind CSS, displaying API-driven data for movies and TV shows, including Now Playing, and Popular sections.",
      tech: ["React", "API", "Typescript", "Tailwind"],
      github: "https://github.com/developernayeemx/MOVIES_WEBSITE_PROJECT",
      live: "https://movies-website-project-seven.vercel.app/"
    },
    {
      title: "Foods Website",
      description: "A full-featured food ordering platform, including search, cart, user authentication, order confirmation, and detailed order management.",
      tech: ["React", "Firebase", "API", "Tailwind"],
      github: "https://github.com/developernayeemx/FOOD_DELIVERY_WEBSITE_PROJECT",
      live: "https://food-delivery-website-07.netlify.app/"
    },
    {
      title: "FoxAI Landing Page",
      description: "A fully responsive landing page coded from Figma using Next.js and Tailwind CSS, designed with modern layouts and smooth user experience.",
      tech: ["Next.js", "Typescript", "CSS", "Tailwind"],
      github: "https://github.com/developernayeemx/foxai",
      live: "https://e-eight-market.vercel.app/"
    },
    {
      title: "E-Eight-Market Dashboard",
      description: "A modern, fully responsive trading dashboard built from a Figma design using Next.js, TypeScript, Tailwind CSS, and GSAP. Features interactive charts, account analytics, performance metrics, and a clean dark-themed UI with smooth animations.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
      github: "https://github.com/developernayeemx/eEightMarket",
      live: "https://e-eight-market.vercel.app/"
    },
    {
      title: "Bester Landing Page",
      description: "A modern, fully responsive SaaS landing page developed from a Figma design using React, Vite, and Tailwind CSS. Features a clean UI, pixel-perfect implementation, reusable components, and optimized performance across all devices.",
      tech: ["React.js", "Vite", "Tailwind CSS"],
      github: "https://github.com/developernayeemx/bester",
      live: "https://bester-alpha.vercel.app/"
    },
    {
      title: "ZOG Dashboard",
      description: "A modern and fully responsive dashboard built from a Figma design using React, Vite, Tailwind CSS, and GSAP. Features a clean admin interface, order management, user listings, sidebar navigation, and smooth animations for an intuitive user experience.",
      tech: ["React.js", "Tailwind CSS", "GSAP", "React Router"],
      github: "https://github.com/developernayeemx/zog",
      live: "https://zog-ruddy.vercel.app/"
    },
    {
      title: "Cryptex Landing Page",
      description: "A modern Web3 landing page built from a Figma design using React, Vite, Tailwind CSS, GSAP, and Lenis. Features pixel-perfect implementation, responsive layouts, smooth scrolling, engaging animations, and a clean user experience.",
      tech: ["React.js", "Tailwind CSS", "GSAP", "Lenis"],
      github: "https://github.com/developernayeemx/cryptex",
      live: "https://cryptex-six.vercel.app/"
    }
  ].slice(0, 3)

  return (
    <section className="w-full max-w-7xl mx-auto pt-20 md:pt-25 lg:pt-35">
      <motion.div
        className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-1 md:gap-2 bg-secondary/20 py-1.5 px-2.5 md:py-2 md:px-4 rounded-full mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="w-1 h-1 md:w-2 md:h-2 bg-secondary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">My Projects</span>
        </motion.div>

        <motion.h2
          className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight mb-2 md:mb-3 lg:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing my <span className="text-secondary">creative work</span>
        </motion.h2>
        <motion.p
          className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-gray-600 dark:text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Projects I&apos;ve built while learning web development
        </motion.p>
      </motion.div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="projects-swiper pb-12!"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className="h-auto">
            <motion.div
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 hover:border-secondary hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-7"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-xs font-bold text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              </div>
              {project.image && (
                <div className="relative mb-5 aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] dark:text-gray-400 mb-2 sm:mb-3 md:mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-secondary/20 text-secondary text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] py-1 px-2 md:py-1.5 md:px-3 rounded-full font-semibold"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(174, 255, 114, 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      if (!project.github) event.preventDefault()
                    }}
                    className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(13, 36, 38, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub aria-hidden="true" /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      if (!project.live) event.preventDefault()
                    }}
                    className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(174, 255, 114, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/30 bg-primary/90 text-secondary shadow-lg transition duration-200 hover:scale-105 hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:left-3 sm:h-11 sm:w-11 lg:hidden"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/30 bg-primary/90 text-secondary shadow-lg transition duration-200 hover:scale-105 hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:right-3 sm:h-11 sm:w-11 lg:hidden"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
