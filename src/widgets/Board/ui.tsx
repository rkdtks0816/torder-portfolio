import styled from "styled-components";
import { Card } from "@/features/Card";
import { COLORS } from "@/shared/constants/colors";
import { useState } from "react";

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
  margin-bottom: 20px;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.text};
`;

const BoardMenus = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const BoardMenu = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isActive ? COLORS.text : COLORS.primary)};
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${COLORS.text}` : "none"};
`;

const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Board: React.FC<{ toggleBoard: () => void }> = ({ toggleBoard }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <BoardContainer>
      <BoardContent>
        <BoardHeader>
          <BoardTitle onClick={toggleBoard}>ssO_Ong</BoardTitle>
          <BoardMenus>
            <BoardMenu isActive={true}>소개</BoardMenu>
            <BoardMenu isActive={false}>블로그</BoardMenu>
            <BoardMenu isActive={false}>프로젝트</BoardMenu>
          </BoardMenus>
        </BoardHeader>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </BoardContent>
    </BoardContainer>
  );
};

export default Board;
