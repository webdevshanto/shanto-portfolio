'use client';

import { FaDatabase, FaLaptopCode, FaPaintBrush, FaRocket, FaServer, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    label: "Digital presence",
    title: "Web Design & Development",
    description: "Responsive websites with clear structure, polished interfaces, and smooth interactions. Each page is designed to feel intuitive across phones, tablets, and desktops.",
    icon: FaLaptopCode,
  },
  {
    number: "02",
    label: "Product engineering",
    title: "Full-Stack Web Apps",
    description: "Complete web applications connecting intuitive frontend experiences with reliable server logic. From user-facing features to data flows, every part works together as one product.",
    icon: FaDatabase,
  },
  {
    number: "03",
    label: "Systems & integrations",
    title: "Backend & API Development",
    description: "REST APIs, authentication, and service integrations designed around your product's needs. The backend is organized to support secure data exchange and dependable application features.",
    icon: FaServer,
  },
  {
    number: "04",
    label: "Online commerce",
    title: "E-commerce Development",
    description: "Online stores with product catalogs, cart flows, and practical tools for managing orders. The shopping experience stays simple for customers and easy to navigate on any screen.",
    icon: FaShoppingCart,
  },
  {
    number: "05",
    label: "Interface implementation",
    title: "Figma to Responsive UI",
    description: "Designs translated into responsive interfaces with careful attention to layout and detail. I match the visual direction while making sure the finished pages adapt cleanly to different screen sizes.",
    icon: FaPaintBrush,
  },
  {
    number: "06",
    label: "Continuous improvement",
    title: "Optimization & Maintenance",
    description: "Performance improvements, bug fixes, and updates to keep your website reliable over time. Regular refinements help pages load smoothly and keep existing features working as expected.",
    icon: FaRocket,
  },
];

const Services = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-20 md:pt-25 lg:pt-35">
      <motion.div
        className="mb-8 sm:mb-10 md:mb-16"
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
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">My Services</span>
        </motion.div>

        <motion.h2
          className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What I can build <span className="text-secondary">for you</span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.number}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-[border-color,box-shadow] duration-300 ease-out hover:border-secondary/60 dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-7"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                scale: 1.015,
                boxShadow: "0 18px 34px rgba(13, 36, 38, 0.14)",
                transition: { duration: 0.22, ease: "easeOut" },
              }}
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/15 text-secondary transition-transform duration-300 ease-out group-hover:rotate-[-6deg] group-hover:scale-110">
                  <Icon className="text-xl" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tabular-nums text-secondary">
                  <span className="h-px w-5 bg-secondary/50" />
                  {service.number}
                  <span className="text-gray-400 dark:text-gray-500">/ 06</span>
                </span>
              </div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary/80">
                {service.label}
              </p>
              <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-secondary dark:text-white sm:text-xl">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-secondary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;