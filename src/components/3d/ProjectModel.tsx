
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function ProjectModel({ color = "#7b6aed" }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0, 0]} castShadow>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.3}
          envMapIntensity={1} 
        />
      </mesh>
    </group>
  );
}
