import { projects } from "@/data/portfolio";
import ProjectCard from "./projectCards";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-5 text-center text-gray-400">
          Some projects I`ve built using modern web technologies.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              project={project}
            />

          ))}

        </div>
      </div>
    </section>
  );
}