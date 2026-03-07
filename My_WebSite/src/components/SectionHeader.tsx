import { useEffect, useState } from "react";
import { Link } from "react-router";
import myResume from "../assets/Resume_VictordS_2026.pdf";
import { useLanguage } from "../context/LanguageContext";

function SectionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode === "dark";
  });
  const { lang, t, toggleLanguage } = useLanguage();

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
            {t.header.nav.home}
          </Link>
          <Link
            to="/portfolio"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            {t.header.nav.portfolio}
          </Link>
          <Link
            to="/resume"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            {t.header.nav.resume}
          </Link>
          <Link
            to="/contact"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
          >
            {t.header.nav.contact}
          </Link>
        </nav>

        {/* Right side - Download CV + Language toggle + Theme toggle */}
        <div className="flex items-center gap-3">
          <a
            href={myResume}
            download="Resume_de_Spirlet_Victor"
            className="group flex items-center gap-2 py-2 px-4 rounded-md bg-slate-300 dark:bg-zinc-700 dark:text-white hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors whitespace-nowrap"
          >
            <img
              src="/images/icons/Resume.svg"
              alt="Resume icon"
              className="w-5 h-5 dark:invert group-hover:brightness-0 group-hover:invert transition-all"
            />
            <span className="hidden md:inline">{t.header.downloadCV}</span>
          </a>

          {/* Language toggle */}
          <div className="bg-zinc-300 dark:bg-zinc-700 rounded-xl flex p-1">
            <button
              onClick={() => lang !== "en" && toggleLanguage()}
              className={`px-2 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors dark:text-white ${
                lang === "en"
                  ? "bg-white dark:bg-zinc-800 shadow"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => lang !== "fr" && toggleLanguage()}
              className={`px-2 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors dark:text-white ${
                lang === "fr"
                  ? "bg-white dark:bg-zinc-800 shadow"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
            >
              FR
            </button>
          </div>

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
              <img src="/images/icons/Sun.svg" alt="Light mode" className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsDark(true)}
              className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                isDark
                  ? "bg-zinc-800 shadow"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
            >
              <img src="/images/icons/Moon.svg" alt="Dark mode" className="w-4 h-4" />
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
          <Link
            to="/"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.header.nav.home}
          </Link>
          <Link
            to="/portfolio"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.header.nav.portfolio}
          </Link>
          <Link
            to="/resume"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.header.nav.resume}
          </Link>
          <Link
            to="/contact"
            className="bg-slate-300 dark:bg-zinc-700 dark:text-white py-2 px-4 hover:bg-slate-500 dark:hover:bg-zinc-600 hover:text-white transition-colors rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.header.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default SectionHeader;
