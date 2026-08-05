"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 200,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
      
        duration-300
        hover:-translate-y-2
        hover:border-purple-500/40
        hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={420}
          className="
            h-56
            w-full
            object-cover
          
          
            group-hover:scale-110
            group-hover:brightness-75
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#070812]
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* Shine */}
        <div
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-full
          "
        />
      </div>

      {/* Background Glow Effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-52
            w-52
            -translate-x-1/2
            rounded-full
            bg-purple-500/10
            blur-[80px]
          "
        />
      </div>

      {/* Content */}
      <div className="relative p-7">
        {/* Project Label */}
        <span
          className="
            inline-flex
            rounded-2x1
            border-purple-500/20
            bg-purple-500/10
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-purple-400
          "
        >
          Featured Project
        </span>

        <h3
          className="
            mt-5
            text-3xl
            font-bold
            tracking-tight
            transition-colors
            duration-300
            group-hover:text-purple-300
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-5
            leading-8
            text-zinc-300
          "
        >
          {project.description}
        </p>

        {/* Tech Stack */}
     <div className="mt-3 flex flex-wrap gap-3">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="
        rounded-4xl
        border
        border-purple-500/20
        bg-purple-500/10
        px-2
        py-1
        text-xs
        font-medium
        tracking-wide
        text-purple-300
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-purple-400
        hover:bg-purple-500/20
        hover:text-white
      "
    >
      {tech}
    </span>
  ))}
</div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/button
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              via-fuchsia-600
              to-purple-700
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              
              
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
            "
          >
            Live Demo →
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-xl
            
              
              hover:border-purple-400
              hover:bg-purple-500/10
              hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}