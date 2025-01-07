import React from "react";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieComponentProps {
  lottieRef?: React.RefObject<LottieRefCurrentProps | null>;
  animationData: object;
}

const LottieComponent: React.FC<LottieComponentProps> = ({
  lottieRef,
  animationData,
}) => {
  return (
    <Lottie
      lottieRef={lottieRef || undefined}
      animationData={animationData}
      loop={true}
      autoplay={true}
    />
  );
};

export default LottieComponent;
