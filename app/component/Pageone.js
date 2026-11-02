'use client';

import Marquee from "react-fast-marquee"
import { FaReact, FaHtml5, FaGitAlt, FaGithub, FaCss3, FaNodeJs, FaFigma, FaCode, FaServer, FaLock, FaDocker, FaShieldAlt, FaClock } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiTypescript, SiNpm, SiGreensock, SiFramer, SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiPostman, SiRedux, SiBootstrap, SiRedis, SiJsonwebtokens, SiCloudinary, SiNetlify, SiVercel } from "react-icons/si"

const Pageone = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "CSS3", icon: <FaCss3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "React.js", icon: <FaReact className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Redux", icon: <SiRedux className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "GSAP", icon: <SiGreensock className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Motion", icon: <SiFramer className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Express.js", icon: <SiExpress className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "REST API", icon: <FaServer className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Redis", icon: <SiRedis className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Bcrypt", icon: <FaLock className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "OAuth", icon: <FaLock className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Cookie Auth", icon: <FaServer className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Middleware", icon: <FaCode className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "2FA", icon: <FaLock className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Tokens", icon: <SiJsonwebtokens className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Security Auth", icon: <FaShieldAlt className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Rate Limiting", icon: <FaClock className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "GitHub", icon: <FaGithub className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "NPM", icon: <SiNpm className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "VS Code", icon: <FaCode className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Postman", icon: <SiPostman className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Figma", icon: <FaFigma className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Docker", icon: <FaDocker className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Netlify", icon: <SiNetlify className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "Vercel", icon: <SiVercel className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
  ]

  return (
    <div className="w-full py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 bg-secondary overflow-hidden">
      <Marquee speed={60} gradient={false} pauseOnHover={false}>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8 mx-1 sm:mx-2 md:mx-2 lg:mx-3 xl:mx-4">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 bg-primary/20 py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full">
              <span className="text-primary dark:text-primary">{skill.icon}</span>
              <span className="text-primary dark:text-primary font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] whitespace-nowrap uppercase tracking-wide">
                {skill.name}
              </span>
            </div>
            <span className="text-primary dark:text-primary text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px]">✦</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Pageone;