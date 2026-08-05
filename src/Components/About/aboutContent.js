"use client";

import { motion } from "framer-motion";
import AboutStats from "./aboutStats";

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
        Passionate About Building
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

      {/* Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-7
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-purple-500/40
              hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]
            "
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
              {card.emoji}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {card.title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div><AboutStats />
    </motion.div>
    
  );
}