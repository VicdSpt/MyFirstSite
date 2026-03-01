import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

function TypingAnimation({
  text,
  speed = 100,
  className = "",
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onComplete) {
      const timeout = setTimeout(onComplete, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className={`font-mono ${className} text-2xl`} aria-live="polite">
      {displayedText}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </div>
  );
}

function SectionFullStackBxl() {
  const { t, lang } = useLanguage();
  const [{ textToType, activeLang }, setTypingState] = useState({ textToType: 0, activeLang: lang });

  if (activeLang !== lang) {
    setTypingState({ textToType: 0, activeLang: lang });
  }

  const handleTypingComplete = () => {
    setTypingState((prev) => ({
      textToType: (prev.textToType + 1) % t.hero.typingTexts.length,
      activeLang: lang,
    }));
  };

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
              {t.hero.subtitle}
              <img
                src="/images/icons/BE.svg"
                alt="Belgium"
                className="h-8 w-8"
                width={32}
                height={32}
              />
            </p>
            <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
              📍 {t.hero.relocation}
            </p>
            <p className="text-lg dark:text-gray-300">
              <TypingAnimation
                key={`${lang}-${textToType}`}
                text={t.hero.typingTexts[textToType]}
                speed={75}
                className="text-orange-700 dark:text-indigo-500"
                onComplete={handleTypingComplete}
              />
            </p>
          </div>

          {/* Right side - Paragraphs */}
          <div className="flex flex-col gap-6 text-black dark:text-gray-300 leading-relaxed lg:w-1/2">
            <p className="text-justify">
              {t.hero.bioPre}{" "}
              <a
                href="https://www.wildcodeschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7146b]"
              >
                Wild Code School
              </a>
              {t.hero.bioMid}
              <span className="font-bold"> {t.hero.bioBold1}</span>
              {t.hero.bioAnd}
              <span className="font-bold">{t.hero.bioBold2}</span>
              {t.hero.bioPost1}
              <br /> {t.hero.bioP2}
              <br /> {t.hero.bioP3}
            </p>
            <div className="self-center">
              <Link
                to="/portfolio"
                className="flex items-center gap-2 self-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <img src="/images/icons/Square.svg" alt="" />
                {t.hero.discoverProjects}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFullStackBxl;
