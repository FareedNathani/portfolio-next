import React from "react";
import SkillsBar from "../skills-bar/SkillsBar";
import ImageSlider from "../image-slider/ImageSlider";

const SkillsSection: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 text-transparent bg-clip-text font-serif">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center p-4 rounded-lg shadow-lg shadow-teal-500">
            <ImageSlider />
          </div>
          <div className="border-2 border-teal-400 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50">
            <SkillsBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
