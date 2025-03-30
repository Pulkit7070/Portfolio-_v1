import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center style={{ zIndex: 100 }}> {/* ✅ Ensure visibility */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.6)", // ✅ Semi-transparent background
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <span className="canvas-load"></span>
        <p
          style={{
            fontSize: "14px",
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 10,
          }}
        >
          {progress.toFixed(2)}% loaded
        </p>
      </div>
    </Html>
  );
};

export default Loader;
