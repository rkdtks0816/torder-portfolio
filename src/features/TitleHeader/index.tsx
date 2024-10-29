import React from "react";
import styled from "styled-components";
import rotate360 from "./asset/360.json";
import refresh from "./asset/refresh.json";
import LottieComponent from "@/entities/lottie";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: calc(100% - 40px);
  max-width: 1080px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

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
