import { COLORS } from "@/shared/constants/colors";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "@/features/Card";
import { posts, Post } from "@/shared/posts";

const SpiralContainer = styled.div`
  width: 100%;
  max-width: 720px;
  height: calc(100vh - 84px);
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const SpiralSquareContainer = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpiralSquare = styled.div<{
  $size: number;
  $rotation: number;
  $distance: number;
  $isEven: boolean;
}>`
  position: absolute;
  width: fit-content;
  height: fit-content;
  transform: rotate(${(props) => props.$rotation}deg)
    translateY(${(props) => -1 * props.$distance}vh);
  font-size: ${(props) => props.$size * 0.03}vh;
  z-index: ${(props) => props.$size};
  background-color: ${(props) =>
    props.$isEven ? COLORS.secondary : COLORS.accent};
  border-bottom: 1px solid ${COLORS.text};
  padding: 10px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`;

const RotatedButtonContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  max-width: 720px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const RotatedButton = styled.h1`
  cursor: pointer;
  width: 20%;
  text-align: center;
  font-size: 5vh;
  color: ${COLORS.text};
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ModalContent = styled.div`
  background: ${COLORS.background};
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-height: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${COLORS.text};
  font-size: 2rem;
  cursor: pointer;
`;

const Blog: React.FC = () => {
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const titles = [
    "1. 프로그래밍 언어",
    "2. 자료구조와 알고리즘",
    "3. 운영체제",
    "4. 네트워크",
    "5. 데이터베이스",
    "6. 컴퓨터 구조",
    "7. 소프트웨어 공학",
    "8. 디자인 패턴",
    "9. 시스템 설계",
    "10. 컴파일러 이론",
    "11. 분산 시스템",
    "12. 클라우드 컴퓨팅",
    "13. 보안",
    "14. DevOps와 CI/CD",
    "15. 버전 관리",
    "16. 소프트웨어 테스트",
    "17. 객체 지향 설계 원칙",
    "18. 메모리 관리",
    "19. API 설계",
    "20. 블록체인 기술",
    "21. 데이터 처리 및 분석",
    "22. 머신러닝/AI",
    "23. 프론트엔드 개발",
    "24. 백엔드 개발",
    "25. 임베디드 시스템",
    "26. 게임 개발",
  ];
  const rotateSquare = (next: number) => {
    if (nowIndex + next < 0) setNowIndex(0);
    else if (nowIndex + next >= titles.length) setNowIndex(titles.length - 1);
    else setNowIndex(nowIndex + next);
  };
  const squares = titles
    .slice(nowIndex, Math.min(titles.length, nowIndex + 20))
    .map((title, i) => {
      const size = 70 - i * 3; // 사각형의 크기가 점점 줄어듦
      const rotation = i * 45; // 회전 각도 (각 사각형이 회전할 각도)
      const distance = 20 - 0.8 * i; // 중앙에서 떨어진 거리
      const isEven = (nowIndex + i + 1) % 2 === 0; // 짝수인지 여부
      return (
        <SpiralSquare
          key={i}
          $size={size}
          $rotation={rotation}
          $distance={distance}
          $isEven={isEven}
          onClick={() => {
            if (i !== 0) {
              setNowIndex(nowIndex + i);
            }
            setIsOpen(true); // 첫 번째 사각형 클릭 시 모달 열림
          }}
        >
          {title}
        </SpiralSquare>
      );
    });

  return (
    <>
      <SpiralContainer>
        <SpiralSquareContainer>{squares}</SpiralSquareContainer>
        <RotatedButtonContainer>
          <RotatedButton onClick={() => rotateSquare(-1)}>⫷</RotatedButton>
          <RotatedButton onClick={() => setNowIndex(0)}>↻</RotatedButton>
          <RotatedButton onClick={() => rotateSquare(1)}>⫸</RotatedButton>
        </RotatedButtonContainer>
      </SpiralContainer>
      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
            {posts.map((post: Post, index: number) => (
              <Card key={index} post={post} />
            ))}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Blog;
