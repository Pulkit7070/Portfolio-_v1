import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // Ensure the path is correct

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <directionalLight intensity={2} position={[10, 10, 10]} /> {/* Debug light */}
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.12 : 0.5}
        position={isMobile ? [-2, -1, -1.5] : [0, -3.25, -1.5]} // 🔥 Shifted up on mobile
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [forceRender, setForceRender] = useState(false); // Forces re-render

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setForceRender((prev) => !prev); // Ensures component updates
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      key={forceRender} // Forces component to re-render on resize
      shadows
      frameloop="always"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.75}
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
