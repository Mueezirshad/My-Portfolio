"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animation";

export default function TechCard({ icon, name }) {
  return (
    <motion.div
    variants={fadeUp}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-x
    hover:border-purple-500/40
    hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
  "
    >
      {/* Top Glow */}
      <div
        className="
    pointer-events-none
    absolute
    inset-0
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
      >
        <div
          className="
      absolute
      left-1/2
      top-0
      h-44
      w-44
      -translate-x-1/2
      rounded-full
      bg-purple-500/10
      blur-[80px]
    "
        />
      </div>

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
        flex
    h-20
    w-20
    items-center
    justify-center
    rounded-2xl
    bg-purple-500/10
    text-5xl
    text-purple-400
    
    group-hover:rotate-6
    group-hover:scale-110
    group-hover:bg-purple-500/20
  
      "
      >
        {icon}
      </motion.div>

      {/* Name */}
      <h3
        className="
    mt-6
    text-2xl
    font-bold
    transition-colors
    duration-300
    group-hover:text-purple-300
  "
      >
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