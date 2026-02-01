import ReactIcon from "../images/icons/react.png";
import TypeScriptIcon from "../images/icons/typescript.png";
import JSIcon from "../images/icons/JS.png";
import TailwindIcon from "../images/icons/tailwind.png";
import ViteIcon from "../images/icons/vite.png";
import HTMLIcon from "../images/icons/html.png";
import CSSIcon from "../images/icons/CSS.png";
import BsTIcon from "../images/icons/bootstrap.png";
import NPMIcon from "../images/icons/NPM.png";
import NodeJSIcon from "../images/icons/nodejs.png";
import GitIcon from "../images/icons/git.png";
import GitHubIcon from "../images/icons/github.png";
import MuiIcon from "../images/icons/Mui.png";
import GearIcon from "../images/icons/Gear.svg";
import WaveIcon from "../images/icons/Wave.svg";
import LanguageIcon from "../images/icons/Language.svg"
import France from "../images/icons/France.svg"
import England from "../images/icons/England.svg"

function SectionSkills() {
  return (
    <section className="bg-neutral-100 py-10 sm:py-20 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-4 sm:gap-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">Skills</h2>
          <p className="text-base sm:text-lg font-semibold dark:text-gray-200 mt-2">
            The things I like
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 dark:text-white">
              <img src={GearIcon} alt="Gear Icon" className=" h-7 w-7" />HARD SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={ReactIcon} alt="React" className="h-5 w-5"/>
                React
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={TypeScriptIcon} alt="TypeScript" className="h-5 w-5"/>
                TypeScript
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={JSIcon} alt="JavaScript" className="h-5 w-5"/>
                JavaScript
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={TailwindIcon} alt="Tailwind" className="h-5 w-5"/>
                Tailwind
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={ViteIcon} alt="Vite" className="h-5 w-5"/>
                Vite
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={HTMLIcon} alt="HTML" className="h-5 w-5"/>
                HTML
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={CSSIcon} alt="CSS" className="h-5 w-5"/>
                CSS
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={BsTIcon} alt="Bootstrap" className="h-5 w-5"/>
                BootStrap
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={NPMIcon} alt="NPM" className="h-5 w-5"/>
                NPM
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={NodeJSIcon} alt="NodeJS" className="h-5 w-5"/>
                NodeJS
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={GitIcon} alt="Git" className="h-5 w-5"/>
                Git
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={GitHubIcon} alt="GitHub" className="h-5 w-5"/>
                GitHub
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                <img src={MuiIcon} alt="Mui" className="h-5 w-5"/>
                Mui
              </div>
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 dark:text-white"><img src={WaveIcon} alt="Talk Icon" className="h-7 w-7" /> SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Problem Solver
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Dynamic
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Communication
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Team Work
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Open Minded
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Organized & Structured
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Time Management
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Autonomy
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Fast learner
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                Stress Resistant
              </div>
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 dark:text-white">
              <img src={LanguageIcon} alt="Language icon" className="h-7 w-7" /> LANGUAGES
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/50 dark:text-white border border-green-300 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-800/50 hover:border-green-400 dark:hover:border-green-600">
                <img src={France} alt="Flag France" className="h-5 w-5" />
                French - Native
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/50 dark:text-white border border-green-300 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-800/50 hover:border-green-400 dark:hover:border-green-600">
                <img src={England} alt="Flag UK" className="h-5 w-5" />
                English - Fluent
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
