import React, { useEffect, useRef } from "react";
import LottieComponent from "@/entities/lottie";
import clickTornado from "./asset/click_rornado.json";

const OpenBoardButton: React.FC = () => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return <LottieComponent lottieRef={lottieRef} animationData={clickTornado} />;
};

export default OpenBoardButton;
