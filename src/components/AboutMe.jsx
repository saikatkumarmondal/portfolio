import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaTools, FaPencilRuler } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const serviceItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const AboutMe = () => {
  const placeholderText =
    "Hi, I’m Saikat Mondal, a MERN Stack Developer passionate about building modern, responsive web applications. Skilled in MongoDB, Express.js, React, and Node.js, I focus on clean code, scalable backends, and intuitive frontends.";

  const serviceDescription =
    "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.";

  const services = [
    { icon: FaPencilRuler, title: "DESIGN", description: serviceDescription },
    {
      icon: FaLaptopCode,
      title: "DEVELOPMENT",
      description: serviceDescription,
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="inline-block border-2 border-black px-10 py-3 mb-10"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold tracking-widest">ABOUT ME</h2>
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto text-gray-600 mb-10 text-sm leading-relaxed"
          variants={itemVariants}
        >
          {placeholderText}
        </motion.p>

        <motion.div
          className="w-20 h-0.5 bg-gray-300 mx-auto transform rotate-1 mb-16"
          variants={itemVariants}
        />

        <div className="flex flex-col lg:flex-row justify-center gap-16 mt-16 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="max-w-xs"
              variants={serviceItemVariants}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              <service.icon className="text-4xl text-gray-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold tracking-wider mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <motion.div
            className="max-w-xs"
            variants={serviceItemVariants}
            transition={{ delay: 0.5 }}
          >
            <FaTools className="text-4xl text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold tracking-wider mb-2">
              MAINTENANCE
            </h3>
            <p className="text-gray-600 text-sm">{serviceDescription}</p>
          </motion.div>
        </div>

        <motion.div
          className="w-20 h-0.5 bg-gray-300 mx-auto transform rotate-1"
          variants={itemVariants}
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
