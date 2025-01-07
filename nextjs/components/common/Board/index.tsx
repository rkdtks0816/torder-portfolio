import React from "react";
import {
  BoardContainer,
  BoardContent,
  BoardHeader,
  BoardTitle,
  BoardMenus,
  BoardMenu,
} from "./styles";
import { PATHS } from "@/shared/constants";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

interface BoardProps {
  RenderComponent: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({ RenderComponent }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const MENU_ITEMS = [
    { path: PATHS.INTRO, label: "소개" },
    { path: PATHS.BLOG.ROOT, label: "블로그" },
    { path: PATHS.PROJECT.ROOT, label: "프로젝트" },
    {
      path: isAuthenticated === false ? PATHS.LOGIN : PATHS.WRITE,
      label: isAuthenticated === false ? "로그인" : "글쓰기",
    },
  ];

  return (
    <BoardContainer>
      <BoardContent>
        <BoardHeader>
          <BoardTitle onClick={() => router.push(PATHS.ROOT)}>
            ssO_Ong
          </BoardTitle>
          <BoardMenus>
            {MENU_ITEMS.map((item) => (
              <BoardMenu
                key={item.path}
                onClick={() => router.push(item.path)}
                $isActive={router.pathname === item.path}
              >
                {item.label}
              </BoardMenu>
            ))}
          </BoardMenus>
        </BoardHeader>
        {RenderComponent}
      </BoardContent>
    </BoardContainer>
  );
};

export default Board;