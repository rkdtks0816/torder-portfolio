import React from "react";
import Lottie from "lottie-react";

interface LottieComponentProps {
  lottieRef?: React.RefObject<any>;
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
