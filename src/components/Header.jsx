import React, { useEffect, useState } from "react";
import Image1 from "../assets/mine.png";
import Image2 from "../assets/img.png";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ setActiveSection, activeSection }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const profile = {
    name: "Saikat Mondal",
    title: "Full Stack Developer | React | Node.js | MongoDB",
  };

  /* -------- HIDE HEADER ON SCROLL -------- */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative w-full flex flex-col">
      {/* ---------------- MOBILE HEADER ---------------- */}
      <div className="sm:hidden fixed top-0 left-0 w-full h-16 bg-black flex justify-between items-center px-4 z-50">
        <img src={Image2} alt="Logo" className="w-8 h-8" />
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="text-white p-2"
        >
          {drawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------------- MOBILE DRAWER ---------------- */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-black z-50 flex flex-col p-6 shadow-2xl border-r border-gray-700"
            >
              <button
                onClick={() => setDrawerOpen(false)}
                className="self-end mb-4 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X size={28} />
              </button>
              <a
                onClick={() => {
                  setActiveSection("home");
                  setDrawerOpen(false);
                }}
                className={`block text-lg font-semibold ${
                  activeSection === "home"
                    ? "text-blue-400 bg-gray-800"
                    : "text-white"
                } hover:text-gray-300 cursor-pointer mb-4 transition-colors duration-200 px-3 py-2 rounded`}
              >
                Home
              </a>
              <a
                onClick={() => {
                  setActiveSection("about");
                  setDrawerOpen(false);
                }}
                className={`block text-lg font-semibold ${
                  activeSection === "about"
                    ? "text-blue-400 bg-gray-800"
                    : "text-white"
                } hover:text-gray-300 cursor-pointer mb-4 transition-colors duration-200 px-3 py-2 rounded`}
              >
                About
              </a>
              <a
                onClick={() => {
                  setActiveSection("skills");
                  setDrawerOpen(false);
                }}
                className={`block text-lg font-semibold ${
                  activeSection === "skills"
                    ? "text-blue-400 bg-gray-800"
                    : "text-white"
                } hover:text-gray-300 cursor-pointer mb-4 transition-colors duration-200 px-3 py-2 rounded`}
              >
                Skills
              </a>
              <a
                onClick={() => {
                  setActiveSection("projects");
                  setDrawerOpen(false);
                }}
                className={`block text-lg font-semibold ${
                  activeSection === "projects"
                    ? "text-blue-400 bg-gray-800"
                    : "text-white"
                } hover:text-gray-300 cursor-pointer mb-4 transition-colors duration-200 px-3 py-2 rounded`}
              >
                Projects
              </a>
              <button
                onClick={() => {
                  setActiveSection("contact");
                  setDrawerOpen(false);
                }}
                className={`px-4 py-2 rounded-full mt-4 transition-colors duration-200 ${
                  activeSection === "contact"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                } hover:bg-gray-400`}
              >
                Contact Me
              </button>
              <div className="flex gap-4 mt-auto">
                <a href="mailto:mondalsaikatkumar@gmail.com">
                  <Mail className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-200" />
                </a>
                <a
                  href="https://github.com/saikatkumarmondal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saikatkumar421/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-200" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setDrawerOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      {/* ---------------- DESKTOP HEADER ---------------- */}
      <div
        className={`hidden sm:flex fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-transform duration-300 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <img src={Image2} alt="Logo" className="w-10 h-10" />

        <div className="ml-auto flex items-center gap-8 text-white">
          {["home", "about", "skills", "projects"].map((item) => (
            <span
              key={item}
              onClick={() => setActiveSection(item)}
              className="cursor-pointer hover:text-gray-300"
            >
              {item.toUpperCase()}
            </span>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full">
            CONTACT ME
          </button>
        </div>
      </div>

      {/* ---------------- MOBILE HOME (GAP FIXED) ---------------- */}
      {activeSection === "home" && (
        <main className="sm:hidden w-full h-auto pt-16 bg-black">
          {/* IMAGE */}
          <div className="w-full h-auto flex justify-center items-end">
            <img
              src={Image1}
              alt="Profile"
              className="w-[80%] max-w-xs object-cover"
            />
          </div>

          {/* INFO CARD */}
          <div className="bg-gray-800 px-6 py-10 -mt-12 text-white">
            <p className="text-sm mt-2">Hi, I am</p>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-300 text-sm mt-1">{profile.title}</p>

            <div className="flex gap-4 mt-6">
              <Mail />
              <Github />
              <Linkedin />
            </div>
          </div>
        </main>
      )}

      {/* ---------------- DESKTOP HOME ---------------- */}
      {activeSection === "home" && (
        <div className="hidden sm:flex relative w-full h-screen">
          <div
            className="absolute top-0 left-0 h-full w-full bg-gray-200 z-10"
            style={{
              clipPath: "polygon(0 0, 53% 0, 35% 100%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-black z-0" />

          <div className="relative z-20 flex w-full max-w-7xl mx-auto h-full">
            <div className="w-1/2 flex flex-col justify-center px-12">
              <p className="text-lg text-black">Hi, I am</p>
              <h1 className="text-6xl font-bold text-black">Saikat Mondal</h1>
              <p className="text-gray-500 mt-2">
                Full Stack Developer | React | Node.js | MongoDB
              </p>
            </div>

            <div className="absolute right-0 bottom-0">
              <img src={Image1} alt="Profile" className="w-[420px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
