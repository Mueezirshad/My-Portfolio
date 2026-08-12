"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCheck,
} from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "irshadmoeez10@gmail.com";

  // Fallback Copy Functionality
  const handleEmailClick = (e) => {
    // Standard clipboard copy
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Direct Web Gmail Compose Link
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-12">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space text-3xl font-bold text-white"
        >
          Moeez Irshad
        </motion.h2>

        <p className="mt-4 max-w-xl text-center leading-7 text-zinc-400">
          Full Stack Developer passionate about building modern, scalable and
          user-friendly web applications.
        </p>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-zinc-300">
          <a href="#home" className="transition hover:text-purple-400">
            Home
          </a>
          <a href="#about" className="transition hover:text-purple-400">
            About
          </a>
          <a href="#skills" className="transition hover:text-purple-400">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-purple-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-purple-400">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex gap-5">
          <a
            href="https://github.com/Mueezirshad"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/moeez-irshad-236450281/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="rounded-full border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Smart Email Button */}
          <button
            onClick={handleEmailClick}
            title={copied ? "Email Copied!" : "Send Email via Gmail"}
            className="relative rounded-full border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          >
            {copied ? (
              <FaCheck size={18} className="text-green-400" />
            ) : (
              <FaEnvelope size={18} />
            )}
          </button>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Moeez Irshad. All Rights Reserved.
        </p>

        {/* Back To Top */}
        <a
          href="#home"
          aria-label="Back to top"
          className="
            mt-8
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            text-white
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
          "
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}