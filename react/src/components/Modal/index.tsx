import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  CloseButton,
  ModalContainer,
} from "./ModalStyles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer>
        <ModalTitle>
          {title}
          <CloseButton onClick={onClose}>✕</CloseButton>
        </ModalTitle>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
