"use client";

import { motion } from "framer-motion";
import AboutContent from "./aboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="container relative mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-25 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            ABOUT ME
          </p>

          <h2 className="font-space text-5xl font-bold lg:text-6xl">
            Passionate Developer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Building modern, scalable and user-friendly web applications with a
            strong focus on performance, clean UI and exceptional user
            experience.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <AboutContent />
        </div>

      </div>
    </section>
  );
}