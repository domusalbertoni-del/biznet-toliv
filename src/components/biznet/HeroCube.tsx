import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
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
        HYPR.BIZ
      </Text>
    </group>
  );
};

const GlassCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const elapsed = state.clock.elapsedTime;
    groupRef.current.rotation.y = elapsed * 0.35;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.25) * 0.2;
  });

  const faceOffset = 0.501;

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} scale={2.2}>
        {/* Glass cube with transparency */}
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.15}
            roughness={0.05}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#e8e0d8"
            envMapIntensity={1.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Wireframe edges for glass cube look */}
        <lineSegments ref={edgesRef}>
          <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
          <lineBasicMaterial color="#999" transparent opacity={0.4} />
        </lineSegments>

        {/* Inner glow */}
        <mesh scale={0.98}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.08}
            roughness={0}
            metalness={0}
            color="#c4b5a0"
            side={THREE.BackSide}
          />
        </mesh>

        {/* Text on each face */}
        <CubeFace position={[0, 0, faceOffset]} rotation={[0, 0, 0]} />
        <CubeFace position={[0, 0, -faceOffset]} rotation={[0, Math.PI, 0]} />
        <CubeFace position={[faceOffset, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <CubeFace position={[-faceOffset, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
        <CubeFace position={[0, faceOffset, 0]} rotation={[-Math.PI / 2, 0, 0]} />
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
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#f0e6d8" />
        <pointLight position={[3, -3, -3]} intensity={0.3} color="#d4c4b0" />
        <GlassCube />
      </Canvas>
    </div>
  );
};

export default HeroCube;
