import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";
import MarkdownStyles from "@/shared/styles/MarkdownStyles";

// CardContainer 스타일 정의
const CardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
`;
const Title = styled.h2`
  margin: 0;
`;

const Tag = styled.p`
  color: gray;
  margin: 0;
  margin-top: 10px;
`;
const BackButtonContainer = styled.div`
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
const BackButton = styled.div`
  width: fit-content;
  margin-left: 15px;
  font-size: 24px;
  cursor: pointer;
  color: ${COLORS.text};
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
    width: 0;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const Content = styled.div`
  margin: 50px auto 0 auto;
  padding: 20px;
  width: 60%;
  height: fit-content;

  @media (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;
const ContentHeader = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${COLORS.text};
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
            <BackButtonContainer>
              <BackButton onClick={handleClose}>⫷</BackButton>
            </BackButtonContainer>
            <Content>
              <ContentHeader>
                <Title>{post.title}</Title>
                <Tag>{post.tag}</Tag>
              </ContentHeader>
              <MarkdownStyles>{post.content}</MarkdownStyles>
            </Content>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Card;
