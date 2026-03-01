import { useLanguage } from "../context/LanguageContext";

const flagIcons = [
  { src: "/images/icons/France.svg", alt: "Flag France" },
  { src: "/images/icons/England.svg", alt: "Flag UK" },
];

function SectionSkills() {
  const { t } = useLanguage();

  return (
    <section className="bg-neutral-100 py-10 sm:py-20 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-4 sm:gap-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">{t.skills.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 dark:text-white">
              <img src="/images/icons/Gear.svg" alt="Gear Icon" className="h-7 w-7" width={28} height={28} />{t.skills.hardSkills}</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "/images/icons/react.png", label: "React" },
                { icon: "/images/icons/typescript.png", label: "TypeScript" },
                { icon: "/images/icons/JS.png", label: "JavaScript" },
                { icon: "/images/icons/tailwind.png", label: "Tailwind" },
                { icon: "/images/icons/vite.png", label: "Vite" },
                { icon: "/images/icons/html.png", label: "HTML" },
                { icon: "/images/icons/CSS.png", label: "CSS" },
                { icon: "/images/icons/bootstrap.png", label: "Bootstrap" },
                { icon: "/images/icons/NPM.png", label: "NPM" },
                { icon: "/images/icons/nodejs.png", label: "NodeJS" },
                { icon: "/images/icons/git.png", label: "Git" },
                { icon: "/images/icons/github.png", label: "GitHub" },
                { icon: "/images/icons/Mui.png", label: "Mui" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-50 dark:bg-zinc-700 dark:text-white border border-gray-200 dark:border-zinc-600 hover:bg-stone-100 dark:hover:bg-zinc-600 hover:border-gray-300">
                  <img src={icon} alt={label} className="h-5 w-5" width={20} height={20} />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 dark:text-white">
              <img src="/images/icons/Wave.svg" alt="Talk Icon" className="h-7 w-7" width={28} height={28} /> {t.skills.softSkills}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.skills.softSkillsList.map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 dark:text-white border border-blue-300 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 dark:hover:border-blue-600 hover:border-blue-400">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 dark:text-white">
              <img src="/images/icons/Language.svg" alt="Language icon" className="h-7 w-7" width={28} height={28} /> {t.skills.languages}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.skills.languagesList.map((label, i) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/50 dark:text-white border border-green-300 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-800/50 hover:border-green-400 dark:hover:border-green-600">
                  <img src={flagIcons[i].src} alt={flagIcons[i].alt} className="h-5 w-5" width={20} height={20} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
