"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <div className="space-y-6">

        {/* Name */}

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-zinc-500
              focus:border-purple-500
              focus:ring-4
              focus:ring-purple-500/20
            "
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-zinc-500
              focus:border-purple-500
              focus:ring-4
              focus:ring-purple-500/20
            "
          />
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
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
          Send Message
        </motion.button>

      </div>
    </motion.form>
  );
}