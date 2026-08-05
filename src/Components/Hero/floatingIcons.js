"use client";

import { motion } from "framer-motion";
import { RiReactjsLine, RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const icons = [
  {
    Icon: RiReactjsLine,
    className: "left-2 top-16 text-cyan-400",
    delay: 0,
  },
  {
    Icon: RiNextjsFill,
    className: "right-2 top-8 text-white",
    delay: 0.6,
  },
  {
    Icon: RiNodejsFill,
    className: "left-6 bottom-8 text-green-500",
    delay: 1.2,
  },
  {
    Icon: SiMongodb,
    className: "right-0 bottom-16 text-emerald-400",
    delay: 1.8,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, className, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className}`}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            rotate: 12,
          }}
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_0_25px_rgba(168,85,247,0.2)]
              transition-all
              duration-300
              hover:border-purple-400/50
              hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]
            "
          >
            <Icon className="text-3xl" />
          </div>
        </motion.div>
      ))}
    </>
  );
}