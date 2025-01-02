import React, { useState } from "react";
import { Board, Title } from "@/widgets";
import {
  HomeContainer,
  BoardContainer,
  OpenBoardButtonContainer,
} from "./HomeStyles";
import OpenBoardButton from "@/features/OpenBoardButton";

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
