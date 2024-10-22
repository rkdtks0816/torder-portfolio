import React from "react";
import rotate360 from "./asset/360.json";
import refresh from "./asset/refresh.json";
import LottieComponent from "@/entities/lottie";
import { HeaderContainer } from "./style";

interface TitleHeaderProps {
  onRefresh: () => void;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ onRefresh }) => {
  return (
    <HeaderContainer>
      <LottieComponent animationData={rotate360} />
      <div onClick={onRefresh}>
        <LottieComponent animationData={refresh} />
      </div>
    </HeaderContainer>
  );
};

export default TitleHeader;
