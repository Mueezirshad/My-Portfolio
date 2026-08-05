"use client";

import { motion } from "framer-motion";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            GET IN TOUCH
          </p>

          <h2 className="font-space text-5xl font-bold lg:text-6xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Have a project idea or an internship opportunity?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}