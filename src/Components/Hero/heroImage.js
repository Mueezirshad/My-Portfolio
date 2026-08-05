"use client";

import Image from "next/image";
import FloatingIcons from "./floatingIcons";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[120px]" />

      {/* Outer Ring */}
      <div
        className="
        absolute
        h-[390px]
        w-[390px]
        rounded-full
        border
        border-purple-500/20
      "
      />

      {/* Animated Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[430px]
        w-[430px]
        rounded-full
        border-2
        border-dashed
        border-purple-500/20
      "
      />

      {/* Image */}
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
        p-3
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_60px_rgba(168,85,247,0.25)]
      "
      >
        <Image
          src="/profile.png"
          alt="Moeez Irshad"
          width={360}
          height={360}
          priority
          className="
          rounded-full
          object-cover
          select-none
        "
        />
      </motion.div>

      <FloatingIcons />
    </motion.div>
  );
}