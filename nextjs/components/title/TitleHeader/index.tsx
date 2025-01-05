import React from "react";
import rotate360 from "./asset/360.json";
import refresh from "./asset/refresh.json";
import LottieComponent from "@/components/common/Lottie";
import { HeaderContainer, HeaderRefreshBtn } from "./styles";

interface TitleHeaderProps {
  onRefresh: () => void;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ onRefresh }) => {
  return (
    <HeaderContainer>
      <LottieComponent animationData={rotate360} />
      <HeaderRefreshBtn onClick={onRefresh}>
        <LottieComponent animationData={refresh} />
      </HeaderRefreshBtn>
    </HeaderContainer>
  );
};

export default TitleHeader;
