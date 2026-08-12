"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Completed",
  },
  {
    number: "8+",
    label: "Technologies",
  },
  {
    number: "1+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Responsive Design",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-center
            hover:border-purple-500/40
            hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
          "
        >
          <h3 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {item.number}
          </h3>

          <p className="mt-4 text-zinc-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}