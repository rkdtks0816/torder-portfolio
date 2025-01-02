import React, { useState } from "react";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import * as CardStyles from "./styles";
import { Post } from "@/shared/interfaces/post";

const Card: React.FC<{ post: Post }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const changeTime = (time: string) =>
    `20${time.slice(0, 2)}년 ${time.slice(2, 4)}월 ${time.slice(4, 6)}일`;
  return (
    <>
      <CardStyles.CardContainer onClick={handleClick}>
        <CardStyles.Title>{post.title}</CardStyles.Title>
        <CardStyles.Tag>{changeTime(post.time)}</CardStyles.Tag>
      </CardStyles.CardContainer>

      {isOpen && (
        <CardStyles.Modal>
          <CardStyles.ModalContent>
            <CardStyles.BackButtonContainer>
              <CardStyles.BackButton onClick={handleClose}>
                ⫷
              </CardStyles.BackButton>
            </CardStyles.BackButtonContainer>
            <CardStyles.Content>
              <CardStyles.ContentHeader>
                <CardStyles.Title>{post.title}</CardStyles.Title>
                <CardStyles.Tag>{`${changeTime(post.time)} | ${
                  post.time[7]
                }`}</CardStyles.Tag>
                <CardStyles.Tag>{"#" + post.tags.join(" #")}</CardStyles.Tag>
              </CardStyles.ContentHeader>
              <MarkdownRenderer content={post.content} />
            </CardStyles.Content>
          </CardStyles.ModalContent>
        </CardStyles.Modal>
      )}
    </>
  );
};

export default Card;
