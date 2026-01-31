interface HobbyCardProps {
  title: string;
  icon: string;
  description: string;
  gradient: string;
  className?: string;
}

const hobbies = [
  {
    title: "Coding",
    icon: "💻",
    description: "I love building new projects or apps and trying new technologies to apply to them",
    gradient: "bg-gradient-to-br from-violet-400/40 via-purple-300/30 to-indigo-400/40 dark:from-violet-600/40 dark:via-purple-500/30 dark:to-indigo-600/40 border-violet-400/50 dark:border-violet-500/50 hover:border-violet-500/70 dark:hover:border-violet-400/70",
    size: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    title: "Gaming",
    icon: "🎮",
    description: "Passionnated about video game since ever, my favorite genre are action RPG",
    gradient: "bg-gradient-to-br from-blue-400/40 via-cyan-300/30 to-teal-400/40 dark:from-blue-600/40 dark:via-cyan-500/30 dark:to-teal-600/40 border-blue-400/50 dark:border-blue-500/50 hover:border-blue-500/70 dark:hover:border-blue-400/70",
    size: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    title: "Walking my Dog",
    icon: "🐕",
    description: "Probably my favorite thing to do, passing quality time with my dog",
    gradient: "bg-gradient-to-br from-amber-400/40 via-orange-300/30 to-yellow-400/40 dark:from-amber-600/40 dark:via-orange-500/30 dark:to-yellow-600/40 border-amber-400/50 dark:border-amber-500/50 hover:border-amber-500/70 dark:hover:border-amber-400/70",
    size: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2 lg:row-span-4",
  },
  {
    title: "Reading",
    icon: "📚",
    description: "I love books, I love to read about nothing and everything. Latest book started is: The Witcher serie",
    gradient: "bg-gradient-to-br from-emerald-400/40 via-green-300/30 to-teal-400/40 dark:from-emerald-600/40 dark:via-green-500/30 dark:to-teal-600/40 border-emerald-400/50 dark:border-emerald-500/50 hover:border-emerald-500/70 dark:hover:border-emerald-400/70",
    size: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    title: "Motorcycling",
    icon: "🏍️",
    description: "I have been a biker for the last 5 years, travelling around Europe with my Royal Enfield Himalayan",
    gradient: "bg-gradient-to-br from-red-400/40 via-rose-300/30 to-pink-400/40 dark:from-red-600/40 dark:via-rose-500/30 dark:to-pink-600/40 border-red-400/50 dark:border-red-500/50 hover:border-red-500/70 dark:hover:border-red-400/70",
    size: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    title: "Boxing",
    icon: "🥊",
    description: "I discovered boxing during covid, now I practise twice a week",
    gradient: "bg-gradient-to-br from-orange-400/40 via-amber-300/30 to-red-400/40 dark:from-orange-600/40 dark:via-amber-500/30 dark:to-red-600/40 border-orange-400/50 dark:border-orange-500/50 hover:border-orange-500/70 dark:hover:border-orange-400/70",
    size: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    title: "Skiing",
    icon: "⛷️",
    description: "My all time favorite sport",
    gradient: "bg-gradient-to-br from-sky-400/40 via-blue-300/30 to-indigo-400/40 dark:from-sky-600/40 dark:via-blue-500/30 dark:to-indigo-600/40 border-sky-400/50 dark:border-sky-500/50 hover:border-sky-500/70 dark:hover:border-sky-400/70",
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    title: "Horse Riding",
    icon: "🏇",
    description: "Grew-up in the country side, suraround by horse and nature",
    gradient: "bg-gradient-to-br from-yellow-400/40 via-lime-300/30 to-green-400/40 dark:from-yellow-600/40 dark:via-lime-500/30 dark:to-green-600/40 border-yellow-400/50 dark:border-yellow-500/50 hover:border-yellow-500/70 dark:hover:border-yellow-400/70",
    size: "col-span-1 md:col-span-3 lg:col-span-3 row-span-2",
  },
];

function MoreAboutMe() {
  return (
    <section className="pt-20 min-h-screen bg-neutral-100 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-5">
          <h1 className="pt-10 sm:pt-16 pb-4 text-3xl sm:text-5xl font-bold text-center dark:text-white">
            More About Me
          </h1>
          <p className="text-center mb-8 dark:text-gray-200">
            Stuff I do and like when I'm not coding
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[100px] sm:auto-rows-[130px] lg:auto-rows-[150px] gap-3 sm:gap-4 w-full max-w-5xl p-3 sm:p-4 rounded-xl ">
          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.title}
              title={hobby.title}
              icon={hobby.icon}
              description={hobby.description}
              gradient={hobby.gradient}
              className={hobby.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreAboutMe;

function HobbyCard({ title, icon, description, gradient, className = "" }: HobbyCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-3 sm:p-5 lg:p-6 ${gradient} backdrop-blur-sm border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default group flex flex-col items-center justify-center text-center hover:scale-[1.02] ${className}`}
    >
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative text-3xl sm:text-5xl lg:text-6xl mb-1 sm:mb-3 drop-shadow-sm">{icon}</span>
      <h3 className="relative text-base sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
      <p className="relative text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 line-clamp-2 hidden sm:block">{description}</p>
    </div>
  );
}
