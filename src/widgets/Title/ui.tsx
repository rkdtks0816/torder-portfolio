import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useModel } from "@/entities/model";
import styled from "styled-components";
import TitleHeader from "@/features/TitleHeader";

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const scene = useModel(url);
  const [scale, setScale] = useState(0.8);
  const { size } = useThree();

  useEffect(() => {
    const newScale = size.width < 768 ? 0.8 : 1.6;
    setScale(newScale);
  }, [size.width]);

  scene.scale.set(scale, scale, scale);
  return <primitive object={scene} />;
};

const Title: React.FC = () => {
  const controlsRef = useRef<any>(null);
  const handleRefresh = () => {
    controlsRef.current.reset();
  };
  return (
    <TitleContainer>
      <Canvas>
        <ambientLight intensity={3} />
        <pointLight position={[1, 2.3, 1]} intensity={6} />
        <Model url="sso_ong.glb" />
        <OrbitControls ref={controlsRef} enableZoom={false} enablePan={false} />
      </Canvas>
      <TitleHeader onRefresh={handleRefresh} />
    </TitleContainer>
  );
};

export default Title;
