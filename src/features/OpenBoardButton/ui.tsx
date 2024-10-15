import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import clickTornado from "./click_rornado.json";

const OpenBoardButton: React.FC = () => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // 속도 조절
    }
  }, []);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={clickTornado}
      loop={true}
      autoplay={true}
    />
  );
};

export default OpenBoardButton;
