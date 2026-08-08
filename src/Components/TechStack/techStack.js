"use client";

import { motion } from "framer-motion";
import TechCard from "./techCard";
import { techStack } from "@/data/portfolio";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            MY TOOLKIT
          </p>

          <h2 className="font-space text-5xl font-bold lg:text-6xl">
            Tech Stack
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Technologies I use to build fast, scalable and modern web
            applications with performance, clean architecture and great user
            experience.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <TechCard
                name={tech.name}
                icon={<tech.icon />}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}