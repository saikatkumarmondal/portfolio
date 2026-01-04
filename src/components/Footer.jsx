import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaAutoprefixer } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-100 py-6 sm:py-10 px-4">
      {/* Back To Top */}
      <div
        className="text-center flex items-center justify-center gap-2 text-2xl font-bold cursor-pointer hover:text-gray-300 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaAutoprefixer className="animate-spin-slow" />
        <span>Back To Top</span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 items-center justify-center mt-10 flex-wrap">
        <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow-md">
          <FaLinkedin size={22} className="text-black" />
        </button>

        <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow-md">
          <FaGithub size={22} className="text-black" />
        </button>

        <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow-md">
          <SiGmail size={22} className="text-black" />
        </button>
      </div>

      {/* Footer Text */}
      <div className="mt-10">
        <p className="text-center text-sm sm:text-base text-gray-400">
          © {new Date().getFullYear()} Saikat Kumar Mondal — All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
