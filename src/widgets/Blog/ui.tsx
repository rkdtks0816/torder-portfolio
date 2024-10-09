import React from "react";
import styled from "styled-components";
import Card from "@/features/Card";
import posts from "@/shared/constants/posts";

// CardContainer 스타일 정의
const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Blog: React.FC = () => {
  return (
    <CardContainer>
      {posts.map((post: any, index: number) => (
        <Card key={index} post={post} />
      ))}
    </CardContainer>
  );
};

export default Blog;
