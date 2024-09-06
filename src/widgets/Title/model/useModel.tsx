import { useGLTF } from "@react-three/drei";

export const useModel = (url: string) => {
  const { scene } = useGLTF(url);
  scene.position.set(0, 1, 0);
  return scene;
};
