import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
