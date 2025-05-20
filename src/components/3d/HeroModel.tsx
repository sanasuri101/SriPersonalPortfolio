
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// Simple cube mesh as fallback
export const FallbackCube = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + state.clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#7b6aed" 
        metalness={0.5}
        roughness={0.3} 
        wireframe={false} 
        envMapIntensity={0.8} 
      />
    </mesh>
  );
};

export default function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Rotate the model
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Abstract geometric shapes */}
      <mesh ref={meshRef} castShadow position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#7b6aed"
          metalness={0.6}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
    </group>
  );
}
