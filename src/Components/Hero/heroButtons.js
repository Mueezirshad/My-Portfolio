"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import MagneticButton from "../Ui/magneticButton";

export default function HeroButtons() {
  // Smooth Framer Motion spring physics
  const hoverAnimation = {
    scale: 1.05,
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  const tapAnimation = { scale: 0.97 };

  return (
    <div className="mt-6 flex flex-wrap gap-5">
      {/* Primary Button */}
      <motion.a
        href="#projects"
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          via-fuchsia-600
          to-purple-700
          px-7
          py-3
          font-semibold
          text-white
          shadow-[0_0_30px_rgba(168,85,247,0.25)]
        "
      >
        {/* Shine Effect */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-700
            ease-out
            group-hover:translate-x-full
          "
        />

        <MagneticButton className="relative flex items-center gap-2">
          View Projects
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </MagneticButton>
      </motion.a>

      {/* Secondary Button */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-purple-500/30
          bg-transparent
          px-7
          py-3
          font-semibold
          text-white
          transition-colors
          duration-300
          hover:border-purple-400
          hover:bg-purple-500/10
          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
        "
      >
        <MagneticButton className="relative flex items-center gap-2">
          <Download
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          Download Resume
        </MagneticButton>
      </motion.a>
    </div>
  );
}