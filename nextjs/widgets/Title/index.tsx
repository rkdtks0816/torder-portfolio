"use client";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TitleHeader from "@/features/TitleHeader";
import Model from "./Model";
import { TitleContainer } from "./TitleStyles";

const Title: React.FC = () => {
  const controlsRef = useRef<any>(null);
  const [currentModel, setCurrentModel] = useState(0);
  const [animate, setAnimate] = useState(false);
  const models = ["/falling.glb", "/developer.glb", "/sso_ong.glb"];

  const handleRefresh = () => {
    controlsRef.current?.reset();
    setCurrentModel(0);
    setAnimate(!animate);
  };

  const handleShrinkComplete = () => {
    setCurrentModel((prevModel) => (prevModel + 1) % models.length);
  };

  return (
    <TitleContainer>
      <Canvas>
        <ambientLight intensity={3} />
        <pointLight position={[1, 2.3, 1]} intensity={6} />
        <Model
          url={models[currentModel]}
          animate={animate}
          onShrinkComplete={handleShrinkComplete}
        />
        <OrbitControls ref={controlsRef} enableZoom={false} enablePan={false} />
      </Canvas>
      <TitleHeader onRefresh={handleRefresh} />
    </TitleContainer>
  );
};

export default Title;
