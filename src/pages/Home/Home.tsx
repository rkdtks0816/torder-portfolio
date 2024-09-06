import React, { useState } from "react";
import { Board, Title } from "@/widgets";
import styled from "styled-components";
import { OpenBoardButton } from "@/features/OpenBoardButton";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const BoardContainer = styled.div<{ translateY: number }>`
  position: absolute;
  top: ${(props) => props.translateY}vh; /* translateY 값에 따라 위치 변경 */
  left: 0;
  width: 100%;
  height: 100%; /* 5% 더 보이게 설정 */
  background-color: #f7feff;
  z-index: 100;
  transition: top 0.5s ease-in-out; /* 부드러운 애니메이션 */
`;

const OpenBoardButtonContainer = styled.div`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // 보드가 열렸는지 여부

  // 클릭하면 보드가 올라가거나 내려가는 함수
  const toggleBoard = () => {
    setIsOpen(!isOpen); // 현재 상태를 반전시킴
  };

  return (
    <HomeContainer>
      <Title />
      <OpenBoardButtonContainer onClick={toggleBoard}>
        <OpenBoardButton />
      </OpenBoardButtonContainer>
      <BoardContainer translateY={isOpen ? 0 : 100}>
        <Board />
      </BoardContainer>
    </HomeContainer>
  );
};

export default Home;
