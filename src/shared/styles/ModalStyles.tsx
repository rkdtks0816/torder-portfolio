import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 10000;
`;

export const ModalTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: ${COLORS.text};
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  background: ${COLORS.background};
  padding: 20px;
  border-radius: 10px;
  margin-top: 5%;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;
`;

export const EmptyMessage = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: ${COLORS.text};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${COLORS.text};
  font-size: 2rem;
  cursor: pointer;
`;
