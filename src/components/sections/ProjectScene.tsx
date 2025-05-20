
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ProjectModel from "../3d/ProjectModel";

type ProjectSceneProps = {
  color?: string;
};

export default function ProjectScene({ color }: ProjectSceneProps) {
  return (
    <div className="w-full aspect-square max-h-[300px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        <Suspense fallback={null}>
          <ProjectModel color={color} />
        </Suspense>
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={4}
        />
      </Canvas>
    </div>
  );
}
