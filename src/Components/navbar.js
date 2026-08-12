"use client";

import { useEffect, useState } from "react";
import useActiveSection from "@/lib/useActiveSection";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "py-8"
          : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="whitespace-nowrap font-glitch text-lg font-light text-white transition duration-300 hover:text-purple-400 sm:text-2xl"
        >
          Moeez Irshad
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              active === link.href.replace("#", "");

            return (
              <li
                key={link.name}
                className="relative"
              >
                <a
                  href={link.href}
                  className={`block hover:text-purple-400 ${
                    isActive
                      ? "font-semibold text-purple-400"
                      : "text-zinc-300"
                  }`}
                >
                  {link.name}
                </a>

                {/* Active Underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-1600 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-purple-500/40 hover:bg-purple-500/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#070511]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.map((link) => {
            const isActive =
              active === link.href.replace("#", "");

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-400 ${
                    isActive
                      ? "font-semibold text-purple-400"
                      : "text-zinc-300"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}