"use client"

import Image from "next/image";
import FloatingIcons from "./floatingIcons";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Purple Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-full border-4 border-purple-500/30 p-2">

        <Image
          src="/profile4.j2pg"
          alt="Moeez Irshad"
          width={350}
          height={350}
          className="rounded-full object-cover"
        />
      </div>
<FloatingIcons />

    </div>
  );
}