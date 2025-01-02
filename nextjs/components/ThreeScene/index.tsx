"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useModel } from "@/hooks/useModel";

interface ThreeSceneProps {
  modelUrl: string; // 로드할 3D 모델의 URL
  setCurrentModel: (value: React.SetStateAction<number>) => void; // 축소 애니메이션 완료 후 호출될 콜백 함수
  controlsRef: React.RefObject<OrbitControls | null>; // 외부에서 접근 가능한 OrbitControls 참조
}

const ThreeScene: React.FC<ThreeSceneProps> = ({
  modelUrl,
  setCurrentModel,
  controlsRef,
}) => {
  const mountRef = useRef<HTMLDivElement>(null); // 렌더링 영역 참조
  const model = useModel(modelUrl); // 3D 모델 로드
  const [sceneComponents, setSceneComponents] = useState<{
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
  } | null>(null); // 씬 관련 객체 저장

  // 씬 초기화
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(0, 1.5, 5);
    controls.enableZoom = false;
    controls.enablePan = false;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    const pointLight = new THREE.PointLight(0xffffff, 6);
    pointLight.position.set(1, 2.3, 1);
    scene.add(ambientLight, pointLight);

    setSceneComponents({ renderer, camera, scene });

    // 외부에서 제어할 수 있도록 controlsRef에 할당
    if (controlsRef) {
      controlsRef.current = controls;
    }

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // 모델 및 애니메이션 추가
  useEffect(() => {
    if (!sceneComponents || !model) return;

    const { renderer, camera, scene } = sceneComponents;
    scene.add(model);

    let frameCount = 0;
    const maxFrames = 120;

    const animate = () => {
      if (frameCount < maxFrames) {
        const scale = 1 - frameCount / maxFrames;
        model.scale.set(scale, scale, scale);
        model.position.y = scale * 0.5;

        renderer.render(scene, camera);
        frameCount++;
        requestAnimationFrame(animate);
      } else {
        setCurrentModel((prev) => (prev + 1) % 3); // 애니메이션 완료 시 모델 변경
      }
    };

    animate();

    return () => {
      scene.remove(model); // 모델 제거
    };
  }, [sceneComponents, model, setCurrentModel]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeScene;
