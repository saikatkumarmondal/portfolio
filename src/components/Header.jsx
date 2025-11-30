import React, { useState } from "react";
import Image1 from "../assets/mine.png";
import Image2 from "../assets/img.png";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"; // Placeholder image path

const Header = () => {
  const [open, setOpen] = useState(false);

  const profile = {
    name: "Saikat Mondal",
    title: "Full Stack Developer | React | Node.js | MongoDB",
    imageUrl: "../assets/mine.png",
  };

  const placeholderImage = (text) =>
    `https://placehold.co/40x40/000000/FFFFFF/png?text=${text}`;

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* ---------------- MOBILE HEADER (Fixed Top) ---------------- */}
      <div className="sm:hidden w-full h-16 bg-black flex justify-between items-center px-4 z-50 fixed top-0 left-0 shadow-lg">
        <h1 className="text-white w-10 h-10 font-extrabold text-2xl tracking-widest">
          <img src={Image2} alt="Logo" />
        </h1>

        <button onClick={() => setOpen(!open)} className="text-white p-2">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-sm text-white p-6 space-y-4 z-40 shadow-xl transition-opacity duration-300">
          <a
            href="#about"
            className="block text-lg font-medium hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="block text-lg font-medium hover:text-gray-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-lg font-medium hover:text-gray-300"
          >
            Projects
          </a>

          <div className="flex gap-4 pt-4 border-t border-gray-700">
            <a href="mailto:mondalsaikatkumar@gmail.com">
              <Mail className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://github.com/saikatkumarmondal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.linkedin.com/in/saikatkumar421/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      )}

      {/* ---------------- MOBILE PROFILE CONTENT ---------------- */}
      <main className="sm:hidden w-full min-h-screen pt-16 bg-black flex flex-col items-center relative z-10">
        <div className="w-full h-[55vh] bg-black relative overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-end p-0">
            <img
              src={Image1}
              alt="Profile"
              className="w-[85%] max-w-sm h-auto object-cover shadow-2xl rounded-t-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImage("Profile");
              }}
            />
          </div>
        </div>

        <div
          className="w-full bg-gray-800 pt-20 pb-16 relative mt-[-100px] z-20"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            background:
              "linear-gradient(to top right, #333333 40%, #4a4a4a 100%)",
          }}
        >
          <div className="max-w-md mx-auto px-6 text-white text-left">
            <p className="text-sm font-light mb-1">Hi, I am</p>
            <h2 className="text-3xl font-extrabold mb-1">{profile.name}</h2>
            <p className="text-base font-medium text-gray-300">
              {profile.title}
            </p>
          </div>

          <div className="absolute right-8 bottom-16 flex flex-col space-y-4 text-gray-200">
            <Mail className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
            <Github className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
            <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
          </div>
        </div>
      </main>

      {/* ---------------- DESKTOP VIEW ---------------- */}
      <div className="hidden sm:flex relative w-full h-screen">
        <div
          className="absolute top-0 left-0 h-full w-full bg-gray-200 z-10"
          style={{
            clipPath: "polygon(0 0, 53% 0, 35% 100%, 0% 100%)",
          }}
        ></div>

        <div className="absolute top-0 left-0 h-full w-full bg-black z-0"></div>

        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 z-30">
          <div className="text-black font-bold text-xl ml-4 md:ml-10">
            <img src={Image2} alt="Logo" className="w-10 h-10 rounded-full" />
          </div>

          <div className="hidden sm:flex items-center gap-6 md:gap-8 text-white">
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#skills" className="hover:text-gray-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-gray-400">
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl mx-auto h-full">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 text-left mt-28 sm:mt-32 md:mt-0">
            <h2 className="text-lg sm:text-xl font-medium mb-2 text-black">
              Hi, I am
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 text-black leading-tight">
              Saikat Mondal
            </h1>

            <p className="text-gray-500 mb-4 max-w-sm text-sm sm:text-base">
              Full Stack Developer | React | Node.js | MongoDB
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="mailto:mondalsaikatkumar@gmail.com"
                className="cursor-pointer hover:text-blue-500"
              >
                <Mail className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
              </a>
              <a
                href="https://github.com/saikatkumarmondal"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-blue-500"
              >
                <Github className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.linkedin.com/in/saikatkumar421/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-blue-500"
              >
                <Linkedin className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="w-full md:absolute md:w-200 flex justify-center md:justify-end items-center px-6 md:px-12 mt-10 sm:mt-20 md:mt-0">
            <img
              src={Image1}
              alt="Profile"
              className="w-64 sm:w-80 md:w-200 h-auto md:relative md:left-140 md:-bottom-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
