'use client';

import { FaReact, FaHtml5, FaGitAlt, FaGithub, FaCss3, FaNodeJs, FaFigma, FaDocker, FaCode, FaServer, FaLock } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiTypescript, SiSass, SiNpm, SiGreensock, SiFramer, SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiVercel, SiPostman, SiRedux, SiBootstrap, SiRedis, SiJsonwebtokens, SiCloudinary, SiNetlify } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Pagethree = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-500" />, color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: <FaCss3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-500" />, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", icon: <SiJavascript className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-yellow-500" />, color: "from-yellow-400 to-yellow-600" },
        { name: "React.js", icon: <FaReact className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-blue-500" />, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", icon: <SiNextdotjs className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-white" />, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-cyan-500" />, color: "from-cyan-400 to-blue-500" },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-violet-500" />, color: "from-violet-500 to-indigo-600" },
        { name: "Redux", icon: <SiRedux className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-purple-500" />, color: "from-purple-500 to-violet-600" },
        { name: "Sass & Pug", icon: <SiSass className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-500" />, color: "from-green-400 to-green-600" },
        { name: "GSAP", icon: <SiGreensock className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-500" />, color: "from-lime-400 to-green-600" },
        { name: "Motion", icon: <SiFramer className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-purple-500" />, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-500" />, color: "from-green-500 to-lime-500" },
        { name: "Express.js", icon: <SiExpress className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-gray-600" />, color: "from-gray-500 to-gray-800" },
        { name: "Typescript", icon: <SiTypescript className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-600" />, color: "from-green-500 to-green-700" },
        { name: "REST API", icon: <FaServer className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-cyan-500" />, color: "from-cyan-500 to-blue-600" },
        { name: "Redis", icon: <SiRedis className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-red-600" />, color: "from-red-500 to-rose-700" },
        { name: "JWT", icon: <SiJsonwebtokens className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-red-500" />, color: "from-red-500 to-orange-500" },
        { name: "Bcrypt", icon: <FaLock className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-amber-500" />, color: "from-amber-500 to-yellow-600" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-600" />, color: "from-green-500 to-emerald-700" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-blue-500" />, color: "from-blue-400 to-indigo-600" },
        { name: "Firebase", icon: <SiFirebase className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-yellow-500" />, color: "from-yellow-400 to-orange-500" },
        { name: "Cloudinary", icon: <SiCloudinary className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-blue-500" />, color: "from-blue-500 to-cyan-500" },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-600" />, color: "from-orange-500 to-red-600" },
        { name: "GitHub", icon: <FaGithub className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-gray-800 dark:text-white" />, color: "from-gray-600 to-gray-900" },
        { name: "NPM", icon: <SiNpm className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-red-600" />, color: "from-red-500 to-red-700" },
        { name: "VS Code", icon: <FaCode className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-blue-500" />, color: "from-blue-500 to-cyan-500" },
        { name: "Postman", icon: <SiPostman className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-500" />, color: "from-orange-400 to-red-500" },
        { name: "Figma", icon: <FaFigma className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-pink-500" />, color: "from-pink-500 to-violet-500" },
        { name: "Netlify", icon: <SiNetlify className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-cyan-500" />, color: "from-cyan-500 to-blue-500" },
        { name: "Vercel", icon: <SiVercel className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-gray-800" />, color: "from-gray-700 to-gray-900" },
      ],
    },
  ]

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto pt-20 md:pt-25 lg:pt-35">
      <motion.div
        className="text-left mb-8 sm:mb-10 md:mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-1 md:gap-2 bg-secondary/20 py-1.5 px-2.5 md:py-2 md:px-4 rounded-full mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
          <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">My Skills</span>
        </motion.div>

        <motion.h2
          className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Design, develop, deliver: my <span className="text-secondary">essential gear</span>
        </motion.h2>
      </motion.div>

      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <div className="mb-4 sm:mb-5 md:mb-6 flex items-center gap-3 sm:gap-4 md:gap-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-200 dark:via-gray-600 dark:to-transparent" />
              <h3 className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.2em] text-secondary bg-secondary/5 dark:bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20 shadow-sm">
                {group.title}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600 dark:to-transparent" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={`${group.title}-${skill.name}`}
                  className="group relative bg-white dark:bg-gray-800 p-2 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary overflow-hidden"
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: (groupIndex + 1) * 0.08 + index * 0.05, type: "spring", stiffness: 90, damping: 14 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex items-center gap-1.5 md:gap-3 lg:gap-4">
                    <motion.div
                      className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-15 xl:h-15 2xl:w-16 2xl:h-16 bg-linear-to-br from-secondary/20 to-primary/20 rounded-md sm:rounded-lg md:rounded-1xl lg:rounded-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pagethree;

