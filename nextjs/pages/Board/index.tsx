import React, { useState } from "react";
import {
  BoardContainer,
  BoardContent,
  BoardHeader,
  BoardTitle,
  BoardMenus,
  BoardMenu,
} from "./styles";
import Intro from "@/components/board/Intro";
import Blog from "@/components/board/Blog";
import Project from "@/components/board/Project";

const BOARD_TYPES = {
  intro: "intro",
  blog: "blog",
  project: "project",
};

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
