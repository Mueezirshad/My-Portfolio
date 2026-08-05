"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hover, setHover] = useState(false);

  // 1. Mouse coordinates Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Smooth Spring physics setup
  const springConfig = { damping: 25, stiffness: 350 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll("a, button, input, textarea");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      animate={{
        width: hover ? 48 : 18,
        height: hover ? 48 : 18,
        opacity: hover ? 0.85 : 1,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        rounded-full
        border
        border-purple-400/70
        bg-purple-500/30
        backdrop-blur-xl
        shadow-[0_0_35px_rgba(168,85,247,0.8)]
        mix-blend-screen
      "
    />
  );
}