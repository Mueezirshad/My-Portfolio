"use client";

import Image from "next/image";
import FloatingIcons from "./floatingIcons";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroImage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
  });
  
  const rotateY = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(e) {
    // FIXED: Correct spelling for getBoundingClientRect
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set((x - rect.width / 1) / 30);
    mouseY.set(-(y - rect.height / 1) / 30);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 14, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center p-4"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-96
          w-96
          rounded-full
          bg-purple-600/20
          blur-[110px]
        "
      />

      {/* Animated Rotating Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[410px]
          w-[410px]
          rounded-full
          border-2
          border-dashed
          border-purple-500/20
        "
      />

      {/* Image Container with Outer Border Glow */}
      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          overflow-hidden
          rounded-full
          border
          border-purple-500/30
          bg-white/5
          p-3
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(168,85,247,0.25)]
        "
      >
        <Image
          src="/img4.jfif"
          alt="Moeez Irshad"
          width={360}
          height={360}
          priority
          className="
            h-[360px]
            w-[360px]
            rounded-full
            object-cover
            select-none
          "
        />
      </motion.div>

      {/* Floating Icons Overlay */}
      <FloatingIcons />
    </motion.div>
  );
}