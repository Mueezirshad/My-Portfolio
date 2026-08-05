"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleMesh() {
  const pointsRef = useRef();
  const count = 5000; // Total glowing particles

  // Generate grid positions and colors
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorA = new THREE.Color("#4c1d95"); // Dark Deep Violet
    const colorB = new THREE.Color("#c084fc"); // Glowing Bright Purple

    for (let i = 0; i < count; i++) {
      // Grid distribution across space
      const u = (Math.random() - 0.5) * 20;
      const v = (Math.random() - 0.5) * 20;
      const w = (Math.random() - 0.5) * 5;

      pos[i * 3] = u;
      pos[i * 3 + 1] = v;
      pos[i * 3 + 2] = w;

      // Color gradient transition
      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const mouse = state.pointer; // Automatic R3F normalized pointer (-1 to +1)
    const positionAttr = pointsRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const x = positionAttr.getX(i);
      const y = positionAttr.getY(i);

      // Continuous Fluid Wave Equation
      const waveX = Math.sin(x * 0.5 + time * 1.2) * 0.3;
      const waveY = Math.cos(y * 0.5 + time * 1.5) * 0.3;

      // Mouse Proximity Attraction / Displacement
      const dist = Math.hypot(x - mouse.x * 8, y - mouse.y * 8);
      const mousePush = Math.max(0, (3.0 - dist) * 0.4);

      positionAttr.setZ(i, waveX + waveY + mousePush);
    }
    
    positionAttr.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.00; // Subtle global drift
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={8.95}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}