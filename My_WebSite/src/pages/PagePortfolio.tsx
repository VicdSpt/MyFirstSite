import { useEffect, useState } from "react";

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

      // Transform the API data to match your interface
      const transformedProjects = data.projects.map((project: any) => ({
        id: project.id,
        name: project.githubRepo?.name || project.name, // Use GitHub name, fallback to project name
        productionUrl: project.productionUrl,
        githubUrl: project.githubRepo
          ? `https://github.com/${project.githubRepo.org}/${project.githubRepo.name}`
          : undefined,
        imageUrl: undefined, // Add later if needed
      }));

      setProjects(transformedProjects);
    }
    fetchProjects();
  }, []);

  return (
    <section className="pt-40">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <h1 className="text-4xl text-center">My Portfolio</h1>
          <p className="text-center">Discover my projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl text-center font-bold text-gray-800 mb-3">
                {project.name}
              </h2>
              <a
                href={`https://${project.name}.vercel.app`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PagePortfolio;
