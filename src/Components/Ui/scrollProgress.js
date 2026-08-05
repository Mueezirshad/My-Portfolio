"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="
        fixed
        top-0
        left-0
        z-[9999]
        h-[3px]
        w-full
        bg-gradient-to-r
        from-violet-500
        via-fuchsia-500
        to-cyan-400
        shadow-[0_0_20px_rgba(168,85,247,0.7)]
      "
    />
  );
}