"use client";
import React from "react";
import { ProjectCard } from "../project-card/ProjectCard";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "I made this website with html css and javascript so check it out and share your feedback",
    image: "/images/ecommerce.jpg",
    url: "https://fareednathani.github.io/e-commerce-website/ ",
  },
  {
    title: "My Portfolio",
    description:
      "I made this portfolio with html css and javascript so check it out and share your feedback",
    image: "/images/portfolio.jpg",
    url: "https://fareednathani.github.io/Portfolio/",
  },
  {
    title: "Number Guessing Game",
    description:
      "A CLI number guessing game that challenges users to guess a random number. Here is the link below",
    image: "/images/number.png",
    url: "https://github.com/FareedNathani/CLI-number-guessing-game.git",
  },
  {
    title: "Calculator",
    description:
      "I made this calculator with typescript and node.js. Here is the link below",
    image: "/images/calc.jpg",
    url: "https://github.com/FareedNathani/simple_calculator.git",
  },
  {
    title: "E-commerce clothing Website",
    description:
      "I made this website with html css and javascript.",
    image: "/images/fashion.jpg",
    url: " https://fareednathani.github.io/The-Fashion-Hub-/",
  },
  {
    title: "ATM",
    description:
      "I made this atm project with typescript and node.js. Here is the link below check i out and share your feedback",
    image: "/images/atm.jpg",
    url: "https://github.com/FareedNathani/atm-operations.git",
  },
  {
    title: "Word Counter",
    description:
      "I made this word counter with typescript and node.js. Check Word Counter and share your feedback",
    image: "/images/counter.jpg",
    url: "https://github.com/FareedNathani/word-counter.git",
  },
  {
    title: "Student Management System",
    description:
      "I made this student management system with typescript and node.js. Here is the link below",
    image: "/images/student-manage.jpg",
    url: "https://github.com/FareedNathani/student-management-system.git",
  },
  {
    title: "Adventure Game",
    description:
      "I made this adventure game with typescript and node.js. Here is the link below",
    image: "/images/game.jpg",
    url: "https://github.com/FareedNathani/Adventure-game.git",
  },
];

const Project: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-24 text-white">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400
 font-serif lg:text-5xl md:text-5xl text-4xl">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}; 

export default Project;