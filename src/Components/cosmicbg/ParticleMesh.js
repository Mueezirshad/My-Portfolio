"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleMesh() {
  const pointsRef = useRef();
  const mouseRef = useRef({ x: 9999, y: 9999 }); // Initial position off-screen
  const count = 2500; // Total glowing stars

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [basePositions, positions, colors] = useMemo(() => {
    const basePos = new Float32Array(count * 3);
    const currentPos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const colorA = new THREE.Color("red"); // Dark Violet
    const colorB = new THREE.Color("#c084fc"); // Bright Purple

    for (let i = 0; i < count; i++) {
      const u = (Math.random() - 0.5) * 22;
      const v = (Math.random() - 0.5) * 22;
      const w = (Math.random() - 0.5) * 5;

      basePos[i * 3] = u;
      basePos[i * 3 + 1] = v;
      basePos[i * 3 + 2] = w;

      currentPos[i * 3] = u;
      currentPos[i * 3 + 1] = v;
      currentPos[i * 3 + 2] = w;

      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }

    return [basePos, currentPos, cols];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const positionAttr = pointsRef.current.geometry.attributes.position;

    // Convert Normalized Mouse Coords to 3D Space Coordinates
    const mouseX = (mouseRef.current.x * state.viewport.width) / 2;
    const mouseY = (mouseRef.current.y * state.viewport.height) / 2;

    const repellingRadius = 2.2; // Kitni door se push hona start hoga
    const repelForce = 2.5;      // Kitna zordar push hoga

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      const baseX = basePositions[idx];
      const baseY = basePositions[idx + 1];
      const baseZ = basePositions[idx + 2];

      // Subtle wave float motion
      const waveX = Math.sin(baseY * 0.5 + time * 0.8) * 0.15;
      const waveY = Math.cos(baseX * 0.5 + time * 1.0) * 0.15;

      const targetBaseX = baseX + waveX;
      const targetBaseY = baseY + waveY;

      // Distance from mouse to star
      const dx = targetBaseX - mouseX;
      const dy = targetBaseY - mouseY;
      const dist = Math.hypot(dx, dy);

      let targetX = targetBaseX;
      let targetY = targetBaseY;
      let targetZ = baseZ;

      // Cursor Push / Repelling Logic
      if (dist < repellingRadius) {
        const force = (1 - dist / repellingRadius) * repelForce;
        const angle = Math.atan2(dy, dx);

        targetX += Math.cos(angle) * force;
        targetY += Math.sin(angle) * force;
        targetZ += force * 0.8; // Z-axis lift on hover
      }

      // Smooth Return (Elastic Lerp back to original space)
      const currentX = positionAttr.getX(i);
      const currentY = positionAttr.getY(i);
      const currentZ = positionAttr.getZ(i);

      positionAttr.setX(i, THREE.MathUtils.lerp(currentX, targetX, 0.1));
      positionAttr.setY(i, THREE.MathUtils.lerp(currentY, targetY, 0.1));
      positionAttr.setZ(i, THREE.MathUtils.lerp(currentZ, targetZ, 0.1));
    }

    positionAttr.needsUpdate = true;
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
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}