"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useModel } from "@/hooks/useModel";

interface ThreeSceneProps {
  modelUrl: string; // 로드할 3D 모델의 URL
  onShrinkComplete: () => void; // 축소 애니메이션 완료 후 호출될 콜백 함수
  controlsRef: React.RefObject<OrbitControls | null>; // 외부에서 접근 가능한 OrbitControls 참조
}

const ThreeScene: React.FC<ThreeSceneProps> = ({
  modelUrl,
  onShrinkComplete,
  controlsRef,
}) => {
  const mountRef = useRef<HTMLDivElement>(null); // 렌더링 영역 참조
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null); // 렌더러 참조
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); // 카메라 참조
  const sceneRef = useRef<THREE.Scene | null>(null); // 씬 참조
  const controlsInstanceRef = useRef<OrbitControls | null>(null); // OrbitControls 참조
  const model = useModel(modelUrl); // 3D 모델 로드
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false); // 애니메이션 완료 상태

  // 모델 로드 및 씬 초기화 처리
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    const pointLight = new THREE.PointLight(0xffffff, 6);
    pointLight.position.set(1, 2.3, 1);
    scene.add(ambientLight, pointLight);

    if (model) {
      scene.add(model);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // 참조 객체에 저장
    rendererRef.current = renderer;
    cameraRef.current = camera;
    sceneRef.current = scene;
    controlsInstanceRef.current = controls;

    if (controlsRef.current) {
      controlsRef.current = controls;
    }

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, [model, controlsRef]);

  // 애니메이션 처리
  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const scene = sceneRef.current;
    const controls = controlsInstanceRef.current;

    const maxFrame = 120;
    let frameCount = 0;

    const animateScene = () => {
      if (!model) return;

      if (frameCount >= maxFrame) {
        if (!isAnimationCompleted) {
          setIsAnimationCompleted(true); // 애니메이션 완료 상태 업데이트
          onShrinkComplete(); // 애니메이션 완료 콜백 호출
        }
        return; // 애니메이션 루프 종료
      }

      // 모델 크기와 위치 업데이트
      const scale = (maxFrame - frameCount) / maxFrame;
      model.scale.set(scale, scale, scale);
      model.position.y = scale * 0.5;

      controls?.update();
      renderer.render(scene, camera);

      frameCount++;
      requestAnimationFrame(animateScene);
    };

    requestAnimationFrame(animateScene);
  }, [model, onShrinkComplete, isAnimationCompleted]);

  // 애니메이션 완료 상태 변경 시 처리
  useEffect(() => {
    if (isAnimationCompleted) {
      setIsAnimationCompleted(false); // 상태 초기화 (필요한 경우)
    }
  }, [isAnimationCompleted]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeScene;
