import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import LottieComponent from "@/components/common/Lottie";
import clickTornado from "./asset/click_rornado.json";
import { OpenBoardButtonContainer } from "./styles";
import { PATH_BOARD } from "@/shared/constants/paths";

const OpenBoardButton: React.FC = () => {
  const lottieRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4);
    }
  }, []);

  return (
    <OpenBoardButtonContainer onClick={() => router.push(PATH_BOARD)}>
      <LottieComponent lottieRef={lottieRef} animationData={clickTornado} />
    </OpenBoardButtonContainer>
  );
};

export default OpenBoardButton;
