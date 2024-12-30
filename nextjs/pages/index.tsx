"use client";
import React, { useRef, useState } from "react";
import { TitleContainer } from "@/styles/TitleStyles";
import TitleHeader from "@/features/TitleHeader";
import ThreeScene from "@/components/ThreeScene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const models = ["/falling.glb", "/developer.glb", "/sso_ong.glb"];

const Title: React.FC = () => {
  const controlsRef = useRef<OrbitControls | null>(null);
  const [currentModel, setCurrentModel] = useState(0);
  const [animate, setAnimate] = useState(true);

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
      <ThreeScene
        modelUrl={models[currentModel]}
        onShrinkComplete={handleShrinkComplete}
        controlsRef={controlsRef}
      />
      <TitleHeader onRefresh={handleRefresh} />
    </TitleContainer>
  );
};

export default Title;
