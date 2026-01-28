import { useEffect, useState } from "react";
import GitHubIcon from "../images/GitHub2.svg";
import LiveIcon from "../images/Live.svg";

interface MyProjects {
  id: string;
  name: string;
  productionUrl: string;
  imageUrl?: string;
  githubUrl?: string;
}

function PagePortfolio() {
  const [projects, setProjects] = useState<MyProjects[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("https://api.vercel.com/v9/projects", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_VERCEL_API_TOKEN}`,
        },
      });
      const data = await response.json();

      setProjects(data.projects);
    }
    fetchProjects();
  }, []);

  return (
    <section className="pt-20 min-h-screen bg-neutral-100 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-5">
          <h1 className="py-20 text-5xl font-bold text-center dark:text-white">My Portfolio</h1>
          <p className="text-center dark:text-gray-200">Discover my projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-9">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-200 dark:bg-zinc-700 py-5 px-5 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl text-center text-gray-800 dark:text-white mb-3">
                {project.name}
              </h2>
              <hr className="my-4 h-px border-t-0 bg-transparent bg-linear-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

              <div className="flex gap-3 justify-evenly">
                <a
                  href={`https://${project.name}.vercel.app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 self-center bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer"
                >
                  <img src={LiveIcon} alt="Live Icon" />
                  <span className="whitespace-nowrap">Live Demo</span>
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 self-center bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer"
                >
                  <img src={GitHubIcon} alt="Github Icon" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PagePortfolio;
