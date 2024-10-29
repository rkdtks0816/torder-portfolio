import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const BoardContent = styled.div`
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

export const BoardHeader = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "HakgyoansimByeolbichhaneul";
`;

export const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.text};
  cursor: pointer;
`;

export const BoardMenus = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const BoardMenu = styled.div<{ $isActive: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.$isActive ? COLORS.text : COLORS.primary)};
  border-bottom: ${(props) =>
    props.$isActive ? `2px solid ${COLORS.text}` : "none"};
`;
