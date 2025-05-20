
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function ExperienceModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ring 1 */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#7b6aed" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Ring 2 */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Ring 3 */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[0.9, 0.05, 16, 100]} />
        <meshStandardMaterial color="#c084fc" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}
