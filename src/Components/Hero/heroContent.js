
import { motion } from "framer-motion"
import HeroButtons from "./heroButtons";
import HeroSocial from "./heroSocial";
import { Typewriter } from "react-simple-typewriter";
import { fadeUp } from "@/lib/animation";

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
      "Full Stack Developer",
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

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
        I build fast, scalable and modern web applications using
        React, Next.js, Node.js, Express.js and MongoDB with a
        strong focus on clean UI, performance and user experience.
      </p><br />
      <p className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
        🟢 Available for Internship & Freelance
      </p>
      <HeroButtons />

      <HeroSocial />
    </motion.div>
  );
}