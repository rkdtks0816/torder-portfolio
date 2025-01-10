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
  width: calc(100% - 40px);
  max-width: 600px;
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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

export const PlusButton = styled.div<{ $isAuthenticated: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  background: ${(props) => (props.$isAuthenticated ? COLORS.text : "#ccc")};
  border-radius: 50%;
  padding: 1px;
  cursor: pointer;
`;
