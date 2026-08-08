"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:irshadmoeez10@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-transparent
        p-8
        backdrop-blur-xl
      "
    >
      {/* Name */}

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-transparent
            px-5
            py-4
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-purple-500
            focus:ring-4
            focus:ring-purple-500/20
          "
        />
      </div>

      {/* Email */}

      <div className="mt-5">
        <label className="mb-2 block text-sm text-zinc-400">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-transparent
            px-5
            py-4
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-purple-500
            focus:ring-4
            focus:ring-purple-500/20
          "
        />
      </div>

      {/* Message */}

      <div className="mt-5">
        <label className="mb-2 block text-sm text-zinc-400">
          Message
        </label>

        <textarea
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message..."
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/10
            bg-transparent
            px-5
            py-4
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-purple-500
            focus:ring-4
            focus:ring-purple-500/20
          "
        />
      </div>

      {/* Submit */}

      <motion.button
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        type="submit"
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          via-fuchsia-600
          to-purple-700
          px-6
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
        "
      >
        <Send size={18} />

        {sent ? "Message Ready ✓" : "Send Message"}
      </motion.button>
    </motion.form>
  );
}