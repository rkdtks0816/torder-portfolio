import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { HomeContainer } from "./HomeStyle";

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  const modelScale = 0.7;
  scene.position.set(0, 1, 0);
  scene.scale.set(modelScale, modelScale, modelScale);
  return <primitive object={scene} />;
};

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Canvas>
        <Model url="sso_ong.glb" />
        <OrbitControls enableZoom={false} enablePan={false} />{" "}
        {/* 스크롤 및 팬 비활성화 */}
      </Canvas>
    </HomeContainer>
  );
};

export default Home;
