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

interface ModelProps {
  url: string;
  animate: boolean;
  onShrinkComplete: () => void;
}

const Model: React.FC<ModelProps> = ({ url, animate, onShrinkComplete }) => {
  const scene = useModel(url);
  const [scale, setScale] = useState(0.8);
  const [y, setY] = useState(1);
  const { size } = useThree();

  useEffect(() => {
    setScale(size.width < 768 ? 0.8 : 1.6);
    setY(1);
  }, [size.width, animate]);

  useEffect(() => {
    let animationFrameId: number;

    const animateScale = () => {
      setScale((prevScale) => {
        if (prevScale > 0.01) {
          setY((prevY) => prevY - 0.001);
          return Math.max(prevScale - 0.01, 0);
        } else {
          onShrinkComplete();
          setY(1);
          return size.width < 768 ? 0.8 : 1.6;
        }
      });
      setY((prevY) => prevY - 0.015);
      animationFrameId = requestAnimationFrame(animateScale);
    };
    animationFrameId = requestAnimationFrame(animateScale);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  scene.scale.set(scale, scale, scale);
  scene.position.set(0, y, 0);
  return <primitive object={scene} />;
};

const Title: React.FC = () => {
  const controlsRef = useRef<any>(null);
  const [currentModel, setCurrentModel] = useState(0);
  const [animate, setAnimate] = useState(false);
  const models = ["falling.glb", "developer.glb", "sso_ong.glb"];
  const handleRefresh = () => {
    controlsRef.current.reset();
    setCurrentModel(0);
    setAnimate(!animate);
  };
  const handleShrinkComplete = () => {
    setCurrentModel((prevModel) => (prevModel + 1) % 3);
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
