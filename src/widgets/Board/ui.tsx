import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";
import { BOARD_TYPES } from "@/shared/constants/boardTypes";
import Intro from "../Intro";
import Blog from "../Blog";

const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const BoardContent = styled.div`
  width: 1830px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 1870px) {
    width: 1460px;
  }
  @media (max-width: 1500px) {
    width: 1090px;
  }
  @media (max-width: 1130px) {
    width: 720px;
  }
  @media (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;

const BoardHeader = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "HakgyoansimByeolbichhaneul";
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.text};
  cursor: pointer;
`;

const BoardMenus = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const BoardMenu = styled.div<{ $isActive: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.$isActive ? COLORS.text : COLORS.primary)};
  border-bottom: ${(props) =>
    props.$isActive ? `2px solid ${COLORS.text}` : "none"};
`;

const Board: React.FC<{ toggleBoard: () => void }> = ({ toggleBoard }) => {
  const [boardType, setBoardType] = useState(BOARD_TYPES.intro);
  return (
    <BoardContainer>
      <BoardContent>
        <BoardHeader>
          <BoardTitle onClick={toggleBoard}>ssO_Ong</BoardTitle>
          <BoardMenus>
            <BoardMenu
              onClick={() => setBoardType(BOARD_TYPES.intro)}
              $isActive={boardType == BOARD_TYPES.intro}
            >
              소개
            </BoardMenu>
            <BoardMenu
              onClick={() => setBoardType(BOARD_TYPES.blog)}
              $isActive={boardType == BOARD_TYPES.blog}
            >
              블로그
            </BoardMenu>
            <BoardMenu
              onClick={() => setBoardType(BOARD_TYPES.project)}
              $isActive={boardType == BOARD_TYPES.project}
            >
              프로젝트
            </BoardMenu>
          </BoardMenus>
        </BoardHeader>
        {boardType == BOARD_TYPES.intro && <Intro />}
        {boardType == BOARD_TYPES.blog && <Blog />}
        {boardType == BOARD_TYPES.project && <div />}
      </BoardContent>
    </BoardContainer>
  );
};

export default Board;
