"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import ParticleMesh from "./ParticleMesh";

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020006] overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        eventSource={typeof window !== "undefined" ? document.body : undefined}
      >
        <ParticleMesh />
      </Canvas>
    </div>
  );
}