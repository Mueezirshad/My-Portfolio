"use client";

import { motion } from "framer-motion";

export default function TechCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-purple-500/40
      hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]
      "
    >
      {/* Top Glow */}
      <div
        className="
        absolute
        inset-x-0
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-purple-400
        to-transparent
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Background Glow */}
      <div
        className="
        absolute
        -right-10
        -top-10
        h-32
        w-32
        rounded-full
        bg-purple-500/10
        blur-3xl
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-purple-500/20
        bg-purple-500/10
        text-4xl
        text-purple-400
      "
      >
        {icon}
      </motion.div>

      {/* Name */}
      <h3 className="relative mt-6 text-xl font-semibold text-white">
        {name}
      </h3>

      {/* Bottom Line */}
      <div
        className="
        relative
        mt-6
        h-[2px]
        w-0
        bg-gradient-to-r
        from-violet-500
        to-fuchsia-500
        transition-all
        duration-500
        group-hover:w-full
      "
      />
    </motion.div>
  );
}