interface HobbyCardProps {
  title: string;
  icon: string;
  description: string;
  gradient: string;
}

const hobbies = [
  {
    title: "Coding",
    icon: "💻",
    description: "Building projects and learning new technologies",
    gradient: "bg-gradient-to-br from-violet-100 to-purple-200 dark:from-violet-900/50 dark:to-purple-900/50",
  },
  {
    title: "Gaming",
    icon: "🎮",
    description: "Exploring virtual worlds",
    gradient: "bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/50 dark:to-cyan-900/50",
  },
  {
    title: "Walking my Dog",
    icon: "🐕",
    description: "Quality time with my furry friend",
    gradient: "bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/50 dark:to-orange-900/50",
  },
  {
    title: "Reading",
    icon: "📚",
    description: "Getting lost in great stories",
    gradient: "bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/50 dark:to-teal-900/50",
  },
  {
    title: "Motorcycling",
    icon: "🏍️",
    description: "Freedom on two wheels",
    gradient: "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-900/50 dark:to-rose-900/50",
  },
  {
    title: "Boxing",
    icon: "🥊",
    description: "Staying fit and disciplined",
    gradient: "bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900/50 dark:to-red-900/50",
  },
  {
    title: "Skiing",
    icon: "⛷️",
    description: "Chasing powder on the slopes",
    gradient: "bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900/50 dark:to-blue-900/50",
  },
  {
    title: "Horse Riding",
    icon: "🏇",
    description: "Connecting with nature",
    gradient: "bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-yellow-900/50 dark:to-amber-900/50",
  },
  {
    title: "Photography",
    icon: "📷",
    description: "Capturing moments in time",
    gradient: "bg-gradient-to-br from-pink-100 to-fuchsia-200 dark:from-pink-900/50 dark:to-fuchsia-900/50",
  },
];

function MoreAboutMe() {
  return (
    <section className="pt-20 min-h-screen bg-neutral-100 dark:bg-zinc-800">
      <div className="max-w-8xl mx-auto px-6">
        <div className="mb-5">
          <h1 className="py-20 text-5xl font-bold text-center dark:text-white">
            More About Me
          </h1>
          <p className="text-center mb-10 dark:text-gray-200">
            Stuff I do and like when I'm not coding
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {hobbies.map((hobby) => (
              <HobbyCard
                key={hobby.title}
                title={hobby.title}
                icon={hobby.icon}
                description={hobby.description}
                gradient={hobby.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreAboutMe;

function HobbyCard({ title, icon, description, gradient }: HobbyCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 ${gradient} border border-gray-200 dark:border-zinc-600 hover:scale-[1.02] transition-all duration-300 cursor-default group`}
    >
      <div className="absolute top-0 right-0 text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -mr-2 -mt-2">
        {icon}
      </div>
      <div className="relative z-10">
        <span className="text-4xl mb-3 block">{icon}</span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}