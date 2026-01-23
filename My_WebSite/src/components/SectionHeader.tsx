import { useEffect, useState } from "react";
import ResumeIcon from "../images/Resume.svg";
import Sun from "../images/Sun.svg";
import Moon from "../images/Moon.svg";

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

  const navLinkClass =
    "bg-slate-300 py-2 px-4 hover:bg-slate-500 transition-colors rounded-md";

  return (
    <header className="fixed top-0 w-full z-10 bg-slate-200 shadow-md">
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
          <a href="" className={navLinkClass}>
            Home
          </a>
          <a href="" className={navLinkClass}>
            Portfolio
          </a>
          <a href="" className={navLinkClass}>
            Resume
          </a>
          <a href="" className={navLinkClass}>
            Contact
          </a>
        </nav>

        {/* Right side - Download CV + Theme toggle */}
        <div className="flex items-center gap-3">
          <a
            href=""
            className="flex items-center gap-2 py-2 px-4 rounded-md bg-slate-300 hover:bg-slate-500 transition-colors"
          >
            <img src={ResumeIcon} alt="" className="w-5 h-5" />
            <span className="hidden sm:inline">Download My CV</span>
          </a>

          {/* Theme toggle */}
          <div className="bg-zinc-100 dark:bg-zinc-700 p-1 rounded-xl flex">
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
        className={`md:hidden bg-slate-200 border-t border-slate-300 transition-all overflow-hidden ${
          isMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-2">
          <a
            href=""
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href=""
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href=""
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
          <a
            href=""
            className={navLinkClass}
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
