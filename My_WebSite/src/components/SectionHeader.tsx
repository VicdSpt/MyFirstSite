import { useEffect, useState } from "react";
import { Link } from "react-router";
import ResumeIcon from "../images/Resume.svg";
import Sun from "../images/Sun.svg";
import Moon from "../images/Moon.svg";
import Mon_CV from "../assets/test.pdf"

function SectionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 w-full z-10 bg-slate-200 dark:bg-zinc-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Hamburger button - visible on mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <Link
            to="/"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            Portfolio
          </Link>
          <Link
            to="/resume"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            Contact
          </Link>
        </nav>

        {/* Right side - Download Mon_CV + Theme toggle */}
        <div className="flex items-center gap-3 ">
          <a
            href={Mon_CV}
            download="Resume_de_Spirlet_Victor"
            className="group flex items-center gap-2 py-2 px-4 rounded-md bg-slate-300 dark:bg-zinc-700 dark:text-white hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors"
          >
            <img
              src={ResumeIcon}
              alt="Resume icon"
              className="w-5 h-5 dark:invert group-hover:brightness-0 group-hover:invert transition-all"
            />
            <span className="hidden sm:inline">Download My CV</span>
          </a>

          {/* Theme toggle */}
          <div className="bg-zinc-300 dark:bg-zinc-700 hover:text-whitep-1 rounded-xl flex p-1">
            <button
              onClick={() => setIsDark(false)}
              className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                !isDark
                  ? "bg-white shadow"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
            >
              <img src={Sun} alt="Light mode" className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsDark(true)}
              className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                isDark
                  ? "bg-zinc-800 shadow"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
            >
              <img src={Moon} alt="Dark mode" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav menu */}
      <nav
        className={`md:hidden bg-slate-200 dark:bg-zinc-900 border-t border-slate-300 dark:border-zinc-700 transition-all overflow-hidden ${
          isMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-2">
          <a
            href=""
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href=""
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href=""
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
          <a
            href=""
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default SectionHeader;
