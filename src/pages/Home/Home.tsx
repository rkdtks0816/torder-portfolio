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
  const modelScale = 0.8;
  scene.position.set(0, 1, 0);
  scene.scale.set(modelScale, modelScale, modelScale);
  return <primitive object={scene} />;
};

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Canvas>
        <ambientLight intensity={5} />
        <pointLight position={[1, 2, 1]} intensity={50} />
        <Model url="sso_ong.glb" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </HomeContainer>
  );
};

export default Home;
