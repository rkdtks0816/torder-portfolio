// src/widgets/blog/Blog.tsx
import React, { useState } from "react";
import { posts, Post } from "@/shared/posts";
import Spiral from "@/features/Spiral";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  EmptyMessage,
  CloseButton,
} from "@/shared/styles/ModalStyles";
import Card from "@/features/Card";

const Blog: React.FC = () => {
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const titles = [
    "1. 프로그래밍 언어",
    "2. 알고리즘",
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

  const handleSquareClick = (index: number) => {
    setNowIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Spiral titles={titles} onSquareClick={handleSquareClick} />
      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
            <ModalTitle>{titles[nowIndex]}</ModalTitle>
            {posts[nowIndex].length === 0 ? (
              <EmptyMessage>아직 게시글이 없습니다.</EmptyMessage>
            ) : (
              posts[nowIndex].map((post: Post, index: number) => (
                <Card key={index} post={post} />
              ))
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Blog;
