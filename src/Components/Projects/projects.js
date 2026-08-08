"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import ProjectCard from "./projectCards";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            MY WORK
          </p>

          <h2 className="font-space text-5xl font-bold lg:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A selection of projects I have built using modern
            technologies, clean architecture and responsive design.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}