import { COLORS } from "@/shared/constants/colors";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 90%;
  background: ${COLORS.background};
  border-radius: 8px;
  overflow: auto;
`;

export const ModalTitle = styled.h2`
  position: sticky;
  top: 0;
  left: 0;
  background: ${COLORS.background};
  margin: 0;
  padding: 20px;
  font-size: 1.5rem;
  width: calc(100% - 40px);
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  padding-top: 0;
  gap: 20px;
`;

export const CloseButton = styled.div`
  color: ${COLORS.text};
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
`;
