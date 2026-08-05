"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseTrail() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 22,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 22,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 80);
      mouseY.set(e.clientY - 80);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9998]
        h-40
        w-40
        rounded-full
        bg-purple-600/15
        blur-3xl
      "
    />
  );
}