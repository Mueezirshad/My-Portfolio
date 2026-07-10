"use client"
import { span } from "framer-motion/client";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-purple-500/40
      hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
      "
    >
      {/* Project Image */}

      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={350}
          className="h-30 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech}
              className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-smtext-purple-300 transition-all duration-300 hover:bg-purple-500 hover:text-white">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-8 flex gap-3">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-medium transition hover:bg-purple-500"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-purple-500"
          >
            GitHub
          </a>

        </div>


      </div>
    </div>
  );
}