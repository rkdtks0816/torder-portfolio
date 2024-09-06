import styled from "styled-components";
import { Card } from "@/features/Card";

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

const BoardTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Board: React.FC = () => {
  return (
    <BoardContainer>
      <BoardContent>
        <BoardTitle>
          <div>ssO_Ong</div>
          <div>ssO_Ong</div>
        </BoardTitle>
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
