"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{
        type: "spring",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}