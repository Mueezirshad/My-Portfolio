"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
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

  const glow = useMotionTemplate`
    radial-gradient(
      280px circle at ${mouseX}px ${mouseY}px,
      rgba(168, 85, 247, 0.20),
      transparent 75%
    )
  `;

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const rotateYValue =
      ((x - rect.width / 2) / rect.width) * 30;

    const rotateXValue =
      -((y - rect.height / 2) / rect.height) * 30;

    rotateY.set(rotateYValue);
    rotateX.set(rotateXValue);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);

    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10

        transition-colors
bg-transparent
        hover:border-purple-500/40
        hover:shadow-[0_0_45px_rgba(168,85,247,0.20)]
      "
    >

      {/* Mouse Follow Glow */}

      <motion.div
        style={{
          background: glow,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Project Image */}

      <div className="relative z-10 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={400}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}

        <div
          className="
            pointer-events-
            absolute
            inset-0
            bg-transparent
            
          "
        />

        {/* Shine */}

        <div
          className="
            pointer-events-none
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

      {/* Content */}

      <div className="relative z-10 flex h-[calc(100%-14rem)] flex-col p-7">

        <span
          className="
            inline-flex
            w-fit
            rounded-full
            border
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
            text-2xl
            font-bold
            tracking-tight
            transition-colors
            duration-300
            group-hover:text-purple-300
          "
        >
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-5 flex flex-wrap gap-2">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-purple-500/20
            bg-transparent
                
                px-3
                py-1
                text-xs
                font-medium
                text-purple-300
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

        {/* Buttons */}

        <div className="mt-auto flex gap-4 pt-8">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-700
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              hover:scale-105
            bg-transparent

              hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
            "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              hover:border-purple-500
              hover:bg-purple-500/10
            "
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

        </div>

      </div>

    </motion.div>
  );
}