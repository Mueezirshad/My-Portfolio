
import { motion } from "framer-motion"
import HeroButtons from "./heroButtons";
import HeroSocial from "./heroSocial";
import { Typewriter } from "react-simple-typewriter";

export default function HeroContent() {
  return (
    <motion.div 
  className="w-full lg:w-1/2 "
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 2, x: 0 }}
  transition={{
    duration: 2.1,
    ease: "easeOut",
  }}
    >

      {/* <h1 className="mt-6 font-space text-5xl font-bold leading-tight lg:text-7xl"> */}
     <h1 className= "mt-3 text-3xl font-space font-black leading-none tracking-tight lg:text-3xl">
        Hi, I`m
        <span className="lg:text-6xl block bg-gradient-to-r from-purple-800 via-fuchsia-500 to-purple-900 bg-clip-text text-transparent">
          Moeez Irshad
        </span>
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-purple-300">
  <Typewriter
    words={[
      "Full Stack Developer ",
      "Frontend Developer",
      "Next.js Developer",
      "MERN Stack Developer",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>

      <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
        I build fast, scalable and modern web applications using
        React, Next.js, Node.js, Express.js and MongoDB with a
        strong focus on clean UI, performance and user experience.
      </p><br />
      <div className="mt-2 flex">
  <div
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-purple-500/20
      bg-transparent
      px-5
      py-2
      duration-500
      hover:border-purple-400/50
      hover:bg-purple-500/10
      hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
    "
  >
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full npbg-lime-500 opacity-70"></span>

      <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500"></span>
    </span>

    <span className="text-sm font-medium tracking-wide text-zinc-200">
      Available for Internship & Freelance
    </span>
  </div>
</div>
      <HeroButtons />
      <HeroSocial />
    </motion.div >
  );
}