import React from "react";
import { ProjectCardProps } from "../../../type/componentTypes";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <div className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 bg-transparent rounded-lg overflow-hidden flex flex-col justify-between items-center border-2 border-indigo-600 text-center">
      <div className="relative mt-6 w-40 h-40">
      <Image
        src={image} 
        alt={title}
        layout="fill"
        objectFit="cover"
        className="shadow-[0_0_8px_4px_rgb(160,84,190)] rounded-full"
      />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 mb-6 mt-0">{title}</h3>
        <p className="text-white mb-4 font-serif">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 py-1 rounded-full  bg-gradient-to-brbg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 "> <span className="transition-colors transform duration-300 border-2 border-transparent hover:scale-150 border-[#d62c8f] bg-[#121212] rounded-full px-3 py-2 text-white hover:bg-[#d62c8f] ">Click Here</span>
        </a>
      </div>
    </div>
  );
};