"use client";

import Image from "next/image";
import FloatingIcons from "./floatingIcons";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroImage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid 3D tilt in all directions
  const rotateX = useSpring(mouseY, {
    stiffness: 150,
    damping: 15,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 150,
    damping: 15,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    // 1. Calculate relative X and Y positions from the center of the image
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // 2. Normalize and set tilt values (Divide number controls sensitivity)
    // Positive/Negative values allow full 360 3D tilting on all axes
    rotateY.set((x / rect.width) * 25);   // Left-to-Right rotation
    rotateX.set(-(y / rect.height) * 25);  // Top-to-Bottom rotation
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
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
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center p-4 cursor-pointer"
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
          pointer-events-none
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
          pointer-events-none
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