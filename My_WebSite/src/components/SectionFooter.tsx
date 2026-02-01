function SectionFooter() {
  return (
    <footer className="bg-slate-200 bottom-0 w-full dark:bg-zinc-900">
      <div className="max-w-5xl  mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Profile section */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src="/images/icons/Profile.png"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold dark:text-white">Victor dSpt</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Full Stack Developer
            </p>
          </div>

          {/* Connect section */}
          <div className="text-center">
            <nav className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/victor-de-spirlet26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <img src="/images/icons/LinkedIn.svg" alt="LinkedIn" className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/VicdSpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <img src="/images/icons/Github.svg" alt="Github" className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
        </div>

        <hr className="border-gray-400 dark:border-zinc-700 my-4" />

        <div className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
          <p>{new Date().getFullYear()} - © All Rights Reserved - Victor dS</p>
        </div>
      </div>
    </footer>
  );
}

export default SectionFooter;
