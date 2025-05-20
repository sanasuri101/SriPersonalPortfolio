
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ExperienceModel from "../3d/ExperienceModel";

export default function ExperienceScene() {
  return (
    <div className="w-full h-[300px] lg:h-[400px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        
        <Suspense fallback={null}>
          <ExperienceModel />
        </Suspense>
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
