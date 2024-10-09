import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";
import MarkdownStyles from "@/shared/styles/MarkdownStyles";

// CardContainer 스타일 정의
const CardContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 760px) {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const Tag = styled.p`
  color: gray;
`;

// 전체 화면 모달 스타일
const Modal = styled.div`
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

// 모달 내 내용 스타일
const ModalContent = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${COLORS.text}; // 눈에 잘 보이도록 색상을 흰색으로 설정
`;

const Content = styled.div`
  margin: 60px auto 0 auto;
  width: 70%;
  padding: 25px;

  @media (max-width: 760px) {
    width: 100%;
    height: auto;
  }
`;
interface Post {
  title: string;
  tag: string;
  content: string;
}
const Card: React.FC<{ post: Post }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CardContainer onClick={handleClick}>
        <Title>{post.title}</Title>
        <Tag>{post.tag}</Tag>
      </CardContainer>

      {isOpen && (
        <Modal>
          <ModalContent>
            <BackButton onClick={handleClose}>⫷</BackButton>
            <Content>
              <Title>{post.title}</Title>
              <Tag>{post.tag}</Tag>
              <MarkdownStyles>{post.content}</MarkdownStyles>
            </Content>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Card;
