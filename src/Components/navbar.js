"use client";

import { useEffect, useState } from "react";
import useActiveSection from "@/lib/useActiveSection";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed
      top-0
      left-0
      z-50
      w-full
      transition-all
      duration-500
      "bg-transparent"
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <a
          href="#home"
          className="
          font-glitch
          text-2xl
          font-light
          text-white
          transition
          duration-300
          hover:text-purple-400
        "
        >
          Moeez Irshad
        </a>

        {/* Navigation */}

        <ul className="flex items-center gap-8">

          {links.map((link) => {

            const isActive =
              active === link.href.replace("#", "");

            return (
              <li key={link.name} className="relative">

                <a
                  href={link.href}
                  className={`
                    transition-all
                    duration-300
                    hover:text-purple-400
                    ${
                      isActive
                        ? "text-purple-400"
                        : "text-zinc-300"
                    }
                  `}
                >
                  {link.name}
                </a>

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-fuchsia-500
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </li>
            );
          })}

        </ul>
      </div>
    </nav>
  );
}