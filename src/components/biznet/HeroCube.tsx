import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment, Float, Text } from "@react-three/drei";
import * as THREE from "three";

const CubeFace = ({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  return (
    <group position={position} rotation={rotation}>
      <Text
        fontSize={0.18}
        font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff"
        color="#1a1a1a"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.15}
      >
        BIZNET AI
      </Text>
    </group>
  );
};

const GlassCube = () => {
  const groupRef = useRef<THREE.Group>(null);
  const startTime = useRef(Date.now());

  useFrame((state) => {
    if (!groupRef.current) return;

    const elapsed = state.clock.elapsedTime;

    // Continuous Y rotation + gentle X wobble
    groupRef.current.rotation.y = elapsed * 0.35;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.25) * 0.2;
  });

  const faceOffset = 0.501;

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} scale={2.2}>
        {/* Glass cube */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.5}
            chromaticAberration={0.15}
            anisotropy={0.3}
            distortion={0.15}
            distortionScale={0.2}
            temporalDistortion={0.08}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            transmission={1}
            roughness={0.05}
            color="#e8e0d8"
          />
        </mesh>

        {/* Front face */}
        <CubeFace position={[0, 0, faceOffset]} rotation={[0, 0, 0]} />
        {/* Back face */}
        <CubeFace position={[0, 0, -faceOffset]} rotation={[0, Math.PI, 0]} />
        {/* Right face */}
        <CubeFace position={[faceOffset, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        {/* Left face */}
        <CubeFace position={[-faceOffset, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
        {/* Top face */}
        <CubeFace position={[0, faceOffset, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        {/* Bottom face */}
        <CubeFace position={[0, -faceOffset, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </Float>
  );
};

const HeroCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#f0e6d8" />
        <GlassCube />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroCube;
