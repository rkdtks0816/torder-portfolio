import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useModel } from "./model/useModel";
import styled from "styled-components";

const HomeContainer = styled.div`
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
  const { size } = useThree(); // 화면 크기를 가져오기

  useEffect(() => {
    // 화면 크기에 따른 스케일 동적 조정
    const newScale = size.width < 768 ? 0.8 : 1.6;
    setScale(newScale);
  }, [size.width]);

  scene.scale.set(scale, scale, scale); // 동적으로 스케일 적용
  return <primitive object={scene} />;
};

const Title: React.FC = () => {
  return (
    <HomeContainer>
      <Canvas>
        <ambientLight intensity={3} />
        <pointLight position={[1, 2.3, 1]} intensity={6} />
        <Model url="sso_ong.glb" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </HomeContainer>
  );
};

export default Title;
