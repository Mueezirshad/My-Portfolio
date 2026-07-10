"use client";

import { motion } from "framer-motion";
import { RiReactjsLine, RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function FloatingIcons() {
  return (
    <>
      {/* React */}
      <motion.div
        animate={floatingAnimation}
        className="absolute left-0 top-16"
      >
        <RiReactjsLine className="text-5xl text-cyan-400" />
      </motion.div>

      {/* Next */}
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 0.5,
          },
        }}
        className="absolute right-4 top-6"
      >
        <RiNextjsFill className="text-4xl text-white" />
      </motion.div>

      {/* Node */}
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 1,
          },
        }}
        className="absolute left-6 bottom-10"
      >
        <RiNodejsFill className="text-5xl text-green-500" />
      </motion.div>

      {/* MongoDB */}
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 1.5,
          },
        }}
        className="absolute right-0 bottom-14"
      >
        <SiMongodb className="text-4xl text-emerald-400" />
      </motion.div>
    </>
  );
}