import React, { useState } from "react";
import { BOARD_TYPES } from "./BoardTypes";
import Intro from "../Intro";
import Blog from "../Blog";
import {
  BoardContainer,
  BoardContent,
  BoardHeader,
  BoardTitle,
  BoardMenus,
  BoardMenu,
} from "./BoardStyles";
import Project from "../Project";

const MENU_ITEMS = [
  { type: BOARD_TYPES.intro, label: "소개" },
  { type: BOARD_TYPES.blog, label: "블로그" },
  { type: BOARD_TYPES.project, label: "프로젝트" },
];

const Board: React.FC<{ toggleBoard: () => void }> = ({ toggleBoard }) => {
  const [boardType, setBoardType] = useState(BOARD_TYPES.intro);

  return (
    <BoardContainer>
      <BoardContent>
        <BoardHeader>
          <BoardTitle onClick={toggleBoard}>ssO_Ong</BoardTitle>
          <BoardMenus>
            {MENU_ITEMS.map((item) => (
              <BoardMenu
                key={item.type}
                onClick={() => setBoardType(item.type)}
                $isActive={boardType === item.type}
              >
                {item.label}
              </BoardMenu>
            ))}
          </BoardMenus>
        </BoardHeader>
        {boardType === BOARD_TYPES.intro && <Intro />}
        {boardType === BOARD_TYPES.blog && <Blog />}
        {boardType === BOARD_TYPES.project && <Project />}
      </BoardContent>
    </BoardContainer>
  );
};

export default Board;
