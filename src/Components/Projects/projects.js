import { projects } from "@/data/portfolio";
import ProjectCard from "./projectCards";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
  MY WORK
</p>

<h2 className="text-center font-space text-5xl font-bold lg:text-6xl">
  Featured Projects
</h2>

<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-400">
  A collection of projects showcasing modern UI, scalable architecture and
  full-stack development using today's web technologies.
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