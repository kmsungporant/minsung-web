import {
  SiNextdotjs,
  SiCplusplus,
  SiGithubactions,
  SiSass,
  SiMicrosoftazure,
  SiGooglecloud,
  SiMaterialui,
  SiTailwindcss,
  SiJava,
  SiCss3,
  SiLinux,
  SiJavascript,
  SiReact,
  SiPython,
  SiDocker,
  SiHtml5,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const icons: { name: string; icon: ReactNode }[] = [
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <SiReact /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
  { name: "Java", icon: <SiJava /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "Node", icon: <FaNode /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SASS", icon: <SiSass /> },
  { name: "MaterialUI", icon: <SiMaterialui /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Framer-Motion", icon: <MdAnimation /> },
];
export default function Icons() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="grid grid-cols-12"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        {icons.map((icon, i) => (
          <div
            key={i}
            className="m-4 text-5xl text-dark-secondary hover:text-dark-primary dark:text-light-secondary hover:dark:text-light-primary "
          >
            {icon.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
