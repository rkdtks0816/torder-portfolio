import React, { useState } from "react";
import { posts, Post } from "@/posts";
import Spiral from "@/features/Spiral";
import Modal from "@/components/Modal";
import Card from "@/features/Card";
import { titles } from "./BlogTitles";

const Blog: React.FC = () => {
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSquareClick = (index: number) => {
    setNowIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Spiral titles={titles} onSquareClick={handleSquareClick} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={titles[nowIndex]}
      >
        {posts[nowIndex].length === 0 ? (
          <p>아직 게시글이 없습니다.</p>
        ) : (
          posts[nowIndex].map((post: Post, index: number) => (
            <Card key={index} post={post} />
          ))
        )}
      </Modal>
    </>
  );
};

export default Blog;
