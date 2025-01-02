import React, { useRef, useEffect, useState } from "react";
import { useThreeScene } from "@/hooks/useThreeScene";
import { useModel } from "@/hooks/useModel";

const ThreeScene: React.FC<{
  isRefresh: boolean;
  setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isRefresh, setIsRefresh }) => {
  const models = ["/falling.glb", "/developer.glb", "/sso_ong.glb"];
  const initScale = 0.8;
  const initSpeed = 0.00003;
  const initDelay = 10;
  const initYPosition = 1;
  const mountRef = useRef<HTMLDivElement>(null!);
  const { renderer, camera, scene, controls } = useThreeScene(mountRef);
  const animationIdRef = useRef<number | null>(null);
  const scaleRef = useRef(initScale);
  const speedRef = useRef(initSpeed);
  const delayRef = useRef(initDelay);
  const yPositionRef = useRef(initYPosition);
  const [curModel, setCurModel] = useState(0);
  const model = useModel(models[curModel]);

  useEffect(() => {
    if (
      !renderer.current ||
      !camera.current ||
      !scene.current ||
      !controls.current ||
      !model
    )
      return;

    model.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);
    scene.current.add(model);

    const animate = () => {
      if (
        !renderer.current ||
        !camera.current ||
        !scene.current ||
        !controls.current ||
        !model
      )
        return;
      if (isRefresh) {
        setIsRefresh(false);
        scaleRef.current = 0;
        setCurModel(2);
        delayRef.current = initDelay;
        camera.current?.position.set(0, 1.5, 5);
      }
      // 스케일 감소 로직
      if (scaleRef.current > speedRef.current * 10) {
        speedRef.current += 0.0002;
        scaleRef.current -= speedRef.current;
        yPositionRef.current -= 4 * speedRef.current;
      } else if (delayRef.current > 0) {
        if (delayRef.current === initDelay) {
          setCurModel((prev) => (prev + 1) % models.length);
        }
        delayRef.current--;
        scaleRef.current = 0; // 모델 사라짐
      } else {
        // 모델 변경 및 초기화
        scaleRef.current = initScale;
        speedRef.current = initSpeed;
        delayRef.current = initDelay;
        yPositionRef.current = initYPosition;
      }
      model.position.y = yPositionRef.current;
      model.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);

      controls.current.update();
      renderer.current.render(scene.current, camera.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      scene.current?.remove(model);
    };
  }, [model, isRefresh]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeScene;
