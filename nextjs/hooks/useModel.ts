"use client";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const useModel = (url: string) => {
  const [model, setModel] = useState<THREE.Group>(new THREE.Group());

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        const scene = gltf.scene;
        scene.position.set(0, 1.3, 0);
        scene.scale.set(1, 1, 1);
        setModel(scene);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );
  }, [url]);

  return model;
};
