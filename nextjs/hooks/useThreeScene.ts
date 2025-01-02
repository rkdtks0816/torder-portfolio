import { COLORS } from "@/shared/constants/colors";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const useThreeScene = (mountRef: React.RefObject<HTMLDivElement>) => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);

    rendererRef.current = renderer;
    cameraRef.current = camera;
    sceneRef.current = scene;
    controlsRef.current = controls;

    scene.background = new THREE.Color(COLORS.background);
    camera.position.set(0, 1.5, 5);

    controls.enableZoom = false;
    controls.enablePan = false;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

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
  }, []);

  return {
    renderer: rendererRef,
    camera: cameraRef,
    scene: sceneRef,
    controls: controlsRef,
  };
};
