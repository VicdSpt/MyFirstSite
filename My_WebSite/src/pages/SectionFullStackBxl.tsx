import React from "react";
import SquareIcon from "../images/Square.svg";
import Belgium from "../images/BE.svg";

function SectionFullStackBxl() {
  return (
    <section className="bg-neutral-100 pt-40 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side - Hero content */}
          <div className="flex flex-col justify-center gap-4 lg:w-1/2">
            <h1 className="text-5xl font-bold dark:text-white">
              Victor de Spirlet
            </h1>
            <p className="flex items-center gap-2 text-xl font-semibold dark:text-gray-200">
              Fullstack Engineer in Brussels{" "}
              <img src={Belgium} alt="Belgium" className="h-8 w-8" />
            </p>
            <p className="text-lg dark:text-gray-300">
              Building fun stuff for people
            </p>
          </div>

          {/* Right side - Paragraphs */}
          <div className="flex flex-col gap-6 text-black dark:text-gray-300 leading-relaxed lg:w-1/2">
            <p className="text-justify">
              Currently training as a Full Stack Developer at <a href="https://www.wildcodeschool.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#f7146b]"
              >Wild Code School</a>, I am driven by a strong passion for <span className="font-bold">problem solving</span> and <span className="font-bold">debugging</span> complex challenges to build reliable, high-quality web applications.<br/> I enjoy transforming ideas into efficient, user-focused solutions while working with modern technologies and continuously learning to improve my knowledge and technical skills. I also value teamwork and collaboration, enjoying the opportunity to build applications and projects with others while exchanging knowledge and staying up to date with the latest technology trends.<br /> Highly motivated and eager to grow, I continuously explore new tools and frameworks to strengthen my skills and expand my technical expertise.
            </p>
            <button className="flex items-center gap-2 self-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer">
              <img src={SquareIcon} alt="" />
              Discover my projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFullStackBxl;
