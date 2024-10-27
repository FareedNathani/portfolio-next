"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import NavLink from "../navLink/NavLink";
import { navbarLinks } from "../navbar/NavBar";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-4">
          <a
            href="https://github.com/FareedNathani/word-counter.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="transition-transform transform hover:scale-110 hover:text-gray-900 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:fareednathani123@gmail.com"
            aria-label="Email"
            className="transition-transform transform hover:scale-110 hover:text-blue-800 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/fareed-nathani-30180a324"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="menu md:w-auto pt-6 pr-6" id="navbar">
          <ul className="flex flex-col sm:flex-row justify-center items-center md:p-0 md:space-x-8 mt-0">
            {navbarLinks.map((link, index) => (
              <li
                key={index}
                id="footer-li"
                className="transition-colors transform duration-300 border-b-2 border-transparent hover:scale-105 hover:text-black hover:border-black"
              >
                <NavLink href={link.path} title={link.title} isFooter={true} />
              </li>
            ))}
          </ul>
        </div>

        {/* Rights Reserved */}
        <p className="text-sm mt-6 text-black font-semibold">
          &copy; {new Date().getFullYear()} Ghulam Fareed | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
