"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    link: "https://github.com/your-github",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/your-linkedin",
  },
  {
    icon: FaEnvelope,
    link: "mailto:your@email.com",
  },
];

export default function HeroSocial() {
  return (
    <div className="mt-4 flex items-center gap-4">

      {socials.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1.3 + index * 0.15,
            }}

            whileHover={{
              scale: 1.15,
              y: -5,
              rotate: 8,
            }}

            whileTap={{
              scale: 1.95,
            }}

            className="
            group
            flex
            m-1
            p-0
            h-13
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-gray-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-purple-400
            hover:text-white
            hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
            "
          >
            <Icon className="text-xl transition-transform duration-400 group-hover:scale-110" />
          </motion.a>

        );

      })}

    </div>
  );
}