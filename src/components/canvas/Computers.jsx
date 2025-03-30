import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <group position={[0, -3.25, -1.5]}> {/* Keep model's original placement */}
      {/* Lighting Enhancements */}
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.5} groundColor="gray" skyColor="white" />
      <directionalLight intensity={1.5} position={[5, 10, 5]} castShadow />
      <spotLight position={[0, 10, 10]} angle={0.3} intensity={2} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={2} />

      {/* Centered Model */}
      <primitive object={computer.scene} scale={isMobile ? 0.2 : 0.5} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setForceRender((prev) => !prev);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      key={forceRender}
      shadows
      frameloop="always"
      camera={{ position: [5, 3, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.75}
          target={[0, -3.25, -1.5]} // 🔥 Targets the exact center of the model
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
