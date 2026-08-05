"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[10000]
            flex
            items-center
            justify-center
            bg-[#070511]
          "
        >
          <div className="flex flex-col items-center">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-20
                w-20
                rounded-full
                border-4
                border-purple-500/20
                border-t-purple-500
              "
            />

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mt-8
                font-glitch
                text-3xl
                font-bold
                text-white
              "
            >
              Moeez Irshad
            </motion.h1>

            <p className="mt-2 text-zinc-400">
              Loading Portfolio...
            </p>

          </div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}