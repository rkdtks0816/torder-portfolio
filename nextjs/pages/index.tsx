"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useModel } from "@/hooks/useModel";
import { TitleContainer } from "@/styles/TitleStyles";
import TitleHeader from "@/features/TitleHeader";
import { COLORS } from "@/shared/constants/colors";

const Title: React.FC = () => {
  const models = ["/falling.glb", "/developer.glb", "/sso_ong.glb"];
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [curModel, setCurModel] = useState(0);
  const [scale, setScale] = useState(1);
  const [isRefrash, setIsRefrash] = useState(false);
  const model = useModel(models[curModel]); // 현재 모델 로드

  const handleRefresh = () => {
    setCurModel(0);
    setScale(1);
    setIsRefrash(true);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // 씬 초기화
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);

    controlsRef.current = controls;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    sceneRef.current = scene;

    scene.background = new THREE.Color(COLORS.background);
    camera.position.set(0, 1.5, 5);
    controls.enableZoom = false;
    controls.enablePan = false;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    const pointLight = new THREE.PointLight(0xffffff, 6);
    pointLight.position.set(1, 2.3, 1);
    scene.add(ambientLight, pointLight);

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
  }, [isRefrash]);

  useEffect(() => {
    if (
      !sceneRef.current ||
      !rendererRef.current ||
      !cameraRef.current ||
      !model
    )
      return;

    const scene = sceneRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    // 기존 모델 제거
    scene.remove(model);
    // 씬에 모델 추가
    model.scale.set(scale, scale, scale);
    scene.add(model);

    const animate = () => {
      if (isRefrash) {
        setIsRefrash(false);
        controls?.reset();
      }
      controls?.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      scene.remove(model); // 모델 제거
    };
  }, [model, scale]);

  // 외부에서 스케일 감소 로직
  useEffect(() => {
    const initSpeed = 0.001;
    let speed = initSpeed; // 초기 감소 속도
    const acceleration = 0.0001; // 감소 속도의 증가량

    const interval = setInterval(() => {
      setScale((prev) => {
        if (prev > initSpeed) {
          speed += acceleration; // 감소 속도 증가
          return prev - speed; // 스케일 감소
        } else {
          // 스케일이 0에 도달하면 모델 변경
          setCurModel((prev) => (prev + 1) % models.length);
          speed = initSpeed; // 속도 초기화
          return 1; // 스케일 초기화
        }
      });
    }, 16); // 약 60FPS

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TitleContainer>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <TitleHeader onRefresh={handleRefresh} />
    </TitleContainer>
  );
};

export default Title;
