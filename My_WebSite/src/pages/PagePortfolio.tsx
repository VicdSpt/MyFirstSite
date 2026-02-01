import { useEffect, useState } from "react";

interface MyProjects {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  vercel: string;
}

function PagePortfolio() {
  const [projects, setProjects] = useState<MyProjects[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("./MyProjectsData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load projects");
        }
        return response.json();
      })
      .then((data: MyProjects[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-20 flex-1 bg-neutral-100 dark:bg-zinc-800">
      <div className="w-full mx-auto px-10">
        <header className="mb-5">
          <h1 className="py-20 text-5xl font-bold text-center dark:text-white">
            My Portfolio
          </h1>
          <p className="text-center dark:text-gray-200">
            Discover some of my projects, if you wish to see all of them
            <br />please visit my <a
              href="https://github.com/VicdSpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400"
            > <span>GitHub</span>
            </a>
          </p>
        </header>

        <section className="mb-5 py-5 px-4">
          {loading && (
            <p className="text-center text-gray-600 dark:text-gray-300">
              Loading projects...
            </p>
          )}

          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {!loading && !error && projects.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No projects found.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {!loading && !error && projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="aspect-video mb-4 overflow-hidden rounded-2xl">
                    <img src={project.image} alt="image from project" className="w-full h-full object-cover shadow-2xl"/>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((techno, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full font-medium"
                      >
                        {techno}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    > <img src="/images/icons/Github2.svg" alt="GitHub icon" />GitHub
                    </a>
                    <a
                      href={project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    > <img src="/images/icons/Live.svg" alt="Live icon" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default PagePortfolio;
