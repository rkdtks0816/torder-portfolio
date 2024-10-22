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

const BoardContainer = styled.div<{ $translateY: number }>`
  position: absolute;
  top: ${(props) => props.$translateY}vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7feff;
  z-index: 100;
  transition: top 0.5s ease-in-out;
`;

const OpenBoardButtonContainer = styled.div`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeContainer>
      <Title />
      <OpenBoardButtonContainer onClick={toggleBoard}>
        <OpenBoardButton />
      </OpenBoardButtonContainer>
      <BoardContainer $translateY={isOpen ? 0 : 100}>
        <Board toggleBoard={toggleBoard} />
      </BoardContainer>
    </HomeContainer>
  );
};

export default Home;
