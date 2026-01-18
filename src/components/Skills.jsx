import React from "react";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSpringboot,
  SiReact,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; // FIXED JAVA ICON
import { TbBrandReactNative } from "react-icons/tb"; // FIXED REACT NATIVE ICON

// Animation variants for Framer Motion
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const skillIconVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

const Skills = () => {
  const currentSkills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "TAILWIND", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "JAVASCRIPT", icon: SiJavascript, color: "text-yellow-500" },
    { name: "JAVA", icon: FaJava, color: "text-red-600" }, // FIXED
    { name: "NODEJS", icon: SiNodedotjs, color: "text-green-600" },
    { name: "EXPRESSJS", icon: SiExpress, color: "text-gray-800" },
    { name: "MONGODB", icon: SiMongodb, color: "text-green-700" },
    { name: "SPRING BOOT", icon: SiSpringboot, color: "text-green-500" },
    { name: "REACTJS", icon: SiReact, color: "text-blue-400" },
  ];

  const learningSkills = [
    {
      name: "REACT NATIVE",
      icon: TbBrandReactNative, // FIXED
      color: "text-cyan-400",
    },
  ];

  const renderSkillSet = (title, skills, delayOffset = 0) => (
    <div className="mb-16 mt-20">
      <motion.h3
        className="text-lg sm:text-xl font-bold text-gray-800 text-left mb-8 pl-4 sm:pl-0"
        variants={itemVariants}
      >
        {title}:
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 cursor-pointer transition-transform hover:scale-110"
            variants={skillIconVariants}
            transition={{ delay: delayOffset + index * 0.05 }}
          >
            <skill.icon
              className={`text-5xl sm:text-6xl ${skill.color} mb-2`}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    /* Added mt-20 to the root div for mobile devices */
    <div className="bg-gray-100 py-10 sm:py-16 px-4 sm:px-6 mt-20 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* SKILLS Title Box */}
        <motion.div
          className="inline-block border-2 border-black px-10 py-3 mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold tracking-widest">SKILLS</h2>
        </motion.div>

        {/* USING NOW */}
        {renderSkillSet("USING NOW", currentSkills, 0.2)}

        {/* LEARNING */}
        {renderSkillSet("LEARNING", learningSkills, 0.4)}
      </motion.div>
    </div>
  );
};

export default Skills;
