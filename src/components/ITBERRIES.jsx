import React from "react";
import { motion } from "framer-motion";

const ITBERRIES = () => {
  return (
    <div className="w-full h-auto sm:h-80 bg-black text-white px-4 sm:px-6 py-10 flex flex-col justify-center items-start gap-4">
      <motion.h1
        className="text-2xl sm:text-4xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        IT BERRIES
      </motion.h1>

      <motion.p
        className="text-sm sm:text-lg leading-relaxed text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        I’m a MERN Stack Developer building modern, scalable web applications
        with <br className="hidden sm:block" /> MongoDB, Express.js, React, and
        Node.js. I focus on clean code,
        <br className="hidden sm:block" />
        responsive interfaces, and robust backend solutions that bring ideas to
        <br className="hidden sm:block" /> life. Passionate about solving
        complex problems and creating impactful digital experiences.
      </motion.p>
    </div>
  );
};

export default ITBERRIES;
