import React from "react";
import LinkedInIcon from "../images/LinkedIn.svg";
import GitHubIcon from "../images/GitHub.svg";
import Profile from '../images/Profile.jpg';

function SectionFooter() {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-200 z-10">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={Profile} alt="" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Victor dSpt</span>
            </div>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Connect</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/victor-de-spirlet26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/VicdSpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <img src={GitHubIcon} alt="Github" className="w-5 h-5" />
                GitHub
              </a>
            </nav>
          </div>
        </div>
        <hr className="border-gray-400 my-4" />
        <div className="text-sm text-center text-gray-600">
          <p>{new Date().getFullYear()} - © All Rights Reserved - Victor dS</p>
        </div>
      </div>
    </footer>
  );
}

export default SectionFooter;
