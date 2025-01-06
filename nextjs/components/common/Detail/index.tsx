import React from "react";
import { useRouter } from "next/router";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import { Post } from "@/shared/interfaces/post";
import { BackButton, BackButtonContainer, Content, ContentHeader, DetailContainer, DetailContent, DetailTag, DetailTitle } from "./styles"

const Detail: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();

  const changeTime = (time: string) =>
    `20${time.slice(0, 2)}년 ${time.slice(2, 4)}월 ${time.slice(4, 6)}일`;
  return (
    <>
        <DetailContainer>
          <DetailContent>
            <BackButtonContainer>
              <BackButton onClick={() => router.back()}>
                ⫷
              </BackButton>
            </BackButtonContainer>
            <Content>
              <ContentHeader>
                <DetailTitle>{post.title}</DetailTitle>
                <DetailTag>{`${changeTime(post.time)} | ${
                  post.time[7]
                }`}</DetailTag>
                <DetailTag>{"#" + post.tags.join(" #")}</DetailTag>
              </ContentHeader>
              <MarkdownRenderer content={post.content} />
            </Content>
          </DetailContent>
        </DetailContainer>
    </>
  );
};

export default Detail;
