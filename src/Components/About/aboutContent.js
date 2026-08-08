"use client";

import { motion } from "framer-motion";
import AboutStats from "./aboutStats";
import { experience } from "@/data/portfolio";

const cards = [
  {
    emoji: "🎓",
    title: "Education",
    text: "Saylani Mass IT Training Program",
  },
  {
    emoji: "💻",
    title: "Specialization",
    text: "React • Next.js • Node.js • Express.js • MongoDB",
  },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-4xl"
    >
      <h2 className="font-space text-4xl font-bold leading-tight lg:text-5xl">
        Passionately Building{" "}
        <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Modern Web Experiences
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-zinc-400">
        I'm <span className="font-semibold text-white">Moeez Irshad</span>, a
        Full Stack Developer passionate about creating modern, scalable and
        responsive web applications. I enjoy turning ideas into clean, fast and
        user-friendly digital experiences using the latest web technologies.
      </p>

      {/* Info Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
            "
          >
            <span className="text-3xl">{card.emoji}</span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {card.title}
            </h3>

            <p className="mt-2 text-zinc-400">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Component */}
      <div className="mt-12">
        <AboutStats />
      </div>

      <div className="mt-16">

  <h3 className="mb-8 text-2xl font-bold">
    My Journey
  </h3>

  <div className="relative border-l border-purple-500/30 pl-8">

    {experience.map((item) => (

      <div
        key={item.year}
        className="relative mb-10"
      >

        <span
          className="
          absolute
          -left-[42px]
          top-1
          h-5
          w-5
          rounded-full
          border-4
          border-[#070511]
          bg-purple-500
          shadow-[0_0_20px_rgba(168,85,247,0.6)]
          "
        />

        <p className="text-sm font-semibold text-purple-400">
          {item.year}
        </p>

        <h4 className="mt-2 text-xl font-bold">
          {item.title}
        </h4>

        <p className="mt-2 leading-7 text-zinc-400">
          {item.description}
        </p>

      </div>

    ))}

  </div>

</div>
    </motion.div>
  );
}