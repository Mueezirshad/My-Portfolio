"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

const info = [
  {
    icon: Mail,
    title: "Email",
    value: "irshadmoeez10@gmail.com",
    href: "mailto:irshadmoeez10@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Karachi, Pakistan",
  },
  {
    icon: Briefcase,
    title: "Availability",
    value: "Open for Internship & Freelance",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {info.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-7
              backdrop-blur-xl
              hover:border-purple-500/40
              hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
            "
          >
            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-purple-500/10
                  text-purple-400
                  group-hover:scale-110
                  group-hover:bg-purple-500/20
                "
              >
                <Icon size={30} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {item.href ? (
  <a
    href={item.href}
    className="mt-1 block text-zinc-400 transition-colors hover:text-purple-300"
  >
    {item.value}
  </a>
) : (
  <p className="mt-1 text-zinc-400">
    {item.value}
  </p>
)}

              </div>

            </div>
          </motion.div>

        );

      })}

    </div>
  );
}