import React, { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useModel } from "@/entities/model";

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
  }, [animate, onShrinkComplete, size.width]);

  scene.scale.set(scale, scale, scale);
  scene.position.set(0, y, 0);

  return <primitive object={scene} />;
};

export default Model;
