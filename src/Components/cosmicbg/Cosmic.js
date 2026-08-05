"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import ParticleMesh from "./ParticleMesh";

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020006] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleMesh />
      </Canvas>
    </div>
  );
}