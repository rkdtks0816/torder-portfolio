import React, { useState } from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import * as CardStyles from "./CardStyles";

interface Post {
  title: string;
  tag: string;
  content: string;
}

const Card: React.FC<{ post: Post }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <CardStyles.CardContainer onClick={handleClick}>
        <CardStyles.Title>{post.title}</CardStyles.Title>
        <CardStyles.Tag>{post.tag}</CardStyles.Tag>
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
                <CardStyles.Tag>{post.tag}</CardStyles.Tag>
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
