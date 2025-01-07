import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const DetailTitle = styled.h2`
  margin: 0;
`;

export const DetailTag = styled.p`
  color: gray;
  margin: 0;
  margin-top: 10px;
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
`;

export const BackButton = styled.div`
  width: fit-content;
  margin-left: 15px;
  font-size: 24px;
  cursor: pointer;
  color: ${COLORS.text};
`;

export const DetailContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DetailContent = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Content = styled.div`
  margin: 50px auto 0 auto;
  padding: 20px;
  max-width: 600px;
  width: calc(100% - 40px);
  height: fit-content;
`;

export const ContentHeader = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${COLORS.text};
`;
